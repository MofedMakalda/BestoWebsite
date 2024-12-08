// // Importing images
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
// export const EnglishCategories: Category[] = [
//   {
//     title: "Besto’s specials",
//     items: [
//       { title: "Brothers Package (2 people)", images: [Soon] },
//       { title: "Friends Package (3 people)", images: [Soon] },
//       { title: "Family Package (4 people)", images: [Soon] },
//     ],
//     backgroundImage: specialBg,
//   },
//   {
//     title: "Burgers",
//     items: [
//       {
//         title: "Besto's Burger (With mushrooms)",
//         images: [
//           mushroomBurgerMain,
//           mushroomBurger1,
//           mushroomBurger2,
//           mushroomBurger3,
//           mushroomBurger4,
//         ],
//       },
//       { title: "Classic Burger 160g", images: [burger160Main,burger160_1,burger160_2,burger160_3,burger160_4] },
//       { title: "Classic Burger 320g", images: [burger320Main,burger320_1,burger320_2,burger320_3] },
//       { title: "Smash Burger 200g", images: [Soon] },
//       { title: "Smash Burger 300g", images: [Soon] },
//       { title: "Crispy chicken burger", images: [Soon] },
//       {
//         title: "Shnitzel burger",
//         images: [
//           shnitselBurgerMain,
//           shnetselBurger1,
//           shnetselBurger2,
//           shnetselBurger3,
//           shnetselBurger4,
//           shnetselBurger5,
//           shnetselBurger6,

//         ],
//       },
//     ],
//     backgroundImage: burgerBg,
//   },
//   {
//     title: "Tortilla roll",
//     items: [
//       { title: "Chick fillet", images: [Soon] },
//       { title: "Cheese chick fillet", images: [Soon] },
//       { title: "Mushroom chick fillet", images: [Soon] },
//       { title: "Shnitzel roll", images: [Soon] },
//     ],
//     backgroundImage: Tortilla,
//   },
//   {
//     title: "Sandwiches",
//     items: [
//       { title: "Shnitzel Sandwich", images: [Soon] },
//       { title: "Chick fillet Sandwich", images: [Soon] },
//       { title: "Omlet Sandwich", images: [Soon] },
//       { title: "Tuna Sandwich", images: [Soon] },
//       { title: "Yellow Cheese Sandwich", images: [Soon] },
//       { title: "White cheese Sandwich", images: [Soon] },
//       { title: "Pastrami Sandwich", images: [Soon] },
//       { title: "Salami Sandwich", images: [Soon] },
//     ],
//     backgroundImage: sandwishBg,
//   },
//   {
//     title: "Appetizers",
//     items: [
//       { title: "Chicken wings", images: [Soon] },
//       { title: "Besto’s Nuggets", images: [Soon] },
//       { title: "Crispy sticks", images: [Soon] },
//       { title: "Mix for 1", images: [ Soon] },
//       { title: "Dbl mix (for 2)", images: [Soon] },
//       { title: "Trio mix (for 3)", images: [Soon] },
//     ],
//     backgroundImage: Appetizers,
//   },
//   {
//     title: "Drinks",
//     items: [
//       { title: "Cheesecake", images: [Soon] },
//       { title: "Chocolate", images: [Soon] },
//     ],
//     backgroundImage: drinksBg,
//   },
// ];

// Importing images from Cloudinary
// export const specialBg = "https://res.cloudinary.com/dlubjzies/image/upload/v1729535340/special_bxhpbl.jpg";
// export const burgerBg = "https://res.cloudinary.com/dlubjzies/image/upload/v1729535336/burger_fnedov.jpg";
// export const drinksBg = "https://res.cloudinary.com/dlubjzies/image/upload/v1729535337/drink_tgvp1a.jpg";
// export const sandwishBg = "https://res.cloudinary.com/dlubjzies/image/upload/v1729535339/sandwish_d1gu9a.jpg";
// export const Appetizers = "https://res.cloudinary.com/dlubjzies/image/upload/v1729535339/Appetizers_wjqyod.png";
// export const Tortilla = "https://res.cloudinary.com/dlubjzies/image/upload/v1729535343/Tortilla_nsguwc.png";
// export const Soon = "https://res.cloudinary.com/dlubjzies/image/upload/v1729535547/Soon_zlih1i.png";

// // Burgers
// // MushroomBurger
// export const mushroomBurgerMain = "https://res.cloudinary.com/dlubjzies/image/upload/v1729534872/4_jx4hs4.jpg";
// export const mushroomBurger1 = "https://res.cloudinary.com/dlubjzies/image/upload/v1729534876/Main_mpxemw.jpg";
// export const mushroomBurger2 = "https://res.cloudinary.com/dlubjzies/image/upload/v1729534873/1_vpchhv.jpg";
// export const mushroomBurger3 = "https://res.cloudinary.com/dlubjzies/image/upload/v1729534872/2_tqydbd.jpg";
// export const mushroomBurger4 = "https://res.cloudinary.com/dlubjzies/image/upload/v1729534873/3_ewzvvk.jpg";

// // Shnitzel Burger
// export const shnitselBurgerMain = "https://res.cloudinary.com/dlubjzies/image/upload/v1729534865/5_jwgjuf.jpg";
// export const shnetselBurger1 = "https://res.cloudinary.com/dlubjzies/image/upload/v1729534866/2_jcrhbl.jpg";
// export const shnetselBurger2 = "https://res.cloudinary.com/dlubjzies/image/upload/v1729534866/3_oceayw.jpg";
// export const shnetselBurger3 = "https://res.cloudinary.com/dlubjzies/image/upload/v1729534866/4_stzvp9.jpg";
// export const shnetselBurger4 = "https://res.cloudinary.com/dlubjzies/image/upload/v1729534866/main_w7bjt4.jpg";
// export const shnetselBurger5 = "https://res.cloudinary.com/dlubjzies/image/upload/v1729534868/6_hifiiz.jpg";
// export const shnetselBurger6 = "https://res.cloudinary.com/dlubjzies/image/upload/v1729534865/1_agbori.jpg";

// // burger160classic
// export const burger160Main = "https://res.cloudinary.com/dlubjzies/image/upload/v1729534866/1_aekyao.jpg";
// export const burger160_1 = "https://res.cloudinary.com/dlubjzies/image/upload/v1729534867/burger160classic_voiopp.jpg";
// export const burger160_2 = "https://res.cloudinary.com/dlubjzies/image/upload/v1729534867/2_wu8xxn.jpg";
// export const burger160_3 = "https://res.cloudinary.com/dlubjzies/image/upload/v1729534867/3_xhyjlb.jpg";
// export const burger160_4 = "https://res.cloudinary.com/dlubjzies/image/upload/v1729534868/4_udjndu.jpg";
// // burger320classic
// export const burger320Main = "https://res.cloudinary.com/dlubjzies/image/upload/v1730049848/Untitled_design_yltdaf.jpg";
// export const burger320_1 = "https://res.cloudinary.com/dlubjzies/image/upload/v1729534871/burger320classic_vz3tmu.jpg";
// export const burger320_2 = "https://res.cloudinary.com/dlubjzies/image/upload/v1729534869/1_o5futj.jpg";
// export const burger320_3 = "https://res.cloudinary.com/dlubjzies/image/upload/v1729534872/3_rmeykf.jpg";
// // SmashBurger-160g
// export const Smash200Main = "https://res.cloudinary.com/dlubjzies/image/upload/v1730048825/MainSmash160_rewapn.jpg";
// export const Smash200_1 = "https://res.cloudinary.com/dlubjzies/image/upload/v1730048847/6_b4sqmh.jpg";
// export const Smash200_2 = "https://res.cloudinary.com/dlubjzies/image/upload/v1730048880/3_mw3vzv.jpg";
// // SmashBurger-320g
// export const Smash300Main = "https://res.cloudinary.com/dlubjzies/image/upload/v1730048928/MainSmash360_pqplmq.jpg";
// export const Smash300_1 = "https://res.cloudinary.com/dlubjzies/image/upload/v1730048926/8_f9zofw.jpg";

// // Sandwiches------------------------------------------------------------------------------------------------------------
// // Sandwich kebap
// export const KebapMain = "https://res.cloudinary.com/dlubjzies/image/upload/v1730031844/8485159_cxbjr8.jpg";
// export const Kebap_2 = "https://res.cloudinary.com/dlubjzies/image/upload/v1730031848/8_ahinrj.jpg";
// export const Kebap_3 = "https://res.cloudinary.com/dlubjzies/image/upload/v1730031845/4_hhrxph.jpg";
// export const Kebap_4 = "https://res.cloudinary.com/dlubjzies/image/upload/v1730031845/9_cexkja.jpg";
// export const Kebap_5 = "https://res.cloudinary.com/dlubjzies/image/upload/v1730031845/main_q0akzi.jpg";
// export const Kebap_6 = "https://res.cloudinary.com/dlubjzies/image/upload/v1730031842/5_qyueyq.jpg";
// export const Kebap_7 = "https://res.cloudinary.com/dlubjzies/image/upload/v1730031842/2_hwyzj7.jpg";
// export const Kebap_8 = "https://res.cloudinary.com/dlubjzies/image/upload/v1730031842/10_qwtetd.jpg";
// // Sandwich Chicken
// export const ChickenMain = "https://res.cloudinary.com/dlubjzies/image/upload/v1730031721/18_sx9zpq.jpg";
// export const Chicken_1 = "https://res.cloudinary.com/dlubjzies/image/upload/v1730031727/11_y2peho.jpg";
// export const Chicken_2 = "https://res.cloudinary.com/dlubjzies/image/upload/v1730031726/14_hz6phu.jpg";
// export const Chicken_3 = "https://res.cloudinary.com/dlubjzies/image/upload/v1730031723/4_xlod3q.jpg";
// export const Chicken_4 = "https://res.cloudinary.com/dlubjzies/image/upload/v1730031725/2_a0xxj5.jpg";
// export const Chicken_5 = "https://res.cloudinary.com/dlubjzies/image/upload/v1730031723/529259_wsrloe.jpg";
// export const Chicken_6 = "https://res.cloudinary.com/dlubjzies/image/upload/v1730031726/3_fmqwua.jpg";
// // Sandwich Shnitzel
// export const ShnitzelMain = "https://res.cloudinary.com/dlubjzies/image/upload/v1730031870/7_l6vtl1.jpg";
// export const Shnitzel_1 = "https://res.cloudinary.com/dlubjzies/image/upload/v1730031871/2_khwk8i.jpg";
// export const Shnitzel_2 = "https://res.cloudinary.com/dlubjzies/image/upload/v1730031870/7_l6vtl1.jpg";
// export const Shnitzel_3 = "https://res.cloudinary.com/dlubjzies/image/upload/v1730031870/4_dndcv1.jpg";
// export const Shnitzel_5 = "https://res.cloudinary.com/dlubjzies/image/upload/v1730031868/6_wye2zv.jpg";
// export const Shnitzel_4 = "https://res.cloudinary.com/dlubjzies/image/upload/v1730031869/3_ztskjm.jpg";

// // Define MenuItem and Category interfaces
// export interface MenuItem {
//   title: string;
//   images: string[];
//   price:string;
//   description?:string;

// }

// export interface Category {
//   title: string;
//   items: MenuItem[];
//   backgroundImage: string;
// }

// // Exporting the categories data
// export const EnglishCategories: Category[] = [
//   {
//     title: "Besto’s specials",
//     items: [
//       { title: "Brothers Package (2 people)", images: [Soon], price:"Price" },
//       { title: "Friends Package (3 people)", images: [Soon], price:"Price"},
//       { title: "Family Package (4 people)", images: [Soon], price:"Price" },
//     ],
//     backgroundImage: specialBg,
//   },
//   {
//     title: "Burgers",
//     items: [
//       {
//         title: "Besto's Burger",
//         images: [
//           mushroomBurgerMain,
//           mushroomBurger1,
//           mushroomBurger2,
//           mushroomBurger3,
//           mushroomBurger4,
//         ],
//         price: "55₪",
//         description:"(Cream & Mushrooms)"
//       },
//       { title: "Cheese Burger 160g", images: [burger160Main, burger160_1, burger160_2, burger160_3, burger160_4], price: "40₪" },
//       { title: "Cheese Burger 320g", images: [burger320Main, burger320_1, burger320_2, burger320_3],price: "55₪" },
//       { title: "Smash Burger 200g", images: [Smash200Main, Smash200_1,Smash200_2,],price: "55₪"},
//       { title: "Smash Burger 300g", images: [Smash300Main,Smash300_1 ], price:"60₪" },
//       { title: "Crispy chicken burger", images: [Soon], price:"" },
//       {title: "Shnitzel burger", images: [shnitselBurgerMain,
//           shnetselBurger1,
//           shnetselBurger2,
//           shnetselBurger3,
//           shnetselBurger4,
//           shnetselBurger5,
//           shnetselBurger6,
//         ],
//         price: "38₪"
//       },
//     ],
//     backgroundImage: burgerBg,
//   },

//   {
//     title: "Sandwiches",
//     items: [
//       {
//         title: "Shnitzel Sandwich", images: [ShnitzelMain, Shnitzel_1, Shnitzel_2, Shnitzel_3, Shnitzel_4, Shnitzel_5],
//         price: "38₪"
//       },
//       {
//         title: "Kebap Sandwich", images: [KebapMain, Kebap_2, Kebap_3, Kebap_4, Kebap_5, Kebap_6, Kebap_7, Kebap_8],
//         price: "40₪"
//       },
//       {
//         title: "Chick fillet Sandwich", images: [ChickenMain, Chicken_1, Chicken_2, Chicken_3, Chicken_4, Chicken_5, Chicken_6],
//         price: "38₪"
//       },
//       {
//         title: "Omlet Sandwich", images: [Soon],
//         price: ""
//       },
//       {
//         title: "Tuna Sandwich", images: [Soon],
//         price: ""
//       },
//       {
//         title: "Yellow Cheese Sandwich", images: [Soon],
//         price: ""
//       },
//       {
//         title: "White cheese Sandwich", images: [Soon],
//         price: ""
//       },
//       {
//         title: "Pastrami Sandwich", images: [Soon],
//         price: ""
//       },
//       {
//         title: "Salami Sandwich", images: [Soon],
//         price: ""
//       },
//     ],
//     backgroundImage: sandwishBg,
//   },
//   {
//     title: "Tortilla roll",
//     items: [
//       {
//         title: "Chick fillet", images: [Soon],
//         price: ""
//       },
//       {
//         title: "Cheese chick fillet", images: [Soon],
//         price: ""
//       },
//       {
//         title: "Mushroom chick fillet", images: [Soon],
//         price: ""
//       },
//       {
//         title: "Shnitzel roll", images: [Soon],
//         price: ""
//       },
//     ],
//     backgroundImage: Tortilla,
//   },
//   {
//     title: "Appetizers",
//     items: [
//       {
//         title: "Chicken wings", images: [Soon],
//         price: ""
//       },
//       {
//         title: "Besto’s Nuggets", images: [Soon],
//         price: ""
//       },
//       {
//         title: "Crispy sticks", images: [Soon],
//         price: ""
//       },
//       {
//         title: "Mix for 1", images: [Soon],
//         price: ""
//       },
//       {
//         title: "Dbl mix (for 2)", images: [Soon],
//         price: ""
//       },
//       {
//         title: "Trio mix (for 3)", images: [Soon],
//         price: ""
//       },
//     ],
//     backgroundImage: Appetizers,
//   },
//   {
//     title: "Drinks",
//     items: [
//       {
//         title: "Soft Drinks", images: [Soon],
//         price: ""
//       },
//       {
//         title: "Cold Coffee Drinks", images: [Soon],
//         price: ""
//       },
//       {
//         title: "Natural Juice Drinks", images: [Soon],
//         price: ""
//       },
//       {
//         title: "Fakhfakhina Drinks", images: [Soon],
//         price: ""
//       },

//     ],
//     backgroundImage: drinksBg,
//   },
// ];

//-----------------------------------------------------------------------------

export const specialBg =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1729535340/special_bxhpbl.jpg";
export const burgerBg =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1729535336/burger_fnedov.jpg";
export const drinksBg =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1729535337/drink_tgvp1a.jpg";
export const sandwishBg =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1729535339/sandwish_d1gu9a.jpg";
export const Appetizers =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1729535339/Appetizers_wjqyod.png";
export const Tortilla =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1729535343/Tortilla_nsguwc.png";
export const Soon =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1729535547/Soon_zlih1i.png";

// Burgers
// MushroomBurger
export const mushroomBurgerMain =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1729534872/4_jx4hs4.jpg";
export const mushroomBurger1 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1729534876/Main_mpxemw.jpg";
export const mushroomBurger2 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1729534873/1_vpchhv.jpg";
export const mushroomBurger3 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1729534872/2_tqydbd.jpg";
export const mushroomBurger4 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1729534873/3_ewzvvk.jpg";

// Shnitzel Burger
export const shnitselBurgerMain =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1729534865/5_jwgjuf.jpg";
export const shnetselBurger1 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1729534866/2_jcrhbl.jpg";
export const shnetselBurger2 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1729534866/3_oceayw.jpg";
export const shnetselBurger3 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1729534866/4_stzvp9.jpg";
export const shnetselBurger4 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1729534866/main_w7bjt4.jpg";
export const shnetselBurger5 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1729534868/6_hifiiz.jpg";
export const shnetselBurger6 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1729534865/1_agbori.jpg";

// burger160classic
export const burger160Main =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1729534866/1_aekyao.jpg";
export const burger160_1 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1729534867/burger160classic_voiopp.jpg";
export const burger160_2 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1729534867/2_wu8xxn.jpg";
export const burger160_3 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1729534867/3_xhyjlb.jpg";
export const burger160_4 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1729534868/4_udjndu.jpg";
// burger320classic
export const burger320Main =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730049848/Untitled_design_yltdaf.jpg";
export const burger320_1 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1729534871/burger320classic_vz3tmu.jpg";
export const burger320_2 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1729534869/1_o5futj.jpg";
export const burger320_3 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1729534872/3_rmeykf.jpg";
// SmashBurger-160g
export const Smash200Main =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730048825/MainSmash160_rewapn.jpg";
export const Smash200_1 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730048847/6_b4sqmh.jpg";
export const Smash200_2 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730048880/3_mw3vzv.jpg";
// SmashBurger-320g
export const Smash300Main =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730048928/MainSmash360_pqplmq.jpg";
export const Smash300_1 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730048926/8_f9zofw.jpg";
// Bestorger
export const BestorgerMain =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730560627/Main_swwpjg.jpg";
export const Bestorger_1 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730560627/6_hywyy9.jpg";
export const Bestorger_2 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730560627/1_akhurm.jpg";
export const Bestorger_3 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730560627/2_wzcb8z.jpg";
export const Bestorger_4 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730560627/3_bld7ly.jpg";

// Sandwiches------------------------------------------------------------------------------------------------------------
// Sandwich kebap
export const KebapMain =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730031844/8485159_cxbjr8.jpg";
export const Kebap_2 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730031848/8_ahinrj.jpg";
export const Kebap_3 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730031845/4_hhrxph.jpg";
export const Kebap_4 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730031845/9_cexkja.jpg";
export const Kebap_5 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730031845/main_q0akzi.jpg";
export const Kebap_6 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730031842/5_qyueyq.jpg";
export const Kebap_7 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730031842/2_hwyzj7.jpg";
export const Kebap_8 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730031842/10_qwtetd.jpg";
// Sandwich Chicken
export const ChickenMain =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730031721/18_sx9zpq.jpg";
export const Chicken_1 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730031727/11_y2peho.jpg";
export const Chicken_2 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730031726/14_hz6phu.jpg";
export const Chicken_3 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730031723/4_xlod3q.jpg";
export const Chicken_4 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730031725/2_a0xxj5.jpg";
export const Chicken_5 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730031723/529259_wsrloe.jpg";
export const Chicken_6 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730031726/3_fmqwua.jpg";
// Sandwich Shnitzel
export const ShnitzelMain =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730031870/7_l6vtl1.jpg";
export const Shnitzel_1 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730031871/2_khwk8i.jpg";
export const Shnitzel_2 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730031870/7_l6vtl1.jpg";
export const Shnitzel_3 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730031870/4_dndcv1.jpg";
export const Shnitzel_5 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730031868/6_wye2zv.jpg";
export const Shnitzel_4 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730031869/3_ztskjm.jpg";

// Tortilla------------------------------------------------------------------------------------------------------------
// Tortilla kebap
export const TortillaKebapMain =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730455859/Kebap_Main_n8n6hc.jpg";
export const TortillaKebap_1 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730455858/2_hfq5ty.jpg";
export const TortillaKebap_2 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730455858/3_lsh3df.jpg";
// Tortilla Chicken
export const TortillaChickenMain =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730455859/main_a7wfei.jpg";
export const TortillaChicken_1 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730455858/1_bnjape.jpg";
export const TortillaChicken_2 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730455858/2_cmrkhg.jpg";
// Tortilla Chicken Mushrooms
export const TortillaKremaMain =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730455857/1_e9pubn.jpg";
export const TortillaKrema_1 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730455857/2_gh6vhp.jpg";
export const TortillaKrema_2 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730455857/main_p7lrqb.jpg";

// Tortilla Chicken Chesse
export const TortillaChesseMain =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730455861/main_ju4ken.jpg";
export const TortillaChesse_1 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730455860/2_vnmipg.jpg";
export const TortillaChesse_2 =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730455860/1_mwqpzk.jpg";

// Drinks------------------------------------------------------------------------------------------------------------------
//SoftDrinks
export const cocaCola =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730071399/cocacola_kfxvbv.jpg";
export const zero =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730071844/2_hxd587.jpg";
export const bluDay =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730071845/9_nghnwx.jpg";
export const XL =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730071844/3_regwmb.jpg";
export const XL_Ten =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730072614/Untitled_design_1_pyak8x.jpg";
export const Orange =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730071844/7_d15whh.jpg";
export const grapes =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730071844/6_oubldj.jpg";
export const sprite =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730071844/5_w01hxw.jpg";
export const fanta =
  "https://res.cloudinary.com/dlubjzies/image/upload/v1730071844/4_g48o2v.jpg";

// Define MenuItem and Category interfaces
export interface MenuItem {
  title: string;
  images: string[];
  price: string;
  description?: string;
  chesse?: string;
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
      { title: "Brothers Package (2 people)", images: [Soon], price: "Price" },
      { title: "Friends Package (3 people)", images: [Soon], price: "Price" },
      { title: "Family Package (4 people)", images: [Soon], price: "Price" },
    ],
    backgroundImage: specialBg,
  },
  {
    title: "Burgers",
    items: [
      {
        title: "Besto's Burger",
        images: [
          mushroomBurgerMain,
          mushroomBurger1,
          mushroomBurger2,
          mushroomBurger3,
          mushroomBurger4,
        ],
        price: "55₪",
        description: "(Cream & Mushrooms)",
        chesse: "Cheddar cheese +7₪",
      },
      {
        title: "Classic Burger 160g",
        images: [
          burger160Main,
          burger160_1,
          burger160_2,
          burger160_3,
          burger160_4,
        ],
        price: "43₪",
        chesse: "Cheddar cheese +7₪",
      },
      {
        title: "Classic Burger 320g",
        images: [burger320Main, burger320_1, burger320_2, burger320_3],
        price: "56₪",
        chesse: "Cheddar cheese +7₪",
      },
      {
        title: "Smash Burger 200g",
        images: [Smash200Main, Smash200_1, Smash200_2],
        price: "45₪",
        chesse: "Cheddar cheese +7₪",
      },
      {
        title: "Smash Burger 300g",
        images: [Smash300Main, Smash300_1],
        price: "50₪",
        chesse: "Cheddar cheese +7₪",
      },
      {
        title: "Bestorger",
        images: [
          BestorgerMain,
          Bestorger_1,
          Bestorger_2,
          Bestorger_3,
          Bestorger_4,
        ],
        price: "50₪",
        chesse: "Cheddar cheese +7₪",
      },
      {
        title: "Shnitzel burger",
        images: [
          shnitselBurgerMain,
          shnetselBurger1,
          shnetselBurger2,
          shnetselBurger3,
          shnetselBurger4,
          shnetselBurger5,
          shnetselBurger6,
        ],
        price: "38₪",
        chesse: "Cheddar cheese +7₪",
      },
    ],
    backgroundImage: burgerBg,
  },

  {
    title: "Sandwiches",
    items: [
      {
        title: "Shnitzel Sandwich",
        images: [
          ShnitzelMain,
          Shnitzel_1,
          Shnitzel_2,
          Shnitzel_3,
          Shnitzel_4,
          Shnitzel_5,
        ],
        price: "38₪",
      },
      {
        title: "Kebap Sandwich",
        images: [
          KebapMain,
          Kebap_2,
          Kebap_3,
          Kebap_4,
          Kebap_5,
          Kebap_6,
          Kebap_7,
          Kebap_8,
        ],
        price: "40₪",
      },
      {
        title: "Chick fillet Sandwich",
        images: [
          ChickenMain,
          Chicken_1,
          Chicken_2,
          Chicken_3,
          Chicken_4,
          Chicken_5,
          Chicken_6,
        ],
        price: "38₪",
      },
      {
        title: "Omlet Sandwich",
        images: [Soon],
        price: "",
      },
      {
        title: "Tuna Sandwich",
        images: [Soon],
        price: "",
      },
      {
        title: "Yellow Cheese Sandwich",
        images: [Soon],
        price: "",
      },
      {
        title: "White cheese Sandwich",
        images: [Soon],
        price: "",
      },
      {
        title: "Pastrami Sandwich",
        images: [Soon],
        price: "",
      },
      {
        title: "Salami Sandwich",
        images: [Soon],
        price: "",
      },
    ],
    backgroundImage: sandwishBg,
  },
  {
    title: "Tortilla roll",
    items: [
      {
        title: "Kebap roll",
        images: [TortillaKebapMain, TortillaKebap_1, TortillaKebap_2],
        price: "38₪",
      },
      {
        title: "Chick fillet",
        images: [TortillaChickenMain, TortillaChicken_1, TortillaChicken_2],
        price: "35₪",
      },
      {
        title: "Cheese chick fillet",
        images: [TortillaChesseMain, TortillaChesse_1, TortillaChesse_2],
        price: "42₪",
      },
      {
        title: "Mushroom chick fillet",
        images: [TortillaKremaMain, TortillaKrema_1, TortillaKrema_2],
        price: "42₪",
      },
      {
        title: "Shnitzel roll",
        images: [Soon],
        price: "35₪",
      },
    ],
    backgroundImage: Tortilla,
  },
  {
    title: "Appetizers",
    items: [
      {
        title: "Chicken wings",
        images: [Soon],
        price: "",
      },
      {
        title: "Besto’s Nuggets",
        images: [Soon],
        price: "",
      },
      {
        title: "Crispy sticks",
        images: [Soon],
        price: "",
      },
      {
        title: "Mix for 1",
        images: [Soon],
        price: "",
      },
      {
        title: "Dbl mix (for 2)",
        images: [Soon],
        price: "",
      },
      {
        title: "Trio mix (for 3)",
        images: [Soon],
        price: "",
      },
    ],
    backgroundImage: Appetizers,
  },
];

interface MainCategory {
  title: string;
  subcategories: SubCategory[]; // Array of subcategories
  backgroundImage: string;
}

interface SubCategory {
  title: string;
  backgroundImage: string;
  items: Item[]; // Array of items
}

interface Item {
  title: string;
  images: string[];
  price: string;
}

export const EnglishDrinkCategories: MainCategory[] = [
  {
    title: "Drinks",
    subcategories: [
      {
        title: "Soft Drinks",
        backgroundImage: Soon,
        items: [
          {
            title: "Coca Cola",
            images: [cocaCola],
            price: "7₪",
          },
          {
            title: "Coca Zero ",
            images: [zero],
            price: "7₪",
          },
          {
            title: "Sprite",
            images: [sprite],
            price: "7₪",
          },
          {
            title: "Fanta",
            images: [fanta],
            price: "7₪",
          },
          {
            title: "XL",
            images: [XL],
            price: "5₪",
          },
          {
            title: "XL-Ten",
            images: [XL_Ten],
            price: "5₪",
          },
          {
            title: "Blu Day",
            images: [bluDay],
            price: "5₪",
          },
          {
            title: "Orange",
            images: [Orange],
            price: "7₪",
          },
          {
            title: "grapes",
            images: [grapes],
            price: "7₪",
          },
        ],
      },
      {
        title: "Cold Coffee Drinks",
        backgroundImage: Soon,
        items: [
          {
            title: "White Mocha",
            images: [],
            price: "",
          },
        ],
      },
      {
        title: "Natural Juice Drinks",
        backgroundImage: Soon,
        items: [
          {
            title: "Orange",
            images: [],
            price: "",
          },
        ],
      },
      {
        title: "Fakhfakhina Drinks",
        backgroundImage: Soon,
        items: [
          {
            title: "Title 1",
            images: [],
            price: "",
          },
        ],
      },
    ],
    backgroundImage: drinksBg,
  },
];
