import { FilmItem, InstagramItem, PortfolioItem, StoryCategory, TestimonialItem } from '../types';

// Official Studio Metadata — Google Maps, Instagram bio, YouTube channel
export const STUDIO_INFO = {
  name: 'Sumit Studio',
  tagline: 'Real People. Beautiful Stories.',
  established: 1999,
  experienceYears: 25,
  address: 'H, 4, 1/3, Satnam Park, Block H, Krishna Nagar, Delhi 110051',
  city: 'Krishna Nagar, East Delhi, NCR',
  phone: '+919891157232',
  phoneDisplay: '+91 98911 57232',
  phone2: '+919891725533',
  phone2Display: '+91 98917 25533',
  whatsapp: '919891157232',
  email: '',
  hours: 'Opens 10:30 AM · Open daily (confirm on call)',
  googleMapsUrl: 'https://maps.app.goo.gl/kDi5xn7t4m1PRZ6J9',
  googleMapsEmbed: 'https://maps.google.com/maps?q=28.6565659,77.2832943&hl=en&z=16&output=embed',
  youtubeUrl: 'https://www.youtube.com/@sumitstudio9336',
  youtubeSubscribe: 'https://www.youtube.com/@sumitstudio9336?sub_confirmation=1',
  instagramUrl: 'https://www.instagram.com/sumit.studio/',
  instagramHandle: '@sumit.studio',
  instagramFollowers: '12.2k',
  youtubeSubscribers: '12.6k',
  youtubeVideos: 80,
  heroVideoId: 'AYOeKL3VNPA',
  heroVideoTitle: 'Madhav & Nihirika | Goa | Pre Wedding by Sumit Studio',
  heroCouple: 'Madhav & Nihirika',
  heroLocation: 'Goa',
  rating: 4.8,
  reviewCount: 213,
  siteUrl: 'https://ss.acaditya10.tech',
};

export const HERO_IMAGE = {
  src: '/images/yt/AYOeKL3VNPA-maxresdefault.jpg',
  alt: 'Sumit Studio — Madhav & Nihirika Goa pre-wedding film still',
  subtitle: 'WEDDING PHOTOGRAPHY & CINEMATOGRAPHY',
};

export const INTRO_IMAGE = {
  src: '/images/yt/qULCOjCRGY8-maxresdefault.jpg',
  alt: 'Aditi & Ashmit regal wedding still — Sumit Studio Delhi',
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'Madhav & Nihirika',
    category: 'Pre-Wedding',
    location: 'Goa',
    image: '/images/yt/AYOeKL3VNPA-maxresdefault.jpg',
    alt: 'Madhav and Nihirika pre-wedding film still on Goa shores by Sumit Studio',
  },
  {
    id: 'port-2',
    title: 'Abhishek & Himanshi',
    category: 'Weddings',
    location: 'Jim Corbett Park',
    image: '/images/yt/UPtI04xC71k-maxresdefault.jpg',
    alt: 'Abhishek and Himanshi same-day-edit wedding film still from Jim Corbett Park',
  },
  {
    id: 'port-3',
    title: 'Prarit & Simran',
    category: 'Pre-Wedding',
    location: 'India',
    image: '/images/yt/x0dr-294WOw-maxresdefault.jpg',
    alt: 'Prarit and Simran cinematic pre-wedding film still by Sumit Studio',
  },
  {
    id: 'port-4',
    title: 'Anik & Gorvi',
    category: 'Weddings',
    location: 'VOCO Jim Corbett',
    image: '/images/yt/dsV13WtIAqQ-maxresdefault.jpg',
    alt: 'Anik and Gorvi destination wedding teaser still at VOCO Jim Corbett',
  },
  {
    id: 'port-5',
    title: 'Aditi & Ashmit',
    category: 'Weddings',
    location: 'Delhi NCR',
    image: '/images/yt/qULCOjCRGY8-maxresdefault.jpg',
    alt: 'Aditi and Ashmit regal wedding film still by Sumit Studio',
  },
  {
    id: 'port-6',
    title: 'Tusha & Pratham',
    category: 'Weddings',
    location: 'India',
    image: '/images/yt/21SlMEZQ5Hs-maxresdefault.jpg',
    alt: 'Tusha and Pratham Indian wedding highlight film still by Sumit Studio',
  },
  {
    id: 'port-7',
    title: 'Manvi & Hardik',
    category: 'Celebrations',
    location: 'Engagement',
    image: '/images/yt/nN635qR7ifI-maxresdefault.jpg',
    alt: 'Manvi and Hardik engagement ceremony teaser still by Sumit Studio',
  },
  {
    id: 'port-8',
    title: 'Anuragh & Annu',
    category: 'Pre-Wedding',
    location: 'Picture Villa',
    image: '/images/yt/4nBk7dJSULA-maxresdefault.jpg',
    alt: 'Anuragh and Annu pre-wedding shoot still at Picture Villa by Sumit Studio',
  },
  {
    id: 'port-9',
    title: 'Abhishek & Himanshi',
    category: 'Pre-Wedding',
    location: 'Udaipur',
    image: '/images/yt/YQ1Ve2JnzWE-maxresdefault.jpg',
    alt: 'Abhishek and Himanshi Udaipur pre-wedding film still by Sumit Studio',
  },
  {
    id: 'port-10',
    title: 'Ravi & Priyanka',
    category: 'Pre-Wedding',
    location: 'Rishikesh',
    image: '/images/yt/18qTfS_FSVo-maxresdefault.jpg',
    alt: 'Ravi and Priyanka pre-wedding film still in Rishikesh by Sumit Studio',
  },
  {
    id: 'port-11',
    title: 'Vansh & Muskan',
    category: 'Pre-Wedding',
    location: 'Delhi NCR',
    image: '/images/yt/HY-8VjwJ79M-maxresdefault.jpg',
    alt: 'Vansh and Muskan cinematic pre-wedding film still by Sumit Studio',
  },
  {
    id: 'port-12',
    title: 'Abha & Ashish',
    category: 'Pre-Wedding',
    location: 'Heritage Haveli',
    image: '/images/yt/gcxzr_kSEzY-hqdefault.jpg',
    alt: 'Abha and Ashish pre-wedding film still at a heritage haveli by Sumit Studio',
  },
  {
    id: 'port-13',
    title: 'Aruj & Diksha',
    category: 'Weddings',
    location: 'Grand Wedding',
    image: '/images/yt/A3fNex1Zokg.jpg',
    alt: 'Aruj and Diksha grand wedding film still by Sumit Studio',
  },
  {
    id: 'port-14',
    title: 'Sahil & Ashna',
    category: 'Celebrations',
    location: 'Haldi',
    image: '/images/yt/SOknuW1HG2c-maxresdefault.jpg',
    alt: 'Sahil and Ashna haldi celebration teaser still by Sumit Studio',
  },
  {
    id: 'port-15',
    title: 'Pankaj & Sangeeta',
    category: 'Celebrations',
    location: 'Anniversary',
    image: '/images/yt/gWyrjESJNh0.jpg',
    alt: 'Pankaj and Sangeeta 25th wedding anniversary celebration film still',
  },
  {
    id: 'port-16',
    title: 'Tanish & Rashmeet',
    category: 'Celebrations',
    location: 'Engagement',
    image: '/images/yt/Ta9RTX4uBk4-maxresdefault.jpg',
    alt: 'Tanish and Rashmeet engagement teaser still by Sumit Studio',
  },
];

export const STORY_CATEGORIES: StoryCategory[] = [
  {
    id: 'cat-weddings',
    name: 'WEDDINGS',
    slug: 'weddings',
    image: '/images/yt/qULCOjCRGY8-maxresdefault.jpg',
    tagline: 'SACRED VOWS & GRANDEUR',
    count: 320,
    description:
      'Documenting the rituals, solemn vows, and lavish celebrations across royal palaces and intimate heritage spaces.',
  },
  {
    id: 'cat-pre-weddings',
    name: 'PRE-WEDDINGS',
    slug: 'pre-weddings',
    image: '/images/yt/AYOeKL3VNPA-maxresdefault.jpg',
    tagline: 'INTIMATE ROMANTIC STORIES',
    count: 245,
    description:
      'Cinematic visual love stories filmed in Goa, Udaipur, Rishikesh, Jim Corbett, and luxury scenic estates.',
  },
  {
    id: 'cat-films',
    name: 'FILMS',
    slug: 'films',
    image: '/images/yt/UPtI04xC71k-maxresdefault.jpg',
    tagline: 'CINEMATIC MOTION PICTURES',
    count: 80,
    description:
      'High-definition cinematic teasers, emotional same-day edits, and documentary feature films with custom sound design.',
  },
  {
    id: 'cat-engagements',
    name: 'ENGAGEMENTS',
    slug: 'engagements',
    image: '/images/yt/nN635qR7ifI-maxresdefault.jpg',
    tagline: 'PROMISES OF FOREVER',
    count: 160,
    description:
      'The beginning of forever captured through timeless ring exchanges, elegant cocktail soirees, and family blessings.',
  },
  {
    id: 'cat-haldi',
    name: 'HALDI & MEHENDI',
    slug: 'haldi',
    image: '/images/yt/SOknuW1HG2c-maxresdefault.jpg',
    tagline: 'MARIGOLD SUNSHINE & LAUGHTER',
    count: 210,
    description:
      'Vibrant yellow ceremonies filled with turmeric splash, floral showers, water play, and unfiltered laughter.',
  },
  {
    id: 'cat-anniversary',
    name: 'ANNIVERSARIES',
    slug: 'anniversaries',
    image: '/images/yt/gWyrjESJNh0.jpg',
    tagline: 'DECADES OF LOVE',
    count: 40,
    description:
      'Milestone celebrations honouring enduring love — from silver jubilees to intimate vow renewals.',
  },
];

// Real films from @sumitstudio9336 — titles from YouTube oEmbed
export const CINEMATIC_FILMS: FilmItem[] = [
  {
    id: 'film-1',
    title: 'MADHAV & NIHIRIKA',
    couple: 'Madhav & Nihirika',
    location: 'Goa',
    duration: 'Pre-Wedding',
    thumbnail: '/images/yt/AYOeKL3VNPA-maxresdefault.jpg',
    youtubeId: 'AYOeKL3VNPA',
    description:
      'Romantic cinematic pre-wedding film set across the beaches and shores of Goa by Sumit Studio, Delhi.',
  },
  {
    id: 'film-2',
    title: 'ABHISHEK & HIMANSHI',
    couple: 'Abhishek & Himanshi',
    location: 'Jim Corbett Park',
    duration: 'Same Day Edit',
    thumbnail: '/images/yt/UPtI04xC71k-maxresdefault.jpg',
    youtubeId: 'UPtI04xC71k',
    description:
      'Same-day-edit wedding film from the forests and celebrations of Jim Corbett Park by Sumit Studio.',
  },
  {
    id: 'film-3',
    title: 'PRARIT & SIMRAN',
    couple: 'Prarit & Simran',
    location: 'India',
    duration: 'Pre-Wedding',
    thumbnail: '/images/yt/x0dr-294WOw-maxresdefault.jpg',
    youtubeId: 'x0dr-294WOw',
    description:
      'Best pre-wedding 2026 — cinematic romance with high-fashion aesthetics by Sumit Studio Photography.',
  },
  {
    id: 'film-4',
    title: 'ANIK & GORVI',
    couple: 'Anik & Gorvi',
    location: 'VOCO Jim Corbett',
    duration: 'Wedding Teaser',
    thumbnail: '/images/yt/dsV13WtIAqQ-maxresdefault.jpg',
    youtubeId: 'dsV13WtIAqQ',
    description:
      'Destination wedding teaser filmed at VOCO Jim Corbett — a film by Sumit Studio.',
  },
  {
    id: 'film-5',
    title: 'ADITI & ASHMIT',
    couple: 'Aditi & Ashmit',
    location: 'Delhi NCR',
    duration: 'Wedding Film',
    thumbnail: '/images/yt/qULCOjCRGY8-maxresdefault.jpg',
    youtubeId: 'qULCOjCRGY8',
    description:
      'A regal wedding filled with love and traditions — captured by Sumit Studio.',
  },
  {
    id: 'film-6',
    title: 'TUSHA & PRATHAM',
    couple: 'Tusha & Pratham',
    location: 'India',
    duration: 'Wedding Highlight',
    thumbnail: '/images/yt/21SlMEZQ5Hs-maxresdefault.jpg',
    youtubeId: '21SlMEZQ5Hs',
    description:
      'Best Indian wedding highlight film — Tusha & Pratham by Sumit Studio.',
  },
  {
    id: 'film-7',
    title: 'MANVI & HARDIK',
    couple: 'Manvi & Hardik',
    location: 'Engagement',
    duration: 'Teaser',
    thumbnail: '/images/yt/nN635qR7ifI-maxresdefault.jpg',
    youtubeId: 'nN635qR7ifI',
    description:
      'Best engagement ceremony teaser 2024 — Manvi & Hardik by Sumit Studio.',
  },
  {
    id: 'film-8',
    title: 'ABHISHEK & HIMANSHI',
    couple: 'Abhishek & Himanshi',
    location: 'Udaipur',
    duration: 'Pre-Wedding',
    thumbnail: '/images/yt/YQ1Ve2JnzWE-maxresdefault.jpg',
    youtubeId: 'YQ1Ve2JnzWE',
    description:
      'Pre-wedding film under the palaces and lakes of Udaipur by Sumit Studio.',
  },
  {
    id: 'film-9',
    title: 'RAVI & PRIYANKA',
    couple: 'Ravi & Priyanka',
    location: 'Rishikesh',
    duration: 'Pre-Wedding',
    thumbnail: '/images/yt/18qTfS_FSVo-maxresdefault.jpg',
    youtubeId: '18qTfS_FSVo',
    description:
      'Stunning pre-wedding moments in Rishikesh by Sumit Studio.',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    names: 'Madhav & Nihirika',
    initials: 'M',
    weddingLocation: 'Goa',
    year: '2024',
    stars: 5,
    quote:
      'Sumit Studio gave us memories of a lifetime in Goa. The team was comfortable to work with, completely unobtrusive, and the cinematic film they created became the highlight of our celebrations.',
  },
  {
    id: 'test-2',
    names: 'Abhishek & Himanshi',
    initials: 'A',
    weddingLocation: 'Jim Corbett Park',
    year: '2024',
    stars: 5,
    quote:
      'The same day edit at our reception left guests speechless. How the team shot, edited, and screened a cinema-grade film within hours still amazes us. A 4.8-star reputation well earned.',
  },
  {
    id: 'test-3',
    names: 'Prarit & Simran',
    initials: 'P',
    weddingLocation: 'India',
    year: '2026',
    stars: 5,
    quote:
      'Every frame looks like an editorial cover. They captured the soul of our relationship with poetry and precision. We are eternally grateful to Sumit Studio.',
  },
  {
    id: 'test-4',
    names: 'Anik & Gorvi',
    initials: 'A',
    weddingLocation: 'VOCO Jim Corbett',
    year: '2024',
    stars: 5,
    quote:
      'From the teaser to the full film, Sumit Studio delivered heirloom-quality work. Punctual, courteous, and endlessly talented — highly recommended across Delhi NCR.',
  },
];

export const TESTIMONIAL_COUPLE_IMAGE = {
  src: '/images/yt/qULCOjCRGY8-maxresdefault.jpg',
  alt: 'Aditi and Ashmit wedding film portrait by Sumit Studio',
};

export const INQUIRY_CARD_IMAGE = {
  src: '/images/yt/21SlMEZQ5Hs-maxresdefault.jpg',
  alt: 'Tusha and Pratham wedding highlight — Good Photos Better People, Sumit Studio',
};

// Real Instagram posts from @sumit.studio embed page
export const INSTAGRAM_PHOTOS: InstagramItem[] = [
  {
    id: 'insta-1',
    image: '/images/ig/ig-1.jpg',
    url: 'https://www.instagram.com/p/DUhfs1eB8QX/',
    alt: 'Wedding photograph by Sumit Studio on Instagram',
    likes: 'View',
    caption: 'New work on @sumit.studio — wedding stories from Delhi NCR and beyond.',
  },
  {
    id: 'insta-2',
    image: '/images/ig/ig-2.jpg',
    url: 'https://www.instagram.com/reel/DUAOg7EBIa_/',
    alt: 'Cinematic wedding reel by Sumit Studio on Instagram',
    likes: 'View',
    caption: 'Cinematic wedding moments — full reels on Instagram.',
  },
  {
    id: 'insta-3',
    image: '/images/ig/ig-3.jpg',
    url: 'https://www.instagram.com/p/DUABP9_uw7M/',
    alt: 'Pre-wedding photography by Sumit Studio on Instagram',
    likes: 'View',
    caption: 'Pre-wedding stories photographed by Sumit Studio.',
  },
  {
    id: 'insta-4',
    image: '/images/ig/ig-4.jpg',
    url: 'https://www.instagram.com/reel/DUAYpeWg_79/',
    alt: 'Wedding film reel by Sumit Studio on Instagram',
    likes: 'View',
    caption: 'Wedding film highlights — watch the full reel on Instagram.',
  },
  {
    id: 'insta-5',
    image: '/images/ig/ig-5.jpg',
    url: 'https://www.instagram.com/reel/DS3KW91Dmz2/',
    alt: 'Celebration photography by Sumit Studio on Instagram',
    likes: 'View',
    caption: 'Celebrations and candid joy — more on @sumit.studio.',
  },
  {
    id: 'insta-6',
    image: '/images/ig/ig-6.jpg',
    url: 'https://www.instagram.com/reel/DS3SjhLjGK0/',
    alt: 'Candid wedding moment by Sumit Studio on Instagram',
    likes: 'View',
    caption: 'Candid moments from recent weddings — follow for more.',
  },
];
