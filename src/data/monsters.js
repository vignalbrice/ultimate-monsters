import { Alien } from "../components/Monsters/Alien";
import { Cactoro } from "../components/Monsters/Cactoro";
import { Dragon } from "../components/Monsters/Dragon_Evolved";

export const monsters = [
  {
    name: "Alien",
    color: "#9e4176",
    texture: "textures/anime_cactus_world.jpg",
    Monster: Alien,
    Animations: {
      Punch: "Punch",
      Idle: "Idle",
    },
  },
  {
    name: "Dragon",
    color: "#ca7547",
    texture: "textures/anime_lava_world.jpg",
    positionX: -2.5,
    rotationY: Math.PI / 8,
    Monster: Dragon,
    Animations: {
      Heatbutt: "Headbutt",
      FlyingIdle: "Flying_Idle",
    },
  },
  {
    name: "Cactoro",
    color: "#7a9d4a",
    texture: "textures/anime_water_world.jpg",
    positionX: 2.5,
    rotationY: -Math.PI / 8,
    Monster: Cactoro,
    Animations: {
      Wave: "Wave",
      Idle: "Idle",
    },
  },
];
