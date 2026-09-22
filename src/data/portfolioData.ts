import { FilmItem, InstagramItem, PortfolioItem, StoryCategory, TestimonialItem } from '../types';

// Official Studio Metadata & Links from provided sources
export const STUDIO_INFO = {
  name: 'Sumit Studio',
  tagline: 'Real People. Beautiful Stories.',
  established: 1982,
  experienceYears: 42,
  address: 'H4/1, Krishna Nagar, Delhi - 110051 (Opposite Anangpur Charitable Trust)',
  city: 'East Delhi, Delhi NCR',
  phone: '+91 90089 50390',
  phoneDisplay: '+91 90089 50390',
  whatsapp: '919008950390',
  email: 'info@sumitstudio.com',
  hours: 'Monday – Sunday: 10:00 AM – 8:30 PM',
  googleMapsUrl: 'https://maps.app.goo.gl/kDi5xn7t4m1PRZ6J9',
  googleMapsEmbed: 'https://maps.google.com/maps?q=28.6565659,77.2832943&hl=en&z=16&output=embed',
  youtubeUrl: 'https://www.youtube.com/@sumitstudio9336',
  instagramUrl: 'https://www.instagram.com/sumit.studio/',
  instagramHandle: '@sumit.studio',
  heroVideoId: 'AYOeKL3VNPA',
  heroVideoTitle: 'Madhav & Niharika | Goa | Pre Wedding Film by Sumit Studio',
  heroCouple: 'Madhav & Niharika',
  heroLocation: 'Goa Coastal Shores',
  rating: 4.8,
  reviewCount: 306,
};

// Hero background poster & metadata
export const HERO_IMAGE = {
  src: '/images/yt/AYOeKL3VNPA-maxresdefault.jpg',
  alt: 'Sumit Studio - Madhav & Niharika Goa Pre-Wedding Cinematography',
  subtitle: 'WEDDING PHOTOGRAPHY & CINEMATOGRAPHY',
};

// 40+ Years heritage intro image
export const INTRO_IMAGE = {
  src: '/images/yt/AYOeKL3VNPA-maxresdefault.jpg',
  alt: '40+ Years of Capturing Timeless Indian Weddings - Sumit Studio Delhi',
};

// Real Indian Wedding & Pre-Wedding Portfolio photographs
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'Madhav & Niharika',
    category: 'Pre-Wedding',
    location: 'Goa Coastal Shores',
    image: '/images/yt/AYOeKL3VNPA-maxresdefault.jpg',
    alt: 'Madhav & Niharika pre-wedding photoshoot on Goa beaches by Sumit Studio',
  },
  {
    id: 'port-2',
    title: 'Abhishek & Himanshi',
    category: 'Weddings',
    location: 'Jim Corbett National Park',
    image: '/images/yt/UPtI04xC71k-maxresdefault.jpg',
    alt: 'Abhishek & Himanshi destination wedding ceremony in Jim Corbett',
  },
  {
    id: 'port-3',
    title: 'Prarit & Simran',
    category: 'Pre-Wedding',
    location: 'Delhi NCR Luxury Estate',
    image: '/images/yt/x0dr-294WOw-maxresdefault.jpg',
    alt: 'Prarit & Simran editorial pre-wedding photoshoot by Sumit Studio',
  },
  {
    id: 'port-4',
    title: 'Manvi & Hardik',
    category: 'Celebrations',
    location: 'The Leela Palace, New Delhi',
    image: '/images/yt/nN635qR7ifI-maxresdefault.jpg',
    alt: 'Manvi & Hardik royal engagement ceremony celebrations',
  },
  {
    id: 'port-5',
    title: 'Anuragh & Annu',
    category: 'Pre-Wedding',
    location: 'Picture Villa, Delhi NCR',
    image: '/images/yt/4nBk7dJSULA-maxresdefault.jpg',
    alt: 'Anuragh & Annu romantic set photoshoot at Picture Villa',
  },
  {
    id: 'port-6',
    title: 'Dhruv & Navya',
    category: 'Pre-Wedding',
    location: 'Goa Sunset Cliffs',
    image: '/images/yt/Exrv6mdcRpM-maxresdefault.jpg',
    alt: 'Dhruv & Navya sunset romance on Goa shores by Sumit Studio',
  },
  {
    id: 'port-7',
    title: 'The Regal Royal Bride',
    category: 'Bridal Portrait',
    location: 'The Leela Palace, New Delhi',
    image: '/images/yt/AYOeKL3VNPA-maxresdefault.jpg',
    alt: 'Traditional Indian bride adorned in heritage gold zardozi lehenga and polki jewelry',
  },
  {
    id: 'port-8',
    title: 'Vows Under The Floral Mandap',
    category: 'Weddings',
    location: 'Taj Mahal Hotel, New Delhi',
    image: '/images/yt/AYOeKL3VNPA-maxresdefault.jpg',
    alt: 'Sacred wedding ceremony rituals under marigold and tuberose mandap canopy',
  },
  {
    id: 'port-9',
    title: 'Mehendi & Solah Shringar',
    category: 'Details',
    location: 'ITC Grand Bharat, Gurgaon',
    image: '/images/yt/AYOeKL3VNPA-maxresdefault.jpg',
    alt: 'Intricate bridal henna artistry and solitaires on bride hands',
  },
  {
    id: 'port-10',
    title: 'The Rain of Petals',
    category: 'Weddings',
    location: 'Noor Mahal Palace, Karnal',
    image: '/images/yt/AYOeKL3VNPA-maxresdefault.jpg',
    alt: 'Joyful blessing with rose petals during sacred Vedic phere rounds',
  },
  {
    id: 'port-11',
    title: 'Abha & Ashish',
    category: 'Pre-Wedding',
    location: 'Heritage Fort Haveli',
    image: '/images/yt/gcxzr_kSEzY-hqdefault.jpg',
    alt: 'Abha & Ashish timeless pre-wedding film by Sumit Studio',
  },
  {
    id: 'port-12',
    title: 'Sangeet Midnight Revelry',
    category: 'Celebrations',
    location: 'JW Marriott Aerocity, New Delhi',
    image: '/images/yt/AYOeKL3VNPA-maxresdefault.jpg',
    alt: 'High energy dance floor moments with family and friends at sangeet night',
  },
];

// Story Categories (Kanchan Studio inspired)
export const STORY_CATEGORIES: StoryCategory[] = [
  {
    id: 'cat-weddings',
    name: 'WEDDINGS',
    slug: 'weddings',
    image: '/images/yt/AYOeKL3VNPA-maxresdefault.jpg',
    tagline: 'SACRED VOWS & GRANDEUR',
    count: 320,
    description: 'Documenting the rituals, solemn vows, and lavish celebrations across royal palaces and intimate heritage spaces.',
  },
  {
    id: 'cat-pre-weddings',
    name: 'PRE-WEDDINGS',
    slug: 'pre-weddings',
    image: '/images/yt/AYOeKL3VNPA-maxresdefault.jpg',
    tagline: 'INTIMATE ROMANTIC STORIES',
    count: 245,
    description: 'Cinematic visual love stories filmed in Goa beaches, Jim Corbett, historic monuments, and luxury scenic estates.',
  },
  {
    id: 'cat-films',
    name: 'FILMS',
    slug: 'films',
    image: '/images/yt/UPtI04xC71k-maxresdefault.jpg',
    tagline: 'CINEMATIC MOTION PICTURES',
    count: 180,
    description: 'High-definition 4K cinematic teasers, emotional same-day edits, and documentary feature films with custom sound design.',
  },
  {
    id: 'cat-engagements',
    name: 'ENGAGEMENTS',
    slug: 'engagements',
    image: '/images/yt/nN635qR7ifI-maxresdefault.jpg',
    tagline: 'PROMISES OF FOREVER',
    count: 160,
    description: 'The beginning of forever captured through timeless ring exchanges, elegant cocktail soirees, and family blessings.',
  },
  {
    id: 'cat-haldi',
    name: 'HALDI & MEHENDI',
    slug: 'haldi',
    image: '/images/yt/AYOeKL3VNPA-maxresdefault.jpg',
    tagline: 'MARIGOLD SUNSHINE & LAUGHTER',
    count: 210,
    description: 'Vibrant yellow ceremonies filled with turmeric splash, floral showers, water play, and unfiltered laughter.',
  },
  {
    id: 'cat-bridal-portraits',
    name: 'BRIDAL PORTRAITS',
    slug: 'bridal-portraits',
    image: '/images/yt/AYOeKL3VNPA-maxresdefault.jpg',
    tagline: 'POISE, BEAUTY & TIMELESS GRACE',
    count: 295,
    description: 'Quiet, reflective portraits celebrating the bride in her heritage finery, jewelry, and authentic emotions.',
  },
];

// Real Cinematic Films from Sumit Studio YouTube Channel (@sumitstudio9336)
export const CINEMATIC_FILMS: FilmItem[] = [
  {
    id: 'film-1',
    title: 'MADHAV & NIHARIKA',
    couple: 'Madhav & Niharika',
    location: 'Goa Coastal Shores',
    duration: '04:12',
    thumbnail: '/images/yt/AYOeKL3VNPA-maxresdefault.jpg',
    youtubeId: 'AYOeKL3VNPA',
    description: 'Romantic cinematic pre-wedding film set across golden beaches, crashing waves and antique Portuguese heritage in Goa by Sumit Studio.',
  },
  {
    id: 'film-2',
    title: 'ABHISHEK & HIMANSHI',
    couple: 'Abhishek & Himanshi',
    location: 'Jim Corbett National Park',
    duration: '05:34',
    thumbnail: '/images/yt/UPtI04xC71k-maxresdefault.jpg',
    youtubeId: 'UPtI04xC71k',
    description: 'Same Day Edit wedding film surrounded by the wild forests, misty riverbanks, and royal celebratory nights at Jim Corbett.',
  },
  {
    id: 'film-3',
    title: 'PRARIT & SIMRAN',
    couple: 'Prarit & Simran',
    location: 'Delhi NCR Luxury Estate',
    duration: '04:45',
    thumbnail: '/images/yt/x0dr-294WOw-maxresdefault.jpg',
    youtubeId: 'x0dr-294WOw',
    description: 'Grand luxury pre-wedding cinematic film with high-fashion aesthetics, dramatic drone cinematography and sweeping emotional arcs.',
  },
  {
    id: 'film-4',
    title: 'MANVI & HARDIK',
    couple: 'Manvi & Hardik',
    location: 'The Leela Palace, New Delhi',
    duration: '03:40',
    thumbnail: '/images/yt/nN635qR7ifI-maxresdefault.jpg',
    youtubeId: 'nN635qR7ifI',
    description: 'High-energy engagement ceremony teaser filled with emotional family blessings, dance performances, and regal attire.',
  },
  {
    id: 'film-5',
    title: 'ANURAGH & ANNU',
    couple: 'Anuragh & Annu',
    location: 'Picture Villa, Delhi NCR',
    duration: '04:02',
    thumbnail: '/images/yt/4nBk7dJSULA-maxresdefault.jpg',
    youtubeId: '4nBk7dJSULA',
    description: 'Vibrant celebration shoot featuring bespoke romantic set designs, dreamy florals and joyful moments.',
  },
  {
    id: 'film-6',
    title: 'ABHA & ASHISH',
    couple: 'Abha & Ashish',
    location: 'Heritage Fort Haveli',
    duration: '04:18',
    thumbnail: '/images/yt/gcxzr_kSEzY-hqdefault.jpg',
    youtubeId: 'gcxzr_kSEzY',
    description: 'Soulful, poetic pre-wedding capturing tender moments between historical palace columns and lush gardens.',
  },
  {
    id: 'film-7',
    title: 'DHRUV & NAVYA',
    couple: 'Dhruv & Navya',
    location: 'Goa Coastal Cliffs',
    duration: '03:15',
    thumbnail: '/images/yt/Exrv6mdcRpM-maxresdefault.jpg',
    youtubeId: 'Exrv6mdcRpM',
    description: 'Golden hour romance on Goa shores featuring dramatic sunset drone cinematics and barefoot shoreline walks.',
  },
];

// Client Testimonials & Google Reviews
export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    names: 'Madhav & Niharika',
    initials: 'M',
    weddingLocation: 'Goa & Delhi NCR',
    year: '2024',
    stars: 5,
    quote:
      "Sumit Studio gave us memories of a lifetime in Goa! Their team was so comfortable to work with, completely unobtrusive, and the cinematic film they created went viral among all our relatives. Truly Delhi's best photography team!",
  },
  {
    id: 'test-2',
    names: 'Abhishek & Himanshi',
    initials: 'A',
    weddingLocation: 'Jim Corbett National Park',
    year: '2024',
    stars: 5,
    quote:
      "The Same Day Edit in Jim Corbett literally left our reception guests speechless. How Sumit and his team shot, edited and screened a cinema-grade film within hours is pure genius. 40+ years of legacy speaks for itself.",
  },
  {
    id: 'test-3',
    names: 'Prarit & Simran',
    initials: 'P',
    weddingLocation: 'Delhi NCR',
    year: '2024',
    stars: 5,
    quote:
      "Every frame looks like a high-fashion editorial magazine cover. They captured the authentic soul of our relationship with such poetry and precision. We are eternally grateful to Sumit Studio!",
  },
  {
    id: 'test-4',
    names: 'Manvi & Hardik',
    initials: 'M',
    weddingLocation: 'The Leela Palace, New Delhi',
    year: '2024',
    stars: 5,
    quote:
      'From the engagement to the main rituals, Sumit Studio demonstrated why they have a 4.8-star reputation. Punctual, exceptionally courteous, and delivered our photo albums in magnificent heirloom quality.',
  },
];

// Testimonial photo: Couple portrait in evening reception attire
export const TESTIMONIAL_COUPLE_IMAGE = {
  src: '/images/yt/AYOeKL3VNPA-maxresdefault.jpg',
  alt: 'Madhav & Niharika pre-wedding film portrait by Sumit Studio',
};

// Editorial Card Image for Inquiry Section
export const INQUIRY_CARD_IMAGE = {
  src: '/images/yt/AYOeKL3VNPA-maxresdefault.jpg',
  alt: 'Good Photos Better People - Sumit Studio Art Card',
};

// Instagram photos linking to @sumit.studio
export const INSTAGRAM_PHOTOS: InstagramItem[] = [
  {
    id: 'insta-1',
    image: '/images/yt/AYOeKL3VNPA-maxresdefault.jpg',
    alt: 'Madhav & Niharika in Goa @sumit.studio',
    likes: '2.8k',
    caption: 'Sunset hues, ocean breeze & eternal love in Goa with Madhav & Niharika. Film live on YouTube! @sumit.studio',
  },
  {
    id: 'insta-2',
    image: '/images/yt/UPtI04xC71k-maxresdefault.jpg',
    alt: 'Abhishek & Himanshi at Jim Corbett @sumit.studio',
    likes: '3.4k',
    caption: 'Same day edit magic amidst wilderness and royal vows. Abhishek & Himanshi @sumit.studio',
  },
  {
    id: 'insta-3',
    image: '/images/yt/x0dr-294WOw-maxresdefault.jpg',
    alt: 'Prarit & Simran Luxury Prewedding @sumit.studio',
    likes: '4.1k',
    caption: 'High-fashion romance in Delhi NCR. Simran & Prarit looking timeless. @sumit.studio',
  },
  {
    id: 'insta-4',
    image: '/images/yt/nN635qR7ifI-maxresdefault.jpg',
    alt: 'Manvi & Hardik Engagement @sumit.studio',
    likes: '1.9k',
    caption: 'Pure royal celebrations at The Leela Palace! Congratulations Manvi & Hardik @sumit.studio',
  },
  {
    id: 'insta-5',
    image: '/images/yt/4nBk7dJSULA-maxresdefault.jpg',
    alt: 'Anuragh & Annu Picture Villa Shoot @sumit.studio',
    likes: '2.2k',
    caption: 'Dreamy setups, candid smiles and pure love at Picture Villa. @sumit.studio',
  },
  {
    id: 'insta-6',
    image: '/images/yt/Exrv6mdcRpM-maxresdefault.jpg',
    alt: 'Dhruv & Navya Goa Pre-Wedding @sumit.studio',
    likes: '3.1k',
    caption: 'Under the golden Goa sun with Dhruv & Navya. Coming soon! @sumit.studio',
  },
  {
    id: 'insta-7',
    image: '/images/yt/AYOeKL3VNPA-maxresdefault.jpg',
    alt: 'Bridal portrait elegance @sumit.studio',
    likes: '2.5k',
    caption: 'The quiet hour before vows. Handcrafted polki and pure serene beauty. @sumit.studio',
  },
];

