const fs = require('fs');
const path = require('path');

const renderBundle = require('../ST.-MHSS/dist-ssr-pages/renderPages.js');
const pages = renderBundle.pages;
const outDir = path.resolve(__dirname);

const pageTitles = {
  'index.html': "St. Michael's Higher Secondary School, Umsning | Admissions & Academics (Estd. 1961)",
  'events.html': "Events & Memorable Moments | St. Michael's Higher Secondary School, Umsning",
  'gallery.html': "Campus Photography & Real Archives | St. Michael's Umsning",
  'who-we-are.html': "Who We Are & School Profile | St. Michael's Umsning",
  'mission-vision.html': "Our Mission, Vision & Objectives | St. Michael's Umsning",
  'notices.html': "Official Notices & Academic Announcements | St. Michael's Umsning",
  'academic-calendar.html': "Academic Calendar 2026-2027 | St. Michael's Umsning",
  'founder.html': "Founder Fr. Michael Balawan | St. Michael's Umsning",
  'leadership.html': "Leadership & Principal Messages | St. Michael's Umsning",
  'student-stats.html': "Student Strength & Board Demographics | St. Michael's Umsning",
  'staff-directory.html': "Teaching Faculty & Staff Directory | St. Michael's Umsning",
  'academic-syllabus.html': "Academic Curriculum & MBOSE Syllabus | St. Michael's Umsning",
  'results-achievements.html': "Board Examination Results & State Merit Honors | St. Michael's Umsning",
  'admissions-fees.html': "Admissions Process & Guidelines 2026-2027 | St. Michael's Umsning",
  'transportation.html': "School Bus Transit & Corridors | St. Michael's Umsning",
  'scholarships.html': "Institutional Scholarships & Student Endowment | St. Michael's Umsning",
  'alumni.html': "Michaelian Alumni Network & Association | St. Michael's Umsning",
  'contact.html': "Contact Us & Campus Location | St. Michael's Umsning",
  'fee-structure.html': "Comprehensive Fee Structure 2026-2027 | St. Michael's Umsning",
  'girls-hostel.html': "Girls Hostel Residence Facility | St. Michael's Umsning",
};

function generateFullHtml(filename, bodyHtml) {
  const title = pageTitles[filename] || "St. Michael's Higher Secondary School, Umsning";

  // Clean asset URLs from /ST.-MHSS/assets/ to ./assets/
  let cleanBody = bodyHtml.replace(/\/ST\.-MHSS\/assets\//g, 'assets/');

  // Clean hashtag navigation into relative HTML page links
  cleanBody = cleanBody
    .replace(/href="#page-who-we-are"/g, 'href="who-we-are.html"')
    .replace(/href="#page-gallery"/g, 'href="gallery.html"')
    .replace(/href="#page-mission-vision"/g, 'href="mission-vision.html"')
    .replace(/href="#page-notices"/g, 'href="notices.html"')
    .replace(/href="#page-events"/g, 'href="events.html"')
    .replace(/href="#page-academic-calendar"/g, 'href="academic-calendar.html"')
    .replace(/href="#page-founder"/g, 'href="founder.html"')
    .replace(/href="#page-leadership"/g, 'href="leadership.html"')
    .replace(/href="#page-student-stats"/g, 'href="student-stats.html"')
    .replace(/href="#page-staff-directory"/g, 'href="staff-directory.html"')
    .replace(/href="#page-academic-syllabus"/g, 'href="academic-syllabus.html"')
    .replace(/href="#page-results-achievements"/g, 'href="results-achievements.html"')
    .replace(/href="#page-admissions-fees"/g, 'href="admissions-fees.html"')
    .replace(/href="#page-transportation"/g, 'href="transportation.html"')
    .replace(/href="#page-scholarships"/g, 'href="scholarships.html"')
    .replace(/href="#page-alumni"/g, 'href="alumni.html"')
    .replace(/href="#page-contact"/g, 'href="contact.html"')
    .replace(/href="#page-fee-structure"/g, 'href="fee-structure.html"')
    .replace(/href="#page-girls-hostel"/g, 'href="girls-hostel.html"')
    .replace(/href="#home"/g, 'href="index.html"');

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#071b36" />
    <link rel="icon" type="image/png" sizes="32x32" href="assets/st-michaels-logo.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="assets/st-michaels-logo.png" />
    <link rel="shortcut icon" type="image/png" href="assets/st-michaels-logo.png" />
    <link rel="apple-touch-icon" href="assets/st-michaels-logo.png" />
    <title>${title}</title>
    <meta name="description" content="Official institutional website for St. Michael's Higher Secondary School, Umsning (Estd. 1961), Ri Bhoi District, Meghalaya." />
    <!-- Preconnect & Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700;900&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    <!-- AOS Animation CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css" />
    <!-- Tailwind & Project Styles -->
    <link rel="stylesheet" href="assets/styles.css" />
  </head>
  <body class="bg-[#F8FAFC] text-slate-800 antialiased selection:bg-[#1B365D] selection:text-white">
    ${cleanBody}

    <!-- AOS Script -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
    <!-- Custom Vanilla JavaScript Controller -->
    <script src="assets/main.js"></script>
  </body>
</html>`;
}

let generatedCount = 0;
for (const [filename, content] of Object.entries(pages)) {
  const fullHtml = generateFullHtml(filename, content);
  fs.writeFileSync(path.join(outDir, filename), fullHtml, 'utf-8');
  console.log(`Generated: ${filename} (${fullHtml.length} bytes)`);
  generatedCount++;
}

console.log(`Successfully generated all ${generatedCount} static HTML pages!`);
