

// import specialBg from "../assets/background/special.jpg";
// import burgerBg from "../assets/background/burger.jpg";
// import drinksBg from "../assets/background/drink.jpg";
// import sandwishBg from "../assets/background/sandwish.jpg";
// import Appetizers from "../assets/background/Appetizers.png";
// import Tortilla from "../assets/background/Tortilla.png";
// import Soon from "../assets/Soon.png";

// //Burgers
// //MushroomBurger
// import mushroomBurgerMain from "../assets/MainPic/Mushroomburger/Main.jpg";
// import mushroomBurger1 from "../assets/MainPic/Mushroomburger/1.jpg";
// import mushroomBurger2 from "../assets/MainPic/Mushroomburger/2.jpg";
// import mushroomBurger3 from "../assets/MainPic/Mushroomburger/3.jpg";
// import mushroomBurger4 from "../assets/MainPic/Mushroomburger/4.jpg";
// //Shnitzel Burger
// import shnitselBurgerMain from "../assets/MainPic/shnetselBurger/main.jpg";
// import shnetselBurger1 from "../assets/MainPic/shnetselBurger/1.jpg";
// import shnetselBurger2 from "../assets/MainPic/shnetselBurger/2.jpg";
// import shnetselBurger3 from "../assets/MainPic/shnetselBurger/3.jpg";
// import shnetselBurger4 from "../assets/MainPic/shnetselBurger/4.jpg";
// import shnetselBurger5 from "../assets/MainPic/shnetselBurger/5.jpg";
// import shnetselBurger6 from "../assets/MainPic/shnetselBurger/6.jpg";

// //burger160classic
// import burger160Main from "../assets/MainPic/burger160classic/burger160classic.jpg";
// import burger160_1 from "../assets/MainPic/burger160classic/1.jpg";
// import burger160_2 from "../assets/MainPic/burger160classic/2.jpg";
// import burger160_3 from "../assets/MainPic/burger160classic/3.jpg";
// import burger160_4 from "../assets/MainPic/burger160classic/4.jpg";
// ////burger320classic
// import burger320Main from "../assets/MainPic/burger320classic/burger320classic.jpg";
// import burger320_1 from "../assets/MainPic/burger320classic/1.jpg";
// import burger320_2 from "../assets/MainPic/burger320classic/2.jpg";
// import burger320_3 from "../assets/MainPic/burger320classic/3.jpg";


// // Define MenuItem and Category interfaces
// export interface MenuItem {
//   title: string;
//   images: string[];
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
//       { title: "بكج  البروذرز (شخصين)", images: [Soon] },
//       { title: "بكج الشلة (٣ اشخاص)", images: [Soon] },
//       { title: "بكج عائلي (٤ اشخاص)",images: [Soon] },
//     ],
//     backgroundImage: specialBg,
//   },
//   {
//     title: "برچر ",
//     items: [
//       { title: "كلاسيك برچر 160 غرام", images: [burger160Main,burger160_1,burger160_2,burger160_3,burger160_4]  },
//       { title: "كلاسيك برچر 320 غرام", images: [burger320Main,burger320_1,burger320_2,burger320_3] },
//       { title: "سماش  برچر 200 غرام", images: [Soon] },
//       { title: "سماش  برچر 300 غرام", images: [Soon] },
//       { title: "برچر بيستو (بالفقع والبشاميل)", images: [mushroomBurgerMain,mushroomBurger1, mushroomBurger2, mushroomBurger3, mushroomBurger4] },
//       { title: "برچر دجاج مقرمش", images: [Soon] },
//       { title: "برچر شنيتزل", images: [shnitselBurgerMain,shnetselBurger1,shnetselBurger2,shnetselBurger3,shnetselBurger4,shnetselBurger5, shnetselBurger6] },
//     ],
//     backgroundImage: burgerBg,
//   },
//   {
//     title: "رول التورتيلا",
//     items: [
//       { title: "رول فيليه دجاج", images: [Soon] },
//       { title: "فيليه دجاج بالجبنة", images: [Soon] },
//       { title: "فيليه دجاج بالفقع", images: [Soon] },
//       { title: "رول شنيتسل", images: [Soon] },

//     ],
//     backgroundImage: Tortilla,
//   },
//   {
//     title: "الساندويتشات",
//     items: [
//       { title: "ساندويتش شنيتزل", images: [Soon] },
//       { title: "ساندويتش فيليه الدجاج",images: [Soon] },
//       { title: "ساندويتش البيض", images: [Soon] },
//       { title: "ساندويتش التونة", images: [Soon] },
//       { title: "ساندويتش جبنة صفرا", images: [Soon] },
//       { title: "ساندويتش جبنة بيضة", images: [Soon] },
//       { title: "ساندويتش بستراما",images: [Soon] },
//       { title: "ساندويتش نقنيق", images: [Soon] },

//     ],
//     backgroundImage: sandwishBg,
//   },
//   {
//     title: "المقبلات",
//     items: [
//       { title: "أجنحة الدجاج", images: [Soon] },
//       { title: "ناجتس بيستو ", images: [Soon] },
//       { title: "أعواد مقرمشة", images: [Soon] },
//       { title: "مكس ل 1", images: [Soon] },
//       { title: "مكس لشخصين", images: [Soon] },
//       { title: "مكس ثلاثي", images: [Soon] },
   
//     ],
//     backgroundImage: Appetizers,
//   },



//   {
//     title: "مشروبات",
//     items: [
//       { title: "CocaCola",images: [Soon] },
//       { title: "Sprite", images: [Soon] },
//     ],
//     backgroundImage: drinksBg,
//   },
// ];



// Importing images from Cloudinary
export const specialBg = "https://res.cloudinary.com/dlubjzies/image/upload/v1729535340/special_bxhpbl.jpg";
export const burgerBg = "https://res.cloudinary.com/dlubjzies/image/upload/v1729535336/burger_fnedov.jpg";
export const drinksBg = "https://res.cloudinary.com/dlubjzies/image/upload/v1729535337/drink_tgvp1a.jpg";
export const sandwishBg = "https://res.cloudinary.com/dlubjzies/image/upload/v1729535339/sandwish_d1gu9a.jpg";
export const Appetizers = "https://res.cloudinary.com/dlubjzies/image/upload/v1729535339/Appetizers_wjqyod.png";
export const Tortilla = "https://res.cloudinary.com/dlubjzies/image/upload/v1729535343/Tortilla_nsguwc.png";
export const Soon = "https://res.cloudinary.com/dlubjzies/image/upload/v1729535547/Soon_zlih1i.png";

// Burgers
// MushroomBurger
export const mushroomBurgerMain = "https://res.cloudinary.com/dlubjzies/image/upload/v1729534876/Main_mpxemw.jpg";
export const mushroomBurger1 = "https://res.cloudinary.com/dlubjzies/image/upload/v1729534873/1_vpchhv.jpg";
export const mushroomBurger2 = "https://res.cloudinary.com/dlubjzies/image/upload/v1729534872/2_tqydbd.jpg";
export const mushroomBurger3 = "https://res.cloudinary.com/dlubjzies/image/upload/v1729534873/3_ewzvvk.jpg";
export const mushroomBurger4 = "https://res.cloudinary.com/dlubjzies/image/upload/v1729534872/4_jx4hs4.jpg";
// Shnitzel Burger
export const shnitselBurgerMain = "https://res.cloudinary.com/dlubjzies/image/upload/v1729534865/5_jwgjuf.jpg";
export const shnetselBurger1 = "https://res.cloudinary.com/dlubjzies/image/upload/v1729534866/2_jcrhbl.jpg";
export const shnetselBurger2 = "https://res.cloudinary.com/dlubjzies/image/upload/v1729534866/3_oceayw.jpg";
export const shnetselBurger3 = "https://res.cloudinary.com/dlubjzies/image/upload/v1729534866/4_stzvp9.jpg";
export const shnetselBurger4 = "https://res.cloudinary.com/dlubjzies/image/upload/v1729534866/main_w7bjt4.jpg";
export const shnetselBurger5 = "https://res.cloudinary.com/dlubjzies/image/upload/v1729534868/6_hifiiz.jpg";
export const shnetselBurger6 = "https://res.cloudinary.com/dlubjzies/image/upload/v1729534865/1_agbori.jpg";

// burger160classic
export const burger160Main = "https://res.cloudinary.com/dlubjzies/image/upload/v1729534866/1_aekyao.jpg";
export const burger160_1 = "https://res.cloudinary.com/dlubjzies/image/upload/v1729534867/burger160classic_voiopp.jpg";
export const burger160_2 = "https://res.cloudinary.com/dlubjzies/image/upload/v1729534867/2_wu8xxn.jpg";
export const burger160_3 = "https://res.cloudinary.com/dlubjzies/image/upload/v1729534867/3_xhyjlb.jpg";
export const burger160_4 = "https://res.cloudinary.com/dlubjzies/image/upload/v1729534868/4_udjndu.jpg";
// burger320classic
export const burger320Main = "https://res.cloudinary.com/dlubjzies/image/upload/v1729534872/2_uqx1b0.jpg";
export const burger320_1 = "https://res.cloudinary.com/dlubjzies/image/upload/v1729534871/burger320classic_vz3tmu.jpg";
export const burger320_2 = "https://res.cloudinary.com/dlubjzies/image/upload/v1729534869/1_o5futj.jpg";
export const burger320_3 = "https://res.cloudinary.com/dlubjzies/image/upload/v1729534872/3_rmeykf.jpg";


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
      { title: "بكج  البروذرز (شخصين)", images: [Soon] },
      { title: "بكج الشلة (٣ اشخاص)", images: [Soon] },
      { title: "بكج عائلي (٤ اشخاص)",images: [Soon] },
    ],
    backgroundImage: specialBg,
  },
  {
    title: "برچر ",
    items: [
      { title: "كلاسيك برچر 160 غرام", images: [burger160Main,burger160_1,burger160_2,burger160_3,burger160_4]  },
      { title: "كلاسيك برچر 320 غرام", images: [burger320Main,burger320_1,burger320_2,burger320_3] },
      { title: "سماش  برچر 200 غرام", images: [Soon] },
      { title: "سماش  برچر 300 غرام", images: [Soon] },
      { title: "برچر بيستو (بالفقع والبشاميل)", images: [mushroomBurgerMain,mushroomBurger1, mushroomBurger2, mushroomBurger3, mushroomBurger4] },
      { title: "برچر دجاج مقرمش", images: [Soon] },
      { title: "برچر شنيتزل", images: [shnitselBurgerMain,shnetselBurger1,shnetselBurger2,shnetselBurger3,shnetselBurger4,shnetselBurger5, shnetselBurger6] },
    ],
    backgroundImage: burgerBg,
  },
  {
    title: "رول التورتيلا",
    items: [
      { title: "رول فيليه دجاج", images: [Soon] },
      { title: "فيليه دجاج بالجبنة", images: [Soon] },
      { title: "فيليه دجاج بالفقع", images: [Soon] },
      { title: "رول شنيتسل", images: [Soon] },

    ],
    backgroundImage: Tortilla,
  },
  {
    title: "الساندويتشات",
    items: [
      { title: "ساندويتش شنيتزل", images: [Soon] },
      { title: "ساندويتش فيليه الدجاج",images: [Soon] },
      { title: "ساندويتش البيض", images: [Soon] },
      { title: "ساندويتش التونة", images: [Soon] },
      { title: "ساندويتش جبنة صفرا", images: [Soon] },
      { title: "ساندويتش جبنة بيضة", images: [Soon] },
      { title: "ساندويتش بستراما",images: [Soon] },
      { title: "ساندويتش نقنيق", images: [Soon] },

    ],
    backgroundImage: sandwishBg,
  },
  {
    title: "المقبلات",
    items: [
      { title: "أجنحة الدجاج", images: [Soon] },
      { title: "ناجتس بيستو ", images: [Soon] },
      { title: "أعواد مقرمشة", images: [Soon] },
      { title: "مكس ل 1", images: [Soon] },
      { title: "مكس لشخصين", images: [Soon] },
      { title: "مكس ثلاثي", images: [Soon] },
   
    ],
    backgroundImage: Appetizers,
  },



  {
    title: "مشروبات",
    items: [
      { title: "CocaCola",images: [Soon] },
      { title: "Sprite", images: [Soon] },
    ],
    backgroundImage: drinksBg,
  },
];
