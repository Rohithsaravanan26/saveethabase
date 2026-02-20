export default function sitemap() {
    const baseUrl = 'https://saveethabase.app';

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog/how-to-prepare-for-cia-exams`,
            lastModified: new Date('2026-02-15'),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog/effective-study-techniques-for-engineering`,
            lastModified: new Date('2026-02-10'),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog/how-to-write-lab-records`,
            lastModified: new Date('2026-02-05'),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog/semester-exam-preparation-strategy`,
            lastModified: new Date('2026-01-28'),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog/collaborative-learning-benefits`,
            lastModified: new Date('2026-01-20'),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog/how-to-score-well-in-semester-exams`,
            lastModified: new Date('2026-02-14'),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog/time-management-tips-for-engineering-students`,
            lastModified: new Date('2026-02-12'),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog/best-free-resources-for-cse-students`,
            lastModified: new Date('2026-02-09'),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog/understanding-cgpa-vs-sgpa`,
            lastModified: new Date('2026-02-08'),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog/top-mistakes-students-make-during-exams`,
            lastModified: new Date('2026-02-06'),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog/how-to-use-previous-year-questions`,
            lastModified: new Date('2026-02-04'),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog/digital-note-taking-vs-handwritten-notes`,
            lastModified: new Date('2026-02-02'),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog/how-to-prepare-for-lab-viva`,
            lastModified: new Date('2026-02-01'),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog/how-to-prepare-mini-project-report`,
            lastModified: new Date('2026-01-30'),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog/how-to-create-effective-study-group`,
            lastModified: new Date('2026-01-25'),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ];
}
