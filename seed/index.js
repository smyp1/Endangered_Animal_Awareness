const db = require("../db");
const Animals = require("../Models/Animals");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const animals = [
    {
      name: "African Forest Elephant",
      danger_level: "Critically Endangered",
      image: "https://i.imgur.com/dlDvJLi.jpeg",
      biome: "62deffff61d5ef0a33ad0d00",
    },
    {
      name: "Amur Leopard",
      danger_level: "Critically Endangered",
      image: "https://i.imgur.com/a1bDr.jpeg",
      biome: "62def44361d5ef0a33ad0ccf",
    },
    {
      name: "Black Rhino",
      danger_level: "Critically Endangered",
      image: "https://i.imgur.com/enIAwBO.jpeg",
      biome: "62deffe161d5ef0a33ad0cfe",
    },
    {
      name: "Bornean Orangutan",
      danger_level: "Critically Endangered",
      image: "https://i.imgur.com/ESOtqQbb.jpg",
      biome: "62defd4061d5ef0a33ad0cf4",
    },
    {
      name: "Cross River Gorilla",
      danger_level: "Critically Endangered",
      image: "https://i.imgur.com/lDn6jsi.jpeg",
      biome: "62deffff61d5ef0a33ad0d00",
    },
    {
      name: "Eastern Lowland Gorilla",
      danger_level: "Critically Endangered",
      image: "https://i.imgur.com/blKKDtH.jpeg",
      biome: "62deffff61d5ef0a33ad0d00",
    },
    {
      name: "Hawksbill Turtle",
      danger_level: "Critically Endangered",
      image: "https://i.imgur.com/usVNL4v.jpeg",
      biome: "62df2985b59adf4b94e9226c",
    },
    {
      name: "Javan Rhino",
      danger_level: "Critically Endangered",
      image: "https://i.imgur.com/qwGTF1Y.jpeg",
      biome: "62defd4061d5ef0a33ad0cf4",
    },
    {
      name: "Orangutan",
      danger_level: "Critically Endangered",
      image: "https://i.imgur.com/BdhzMhT.jpeg",
      biome: "62defd4061d5ef0a33ad0cf4",
    },
    {
      name: "Saola",
      danger_level: "Critically Endangered",
      image: "https://i.imgur.com/4xW6o8K.jpeg",
      biome: "62def4ca61d5ef0a33ad0cd5",
    },
    {
      name: "Sumatran Elephant",
      danger_level: "Critically Endangered",
      image: "https://i.imgur.com/aUnBj.jpeg",
      biome: "62defd4061d5ef0a33ad0cf4",
    },
    {
      name: "Sumatran Orangutan",
      danger_level: "Critically Endangered",
      image: "https://i.imgur.com/ql8TAjY.jpeg",
      biome: "62defd4061d5ef0a33ad0cf4",
    },
    {
      name: "Sumatran Rhino",
      danger_level: "Critically Endangered",
      image: "https://i.imgur.com/oFMhXM3.jpeg",
      biome: "62defd4061d5ef0a33ad0cf4",
    },
    {
      name: "Sunda Tiger",
      danger_level: "Critically Endangered",
      image: "https://i.imgur.com/Vs5TyaU.jpeg",
      biome: "62defd4061d5ef0a33ad0cf4",
    },
    {
      name: "Vaquita",
      danger_level: "Critically Endangered",
      image: "https://i.imgur.com/XgTxFnh.jpeg",
      biome: "62df297ab59adf4b94e9226a",
    },
    {
      name: "Western Lowland Gorilla",
      danger_level: "Critically Endangered",
      image: "https://i.imgur.com/0qZGhaD.jpeg",
      biome: "62deffff61d5ef0a33ad0d00",
    },
    {
      name: "Yangtze Finless Porpoise",
      danger_level: "Critically Endangered",
      image: "https://i.imgur.com/VpsegEF.jpeg",
      biome: "62def2d161d5ef0a33ad0ccb",
    },
    {
      name: "African savanna elephant",
      danger_level: "Endangered",
      image: "https://i.imgur.com/92xvnYY.jpeg",
      biome: "62deffe161d5ef0a33ad0cfe",
    },
    {
      name: "African Wild Dog",
      danger_level: "Endangered",
      image: "https://i.imgur.com/7r1qHR0.jpeg",
      biome: "62deffe161d5ef0a33ad0cfe",
    },
    {
      name: "Asian Elephant",
      danger_level: "Endangered",
      image: "https://i.imgur.com/0jNdT1g.jpeg",
      biome: "62def4ca61d5ef0a33ad0cd5",
    },
    {
      name: "Black-footed Ferret",
      danger_level: "Endangered",
      image: "https://i.imgur.com/PmKZLRt.jpeg",
      biome: "62deebff61d5ef0a33ad0cb6",
    },
    {
      name: "Blue Whale",
      danger_level: "Endangered",
      image: "https://i.imgur.com/ZhOwF2g.png",
      biome: "62df297ab59adf4b94e9226a",
    },
    {
      name: "Bluefin Tuna",
      danger_level: "Endangered",
      image: "https://i.imgur.com/zaNRgEC.jpeg",
      biome: "62df297ab59adf4b94e9226a",
    },
    {
      name: "Bonobo",
      danger_level: "Endangered",
      image: "https://i.imgur.com/8Nj7SAN.jpeg",
      biome: "62deffff61d5ef0a33ad0d00",
    },
    {
      name: "Bornean Elephant",
      danger_level: "Endangered",
      image:
        "https://media.kidadl.com/large_60758b863bdfca8406eee17f_borneo_elephant_facts_are_interesting_3f5c573947.jpg",
      biome: "62defd4061d5ef0a33ad0cf4",
    },
    {
      name: "Chimpanzee",
      danger_level: "Endangered",
      image: "https://i.imgur.com/nTH6kCS.jpeg",
      biome: "62deffff61d5ef0a33ad0d00",
    },
    {
      name: "Fin Whale",
      danger_level: "Endangered",
      image: "https://i.imgur.com/A3VZNHq.jpeg",
      biome: "62df297ab59adf4b94e9226a",
    },
    {
      name: "Galápagos Penguin",
      danger_level: "Endangered",
      image:
        "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/169251881/1800",
      biome: "62df297ab59adf4b94e9226a",
    },
    {
      name: "Ganges River Dolphin",
      danger_level: "Endangered",
      image: "https://i.imgur.com/HpIYkr0.jpeg",
      biome: "62def4ca61d5ef0a33ad0cd5",
    },
    {
      name: "Green Turtle",
      danger_level: "Endangered",
      image: "https://i.imgur.com/N55BxBA.jpeg",
      biome: "62df2985b59adf4b94e9226c",
    },
    {
      name: "Hector's Dolphin",
      danger_level: "Endangered",
      image:
        "https://files.worldwildlife.org/wwfcmsprod/images/Hectors_Dolphin/hero_small/977k5v8nb3_shutterstock_1205907409.jpg",
      biome: "62df297ab59adf4b94e9226a",
    },
    {
      name: "Humphead Wrasse",
      danger_level: "Endangered",
      image: "https://i.imgur.com/ircfXaA.jpeg",
      biome: "62df2985b59adf4b94e9226c",
    },
    {
      name: "Indian Elephant",
      danger_level: "Endangered",
      image: "https://i.imgur.com/LZBnNUe.jpeg",
      biome: "62def4ca61d5ef0a33ad0cd5",
    },
    {
      name: "Indus River Dolphin",
      danger_level: "Endangered",
      image:
        "https://faunalytics.org/wp-content/uploads/2017/02/3590199054_9d9900dc21_z.jpg",
      biome: "62def4ca61d5ef0a33ad0cd5",
    },
    {
      name: "Irrawaddy Dolphin",
      danger_level: "Endangered",
      image: "https://i.imgur.com/sm4WUmX.jpeg",
      biome: "62def4ca61d5ef0a33ad0cd5",
    },
    {
      name: "Mountain Gorilla",
      danger_level: "Endangered",
      image: "https://i.imgur.com/WqaAUYW.jpeg",
      biome: "62deffff61d5ef0a33ad0d00",
    },
    {
      name: "North Atlantic Right Whale",
      danger_level: "Endangered",
      image: "https://i.imgur.com/HWNCEb1.png",
      biome: "62df2993b59adf4b94e9226e",
    },
    {
      name: "Red Panda",
      danger_level: "Endangered",
      image: "https://i.imgur.com/gC1cnlu.jpeg",
      biome: "62def44361d5ef0a33ad0ccf",
    },
    {
      name: "Sea Lions",
      danger_level: "Endangered",
      image: "https://i.imgur.com/YCPYzA4.jpeg",
      biome: "62df2985b59adf4b94e9226c",
    },
    {
      name: "Sea Turtle",
      danger_level: "Endangered",
      image: "https://i.imgur.com/zC8sER6b.jpg",
      biome: "62df297ab59adf4b94e9226a",
    },
    {
      name: "Sei Whale",
      danger_level: "Endangered",
      image: "https://i.imgur.com/SXs9YYX.jpeg",
      biome: "62df297ab59adf4b94e9226a",
    },
    {
      name: "Sri Lankan Elephant",
      danger_level: "Endangered",
      image: "https://i.imgur.com/Ogt5oJD.jpeg",
      biome: "62def4ca61d5ef0a33ad0cd5",
    },
    {
      name: "Tiger",
      danger_level: "Endangered",
      image: "https://i.imgur.com/GleAY3f.jpeg",
      biome: "62def57461d5ef0a33ad0cdc",
    },
    {
      name: "Whale",
      danger_level: "Endangered",
      image: "https://i.imgur.com/TstVDri.jpeg",
      biome: "62df2993b59adf4b94e9226e",
    },
    {
      name: "Whale Shark",
      danger_level: "Endangered",
      image: "https://i.imgur.com/uhrF66c.jpeg",
      biome: "62df297ab59adf4b94e9226a",
    },
  ];
  await Animals.insertMany(animals);
  console.log("Created some animals");
};
const run = async () => {
  await main();
  db.close();
};
run();
