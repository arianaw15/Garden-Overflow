const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/garden-overflow"
);

const plants = [
     {
      "name": "Artichokes",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/artichoke-close.jpg?itok=Vw6-d7T_",
      "type": "Vegetable",
      "sun": "Full Sun",
      "hardiness": "4, 5, 6, 7, 8, 9, 10, 11"
     },
     {
      "name": "Arugula",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/arugula_vaivirga-ss-rsz.jpg?itok=tcOgY8il",
      "type": "Vegetable",
      "sun": "Part Sun",
      "hardiness": "3, 4, 5, 6, 7, 8, 9, 10, 11"
     },
     {
      "name": "Asparagus",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/asparagus_chris6_gettyimages_rsz.jpg?itok=WMCjKtPC",
      "type": "Vegetable",
      "sun": "Full Sun",
      "hardiness": "4, 5, 6, 7, 8, 9"
     },
     {
      "name": "Beets",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/beets_by_darasp_kran_ss_crop.jpg?itok=kqvSLUjJ",
      "type": "Vegetable",
      "sun": "Part Sun",
      "hardiness": "2, 3, 4, 5, 6, 7, 8, 9, 10"
     },
     {
      "name": "Bell Peppers",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/bell_peppers_dleonis_gettyimages.jpg?itok=7X41cMnm",
      "type": "Vegetable",
      "sun": "Full Sun",
      "hardiness": "4, 5, 6, 7, 8, 9, 10, 11"
     },
     {
      "name": "Broccoli",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/broccoli-plant.jpg?itok=gTM_9XcD",
      "type": "Vegetable",
      "sun": "Full Sun",
      "hardiness": "3, 4, 5, 6, 7, 8, 9, 10"
     },
     {
      "name": "Brussels Sprouts",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/brussels-sprouts.jpg?itok=4Gq-HQl4",
      "type": "Vegetable",
      "sun": "Full Sun",
      "hardiness": "2, 3, 4, 5, 6, 7, 8, 9"
     },
     {
      "name": "Cabbage",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/cabbage_st-design_gettyimages.jpg?itok=Y4TSs3Lx",
      "type": "Vegetable",
      "sun": "Full Sun",
      "hardiness": "1, 2, 3, 4, 5, 6, 7, 8, 9"
     },
     {
      "name": "Carrots",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/carrots-table_popidar-ss.jpg?itok=lh-pzqm3",
      "type": "Vegetable",
      "sun": "Full Sun",
      "hardiness": "3, 4, 5, 6, 7, 8, 9, 10"
     },
     {
      "name": "Cauliflower",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/cauliflower.jpg?itok=-SYNFsWf",
      "type": "Vegetable",
      "sun": "Full Sun"
     },
     {
      "name": "Celery",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/celery-close-up-shutterstock_110543273.jpg?itok=sxHGJEfp",
      "type": "Vegetable",
      "sun": "Part Sun",
      "hardiness": "2, 3, 4, 5, 6, 7, 8, 9, 10"
     },
     {
      "name": "Corn",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/corn-1605664_1920.jpg?itok=jp7HeJGr",
      "type": "Vegetable",
      "sun": "Full Sun",
      "hardiness": "4, 5, 6, 7, 8, 9"
     },
     {
      "name": "Cucumbers",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/cucumbers.jpg?itok=bdpaTQq_",
      "type": "Vegetable",
      "sun": "Full Sun",
      "hardiness": "4, 5, 6, 7, 8, 9, 10, 11"
     },
     {
      "name": "Edamame",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/soya-83087_1280.jpg?itok=Esbrl-JZ",
      "type": "Vegetable",
      "sun": "Full Sun",
      "hardiness": "3, 4, 5, 6, 7, 8, 9"
     },
     {
      "name": "Eggplants",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/eggplant.jpg?itok=evBIULWs",
      "type": "Vegetable",
      "sun": "Full Sun",
      "hardiness": "4, 5, 6, 7, 8, 9, 10"
     },
     {
      "name": "Garlic",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/garlic-growing-guide.jpg?itok=GbZVjjmg",
      "type": "Vegetable",
      "sun": "Full Sun",
      "hardiness": "3, 4, 5, 6, 7, 8"
     },
     {
      "name": "Green Beans",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/green_beans_brytta_gettyimages.jpg?itok=WwmkFlrw",
      "type": "Vegetable",
      "sun": "Full Sun",
      "hardiness": "3, 4, 5, 6, 7, 8, 9, 10"
     },
     {
      "name": "Horseradish",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/horseradish-root-by-kuttelvaserova-stuchelova-shutterstock_crop.jpg?itok=rgY_CJlT",
      "type": "Vegetable",
      "sun": "Full Sun",
      "hardiness": "3, 4, 5, 6, 7, 8"
     },
     {
      "name": "Jalapeño Peppers",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/jalapeno-peppers-red-crop.jpg?itok=4oFQTzwb",
      "type": "Vegetable",
      "sun": "Full Sun",
      "hardiness": "5, 6, 7, 8, 9, 10, 11"
     },
     {
      "name": "Kale",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/kale-leaves.jpg?itok=HKRbV8se",
      "type": "Vegetable",
      "sun": "Part Sun",
      "hardiness": "2, 3, 4, 5, 6, 7, 8"
     },
     {
      "name": "Kohlrabi",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/kohlrabi-close.jpg?itok=34MHtzpB",
      "type": "Vegetable",
      "sun": "Full Sun",
      "hardiness": "3, 4, 5, 6, 7, 8, 9"
     },
     {
      "name": "Lettuce",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/lettuce-varieties.jpg?itok=CK6UP_rC",
      "type": "Vegetable",
      "sun": "Part Sun",
      "hardiness": "4, 5, 6, 7, 8, 9"
     },
     {
      "name": "Okra",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/images/okra.jpg?itok=kj0Iz_Gj",
      "type": "Vegetable",
      "sun": "Full Sun",
      "hardiness": "6, 7, 8, 9, 10, 11"
     },
     {
      "name": "Onions",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/onions.jpg?itok=LuSZeb0j",
      "type": "Vegetable",
      "sun": "Full Sun",
      "hardiness": "3, 4, 5, 6, 7, 8, 9"
     },
     {
      "name": "Parsnips",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/images/parsnip.jpg?itok=_WUSklAr",
      "type": "Vegetable",
      "sun": "Part Sun",
      "hardiness": "2, 3, 4, 5, 6, 7, 8, 9"
     },
     {
      "name": "Peas",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/peas-and-pea-pods.jpg?itok=trD6N79A",
      "type": "Vegetable",
      "sun": "Part Sun",
      "hardiness": "2, 3, 4, 5, 6, 7, 8, 9"
     },
     {
      "name": "Potatoes",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/red-potatoes_full_width.jpg?itok=nCybTriP",
      "type": "Vegetable",
      "sun": "Full Sun",
      "hardiness": "1, 2, 3, 4, 5, 6, 7"
     },
     {
      "name": "Pumpkins",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/pumpkins-px_0.jpg?itok=dwOg1fko",
      "type": "Vegetable",
      "sun": "Full Sun",
      "hardiness": "3, 4, 5, 6, 7, 8, 9"
     },
     {
      "name": "Radishes",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/images/photo_2772.jpg?itok=zyzogA3a",
      "type": "Vegetable",
      "sun": "Full Sun",
      "hardiness": "2, 3, 4, 5, 6, 7, 8, 9, 10"
     },
     {
      "name": "Rhubarb",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/rhubarb-leaves.jpg?itok=7-yuAfEM",
      "type": "Vegetable",
      "sun": "Part Sun",
      "hardiness": "3, 4, 5, 6, 7, 8"
     },
     {
      "name": "Rutabagas",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/rutabaga-planting-growing.jpg?itok=91ABUeRR",
      "type": "Vegetable",
      "sun": "Full Sun",
      "hardiness": "3, 4, 5, 6, 7, 8, 9"
     },
     {
      "name": "Spinach",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/spinach-leaves.jpg?itok=mG7aNosB",
      "type": "Vegetable",
      "sun": "Full Sun",
      "hardiness": "2, 3, 4, 5, 6, 7, 8, 9"
     },
     {
      "name": "Sweet Potatoes",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/sweet-potatoes_ssbonnietaylorbarry.jpg?itok=tkKQOJFP",
      "type": "Vegetable",
      "sun": "Full Sun",
      "hardiness": "3, 4, 5, 6, 7, 8, 9, 10, 11"
     },
     {
      "name": "Swiss Chard",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/swiss_chard_nancy_kennedy_gettyimages.jpg?itok=S9EgPs3d",
      "type": "Vegetable",
      "sun": "Part Sun",
      "hardiness": "3, 4, 5, 6, 7, 8, 9, 10"
     },
     {
      "name": "Tomatoes",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg?itok=4KrW14a4",
      "type": "Vegetable",
      "sun": "Full Sun",
      "hardiness": "4, 5, 6, 7, 8, 9, 10, 11"
     },
     {
      "name": "Turnips",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/turnips_shutterstock_733782379.jpg?itok=Pj1l3peD",
      "type": "Vegetable",
      "sun": "Full Sun",
      "hardiness": "2, 3, 4, 5, 6, 7, 8, 9"
     },
     {
      "name": "Winter Squash",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/squash-butternut-vines_dleonis-getty.jpg?itok=OUj5uuNv",
      "type": "Vegetable",
      "sun": "Full Sun",
      "hardiness": "3, 4, 5, 6, 7, 8, 9"
     },
     {
      "name": "Zucchini",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/zucchini_sanny11_gettyimages_0.jpg?itok=tAEURAZH",
      "type": "Vegetable",
      "sun": "Full Sun",
      "hardiness": "3, 4, 5, 6, 7, 8, 9, Varies"
     },
     {
      "name": "Apples",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/images/apple-tree.jpg?itok=yIKBkZnt",
      "type": "Fruit",
      "sun": "Full Sun",
      "hardiness": "3, 4, 5, 6, 7, 8"
     },
     {
      "name": "Blackberries",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/blackberries-dish.jpg?itok=nRc8flxa",
      "type": "Fruit",
      "sun": "Full Sun",
      "hardiness": "4, 5, 6, 7, 8, 9, 10"
     },
     {
      "name": "Blueberries",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/blueberries-close-up.jpg?itok=PnQJXrY_",
      "type": "Fruit",
      "sun": "Full Sun",
      "hardiness": "3, 4, 5, 6, 7, 8, 9"
     },
     {
      "name": "Cantaloupes",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/images/muskmelon.jpg?itok=z3YyVWF5",
      "type": "Fruit",
      "sun": "Full Sun",
      "hardiness": "5, 6, 7, 8, 9, 10, 11"
     },
     {
      "name": "Cherries",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/cherries-planting-growing-harvesting.jpg?itok=8hk8wsGM",
      "type": "Fruit",
      "sun": "Full Sun",
      "hardiness": "4, 5, 6, 7"
     },
     {
      "name": "Figs",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/figs.jpg?itok=K-2OzmwG",
      "type": "Fruit",
      "sun": "Full Sun",
      "hardiness": "8, 9, 10, 11"
     },
     {
      "name": "Grapes",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/green-grapes.jpg?itok=mFI8AsyE",
      "type": "Fruit",
      "sun": "Full Sun",
      "hardiness": "2, 3, 4, 5, 6, 7, 8, 9, 10"
     },
     {
      "name": "Kiwifruit",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/kiwi-close.jpg?itok=MvR-bnVj",
      "type": "Fruit",
      "sun": "Full Sun",
      "hardiness": "3, 4, 5, 6, 7, 8, 9"
     },
     {
      "name": "Lemons & Oranges",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/lemons-oranges-citrus.jpg?itok=nc9ZI7dU",
      "type": "Fruit",
      "sun": "Full Sun",
      "hardiness": "8, 9, 10"
     },
     {
      "name": "Peaches",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/images/peaches.jpg?itok=xayqoKXj",
      "type": "Fruit",
      "sun": "Full Sun",
      "hardiness": "4, 5, 6, 7, 8, 9"
     },
     {
      "name": "Pears",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/images/pears.jpg?itok=5e5RJLf-",
      "type": "Fruit",
      "sun": "Full Sun",
      "hardiness": "3, 4, 5, 6, 7, 8, 9, 10"
     },
     {
      "name": "Plums",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/plums-branch.jpg?itok=unfnW8S3",
      "type": "Fruit",
      "sun": "Full Sun",
      "hardiness": "3, 4, 5, 6, 7, 8, 9"
     },
     {
      "name": "Raspberries",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/raspberries.jpg?itok=8e566Dys",
      "type": "Fruit",
      "sun": "Full Sun",
      "hardiness": "2, 3, 4, 5, 6, 7, 8"
     },
     {
      "name": "Strawberries",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/strawberries-1.jpg?itok=M1rx-t2P",
      "type": "Fruit",
      "sun": "Full Sun",
      "hardiness": "2, 3, 4, 5, 6, 7, 8, 9, 10"
     },
     {
      "name": "Watermelons",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/watermelon-many.jpg?itok=_7BMzc3I",
      "type": "Fruit",
      "sun": "Full Sun",
      "hardiness": "3, 4, 5, 6, 7, 8, 9, 10, 11"
     },
     {
      "name": "Basil",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/basil-leaves-herb.jpg?itok=wDUoV-bs",
      "type": "Herb",
      "sun": "Full Sun",
      "hardiness": "5, 6, 7, 8, 9, 10"
     },
     {
      "name": "Chives",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/chives-display-crop.jpg?itok=AtLEg7me",
      "type": "Herb",
      "sun": "Full Sun",
      "hardiness": "3, 4, 5, 6, 7, 8, 9"
     },
     {
      "name": "Cilantro (Coriander)",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/cilantro.jpg?itok=HBQeK7Gy",
      "type": "Herb",
      "sun": "Part Sun"
     },
     {
      "name": "Dill",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/dill-planting-growing.jpg?itok=LblaPkIn",
      "type": "Herb",
      "sun": "Full Sun",
      "hardiness": "2, 3, 4, 5, 6, 7, 8, 9"
     },
     {
      "name": "Lavender",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/lavender-field-1595587_1920.jpg?itok=b0W1Lnix",
      "type": "Herb",
      "sun": "Full Sun",
      "hardiness": "5, 6, 7, 8, 9"
     },
     {
      "name": "Marjoram",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/marjoram-2370814_1920.jpg?itok=EJNJVjGX",
      "type": "Herb",
      "sun": "Full Sun"
     },
     {
      "name": "Mint",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/mint-planting-growing-harvesting.jpg?itok=41i3t8up",
      "type": "Herb",
      "sun": "Full Sun"
     },
     {
      "name": "Oregano",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/oregano.jpg?itok=DiQDEEpj",
      "type": "Herb",
      "sun": "Full Sun"
     },
     {
      "name": "Parsley",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/parsley-planting-growing-harvesting.jpg?itok=NMzulRjA",
      "type": "Herb",
      "sun": "Part Sun",
      "hardiness": "2, 3, 4, 5, 6, 7, 8, 9, 10, 11"
     },
     {
      "name": "Rosemary",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/rosemary-foliage.jpg?itok=PR05PK0N",
      "type": "Herb",
      "sun": "Full Sun",
      "hardiness": "7, 8, 9, 10, 11"
     },
     {
      "name": "Sage",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/sage-planting-growing-harvesting.jpg?itok=XnnBqCbk",
      "type": "Herb",
      "sun": "Full Sun",
      "hardiness": "4, 5, 6, 7, 8, 9, 10"
     },
     {
      "name": "Tarragon",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/images/tarragon.jpg?itok=rrcQDL_U",
      "type": "Herb",
      "sun": "Part Sun"
     },
     {
      "name": "Thyme",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/thyme-planting-growing.jpg?itok=HNgI--hB",
      "type": "Herb",
      "sun": "Part Sun",
      "hardiness": "5, 6, 7, 8, 9"
     },
     {
      "name": "Amaryllis",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/amaryllis-red-black-background.jpg?itok=LtUBKmB4",
      "type": "Flower",
      "sun": "Part Sun",
      "hardiness": "8, 9, 10"
     },
     {
      "name": "Asters",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/aster-flowers.jpg?itok=3bl-Stkz",
      "type": "Flower",
      "sun": "Part Sun",
      "hardiness": "3, 4, 5, 6, 7, 8"
     },
     {
      "name": "Astilbe",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/astilbe-plant-grow-care.jpg?itok=1_aK0ukd",
      "type": "Flower",
      "sun": "Shade",
      "hardiness": "3, 4, 5, 6, 7, 8, 9"
     },
     {
      "name": "Bee Balm",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/bee-balm-garden_by_moon_px.jpg?itok=9AKOKzWj",
      "type": "Flower",
      "sun": "Full Sun",
      "hardiness": "3, 4, 5, 6, 7, 8, 9"
     },
     {
      "name": "Black-eyed Susans",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/images/photo_7932.jpg?itok=QHDt-Z_X",
      "type": "Flower",
      "sun": "Part Sun",
      "hardiness": "3, 4, 5, 6, 7, 8, 9"
     },
     {
      "name": "Bleeding Heart",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/blossom-1425870_1920.jpg?itok=gU-7Tq5G",
      "type": "Flower",
      "sun": "Shade",
      "hardiness": "3, 4, 5, 6, 7, 8, 9"
     },
     {
      "name": "Cannas",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/canna_tropicanna_3_varieties.jpg?itok=i8zWTr2p",
      "type": "Flower",
      "sun": "Full Sun",
      "hardiness": "7, 8, 9, 10, 11"
     },
     {
      "name": "Chrysanthemums",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/chrysanthemum-orange-4544730_1920.jpg?itok=guN0NYBe",
      "type": "Flower",
      "sun": "Part Sun",
      "hardiness": "4, 5, 6, 7, 8, 9"
     },
     {
      "name": "Columbine",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/nature-3091588_1920.jpg?itok=GD1pR-Zi",
      "type": "Flower",
      "sun": "Full Sun",
      "hardiness": "3, 4, 5, 6, 7, 8, 9"
     },
     {
      "name": "Coneflowers",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/images/coneflowers_0.jpg?itok=FOY8lFy5",
      "type": "Flower",
      "sun": "Full Sun",
      "hardiness": "3, 4, 5, 6, 7, 8, 9"
     },
     {
      "name": "Cosmos",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/cosmos-flower.jpg?itok=JNmDoJOb",
      "type": "Flower",
      "sun": "Full Sun"
     },
     {
      "name": "Crocuses",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/crocuses.jpg?itok=RVQ6Mi59",
      "type": "Flower",
      "sun": "Part Sun",
      "hardiness": "3, 4, 5, 6, 7, 8"
     },
     {
      "name": "Daffodils",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/daffodil.jpg?itok=KSBgH9y9",
      "type": "Flower",
      "sun": "Part Sun",
      "hardiness": "3, 4, 5, 6, 7, 8, 9"
     },
     {
      "name": "Dahlias",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/dahlia-3598551_1920.jpg?itok=XZfJlur2",
      "type": "Flower",
      "sun": "Full Sun",
      "hardiness": "7, 8, 9, 10"
     },
     {
      "name": "Daylilies",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/daylily-orange.jpg?itok=3lv0G5zc",
      "type": "Flower",
      "sun": "Full Sun",
      "hardiness": "4, 5, 6, 7, 8, 9"
     },
     {
      "name": "Delphiniums",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/delphinium_bluedonnalandscape-ballhort.jpg?itok=ZCG7anM7",
      "type": "Flower",
      "sun": "Part Sun",
      "hardiness": "3, 4, 5, 6, 7"
     },
     {
      "name": "Foxglove",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/common-foxglove-2400621_1920.jpg?itok=jQ9tPIYd",
      "type": "Flower",
      "sun": "Full Sun",
      "hardiness": "4, 5, 6, 7, 8, 9"
     },
     {
      "name": "Gladiolus",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/gladiolus-flower.jpg?itok=ANuFeJF8",
      "type": "Flower",
      "sun": "Full Sun",
      "hardiness": "8, 9, 10, 11"
     },
     {
      "name": "Hyacinth and Muscari",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/hyacinths-marcin_jucha_ss.jpg?itok=LJX2n3zX",
      "type": "Flower",
      "sun": "Part Sun",
      "hardiness": "3, 4, 5, 6, 7, 8, 9"
     },
     {
      "name": "Impatiens",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/images/photo_13714.jpg?itok=w80jEA6V",
      "type": "Flower",
      "sun": "Part Sun",
      "hardiness": "10, 11"
     },
     {
      "name": "Irises",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/iris-flowers.jpg?itok=RvCxClOE",
      "type": "Flower",
      "sun": "Part Sun",
      "hardiness": "3, 4, 5, 6, 7, 8, 9"
     },
     {
      "name": "Lilies",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/oriental-lily.jpg?itok=8QILjH76",
      "type": "Flower",
      "sun": "Part Sun",
      "hardiness": "4, 5, 6, 7, 8, 9, Varies"
     },
     {
      "name": "Lily of the Valley",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/lily-of-the-valley-sun_0.jpg?itok=QxhVnoUQ",
      "type": "Flower",
      "sun": "Shade",
      "hardiness": "3, 4, 5, 6, 7"
     },
     {
      "name": "Lupines",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/lupine-799002_1920.jpg?itok=csiqXcQj",
      "type": "Flower",
      "sun": "Part Sun",
      "hardiness": "3, 4, 5, 6, 7"
     },
     {
      "name": "Marigolds",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/french-marigolds-2.jpg?itok=pMOCfowU",
      "type": "Flower",
      "sun": "Part Sun",
      "hardiness": "3, 4, 5, 6, 7, 8, 9, 10, 11"
     },
     {
      "name": "Morning Glories",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/magenta-morning-glory.jpg?itok=f4TTNG5W",
      "type": "Flower",
      "sun": "Full Sun",
      "hardiness": "3, 4, 5, 6, 7, 8, 9, 10"
     },
     {
      "name": "Nasturtiums",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/nasturtium-close.jpg?itok=hE-a1gYE",
      "type": "Flower",
      "sun": "Part Sun",
      "hardiness": "10, 11"
     },
     {
      "name": "Pansies",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/pansies-in-pots-crop.jpg?itok=H21mZb5z",
      "type": "Flower",
      "sun": "Part Sun",
      "hardiness": "2, 3, 4, 5, 6, 7, 8, 9"
     },
     {
      "name": "Peonies",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/peony-pink-e.jpg?itok=i9LIXGwP",
      "type": "Flower",
      "sun": "Full Sun",
      "hardiness": "3, 4, 5, 6, 7, 8"
     },
     {
      "name": "Petunias",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/images/petunias.jpg?itok=pyW560NZ",
      "type": "Flower",
      "sun": "Full Sun"
     },
     {
      "name": "Phlox",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/phlox-white.jpg?itok=u1Vmnnj5",
      "type": "Flower",
      "sun": "Shade",
      "hardiness": "2, 3, 4, 5, 6, 7, 8, 9"
     },
     {
      "name": "Roses",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/rose-peach.jpg?itok=hnIK5mr5",
      "type": "Flower",
      "sun": "Full Sun",
      "hardiness": "Varies"
     },
     {
      "name": "Salvia",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/blue_sage.jpg?itok=JHxOvHCo",
      "type": "Flower",
      "sun": "Full Sun",
      "hardiness": "5, 6, 7, 8, 9, 10"
     },
     {
      "name": "Sedum",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/sedum-autumn-joy.jpg?itok=kvMDP-xb",
      "type": "Flower",
      "sun": "Part Sun",
      "hardiness": "3, 4, 5, 6, 7, 8, 9, 10"
     },
     {
      "name": "Shasta Daisies",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/shasta-daisies-plant-grow.jpg?itok=cOUd7rGn",
      "type": "Flower",
      "sun": "Full Sun",
      "hardiness": "4, 5, 6, 7, 8, 9"
     },
     {
      "name": "Sunflowers",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/sunflower-1627193_1920.jpg?itok=yc2JGIPb",
      "type": "Flower",
      "sun": "Full Sun",
      "hardiness": "2, 3, 4, 5, 6, 7, 8, 9, 10, 11"
     },
     {
      "name": "Sweet Peas",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/sweet-peas_moravska-ss-resize.jpg?itok=rQYxFjA7",
      "type": "Flower",
      "sun": "Full Sun"
     },
     {
      "name": "Tulips",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/tulips-multicolored.jpg?itok=i0LJ3dYM",
      "type": "Flower",
      "sun": "Part Sun",
      "hardiness": "3, 4, 5, 6, 7, 8"
     },
     {
      "name": "Veronica (Speedwell)",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/veronica-spicata-masaki-ikeda.jpg?itok=LkXJYFdP",
      "type": "Flower",
      "sun": "Full Sun",
      "hardiness": "3, 4, 5, 6, 7, 8, 9, 10, 11"
     },
     {
      "name": "Yarrow",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/yellow-yarrow-planting-growing.jpg?itok=3kIl_3GE",
      "type": "Flower",
      "sun": "Full Sun",
      "hardiness": "3, 4, 5, 6, 7, 8, 9"
     },
     {
      "name": "Zinnias",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/zinnias-assorted-edit.jpg?itok=FA-Rqlos",
      "type": "Flower",
      "sun": "Full Sun",
      "hardiness": "3, 4, 5, 6, 7, 8, 9, 10"
     },
     {
      "name": "Coleus",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/coleus-leaves-2361843_1920.jpg?itok=GCWdgOjL",
      "type": "Foliage Plant",
      "sun": "Part Sun",
      "hardiness": "10, 11"
     },
     {
      "name": "Elephant Ears",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/elephant-ears-1520824_1920.jpg?itok=pPZ4Lrin",
      "type": "Foliage Plant",
      "sun": "Part Sun",
      "hardiness": "7, 8, 9, 10, 11"
     },
     {
      "name": "Hostas",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/hosta-plant.jpg?itok=UhA5chse",
      "type": "Foliage Plant",
      "sun": "Shade",
      "hardiness": "3, 4, 5, 6, 7, 8, 9"
     },
     {
      "name": "Arborvitae",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/arborvitae_rlat-getty.jpg?itok=UaN_aGOO",
      "type": "Trees, Shrubs, and Vine",
      "sun": "Part Sun",
      "hardiness": "3, 4, 5, 6, 7, 8"
     },
     {
      "name": "Butterfly Bush",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/butterfly-bush.jpg?itok=kHx9qIyy",
      "type": "Trees, Shrubs, and Vine",
      "sun": "Full Sun",
      "hardiness": "5, 6, 7, 8, 9, 10"
     },
     {
      "name": "Clematis",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/clematis-1444236_1920.jpg?itok=G9AlFg1c",
      "type": "Trees, Shrubs, and Vine",
      "sun": "Full Sun",
      "hardiness": "4, 5, 6, 7, 8"
     },
     {
      "name": "Forsythia",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/forsythia-2188453_1920.jpg?itok=6GjgMS4q",
      "type": "Trees, Shrubs, and Vine",
      "sun": "Part Sun",
      "hardiness": "3, 4, 5, 6, 7, 8"
     },
     {
      "name": "Gardenias",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/gardenia-close.jpg?itok=ib_mRf_I",
      "type": "Trees, Shrubs, and Vine",
      "sun": "Part Sun",
      "hardiness": "7, 8, 9, 10, 11"
     },
     {
      "name": "Hibiscus",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/hibiscus-moscheutos_rogatnykh-ss_resize2.jpg?itok=38rjdc_3",
      "type": "Trees, Shrubs, and Vine",
      "sun": "Part Sun",
      "hardiness": "5, 6, 7, 8, 9"
     },
     {
      "name": "Hops",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/hops-closest.jpg?itok=D2dDBOMy",
      "type": "Trees, Shrubs, and Vine",
      "sun": "Full Sun",
      "hardiness": "4, 5, 6, 7, 8, 9"
     },
     {
      "name": "Hydrangeas",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/hydrangea-pink-bush.jpg?itok=2L-2eWY8",
      "type": "Trees, Shrubs, and Vine",
      "sun": "Shade",
      "hardiness": "3, 4, 5, 6, 7, 8, 9"
     },
     {
      "name": "Lilacs",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/images/photo_11437.jpg?itok=BBlDDg1N",
      "type": "Trees, Shrubs, and Vine",
      "sun": "Part Sun",
      "hardiness": "2, 3, 4, 5, 6, 7"
     },
     {
      "name": "Rhododendrons and Azaleas",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/rhododendron-pink-bush-edit.jpg?itok=ayZC3YZX",
      "type": "Trees, Shrubs, and Vine",
      "sun": "Shade",
      "hardiness": "3, 4, 5, 6, 7, 8, 9"
     },
     {
      "name": "Wisteria",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/wisteria.jpg?itok=Cj9b7OcV",
      "type": "Trees, Shrubs, and Vine",
      "sun": "Part Sun",
      "hardiness": "4, 5, 6, 7, 8, 9"
     },
     {
      "name": "African Violets",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/african-violet-houseplant.jpg?itok=ghSUNSDJ",
      "type": "Houseplant",
      "sun": "Part Sun"
     },
     {
      "name": "Air Plants",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/air-plant-on-log.jpg?itok=N_sv8Ycg",
      "type": "Houseplant",
      "sun": "Part Sun",
      "hardiness": "9, 10, 11"
     },
     {
      "name": "Aloe Vera",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/aloe-vera-white-pot_sunwand24-ss_edit.jpg?itok=Y7HnaYk3",
      "type": "Houseplant",
      "sun": "Part Sun",
      "hardiness": "10, 11"
     },
     {
      "name": "Bird of Paradise",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/bird-of-paradise.jpg?itok=NK4R_NbK",
      "type": "Houseplant",
      "sun": "Part Sun",
      "hardiness": "9, 10, 11"
     },
     {
      "name": "Christmas Cactus",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/thanksgiving-cactus_nadezhdanesterova-ss.jpg?itok=Y1TcU7ZZ",
      "type": "Houseplant",
      "sun": "Part Sun",
      "hardiness": "10, 11"
     },
     {
      "name": "Croton",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/croton-foliage.jpg?itok=SInT5vrg",
      "type": "Houseplant",
      "sun": "Part Sun",
      "hardiness": "9, 10, 11"
     },
     {
      "name": "English Ivy",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/english-ivy-variegated.jpg?itok=iIME3wQW",
      "type": "Houseplant",
      "sun": "Shade"
     },
     {
      "name": "Geraniums",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/geranium-2422730_1920.jpg?itok=cyx72G4f",
      "type": "Houseplant",
      "sun": "Full Sun",
      "hardiness": "10, 11"
     },
     {
      "name": "Inch Plants",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/wandering-jew-plant.jpg?itok=ZPhSQfBO",
      "type": "Houseplant",
      "sun": "Part Sun",
      "hardiness": "9, 10, 11"
     },
     {
      "name": "Jade Plants",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/jade-planting-growing.jpg?itok=XAWRrD6K",
      "type": "Houseplant",
      "sun": "Part Sun",
      "hardiness": "10, 11"
     },
     {
      "name": "Jasmine",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/jasmine-719973_1920.jpg?itok=KqrbgCyZ",
      "type": "Houseplant",
      "sun": "Part Sun",
      "hardiness": "7, 8, 9, 10"
     },
     {
      "name": "Orchids",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/orchid-pot-shutterstock_491195248.jpg?itok=XU7_WbEt",
      "type": "Houseplant",
      "sun": "Part Sun"
     },
     {
      "name": "Peace Lilies",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/peace_plant_georgina198_gettyimages.jpg?itok=OIsWm1Re",
      "type": "Houseplant",
      "sun": "Shade",
      "hardiness": "10, 11"
     },
     {
      "name": "Ponytail Palms",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/ponytailpalm2-chrisb-cropped.jpg?itok=9kz-Itr_",
      "type": "Houseplant",
      "sun": "Part Sun",
      "hardiness": "9, 10, 11"
     },
     {
      "name": "Pothos",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/pothos_usmee_ss-crop.jpg?itok=5Wgvlf8W",
      "type": "Houseplant",
      "sun": "Part Sun"
     },
     {
      "name": "Snake Plants",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/shutterstock_679786570.jpg?itok=X2jXqX-x",
      "type": "Houseplant",
      "sun": "Shade",
      "hardiness": "8, 9, 10"
     },
     {
      "name": "Spider Plants",
      "image_url": "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/spider-plant_t50-ss.jpg?itok=N7ExeEBY",
      "type": "Houseplant",
      "sun": "Shade"
     }
    ]

db.Plants
  .remove({})
  .then(() => db.Plants.collection.insertMany(plants))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
