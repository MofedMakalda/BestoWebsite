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
export const ArabicCategories: Category[] = [
  {
    title: "بكجات بيستو",
    items: [
      { title: "بكج  البروذرز (شخصين)", image: hotdog },
      { title: "بكج الشلة (٣ اشخاص)", image: hotdog },
      { title: "بكج عائلي (٤ اشخاص)", image: hotdog },
    ],
    backgroundImage: specialBg,
  },
  {
    title: "برچر ",
    items: [
      { title: "كلاسيك برچر 160 غرام", image: hotdog },
      { title: "سماش  برچر 200 غرام", image: hotdog },
      { title: "سماش  برچر 300 غرام", image: hotdog },
      { title: "برچر بيستو (بالفقع والبشاميل)", image: hotdog },
      { title: "برچر دجاج مقرمش", image: hotdog },
      { title: "برچر شنيتزل", image: hotdog },
    ],
    backgroundImage: burgerBg,
  },
  {
    title: "رول التورتيلا",
    items: [
      { title: "رول فيليه دجاج", image: hotdog },
      { title: "فيليه دجاج بالجبنة", image: hotdog },
      { title: "فيليه دجاج بالفقع", image: hotdog },
      { title: "رول شنيتسل", image: hotdog },

    ],
    backgroundImage: Tortilla,
  },
  {
    title: "الساندويتشات",
    items: [
      { title: "ساندويتش شنيتزل", image: hotdog },
      { title: "ساندويتش فيليه الدجاج", image: hotdog },
      { title: "ساندويتش البيض", image: hotdog },
      { title: "ساندويتش التونة", image: hotdog },
      { title: "ساندويتش جبنة صفرا", image: hotdog },
      { title: "ساندويتش جبنة بيضة", image: hotdog },
      { title: "ساندويتش بستراما", image: hotdog },
      { title: "ساندويتش نقنيق", image: hotdog },

    ],
    backgroundImage: sandwishBg,
  },
  {
    title: "المقبلات",
    items: [
      { title: "أجنحة الدجاج", image: hotdog },
      { title: "ناجتس بيستو ", image: hotdog },
      { title: "أعواد مقرمشة", image: hotdog },
      { title: "مكس ل 1", image: hotdog },
      { title: "مكس لشخصين", image: hotdog },
      { title: "مكس ثلاثي", image: hotdog },
   
    ],
    backgroundImage: Appetizers,
  },



  {
    title: "مشروبات",
    items: [
      { title: "Cheesecake", image: hotdog },
      { title: "Chocolate", image: hotdog },
    ],
    backgroundImage: drinksBg,
  },
];
