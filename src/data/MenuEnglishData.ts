
// Importing images
import specialBg from "../assets/background/special.jpg";
import burgerBg from "../assets/background/burger.jpg";
import drinksBg from "../assets/background/drink.jpg";
import sandwishBg from "../assets/background/sandwish.jpg";
import Appetizers from "../assets/background/Appetizers.png";
import Tortilla from "../assets/background/Tortilla.png";
import Soon from "../assets/Soon.png";

//Burgers
//MushroomBurger
import mushroomBurgerMain from "../assets/MainPic/Mushroomburger/Main.png";
import mushroomBurger1 from "../assets/MainPic/Mushroomburger/1.png";
import mushroomBurger2 from "../assets/MainPic/Mushroomburger/2.png";
import mushroomBurger3 from "../assets/MainPic/Mushroomburger/3.png";
import mushroomBurger4 from "../assets/MainPic/Mushroomburger/4.png";
//Shnitzel Burger
import shnitselBurgerMain from "../assets/MainPic/shnetselBurger/main.png";
import shnetselBurger1 from "../assets/MainPic/shnetselBurger/1.png";
import shnetselBurger2 from "../assets/MainPic/shnetselBurger/2.png";
import shnetselBurger3 from "../assets/MainPic/shnetselBurger/3.png";
import shnetselBurger4 from "../assets/MainPic/shnetselBurger/4.png";
import shnetselBurger5 from "../assets/MainPic/shnetselBurger/5.png";
import shnetselBurger6 from "../assets/MainPic/shnetselBurger/6.png";
import shnetselBurger7 from "../assets/MainPic/shnetselBurger/7.png";
//burger160classic
import burger160Main from "../assets/MainPic/burger160classic/burger160classic.png";
import burger160_1 from "../assets/MainPic/burger160classic/1.png";
import burger160_2 from "../assets/MainPic/burger160classic/2.png";
import burger160_3 from "../assets/MainPic/burger160classic/3.png";
import burger160_4 from "../assets/MainPic/burger160classic/4.png";
////burger320classic
import burger320Main from "../assets/MainPic/burger320classic/burger320classic.png";
import burger320_1 from "../assets/MainPic/burger320classic/1.png";
import burger320_2 from "../assets/MainPic/burger320classic/2.png";
import burger320_3 from "../assets/MainPic/burger320classic/3.png";

// Define MenuItem and Category interfaces
export interface MenuItem {
  title: string;
  images: string[];
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
      { title: "Brothers Package (2 people)", images: [Soon] },
      { title: "Friends Package (3 people)", images: [Soon] },
      { title: "Family Package (4 people)", images: [Soon] },
    ],
    backgroundImage: specialBg,
  },
  {
    title: "Burgers",
    items: [
      {
        title: "Besto's Burger (With mushrooms)",
        images: [
          mushroomBurgerMain,
          mushroomBurger1,
          mushroomBurger2,
          mushroomBurger3,
          mushroomBurger4,
        ],
      },
      { title: "Classic Burger 160g", images: [burger160Main,burger160_1,burger160_2,burger160_3,burger160_4] },
      { title: "Classic Burger 320g", images: [burger320Main,burger320_1,burger320_2,burger320_3] },
      { title: "Smash Burger 200g", images: [Soon] },
      { title: "Smash Burger 300g", images: [Soon] },
      { title: "Crispy chicken burger", images: [Soon] },
      {
        title: "Shnitzel burger",
        images: [
          shnitselBurgerMain,
          shnetselBurger1,
          shnetselBurger2,
          shnetselBurger3,
          shnetselBurger4,
          shnetselBurger5,
          shnetselBurger6,
          shnetselBurger7,
        ],
      },
    ],
    backgroundImage: burgerBg,
  },
  {
    title: "Tortilla roll",
    items: [
      { title: "Chick fillet", images: [Soon] },
      { title: "Cheese chick fillet", images: [Soon] },
      { title: "Mushroom chick fillet", images: [Soon] },
      { title: "Shnitzel roll", images: [Soon] },
    ],
    backgroundImage: Tortilla,
  },
  {
    title: "Sandwiches",
    items: [
      { title: "Shnitzel Sandwich", images: [Soon] },
      { title: "Chick fillet Sandwich", images: [Soon] },
      { title: "Omlet Sandwich", images: [Soon] },
      { title: "Tuna Sandwich", images: [Soon] },
      { title: "Yellow Cheese Sandwich", images: [Soon] },
      { title: "White cheese Sandwich", images: [Soon] },
      { title: "Pastrami Sandwich", images: [Soon] },
      { title: "Salami Sandwich", images: [Soon] },
    ],
    backgroundImage: sandwishBg,
  },
  {
    title: "Appetizers",
    items: [
      { title: "Chicken wings", images: [Soon] },
      { title: "Besto’s Nuggets", images: [Soon] },
      { title: "Crispy sticks", images: [Soon] },
      { title: "Mix for 1", images: [ Soon] },
      { title: "Dbl mix (for 2)", images: [Soon] },
      { title: "Trio mix (for 3)", images: [Soon] },
    ],
    backgroundImage: Appetizers,
  },
  {
    title: "Drinks",
    items: [
      { title: "Cheesecake", images: [Soon] },
      { title: "Chocolate", images: [Soon] },
    ],
    backgroundImage: drinksBg,
  },
];
