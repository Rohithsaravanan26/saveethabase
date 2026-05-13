# SaveethaBase

SaveethaBase is a student-focused academic resource platform built for Saveetha Engineering College students. It helps students access, share, request, and manage study materials in one centralized digital platform.

The project is designed to reduce the difficulty of finding academic resources such as notes, documents, previous materials, and student-shared files by providing a modern web-based resource hub.

## Live Demo

Live Website: https://www.saveethabase.app/

GitHub Repository: https://github.com/Rohithsaravanan26/saveethabase

## About the Project

Students often struggle to find study materials, notes, references, and useful academic files in one place. SaveethaBase solves this problem by creating a centralized academic resource platform where students can discover, upload, request, and download resources.

The platform is built using a modern full-stack architecture with Next.js, Supabase, and Vercel. It includes database schema files, storage migrations, download URL handling, request management, and social/community feature support.

SaveethaBase is created to make academic resource sharing easier, faster, and more organized for students.

## Key Features

- Centralized academic resource platform
- Student-focused study material sharing
- Resource upload support
- Resource download support
- Download URL management
- Resource request system
- Expanded request handling
- Supabase database integration
- Supabase storage support
- Storage migration support
- Social/community feature support
- File cleanup and management scripts
- Responsive web interface
- Vercel deployment-ready setup
- Custom domain deployment

## Tech Stack

### Frontend

- Next.js
- React
- JavaScript
- CSS

### Backend and Database

- Supabase
- PostgreSQL
- SQL
- PLpgSQL

### Storage

- Supabase Storage
- File storage migration support
- Download URL handling

### Deployment

- Vercel
- Custom domain

## Project Workflow

1. Student opens the SaveethaBase platform.
2. Student browses available academic resources.
3. Student can search or explore study materials.
4. Student can upload useful academic files.
5. Student can request unavailable materials.
6. Uploaded resources are stored and managed through backend storage.
7. Download links are generated or managed for easy access.
8. The platform helps students access academic resources in a more organized way.

## Folder Structure

```text
saveethabase/
│
├── app/
│   └── Next.js application routes and pages
│
├── components/
│   └── Reusable UI components
│
├── lib/
│   └── Utility functions, Supabase setup, and helper logic
│
├── public/
│   └── Static assets
│
├── scripts/
│   └── Utility and database/storage scripts
│
├── supabase_schema.sql
│   └── Main Supabase database schema
│
├── migration_supabase_storage.sql
│   └── Supabase storage migration
│
├── migration_add_download_url.sql
│   └── Download URL field migration
│
├── migration_social_features.sql
│   └── Social/community feature migration
│
├── migration_expand_requests_table.sql
│   └── Request table expansion migration
│
├── cleanup_all_files.sql
│   └── File cleanup script
│
├── test-storage.js
│   └── Storage testing script
│
├── vercel.json
│   └── Vercel deployment configuration
│
├── package.json
└── README.md
```

## Installation and Setup

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/Rohithsaravanan26/saveethabase.git
```

### 2. Navigate to the Project Folder

```bash
cd saveethabase
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Create Environment File

Create a `.env.local` file in the root directory.

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

Do not upload `.env.local` to GitHub.

### 5. Run the Development Server

```bash
npm run dev
```

The project will run locally at:

```text
http://localhost:3000
```

## Supabase Setup

To set up the database and storage:

1. Create a Supabase project.
2. Open the Supabase SQL editor.
3. Run the main schema file.
4. Apply migration files based on project requirements.
5. Configure Supabase Storage buckets.
6. Add storage policies if required.
7. Add the required environment variables to `.env.local`.
8. Restart the development server.

Recommended SQL setup order:

```text
supabase_schema.sql
migration_supabase_storage.sql
migration_add_download_url.sql
migration_expand_requests_table.sql
migration_social_features.sql
```

If needed, use cleanup scripts carefully:

```text
cleanup_all_files.sql
```

## Storage Setup

SaveethaBase uses storage-related migrations and scripts for handling uploaded academic files.

Recommended storage setup:

1. Create a Supabase Storage bucket for resources.
2. Configure upload permissions.
3. Configure download permissions.
4. Apply storage migration SQL files.
5. Test upload and download flow.
6. Run `test-storage.js` if storage testing is required.

## Available Scripts

### Start Development Server

```bash
npm run dev
```

Runs the app in development mode.

### Build for Production

```bash
npm run build
```

Creates an optimized production build.

### Start Production Server

```bash
npm start
```

Runs the production build locally.

### Run Lint Check

```bash
npm run lint
```

Checks the project for code quality and linting issues.

## Deployment

The project is deployed with Vercel and uses a custom domain.

Live website:

```text
https://www.saveethabase.app/
```

To deploy your own version:

1. Push the project to GitHub.
2. Open Vercel.
3. Import the GitHub repository.
4. Add the required environment variables.
5. Configure the custom domain if needed.
6. Deploy the project.
7. Test resource upload, download, and request features after deployment.

## Use Cases

SaveethaBase can be used for:

- Academic resource sharing
- Student notes collection
- Previous material access
- Subject-wise study material management
- Student resource requests
- College-level knowledge sharing
- Digital academic file management
- Community-based study support

## Screenshots

Add your project screenshots inside a `docs` or `public/screenshots` folder and update the image paths below.

```markdown
![Home Page](docs/home.png)
![Resources Page](docs/resources.png)
![Upload Resource](docs/upload-resource.png)
![Request Resource](docs/request-resource.png)
![Resource Details](docs/resource-details.png)
```

## Future Improvements

- Add advanced resource search
- Add department-wise filtering
- Add semester-wise filtering
- Add subject-wise resource categories
- Add user authentication
- Add admin moderation panel
- Add resource approval workflow
- Add report inappropriate content option
- Add resource ratings
- Add comments and discussions
- Add bookmark/save resource feature
- Add download analytics
- Add trending resources section
- Add AI-based resource recommendations
- Add mobile app version
- Add notification system
- Add PDF preview support
- Add contributor leaderboard

## Project Status

SaveethaBase is currently under development. The project already includes the main application structure, database schema, storage migrations, request-related migrations, social feature migrations, and deployment configuration.

## Author

Rohith Saravanan

GitHub: https://github.com/Rohithsaravanan26

## Acknowledgement

This project was created to support students by making academic resources easier to find, share, and manage. SaveethaBase aims to build a useful student community platform for academic collaboration and resource sharing.

## License

This project can be released under the MIT License.

You can add a `LICENSE` file to the repository if you want others to use, modify, and contribute to the project.

Recommended license:

```text
MIT License
```
