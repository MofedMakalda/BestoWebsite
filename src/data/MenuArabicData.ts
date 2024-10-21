// // Importing images
// import specialBg from "../assets/background/special.jpg";
// import burgerBg from "../assets/background/burger.jpg";
// import drinksBg from "../assets/background/drink.jpg";
// import sandwishBg from "../assets/background/sandwish.jpg";
// import Appetizers from "../assets/background/Appetizers.png";
// import Tortilla from "../assets/background/Tortilla.png";
// import hotdog from "../assets/MainPic/sandwishes/hotdog.jpg";

// // Define MenuItem and Category interfaces
// export interface MenuItem {
//   title: string;
//   image: string;
// }

// export interface Category {
//   title: string;
//   items: MenuItem[];
//   backgroundImage: string;
// }

// // Exporting the categories data
// export const ArabicCategories: Category[] = [
//   {
//     title: "بكجات بيستو",
//     items: [
//       { title: "بكج  البروذرز (شخصين)", image: hotdog },
//       { title: "بكج الشلة (٣ اشخاص)", image: hotdog },
//       { title: "بكج عائلي (٤ اشخاص)", image: hotdog },
//     ],
//     backgroundImage: specialBg,
//   },
//   {
//     title: "برچر ",
//     items: [
//       { title: "كلاسيك برچر 160 غرام", image: hotdog },
//       { title: "سماش  برچر 200 غرام", image: hotdog },
//       { title: "سماش  برچر 300 غرام", image: hotdog },
//       { title: "برچر بيستو (بالفقع والبشاميل)", image: hotdog },
//       { title: "برچر دجاج مقرمش", image: hotdog },
//       { title: "برچر شنيتزل", image: hotdog },
//     ],
//     backgroundImage: burgerBg,
//   },
//   {
//     title: "رول التورتيلا",
//     items: [
//       { title: "رول فيليه دجاج", image: hotdog },
//       { title: "فيليه دجاج بالجبنة", image: hotdog },
//       { title: "فيليه دجاج بالفقع", image: hotdog },
//       { title: "رول شنيتسل", image: hotdog },

//     ],
//     backgroundImage: Tortilla,
//   },
//   {
//     title: "الساندويتشات",
//     items: [
//       { title: "ساندويتش شنيتزل", image: hotdog },
//       { title: "ساندويتش فيليه الدجاج", image: hotdog },
//       { title: "ساندويتش البيض", image: hotdog },
//       { title: "ساندويتش التونة", image: hotdog },
//       { title: "ساندويتش جبنة صفرا", image: hotdog },
//       { title: "ساندويتش جبنة بيضة", image: hotdog },
//       { title: "ساندويتش بستراما", image: hotdog },
//       { title: "ساندويتش نقنيق", image: hotdog },

//     ],
//     backgroundImage: sandwishBg,
//   },
//   {
//     title: "المقبلات",
//     items: [
//       { title: "أجنحة الدجاج", image: hotdog },
//       { title: "ناجتس بيستو ", image: hotdog },
//       { title: "أعواد مقرمشة", image: hotdog },
//       { title: "مكس ل 1", image: hotdog },
//       { title: "مكس لشخصين", image: hotdog },
//       { title: "مكس ثلاثي", image: hotdog },
   
//     ],
//     backgroundImage: Appetizers,
//   },



//   {
//     title: "مشروبات",
//     items: [
//       { title: "Cheesecake", image: hotdog },
//       { title: "Chocolate", image: hotdog },
//     ],
//     backgroundImage: drinksBg,
//   },
// ];

import specialBg from "../assets/background/special.jpg";
import burgerBg from "../assets/background/burger.jpg";
import drinksBg from "../assets/background/drink.jpg";
import sandwishBg from "../assets/background/sandwish.jpg";
import Appetizers from "../assets/background/Appetizers.png";
import Tortilla from "../assets/background/Tortilla.png";
import hotdog from "../assets/MainPic/sandwishes/hotdog.jpg";

//Burgers
//MushroomBurger
import mushroomBurgerMain from "../assets/MainPic/Mushroomburger/Main.png"
import mushroomBurger1 from "../assets/MainPic/Mushroomburger/1.jpg"
import mushroomBurger2 from "../assets/MainPic/Mushroomburger/2.jpg"
import mushroomBurger3 from "../assets/MainPic/Mushroomburger/3.jpg"
import mushroomBurger4 from "../assets/MainPic/Mushroomburger/4.jpg"
import mushroomBurger5 from "../assets/MainPic/Mushroomburger/5.jpg"
import mushroomBurger6 from "../assets/MainPic/Mushroomburger/6.jpg"

//Shnitzel Burger
import shnitselBurgerMain from "../assets/MainPic/shnetselBurger/main.png"
import shnetselBurger1 from "../assets/MainPic/shnetselBurger/1.jpg"
import shnetselBurger2 from "../assets/MainPic/shnetselBurger/2.jpg"
import shnetselBurger3 from "../assets/MainPic/shnetselBurger/3.jpg"
import shnetselBurger4 from "../assets/MainPic/shnetselBurger/4.jpg"
import shnetselBurger5 from "../assets/MainPic/shnetselBurger/5.jpg"
import shnetselBurger6 from "../assets/MainPic/shnetselBurger/6.jpg"
import shnetselBurger7 from "../assets/MainPic/shnetselBurger/7.jpg"




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
export const ArabicCategories: Category[] = [
  {
    title: "بكجات بيستو",
    items: [
      { title: "بكج  البروذرز (شخصين)", images: [hotdog] },
      { title: "بكج الشلة (٣ اشخاص)", images: [hotdog] },
      { title: "بكج عائلي (٤ اشخاص)",images: [hotdog] },
    ],
    backgroundImage: specialBg,
  },
  {
    title: "برچر ",
    items: [
      { title: "كلاسيك برچر 160 غرام", images: [hotdog] },
      { title: "سماش  برچر 200 غرام", images: [hotdog] },
      { title: "سماش  برچر 300 غرام", images: [hotdog] },
      { title: "برچر بيستو (بالفقع والبشاميل)", images: [mushroomBurgerMain,mushroomBurger1, mushroomBurger2, mushroomBurger3, mushroomBurger4,mushroomBurger5, mushroomBurger6 ] },
      { title: "برچر دجاج مقرمش", images: [hotdog] },
      { title: "برچر شنيتزل", images: [shnitselBurgerMain,shnetselBurger1,shnetselBurger2,shnetselBurger3,shnetselBurger4,shnetselBurger5, shnetselBurger6,shnetselBurger7] },
    ],
    backgroundImage: burgerBg,
  },
  {
    title: "رول التورتيلا",
    items: [
      { title: "رول فيليه دجاج", images: [hotdog] },
      { title: "فيليه دجاج بالجبنة", images: [hotdog] },
      { title: "فيليه دجاج بالفقع", images: [hotdog] },
      { title: "رول شنيتسل", images: [hotdog] },

    ],
    backgroundImage: Tortilla,
  },
  {
    title: "الساندويتشات",
    items: [
      { title: "ساندويتش شنيتزل", images: [hotdog] },
      { title: "ساندويتش فيليه الدجاج",images: [hotdog] },
      { title: "ساندويتش البيض", images: [hotdog] },
      { title: "ساندويتش التونة", images: [hotdog] },
      { title: "ساندويتش جبنة صفرا", images: [hotdog] },
      { title: "ساندويتش جبنة بيضة", images: [hotdog] },
      { title: "ساندويتش بستراما",images: [hotdog] },
      { title: "ساندويتش نقنيق", images: [hotdog] },

    ],
    backgroundImage: sandwishBg,
  },
  {
    title: "المقبلات",
    items: [
      { title: "أجنحة الدجاج", images: [hotdog] },
      { title: "ناجتس بيستو ", images: [hotdog] },
      { title: "أعواد مقرمشة", images: [hotdog] },
      { title: "مكس ل 1", images: [hotdog] },
      { title: "مكس لشخصين", images: [hotdog] },
      { title: "مكس ثلاثي", images: [hotdog] },
   
    ],
    backgroundImage: Appetizers,
  },



  {
    title: "مشروبات",
    items: [
      { title: "CocaCola",images: [hotdog] },
      { title: "Sprite", images: [hotdog] },
    ],
    backgroundImage: drinksBg,
  },
];
