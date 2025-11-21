export interface PhotoBookEntry {
  id: number;
  imageUrl: string;
  message: string;
}

const messages: string[] = [
  "Novio, One year with you has been an adventure. I've been  learning the gentle, yet strong language of your soul. The soft parts of your soul, the strong parts of your mind, the emotional layers of your person, the thoughtful pauses in your talks, the frowns and laughs after tension. Somehow all these have blended into a rhythm only the two of us understand.",
  "I always knew love could be warm and exciting. I just didn't know if I could handle it.  You added softness to my strength, fire into my quiet; and we somehow found a balance that feels like home.",
  "This year taught me the rhythm of your heart. How your emotions rise like tides, how your thoughts run deep, how your strength hides behind your gentleness. Knowing you this closely is a privilege I don’t take for granted.",
  "You've always been my favorite person. But somewhere over these twelve months, you cemented your role as the place my mind goes whenever I need peace. You’re the calm after my storms and the warmth in my cold mornings..",
  "The little things we shared together: cooking side by side, goddipping at events, late-night snacks, laughing at our goofy jokes are the memories that shaped our whole year.",
  "I didn’t just fall for you. I kept discovering you. Your tenacity, your empathy, the quiet beauty in your routines, the brilliance in your mind. Every new layer drew me closer.",
  "Thank you for the way you challenge me with gentleness, love me with emotion, stand your ground with fire, and still melt into me when life gets heavy. This year showed me just how fortunate I am to have you.",
  "We’ve had days full of laughter and days full of tension. Days when we were fire and ice, and nights when we found our way back into each other’s arms. Every one of those days matters to me.",
  "One year later, you still give me butterflies. But now it’s deeper, steadier, built on who we truly are, not just who we imagined ourselves to be.",
  "Your love this year has been soft enough to soothe me when in pain and strong enough to steady my feet when they shake. You love with thought and emotion, with energy and intention; and it amazes me every time.",
  "Every time I look at you, your beauty, your brilliance, your mostly quiet strength reminds me that choosing you was the best decision of my life.",
  "You make growth feel natural. You make love feel safe. You make life feel sweeter in ways I didn’t even know I needed until you came in.",
  "Your love brought peace into my mind, strength into my choices, and clarity into my future. Even the toughest days feel conquerable with you beside me.",
  "Even our quiet moments feel magical. Sitting in silence around you feels fuller than being anywhere else. It's the strong connection between our souls",
  "One year in, and I’m still learning the secret corners of your heart. How deeply you feel and how easily you balance softness and strength. It’s one of the most beautiful things I've seen in any human.",
  "Thank you for loving me through my flaws. Not with judgment, but with empathy and that gentle firmness only you know how to give.",
  "This year we have tried to create a steady foundation. A structure shaped by honesty, vulnerable conversations, errors, corrections, growth, and a kind of love that holds on even in the most tense moments.",
  "You’ve increased the quality of my life in ways you may never fully understand. You’ve filled spaces I didn’t know were empty.",
  "Our first year wasn’t perfect, but it was real. It was us. Laughing at events, arguing in the kitchen, screaming the stadium, planning the family we’ll raise together. I wouldn’t change a single day.",
  "Here’s to our first year. A year of loving, learning, growing, cuddling, dreaming, and building a world where your presence is the glue that holds everything together. I can’t wait for the years ahead with you.",
];

const imageUrls: string[] = [
  "https://res.cloudinary.com/dbsnburpl/image/upload/v1763652722/17_hqjgiv.jpg",
"https://res.cloudinary.com/dbsnburpl/image/upload/v1763652714/24_osnqjb.jpg",
"https://res.cloudinary.com/dbsnburpl/image/upload/v1763652731/10_rtec09.jpg",
"https://res.cloudinary.com/dbsnburpl/image/upload/v1763652730/9_ppzyht.jpg",
"https://res.cloudinary.com/dbsnburpl/image/upload/v1763652728/8_p45xgc.jpg",
"https://res.cloudinary.com/dbsnburpl/image/upload/v1763652727/6_j8ncfy.jpg",
"https://res.cloudinary.com/dbsnburpl/image/upload/v1763652727/5_vpugb8.jpg",
"https://res.cloudinary.com/dbsnburpl/image/upload/v1763652725/7_ondtwl.jpg",
"https://res.cloudinary.com/dbsnburpl/image/upload/v1763652721/2_ew30zv.jpg",
"https://res.cloudinary.com/dbsnburpl/image/upload/v1763652721/15_yzmphv.jpg",
  "https://res.cloudinary.com/dbsnburpl/image/upload/v1763652734/11_eposeq.jpg",
"https://res.cloudinary.com/dbsnburpl/image/upload/v1763652718/12_h5mcdj.jpg",
"https://res.cloudinary.com/dbsnburpl/image/upload/v1763652716/13_ht5xsk.jpg",
"https://res.cloudinary.com/dbsnburpl/image/upload/v1763652720/16_gja0bz.jpg",
"https://res.cloudinary.com/dbsnburpl/image/upload/v1763652716/22_kperac.jpg",
"https://res.cloudinary.com/dbsnburpl/image/upload/v1763652715/19_z8vtfa.jpg",
"https://res.cloudinary.com/dbsnburpl/image/upload/v1763652715/14_mqtwg3.jpg",
"https://res.cloudinary.com/dbsnburpl/image/upload/v1763652714/25_dxhgsi.jpg",
"https://res.cloudinary.com/dbsnburpl/image/upload/v1763652714/27_hgkdwh.jpg",
"https://res.cloudinary.com/dbsnburpl/image/upload/v1763652732/18_jqa93t.jpg"
];


export const photobookData: PhotoBookEntry[] = messages.map((message, index) => ({
  id: index + 1,
  message,
  imageUrl: imageUrls[index % imageUrls.length],
}));
