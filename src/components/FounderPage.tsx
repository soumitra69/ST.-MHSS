import React, { useEffect } from 'react';
import { SCHOOL_IMAGES } from '../data/schoolAssets';
import { SCHOOL_INFO } from '../data/schoolData';

export const FOUNDER_ARCHIVE_PDF_URL =
  'https://db.archiviosalesiano.net/files/original/943/BALAWAN_Michael.pdf';

interface FounderPageProps {
  onBack: () => void;
}

const founderCredentials = [
  {
    label: 'Birth Name & Religious Name',
    value: 'Michel Balavoiné • Rev. Fr. Michael Balawan, SDB',
    icon: 'fas fa-id-badge',
  },
  {
    label: 'Date & Place of Birth',
    value: '14 January 1922 • Chartres, France',
    icon: 'fas fa-calendar-day',
  },
  {
    label: 'First Religious Profession (SDB)',
    value: '17 October 1945 • La Guerche (Brittany, France)',
    icon: 'fas fa-cross',
  },
  {
    label: 'Missionary Arrival in India',
    value: '1949 • Salesian Province of Northeast India (Shillong)',
    icon: 'fas fa-ship',
  },
  {
    label: 'Academic Qualifications',
    value: 'B.Sc. & Higher Maths (Chartres & Hoche School, 1938–39) • M.Sc. Mathematics (Gauhati University)',
    icon: 'fas fa-graduation-cap',
  },
  {
    label: 'Priestly Ordination',
    value: '23–24 May 1954 • Cathedral Church, Shillong (by Bishop Stephen Ferrando, SDB)',
    icon: 'fas fa-church',
  },
  {
    label: 'Ordination Motto & Prayer',
    value: '“Euntes Ergo Docete” (Go therefore and teach all nations — Mt. 28:19)',
    icon: 'fas fa-bible',
  },
  {
    label: 'Entered Eternal Rest (R.I.P.)',
    value: '11 October 1989 • Nazareth Hospital, Shillong (Interred 12 Oct 1989, Cathedral Cemetery, Shillong)',
    icon: 'fas fa-dove',
  },
];

const lifeChapters = [
  {
    badge: '1922 – 1945 • Chartres & Brittany, France',
    title: 'Early Years, Mathematics Scholar & Wartime Courage',
    icon: 'fas fa-book-reader',
    paragraphs: [
      'Michael Balavoiné (affectionately known across Meghalaya and Assam as Fr. Michael Balawan) was born on 14 January 1922 at Chartres in France, the second of three sons in a merchant family. He completed his primary and secondary education at Institution Notre Dame in Chartres. Having lost his father at the age of twelve, he excelled in academics—earning his Bachelor’s degree in Mathematics in 1938 and completing higher studies in Mathematics at the Hoche School in 1939.',
      'Every Sunday and Thursday, young Michael cared for children at the “Joan of Arc Club,” where the call to dedicate his life to the priesthood first took root. During the Second World War, he was requisitioned in March 1943 into the S.T.O. (Compulsory Work Service) by the Germans. At the end of 1943 he escaped and sought refuge with the Salesians in Port Binson near Châlons-sur-Marne, where he became an aspirant. Arrested and imprisoned by the Germans, he narrowly escaped deportation due to severe illness, was treated at the hospital in Châlons-sur-Marne until the Liberation of France in 1944, entered the Salesian Novitiate at La Guerche (Brittany), and made his First Religious Profession on 17 October 1945.',
    ],
  },
  {
    badge: '1949 – 1954 • Gauhati University & Shillong',
    title: 'Life as a Salesian, M.Sc. in Mathematics & Priestly Ordination',
    icon: 'fas fa-university',
    paragraphs: [
      'Longing to serve as a missionary, Br. Michael requested an assignment to India and arrived in 1949. Recognizing his brilliant mathematical mind, his superiors advised him to complete university degrees in Science and Mathematics to form young scholars. After earning his M.Sc. degree in Mathematics from Gauhati University, he completed his theological studies in Shillong.',
      'In May 1954 (recorded as 23.05.1954 on his memorial card and the Feast of Mary Help of Christians, 24 May 1954, in the chronicle), Deacon Michael was ordained a priest at the Cathedral Church, Shillong, by His Lordship Bishop Stephen Ferrando, SDB. Rev. Fr. Dal Zavo, Rector of St. Anthony’s College, preached the homily. Fr. Balawan chose as his Ordination motto “Euntes Ergo Docete” (Go therefore and teach all nations — Mt. 28:19), and began his priestly ministry at Don Bosco Shillong while also serving as a lecturer at St. Anthony’s College.',
    ],
  },
  {
    badge: '1961 & Beyond • Umsning, Nongpoh & Ri Bhoi',
    title: 'Founder of St. Michael’s Umsning & Pioneer of Rural Missions',
    icon: 'fas fa-school',
    paragraphs: [
      'Although he held a Master’s degree in Mathematics, Fr. Balawan’s heart burned for remote villages and underserved communities. Like St. Paul of Tarsus, his aim was to go where the Gospel and formal schooling had scarcely reached—carrying out pioneering educational and pastoral work across Umsning, Nongpoh, Sojong, Umswai, Umsohlait, and Namdong.',
      'In 1961, under the Catholic Mission of Umsning (Archdiocese of Shillong), Rev. Fr. Michael Balawan, SDB founded St. Michael’s School at Umsning as a Lower Primary School—planting the seed of what is today St. Michael’s Higher Secondary School (Nursery to Class XII). Alongside establishing schools where he went, he worked tirelessly for the social uplift of the people by constructing village roads, bridges, and culverts.',
    ],
  },
  {
    badge: 'Linguist, Author & “A Priest for Others”',
    title: 'First Karbi Dictionary, Indigenous Literature & Evening of Life',
    icon: 'fas fa-language',
    paragraphs: [
      'A gifted linguist and visionary planner, Fr. Balawan mastered the languages of the people he served. He compiled the first Karbi Dictionary, composed poems, hymns, and dramas in the Karbi and Tiwa (Lalung) languages, and authored Catechism, Science, Geography, History, and Arithmetic textbooks in local tongues, as well as “Baibele History” (A Bible History) in the Tiwa language.',
      'Marked by childlike simplicity and deep Marian devotion, he was revered as “A priest of God to the people.” In his final assignment at Smit (“Ka Iing Khatduh”), he established hostels for boys and girls and was joyfully greeted by village children with the words: “Phadar Balawan, Ia wan.” On 11 October 1989, at the age of 67, Fr. Michael Balawan offered his soul to the Lord at Nazareth Hospital, Shillong. His Requiem Mass at Divine Saviour Parish, Nongthymmai, was presided over by the Archbishop of Shillong–Guwahati along with Bishop Mathai Kochuparampil and 60 concelebrating priests, before he was laid to rest at the Cathedral Cemetery, Shillong on 12 October 1989.',
    ],
  },
];

export const FounderPage: React.FC<FounderPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section
      id="founder-profile-page"
      className="w-full bg-[#f4f7fb] py-10 md:py-16 border-t border-slate-200 min-h-screen"
    >
      <div className="container">
        {/* Top Breadcrumb & Back Navigation Bar */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-xl bg-[#0c4a8a] px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-sm transition-all hover:bg-[#0c2d57] cursor-pointer"
          >
            <i className="fas fa-arrow-left" aria-hidden="true"></i>
            <span>Back to Home Page</span>
          </button>

          <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-600">
            <span className="text-[#0c4a8a]">About</span>
            <i className="fas fa-chevron-right text-[10px] text-slate-400" aria-hidden="true"></i>
            <span className="text-[#d97706]">Founder&apos;s Biography &amp; Official Credentials</span>
          </div>

          <a
            href={FOUNDER_ARCHIVE_PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-amber-300 bg-amber-50 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-amber-900 transition-colors hover:bg-amber-100"
          >
            <i className="fas fa-file-pdf text-[#d97706]" aria-hidden="true"></i>
            <span>Official Salesian Archive PDF</span>
            <i className="fas fa-external-link-alt text-[10px]" aria-hidden="true"></i>
          </a>
        </div>

        {/* Hero Profile Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-[#0c2d57] via-[#0c4a8a] to-[#082040] p-6 text-white shadow-2xl sm:p-8 lg:p-10">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-[#d97706]" />

          <div className="grid gap-8 lg:grid-cols-[340px_1fr] lg:items-center">
            {/* Left Portrait Column */}
            <div className="flex flex-col gap-4">
              <div className="relative overflow-hidden rounded-2xl border-2 border-amber-400/70 bg-slate-900 shadow-2xl">
                <img
                  src={SCHOOL_IMAGES.founderPhoto}
                  alt="Rev. Fr. Michael Balawan, SDB (1922–1989) — Founder of St. Michael's Higher Secondary School, Umsning"
                  className="w-full h-[360px] object-cover object-top"
                />
                <div className="bg-slate-950/90 px-4 py-3 text-center border-t border-amber-400/30">
                  <p className="text-xs font-extrabold uppercase tracking-widest text-amber-300">
                    REV. FR. MICHAEL BALAWAN, S.D.B.
                  </p>
                  <p className="mt-0.5 text-[11px] font-medium text-slate-300">
                    Born: 14.01.1922 • Professed: 17.10.1945 • Ordained: 23.05.1954 • Died: 11.10.1989
                  </p>
                </div>
              </div>

              {/* Secondary Frontal Archival Portrait */}
              <div className="flex items-center gap-3.5 rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur-xs">
                <img
                  src={SCHOOL_IMAGES.founderPortrait}
                  alt="Archival portrait of Rev. Fr. Michael Balawan, SDB"
                  className="h-16 w-16 shrink-0 rounded-xl object-cover border border-amber-300/60"
                />
                <div className="min-w-0">
                  <span className="block text-[10px] font-extrabold uppercase tracking-wider text-amber-300">
                    Archivio Salesiano Centrale • Doc #943
                  </span>
                  <p className="text-xs font-bold text-white leading-snug">
                    French Salesian Missionary, Mathematician, Linguist &amp; Educator
                  </p>
                  <span className="block text-[11px] text-slate-200">
                    Founder of {SCHOOL_INFO.name} (Estd. {SCHOOL_INFO.established})
                  </span>
                </div>
              </div>
            </div>

            {/* Right Biographical Overview & Official Dates */}
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-amber-400 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-950 shadow-sm">
                  <i className="fas fa-cross mr-1.5" aria-hidden="true"></i>
                  Founder&apos;s Profile &amp; Credentials
                </span>
                <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-200">
                  <i className="fas fa-landmark mr-1.5" aria-hidden="true"></i>
                  Founded St. Michael&apos;s Umsning in 1961
                </span>
              </div>

              <h1
                className="vision-serif-heading mt-4 text-3xl sm:text-4xl lg:text-5xl !text-white leading-tight"
                style={{ color: '#ffffff' }}
              >
                Rev. Fr. Michael Balawan, SDB
              </h1>
              <p className="mt-1.5 text-sm sm:text-base font-bold text-amber-300">
                (Born Michel Balavoiné • 14 January 1922, Chartres, France – 11 October 1989, Shillong, Meghalaya)
              </p>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-100">
                <strong>Rev. Fr. Michael Balawan, SDB</strong> was a pioneering French Catholic
                Missionary of the Salesians of Don Bosco, an accomplished mathematician (M.Sc.,
                Gauhati University), a celebrated linguist of indigenous Northeast Indian languages,
                and the visionary founder who started{' '}
                <strong>St. Michael&apos;s School, Umsning</strong> as a Lower Primary School in{' '}
                <strong>1961</strong> under the Catholic Mission of Umsning, Archdiocese of Shillong.
              </p>

              {/* 4 Key Milestone Pills from Page 1 of the Salesian Archive PDF */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="rounded-xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-xs">
                  <span className="block text-[10px] font-extrabold uppercase tracking-widest text-amber-300">
                    Born (Chartres)
                  </span>
                  <strong className="mt-1 block text-base sm:text-lg font-extrabold text-white">
                    14.01.1922
                  </strong>
                  <span className="text-[11px] text-slate-200">Chartres, France</span>
                </div>

                <div className="rounded-xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-xs">
                  <span className="block text-[10px] font-extrabold uppercase tracking-widest text-amber-300">
                    Professed (SDB)
                  </span>
                  <strong className="mt-1 block text-base sm:text-lg font-extrabold text-white">
                    17.10.1945
                  </strong>
                  <span className="text-[11px] text-slate-200">La Guerche, Brittany</span>
                </div>

                <div className="rounded-xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-xs">
                  <span className="block text-[10px] font-extrabold uppercase tracking-widest text-amber-300">
                    Ordained Priest
                  </span>
                  <strong className="mt-1 block text-base sm:text-lg font-extrabold text-white">
                    23.05.1954
                  </strong>
                  <span className="text-[11px] text-slate-200">Cathedral, Shillong</span>
                </div>

                <div className="rounded-xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-xs">
                  <span className="block text-[10px] font-extrabold uppercase tracking-widest text-amber-300">
                    Died (R.I.P.)
                  </span>
                  <strong className="mt-1 block text-base sm:text-lg font-extrabold text-white">
                    11.10.1989
                  </strong>
                  <span className="text-[11px] text-slate-200">Shillong, Meghalaya</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={FOUNDER_ARCHIVE_PDF_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#d97706] px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg transition-transform hover:scale-[1.02]"
                >
                  <i className="fas fa-file-pdf" aria-hidden="true"></i>
                  <span>Open Official Salesian Archive PDF</span>
                  <i className="fas fa-external-link-alt text-[10px]" aria-hidden="true"></i>
                </a>

                <a
                  href={SCHOOL_IMAGES.founderCredentialPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/20"
                >
                  <i className="fas fa-download text-amber-300" aria-hidden="true"></i>
                  <span>View Local Archival Copy</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Verified Archival Credentials Grid */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-8">
          <div className="flex flex-col justify-between gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-end">
            <div>
              <span className="inline-block rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-amber-900">
                <i className="fas fa-certificate mr-1.5 text-[#d97706]" aria-hidden="true"></i>
                Verified Biographical &amp; Ecclesiastical Record
              </span>
              <h2 className="vision-serif-heading mt-2 text-2xl sm:text-3xl text-[#0c4a8a]">
                <span className="vision-double-angle" aria-hidden="true">
                  &raquo;
                </span>{' '}
                Founder&apos;s Official Credentials
              </h2>
            </div>
            <a
              href={FOUNDER_ARCHIVE_PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#0c4a8a] hover:text-[#d97706] underline"
            >
              Source: db.archiviosalesiano.net/files/original/943/BALAWAN_Michael.pdf
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {founderCredentials.map((cred) => (
              <div
                key={cred.label}
                className="flex flex-col justify-between rounded-xl border border-slate-200 border-t-4 border-t-[#0c4a8a] bg-[#f8fafc] p-4 shadow-xs"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#d97706]">
                    <i className={cred.icon} aria-hidden="true"></i>
                    <span>{cred.label}</span>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm font-bold leading-relaxed text-[#0c4a8a]">
                    {cred.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Biography Chapters & Original Memorial Card */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-8 space-y-6">
            {lifeChapters.map((chapter) => (
              <article
                key={chapter.title}
                className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-7"
              >
                <div className="absolute inset-x-0 top-0 h-1.5 bg-[#0c4a8a]" />
                <span className="inline-flex items-center rounded-full bg-blue-50 border border-blue-200 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#0c4a8a]">
                  <i className={`${chapter.icon} mr-1.5 text-[#d97706]`} aria-hidden="true"></i>
                  {chapter.badge}
                </span>
                <h3 className="vision-serif-heading mt-2.5 text-xl sm:text-2xl text-[#0c4a8a]">
                  <span className="vision-double-angle" aria-hidden="true">
                    &raquo;
                  </span>{' '}
                  {chapter.title}
                </h3>
                <div className="mt-3 space-y-3 text-xs sm:text-sm font-medium leading-7 text-slate-700">
                  {chapter.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* Right Sidebar: Original Memorial Card & Archival Citation */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-md">
              <span className="inline-block rounded-full bg-amber-50 border border-amber-200 px-3 py-0.5 text-[11px] font-extrabold uppercase tracking-wider text-amber-900">
                <i className="fas fa-scroll mr-1.5 text-[#d97706]" aria-hidden="true"></i>
                Original Archival Memorial Card (1989)
              </span>
              <div className="mt-3 overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                <img
                  src={SCHOOL_IMAGES.founderMemorialCard}
                  alt="Original 1989 Salesian Memorial Card of Rev. Fr. Michael Balawan, SDB"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-xs font-medium leading-relaxed text-slate-600">
                Cover page of the official Salesian mortuary chronicle issued by{' '}
                <strong>Rev. Fr. Herman, SDB</strong> (Parish Priest, Nongthymmai, Shillong) in
                October 1989, preserved in the <em>Archivio Salesiano Centrale</em>.
              </p>
              <a
                href={FOUNDER_ARCHIVE_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#0c4a8a] px-4 py-3 text-xs font-extrabold uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-[#0c2d57]"
              >
                <i className="fas fa-external-link-alt" aria-hidden="true"></i>
                <span>Read Full 6-Page Archival PDF</span>
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-[#0c2d57] p-6 text-white shadow-md">
              <p className="text-xs font-extrabold uppercase tracking-wider text-amber-300">
                <i className="fas fa-quote-left mr-1.5" aria-hidden="true"></i>
                Founder&apos;s Ordination Prayer
              </p>
              <blockquote className="mt-2.5 text-sm italic leading-relaxed text-slate-100">
                &ldquo;That never any boy entrusted to my care die accidentally... Euntes Ergo
                Docete — Go therefore and teach all nations (Mt. 28:19).&rdquo;
              </blockquote>
              <p className="mt-3 text-xs font-bold text-amber-300">
                — Rev. Fr. Michael Balawan, SDB (1922–1989)
              </p>
            </div>
          </aside>
        </div>

        {/* Bottom Back Navigation */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div>
            <strong className="block text-sm font-extrabold text-[#0c4a8a]">
              St. Michael&apos;s Higher Secondary School, Umsning
            </strong>
            <span className="text-xs font-medium text-slate-600">
              Founded in 1961 by Rev. Fr. Michael Balawan, SDB • Catholic Mission of Umsning, Archdiocese of Shillong
            </span>
          </div>
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-xl bg-[#0c4a8a] px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-sm transition-colors hover:bg-[#0c2d57] cursor-pointer"
          >
            <i className="fas fa-arrow-left" aria-hidden="true"></i>
            <span>Return to Main Website</span>
          </button>
        </div>
      </div>
    </section>
  );
};
