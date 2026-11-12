import { SCHOOL_IMAGES } from './schoolAssets';

export interface Notice {
  id: string;
  title: string;
  date: string;
  category: 'Academic' | 'Examination' | 'Sports' | 'Admissions' | 'Holiday' | 'General';
  description: string;
  fileSize?: string;
  isUrgent?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Campus' | 'Toppers' | 'Sports' | 'Cultural' | 'Environment';
  src: string;
  description: string;
  aspect?: string;
}

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  department: string;
  qualification: string;
  experience: string;
  image?: string;
}

export interface StreamSubjectGroup {
  category: string;
  list: string[];
}

export interface StreamInfo {
  name: string;
  tagline: string;
  compulsorySubjects?: string[];
  electiveSubjects?: string[];
  fourthSubject?: string;
  eligibilityNote?: string;
  subjects: string[];
  features: string[];
}

export interface FeeItem {
  classGroup: string;
  admissionFee: string;
  tuitionFeeQuarterly: string;
  examFeeAnnual: string;
  labAndComputerAnnual: string;
  sportsAndLibraryAnnual: string;
  totalAnnualEstimate: string;
}

export const SCHOOL_INFO = {
  name: "St. Michael's Higher Secondary School",
  shortName: "St. Michael's Umsning",
  subTitle: "A premier Diocesan coeducational institution for learning, character & service · Umsning, Meghalaya",
  mottoLatin: "Excelsior",
  mottoKhasi: "Shaphrang",
  mottoMeaning: "Ever Upward · Step Forward with Courage",
  established: 1961,
  affiliation: "Affiliated with the Meghalaya Board of School Education (MBOSE) under the Catholic Diocese of Shillong",
  schoolCode: "MBOSE-01961",
  district: "Ri Bhoi District",
  state: "Meghalaya",
  pincode: "793105",
  address: "Umsning Town, NH-6 Corridor, Ri Bhoi District, Meghalaya - 793105, India",
  phone: "+91 3638 264218",
  phoneMobile: "+91 94361 02845",
  email: "stmichaelumsning@gmail.com",
  officeHours: "Mon – Fri: 8:45 AM – 11:55 AM & 12:35 PM – 3:00 PM (Sat & Sun Closed)",
  studentCount: "2,000+",
  facultyCount: "68+",
  classes: "Nursery & Kindergarten to Class XII (Arts, Science & Commerce)",
  logo: SCHOOL_IMAGES.logo,
  campusHero: SCHOOL_IMAGES.campus,
  liveUrl: "https://soumitra69.github.io/ST.-MHSS/",
};

export const NOTICES: Notice[] = [
  {
    id: "not-01",
    title: "Felicitations to MBOSE SSLC State Merit Topper 2026",
    date: "April 18, 2026",
    category: "Academic",
    isUrgent: true,
    description: "Hon'ble Chief Minister of Meghalaya Shri Conrad K. Sangma and Minister of Education Shri Lahkmen Rymbui felicitated our student for exceptional merit in the Secondary School Leaving Certificate (SSLC) Examination 2026. St. Michael's Award Body presented a cash scholarship of ₹20,000.",
    fileSize: "1.2 MB PDF"
  },
  {
    id: "not-02",
    title: "Class XI Higher Secondary Admissions Open (Arts, Science & Commerce)",
    date: "April 12, 2026",
    category: "Admissions",
    isUrgent: true,
    description: "Online and on-campus application forms for admission into Class XI for the academic session 2026-2027 are now available. Merit-based cutoffs and scholarship opportunities for high performers.",
    fileSize: "840 KB PDF"
  },
  {
    id: "not-03",
    title: "Annual Sports Meet & Drill Display 2026 - Concluding Highlights",
    date: "March 28, 2026",
    category: "Sports",
    isUrgent: false,
    description: "The Annual Sports Meet featuring inter-house track & field, mass PT drill, and synchronized musical formations concluded with St. Michael House clinching the overall championship trophy.",
    fileSize: "2.4 MB PDF"
  },
  {
    id: "not-04",
    title: "Class XII Geography & Environmental Field Work Excursion",
    date: "March 15, 2026",
    category: "Academic",
    isUrgent: false,
    description: "Senior secondary students of Class XII Geography conducted practical fieldwork and landscape survey across the Ri Bhoi watershed region as part of MBOSE practical curriculum.",
    fileSize: "1.5 MB PDF"
  },
  {
    id: "not-05",
    title: "Observation of World No Tobacco Day & Health Awareness Campaign",
    date: "March 02, 2026",
    category: "General",
    isUrgent: false,
    description: "Staff and over 600 senior students carried out an educational community rally and poster presentation in Umsning town promoting clean, substance-free youth living.",
    fileSize: "680 KB PDF"
  },
  {
    id: "not-06",
    title: "Quarterly Assessment & Unit Test Schedule - Classes I to X",
    date: "February 22, 2026",
    category: "Examination",
    isUrgent: false,
    description: "Detailed datesheet for the First Terminal Assessment has been posted on the student notice board. Parents are requested to ensure regular revision and attendance.",
    fileSize: "520 KB PDF"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-01",
    title: "Historic Campus Facade & St. Michael Archangel Tower",
    category: "Campus",
    src: SCHOOL_IMAGES.campus,
    description: "The iconic multi-story red-brick building with amphitheatre spectator stairs and central St. Michael Archangel statue, established in 1961."
  },
  {
    id: "gal-02",
    title: "SSLC Topper Honored by CM Conrad K. Sangma",
    category: "Toppers",
    src: SCHOOL_IMAGES.awardPresentation,
    description: "St. Michael's SSLC board rank holder felicitated by Hon'ble Chief Minister of Meghalaya Shri Conrad K. Sangma at the official state ceremony."
  },
  {
    id: "gal-03",
    title: "State Felicitation Ceremony with Education Minister",
    category: "Toppers",
    src: SCHOOL_IMAGES.stateCeremony,
    description: "Dignitaries, school management, and Meghalaya Education Minister celebrating outstanding academic achievement."
  },
  {
    id: "gal-04",
    title: "St. Michael's ₹20,000 Excellence Cash Award Presentation",
    category: "Toppers",
    src: SCHOOL_IMAGES.studentAwards,
    description: "School management and Reverend Sisters presenting the merit scholarship cheque to the SSLC State Topper on campus."
  },
  {
    id: "gal-05",
    title: "Morning Assembly of 2,000 Students on School Ground",
    category: "Campus",
    src: SCHOOL_IMAGES.campusAssembly,
    description: "Massive morning assembly overlooking the lush pine hills of Umsning with students gathered for hymn and prayer."
  },
  {
    id: "gal-06",
    title: "Amphitheatre Assembly during Cultural Program",
    category: "Cultural",
    src: SCHOOL_IMAGES.culture,
    description: "The grand stone-tiered amphitheatre stairs filled with hundreds of students witnessing traditional performance."
  },
  {
    id: "gal-07",
    title: "National Sports Day Athletes & Medallists",
    category: "Sports",
    src: SCHOOL_IMAGES.sports,
    description: "Student athletes proudly showing merit certificates and shields at the National Sports Day 2026 celebration."
  },
  {
    id: "gal-08",
    title: "Boys Athletic Champions with School Sports Trophies",
    category: "Sports",
    src: SCHOOL_IMAGES.sports,
    description: "Inter-house football, basketball, and track winners posing with Reverend Sister and sports instructors."
  },
  {
    id: "gal-09",
    title: "Graduates in Traditional Khasi Attire (Jainsem)",
    category: "Cultural",
    src: SCHOOL_IMAGES.culture,
    description: "Senior secondary graduating class adorned in graceful silk Khasi Jainsem and formal suits on school steps."
  },
  {
    id: "gal-10",
    title: "Traditional Dance Performance on Open Courtyard",
    category: "Cultural",
    src: SCHOOL_IMAGES.culture,
    description: "Students performing traditional Meghalaya folk choreography during annual cultural festival."
  },
  {
    id: "gal-11",
    title: "School Choir Performance with Multi-Part Harmony",
    category: "Cultural",
    src: SCHOOL_IMAGES.choir,
    description: "The St. Michael's choral ensemble performing hymns and regional choral music in formal uniform."
  },
  {
    id: "gal-12",
    title: "Class XII Geography Fieldwork Excursion Bus Trip",
    category: "Environment",
    src: SCHOOL_IMAGES.fieldwork,
    description: "Senior Class XII geography students on their regional geographic field study trip in Ri Bhoi District."
  },
  {
    id: "gal-13",
    title: "Eco Club Sapling Plantation Drive for Green Umsning",
    category: "Environment",
    src: SCHOOL_IMAGES.environment,
    description: "Students holding indigenous forest saplings during World Environment Day campus tree plantation."
  },
  {
    id: "gal-14",
    title: "World No Tobacco Day Student Awareness Campaign",
    category: "Environment",
    src: SCHOOL_IMAGES.awareness,
    description: "Students displaying hand-drawn posters advocating healthy living and community wellness."
  },
  {
    id: "gal-15",
    title: "St. Michael's Dedicated Faculty & Staff Fraternity",
    category: "Campus",
    src: SCHOOL_IMAGES.staff,
    description: "Teachers, administrative staff, and Reverend Sisters on an annual institutional retreat in Meghalaya."
  },
  {
    id: "gal-16",
    title: "Senior School Leadership & Speech Presentation",
    category: "Campus",
    src: SCHOOL_IMAGES.studentLeaders,
    description: "Student leaders delivering morning assembly address from the institutional wooden lectern."
  }
];

export const HOUSES = [
  {
    name: "St. Michael House",
    color: "Red",
    bgClass: "bg-red-700 text-white",
    borderClass: "border-red-600",
    motto: "Quis Ut Deus (Who is Like God)",
    captain: "Markus Kharsyntiew (Class XII)",
    viceCaptain: "Grace Lyndem (Class XI)",
    points: 1240,
    trophies: "Annual Sports Champions 2025-26"
  },
  {
    name: "St. Gabriel House",
    color: "Blue",
    bgClass: "bg-blue-800 text-white",
    borderClass: "border-blue-700",
    motto: "Fortitudo Mea Deus (God is My Strength)",
    captain: "Bantei Marbaniang (Class XII)",
    viceCaptain: "Angela Syiem (Class XI)",
    points: 1180,
    trophies: "Choral & Debate Winners 2025"
  },
  {
    name: "St. Raphael House",
    color: "Green",
    bgClass: "bg-emerald-800 text-white",
    borderClass: "border-emerald-700",
    motto: "Medicina Dei (God Heals)",
    captain: "Emiki Dkhar (Class XII)",
    viceCaptain: "Jessica Rymbai (Class XI)",
    points: 1120,
    trophies: "Science & Eco Exhibition Cup"
  },
  {
    name: "St. Uriel House",
    color: "Yellow / Gold",
    bgClass: "bg-amber-600 text-white",
    borderClass: "border-amber-500",
    motto: "Ignis Dei (Fire of Wisdom)",
    captain: "Pynshai Nongrum (Class XII)",
    viceCaptain: "Cynthia Mawlong (Class XI)",
    points: 1095,
    trophies: "Drama & Cultural Trophy 2025"
  }
];

export const STREAMS: StreamInfo[] = [
  {
    name: "1. Science Stream",
    tagline: "Rigorous scientific inquiry, theory & modern laboratory practicals under MBOSE curriculum.",
    compulsorySubjects: ["English", "MIL / Alternative English", "Environmental Education"],
    electiveSubjects: ["Physics", "Chemistry", "Mathematics"],
    fourthSubject: "Biology / Computer Science / Geography",
    eligibilityNote: "If you wish to apply for Class XI Science, you must, at least, have secured 60% in aggregate and 50% (Theory) in Science and Mathematics at the Secondary School Leaving Certificate (SSLC) / Equivalent Examinations.",
    subjects: ["English", "MIL / Alt English", "Environmental Education", "Physics", "Chemistry", "Mathematics", "Biology", "Computer Science", "Geography"],
    features: [
      "Compulsory: English, MIL/Alternative English, Environmental Education",
      "Electives: Physics, Chemistry, Mathematics",
      "4th Subject: Biology / Computer Science / Geography",
      "Cut-off: 60% aggregate & 50% in Science & Math theory"
    ]
  },
  {
    name: "2. Commerce Stream",
    tagline: "Developing financial expertise, accountancy principles, business acumen & entrepreneurship.",
    compulsorySubjects: ["English", "MIL / Alternative English", "Environmental Education"],
    electiveSubjects: ["Economics", "Accountancy", "Business Studies"],
    fourthSubject: "Mathematics / Entrepreneurship",
    eligibilityNote: "If you wish to apply for Class XI Commerce, you should have secured at least 55% in aggregate and 45% in Mathematics (Theory) at the Secondary School Leaving Certificate (SSLC) / Equivalent Examinations.",
    subjects: ["English", "MIL / Alt English", "Environmental Education", "Economics", "Accountancy", "Business Studies", "Mathematics", "Entrepreneurship"],
    features: [
      "Compulsory: English, MIL/Alternative English, Environmental Education",
      "Electives: Economics, Accountancy, Business Studies",
      "4th Subject: Mathematics / Entrepreneurship",
      "Cut-off: 55% aggregate & 45% in Mathematics theory"
    ]
  },
  {
    name: "3. Arts Stream",
    tagline: "Humanities, social sciences, languages, Khasi literature & civil service foundation.",
    compulsorySubjects: ["English", "MIL / Alternative English", "Environmental Education"],
    electiveSubjects: ["Political Science", "Economics", "Education", "S.L (Elective Khasi)", "Philosophy / History", "Geography / Computer Science"],
    fourthSubject: "Any fourth subject from elective offerings (advisable)",
    eligibilityNote: "If you wish to apply for Class XI Arts, you should have obtained at least 55% in aggregate at the Secondary School Leaving Certificate (SSLC) / Equivalent Examinations. Further, you may opt for any three elective subjects along with one fourth subject. It is advisable to take the fourth subject as well.",
    subjects: ["English", "MIL / Alt English", "Environmental Education", "Political Science", "Economics", "Education", "Elective Khasi", "Philosophy / History", "Geography / Computer Science"],
    features: [
      "Compulsory: English, MIL/Alternative English, Environmental Education",
      "Electives: Political Science, Economics, Education, S.L (Elective Khasi), Philosophy/History, Geography/Computer Sc.",
      "Flexibility: 3 electives + 1 advisable fourth subject",
      "Cut-off: 55% aggregate at SSLC / Equivalent"
    ]
  },
  {
    name: "4. Vocational Stream",
    tagline: "Job-ready vocational education under NEP framework with Computer Techniques & Poultry Farming courses.",
    compulsorySubjects: ["Computer Techniques (2-Year Course)", "Poultry Farming (PF)"],
    electiveSubjects: [
      "Computer Tech Subjects: English, Environmental Ed., Computer Fundamentals & Operating System & Utilities, Programming in C, DBMS-Fox Pro, DTP, Computer Network, Computer Commercial App. (Addl: Mathematics)",
      "Poultry Farming Subjects: English, Entrepreneurship, Foundation Course, Poultry Production & Breeding, Poultry Housing & Management, Poultry Disease & Control, Poultry Nutrition & Physiology, Poultry Production & Technology"
    ],
    fourthSubject: "Computer Techniques: Additional Subject Mathematics | Poultry Farming: Full Subsidized / Free Option",
    eligibilityNote: "Direct admissions are given if you wish to apply for Class XI Vocational, either Computer Techniques or Poultry Farming, but you should have passed the SSLC Examination or any other Equivalent Examinations. Moreover, a free course is offered if you opt for Poultry Farming.",
    subjects: [
      "Computer Fundamentals", "Programming in C", "Fox Pro DBMS", "DTP Desktop Publishing", "Computer Network", "Poultry Breeding", "Poultry Housing", "Poultry Disease Control", "Poultry Nutrition"
    ],
    features: [
      "4.1 Computer Techniques: 8 subjects affiliated to MBOSE for gainful employment",
      "4.2 Poultry Farming: 8 subjects with modern livestock management",
      "Direct Admission for SSLC pass holders",
      "Special Benefit: Free / Subsidized course for Poultry Farming"
    ]
  }
];

export const FEE_STRUCTURE: FeeItem[] = [
  {
    classGroup: "Kindergarten (Nursery & KG)",
    admissionFee: "₹3,500",
    tuitionFeeQuarterly: "₹2,100",
    examFeeAnnual: "₹800",
    labAndComputerAnnual: "₹600",
    sportsAndLibraryAnnual: "₹800",
    totalAnnualEstimate: "₹14,100"
  },
  {
    classGroup: "Primary (Classes I to V)",
    admissionFee: "₹4,000",
    tuitionFeeQuarterly: "₹2,500",
    examFeeAnnual: "₹1,000",
    labAndComputerAnnual: "₹1,200",
    sportsAndLibraryAnnual: "₹1,000",
    totalAnnualEstimate: "₹17,200"
  },
  {
    classGroup: "Upper Primary (Classes VI to VIII)",
    admissionFee: "₹4,500",
    tuitionFeeQuarterly: "₹3,000",
    examFeeAnnual: "₹1,200",
    labAndComputerAnnual: "₹1,800",
    sportsAndLibraryAnnual: "₹1,200",
    totalAnnualEstimate: "₹20,700"
  },
  {
    classGroup: "Secondary (Classes IX & X - MBOSE)",
    admissionFee: "₹5,000",
    tuitionFeeQuarterly: "₹3,600",
    examFeeAnnual: "₹1,600",
    labAndComputerAnnual: "₹2,400",
    sportsAndLibraryAnnual: "₹1,400",
    totalAnnualEstimate: "₹24,800"
  },
  {
    classGroup: "Higher Secondary (Class XI & XII Arts/Comm)",
    admissionFee: "₹6,000",
    tuitionFeeQuarterly: "₹4,200",
    examFeeAnnual: "₹2,000",
    labAndComputerAnnual: "₹2,800",
    sportsAndLibraryAnnual: "₹1,600",
    totalAnnualEstimate: "₹29,200"
  },
  {
    classGroup: "Higher Secondary (Class XI & XII Science)",
    admissionFee: "₹7,000",
    tuitionFeeQuarterly: "₹4,800",
    examFeeAnnual: "₹2,200",
    labAndComputerAnnual: "₹4,200",
    sportsAndLibraryAnnual: "₹1,600",
    totalAnnualEstimate: "₹34,200"
  }
];

export const FACULTY_MEMBERS: StaffMember[] = [
  {
    id: "fac-01",
    name: "Rev. Fr. Principal",
    role: "Principal & Head of Institution",
    department: "Administration",
    qualification: "M.A., M.Ed., Phil. Licentiate",
    experience: "24 years in Diocesan Education",
    image: SCHOOL_IMAGES.studentAwards
  },
  {
    id: "fac-02",
    name: "Rev. Sister Vice-Principal",
    role: "Vice Principal & Headmistress",
    department: "Administration & Discipline",
    qualification: "M.Sc., B.Ed.",
    experience: "19 years teaching & pastoral guidance",
    image: SCHOOL_IMAGES.stateCeremony
  },
  {
    id: "fac-03",
    name: "Sir B. Syiemlieh",
    role: "Senior Lecturer & HOD Science",
    department: "Physics & Chemistry",
    qualification: "M.Sc. (Physics), B.Ed.",
    experience: "16 years (Mentored 8 State Top 20 ranks)",
  },
  {
    id: "fac-04",
    name: "Kong M. Marbaniang",
    role: "Senior Lecturer & HOD Humanities",
    department: "Political Science & History",
    qualification: "M.A. (Pol Science), NET, B.Ed.",
    experience: "14 years teaching senior secondary",
  },
  {
    id: "fac-05",
    name: "Kong D. Nongkynrih",
    role: "HOD Khasi Language & Literature",
    department: "Languages",
    qualification: "M.A. (Khasi), M.Phil.",
    experience: "18 years preserving indigenous literary heritage",
  },
  {
    id: "fac-06",
    name: "Sir P. Dkhar",
    role: "Lecturer in Geography",
    department: "Social Sciences & Field Studies",
    qualification: "M.A. (Geography), B.Ed.",
    experience: "12 years (Field expedition coordinator)",
  },
  {
    id: "fac-07",
    name: "Kong E. Rymbai",
    role: "HOD Mathematics",
    department: "Mathematics & Statistics",
    qualification: "M.Sc. (Mathematics), B.Ed.",
    experience: "15 years academic counseling",
  },
  {
    id: "fac-08",
    name: "Sir S. Mawlong",
    role: "Director of Physical Education & Drill",
    department: "Athletics & Physical Training",
    qualification: "M.P.Ed., Certified NIS Coach",
    experience: "11 years drill and track master",
  },
  {
    id: "fac-09",
    name: "Kong R. Lyngdoh",
    role: "Accountant & Fee Counter Head",
    department: "Non-Teaching & Lab Staff",
    qualification: "B.Com (Hons.), Tally & Institutional Finance",
    experience: "13 years school accounts & student scholarships",
  },
  {
    id: "fac-10",
    name: "Kong A. Kharkongor",
    role: "Campus Librarian",
    department: "Non-Teaching & Lab Staff",
    qualification: "M.Lib.I.Sc. (Library & Information Science)",
    experience: "10 years managing 8,500+ reference volumes",
  },
  {
    id: "fac-11",
    name: "Sir D. Sohkhlet",
    role: "Senior Science Lab Assistant",
    department: "Non-Teaching & Lab Staff",
    qualification: "B.Sc. (Chemistry & Biology), Lab Safety Cert.",
    experience: "9 years HSSLC Physics, Chemistry & Bio practicals",
  },
  {
    id: "fac-12",
    name: "Sir K. Nongrum",
    role: "Computer Lab & Smart Class Coordinator",
    department: "Non-Teaching & Lab Staff",
    qualification: "BCA, Hardware & Network Administration",
    experience: "8 years digital lab & UDISE+ data desk",
  }
];

export const BUS_ROUTES = [
  {
    routeNo: "Route 1",
    busName: "Umsning - Nongpoh Express",
    stops: ["Nongpoh Main Market", "Umling", "Nongkhyllem", "Umsning Gate", "St. Michael's Campus"],
    pickupTime: "7:15 AM",
    dropTime: "3:45 PM",
    inCharge: "Sir L. Lyngdoh (Ph: +91 94361 02845)"
  },
  {
    routeNo: "Route 2",
    busName: "Bhoirymbong - Umsning Shuttle",
    stops: ["Bhoirymbong Point", "Umroi Airport Junction", "Umroi Madan", "Umsning Bypass", "St. Michael's Campus"],
    pickupTime: "7:30 AM",
    dropTime: "3:40 PM",
    inCharge: "Sir P. Maring (Ph: +91 3638 264218)"
  },
  {
    routeNo: "Route 3",
    busName: "Mawrong - Sumer Village Circuit",
    stops: ["Mawrong Village", "Sumer Hydel Gate", "Kyrdemkulai Junction", "Umsning Town", "St. Michael's Campus"],
    pickupTime: "7:20 AM",
    dropTime: "3:50 PM",
    inCharge: "Sir K. Kharbuki (Ph: +91 94361 02845)"
  },
  {
    routeNo: "Route 4",
    busName: "Umsning Local Town Shuttle",
    stops: ["Umsning Proper", "Ri Bhoi College Turn", "Civil Hospital Umsning", "Shaphreng", "St. Michael's Campus"],
    pickupTime: "8:00 AM",
    dropTime: "3:30 PM",
    inCharge: "Kong B. Syiem (Ph: +91 3638 264218)"
  }
];
