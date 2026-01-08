-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users/Profiles table
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  avatar_url TEXT,
  department VARCHAR(50),
  year INTEGER,
  points INTEGER DEFAULT 0,
  uploads_count INTEGER DEFAULT 0,
  likes_received INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Files table
CREATE TABLE public.files (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(500) NOT NULL,
  subject_name VARCHAR(255) NOT NULL,
  subject_code VARCHAR(50) NOT NULL,
  faculty VARCHAR(255),
  category VARCHAR(100) NOT NULL,
  department VARCHAR(50) NOT NULL,
  year INTEGER NOT NULL,
  semester INTEGER NOT NULL,
  file_url TEXT NOT NULL,
  file_type VARCHAR(50) NOT NULL,
  cloudinary_public_id TEXT NOT NULL,
  uploader_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  uploader_name VARCHAR(255),
  uploader_avatar TEXT,
  upload_date TIMESTAMP DEFAULT NOW(),
  downloads INTEGER DEFAULT 0,
  likes INTEGER DEFAULT 0
);

-- Requests table
CREATE TABLE public.requests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(500) NOT NULL,
  description TEXT NOT NULL,
  subject_code VARCHAR(50),
  subject_name VARCHAR(255),
  requester_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  requester_name VARCHAR(255),
  upvotes INTEGER DEFAULT 0,
  status VARCHAR(50) DEFAULT 'pending',
  created_date TIMESTAMP DEFAULT NOW()
);

-- Request upvotes table
CREATE TABLE public.request_upvotes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  request_id UUID REFERENCES public.requests(id) ON DELETE CASCADE,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(request_id, user_id)
);

-- File likes table
CREATE TABLE public.file_likes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  file_id UUID REFERENCES public.files(id) ON DELETE CASCADE,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(file_id, user_id)
);

-- Create indexes
CREATE INDEX idx_files_subject_code ON public.files(subject_code);
CREATE INDEX idx_files_department ON public.files(department);
CREATE INDEX idx_files_category ON public.files(category);
CREATE INDEX idx_files_year ON public.files(year);

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.files ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.request_upvotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.file_likes ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Public profiles viewable by everyone" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Files viewable by everyone" ON public.files FOR SELECT USING (true);
CREATE POLICY "Authenticated users can upload" ON public.files FOR INSERT WITH CHECK (auth.uid() = uploader_id);
CREATE POLICY "Users can update own files" ON public.files FOR UPDATE USING (auth.uid() = uploader_id);

CREATE POLICY "Requests viewable by everyone" ON public.requests FOR SELECT USING (true);
CREATE POLICY "Authenticated users can create requests" ON public.requests FOR INSERT WITH CHECK (auth.uid() = requester_id);

CREATE POLICY "Upvotes viewable by everyone" ON public.request_upvotes FOR SELECT USING (true);
CREATE POLICY "Authenticated users can upvote" ON public.request_upvotes FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Likes viewable by everyone" ON public.file_likes FOR SELECT USING (true);
CREATE POLICY "Authenticated users can like" ON public.file_likes FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, name, avatar_url)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'name', NEW.email),
    NEW.raw_user_meta_data->>'avatar_url'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Reviews table
CREATE TABLE public.reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  resource_id UUID REFERENCES public.files(id) ON DELETE CASCADE,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  helpful_count INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(resource_id, user_id)
);

-- Comments table
CREATE TABLE public.comments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  resource_id UUID REFERENCES public.files(id) ON DELETE CASCADE,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  text TEXT NOT NULL,
  parent_id UUID REFERENCES public.comments(id) ON DELETE CASCADE,
  likes INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Notifications table
CREATE TABLE public.notifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  type VARCHAR(50) NOT NULL, -- achievement, review, download, comment, request, like, system
  title VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- User Achievements table
CREATE TABLE public.user_achievements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  achievement_id VARCHAR(50) NOT NULL,
  progress INTEGER DEFAULT 0,
  unlocked_at TIMESTAMP,
  UNIQUE(user_id, achievement_id)
);

-- Enable RLS for new tables
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_achievements ENABLE ROW LEVEL SECURITY;

-- RLS Policies for Reviews
CREATE POLICY "Reviews viewable by everyone" ON public.reviews FOR SELECT USING (true);
CREATE POLICY "Authenticated users can add reviews" ON public.reviews FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can delete own reviews" ON public.reviews FOR DELETE USING (auth.uid() = user_id);

-- RLS Policies for Comments
CREATE POLICY "Comments viewable by everyone" ON public.comments FOR SELECT USING (true);
CREATE POLICY "Authenticated users can add comments" ON public.comments FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can delete own comments" ON public.comments FOR DELETE USING (auth.uid() = user_id);

-- RLS Policies for Notifications
CREATE POLICY "Users can view own notifications" ON public.notifications FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "System can insert notifications" ON public.notifications FOR INSERT WITH CHECK (true);
CREATE POLICY "Users can update own notifications" ON public.notifications FOR UPDATE USING (auth.uid() = user_id);

-- RLS Policies for Achievements
CREATE POLICY "Achievements viewable by everyone" ON public.user_achievements FOR SELECT USING (true);
CREATE POLICY "System can insert/update achievements" ON public.user_achievements FOR ALL USING (true);

-- Indexes
CREATE INDEX idx_reviews_resource ON public.reviews(resource_id);
CREATE INDEX idx_comments_resource ON public.comments(resource_id);
CREATE INDEX idx_notifications_user ON public.notifications(user_id);
