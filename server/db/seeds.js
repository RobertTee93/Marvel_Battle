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
    img: "http://pngimg.com/uploads/ironman/ironman_PNG48.png",
    icon: "https://cdn4.iconfinder.com/data/icons/people-avatars-12/24/people_avatar_head_iron_man_marvel_hero-512.png",
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
    icon: "https://cdn4.iconfinder.com/data/icons/blast/127/hulk-512.png",
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
    icon: "https://cdn4.iconfinder.com/data/icons/people-avatars-12/24/people_avatar_head_captain_america_marvel_hero-512.png",
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
    icon: "https://cdn4.iconfinder.com/data/icons/blast/127/thor-512.png",
    archetype: "Hero"
  }
]);
