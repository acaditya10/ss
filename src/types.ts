export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  aspect?: string;
  alt: string;
}

export interface StoryCategory {
  id: string;
  name: string;
  slug: string;
  image: string;
  tagline: string;
  count: number;
  description: string;
}

export interface FilmItem {
  id: string;
  title: string;
  couple: string;
  location: string;
  duration: string;
  thumbnail: string;
  videoUrl?: string;
  youtubeId?: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  names: string;
  initials: string;
  weddingLocation: string;
  year: string;
  stars: number;
  quote: string;
}

export interface InstagramItem {
  id: string;
  image: string;
  alt: string;
  likes: string;
  caption: string;
}
