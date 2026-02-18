export interface ImageItem {
  title: string;
  description: string;
  user: {
    name: string;
    img: string;
  };
  img: string;
}

const firstNames = [
  "Alex",
  "Jordan",
  "Sam",
  "Taylor",
  "Morgan",
  "Riley",
  "Casey",
  "Avery",
  "Quinn",
  "Reese",
  "Jamie",
  "Dakota",
  "Skyler",
  "Parker",
  "Cameron",
  "Blake",
  "Finley",
  "Emery",
  "Rowan",
  "Sage",
  "River",
  "Phoenix",
  "Kai",
  "Reign",
  "Noah",
  "Emma",
  "Liam",
  "Olivia",
  "Ethan",
  "Ava",
  "Mason",
  "Sophia",
  "Lucas",
  "Isabella",
  "Oliver",
  "Mia",
  "Elijah",
  "Charlotte",
  "James",
  "Amelia",
];

const lastNames = [
  "Smith",
  "Johnson",
  "Williams",
  "Brown",
  "Jones",
  "Garcia",
  "Miller",
  "Davis",
  "Rodriguez",
  "Martinez",
  "Hernandez",
  "Lopez",
  "Wilson",
  "Anderson",
  "Thomas",
  "Taylor",
  "Moore",
  "Jackson",
  "Martin",
  "Lee",
  "Thompson",
  "White",
  "Harris",
  "Clark",
  "Lewis",
  "Robinson",
  "Walker",
  "Young",
  "Hall",
  "Allen",
  "King",
  "Wright",
];

const titles = [
  "Mountain sunrise",
  "Ocean waves",
  "City lights",
  "Forest path",
  "Desert dunes",
  "Northern lights",
  "Waterfall view",
  "Sunset beach",
  "Snow peaks",
  "Garden bloom",
  "Street photography",
  "Architecture detail",
  "Wildlife moment",
  "Coffee morning",
  "Book nook",
  "Rainy window",
  "Starry night",
  "Autumn leaves",
  "Spring blossoms",
  "Winter cabin",
  "Urban exploration",
  "Coastal cliff",
  "Meadow flowers",
  "Lakeside calm",
  "Skyline view",
  "Minimalist space",
  "Vintage vibes",
  "Modern design",
  "Rustic charm",
  "Abstract art",
  "Portrait session",
  "Travel diary",
  "Food styling",
  "Nature walk",
  "Morning light",
  "Golden hour",
  "Blue hour",
  "Misty morning",
  "Storm clouds",
  "Clear sky",
];

const descriptions = [
  "A peaceful moment captured in time.",
  "Exploring new perspectives and angles.",
  "The beauty of everyday scenes.",
  "Where light meets shadow.",
  "A story told through the lens.",
  "Finding calm in the chaos.",
  "Nature’s palette at its finest.",
  "Details that often go unnoticed.",
  "A glimpse into another world.",
  "Simplicity speaks volumes.",
  "Mood and atmosphere in focus.",
  "Spontaneous and authentic.",
  "Composed with intention.",
  "Texture, color, and form.",
  "An invitation to look closer.",
  "Moments worth remembering.",
  "Light painting the scene.",
  "Quiet beauty in the frame.",
  "Adventure in every shot.",
  "Emotion frozen in time.",
];

function pick<T>(arr: T[], index: number): T {
  return arr[index % arr.length];
}

function generateImageData(count: number): ImageItem[] {
  const items: ImageItem[] = [];
  for (let i = 0; i < count; i++) {
    const firstName = pick(firstNames, i);
    const lastName = pick(lastNames, Math.floor(i / firstNames.length));
    const fullName = `${firstName} ${lastName}`;
    items.push({
      title: pick(titles, i) + (i > titles.length ? ` #${i + 1}` : ""),
      description: pick(descriptions, i),
      user: {
        name: fullName,
        img: `https://i.pravatar.cc/100?u=user-${i}`,
      },
      img: `https://picsum.photos/seed/${i}/600/600`,
    });
  }
  return items;
}

export const imageData: ImageItem[] = generateImageData(200);
