export interface TVSerial {
  id: string;
  title: string;
  country: 'India' | 'USA';
  genre: string[];
  yearStart: number;
  yearEnd: number;
  synopsis: string;
  cast: string[];
  rating: number;
  reviews: number;
  imageUrl: string;
  network: string;
  episodes?: number;
}

export const tvSerials: TVSerial[] = [
  {
    id: '1',
    title: "Ramayan",
    country: 'India',
    genre: ['Drama', 'Mythology', 'Epic'],
    yearStart: 1987,
    yearEnd: 1988,
    synopsis: "An epic television series based on the ancient Indian epic Ramayana, depicting the life of Lord Rama and his journey to rescue his wife Sita from the demon king Ravana.",
    cast: ['Arun Govil', 'Deepika Chikhalia', 'Sunil Lahri', 'Dara Singh'],
    rating: 9.5,
    reviews: 15420,
    imageUrl: 'https://images.unsplash.com/photo-1604357209793-fca5dca89f97?w=800&h=600&fit=crop',
    network: 'Doordarshan',
    episodes: 78
  },
  {
    id: '2',
    title: "Mahabharat",
    country: 'India',
    genre: ['Drama', 'Mythology', 'Epic'],
    yearStart: 1988,
    yearEnd: 1990,
    synopsis: "A legendary television adaptation of the ancient Indian epic Mahabharata, chronicling the Kurukshetra War and the fates of the Kaurava and Pandava princes.",
    cast: ['Nitish Bharadwaj', 'Mukesh Khanna', 'Puneet Issar', 'Roopa Ganguly'],
    rating: 9.4,
    reviews: 12850,
    imageUrl: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop',
    network: 'Doordarshan',
    episodes: 94
  },
  {
    id: '3',
    title: "Buniyaad",
    country: 'India',
    genre: ['Drama', 'Historical', 'Family'],
    yearStart: 1986,
    yearEnd: 1987,
    synopsis: "A powerful drama depicting the partition of India in 1947 and its impact on a Punjabi family, exploring themes of displacement, identity, and resilience.",
    cast: ['Alok Nath', 'Anita Kanwar', 'Kiran Juneja', 'Vijayendra Ghatge'],
    rating: 9.2,
    reviews: 8640,
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop',
    network: 'Doordarshan',
    episodes: 104
  },
  {
    id: '4',
    title: "Malgudi Days",
    country: 'India',
    genre: ['Drama', 'Comedy', 'Slice of Life'],
    yearStart: 1986,
    yearEnd: 1987,
    synopsis: "Based on R.K. Narayan's stories, this anthology series captures life in the fictional town of Malgudi, showcasing simple yet profound tales of ordinary people.",
    cast: ['Girish Karnad', 'Vishnuvardhan', 'Master Manjunath'],
    rating: 9.0,
    reviews: 7230,
    imageUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=600&fit=crop',
    network: 'Doordarshan',
    episodes: 54
  },
  {
    id: '5',
    title: "Nukkad",
    country: 'India',
    genre: ['Drama', 'Social', 'Comedy'],
    yearStart: 1986,
    yearEnd: 1987,
    synopsis: "A groundbreaking series depicting the lives of common people in an urban neighborhood, addressing social issues with humor and sensitivity.",
    cast: ['Dilip Dhawan', 'Rama Vij', 'Sameer Khakhar', 'Pavan Malhotra'],
    rating: 8.9,
    reviews: 6540,
    imageUrl: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop',
    network: 'Doordarshan',
    episodes: 40
  },
  {
    id: '6',
    title: "The Twilight Zone",
    country: 'USA',
    genre: ['Sci-Fi', 'Horror', 'Thriller', 'Anthology'],
    yearStart: 1959,
    yearEnd: 1964,
    synopsis: "An iconic anthology series presenting standalone stories of science fiction, horror, and psychological thriller, often with twist endings and social commentary.",
    cast: ['Rod Serling', 'Various Guest Stars'],
    rating: 9.0,
    reviews: 18750,
    imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop',
    network: 'CBS',
    episodes: 156
  },
  {
    id: '7',
    title: "I Love Lucy",
    country: 'USA',
    genre: ['Comedy', 'Sitcom', 'Family'],
    yearStart: 1951,
    yearEnd: 1957,
    synopsis: "A groundbreaking sitcom following the hilarious misadventures of Lucy Ricardo and her bandleader husband Ricky, setting the standard for television comedy.",
    cast: ['Lucille Ball', 'Desi Arnaz', 'Vivian Vance', 'William Frawley'],
    rating: 8.8,
    reviews: 14320,
    imageUrl: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&h=600&fit=crop',
    network: 'CBS',
    episodes: 180
  },
  {
    id: '8',
    title: "The Honeymooners",
    country: 'USA',
    genre: ['Comedy', 'Sitcom'],
    yearStart: 1955,
    yearEnd: 1956,
    synopsis: "A classic sitcom about Brooklyn bus driver Ralph Kramden and his wife Alice, featuring timeless comedy and memorable catchphrases.",
    cast: ['Jackie Gleason', 'Audrey Meadows', 'Art Carney', 'Joyce Randolph'],
    rating: 8.7,
    reviews: 9840,
    imageUrl: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800&h=600&fit=crop',
    network: 'CBS',
    episodes: 39
  },
  {
    id: '9',
    title: "Gunsmoke",
    country: 'USA',
    genre: ['Western', 'Drama'],
    yearStart: 1955,
    yearEnd: 1975,
    synopsis: "The longest-running Western series in television history, following Marshal Matt Dillon as he maintains law and order in Dodge City, Kansas.",
    cast: ['James Arness', 'Milburn Stone', 'Amanda Blake', 'Dennis Weaver'],
    rating: 8.5,
    reviews: 11250,
    imageUrl: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800&h=600&fit=crop',
    network: 'CBS',
    episodes: 635
  },
  {
    id: '10',
    title: "The Andy Griffith Show",
    country: 'USA',
    genre: ['Comedy', 'Sitcom', 'Family'],
    yearStart: 1960,
    yearEnd: 1968,
    synopsis: "A beloved sitcom set in the fictional town of Mayberry, North Carolina, following Sheriff Andy Taylor and his son Opie in their wholesome small-town adventures.",
    cast: ['Andy Griffith', 'Ron Howard', 'Don Knotts', 'Frances Bavier'],
    rating: 8.9,
    reviews: 13680,
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop',
    network: 'CBS',
    episodes: 249
  },
  {
    id: '11',
    title: "Hum Log",
    country: 'India',
    genre: ['Drama', 'Family', 'Social'],
    yearStart: 1984,
    yearEnd: 1985,
    synopsis: "India's first daily soap opera, depicting the struggles and aspirations of a middle-class family, addressing social issues and family dynamics.",
    cast: ['Ashok Kumar', 'Vinod Nagpal', 'Sushma Seth', 'Abhinav Chaturvedi'],
    rating: 8.6,
    reviews: 5420,
    imageUrl: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop',
    network: 'Doordarshan',
    episodes: 154
  },
  {
    id: '12',
    title: "Circus",
    country: 'India',
    genre: ['Drama', 'Adventure'],
    yearStart: 1989,
    yearEnd: 1990,
    synopsis: "A captivating series about life in a traveling circus, exploring the dreams, struggles, and relationships of circus performers.",
    cast: ['Shahrukh Khan', 'Ashutosh Gowariker', 'Renuka Shahane', 'Pawan Malhotra'],
    rating: 8.4,
    reviews: 4850,
    imageUrl: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop',
    network: 'Doordarshan',
    episodes: 19
  }
];

export const genres = [
  'All',
  'Drama',
  'Comedy',
  'Mythology',
  'Historical',
  'Sci-Fi',
  'Western',
  'Thriller',
  'Family',
  'Social'
];

export const countries = ['All', 'India', 'USA'];