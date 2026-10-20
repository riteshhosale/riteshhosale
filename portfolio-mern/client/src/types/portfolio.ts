export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  stack: string[];
  repo?: string;
  liveUrl?: string;
  featured?: boolean;
};

export type SkillGroup = {
  title: string;
  detail: string;
};

export type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ApiMessage = {
  message?: string;
};
