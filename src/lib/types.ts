// Shape of the page content. Every language file (en.ts, later et.ts, ru.ts)
// must match these types, so a typo fails the build instead of the live site.

export interface Example {
  title: string;
  /** Where the example link goes. Absolute URLs open in a new tab. */
  url: string;
}

interface BlockBase {
  /** Set to false to hide the block without deleting it. */
  enabled?: boolean;
  /** Anchor id, used by in-page links such as #contact. */
  id: string;
}

export interface HeroBlock extends BlockBase {
  type: "hero";
  title: [string, string, string];
  sub: string;
  cta: string;
  ctaHref: string;
}

export interface StoryBlock extends BlockBase {
  type: "story";
  title: string;
  situations: string[];
  resolve: string;
  howTitle: string;
  steps: { title: string; text: string }[];
  /** Scrolling strip of client names at the bottom of the block. */
  logos: { enabled: boolean; label: string; names: string[] };
}

export interface MakesBlock extends BlockBase {
  type: "makes";
  title: string;
  /** Show the example links under each service. */
  showExamples: boolean;
  items: { title: string; text: string; examples: Example[] }[];
}

export interface FormCopy {
  nameLabel: string;
  emailLabel: string;
  deadlineLabel: string;
  deadlinePlaceholder: string;
  briefLabel: string;
  briefPlaceholder: string;
  optional: string;
  submit: string;
  sending: string;
  successTitle: string;
  successText: string;
  errorText: string;
  emailSubject: string;
  privacyNote: string;
  privacyLink: string;
  direct: string;
}

export interface ContactBlock extends BlockBase {
  type: "contact";
  price: {
    title: string;
    unit: string;
    lead: string;
    terms: string[];
  };
  headline: [string, string, string, string];
  form: FormCopy;
}

export type Block = HeroBlock | StoryBlock | MakesBlock | ContactBlock;

export interface PrivacyCopy {
  title: string;
  back: string;
  updated: string;
  sections: { heading: string; text: string }[];
}

export interface Page {
  lang: string;
  meta: { title: string; description: string };
  ui: { skip: string; exampleSuffix: string };
  header: { privacy: string; privacyHref: string };
  /** Page order = array order. */
  blocks: Block[];
  privacy: PrivacyCopy;
  notFound: { title: string; text: string; link: string };
}
