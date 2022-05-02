const names = [
  'Aaron',
  'Aaron-James',
  'Aazaan',
  'Arnold',
  'Abbas',
  'Allison',
  'Abdalroof',
  'Abdihakim',
  'Amy',
  'Abdisalam',
  'Abdul',
  'Smith',
  'Jones',
  'Coolname',
  'Zaya',
  'Zendel',
  'Zenith',
  'Zennon',
  'Zhong',
  'Zinedine',
  'Zion',
  'Zishan',
  'Keith',
  'Ziyaan',
  'Zohaib',
  'Zohair',
  'Zoubaeir',
  'Zubair',
  'Zubayr',
  'Zuriel',
  'Xander',
  'Jared',
  'Courtney',
  'Gillian',
  'Clark',
  'Jared',
  'Grace',
  'Kelsey',
  'Tamar',
  'Alex',
  'Mark',
  'Tamar',
  'Farish',
  'Sarah',
  'Nathaniel',
  'Parker',
];

const thoughtArray = [
  'Decision Tracker',
  'Find My Phone',
  'Learn Piano',
  'Starbase Defender',
  'Tower Defense',
  'Monopoly Money Manager',
  'Movie trailers',
  'Hello world',
  'Stupid Social Media App',
  'Notes',
  'Messages',
  'Email',
  'Compass',
  'Firefox',
  'Running app',
  'Cooking app',
  'Poker',
  'Deliveries',
];

const reactionArray = [
  'Happy',
  'Smile',
  'Sad',
  'Like',
  'Dislike',
  'LOL',
  'Heart',
  'Thanks',
  'Fire',
  'Melt',
  'Love',
  'Crazy',
  'Please',
  'Boring',
  'Run',
  'Cool',
  'Poke',
  'Just Do It',
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(names)}`;

// Gets a random thought
const getRandomText = () =>
  `${getRandomArrItem(thoughtArray)}`;

// Function to generate random reactions that we can add to thought object.
const getRandomReactions = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionBody: getRandomArrItem(reactionArray),
      username: getRandomName(),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomText, getRandomReactions };
