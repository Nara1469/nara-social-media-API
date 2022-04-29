const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { getRandomName, getRandomText, getRandomReactions } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Drop existing users
  await User.deleteMany({});

  // Create empty array to hold the thoughts
  const thoughtArray = [];
  // Create empty array to hold the users
  const users = [];
  let username = '';

  // Loop 10 times -- add thoughts to the thoughts array
  for (let i = 0; i < 10; i++) {
    // Get some random reaction objects using a helper function that we imported from ./data
    const reactions = getRandomReactions(3);

    const thoughtText = getRandomText();
    username = getRandomName();

    thoughtArray.push({
      thoughtText,
      username,
      reactions,
    });

    const email = `${username.toLowerCase()}@test.com`;
    // const thoughts = [];
    // thoughts.push(thoughtArray[thoughtArray.length - 1]);

    users.push({
      username,
      email,
      // thoughts,
    });
  }

  // Add thoughts to the collection and await the results
  await Thought.collection.insertMany(thoughtArray);

  // Add users to the collection and await the results
  await User.collection.insertMany(users);

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
