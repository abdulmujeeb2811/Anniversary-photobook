export interface PhotoBookEntry {
  id: number;
  imageUrl: string;
  message: string;
}

const messages: string[] = [
  "One year with you feels like I’ve been learning the gentle language of your soul. The soft parts, the fierce parts, the emotional layers, the thoughtful pauses, the laughter after tension… somehow they’ve blended into a rhythm only the two of us understand.",
  "I didn’t know love could be this warm and exciting at the same time. You brought softness into my calm, fire into my quiet, and we somehow found a balance that feels like home.",
  "This year taught me the rhythm of your heart. How your emotions rise like tides, how your thoughts run deep, how your strength hides behind your gentleness. Knowing you this closely is a privilege I don’t take for granted.",
  "Somewhere over these twelve months, you stopped being just someone I love and became the place my mind goes whenever I need peace. You’re the calm after my storms and the warmth in my cold mornings..",
  "The little things we shared together — cooking side by side, walking into events hand in hand, late-night snacks, laughing at our goofy jokes — they somehow became the memories that shaped our whole year.",
  "I didn’t just fall for you. I kept discovering you. Your tenacity, your empathy, the quiet beauty in your routines, the brilliance in your mind. Every new layer drew me closer.",
  "Thank you for the way you challenge me with gentleness, love me with emotion, stand your ground with fire, and still melt into me when life gets heavy. This year showed me just how fortunate I am to have you.",
  "We’ve had days full of laughter and days full of tension. Days when we were fire and ice, and nights when we found our way back into each other’s arms. Every one of those days matters to me.",
  "One year later, you still give me butterflies. But now it’s deeper, steadier, built on who we truly are, not just who we imagined ourselves to be.",
  "Your love this year has been soft enough to soothe me and strong enough to steady me. You love with emotion, with thought, with fire and intention, and it amazes me every time.",
  "Every time I look at you — your beauty, your brilliance, your quiet strength — I’m reminded that choosing you was the best decision of my life.",
  "You make growth feel natural. You make love feel safe. You make life feel sweeter in ways I didn’t even know I needed until you came in.",
  "Your love brought peace into my mind, strength into my choices, and clarity into my future. Even tough days feel conquerable with you beside me.",
  "There’s something magical about how even our quiet moments feel full. Cooking together, sitting close without speaking, watching a match at the stadium, dreaming about our future kids… you turn silence into connection.",
  "One year in, and I’m still learning the secret corners of your heart. How deeply you feel, how carefully you think, how naturally you balance softness and strength. It’s one of the most beautiful things about you.",
  "Thank you for loving me through my flaws. Not with judgment, but with empathy, warmth, and that gentle firmness only you know how to give.",
  "This year we built something steady. A foundation shaped by honesty, vulnerable conversations, growth, and a kind of love that holds on even in the fire-and-ice moments.",
  "You’ve increased the quality of my life in ways you may never fully understand. Emotionally, mentally, spiritually — you’ve filled spaces I didn’t know were empty.",
  "Our first year wasn’t perfect, but it was real. It was us. Laughing at events, arguing in the kitchen, holding hands at the stadium, dreaming of the family we’ll raise together. I wouldn’t change a single day.",
  "Here’s to our first year. A year of loving, learning, teasing, cuddling, dreaming, growing, and building a world where your presence feels like the center of everything. I can’t wait for the years ahead with you.",
];

const imageUrls: string[] = [
  "https://res.cloudinary.com/dbsnburpl/image/upload/v1763644235/IMG_0106_1_fd0f5t.jpg",
  "https://res.cloudinary.com/dbsnburpl/image/upload/v1763644233/20240802_200841_qahy27.jpg",
  "https://res.cloudinary.com/dbsnburpl/image/upload/v1763644226/20240802_200434_a32rei.jpg",
  "https://res.cloudinary.com/dbsnburpl/image/upload/v1763644225/20240809_071909_sjj5vx.jpg",
  "https://res.cloudinary.com/dbsnburpl/image/upload/v1763644225/IMG-20241121-WA0098_ma5zw4.jpg",
  "https://res.cloudinary.com/dbsnburpl/image/upload/v1763644222/IMG_20241217_210735_200_ao4e6a.jpg",
  "https://res.cloudinary.com/dbsnburpl/image/upload/v1763644228/IMG-20251012-WA0039_2_pbwclk.jpg",
  "https://res.cloudinary.com/dbsnburpl/image/upload/v1763644230/20241229_094425_ohfm0b.jpg",
  "https://res.cloudinary.com/dbsnburpl/image/upload/v1763644225/IMG-20251012-WA0019_oc1std.jpg",
  "https://res.cloudinary.com/dbsnburpl/image/upload/v1763644236/SB3_0820_yvdole.jpg",
  "https://res.cloudinary.com/dbsnburpl/image/upload/v1763644227/20250202_094542_nlzz3b.jpg",
  "https://res.cloudinary.com/dbsnburpl/image/upload/v1763644238/20240929_194511_lqugej.jpg",
  "https://res.cloudinary.com/dbsnburpl/image/upload/v1763644238/20250927_153833_hb6a85.jpg",
  "https://res.cloudinary.com/dbsnburpl/image/upload/v1763644240/SB3_0865_sbx8al.jpg",
  "https://res.cloudinary.com/dbsnburpl/image/upload/v1763645182/Screenshot_8_cfnmw2.png",
  "https://res.cloudinary.com/dbsnburpl/image/upload/v1763644238/20250518_161923_pvaipq.jpg",
  "https://res.cloudinary.com/dbsnburpl/image/upload/v1763644231/20250330_101939_ewx64y.jpg",
  "https://res.cloudinary.com/dbsnburpl/image/upload/v1763644229/SB3_0800_zwmqmc.jpg",
  "https://res.cloudinary.com/dbsnburpl/image/upload/v1763645182/Screenshot_10_ffk5zs.png",
  "https://res.cloudinary.com/dbsnburpl/image/upload/v1763644244/IMG_0275_qorbtz.jpg"
];


export const photobookData: PhotoBookEntry[] = messages.map((message, index) => ({
  id: index + 1,
  message,
  imageUrl: imageUrls[index % imageUrls.length],
}));
