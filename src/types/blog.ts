export type BlogSection = {
  id: string;
  title: string;
  level: 2 | 3;
  paragraphs: string[];
};

export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogPostDocument = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  coverAlt: string;
  intro: string[];
  sections: BlogSection[];
  takeaway: {
    title: string;
    paragraphs: string[];
  };
  faqs: BlogFaq[];
  relatedSlugs: string[];
};

export type BlogDataFile = {
  posts: BlogPostDocument[];
};
