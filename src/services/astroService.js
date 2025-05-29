// Mock data for astrology services
// In a real app, these would be API calls to a backend service

// Helper to simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Generate a semi-random response based on input text
export const getAstrologerResponse = async (question) => {
  await delay(1000 + Math.random() * 1000); // Simulate network delay
  
  // Convert question to lowercase for easier matching
  const q = question.toLowerCase();
  
  // Check for common question patterns
  if (q.includes('love') || q.includes('relationship') || q.includes('partner')) {
    return "The stars indicate a period of emotional growth. Venus is entering your house of relationships, which suggests new connections may form or existing ones will deepen. Open your heart to the cosmic energy flowing around you.";
  } else if (q.includes('career') || q.includes('job') || q.includes('work')) {
    return "Your career path is showing promising alignments. Mercury's position indicates good communication will lead to progress. Consider new opportunities that may arise unexpectedly - the planetary positions favor bold moves at this time.";
  } else if (q.includes('health') || q.includes('wellness') || q.includes('sick')) {
    return "The celestial bodies suggest you should focus on balancing your energies. Jupiter's influence brings vitality, but be mindful of Mars pushing you toward exhaustion. Incorporate more grounding practices like meditation and nature walks into your routine.";
  } else if (q.includes('money') || q.includes('finance') || q.includes('wealth')) {
    return "Financial matters are under Saturn's watchful eye currently. This suggests a time for careful planning rather than impulsive spending. The stars align for long-term investments, particularly around the next full moon.";
  } else if (q.includes('future') || q.includes('predict') || q.includes('what will')) {
    return "The cosmic tapestry reveals a period of significant transformation ahead. Your ruling planet is entering a powerful phase that occurs only once every few years. Stay open to unexpected opportunities, especially those that arise through seemingly random connections.";
  } else if (q.includes('compatible') || q.includes('match') || q.includes('who should')) {
    return "Compatibility is written in the stars but also shaped by personal growth. Currently, you may find deeper connections with earth signs (Taurus, Virgo, Capricorn) as your energy patterns complement each other. Remember that the most powerful relationships help both people evolve.";
  } else if (q.includes('lucky') || q.includes('fortune') || q.includes('chance')) {
    return "Your lucky period is approaching with the waxing moon. The number 7 appears significant in your chart, and situations involving water (emotional contexts or literal water settings) may bring unexpected fortune. Trust your intuition during this cycle.";
  } else if (q.includes('best time') || q.includes('when should') || q.includes('timing')) {
    return "The planetary alignments suggest favorable timing around the middle of the month when Mercury aligns with Jupiter. For important decisions or new beginnings, the days just after the new moon (visible on your calendar) provide cosmic support for new endeavors.";
  } else {
    // Generic response for other questions
    return "The cosmic energies surrounding your question are intriguing. The current planetary alignment suggests a period of reflection would be beneficial before taking action. Pay attention to recurring symbols or patterns in your daily life as the universe may be sending you messages through these synchronicities.";
  }
};

// Mock data for daily horoscopes
const horoscopeData = {
  aries: {
    sign: 'aries',
    date: new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    prediction: "Today, your ruling planet Mars brings a surge of energy and enthusiasm. You'll find yourself motivated to tackle challenges head-on. Trust your instincts when making decisions, but be mindful not to rush into things without proper consideration.",
    love: "Passion is in the air for Aries today. If you're in a relationship, express your feelings openly. Single? Someone new might catch your attention.",
    career: "Your determination shines in the workplace. A good day to take initiative on projects or speak up in meetings.",
    health: "Channel your abundant energy into physical activity. Exercise will help balance your mind and body today.",
    luckyNumber: "9",
    luckyColor: "Red",
    compatibility: "Leo"
  },
  taurus: {
    sign: 'taurus',
    date: new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    prediction: "Venus, your ruling planet, enhances your appreciation for beauty and comfort today. It's an excellent day for creative pursuits and enjoying life's pleasures. Financial matters may require attention - trust your practical nature to guide you.",
    love: "Romance takes on a sensual quality today. Share a delicious meal or enjoy art with your partner. Singles might find love through shared interests.",
    career: "Your steady approach and eye for detail will be appreciated. Focus on projects requiring patience and precision.",
    health: "Balance indulgence with healthy choices. Consider gentle exercises like yoga or a peaceful nature walk.",
    luckyNumber: "6",
    luckyColor: "Green",
    compatibility: "Virgo"
  },
  gemini: {
    sign: 'gemini',
    date: new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    prediction: "Mercury brings heightened communication skills today. Your mind is sharp and your words carry influence. It's an excellent day for writing, speaking, or negotiating. Social connections bring unexpected opportunities.",
    love: "Intellectual connection is key in your relationships today. Engage in stimulating conversations with your partner or potential love interests.",
    career: "Your adaptability and quick thinking will help you navigate workplace challenges. Collaborative projects are especially favored.",
    health: "Mental stimulation is as important as physical today. Try puzzles or learn something new to keep your mind active.",
    luckyNumber: "5",
    luckyColor: "Yellow",
    compatibility: "Libra"
  },
  cancer: {
    sign: 'cancer',
    date: new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    prediction: "The Moon enhances your intuitive abilities today. Pay attention to your dreams and gut feelings as they contain valuable insights. Home and family matters are highlighted - creating harmony in your personal space brings joy.",
    love: "Emotional bonds deepen today. Express care through nurturing gestures rather than just words.",
    career: "Your empathetic nature helps in team situations. Consider how you can create a more supportive work environment.",
    health: "Emotional well-being affects your physical health today. Make time for self-care rituals that soothe your soul.",
    luckyNumber: "2",
    luckyColor: "Silver",
    compatibility: "Scorpio"
  },
  leo: {
    sign: 'leo',
    date: new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    prediction: "The Sun, your ruling planet, fills you with confidence and vitality today. Your natural leadership qualities shine through, and others are drawn to your warmth and enthusiasm. Creative pursuits are especially favored.",
    love: "Your charisma is magnetic today. Express your affection generously and don't be afraid to take the spotlight in romance.",
    career: "Leadership opportunities arise. Your ability to inspire others makes you valuable in group projects.",
    health: "Your energy levels are high. Channel this into activities that make your heart sing.",
    luckyNumber: "1",
    luckyColor: "Gold",
    compatibility: "Aries"
  },
  virgo: {
    sign: 'virgo',
    date: new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    prediction: "Mercury sharpens your analytical abilities today. You'll find solutions to complex problems and notice details others miss. It's an excellent day for organizing, planning, and improving systems in your life.",
    love: "Show love through practical acts of service. Small, thoughtful gestures will mean more than grand displays.",
    career: "Your methodical approach and attention to detail make you invaluable today. Don't be afraid to suggest improvements to existing processes.",
    health: "Focus on establishing healthy routines. Small, consistent habits will yield significant benefits over time.",
    luckyNumber: "4",
    luckyColor: "Blue",
    compatibility: "Taurus"
  },
  libra: {
    sign: 'libra',
    date: new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    prediction: "Venus enhances your natural charm and diplomatic abilities today. Harmony in relationships is important to you, and you'll find yourself mediating conflicts or creating beauty around you. Balance work and pleasure for optimal well-being.",
    love: "Relationships flourish with honest communication. Create beautiful experiences to share with loved ones.",
    career: "Your ability to see all sides of a situation makes you an excellent mediator today. Help colleagues find common ground.",
    health: "Balance is key to your well-being. Make sure your aesthetic surroundings support your health goals.",
    luckyNumber: "7",
    luckyColor: "Pink",
    compatibility: "Gemini"
  },
  scorpio: {
    sign: 'scorpio',
    date: new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    prediction: "Pluto intensifies your emotions and perceptions today. Your intuition is powerful - trust it when making important decisions. Transformation is possible now, especially if you're willing to release what no longer serves you.",
    love: "Emotional intensity characterizes your relationships today. Allow yourself to be vulnerable with those you trust.",
    career: "Your investigative skills are heightened. Dig deeper into projects or research to uncover valuable insights.",
    health: "Transformation begins from within. Consider detoxifying practices for body and mind.",
    luckyNumber: "8",
    luckyColor: "Burgundy",
    compatibility: "Cancer"
  },
  sagittarius: {
    sign: 'sagittarius',
    date: new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    prediction: "Jupiter, your ruling planet, expands your horizons today. You're feeling adventurous and philosophical, making this an excellent time for learning, travel, or exploring new perspectives. Optimism carries you through any challenges.",
    love: "Share adventures with your partner or seek someone who appreciates your free spirit. Relationships should expand your world, not limit it.",
    career: "Think big picture today. Your visionary ideas can inspire others and create new opportunities.",
    health: "Adventure sustains your spirit. Incorporate exploration into your fitness routine, like hiking new trails.",
    luckyNumber: "3",
    luckyColor: "Purple",
    compatibility: "Aquarius"
  },
  capricorn: {
    sign: 'capricorn',
    date: new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    prediction: "Saturn encourages discipline and structure today. Your ambitious nature is highlighted, and you're able to make concrete progress toward long-term goals. Patient persistence will yield results - trust the process.",
    love: "Commitment and reliability are themes in relationships today. Show love through consistent presence rather than grand gestures.",
    career: "Your disciplined approach and long-term vision set you apart. Take steps toward ambitious goals, however small.",
    health: "Structure supports well-being. Establish healthy boundaries and routines that honor your physical needs.",
    luckyNumber: "10",
    luckyColor: "Brown",
    compatibility: "Virgo"
  },
  aquarius: {
    sign: 'aquarius',
    date: new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    prediction: "Uranus sparks innovative thinking today. You're seeing situations from unique angles and might have sudden insights or breakthroughs. Your humanitarian side is also highlighted - connecting with community brings fulfillment.",
    love: "Intellectual connection is essential in relationships today. Value partners who appreciate your unique perspective.",
    career: "Your innovative ideas stand out. Don't hesitate to suggest unconventional approaches to problems.",
    health: "Try something new in your wellness routine. Breaking from tradition might yield surprising benefits.",
    luckyNumber: "11",
    luckyColor: "Electric Blue",
    compatibility: "Sagittarius"
  },
  pisces: {
    sign: 'pisces',
    date: new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    prediction: "Neptune enhances your imagination and spiritual sensitivity today. Creative inspiration flows freely, and you're more attuned to subtle energies around you. Boundaries may feel blurred - practice grounding techniques to stay centered.",
    love: "Emotional connection transcends words today. Share music, art, or spiritual practices with loved ones.",
    career: "Your creative vision is your greatest asset. Trust your intuition when approaching projects or solving problems.",
    health: "The mind-body connection is strong today. Practices like meditation or gentle swimming align your energies.",
    luckyNumber: "12",
    luckyColor: "Sea Green",
    compatibility: "Cancer"
  }
};

export const getDailyHoroscope = async (sign) => {
  await delay(800); // Simulate network delay
  return horoscopeData[sign] || null;
};

// Mock data for natchathira palan
const natchathiraData = {
  ashwini: createNatchathiraPalan('ashwini'),
  bharani: createNatchathiraPalan('bharani'),
  krittika: createNatchathiraPalan('krittika'),
  rohini: createNatchathiraPalan('rohini'),
  mrigashirsha: createNatchathiraPalan('mrigashirsha'),
  ardra: createNatchathiraPalan('ardra'),
  punarvasu: createNatchathiraPalan('punarvasu'),
  pushya: createNatchathiraPalan('pushya'),
  ashlesha: createNatchathiraPalan('ashlesha'),
  magha: createNatchathiraPalan('magha'),
  purva_phalguni: createNatchathiraPalan('purva_phalguni'),
  uttara_phalguni: createNatchathiraPalan('uttara_phalguni'),
  hasta: createNatchathiraPalan('hasta'),
  chitra: createNatchathiraPalan('chitra'),
  swati: createNatchathiraPalan('swati'),
  vishakha: createNatchathiraPalan('vishakha'),
  anuradha: createNatchathiraPalan('anuradha'),
  jyeshtha: createNatchathiraPalan('jyeshtha'),
  mula: createNatchathiraPalan('mula'),
  purva_ashadha: createNatchathiraPalan('purva_ashadha'),
  uttara_ashadha: createNatchathiraPalan('uttara_ashadha'),
  shravana: createNatchathiraPalan('shravana'),
  dhanishta: createNatchathiraPalan('dhanishta'),
  shatabhisha: createNatchathiraPalan('shatabhisha'),
  purva_bhadrapada: createNatchathiraPalan('purva_bhadrapada'),
  uttara_bhadrapada: createNatchathiraPalan('uttara_bhadrapada'),
  revati: createNatchathiraPalan('revati')
};

// Helper function to create natchathira palan data
function createNatchathiraPalan(star) {
  // Generate different predictions based on star
  const hash = star.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const seed = hash % 5; // 0-4 seed value for some variety
  
  const generalPredictions = [
    "The cosmic energies are aligning in your favor today. Your birth star is receiving positive vibrations from Jupiter, which brings opportunities for growth and expansion. Stay open to new possibilities.",
    "A transformative day lies ahead as your birth star interacts with Rahu. Changes may come unexpectedly, but they ultimately lead to spiritual evolution. Trust the process and remain adaptable.",
    "Your birth star is receiving stabilizing energy from Saturn today. This is an excellent time for laying foundations and making long-term plans. Patience will yield significant rewards.",
    "The Moon's position relative to your birth star heightens your intuition today. Pay attention to your dreams and inner promptings as they contain valuable guidance for navigating current challenges.",
    "Mercury's influence on your birth star sharpens your intellect and communication skills today. This is an auspicious time for important conversations, learning, or teaching others."
  ];
  
  // Create category predictions with different ratings based on seed
  return {
    star: star,
    date: new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
    generalPrediction: generalPredictions[seed],
    categories: [
      {
        name: "Love",
        prediction: getLovePrediction(seed),
        rating: 55 + (seed * 10)
      },
      {
        name: "Career",
        prediction: getCareerPrediction(seed),
        rating: 60 + (seed * 8)
      },
      {
        name: "Health",
        prediction: getHealthPrediction(seed),
        rating: 65 + (seed * 7)
      },
      {
        name: "Finance",
        prediction: getFinancePrediction(seed),
        rating: 50 + (seed * 9)
      },
      {
        name: "Travel",
        prediction: getTravelPrediction(seed),
        rating: 70 + (seed * 6)
      }
    ]
  };
}

function getLovePrediction(seed) {
  const predictions = [
    "Emotional connections deepen today. Express your feelings openly and listen with your heart. Single natives may encounter someone with significant potential.",
    "A period of reflection in relationships is indicated. Consider what you truly need from a partner. Existing relationships benefit from honest conversation.",
    "Harmony in relationships comes through patience today. Give others space while remaining supportive. Romance may blossom in unexpected settings.",
    "Passionate energy surrounds your relationships. Channel this positively through creative date ideas or heartfelt expressions of affection.",
    "Communication is key to relationship success today. Misunderstandings can be avoided through clear, compassionate dialogue. Trust your intuition about new connections."
  ];
  return predictions[seed];
}

function getCareerPrediction(seed) {
  const predictions = [
    "Your diligence gets recognized today. Projects you've been working on gain positive attention. Stay focused on delivering quality work.",
    "Collaborative efforts yield significant progress. Your ability to work with diverse team members creates valuable synergy and innovation.",
    "A challenge may arise that tests your problem-solving abilities. Approach it methodically and don't hesitate to seek advice from experienced colleagues.",
    "Creative thinking opens new professional pathways. Consider unconventional approaches to persistent challenges. Your unique perspective is valued.",
    "Leadership opportunities emerge today. Your natural abilities to guide and inspire others will be called upon. Step forward with confidence."
  ];
  return predictions[seed];
}

function getHealthPrediction(seed) {
  const predictions = [
    "Balance physical activity with proper rest today. Your energy flows smoothly when you honor both movement and recovery needs.",
    "Attention to nutrition brings noticeable benefits. Consider incorporating more whole, fresh foods into your diet. Stay hydrated throughout the day.",
    "Mental well-being requires focus today. Practices like meditation or journaling help clear mental clutter and reduce stress levels.",
    "Your body responds well to gentle, consistent movement. Activities like walking, swimming, or yoga align particularly well with today's energies.",
    "Preventative health measures are favored. Consider scheduling check-ups or addressing minor concerns before they develop further."
  ];
  return predictions[seed];
}

function getFinancePrediction(seed) {
  const predictions = [
    "Financial discipline pays dividends today. Review your budget and identify areas for potential savings or more efficient resource allocation.",
    "Unexpected expenses may arise. Having contingency funds proves valuable. Long-term investments show promising potential.",
    "Money management skills are highlighted. Your practical approach to finances creates stability. Consider consulting with a financial advisor for optimization strategies.",
    "New income opportunities present themselves. Stay alert to possibilities that align with your skills and interests. A passive income stream may begin to develop.",
    "Financial collaborations prove beneficial. Joint ventures or shared investments with trusted partners could yield significant returns over time."
  ];
  return predictions[seed];
}

function getTravelPrediction(seed) {
  const predictions = [
    "Short journeys bring unexpected joy today. Even local explorations can reveal new perspectives or connections. Travel with an open mind.",
    "Planning future travels is favored. Research destinations that call to your spirit. Consider locations with cultural or spiritual significance for you.",
    "Travel complications are possible today. Double-check arrangements and allow extra time for unexpected delays. Patience serves you well on journeys.",
    "A spontaneous trip or detour leads to delightful discoveries. Allow some flexibility in your schedule to accommodate unplanned adventures.",
    "Traveling with companions brings enhanced experiences today. Shared journeys create lasting memories and strengthen bonds. Consider group travel opportunities."
  ];
  return predictions[seed];
}

export const getNatchathiraPalan = async (star) => {
  await delay(800); // Simulate network delay
  return natchathiraData[star] || null;
};