// Importing images
import specialBg from "../assets/background/special.jpg";
import burgerBg from "../assets/background/burger.jpg";
import drinksBg from "../assets/background/drink.jpg";
import sandwishBg from "../assets/background/sandwish.jpg";
import Appetizers from "../assets/background/Appetizers.png";
import Tortilla from "../assets/background/Tortilla.png";
import hotdog from "../assets/MainPic/sandwishes/hotdog.jpg";


// Define MenuItem and Category interfaces
export interface MenuItem {
  title: string;
  image: string;
}

export interface Category {
  title: string;
  items: MenuItem[];
  backgroundImage: string;
}

// Exporting the categories data
export const EnglishCategories: Category[] = [
  {
    title: "Besto’s specials",
    items: [
      { title: "Brothers Package (2 people)", image: hotdog },
      { title: "Friends Package (3 people)", image: hotdog },
      { title: "Family Package (4 people)", image: hotdog },

    ],
    backgroundImage: specialBg,
  },
  {
    title: "Burgers",
    items: [
      { title: "Besto's Burger (With mushrooms)", image: hotdog },
      { title: "Classic Burger 160g", image: hotdog },
      { title: "Smash Burger 200g", image: hotdog },
      { title: "Smash Burger 300g", image: hotdog },
      { title: "Crispy chicken burger ", image: hotdog },
      { title: "Shnitzel burger", image: hotdog },

    ],
    backgroundImage: burgerBg,
  },
  {
    title: "Tortilla roll",
    items: [
      { title: "Chick fillet", image: hotdog },
      { title: "Cheese chick fillet", image: hotdog },
      { title: "Mushroom chick fillet", image: hotdog },
      { title: "Shnitzel roll", image: hotdog },

    ],
    backgroundImage: Tortilla,
  },
  {
    title: "Sandwiches",
    items: [
      { title: "Shnitzel Sandwich ", image: hotdog },
      { title: "Chick fillet Sandwich ", image: hotdog },
      { title: "Omlet Sandwich ", image: hotdog },
      { title: "Tuna Sandwich ", image: hotdog },
      { title: "Yellow Cheese Sandwich ", image: hotdog },
      { title: "White cheese Sandwich ", image: hotdog },
      { title: "Pastrami Sandwich ", image: hotdog },
      { title: "Salami Sandwich ", image: hotdog },
    ],
    backgroundImage: sandwishBg,
  },
  {
    title: "Appetizers",
    items: [
      { title: "Chicken wings", image: hotdog },
      { title: "Besto’s Nuggets", image: hotdog },
      { title: "Crispy sticks", image: hotdog },
      { title: "Mix for 1", image: hotdog },
      { title: "Dbl mix (for 2)", image: hotdog },
      { title: "Trio mix(for 3)", image: hotdog },
   
    ],
    backgroundImage: Appetizers,
  },
  {
    title: "Drinks",
    items: [
      { title: "Cheesecake", image: hotdog },
      { title: "Chocolate", image: hotdog },
    ],
    backgroundImage: drinksBg,
  },
];
