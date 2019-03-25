use marvel;
db.dropDatabase();

db.characters.insertMany([
  {
    "_id": "5c97d99a9359ad6914a37cee",
    "name": "Iron Man",
    "health": 1000,
    "moves": {
      "Punch": 50,
      "Kick": 70,
      "Repulsor Beam": 250,
      "Homing Rockets": 500
    },
    "img": "iron_man.png",
    "icon": "https://cdn4.iconfinder.com/data/icons/people-avatars-12/24/people_avatar_head_iron_man_marvel_hero-512.png",
    "archetype": "Hero"
  },
  {
    "_id": "5c97d99a9359ad6914a37cef",
    "name": "The Hulk",
    "health": 2000,
    "moves": {
      "Punch": 70,
      "Kick": 70,
      "Hulk Smash": 800,
      "Resist Banner": 10
    },
    "img": "the_hulk.png",
    "icon": "https://cdn4.iconfinder.com/data/icons/blast/127/hulk-512.png",
    "archetype": "Hero"
  },
  {
    "_id": "5c97d99a9359ad6914a37cf0",
    "name": "Captain America",
    "health": 1200,
    "moves": {
      "Punch": 40,
      "Kick": 80,
      "Shield Throw": 150,
      "Shield Punch": 350
    },
    "img": "captain_america.png",
    "icon": "https://cdn4.iconfinder.com/data/icons/people-avatars-12/24/people_avatar_head_captain_america_marvel_hero-512.png",
    "archetype": "Hero"
  },
  {
    "_id": "5c97d99a9359ad6914a37cf1",
    "name": "Thor",
    "health": 1500,
    "moves": {
      "Punch": 50,
      "Kick": 50,
      "Hammer": 150,
      "Lightning Storm": 700
    },
    "img": "thor.png",
    "icon": "https://cdn4.iconfinder.com/data/icons/blast/127/thor-512.png",
    "archetype": "Hero"
  },
  {
    "_id": "5c97e7f4fe6686a46525b691",
    "name": "Groot",
    "health": "1200",
    "moves": {
      "Punch": "80",
      "Kick": "90",
      "Branch Swipe": "300",
      "I am Groot": "450"
    },
    "img": "groot.png",
    "icon": "https://cdn4.iconfinder.com/data/icons/blast/127/groot-512.png",
    "archetype": "Hero"
  },
  {
    "_id": "5c97e92cfe6686a46525b692",
    "name": "Star Lord",
    "health": "1500",
    "moves": {
      "Punch": "70",
      "Kick": "50",
      "Space Rifle": "250",
      "Harness infinity Stone": "550"
    },
    "img": "star_lord.png",
    "icon": "https://cdn4.iconfinder.com/data/icons/heroes-villains-vol-2-colored/100/Star_Lord-512.png",
    "archetype": "Hero"
  },
  {
    "_id": "5c97ea0efe6686a46525b693",
    "name": "Thanos",
    "health": "2000",
    "moves": {
      "Punch": "50",
      "Kick": "50",
      "Gather infinity stones": 0,
      "Snap Fingers": "5000"
    },
    "img": "thanos.png",
    "icon": "https://cdn3.iconfinder.com/data/icons/marvel-avatars-flaticons/64/thanos-avangers-marvel-avatars-gartoon-marvel_avatars-hero-512.png",
    "archetype": "Villain"
  },
  {
    "_id": "5c97eaf2fe6686a46525b694",
    "name": "Black Panther",
    "health": "1700",
    "moves": {
      "Punch": "70",
      "Kick": "70",
      "Vibranium Reflect": "300",
      "Panther Claw": "300"
    },
    "img": "black_panther.png",
    "icon": "https://cdn2.iconfinder.com/data/icons/diversity-avatars-vol-3/64/black-panther-comic-superhero-512.png",
    "archetype": "Hero"
  },
  {
    "_id": "5c989a30fe6686a46525b697",
    "name": "Venom",
    "health": "1400",
    "moves": {
      "Punch": "50",
      "Kick": "60",
      "Prehensile Tounge": "200",
      "Venemos Bite": "350"
    },
    "img": "venom.png",
    "icon": "https://png2.kisspng.com/sh/a72c720b52d68b6dfb881b668ccc2dc1/L0KzQYm3U8E1N6pxfZH0aYP2gLBuTgNxcZVqip92YX6whrb1jB0ue6pyett4dHWwc73wkL1ieqUyjtd3b32wdrLqhb1kdJp1eeR9cz24cbKCU8A5bJNmTadqMT6zSIK4WME3OGI6SqM5M0e3RYSAVsMzNqFzf3==/kisspng-spider-man-venom-symbiote-clip-art-venom-face-cliparts-5aa9308dba55a1.0811816015210374537632.png",
    "archetype": "Villain"
  }
]);
