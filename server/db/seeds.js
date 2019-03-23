use marvel;
db.dropDatabase();

db.characters.insertMany([
  {
    name: "Iron Man",
    health: 1000,
    moves: {
      "Punch": 50,
      "Kick": 70,
      "Repulsor Beam": 250,
      "Homing Rockets": 500
    },
    img: "http://pngimg.com/download/29641",
    archetype: "Hero"
  },
  {
    name: "The Hulk",
    health: 2000,
    moves: {
      "Punch": 70,
      "Kick": 70,
      "Hulk Smash": 800,
      "Resist Banner": 10

    },
    img: "https://pngimg.com/uploads/hulk/hulk_PNG115.png",
    archetype: "Hero"
  },
  {
    name: "Captain America",
    health: 1200,
    moves: {
      "Punch": 40,
      "Kick": 80,
      "Shield Throw": 150,
      "Shield Punch": 350
    },
    img: "http://pngimg.com/uploads/captain_america/captain_america_PNG76.png",
    archetype: "Hero"
  },
  {
    name: "Thor",
    health: 1500,
    moves: {
      "Punch": 50,
      "Kick": 50,
      "Hammer": 150,
      "Lightning Storm": 700
    },
    img: "http://pluspng.com/img-png/thor-hd-png-thor-images-thor-png-2179.png",
    archetype: "Hero"
  }
]);
