const assetUrl = (filename: string) =>
  `${import.meta.env.BASE_URL}assets/${encodeURIComponent(filename)}`;

export const SCHOOL_IMAGES = {
  logo: assetUrl('st-michaels-logo.jpg'),
  campus: assetUrl('WhatsApp Image 2026-11-08 at 2.05.14 PM.jpeg'),
  foundingCampus: assetUrl('WhatsApp Image 2026-11-08 at 2.05.22 PM (1).jpeg'),
  schoolStaff: assetUrl('WhatsApp Image 2026-11-08 at 2.05.20 PM.jpeg'),
  campusAssembly: assetUrl('WhatsApp Image 2026-11-08 at 2.05.21 PM (1).jpeg'),
  panoramicAssembly: assetUrl('WhatsApp Image 2026-11-08 at 2.05.22 PM.jpeg'),
  houseAssembly: assetUrl('WhatsApp Image 2026-11-08 at 2.05.16 PM.jpeg'),
  assemblyAddress: assetUrl('WhatsApp Image 2026-11-08 at 2.05.16 PM (2).jpeg'),
  stateCeremony: assetUrl('WhatsApp Image 2026-11-08 at 2.04.10 PM.jpeg'),
  awardPresentation: assetUrl('WhatsApp Image 2026-11-08 at 2.04.10 PM (2).jpeg'),
  studentAwards: assetUrl('WhatsApp Image 2026-11-08 at 2.05.18 PM.jpeg'),
  certificateWinners: assetUrl('WhatsApp Image 2026-11-08 at 2.05.20 PM (2).jpeg'),
  graduatingBatch: assetUrl('WhatsApp Image 2026-11-08 at 2.05.17 PM (1).jpeg'),
  sports: assetUrl('WhatsApp Image 2026-11-08 at 2.04.54 PM.jpeg'),
  sportsBlueChampions: assetUrl('WhatsApp Image 2026-11-08 at 2.04.11 PM (1).jpeg'),
  sportsGreenChampions: assetUrl('WhatsApp Image 2026-11-08 at 2.05.20 PM (1).jpeg'),
  culture: assetUrl('WhatsApp Image 2026-11-08 at 2.05.16 PM (1).jpeg'),
  courtyardDance: assetUrl('WhatsApp Image 2026-11-08 at 2.05.13 PM.jpeg'),
  culturalTroupe: assetUrl('WhatsApp Image 2026-11-08 at 2.05.14 PM (1).jpeg'),
  choir: assetUrl('WhatsApp Image 2026-11-08 at 2.05.19 PM (1).jpeg'),
  fieldwork: assetUrl('WhatsApp Image 2026-11-08 at 2.05.15 PM (1).jpeg'),
  geographyFieldwork: assetUrl('WhatsApp Image 2026-11-08 at 2.05.15 PM.jpeg'),
  environment: assetUrl('WhatsApp Image 2026-11-08 at 2.04.53 PM.jpeg'),
  campusEcoDrive: assetUrl('WhatsApp Image 2026-11-08 at 2.04.12 PM.jpeg'),
  awareness: assetUrl('WhatsApp Image 2026-11-08 at 2.04.53 PM (1).jpeg'),
  posterCampaign: assetUrl('WhatsApp Image 2026-11-08 at 2.05.17 PM.jpeg'),
  staff: assetUrl('WhatsApp Image 2026-11-08 at 2.05.21 PM (2).jpeg'),
  studentLeaders: assetUrl('WhatsApp Image 2026-11-08 at 2.05.19 PM.jpeg'),
  campusCommunity: assetUrl('WhatsApp Image 2026-11-08 at 2.04.09 PM.jpeg'),
} as const;

const legacyAssetMap: Record<string, string> = {
  'Banner 1.png': SCHOOL_IMAGES.campus,
  'Banner 2.png': SCHOOL_IMAGES.campusAssembly,
  'Banner 3.png': SCHOOL_IMAGES.culture,
  'Banner 4.png': SCHOOL_IMAGES.sports,
  'wasc 1.png': SCHOOL_IMAGES.stateCeremony,
  'wasc 2.png': SCHOOL_IMAGES.awardPresentation,
  'wasc 3.png': SCHOOL_IMAGES.studentAwards,
  'Rectangle 25.png': SCHOOL_IMAGES.campus,
  'Rectangle 27.png': SCHOOL_IMAGES.stateCeremony,
  'Rectangle 28.png': SCHOOL_IMAGES.awardPresentation,
  'Rectangle 29.png': SCHOOL_IMAGES.studentAwards,
  'Rectangle 31.png': SCHOOL_IMAGES.campus,
  'Rectangle 40.png': SCHOOL_IMAGES.houseAssembly,
  'Rectangle 41.png': SCHOOL_IMAGES.culture,
  'Rectangle 42.png': SCHOOL_IMAGES.assemblyAddress,
  'Rectangle 43.png': SCHOOL_IMAGES.sportsBlueChampions,
  'Rectangle 44.png': SCHOOL_IMAGES.campusEcoDrive,
  'Rectangle 60.png': SCHOOL_IMAGES.geographyFieldwork,
  'Rectangle 61.png': SCHOOL_IMAGES.studentAwards,
  'Rectangle 62.png': SCHOOL_IMAGES.environment,
  'Rectangle 63.png': SCHOOL_IMAGES.studentLeaders,
  'Rectangle 64.png': SCHOOL_IMAGES.sports,
  'Rectangle 71.png': SCHOOL_IMAGES.courtyardDance,
  'Rectangle 72.png': SCHOOL_IMAGES.stateCeremony,
  'Rectangle 73.png': SCHOOL_IMAGES.fieldwork,
  'Rectangle 74.png': SCHOOL_IMAGES.posterCampaign,
  'Rectangle 75.png': SCHOOL_IMAGES.environment,
  'Rectangle 76.png': SCHOOL_IMAGES.choir,
  'Rectangle 88.png': SCHOOL_IMAGES.graduatingBatch,
  'Rectangle 89.png': SCHOOL_IMAGES.certificateWinners,
  'Rectangle 90.png': SCHOOL_IMAGES.culturalTroupe,
  'Rectangle 91.png': SCHOOL_IMAGES.sportsGreenChampions,
  'Rectangle 92.png': SCHOOL_IMAGES.panoramicAssembly,
  'Rectangle 93.png': SCHOOL_IMAGES.awardPresentation,
  'rank-in-profit-logo 1.png': SCHOOL_IMAGES.stateCeremony,
  'top-placement-logo 1.png': SCHOOL_IMAGES.awardPresentation,
  'international-universities-logo 1.png': SCHOOL_IMAGES.campusCommunity,
  'given-scholar-logo 1.png': SCHOOL_IMAGES.studentAwards,
};

export const resolveSchoolAsset = (source: string): string => {
  const filename = source.slice(source.lastIndexOf('/') + 1);
  const legacyAsset = legacyAssetMap[filename];
  if (legacyAsset) return legacyAsset;

  const generatedAsset = filename.match(
    /^WhatsApp_(Image|Video)_(\d{4}-\d{2}-\d{2})_at_([0-9.]+)_PM(?:__(\d+)__|_)[a-f0-9]+\.(jpeg|mp4)$/
  );
  if (generatedAsset) {
    const [, media, date, time, variant, extension] = generatedAsset;
    const variantSuffix = variant ? ` (${variant})` : '';
    return assetUrl(`WhatsApp ${media} ${date} at ${time} PM${variantSuffix}.${extension}`);
  }

  if (source.startsWith('/assets/')) return assetUrl(filename);
  throw new Error(`Unknown school asset: ${source}`);
};
