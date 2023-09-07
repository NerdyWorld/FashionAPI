require("dotenv").config();
const TOKEN = process.env.TOKEN;

const express = require("express");
const app = express();
const logger = require("morgan");
const cors = require("cors");




app.use(cors())
app.use(logger("dev"))


// ------ Gucci -----------> 
app.get("/gucci/women/:token", (req, res)=>{
  if(req.params.token === TOKEN){
    res.status(200).json([
      {     
        "name": "GUCCI BLONDIE SMALL TOTE BAG",
        "brand": "Gucci",
        "description": "The Gucci Blondie line characteristically features the Round Interlocking G inspired by the archival symbol. This Gucci Blondie bag, with both top handle and chain shoulder strap, spotlights the emblem as a subtly crafted leather patch.",
        "specifications": "@Cotton linen lining @Round Interlocking G leather patch @Inside: 3 main compartments and 1 zip pocket @Top handle with 15cm drop @Chain shoulder strap with 30cm drop @Small size: W30cm x H24cm x D6cm @Made in Italy @Weight: 0.7kg approximately",
        "categories": ["Bags", "Women"],
        "colors": ["Pink", "Black", "White", "Silver"],
        "sizes": ["Default"],
        "images": [
            {
                "color": "Pink",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0BLONDIE+peque%C3%B1o/751518_1AAOW_6701_001_085_0000_Light-Bolso-tote-Gucci-Blondie-pequeo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0BLONDIE+peque%C3%B1o/751518_1AAOW_6701_002_085_0000_Light-Bolso-tote-Gucci-Blondie-pequeo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0BLONDIE+peque%C3%B1o/751518_1AAOW_6701_007_085_0000_Light-Bolso-tote-Gucci-Blondie-pequeo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0BLONDIE+peque%C3%B1o/751518_1AAOW_6701_009_085_0000_Light-Bolso-tote-Gucci-Blondie-pequeo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0BLONDIE+peque%C3%B1o/751518_1AAOW_6701_013_085_0000_Light-Bolso-tote-Gucci-Blondie-pequeo.webp"]
            },
            {
                "color": "Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0BLONDIE+peque%C3%B1o/751518_1AAOW_1000_001_085_0000_Light-Bolso-tote-Gucci-Blondie-pequeo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0BLONDIE+peque%C3%B1o/751518_1AAOW_1000_002_085_0000_Light-Bolso-tote-Gucci-Blondie-pequeo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0BLONDIE+peque%C3%B1o/751518_1AAOW_1000_007_085_0000_Light-Bolso-tote-Gucci-Blondie-pequeo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0BLONDIE+peque%C3%B1o/751518_1AAOW_1000_009_085_0000_Light-Bolso-tote-Gucci-Blondie-pequeo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0BLONDIE+peque%C3%B1o/751518_1AAOW_1000_013_085_0000_Light-Bolso-tote-Gucci-Blondie-pequeo.webp"]
            },
            {
                "color": "White",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0BLONDIE+peque%C3%B1o/751518_1AAOW_9022_001_085_0000_Light-Bolso-tote-Gucci-Blondie-pequeo.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0BLONDIE+peque%C3%B1o/751518_1AAOW_9022_002_085_0000_Light-Bolso-tote-Gucci-Blondie-pequeo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0BLONDIE+peque%C3%B1o/751518_1AAOW_9022_007_085_0000_Light-Bolso-tote-Gucci-Blondie-pequeo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0BLONDIE+peque%C3%B1o/751518_1AAOW_9022_009_085_0000_Light-Bolso-tote-Gucci-Blondie-pequeo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0BLONDIE+peque%C3%B1o/751518_1AAOW_9022_013_085_0000_Light-Bolso-tote-Gucci-Blondie-pequeo.webp"]
            },
            {
                "color": "Silver",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0BLONDIE+peque%C3%B1o/751518_AACBO_8106_001_085_0000_Light-Bolso-tote-Gucci-Blondie-pequeo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0BLONDIE+peque%C3%B1o/751518_AACBO_8106_002_085_0000_Light-Bolso-tote-Gucci-Blondie-pequeo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0BLONDIE+peque%C3%B1o/751518_AACBO_8106_007_085_0000_Light-Bolso-tote-Gucci-Blondie-pequeo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0BLONDIE+peque%C3%B1o/751518_AACBO_8106_009_085_0000_Light-Bolso-tote-Gucci-Blondie-pequeo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0BLONDIE+peque%C3%B1o/751518_AACBO_8106_013_085_0000_Light-Bolso-tote-Gucci-Blondie-pequeo.webp"]
            }
        ],
        "price": 2980,
        "stock": [
            {
                "color": "Pink",
                "stock": 100,
                "sold": 0
            },
        {
            "color": "Black",
            "stock": 100,
            "sold": 0
        },
        {
            "color": "White",
            "stock": 100,
            "sold": 0
        },
        {
            "color":"Silver",
            "stock": 100,
            "sold": 0
        }
        ]
        },
        {
            "name": "GUCCI DIANA MEDIUM SHOULDER BAG",
            "brand": "Gucci",
            "description": "Combining recognisable elements of the House, the medium-sized shoulder bag is defined by its bamboo handles and Double G hardware. Crafted from white leather, the accessory is further accentuated a contrasting red leather shoulder strap.",
            "specifications": "@Gold-toned hardware @Microfibre lining with a suede-like finish @Double G @This item comes with an additional leather shoulder strap @Inside: 1 zip pocket @Bamboo handle with 13cm drop @Adjustable leather shoulder strap with 52cm drop @Magnetic closure @Medium size: W30cm x H23cm x D6.5cm @Made in Italy",
            "categories": ["Bags", "Women"],
            "colors": ["Black", "White"],
            "sizes": ["Default"],
            "images": [
                {
                    "color": "Black",
                    "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0DIANA+MEDIANO/746124_UAAAY_1092_001_071_0000_Light-Bolso-de-hombro-Gucci-Diana-mediano.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0DIANA+MEDIANO/746124_UAAAY_1092_002_071_0000_Light-Bolso-de-hombro-Gucci-Diana-mediano.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0DIANA+MEDIANO/746124_UAAAY_1092_007_071_0000_Light-Bolso-de-hombro-Gucci-Diana-mediano.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0DIANA+MEDIANO/746124_UAAAY_1092_009_071_0000_Light-Bolso-de-hombro-Gucci-Diana-mediano.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0DIANA+MEDIANO/746124_UAAAY_1092_013_071_0000_Light-Bolso-de-hombro-Gucci-Diana-mediano.webp"]
                },
                {
                    "color": "White",
                    "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0DIANA+MEDIANO/746124_UAAAY_9043_001_071_0000_Light-Bolso-de-hombro-Gucci-Diana-mediano.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0DIANA+MEDIANO/746124_UAAAY_9043_007_071_0000_Light-Bolso-de-hombro-Gucci-Diana-mediano.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0DIANA+MEDIANO/746124_UAAAY_9043_009_071_0000_Light-Bolso-de-hombro-Gucci-Diana-mediano.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0DIANA+MEDIANO/746124_UAAAY_9043_010_071_0000_Light-Bolso-de-hombro-Gucci-Diana-mediano.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0DIANA+MEDIANO/746124_UAAAY_9043_013_071_0000_Light-Bolso-de-hombro-Gucci-Diana-mediano.webp"]
                }
             
             ],
            "price": 2390,
            "stock": [
            {
                "color": "Black",
                "stock": 100,
                "sold": 0
            },
            {
                "color": "White",
                "stock": 100,
                "sold": 0
            }
         
            ] 
        },
        {
        "name": "GUCCI BLONDIE TOP HANDLE BAG",
        "brand": "Gucci",
        "description": "The Round Interlocking G that characterises the Gucci Blondie line originates from the House archives. Signature pieces such as this top handle bag in pink leather reinterprets the emblem as a subtler leather patch detail. Complete with additional shoulder strap for more versatile ways to wear.",
        "specifications": "@Cotton linen lining @Round Interlocking G leather patch @Top handle with 8cm drop @Shoulder strap with 52cm drop @Double zipper closure with Round Interlocking G @W17cm x H15cm x D9cm @Made in Italy",
        "categories": ["Bags", "Women"],
        "colors": ["Pink", "Black", "White", "Silver", "Yellow", "Red", "Green"],
        "sizes": ["Default"],
        "images": [
            {
                "color": "Pink",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+mano+BLONDIE/744434_1IV0G_6701_001_054_0000_Light-Bolso-de-mano-Gucci-Blondie.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+mano+BLONDIE/744434_1IV0G_6701_002_054_0000_Light-Bolso-de-mano-Gucci-Blondie.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+mano+BLONDIE/744434_1IV0G_6701_006_100_0000_Light-Bolso-de-mano-Gucci-Blondie.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+mano+BLONDIE/744434_1IV0G_6701_009_054_0000_Light-Bolso-de-mano-Gucci-Blondie.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+mano+BLONDIE/744434_1IV0G_6701_010_054_0000_Light-Bolso-de-mano-Gucci-Blondie.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+mano+BLONDIE/744434_1IV0G_6701_013_054_0000_Light-Bolso-de-mano-Gucci-Blondie.webp"]
            },
            {
                "color": "Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+mano+BLONDIE/744434_1IV0G_1000_001_054_0000_Light-Bolso-de-mano-Gucci-Blondie.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+mano+BLONDIE/744434_1IV0G_1000_002_054_0000_Light-Bolso-de-mano-Gucci-Blondie.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+mano+BLONDIE/744434_1IV0G_1000_009_054_0000_Light-Bolso-de-mano-Gucci-Blondie.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+mano+BLONDIE/744434_1IV0G_1000_010_054_0000_Light-Bolso-de-mano-Gucci-Blondie.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+mano+BLONDIE/744434_1IV0G_1000_013_054_0000_Light-Bolso-de-mano-Gucci-Blondie.webp"]
            },
            {
                "color": "White",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+mano+BLONDIE/744434_1IV0G_9022_001_054_0000_Light-Bolso-de-mano-Gucci-Blondie.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+mano+BLONDIE/744434_1IV0G_9022_002_054_0000_Light-Bolso-de-mano-Gucci-Blondie.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+mano+BLONDIE/744434_1IV0G_9022_009_054_0000_Light-Bolso-de-mano-Gucci-Blondie.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+mano+BLONDIE/744434_1IV0G_9022_010_054_0000_Light-Bolso-de-mano-Gucci-Blondie.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+mano+BLONDIE/744434_1IV0G_9022_013_054_0000_Light-Bolso-de-mano-Gucci-Blondie.webp"]
            },
            {
                "color": "Silver",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+mano+BLONDIE/360_744434_AACBO_8106_001_100_0000_Light-Bolso-de-mano-Gucci-Blondie.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+mano+BLONDIE/744434_AACBO_8106_002_054_0000_Light-Bolso-de-mano-Gucci-Blondie.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+mano+BLONDIE/744434_AACBO_8106_009_054_0000_Light-Bolso-de-mano-Gucci-Blondie.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+mano+BLONDIE/744434_AACBO_8106_010_054_0000_Light-Bolso-de-mano-Gucci-Blondie.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+mano+BLONDIE/744434_AACBO_8106_013_054_0000_Light-Bolso-de-mano-Gucci-Blondie.webp"]
            },
            {
                "color": "Yellow",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+mano+BLONDIE/744434_1IV0G_7110_001_054_0000_Light-Bolso-de-mano-Gucci-Blondie.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+mano+BLONDIE/744434_1IV0G_7110_002_054_0000_Light-Bolso-de-mano-Gucci-Blondie.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+mano+BLONDIE/744434_1IV0G_7110_009_054_0000_Light-Bolso-de-mano-Gucci-Blondie.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+mano+BLONDIE/744434_1IV0G_7110_010_054_0000_Light-Bolso-de-mano-Gucci-Blondie.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+mano+BLONDIE/744434_1IV0G_7110_013_054_0000_Light-Bolso-de-mano-Gucci-Blondie.webp"]
            },
            {
                "color": "Red",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+mano+BLONDIE/744434_1IV0G_6420_001_054_0000_Light-Bolso-de-mano-Gucci-Blondie.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+mano+BLONDIE/744434_1IV0G_6420_002_054_0000_Light-Bolso-de-mano-Gucci-Blondie.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+mano+BLONDIE/744434_1IV0G_6420_009_054_0000_Light-Bolso-de-mano-Gucci-Blondie.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+mano+BLONDIE/744434_1IV0G_6420_010_054_0000_Light-Bolso-de-mano-Gucci-Blondie.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+mano+BLONDIE/744434_1IV0G_6420_013_054_0000_Light-Bolso-de-mano-Gucci-Blondie.webp"]
            },
            {
                "color": "Green",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+mano+BLONDIE/744434_1IV0G_3509_001_054_0000_Light-Bolso-de-mano-Gucci-Blondie.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+mano+BLONDIE/744434_1IV0G_3509_002_054_0000_Light-Bolso-de-mano-Gucci-Blondie.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+mano+BLONDIE/744434_1IV0G_3509_009_054_0000_Light-Bolso-de-mano-Gucci-Blondie.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+mano+BLONDIE/744434_1IV0G_3509_010_054_0000_Light-Bolso-de-mano-Gucci-Blondie.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+mano+BLONDIE/744434_1IV0G_3509_013_054_0000_Light-Bolso-de-mano-Gucci-Blondie.jpg"]
            }
        ],
        "price": 1800,
        "stock": [
            {
                "color": "Pink",
                "stock": 100,
                "sold": 0
            },
        {
            "color": "Black",
            "stock": 100,
            "sold": 0
        },
        {
            "color": "White",
            "stock": 100,
            "sold": 0
        },
        {
            "color":"Silver",
            "stock": 100,
            "sold": 0
        },
        {
            "color": "Yellow",
            "stock": 100,
            "sold": 0
        },
        {
            "color": "Red",
            "stock": 100,
            "sold": 0
        },
        {
            "color": "Green",
            "stock": 100,
            "sold": 0
        }
        ]
        },
        {
            "name": "APHRODITE SMALL SHOULDER BAG",
            "brand": "Gucci",
            "description": "The Gucci Cosmogonie collection was presented against the backdrop of the historic Castel del Monte in Italy. The show brought together aesthetics from distant eras and geographies, and linked elements form the past with the present. This new small crescent-shaped shoulder bag was inspired by the House’s archives, it is crafted in soft leather and features the Double G emblem—a code originally introduced in the 1970s. Embodying the notion of the versatility, the bag is enriched with two shoulder straps, one is crafted in leather and the other is in Gucci’s recognisable gold-toned chain design.",
            "specifications": "@Shiny gold-toned hardware @Moiré lining @Double G @Adjustable shoulder strap with 55cm drop @Removable chain strap with 26cm drop @Zip closure @Small size: W25cm x H19cm x D7cm @Made in Italy",
            "categories": ["Bags", "Women"],
            "colors": ["Black", "White", "Pink", "LightPink","Ivory"],
            "sizes": ["Default"],
            "images": [
                {
                    "color": "Black",
                    "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+hombro+APHRODITE/731817_AAA9F_1000_001_081_0000_Light-Bolso-de-hombro-Aphrodite-pequeo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+hombro+APHRODITE/731817_AAA9F_1000_006_100_0000_Light-Bolso-de-hombro-Aphrodite-pequeo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+hombro+APHRODITE/731817_AAA9F_1000_009_081_0000_Light-Bolso-de-hombro-Aphrodite-pequeo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+hombro+APHRODITE/731817_AAA9F_1000_010_081_0000_Light-Bolso-de-hombro-Aphrodite-pequeo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+hombro+APHRODITE/731817_AAA9F_1000_013_081_0000_Light-Bolso-de-hombro-Aphrodite-pequeo.webp"]
                },
                {
                    "color": "White",
                    "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+hombro+APHRODITE/731817_AABE9_9022_007_081_0000_Light-Aphrodite-small-shoulder-bag.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+hombro+APHRODITE/731817_AABE9_9022_006_100_0000_Light-Aphrodite-small-shoulder-bag.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+hombro+APHRODITE/731817_AABE9_9022_009_081_0000_Light-Aphrodite-small-shoulder-bag.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+hombro+APHRODITE/731817_AABE9_9022_013_081_0000_Light-Aphrodite-small-shoulder-bag.webp"]
                },
                {
                    "color": "Pink",
                    "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+hombro+APHRODITE/731817_AAA9F_6627_001_081_0000_Light-Aphrodite-small-shoulder-bag.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+hombro+APHRODITE/731817_AAA9F_6627_002_081_0000_Light-Aphrodite-small-shoulder-bag.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+hombro+APHRODITE/731817_AAA9F_6627_006_100_0000_Light-Aphrodite-small-shoulder-bag.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+hombro+APHRODITE/731817_AAA9F_6627_009_081_0000_Light-Aphrodite-small-shoulder-bag.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+hombro+APHRODITE/731817_AAA9F_6627_013_081_0000_Light-Aphrodite-small-shoulder-bag.webp"]
                },
                {
                    "color": "LightPink",
                    "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+hombro+APHRODITE/731817_AAA9F_5815_002_081_0000_Light-Bolso-de-hombro-Aphrodite-pequeo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+hombro+APHRODITE/731817_AAA9F_5815_006_100_0000_Light-Bolso-de-hombro-Aphrodite-pequeo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+hombro+APHRODITE/731817_AAA9F_5815_009_081_0000_Light-Bolso-de-hombro-Aphrodite-pequeo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+hombro+APHRODITE/731817_AAA9F_5815_010_081_0000_Light-Bolso-de-hombro-Aphrodite-pequeo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+hombro+APHRODITE/731817_AAA9F_5815_013_081_0000_Light-Bolso-de-hombro-Aphrodite-pequeo.jpg"]
                },
                {
                    "color": "Ivory",
                    "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+hombro+APHRODITE/731817_AAA9F_9004_007_081_0000_Light-Bolso-de-hombro-Aphrodite-pequeo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+hombro+APHRODITE/731817_AAA9F_9004_002_081_0000_Light-Bolso-de-hombro-Aphrodite-pequeo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+hombro+APHRODITE/731817_AAA9F_9004_009_081_0000_Light-Bolso-de-hombro-Aphrodite-pequeo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+hombro+APHRODITE/731817_AAA9F_9004_010_081_0000_Light-Bolso-de-hombro-Aphrodite-pequeo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+de+hombro+APHRODITE/731817_AAA9F_9004_013_081_0000_Light-Bolso-de-hombro-Aphrodite-pequeo.webp"]
                }                 
             ],
            "price": 1500,
            "stock": [
            {
                "color": "Black",
                "stock": 100,
                "sold": 0
            },
            {
                "color": "White",
                "stock": 100,
                "sold": 0
            },
            {
                "color": "Pink",
                "stock": 100,
                "sold": 0
            },
            {
                "color": "LightPink",
                "stock": 100,
                "sold": 0
            },
            {
                "color": "Ivory",
                "stock": 100,
                "sold": 0
            }
         
            ] 
        },
        {
            "name": "GG MARMONT SMALL SEQUIN SHOULDER BAG",
            "brand": "Gucci",
            "description": "The distinctive GG Marmont line is enriched with a new iteration in zebra effect sequin and beads embroidery. The coveted silhouette mirrors the signature chevron design and Double G closure. New shapes and signature Gucci lines are reimagined in a mix of fabrics and trims imbued with a seasonal feel.",
            "specifications": "@Zebra effect sequin @Beads embroidery @Palladium-toned hardware @Satin lining @Made in Italy @Double G @Interior zipper pocket @Sliding chain strap can be worn as a shoulder strap with 55cm drop or can be worn as a top handle with 30cm drop @Flap with spring closure @This item can fit a cell phone up to W78mm x H158mm x D8mm @The Gucci card case wallet will fit inside this product @Weight: 0.648kg approximately @Small size: W26cm x H15cm x D7cm @Made in Italy",
            "categories": ["Bags", "Women"],
            "colors": ["White"],
            "sizes": ["Default"],
            "images": [
                {
                  "color": "White",
                 "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0bolso+de+hombro+con+LENTEJUELAS+MARMONT/443497_FAB7K_8554_001_063_0000_Light-Bolso-de-hombro-con-lentejuelas-con-GG-Marmont-pequeo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0bolso+de+hombro+con+LENTEJUELAS+MARMONT/443497_FAB7K_8554_002_063_0000_Light-Bolso-de-hombro-con-lentejuelas-con-GG-Marmont-pequeo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0bolso+de+hombro+con+LENTEJUELAS+MARMONT/443497_FAB7K_8554_009_063_0000_Light-Bolso-de-hombro-con-lentejuelas-con-GG-Marmont-pequeo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0bolso+de+hombro+con+LENTEJUELAS+MARMONT/443497_FAB7K_8554_010_063_0000_Light-Bolso-de-hombro-con-lentejuelas-con-GG-Marmont-pequeo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0bolso+de+hombro+con+LENTEJUELAS+MARMONT/443497_FAB7K_8554_012_063_0000_Light-Bolso-de-hombro-con-lentejuelas-con-GG-Marmont-pequeo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0bolso+de+hombro+con+LENTEJUELAS+MARMONT/443497_FAB7K_8554_013_063_0000_Light-Bolso-de-hombro-con-lentejuelas-con-GG-Marmont-pequeo.webp"]
                }                  
             ],
            "price": 6900,
            "stock": [
            {
                "color": "White",
                "stock": 100,
                "sold": 0
            }           
            ] 
        },
        {
            "name": "DIONYSUS PYTHON SMALL SHOULDER BAG",
            "brand": "Gucci",
            "description": "A mix of colors emphasizes the Dionysus' structured silhouette. The small shoulder bag is introduced in precious python leather. In a tribute to styles that can be worn again and again, emblematic designs appear in new ways throughout the Gucci Love Parade collection.",
            "specifications": "@Multicolour python @Light brown ostrich trim @Antique silver-toned hardware @Leather lining @Pin closure with side release @Hand-painted edges @Tiger head closure @Interior zipped compartment @Pocket under the flap @Double gussets @Sliding chain strap can be worn as a shoulder strap with 38cm drop or can be worn as a top handle with 22cm drop. @Weight: .6kg approximately @Small size: W28cm x H17cm x D9cm @Made in Italy",
            "categories": ["Bags", "Women"],
            "colors": ["Beige"],
            "sizes": ["Default"],
            "images": [
                {
                  "color": "Beige",  
                 "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0BOLSO+DE+HOMBRO+DIONYSUS+DE+PITON/400249_E12CP_8353_001_076_0007_Light-Bolso-de-hombro-Dionysus-pequeo-pitn.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0BOLSO+DE+HOMBRO+DIONYSUS+DE+PITON/400249_E12CP_8353_002_076_0007_Light-Bolso-de-hombro-Dionysus-pequeo-pitn.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0BOLSO+DE+HOMBRO+DIONYSUS+DE+PITON/400249_E12CP_8353_009_076_0007_Light-Bolso-de-hombro-Dionysus-pequeo-pitn.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0BOLSO+DE+HOMBRO+DIONYSUS+DE+PITON/400249_E12CP_8353_010_076_0007_Light-Bolso-de-hombro-Dionysus-pequeo-pitn.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0BOLSO+DE+HOMBRO+DIONYSUS+DE+PITON/400249_E12CP_8353_013_076_0007_Light-Bolso-de-hombro-Dionysus-pequeo-pitn.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0BOLSO+DE+HOMBRO+DIONYSUS+DE+PITON/400249_E12CP_8353_015_076_0007_Light-Bolso-de-hombro-Dionysus-pequeo-pitn.webp"]
                }                  
             ],
            "price": 4900,
            "stock": [
            {
                "color": "Beige",
                "stock": 100,
                "sold": 0
            }           
            ] 
        },
        {
            "name": "DIONYSUS PYTHON SIMPLE SMALL SHOULDER BAG ",
            "brand": "Gucci",
            "description": "A structured python bag with our textured tiger head spur closure.The sliding chain strap can be worn multiple ways, changing between a shoulder and a top handle bag.",
            "specifications": "@Antiqued silver-toned hardware @Pin closure with side release @Hand-painted edges @Tiger head closure @Interior zipped compartment @Pocket under the flap @Double gussets @Sliding chain strap can be worn as a shoulder strap with 38cm drop or can be worn as a top handle with 22cm drop. @Weight: .6kg approximately @Small size: W28cm x H17cm x D9cm @Made in Italy @The model is 180cm tall",
            "categories": ["Bags", "Women"],
            "colors": ["Black","Green"],
            "sizes": ["Default"],
            "images": [
                {
                  "color": "Black",
                 "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0BOLSO+DE+HOMBRO+DIONYSUS+DE+PITON/400249_E3K0N_1000_001_072_0000_Light-Bolso-de-hombro-Dionysus-de-pitn.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0BOLSO+DE+HOMBRO+DIONYSUS+DE+PITON/400249_E3K0N_1000_002_072_0000_Light-Bolso-de-hombro-Dionysus-de-pitn.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0BOLSO+DE+HOMBRO+DIONYSUS+DE+PITON/400249_E3K0N_1000_003_072_0000_Light-Bolso-de-hombro-Dionysus-de-pitn.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0BOLSO+DE+HOMBRO+DIONYSUS+DE+PITON/400249_E3K0N_1000_004_072_0000_Light-Bolso-de-hombro-Dionysus-de-pitn.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0BOLSO+DE+HOMBRO+DIONYSUS+DE+PITON/400249_E3K0N_1000_007_072_0000_Light-Bolso-de-hombro-Dionysus-de-pitn.webp"]
                },
                {
                    "color": "Green",
                   "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0BOLSO+DE+HOMBRO+DIONYSUS+DE+PITON/400249_LU3IN_3175_001_076_0000_Light--Bolso-de-hombro-Dionysus-de-pitn-pequeo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0BOLSO+DE+HOMBRO+DIONYSUS+DE+PITON/400249_LU3IN_3175_002_076_0000_Light--Bolso-de-hombro-Dionysus-de-pitn-pequeo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0BOLSO+DE+HOMBRO+DIONYSUS+DE+PITON/400249_LU3IN_3175_003_076_0000_Light--Bolso-de-hombro-Dionysus-de-pitn-pequeo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0BOLSO+DE+HOMBRO+DIONYSUS+DE+PITON/400249_LU3IN_3175_004_076_0000_Light--Bolso-de-hombro-Dionysus-de-pitn-pequeo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0BOLSO+DE+HOMBRO+DIONYSUS+DE+PITON/400249_LU3IN_3175_007_076_0000_Light--Bolso-de-hombro-Dionysus-de-pitn-pequeo.jpg"]
                  }                   
             ],
            "price": 4600,
            "stock": [
            {
                "color": "Black",
                "stock": 100,
                "sold": 0
            },
            {
                "color": "Green",
                "stock": 100,
                "sold": 0
            }             
            ] 
        },
        {
            "name": "GUCCI NOJUM BROADWAY PYTHON BAG",
            "brand": "Gucci",
            "description": "Gucci Nojum takes its name from the Arabic word 'Nojum', meaning 'stars' in English. The line presents an elegant range of signature styles designed in celebration of beautiful night skies, with metallics, sparkling details and delicate colour palettes. This structured Broadway evening bag comes to life in gold-toned python with silver-toned python trims.",
            "specifications": "@Metallic gold python @Metallic silver python trim @Gucci Nojum @Key holder @Chain strap with 38cm drop @Lock closure @Mini size: W12cm x H16cm x D9.5cm @Made in Italy",
            "categories": ["Bags", "Women"],
            "colors": ["Silver"],
            "sizes": ["Default"],
            "images": [
                {
                  "color": "Silver",
                 "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+JOJUM+BROADWAY/732508_LAAB9_8864_001_065_0000_Light-Bolso-Gucci-Nojum-Broadway-de-pitn.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+JOJUM+BROADWAY/732508_LAAB9_8864_002_065_0000_Light-Bolso-Gucci-Nojum-Broadway-de-pitn.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+JOJUM+BROADWAY/732508_LAAB9_8864_006_100_0000_Light-Bolso-Gucci-Nojum-Broadway-de-pitn.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+JOJUM+BROADWAY/732508_LAAB9_8864_009_065_0000_Light-Bolso-Gucci-Nojum-Broadway-de-pitn.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+JOJUM+BROADWAY/732508_LAAB9_8864_010_065_0000_Light-Bolso-Gucci-Nojum-Broadway-de-pitn.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Bolso+JOJUM+BROADWAY/732508_LAAB9_8864_013_065_0000_Light-Bolso-Gucci-Nojum-Broadway-de-pitn.webp"]
                }                  
             ],
            "price": 4200,
            "stock": [
            {
                "color": "Silver",
                "stock": 100,
                "sold": 0
            }           
            ] 
        },
        {
            "name": "BROADWAY EVENING BAG",
            "brand": "Gucci",
            "description": "Inspired by timeless designs, the House presents contemporary takes on retro-inspired styles. With meticulous attention to detail and refined materials, evening accessories become wearable pieces of art for every day. This Broadway evening bag is enriched with faux pearls and a vintage-inspired clasp closure.",
            "specifications": "@Vintage white embroidered satin with faux pearls @Turquoise resin pearl trim @Double G @Interior: 1 open pocket and mirror pouch @Detachable faux pearl shoulder strap with 24cm drop @Clasp closure @Weight: 1.1kg approximately @W26cm x H12cm x D8cm @Made in Italy @The model is 176cm tall",
            "categories": ["Bags", "Women"],
            "colors": ["Turquoise"],
            "sizes": ["Default"],
            "images": [
                {
                  "color": "Turquoise",
                 "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0BROADWAY+EVENING/742198_FAB2J_8992_001_085_0000_Light-Broadway-evening-bag.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0BROADWAY+EVENING/742198_FAB2J_8992_002_085_0000_Light-Broadway-evening-bag.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0BROADWAY+EVENING/742198_FAB2J_8992_007_085_0000_Light-Broadway-evening-bag.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0BROADWAY+EVENING/742198_FAB2J_8992_009_085_0000_Light-Broadway-evening-bag.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0BROADWAY+EVENING/742198_FAB2J_8992_013_085_0000_Light-Broadway-evening-bag.webp"]
                }                  
             ],
            "price": 2900,
            "stock": [
            {
                "color": "Silver",
                "stock": 100,
                "sold": 0
            }           
            ] 
        },
        {
            "name": "GG MARMONT EMBROIDERED SMALL BAG",
            "brand": "Gucci",
            "description": "The GG Marmont line continues to evolve with each passing season, exploring Gucci's contemporary vision. This small shoulder bag is presented in soft fabric with GG embroidery and further enriched with the time-honored Double G emblem and antique gold-toned hardware.",
            "specifications": "@Antique gold-toned hardware @Cotton lining @Double G @Inside: zip pocket @Chain shoulder strap with 54cm drop @Small: W26cm x H15cm x D7cm @Made in Italy @Weight: 0.7kg approximately",
            "categories": ["Bags", "Women"],
            "colors": ["Black","Pink"],
            "sizes": ["Default"],
            "images": [
                {
                  "color": "Black",
                 "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0MARMONT+bolso+de+hombro/752026_AACC3_1067_001_068_0000_Light-Bolso-de-hombro-GG-Marmont-bordado-pequeo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0MARMONT+bolso+de+hombro/752026_AACC3_1067_002_068_0000_Light-Bolso-de-hombro-GG-Marmont-bordado-pequeo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0MARMONT+bolso+de+hombro/752026_AACC3_1067_009_068_0000_Light-Bolso-de-hombro-GG-Marmont-bordado-pequeo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0MARMONT+bolso+de+hombro/752026_AACC3_1067_010_068_0000_Light-Bolso-de-hombro-GG-Marmont-bordado-pequeo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0MARMONT+bolso+de+hombro/752026_AACC3_1067_013_068_0000_Light-Bolso-de-hombro-GG-Marmont-bordado-pequeo.webp"]
                },
                {
                    "color": "Pink",
                   "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0MARMONT+bolso+de+hombro/752026_AACC3_5844_001_068_0000_Light-Bolso-de-hombro-GG-Marmont-bordado-pequeo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0MARMONT+bolso+de+hombro/752026_AACC3_5844_002_068_0000_Light-Bolso-de-hombro-GG-Marmont-bordado-pequeo.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0MARMONT+bolso+de+hombro/752026_AACC3_5844_009_068_0000_Light-Bolso-de-hombro-GG-Marmont-bordado-pequeo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0MARMONT+bolso+de+hombro/752026_AACC3_5844_012_068_0000_Light-Bolso-de-hombro-GG-Marmont-bordado-pequeo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0MARMONT+bolso+de+hombro/752026_AACC3_5844_013_068_0000_Light-Bolso-de-hombro-GG-Marmont-bordado-pequeo.webp"]
                  }                   
             ],
            "price": 3900,
            "stock": [
            {
                "color": "Black",
                "stock": 100,
                "sold": 0
            },
            {
                "color": "Pink",
                "stock": 100,
                "sold": 0
            }            
            ] 
        },
        {
            "name": "DIONYSUS MINI TOP HANDLE BAG",
            "brand": "Gucci",
            "description": "Presented in a mini dimensions for Pre-Fall 2023, this Dionysus bag in white leather is defined by the tiger head spur closure, a beloved symbol of the House. A crystal variation of the signature hardware adds an unexpected luxury element, introducing contrasting textures",
            "specifications": "@Crystal hardware @Cotton linen lining @Tiger head closure @External pocket under flap @Top handle with 6cm drop @Chain shoulder strap with 52cm drop @Magnetic button closure @W18cm x H12cm x D6cm @Made in Italy @Weight: 0.46kg approximately",
            "categories": ["Bags", "Women"],
            "colors": ["Black","White","Beige","Burlywood"],
            "sizes": ["Default"],
            "images": [
                {
                  "color": "Black",
                 "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+DIONYSUS/752029_CAOGN_1155_001_052_0000_Light-Minibolso-Dionysus-con-asa-superior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+DIONYSUS/752029_CAOGN_1155_002_052_0000_Light-Minibolso-Dionysus-con-asa-superior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+DIONYSUS/752029_CAOGN_1155_008_052_0000_Light-Minibolso-Dionysus-con-asa-superior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+DIONYSUS/752029_CAOGN_1155_010_052_0000_Light-Minibolso-Dionysus-con-asa-superior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+DIONYSUS/752029_CAOGN_1155_013_052_0000_Light-Minibolso-Dionysus-con-asa-superior.webp"]
                },
                {
                    "color": "White",
                   "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+DIONYSUS/360_752029_CAOGN_9042_001_100_0000_Light-Minibolso-Dionysus-con-asa-superior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+DIONYSUS/752029_CAOGN_9042_002_052_0000_Light-Minibolso-Dionysus-con-asa-superior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+DIONYSUS/752029_CAOGN_9042_009_052_0000_Light-Minibolso-Dionysus-con-asa-superior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+DIONYSUS/752029_CAOGN_9042_010_052_0000_Light-Minibolso-Dionysus-con-asa-superior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+DIONYSUS/752029_CAOGN_9042_013_052_0000_Light-Minibolso-Dionysus-con-asa-superior.webp"]
                  },
                {
                    "color": "Beige",
                   "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+DIONYSUS/752029_UULBN_9683_001_052_0000_Light-Minibolso-Dionysus-con-asa-superior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+DIONYSUS/752029_UULBN_9683_002_052_0000_Light-Minibolso-Dionysus-con-asa-superior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+DIONYSUS/752029_UULBN_9683_009_052_0000_Light-Minibolso-Dionysus-con-asa-superior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+DIONYSUS/752029_UULBN_9683_010_052_0000_Light-Minibolso-Dionysus-con-asa-superior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+DIONYSUS/752029_UULBN_9683_013_052_0000_Light-Minibolso-Dionysus-con-asa-superior.webp"]
                },    
                {
                    "color": "Burlywood",
                   "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+DIONYSUS/752029_KHNRN_8642_001_052_0000_Light-Minibolso-Dionysus-con-asa-superior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+DIONYSUS/752029_KHNRN_8642_002_052_0000_Light-Minibolso-Dionysus-con-asa-superior.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+DIONYSUS/752029_KHNRN_8642_006_100_0000_Light-Minibolso-Dionysus-con-asa-superior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+DIONYSUS/752029_KHNRN_8642_009_052_0000_Light-Minibolso-Dionysus-con-asa-superior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+DIONYSUS/752029_KHNRN_8642_010_052_0000_Light-Minibolso-Dionysus-con-asa-superior.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+DIONYSUS/752029_KHNRN_8642_013_052_0000_Light-Minibolso-Dionysus-con-asa-superior.webp"]
                  }                   
             ],
            "price": 1750,
            "stock": [
            {
                "color": "Black",
                "stock": 100,
                "sold": 0
            },
            {
                "color": "White",
                "stock": 100,
                "sold": 0
            },
            {
                "color": "Beige",
                "stock": 100,
                "sold": 0
            },
            {
                "color": "Burlywood",
                "stock": 100,
                "sold": 0
            }           
            ] 
        },
        {
            "name": "GUCCI DIANA MINI TOTE BAG",
            "brand": "Gucci",
            "description": "An evolution of a bamboo handle tote first introduced in 1991, the Gucci Diana represents the notion of style in constant evolution and is reimagined with removable, neon leather belts—a nod to the functional bands used to keep the handles in shape. Here, a mini version of the emblematic style.",
            "specifications": "@Shiny antique gold-toned hardware @This item comes with 2 decorative belt handle shapers as shown in the image @Microfibre lining with a suede-like finish @Double G @Interior open pocket @Bamboo handles with 3.1plg drop @Web strap with 50cm drop and leather with 51cm drop @Weight: .48kg approximately @Mini size: W20cm x H16cm x D10cm @Made in Italy @The model is 176cm tall",
            "categories": ["Bags", "Women"],
            "colors": ["Black","Green","Blue","LightPink","White"],
            "sizes": ["Default"],
            "images": [
                {
                  "color": "Black",
                 "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+guchi+diana/702732_U3ZDT_1260_001_065_0000_Light-Minibolso-tote-Gucci-Diana.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+guchi+diana/702732_U3ZDT_1260_002_065_0000_Light-Minibolso-tote-Gucci-Diana.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+guchi+diana/702732_U3ZDT_1260_010_065_0000_Light-Minibolso-tote-Gucci-Diana.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+guchi+diana/702732_U3ZDT_1260_013_065_0000_Light-Minibolso-tote-Gucci-Diana.webp"]
                },
                {
                    "color": "Green",
                   "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+guchi+diana/702732_U3ZDT_3670_002_065_0000_Light-Minibolso-tote-Gucci-Diana.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+guchi+diana/702732_U3ZDT_3670_006_100_0000_Light-Minibolso-tote-Gucci-Diana.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+guchi+diana/702732_U3ZDT_3670_010_065_0000_Light-Minibolso-tote-Gucci-Diana.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+guchi+diana/702732_U3ZDT_3670_013_065_0000_Light-Minibolso-tote-Gucci-Diana.webp"]
                  },
                {
                    "color": "Blue",
                   "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+guchi+diana/702732_U3ZDT_4862_007_063_0000_Light-Minibolso-tote-Gucci-Diana.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+guchi+diana/702732_U3ZDT_4862_002_063_0000_Light-Minibolso-tote-Gucci-Diana.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+guchi+diana/702732_U3ZDT_4862_006_100_0000_Light-Minibolso-tote-Gucci-Diana.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+guchi+diana/702732_U3ZDT_4862_010_063_0000_Light-Minibolso-tote-Gucci-Diana.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+guchi+diana/702732_U3ZDT_4862_013_063_0000_Light-Minibolso-tote-Gucci-Diana.webp"]
                },    
                {
                    "color": "LightPink",
                   "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+guchi+diana/702732_U3ZDT_5479_007_060_0000_Light-Minibolso-tote-Gucci-Diana.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+guchi+diana/702732_U3ZDT_5479_010_060_0000_Light-Minibolso-tote-Gucci-Diana.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+guchi+diana/702732_U3ZDT_5479_011_060_0000_Light-Minibolso-tote-Gucci-Diana.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+guchi+diana/702732_U3ZDT_5479_013_060_0000_Light-Minibolso-tote-Gucci-Diana.webp"]
                  },
                  {
                    "color": "White",
                   "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+guchi+diana/702732_U3ZDT_9196_001_060_0000_Light-Minibolso-tote-Gucci-Diana.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+guchi+diana/702732_U3ZDT_9196_002_060_0000_Light-Minibolso-tote-Gucci-Diana.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+guchi+diana/702732_U3ZDT_9196_007_060_0000_Light-Minibolso-tote-Gucci-Diana.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+guchi+diana/702732_U3ZDT_9196_010_060_0000_Light-Minibolso-tote-Gucci-Diana.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+guchi+diana/702732_U3ZDT_9196_013_060_0000_Light-Minibolso-tote-Gucci-Diana.webp"]
                  }                    
             ],
            "price": 2800,
            "stock": [
            {
                "color": "Black",
                "stock": 100,
                "sold": 0
            },
            {
                "color": "Green",
                "stock": 100,
                "sold": 0
            },
            {
                "color": "Blue",
                "stock": 100,
                "sold": 0
            },
            {
                "color": "LightPink",
                "stock": 100,
                "sold": 0
            },
            {
                "color": "White",
                "stock": 100,
                "sold": 0
            }           
            ] 
        },
        {
            "name": "GG DIANA MINI TOTE BAG NEW EDITION",
            "brand": "Gucci",
            "description": "New colour and material combinations appear throughout this collection, giving the House's most emblematic styles a precious touch. This Gucci Diana mini tote bag is further accentuated by two bands, a playful reference to the bands used to keep handles in shape, and makes a meaningful gift celebrating love.",
            "specifications": "@Shiny antique gold-toned hardware @This item comes with 2 decorative leather belt handle shapers as shown in the image @Cotton linen lining @Double G @Inside: 1 open card holder @Bamboo handles with 8cm drop @Detachable and adjustable shoulder strap with 51cm drop @Mini size: W20cm x H16cm x D10cm @Weight: 0.63kg approximately @Made in Italy",
            "categories": ["Bags", "Women"],
            "colors": ["Fuchsia","Brown","Silver"],
            "sizes": ["Default"],
            "images": [
                {
                  "color": "Fuchsia",
                 "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+tote+diana/707449_AAB7D_8469_001_067_0015_Light-Minibolso-tote-Gucci-Diana.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+tote+diana/707449_AAB7D_8469_002_067_0015_Light-Minibolso-tote-Gucci-Diana.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+tote+diana/707449_AAB7D_8469_008_067_0015_Light-Minibolso-tote-Gucci-Diana.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+tote+diana/707449_AAB7D_8469_009_067_0015_Light-Minibolso-tote-Gucci-Diana.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+tote+diana/707449_AAB7D_8469_010_067_0015_Light-Minibolso-tote-Gucci-Diana.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+tote+diana/707449_AAB7D_8469_013_067_0015_Light-Minibolso-tote-Gucci-Diana.jpg"]
                },
                {
                    "color": "Brown",
                   "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+tote+diana/707449_21HRG_2687_007_062_0024_Light-Minibolso-tote-Gucci-Diana.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+tote+diana/707449_21HRG_2687_002_062_0024_Light-Minibolso-tote-Gucci-Diana.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+tote+diana/707449_21HRG_2687_009_062_0024_Light-Minibolso-tote-Gucci-Diana.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+tote+diana/707449_21HRG_2687_010_062_0024_Light-Minibolso-tote-Gucci-Diana.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+tote+diana/707449_21HRG_2687_013_062_0024_Light-Minibolso-tote-Gucci-Diana.webp"]
                  },
                {
                    "color": "Silver",
                   "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+tote+diana/707449_EYZ0G_8106_001_062_0015_Light-Minibolso-tote-Gucci-Diana-de-lagarto.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+tote+diana/707449_EYZ0G_8106_002_062_0015_Light-Minibolso-tote-Gucci-Diana-de-lagarto.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+tote+diana/707449_EYZ0G_8106_009_062_0015_Light-Minibolso-tote-Gucci-Diana-de-lagarto.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+tote+diana/707449_EYZ0G_8106_010_062_0015_Light-Minibolso-tote-Gucci-Diana-de-lagarto.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Mini+bolso+tote+diana/707449_EYZ0G_8106_013_062_0015_Light-Minibolso-tote-Gucci-Diana-de-lagarto.webp"]
                }                         
             ],
            "price": 3500,
            "stock": [
            {
                "color": "Fuchsia",
                "stock": 100,
                "sold": 0
            },
            {
                "color": "Brown",
                "stock": 100,
                "sold": 0
            },
            {
                "color": "Silver",
                "stock": 100,
                "sold": 0
            }                 
            ] 
        },
        {
            "name": "JUMBO GG MINI DUFFLE BAG",
            "brand": "Gucci",
            "description": "The jumbo GG design returns for Pre-Fall 2023 atop a selection of leather luggage pieces. A reinterpretation of Guccio Gucci's initials, the motif is an evergreen of the House that appears prominently in maxi size for an eye-catching logo feel. This mini duffle bag in the emblematic leather features a top handle and shoulder strap for multiple ways to wear.",
            "specifications": "@Cotton linen lining @Removable luggage tag @Handle with 9cm drop @Adjustable shoulder strap with 47cm drop @Zip closure @Weight: 920gr. approximately @W22cm x H15cm x D12.5cm @Made in Italy",
            "categories": ["Bags", "Women"],
            "colors": ["Black","Beige","Green"],
            "sizes": ["Default"],
            "images": [
                {
                  "color": "Black",
                 "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Minibolsa+de+viaje/725292_AABY7_1000_001_082_0000_Light-Minibolsa-de-viaje-con-GG-jumbo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Minibolsa+de+viaje/725292_AABY7_1000_002_082_0000_Light-Minibolsa-de-viaje-con-GG-jumbo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Minibolsa+de+viaje/725292_AABY7_1000_002_082_0000_Light-Minibolsa-de-viaje-con-GG-jumbo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Minibolsa+de+viaje/725292_AABY7_1000_010_082_0000_Light-Minibolsa-de-viaje-con-GG-jumbo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Minibolsa+de+viaje/725292_AABY7_1000_012_082_0000_Light-Minibolsa-de-viaje-con-GG-jumbo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Minibolsa+de+viaje/725292_AABY7_1000_013_082_0000_Light-Minibolsa-de-viaje-con-GG-jumbo.webp"]
                },
                {
                    "color": "Beige",
                   "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Minibolsa+de+viaje/360_725292_AABY7_2801_001_100_0000_Light-Minibolsa-de-viaje-con-GG-jumbo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Minibolsa+de+viaje/725292_AABY7_2801_002_082_0000_Light-Minibolsa-de-viaje-con-GG-jumbo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Minibolsa+de+viaje/725292_AABY7_2801_006_100_0000_Light-Minibolsa-de-viaje-con-GG-jumbo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Minibolsa+de+viaje/725292_AABY7_2801_009_082_0032_Light-Minibolsa-de-viaje-con-GG-jumbo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Minibolsa+de+viaje/725292_AABY7_2801_010_082_0000_Light-Minibolsa-de-viaje-con-GG-jumbo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Minibolsa+de+viaje/725292_AABY7_2801_013_082_0000_Light-Minibolsa-de-viaje-con-GG-jumbo.webp"]
                  },
                {
                    "color": "Green",
                   "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Minibolsa+de+viaje/725292_AABY7_3346_001_082_0000_Light-Minibolsa-de-viaje-con-GG-jumbo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Minibolsa+de+viaje/725292_AABY7_3346_002_082_0000_Light-Minibolsa-de-viaje-con-GG-jumbo.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Minibolsa+de+viaje/725292_AABY7_3346_009_082_0000_Light-Minibolsa-de-viaje-con-GG-jumbo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Minibolsa+de+viaje/725292_AABY7_3346_010_082_0000_Light-Minibolsa-de-viaje-con-GG-jumbo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Minibolsa+de+viaje/725292_AABY7_3346_010_082_0000_Light-Minibolsa-de-viaje-con-GG-jumbo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Minibolsa+de+viaje/725292_AABY7_3346_013_082_0000_Light-Minibolsa-de-viaje-con-GG-jumbo.webp"]
                }                         
             ],
            "price": 1980,
            "stock": [
            {
                "color": "Black",
                "stock": 100,
                "sold": 0
            },
            {
                "color": "Beige",
                "stock": 100,
                "sold": 0
            },
            {
                "color": "Green",
                "stock": 100,
                "sold": 0
            }                 
            ] 
        },
        {
            "name": "DIONYSUS OSTRICH MINI BAG",
            "brand": "Gucci",
            "description": "A message about leaving fashion’s old rules behind, the Epilogue collection conveys the idea that pieces should be timeless not just in fashion for one season. Among the styles are Alessandro Michele’s most emblematic designs and motifs from the past 5 years, like the Dionysus. Presented as a mini shoulder bag, the accessory is crafted from ivory ostrich, while vivid blue enamel at the bag's tiger head closure adds a colourul twist.",
            "specifications": "@Ivory ostrich @Antique silver-toned hardware with blue enamel @Leather lining @Tiger head spur @Hand-painted edges @Hand-stitched details @Pocket under the flap @Pin closure with side release @Sliding chain strap can be worn as a shoulder strap with 40cm drop or can be worn as a top handle with 23cm drop @Weight: .45kg approximately @Mini size: W20cm x H15.5cm x D5cm @Made in Italy @The model is 171cm tall",
            "categories": ["Bags", "Women"],
            "colors": ["LightPink"],
            "sizes": ["Default"],
            "images": [
                {
                  "color": "LightPink",
                 "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Minibolso+DIONYSUS+DE+AVESTRUZ/421970_EY0IN_9585_001_065_0000_Light-Minibolso-Dionysus-de-avestruz.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Minibolso+DIONYSUS+DE+AVESTRUZ/421970_EY0IN_9585_002_065_0000_Light-Minibolso-Dionysus-de-avestruz.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Minibolso+DIONYSUS+DE+AVESTRUZ/421970_EY0IN_9585_003_065_0000_Light-Minibolso-Dionysus-de-avestruz.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Minibolso+DIONYSUS+DE+AVESTRUZ/421970_EY0IN_9585_004_065_0000_Light-Minibolso-Dionysus-de-avestruz.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Minibolso+DIONYSUS+DE+AVESTRUZ/421970_EY0IN_9585_007_065_0000_Light-Minibolso-Dionysus-de-avestruz.jpg"]
                }                       
             ],
            "price": 5700,
            "stock": [
            {
                "color": "LightPink",
                "stock": 100,
                "sold": 0
            }                
            ] 
        },
        {
            "name": "JACKIE 1961 MINI PYTHON BAG",
            "brand": "Gucci",
            "description": "A style that continues to be explored for Gucci Love Parade, the Jackie 1961's recognisable shape is presented in multicolour python. Enhanced by a second detachable strap, the archival style takes on a contemporary feel, providing new ways to wear—from top handle, shoulder to cross body.",
            "specifications": "@Multicolour python @Shiny antique gold-toned hardware @Handle drop: 10cm @Detachable chain shoulder strap with Interlocking G with crystals and 40 cm drop @Piston closure @Mini size: W19cm x H13cm x D3cm @Made in Italy @Note that python products may not be shipped to California",
            "categories": ["Bags", "Women"],
            "colors": ["Yellow"],
            "sizes": ["Default"],
            "images": [
                {
                  "color": "Yellow",
                 "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Minibolso+Jackie+1961+de+piton/699651_E12LG_8399_001_071_0000_Light-Minibolso-Jackie-1961-de-pitn.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Minibolso+Jackie+1961+de+piton/699651_E12LG_8399_002_071_0000_Light-Minibolso-Jackie-1961-de-pitn.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Minibolso+Jackie+1961+de+piton/699651_E12LG_8399_006_100_0000_Light-Minibolso-Jackie-1961-de-pitn.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Minibolso+Jackie+1961+de+piton/699651_E12LG_8399_009_071_0000_Light-Minibolso-Jackie-1961-de-pitn.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Minibolso+Jackie+1961+de+piton/699651_E12LG_8399_010_071_0000_Light-Minibolso-Jackie-1961-de-pitn.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0Minibolso+Jackie+1961+de+piton/699651_E12LG_8399_013_071_0000_Light-Minibolso-Jackie-1961-de-pitn.webp"]
                }                       
             ],
            "price": 5100,
            "stock": [
            {
                "color": "Yellow",
                "stock": 100,
                "sold": 0
            }                
            ] 
        },
        {
            "name": "GUCCI DIANA LARGE TOTE BAG",
            "brand": "Gucci",
            "description": "Speaking to the narrative of evolution and reinvention that runs through Gucci’s designs, the Gucci Diana reimagines a bamboo tote from the '90s archives. Crafted in black leather, this spacious silhouette reveals two leather handles that can be folded into the interior, allowing versatility in styling it as a shoulder bag or top handle.",
            "specifications": "@Black leather @Gold-toned hardware @This item comes with 2 decorative leather belt handle shapers as shown in the image @Microfibre suede-effect lining @Double G @Inside: 2 compartments, 1 zip pocket @Double bamboo handles with 10.5cm drop @Double leather handles with 30cm drop @Large size: W40cm x H34cm x D21cm @Made in Italy",
            "categories": ["Bags", "Women"],
            "colors": ["Black"],
            "sizes": ["Default"],
            "images": [
                {
                  "color": "Black",
                 "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0TOTE+GUCCI+DIANA+GRANDE/746270_UAAAY_1092_001_100_0000_Light-Bolso-tote-Gucci-Diana-grande.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0TOTE+GUCCI+DIANA+GRANDE/746270_UAAAY_1092_007_100_0000_Light-Bolso-tote-Gucci-Diana-grande.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0TOTE+GUCCI+DIANA+GRANDE/746270_UAAAY_1092_009_100_0000_Light-Bolso-tote-Gucci-Diana-grande.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0TOTE+GUCCI+DIANA+GRANDE/746270_UAAAY_1092_010_100_0000_Light-Bolso-tote-Gucci-Diana-grande.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0TOTE+GUCCI+DIANA+GRANDE/746270_UAAAY_1092_013_100_0000_Light-Bolso-tote-Gucci-Diana-grande.webp"]
                }                       
             ],
            "price": 3900,
            "stock": [
            {
                "color": "Black",
                "stock": 100,
                "sold": 0
            }                
            ] 
        },
        {
            "name": "OPHIDIA GG MEDIUM TOTE",
            "brand": "Gucci",
            "description": "A classic combination of the House's most defining codes—the GG motif and Web stripe—the world of Ophidia continues to evolve, incorporating new shapes and silhouettes each season. With recognizable design elements in a practical new shape, this new medium sized tote is trimmed with textured leather and topped with Double G hardware. Thanks to its long leather handles, the style can also be carried as a shoulder bag.",
            "specifications": "@Oatmeal leather trim @Gold-toned hardware @Cotton linen lining @Double G @Interior zipper pocket @Double leather handles with 25cm drop and 54cm length @Magnetic snap closure @Weight: .71kg approximately @Medium size: W38cm x H28cm x D14cm @Made in Italy",
            "categories": ["Bags", "Women"],
            "colors": ["Beige","Blue","Black","White"],
            "sizes": ["Default"],
            "images": [
                {
                  "color": "Beige",
                 "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0TOTE+OPHIDIA/631685_96IWB_8745_001_100_0000_Light-Tote-Ophidia-con-GG-mediano.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0TOTE+OPHIDIA/631685_96IWB_8745_002_100_0000_Light-Tote-Ophidia-con-GG-mediano.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0TOTE+OPHIDIA/631685_96IWB_8745_004_100_0000_Light-Tote-Ophidia-con-GG-mediano.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0TOTE+OPHIDIA/631685_96IWB_8745_006_100_0000_Light-Tote-Ophidia-con-GG-mediano.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0TOTE+OPHIDIA/631685_96IWB_8745_007_100_0000_Light-Tote-Ophidia-con-GG-mediano.webp"]
                },
                {
                    "color": "Blue",
                   "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0TOTE+OPHIDIA/631685_96IWN_4076_001_100_0000_Light-Tote-mediano-Ophidia-con-GG.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0TOTE+OPHIDIA/631685_96IWN_4076_002_100_0000_Light-Tote-mediano-Ophidia-con-GG.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0TOTE+OPHIDIA/631685_96IWN_4076_006_100_0000_Light-Tote-mediano-Ophidia-con-GG.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0TOTE+OPHIDIA/631685_96IWN_4076_009_100_0000_Light-Tote-mediano-Ophidia-con-GG.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0TOTE+OPHIDIA/631685_96IWN_4076_010_100_0000_Light-Tote-mediano-Ophidia-con-GG.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0TOTE+OPHIDIA/631685_96IWN_4076_013_100_0000_Light-Tote-mediano-Ophidia-con-GG.webp"]
                  },
                  {
                    "color": "Black",
                   "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0TOTE+OPHIDIA/631685_UM8IG_1000_001_100_0000_Light-Bolso-tote-mediano-de-piel-GG-Matelass.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0TOTE+OPHIDIA/631685_UM8IG_1000_002_100_0000_Light-Bolso-tote-mediano-de-piel-GG-Matelass.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0TOTE+OPHIDIA/631685_UM8IG_1000_006_100_0000_Light-Bolso-tote-mediano-de-piel-GG-Matelass.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0TOTE+OPHIDIA/631685_UM8IG_1000_009_100_0000_Light-Bolso-tote-mediano-de-piel-GG-Matelass.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0TOTE+OPHIDIA/631685_UM8IG_1000_013_100_0000_Light-Bolso-tote-mediano-de-piel-GG-Matelass.webp"]
                  },
                  {
                    "color": "White",
                   "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0TOTE+OPHIDIA/631685_UULAG_9682_001_100_0000_Light-Tote-mediano-Ophidia-con-GG.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0TOTE+OPHIDIA/631685_UULAG_9682_002_100_0000_Light-Tote-mediano-Ophidia-con-GG.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0TOTE+OPHIDIA/631685_UULAG_9682_009_100_0000_Light-Tote-mediano-Ophidia-con-GG.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0TOTE+OPHIDIA/631685_UULAG_9682_010_100_0000_Light-Tote-mediano-Ophidia-con-GG.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A0TOTE+OPHIDIA/631685_UULAG_9682_013_100_0000_Light-Tote-mediano-Ophidia-con-GG.webp"]
                  }                        
             ],
            "price": 1390,
            "stock": [
            {
                "color": "Beige",
                "stock": 100,
                "sold": 0
            },
            {
                "color": "Blue",
                "stock": 100,
                "sold": 0
            },
            {
                "color": "Black",
                "stock": 100,
                "sold": 0
            },
            {
                "color": "White",
                "stock": 100,
                "sold": 0
            }                
            ] 
        },
        {
            "name": "OPHIDIA JUMBO GG SMALL SHOULDER BAG",
            "brand": "Gucci",
            "description": "The Ophidia shoulder bag has a domed shape that recalls vintage designs. The jumbo GG explores a new, maximalist version of the historic monogram, animating this small shoulder bag.",
            "specifications": "@Gold-toned hardware @Double G @Zipper pullers with Double G charms @Interior open pocket @Adjustable shoulder strap with 44cm drop. Can be used as cross-body strap. @Zipper closure @Weight .39kg approximately @Small size: W23.5cm x H19cm x D8cm @Made in Italy",
            "categories": ["Bags", "Women"],
            "colors": ["rgb(114, 252, 183)","Beige","Blue","White"],
            "sizes": ["Default"],
            "images": [
                {
                  "color": "rgb(114, 252, 183)",
                 "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A66Bolso+OPHIDIA/360_499621_UKMBG_9549_001_100_0000_Light-Bolso-de-hombro-Ophidia-pequeo-con-jumbo-GG.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A66Bolso+OPHIDIA/499621_UKMBG_9549_002_065_0000_Light-Bolso-de-hombro-Ophidia-pequeo-con-jumbo-GG.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A66Bolso+OPHIDIA/499621_UKMBG_9549_009_065_0000_Light-Bolso-de-hombro-Ophidia-pequeo-con-jumbo-GG.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A66Bolso+OPHIDIA/499621_UKMBG_9549_010_065_0000_Light-Bolso-de-hombro-Ophidia-pequeo-con-jumbo-GG.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A66Bolso+OPHIDIA/499621_UKMBG_9549_013_065_0000_Light-Bolso-de-hombro-Ophidia-pequeo-con-jumbo-GG.jpg"]
                },
                {
                    "color": "Beige",
                   "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A66Bolso+OPHIDIA/499621_K05NG_8745_001_065_0000_Light-Bolso-de-Hombro-Ophidia-con-GG.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A66Bolso+OPHIDIA/499621_K05NG_8745_002_065_0000_Light-Bolso-de-Hombro-Ophidia-con-GG.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A66Bolso+OPHIDIA/499621_K05NG_8745_006_065_0000_Light-Bolso-de-Hombro-Ophidia-con-GG.webp"]
                  },
                  {
                    "color": "Blue",
                   "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A66Bolso+OPHIDIA/499621_K05NN_4076_001_065_0000_Light-Bolso-de-Hombro-Ophidia-Pequeo-con-GG.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A66Bolso+OPHIDIA/499621_K05NN_4076_002_065_0000_Light-Bolso-de-Hombro-Ophidia-Pequeo-con-GG.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A66Bolso+OPHIDIA/499621_K05NN_4076_006_100_0000_Light-Bolso-de-Hombro-Ophidia-Pequeo-con-GG.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A66Bolso+OPHIDIA/499621_K05NN_4076_009_065_0000_Light-Bolso-de-Hombro-Ophidia-Pequeo-con-GG.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A66Bolso+OPHIDIA/499621_K05NN_4076_013_065_0000_Light-Bolso-de-Hombro-Ophidia-Pequeo-con-GG.webp"]
                  },
                  {
                    "color": "White",
                   "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A66Bolso+OPHIDIA/499621_UULAG_9682_001_065_0000_Light-Bolso-de-Hombro-Ophidia-Pequeo-con-GG.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A66Bolso+OPHIDIA/499621_UULAG_9682_001_065_0000_Light-Bolso-de-Hombro-Ophidia-Pequeo-con-GG.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A66Bolso+OPHIDIA/499621_UULAG_9682_002_065_0000_Light-Bolso-de-Hombro-Ophidia-Pequeo-con-GG.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A66Bolso+OPHIDIA/499621_UULAG_9682_006_100_0000_Light-Bolso-de-Hombro-Ophidia-Pequeo-con-GG.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A66Bolso+OPHIDIA/499621_UULAG_9682_009_065_0000_Light-Bolso-de-Hombro-Ophidia-Pequeo-con-GG.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A66Bolso+OPHIDIA/499621_UULAG_9682_010_065_0000_Light-Bolso-de-Hombro-Ophidia-Pequeo-con-GG.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/%E2%99%A66Bolso+OPHIDIA/499621_UULAG_9682_013_065_0000_Light-Bolso-de-Hombro-Ophidia-Pequeo-con-GG.webp"]
                  }                        
             ],
            "price": 1490,
            "stock": [
            {
                "color": "rgb(114, 252, 183)",
                "stock": 100,
                "sold": 0
            },
            {
                "color": "Beige",
                "stock": 100,
                "sold": 0
            },
            {
                "color": "Blue",
                "stock": 100,
                "sold": 0
            },
            {
                "color": "White",
                "stock": 100,
                "sold": 0
            }                
            ] 
        },
        {
            "name": "OPHIDIA MINI GG SHOULDER BAG",
            "brand": "Gucci",
            "description": "The Ophidia is reinvented in new and unexpected ways. Reminiscent of the punk scene, metal eyelets and studs define the historical silhouette to create a one-of-a-kind take on the archival style. Creating a playful contrast, the mini-sized shoulder bag is crafted from the House's signature GG Supreme canvas.",
            "specifications": "@GG Supreme canvas @Gold-toned hardware @Double G @This style is sold with an additional shoulder strap which can be attached to the bag with a buckle closure. @Inside: 1 zip pocket @Adjustable leather shoulder strap with 45cm drop and detachable canvas strap with 50cm drop @Zip closure @Mini size: W23cm x H17cm x D7cm @Made in Italy @The model is 174,5cm tall",
            "categories": ["Bags", "Women"],
            "colors": ["rgb(161, 91, 33)","rgb(30, 51, 145)"],
            "sizes": ["Default"],
            "images": [
                {
                  "color": "rgb(161, 91, 33)",
                 "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/Minibolso+de+hombro+OPHIDIA/722117_FAAX3_9789_001_087_0013_Light-Minibolso-de-hombro-Ophidia-con-GG.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/Minibolso+de+hombro+OPHIDIA/722117_FAAX3_9789_002_087_0013_Light-Minibolso-de-hombro-Ophidia-con-GG.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/Minibolso+de+hombro+OPHIDIA/722117_FAAX3_9789_006_100_0000_Light-Minibolso-de-hombro-Ophidia-con-GG.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/Minibolso+de+hombro+OPHIDIA/722117_FAAX3_9789_009_087_0013_Light-Minibolso-de-hombro-Ophidia-con-GG.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/Minibolso+de+hombro+OPHIDIA/722117_FAAX3_9789_010_087_0013_Light-Minibolso-de-hombro-Ophidia-con-GG.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/Minibolso+de+hombro+OPHIDIA/722117_FAAX3_9789_013_087_0013_Light-Minibolso-de-hombro-Ophidia-con-GG.jpg"]
                },
                {
                    "color": "rgb(30, 51, 145)",
                   "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/Minibolso+de+hombro+OPHIDIA/722117_FAAX9_4047_007_087_0000_Light-Minibolso-de-hombro-Ophidia-con-GG.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/Minibolso+de+hombro+OPHIDIA/722117_FAAX9_4047_002_087_0000_Light-Minibolso-de-hombro-Ophidia-con-GG.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/Minibolso+de+hombro+OPHIDIA/722117_FAAX9_4047_006_100_0000_Light-Minibolso-de-hombro-Ophidia-con-GG.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/Minibolso+de+hombro+OPHIDIA/722117_FAAX9_4047_009_087_0000_Light-Minibolso-de-hombro-Ophidia-con-GG.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/Minibolso+de+hombro+OPHIDIA/722117_FAAX9_4047_007_087_0000_Light-Minibolso-de-hombro-Ophidia-con-GG.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Bags/Bags/Minibolso+de+hombro+OPHIDIA/722117_FAAX9_4047_013_087_0000_Light-Minibolso-de-hombro-Ophidia-con-GG.webp"]
                  }                       
             ],
            "price": 1790,
            "stock": [
            {
                "color": "rgb(161, 91, 33)",
                "stock": 100,
                "sold": 0
            },
            {
                "color": "rgb(30, 51, 145)",
                "stock": 100,
                "sold": 0
            }                
            ] 
        },
        {
          "name":"WOMEN'S ACE SNEAKER WITH BEE",
          "brand":"Gucci",
          "description":"The House's classic low-top sneaker is embellished with the gold embroidered bee against the green and red Web. The bee is an archival code first introduced in Gucci ready-to-wear in the 1970s.",
          "specifications":"@White leather @Green and red Web @Gold thread-embroidered bee @Red leather detail on the heel of one shoe and green on the other @Rubber sole @Flat @Made in Italy @These shoes run big, we recommend sizing down half a size",
          "categories":["Sneakers", "Women"],
          "colors": ["White"],
          "sizes": ["34","34.5","35","35.5","36","36.5","37","37.5","38","38.5","39","39.5","40","40.5"],
          "images":[
              {
                  "color":"White",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/ACE/431942_02JP0_9064_002_098_0000_Light-Zapatilla-Ace-con-bordado-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/ACE/431942_02JP0_9064_003_098_0000_Light-Zapatilla-Ace-con-bordado-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/ACE/431942_02JP0_9064_005_098_0000_Light-Zapatilla-Ace-con-bordado-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/ACE/431942_02JP0_9064_006_098_0000_Light-Zapatilla-Ace-con-bordado-para-mujer.webp"]
              }       
          ],
          "price": 630,
          "stock": [
              {
                  "color":"Black",
                  "stock":100,
                  "sold":0
              }
          ]
        },
        {
          "name":"WOMEN'S ACE EMBROIDERED PLATFORM SNEAKER",
          "brand":"Gucci",
          "description":"The classic Ace sneaker is set on a platform and shows the metallic gold bee against the Gucci Web. Since its debut, the Ace sneaker has become a mainstay of Gucci collections. The retro design is originally inspired by a Gucci sneaker from the 1970s and is continually reinterpreted and reintroduced into the new eclectic House narrative.",
          "specifications":"@White leather with green and red Web and gold thread-embroidered bee @Women's @Red metallic leather detail on the back of one shoe and green metallic leather detail on the back of the other shoe @Low heel @45mm platform height @These shoes run big, we recommend sizing down half a size @Made in Italy @Rubber sole",
          "categories":["Sneakers", "Women"],
          "colors": ["White"],
          "sizes": ["34","34.5","35","35.5","36","36.5","37","37.5","38","38.5","39","39.5","40","40.5"],
          "images":[
              {
                  "color":"White",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/ACE+con+plataforma/577573_DOPE0_9064_001_100_0000_Light-Zapatillas-Ace-con-Plataforma-Mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/ACE+con+plataforma/577573_DOPE0_9064_002_100_0000_Light-Zapatillas-Ace-con-Plataforma-Mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/ACE+con+plataforma/577573_DOPE0_9064_004_100_0000_Light-Zapatillas-Ace-con-Plataforma-Mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/ACE+con+plataforma/577573_DOPE0_9064_005_100_0000_Light-Zapatillas-Ace-con-Plataforma-Mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/ACE+con+plataforma/577573_DOPE0_9064_006_100_0000_Light-Zapatillas-Ace-con-Plataforma-Mujer.webp"]
              }       
          ],
          "price": 720,
          "stock": [
              {
                  "color":"White",
                  "stock":100,
                  "sold":0
              }
          ]
        },
        {
          "name":"WOMEN'S ACE GG SUPREME SNEAKER WITH BEES",
          "brand":"Gucci",
          "description":"Since its debut, the Ace sneaker has become a mainstay of the House's collections. The retro-looking design is inspired by a Gucci sneaker from the 1970s, with the Web stripe along the sides. A metallic gold bees print embellishes the low-top silhouette.",
          "specifications":"@Beige/ebony GG Supreme canvas with gold bees print @Green and red Web detail @Red leather detail on the back of one shoe and green the other @Rubber sole @Flat @20mm height @Made in Italy @These shoes run big, we recommend sizing down half a size",
          "categories":["Sneakers", "Women"],
          "colors": ["Beige"],
          "sizes": ["34","34.5","35","35.5","36","36.5","37","37.5","38","38.5","39","39.5","40","40.5"],
          "images":[
              {
                  "color":"Beige",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/ACE+GG+SUPREME/550051_9N050_8465_002_098_0000_Light-Zapatilla-Ace-GG-Supreme-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/ACE+GG+SUPREME/550051_9N050_8465_004_098_0000_Light-Zapatilla-Ace-GG-Supreme-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/ACE+GG+SUPREME/550051_9N050_8465_005_098_0000_Light-Zapatilla-Ace-GG-Supreme-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/ACE+GG+SUPREME/550051_9N050_8465_006_098_0000_Light-Zapatilla-Ace-GG-Supreme-para-mujer.webp"]
              }       
          ],
          "price": 630,
          "stock": [
              {
                  "color":"White",
                  "stock":100,
                  "sold":0
              }
          ]
        },
        {
          "name":"WOMEN'S GG RHYTON SNEAKER",
          "brand":"Gucci",
          "description":"The House’s emblematic sneaker is revisited as part of the Spring Summer 2020 collection where styles work together to create a language of self-expression. Defined by a thick sole and chunky construction, the Rhyton is presented in a mix of monogram fabrics and trimmed in leather and reflective material. Archival fabrics are reimagined through Gucci’s hybrid design narrative. On top of this shoe, GG Supreme is combined with a mini version in contrasting colours and with Original GG canvas for a retro logomania approach.",
          "specifications":"@Beige/ebony and beige/blue GG Supreme canvas, beige/ebony Original GG canvas and white/blue mini GG jacquard fabric @Beige/ebony and beige/blue GG Supreme canvas, beige/brick red Original GG canvas and burgungy, brown and green mini GG jacquard fabric @Reflective fabric and pink leather trims @Gucci logo tag @Low heel @40mm height @Made in Italy",
          "categories":["Sneakers", "Women"],
          "colors": ["Blue", "Beige"],
          "sizes": ["34","34.5","35","35.5","36","36.5","37","37.5","38","38.5","39","39.5","40","40.5"],
          "images":[
              {
                  "color":"Blue",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/GG+RHYTON/620185_99WF0_4371_001_100_0000_Light-Zapatilla-GG-Rhyton-para-mujer.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/GG+RHYTON/620185_99WF0_4371_002_100_0000_Light-Zapatilla-GG-Rhyton-para-mujer.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/GG+RHYTON/620185_99WF0_4371_004_100_0000_Light-Zapatilla-GG-Rhyton-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/GG+RHYTON/620185_99WF0_4371_005_100_0000_Light-Zapatilla-GG-Rhyton-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/GG+RHYTON/620185_99WF0_4371_006_100_0000_Light-Zapatilla-GG-Rhyton-para-mujer.webp"]
              },
              {
                  "color":"Beige",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/GG+RHYTON/620185_99WG0_6060_001_100_0000_Light-Zapatilla-GG-Rhyton-para-mujer.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/GG+RHYTON/620185_99WG0_6060_002_100_0000_Light-Zapatilla-GG-Rhyton-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/GG+RHYTON/620185_99WG0_6060_004_100_0000_Light-Zapatilla-GG-Rhyton-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/GG+RHYTON/620185_99WG0_6060_005_100_0000_Light-Zapatilla-GG-Rhyton-para-mujer.webp"]
              }         
          ],
          "price": 795,
          "stock": [
              {
                  "color":"Blue",
                  "stock":100,
                  "sold":0
              },
              {
                  "color":"Beige",
                  "stock":100,
                  "sold":0
              }
          ]
        },
        {
          "name":"WOMEN'S GUCCI TENNIS 1977 SLIP-ON SNEAKER",
          "brand":"Gucci",
          "description":"The world of the Gucci Tennis 1977 evolves with the introduction of a slip-on sneaker crafted from the House's monogram canvas. An emblematic symbol from the archives, the use of the GG motif speaks to the message behind the Epilogue collection, that fashion is more than seasonal.",
          "specifications":"@Beige/ebony GG Supreme canvas @Women's @White stripe detail @Loop detail at the back @Elastic inserts for easy slip-on @Rubber sole with contrast stripe @Low heel @30mm height @Made in Italy @This product has not been made using materials of animal origin",
          "categories":["Sneakers", "Women"],
          "colors": ["Beige"],
          "sizes": ["34","34.5","35","35.5","36","36.5","37","37.5","38","38.5","39","39.5","40","40.5"],
          "images":[
              {
                  "color":"Beige",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/Gucci+Tennis+1977/624733_2HK40_9762_001_100_0000_Light-Zapatilla-Gucci-Tennis-1977-para-mujer.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/Gucci+Tennis+1977/624733_2HK40_9762_002_100_0000_Light-Zapatilla-Gucci-Tennis-1977-para-mujer.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/Gucci+Tennis+1977/624733_2HK40_9762_003_100_0000_Light-Zapatilla-Gucci-Tennis-1977-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/Gucci+Tennis+1977/624733_2HK40_9762_005_100_0000_Light-Zapatilla-Gucci-Tennis-1977-para-mujer.webp"]
              }       
          ],
          "price": 560,
          "stock": [
              {
                  "color":"Beige",
                  "stock":100,
                  "sold":0
              }
          ]
        },
        {
          "name":"WOMEN'S GUCCI TENNIS 1977 SNEAKER",
          "brand":"Gucci",
          "description":"A variation on a classic, this Gucci Tennis 1977 sneaker is presented in GG lamé canvas. The Cruise 2023 Gucci Cosmogonie collection explores the archives, adding contemporary touches to vintage styles as a tribute to both the brand's past, present and future.",
          "specifications":"@Off white GG canvas with crystals @Women's @Gucci Tennis 1977 label @GG motif at the sole @Rubber sole @Additional pair of laces included @Lace-up closure @Low heel @28mm height @Made in Italy",
          "categories":["Sneakers", "Women"],
          "colors": ["rgb(255, 192, 163)"],
          "sizes": ["34","34.5","35","35.5","36","36.5","37","37.5","38","38.5","39","39.5","40","40.5"],
          "images":[
              {
                  "color":"rgb(255, 192, 163)",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/Nueva+carpeta/732211_FABH3_9179_001_100_0000_Light-Zapatilla-Gucci-Tennis-1977-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/Nueva+carpeta/732211_FABH3_9179_002_100_0000_Light-Zapatilla-Gucci-Tennis-1977-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/Nueva+carpeta/732211_FABH3_9179_009_100_0000_Light-Zapatilla-Gucci-Tennis-1977-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/Nueva+carpeta/732211_FABH3_9179_012_100_0000_Light-Zapatilla-Gucci-Tennis-1977-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/Nueva+carpeta/732211_FABH3_9179_015_100_0000_Light-Zapatilla-Gucci-Tennis-1977-para-mujer.webp"]
              }       
          ],
          "price": 980,
          "stock": [
              {
                  "color":"rgb(255, 192, 163)",
                  "stock":100,
                  "sold":0
              }
          ]
        },
        {
          "name":"WOMEN'S RHYTON SNEAKER",
          "brand":"Gucci",
          "description":"Designs inspired by the sporting world are interpreted through the Gucci lens with standout logo details. This pair of Rhyton sneakers is defined by a bold Interlocking G cut-out in a contrasting hue, presenting a new take on the House logo.",
          "specifications":"@Light blue leather and Ivory leather @Women's @Lilac trim @Contrasting Interlocking G cut-out @Rubber sole @Additional pair of laces included @Lace-up closure @Mid heel @72mm height @Made in Italy",
          "categories":["Sneakers", "Women"],
          "colors": ["Blue", "Ivory"],
          "sizes": ["34","34.5","35","35.5","36","36.5","37","37.5","38","38.5","39","39.5","40","40.5"],
          "images":[
              {
                  "color":"Blue",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/RHYTON/757887_UPG70_4949_001_100_0000_Light-Zapatilla-Rhyton-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/RHYTON/757887_UPG70_4949_002_100_0000_Light-Zapatilla-Rhyton-para-mujer.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/RHYTON/757887_UPG70_4949_009_100_0000_Light-Zapatilla-Rhyton-para-mujer.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/RHYTON/757887_UPG70_4949_012_100_0000_Light-Zapatilla-Rhyton-para-mujer.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/RHYTON/757887_UPG70_4949_015_100_0000_Light-Zapatilla-Rhyton-para-mujer.jpg"]
              },
              {
                  "color":"Ivory",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/RHYTON/757887_UPG70_9564_001_100_0000_Light-Zapatilla-Rhyton-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/RHYTON/757887_UPG70_9564_002_100_0000_Light-Zapatilla-Rhyton-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/RHYTON/757887_UPG70_9564_009_100_0000_Light-Zapatilla-Rhyton-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/RHYTON/757887_UPG70_9564_012_100_0000_Light-Zapatilla-Rhyton-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/RHYTON/757887_UPG70_9564_015_100_0000_Light-Zapatilla-Rhyton-para-mujer.webp"]
              }       
          ],
          "price": 850,
          "stock": [
              {
                  "color":"Blue",
                  "stock":100,
                  "sold":0
              },
              {
                  "color":"Ivory",
                  "stock":100,
                  "sold":0
              }
          ]
        },
        {
          "name":"WOMEN'S RHYTON GLITTER GUCCI SNEAKER",
          "brand":"Gucci",
          "description":"Designed with a thick sole and bulky construction, the leather sneaker is remindful of the old school hip-hop scene and embodies the '90s influence pervading the Pre-Fall 2018 collection. Inspired by the tags decorating retro athletic uniforms, the glitter Gucci game motif enhances the side of the shoe.",
          "specifications":"@White leather with rainbow glitter Gucci game motif @Women's @Gucci logo tag @Rubber sole @Low heel @45mm height @Made in Italy @Blue rosebuds print leather lining",
          "categories":["Sneakers", "Women"],
          "colors": ["White"],
          "sizes": ["34","34.5","35","35.5","36","36.5","37","37.5","38","38.5","39","39.5","40","40.5"],
          "images":[
              {
                  "color":"White",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/RHYTON+CON+GG+DE+PURPURINA/524990_DRW00_9022_001_100_0000_Light-Zapatilla-Rhyton-con-Gucci-de-Purpurina-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/RHYTON+CON+GG+DE+PURPURINA/524990_DRW00_9022_002_100_0000_Light-Zapatilla-Rhyton-con-Gucci-de-Purpurina-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/RHYTON+CON+GG+DE+PURPURINA/524990_DRW00_9022_004_100_0000_Light-Zapatilla-Rhyton-con-Gucci-de-Purpurina-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/RHYTON+CON+GG+DE+PURPURINA/524990_DRW00_9022_005_100_0000_Light-Zapatilla-Rhyton-con-Gucci-de-Purpurina-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/RHYTON+CON+GG+DE+PURPURINA/524990_DRW00_9022_006_100_0000_Light-Zapatilla-Rhyton-con-Gucci-de-Purpurina-para-mujer.webp"]
              }       
          ],
          "price": 940,
          "stock": [
              {
                  "color":"White",
                  "stock":100,
                  "sold":0
              }
          ]
        },
        {
          "name":"WOMEN'S RHYTON GUCCI LOGO LEATHER SNEAKER",
          "brand":"Gucci",
          "description":"Designed with a thick sole and bulky construction, this pair of trainers has a retro influence in leather with a vintage Gucci logo inspired by prints from the 1980s.",
          "specifications":"@Ivory leather with Gucci vintage logo @Women's @Gucci logo tag @Rubber sole @Low heel @45mm height @Made in Italy",
          "categories":["Sneakers", "Women"],
          "colors": ["Ivory"],
          "sizes": ["34","34.5","35","35.5","36","36.5","37","37.5","38","38.5","39","39.5","40","40.5"],
          "images":[
              {
                  "color":"Ivory",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/RHYTON+de+piel/528892_DRW00_9522_001_100_0000_Light-Zapatilla-Rhyton-de-Piel-con-Logo-Gucci-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/RHYTON+de+piel/528892_DRW00_9522_002_100_0000_Light-Zapatilla-Rhyton-de-Piel-con-Logo-Gucci-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/RHYTON+de+piel/528892_DRW00_9522_004_100_0000_Light-Zapatilla-Rhyton-de-Piel-con-Logo-Gucci-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/RHYTON+de+piel/528892_DRW00_9522_005_100_0000_Light-Zapatilla-Rhyton-de-Piel-con-Logo-Gucci-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/RHYTON+de+piel/528892_DRW00_9522_006_100_0000_Light-Zapatilla-Rhyton-de-Piel-con-Logo-Gucci-para-mujer.webp"]
              }       
          ],
          "price": 860,
          "stock": [
              {
                  "color":"Ivory",
                  "stock":100,
                  "sold":0
              }
          ]
        },
        {
          "name":"WOMEN'S GUCCI RUN TRAINER",
          "brand":"Gucci",
          "description":"Designs inspired by the sporting world are interpreted through the Gucci lens with standout logo details. This pair of streamlined trainers are enriched with a bi-colour rubber sole and an Interlocking G detail.",
          "specifications":"@Women's @Interlocking G @Bi-colour rubber sole @Lace-up closure @Low heel @62mm height @Made in Italy",
          "categories":["Sneakers", "Women"],
          "colors": ["Beige","Grey","Blue", "White"],
          "sizes": ["34","34.5","35","35.5","36","36.5","37","37.5","38","38.5","39","39.5","40","40.5"],
          "images":[
              {
                  "color":"Beige",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/RUN/746939_AAB62_1441_001_100_0000_Light-Zapatilla-Gucci-Run-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/RUN/746939_AAB62_1441_002_100_0000_Light-Zapatilla-Gucci-Run-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/RUN/746939_AAB62_1441_009_100_0000_Light-Zapatilla-Gucci-Run-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/RUN/746939_AAB62_1441_012_100_0000_Light-Zapatilla-Gucci-Run-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/RUN/746939_AAB62_1441_015_100_0000_Light-Zapatilla-Gucci-Run-para-mujer.webp"]
              },
              {
                  "color":"Grey",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/RUN/746939_AAB62_5341_001_100_0000_Light-Zapatilla-Gucci-Run-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/RUN/746939_AAB62_5341_002_100_0000_Light-Zapatilla-Gucci-Run-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/RUN/746939_AAB62_5341_009_100_0000_Light-Zapatilla-Gucci-Run-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/RUN/746939_AAB62_5341_012_100_0000_Light-Zapatilla-Gucci-Run-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/RUN/746939_AAB62_5341_015_100_0000_Light-Zapatilla-Gucci-Run-para-mujer.webp"]
              },
              {
                  "color":"Blue",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/RUN/746939_AAB62_5343_001_100_0000_Light-Zapatilla-Gucci-Run-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/RUN/746939_AAB62_5343_002_100_0000_Light-Zapatilla-Gucci-Run-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/RUN/746939_AAB62_5343_009_100_0000_Light-Zapatilla-Gucci-Run-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/RUN/746939_AAB62_5343_012_100_0000_Light-Zapatilla-Gucci-Run-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/RUN/746939_AAB62_5343_015_100_0000_Light-Zapatilla-Gucci-Run-para-mujer.webp"]
              },
              {
                  "color":"White",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/RUN/746939_AAB62_9144_001_100_0000_Light-Zapatilla-Gucci-Run-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/RUN/746939_AAB62_9144_002_100_0000_Light-Zapatilla-Gucci-Run-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/RUN/746939_AAB62_9144_009_100_0000_Light-Zapatilla-Gucci-Run-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/RUN/746939_AAB62_9144_012_100_0000_Light-Zapatilla-Gucci-Run-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/RUN/746939_AAB62_9144_015_100_0000_Light-Zapatilla-Gucci-Run-para-mujer.webp"]
              }          
          ],
          "price": 890,
          "stock": [
              {
                  "color":"Beige",
                  "stock":100,
                  "sold":0
              },
              {
                  "color":"Grey",
                  "stock":100,
                  "sold":0
              },
              {
                  "color":"Blue",
                  "stock":100,
                  "sold":0
              },
              {
                  "color":"White",
                  "stock":100,
                  "sold":0
              }
          ]
        },
        {
          "name":"WOMEN'S SCREENER TRAINER",
          "brand":"Gucci",
          "description":"The logo continues to be a distinguishing feature of Gucci's collections and appears atop these Women's Screener trainers. An homage to Founder Guccio Gucci originally created in the 1930s, the distinctive GG motif has been the inspiration for new explorations of expression for almost a century.",
          "specifications":"@Pink GG canvas @White GG lamé canvas @Women's @Beige leather trim @Oval enamelled detail with metal Double G @Label with Gucci vintage logo @Bi-colour flatform sole @Chunky laces @Additional pair of laces included @50mm heel height @Made in Italy",
          "categories":["Sneakers", "Women"],
          "colors": ["Pink","White"],
          "sizes": ["34","34.5","35","35.5","36","36.5","37","37.5","38","38.5","39","39.5","40","40.5"],
          "images":[
              {
                  "color":"Pink",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/screener/750633_FAB4C_5644_001_100_0000_Light-Zapatilla-Screener-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/screener/750633_FAB4C_5644_002_100_0000_Light-Zapatilla-Screener-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/screener/750633_FAB4C_5644_009_100_0000_Light-Zapatilla-Screener-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/screener/750633_FAB4C_5644_012_100_0000_Light-Zapatilla-Screener-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/screener/750633_FAB4C_5644_015_100_0000_Light-Zapatilla-Screener-para-mujer.webp"]
              },
              {
                  "color":"White",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/screener/750633_FAB4S_9058_001_100_0000_Light-Zapatilla-Screener-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/screener/750633_FAB4S_9058_002_100_0000_Light-Zapatilla-Screener-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/screener/750633_FAB4S_9058_009_100_0000_Light-Zapatilla-Screener-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/screener/750633_FAB4S_9058_012_100_0000_Light-Zapatilla-Screener-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/screener/750633_FAB4S_9058_015_100_0000_Light-Zapatilla-Screener-para-mujer.webp"]
              }       
          ],
          "price": 840,
          "stock": [
              {
                  "color":"Pink",
                  "stock":100,
                  "sold":0
              },
              {
                  "color":"White",
                  "stock":100,
                  "sold":0
              }
          ]
        },
        {
          "name":"WOMEN'S GG GUCCI TENNIS 1977 SNEAKER",
          "brand":"Gucci",
          "description":"This pair of low-top trainers is presented in Original GG canvas in its classic colour combination of beige and ebony. The style combines different elements from the House's heritage such as the Gucci Tennis 1977 label, a textured GG motif at the sole and the Web—details which recall the House's connection to the world of sports and leisure.",
          "specifications":"@Beige/ebony Original GG canvas @White contrast details @Green and red Web @Green grosgrain trim @Gucci Tennis 1977 label @GG motif at the sole @Rubber sole @Additional pair of laces included @Flat @15mm height @Made in Italy @This product has not been made using materials of animal origin",
          "categories":["Sneakers", "Women"],
          "colors": ["Beige"],
          "sizes": ["34","34.5","35","35.5","36","36.5","37","37.5","38","38.5","39","39.5","40","40.5"],
          "images":[
              {
                  "color":"Beige",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/TENNIS+GG/606110_HVK20_9766_001_100_0000_Light-Zapatilla-GG-Gucci-Tennis-1977-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/TENNIS+GG/606110_HVK20_9766_002_100_0000_Light-Zapatilla-GG-Gucci-Tennis-1977-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/TENNIS+GG/606110_HVK20_9766_004_100_0000_Light-Zapatilla-GG-Gucci-Tennis-1977-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/TENNIS+GG/606110_HVK20_9766_005_100_0000_Light-Zapatilla-GG-Gucci-Tennis-1977-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/TENNIS+GG/606110_HVK20_9766_006_100_0000_Light-Zapatilla-GG-Gucci-Tennis-1977-para-mujer.webp"]
              }       
          ],
          "price": 580,
          "stock": [
              {
                  "color":"Beige",
                  "stock":100,
                  "sold":0
              }
          ]
        },
        {
          "name":"WOMEN'S SNEAKER WITH WEB",
          "brand":"Gucci",
          "description":"The House Web celebrates Gucci's origins in the equestrian world. Each season it evolves, taking on new shapes and interpretations. Playing with the theme of sports and leisure, the blue and red detail defines this pair of leather trainers. The shoe's chunky silhouette adds a retro feel to the design.",
          "specifications":"@White leather with blue detail at back @Women's @Green and red Web @Leather sole @Additional pair of laces included @Lace-up closure @Flat @Made in Italy",
          "categories":["Sneakers", "Women"],
          "colors": ["White"],
          "sizes": ["34","34.5","35","35.5","36","36.5","37","37.5","38","38.5","39","39.5","40","40.5"],
          "images":[
              {
                  "color":"White",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/Tribanda+Web/670415_UPG10_9060_001_100_0000_Light-Zapatilla-con-tribanda-Web-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/Tribanda+Web/670415_UPG10_9060_002_100_0000_Light-Zapatilla-con-tribanda-Web-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/Tribanda+Web/670415_UPG10_9060_004_100_0000_Light-Zapatilla-con-tribanda-Web-para-mujer.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/Tribanda+Web/670415_UPG10_9060_005_100_0000_Light-Zapatilla-con-tribanda-Web-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/Tribanda+Web/670415_UPG10_9060_006_100_0000_Light-Zapatilla-con-tribanda-Web-para-mujer.webp"]
              }       
          ],
          "price": 720,
          "stock": [
              {
                  "color":"Beige",
                  "stock":100,
                  "sold":0
              }
          ]
        },
        {
          "name":"WOMEN'S GG EMBOSSED SNEAKER",
          "brand":"Gucci",
          "description":"This sneaker's chunky silhouette gives it a playful, retro feel. Gucci's collections continue to look to other eras, finding inspiration in the everyday and bringing them to the present. Crafted from GG embossed leather, the monogram motif adds a logo twist.",
          "specifications":"@GG embossed leather with smooth leather details @Women's @Leather sole @Additional pair of laces included @Lace-up closure @Mid heel @55mm height @Made in Italy",
          "categories":["Sneakers", "Women"],
          "colors": ["White","Orange","rgb(172, 100, 41)"],
          "sizes": ["34","34.5","35","35.5","36","36.5","37","37.5","38","38.5","39","39.5","40","40.5"],
          "images":[
              {
                  "color":"White",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/Zapa+con+GG+en+relieve/670408_1XL10_9014_002_100_0000_Light-Zapatilla-con-GG-en-relieve-para-mujer.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/Zapa+con+GG+en+relieve/670408_1XL10_9014_004_100_0000_Light-Zapatilla-con-GG-en-relieve-para-mujer.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/Zapa+con+GG+en+relieve/670408_1XL10_9014_005_100_0000_Light-Zapatilla-con-GG-en-relieve-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/Zapa+con+GG+en+relieve/670408_1XL10_9014_006_100_0000_Light-Zapatilla-con-GG-en-relieve-para-mujer.webp"]
              },
              {
                  "color":"Orange",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/Zapa+con+GG+en+relieve/670408_AABBW_9068_002_100_0000_Light-Zapatilla-GG-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/Zapa+con+GG+en+relieve/670408_AABBW_9068_001_100_0000_Light-Zapatilla-GG-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/Zapa+con+GG+en+relieve/670408_AABBW_9068_009_100_0000_Light-Zapatilla-GG-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/Zapa+con+GG+en+relieve/670408_AABBW_9068_012_100_0000_Light-Zapatilla-GG-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/Zapa+con+GG+en+relieve/670408_AABBW_9068_015_100_0000_Light-Zapatilla-GG-para-mujer.webp"]
              },
              {
                  "color":"rgb(172, 100, 41)",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/Zapa+con+GG+en+relieve/670408_UPGA0_2348_001_100_0000_Light-Zapatilla-GG-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/Zapa+con+GG+en+relieve/670408_UPGA0_2348_002_100_0000_Light-Zapatilla-GG-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/Zapa+con+GG+en+relieve/670408_UPGA0_2348_009_100_0000_Light-Zapatilla-GG-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/Zapa+con+GG+en+relieve/670408_UPGA0_2348_012_100_0000_Light-Zapatilla-GG-para-mujer.webp"]
              }       
          ],
          "price": 720,
          "stock": [
              {
                  "color":"White",
                  "stock":100,
                  "sold":0
              },
              {
                  "color":"Orange",
                  "stock":100,
                  "sold":0
              },
              {
                  "color":"rgb(172, 100, 41)",
                  "stock":100,
                  "sold":0
              }
        
          ]
        },
        {
          "name":"WOMEN'S GG TRAINER",
          "brand":"Gucci",
          "description":"A striking silhouette that takes inspiration from the tennis courts. Presented original GG canvas, this low-top trainer features a chunky sole and a contrasting fabric trim for a contemporary aesthetic.",
          "specifications":"@Beige and ebony Original GG canvas @Pink Original GG canvas @Women's @Fabric trims @Rubber sole with Interlocking G @Additional pair of laces included @Lace-up closure @Flat @53mm height @Made in Italy",
          "categories":["Sneakers", "Women"],
          "colors": ["Beige","Pink"],
          "sizes": ["34","34.5","35","35.5","36","36.5","37","37.5","38","38.5","39","39.5","40","40.5"],
          "images":[
              {
                  "color":"Beige",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/ZAPA+GG/746766_20Q20_9745_001_100_0000_Light-Zapatilla-GG-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/ZAPA+GG/746766_20Q20_9745_002_100_0000_Light-Zapatilla-GG-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/ZAPA+GG/746766_20Q20_9745_012_100_0000_Light-Zapatilla-GG-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/ZAPA+GG/746766_20Q20_9745_015_100_0000_Light-Zapatilla-GG-para-mujer.webp"]
              },
              {
                  "color":"Pink",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/ZAPA+GG/746766_FABZZ_5641_001_100_0000_Light-Zapatilla-GG-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/ZAPA+GG/746766_FABZZ_5641_002_100_0000_Light-Zapatilla-GG-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/ZAPA+GG/746766_FABZZ_5641_012_100_0000_Light-Zapatilla-GG-para-mujer.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Barbie/Sneakers/ZAPA+GG/746766_FABZZ_5641_015_100_0000_Light-Zapatilla-GG-para-mujer.webp"]
              }      
          ],
          "price": 650,
          "stock": [
              {
                  "color":"Beige",
                  "stock":100,
                  "sold":0
              },
              {
                  "color":"Pink",
                  "stock":100,
                  "sold":0
              }
          ]
        },
        {
          "name":"GUCCI LINK TO LOVE TOURMALINE RING",
          "brand": "Gucci",
          "description":"The Gucci Link to Love collection is an exploration of modern romance characterizing new symbols of love. The collection combines different gold tones and a mix of finishes blending the lines between masculine and feminine. Each piece is meant to inspire individualized ways to wear them with stackable and layered features. This 18k yellow gold striped ring has a stackable mechanism and baguette cut green tourmaline.",
          "specifications":"@18k yellow gold @Baguette cut green tourmaline @Engraved 'Gucci' and stripes @This product can be personalized with a bespoke engraving, please contact us for more information. @Stackable @8 gemstones, totaling approximately 0.9 carat @Band width: .01' @Made in Italy @Gucci guarantees, internally and within its supply chain, respect for standards of Social & Environmental Responsibility in line with its sustainability strategy. Gucci gold, platinum and diamonds are certified by the Responsible Jewelry Council whose mission is to promote responsible, ethical, social and environmental practices that guarantee human rights throughout the gold and diamond supply chain, from mines to retail",
          "categories":["Accessories",  "Women", "Rings", "Jewels"],
          "colors":["Green"],
          "sizes": ["Default"],
          "images":[
            {
              "color":"Green",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p1/p1-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p1/p1-2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p1/p1-3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p1/p1-4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p1/p1-5.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p1/p1-6.avif"]
            }
          ],
          "price": 2700,
          "stock": [
            {
              "color": "Green",
              "stock": 100,
              "sold": 0
            }
          ]
        },
        {
          "name":"GUCCI LINK TO LOVE STRIPED RING",
          "brand": "Gucci",
          "description":"The Gucci Link to Love collection is an exploration of modern romance characterizing new symbols of love. The collection combines different gold tones and a mix of finishes blending the lines between masculine and feminine. Each piece is meant to inspire individualized ways to wear them with stackable and layered features. This 18k yellow gold striped ring has a stackable mechanism.",
          "specifications": "@18k yellow gold @Engraved 'Gucci' and stripes @This product can be personalized with a bespoke engraving, please contact us for more information. @Stackable @Band width: .16' @Made in Italy @Gucci guarantees, internally and within its supply chain, respect for standards of Social & Environmental Responsibility in line with its sustainability strategy. Gucci gold, platinum and diamonds are certified by the Responsible Jewelry Council whose mission is to promote responsible, ethical, social and environmental practices that guarantee human rights throughout the gold and diamond supply chain, from mines to retail",
          "categories":["Accessories",  "Women", "Rings", "Jewels"],
          "colors":["Gold"],
          "sizes": ["Default"],
          "images":[
            {
              "color":"Gold",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p2/p2-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p2/p2-2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p2/p2-3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p2/p2-4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p2/p2-5.avif"]
            }
          ],
          "price": 1400,
          "stock": [
            {
              "color": "Gold",
              "stock": 100,
              "sold": 0
            }
          ]
        },
        {
          "name":"GUCCI LINK TO LOVE BAGUETTE TOURMALINE BRACELET",
          "brand": "Gucci",
          "description":"The Gucci Link to Love collection explores modern romance, characterizing new symbols of love. The collection includes different gold tones enriched with precious stones and finishes that blend the lines between masculine and feminine. Each piece inspires individualized ways to wear with stackable and layered features. This 18k yellow gold bracelet is baguette cut with a green tourmaline stone and engraved stripes.",
          "specifications": "@18k yellow gold @Baguette cut green tourmaline @Engraved stripes @11 gemstones, approximately .99 carats @Adjustable clasp closure @Made in Italy @Gucci guarantees, internally and within its supply chain, respect for standards of Social & Environmental Responsibility in line with its sustainability strategy. Gucci gold, platinum and diamonds are certified by the Responsible Jewelry Council whose mission is to promote responsible, ethical, social and environmental practices that guarantee human rights throughout the gold and diamond supply chain, from mines to retail.",
          "categories":["Accessories",  "Women", "Rings", "Jewels"],
          "colors":["Green"],
          "sizes": ["Default"],
          "images":[
            {
              "color":"Green",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p3/p3-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p3/p3-2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p3/p3-3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p3/p3-4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p3/p3-5.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p3/p3-6.avif"]
            }
          ],
          "price": 3250,
          "stock": [
            {
              "color": "Green",
              "stock": 100,
              "sold": 0
            }
          ]
        },
        {
          "name":"GUCCI LINK TO LOVE BAGUETTE TOURMALINE NECKLACE",
          "brand": "Gucci",
          "description":"The Gucci Link to Love collection explores modern romance, characterizing new symbols of love. The collection includes different gold tones enriched with precious stones and finishes that blend the lines between masculine and feminine. Each piece inspires individualized ways to wear with stackable and layered features. This 18k yellow gold necklace is defined by a baguette cut green tourmaline.",
          "specifications": "@18k yellow gold @Baguette cut green tourmaline @13 Gemstones, approximately 1.17 carats @Clasp closure @6.3' length adjustable to7.1' @Made in Italy @Gucci guarantees, internally and within its supply chain, respect for standards of Social & Environmental Responsibility in line with its sustainability strategy. Gucci gold, platinum and diamonds are certified by the Responsible Jewelry Council whose mission is to promote responsible, ethical, social and environmental practices that guarantee human rights throughout the gold and diamond supply chain, from mines to retail.",
          "categories":["Accessories",  "Women", "Rings", "Jewels"],
          "colors":["Green"],
          "sizes": ["Default"],
          "images":[
            {
              "color":"Green",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p4/p4-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p4/p4-2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p4/p4-3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p4/p4-4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p4/p4-5.avif"]
            }
          ],
          "price": 4350,
          "stock": [
            {
              "color": "Green",
              "stock": 100,
              "sold": 0
            }
          ]
        },
        {
          "name":"ICON 18K STAR RING",
          "brand": "Gucci",
          "description":"This precious ring is presented in 18k yellow gold with a delicate band featuring the GG motif. The piece's focal point is a cut-out star, that recalls the Cruise 2023 Gucci Cosmogonie fashion show. Taking place beneath the night sky at the Italian Castel del Monte, the collection draws inspiration from star constellations.",
          "specifications": "@18k yellow gold @Cut-out stars @GG motif @Width: .2' @Made in Italy @Gucci guarantees, internally and within its supply chain, respect for standards of Social & Environmental Responsibility in line with its sustainability strategy. Gucci gold, platinum and diamonds are certified by the Responsible Jewellery Council whose mission is to promote responsible, ethical, social and environmental practices that guarantee human rights throughout the gold and diamond supply chain, from mines to retail.",
          "categories":["Accessories",  "Women", "Rings", "Jewels"],
          "colors":["Green"],
          "sizes": ["Default"],
          "images":[
            {
              "color":"Green",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p5/p5-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p5/p5-2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p5/p5-3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p5/p5-4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p5/p5-5.avif"]
            }
          ],
          "price": 4350,
          "stock": [
            {
              "color": "Green",
              "stock": 100,
              "sold": 0
            }
          ]
        },
        {
          "name":"DOUBLE G CRYSTAL FLOWER LEATHER BRACELET",
          "brand": "Gucci",
          "description":"A signature emblem of the House, the initials of Founder Guccio Gucci characterize this fashion jewelry piece. Set with crystals, the Double G leather bracelet adds a sparkling touch to an essential accessory.",
          "specifications": "@Antique gold-toned metal @Multicolor crystals @Pink leather @Double G crystal flower detail @Crystal strap @Buckle closure @Double G: 1' x 1.2' @Made in Italy @Gucci guarantees, internally and within its supply chain, respect for standards of Social & Environmental Responsibility in line with its sustainability strategy.",
          "categories":["Accessories",  "Women", "Bracelets", "Jewels"],
          "colors":["Pink", "Green"],
          "sizes": ["Default"],
          "images":[
            {
              "color":"Pink",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p6/p6-1.jpeg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p6/p6-2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p6/p6-3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p6/p6-4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p6/p6-5.avif"]
            },
            {
              "color":"Green",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p6/p6-6.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p6/p6-7.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p6/p6-8.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p6/p6-9.avif"]
            }
          ],
          "price": 820,
          "stock": [
            {
              "color": "Pink",
              "stock": 100,
              "sold": 0
            }
          ]
        },
        {
          "name":"DOUBLE G LEATHER BRACELET",
          "brand": "Gucci",
          "description":"To convey the idea that pieces should be able to be worn always,and not just in fashion for one season, the initials of Guccio Gucci subtly define this pink bracelet.",
          "specifications": "@Double G buckle @Pink leather @Brass with palladium finish @Buckle closure @Width: .3' @Made in Italy @Gucci guarantees, internally and within its supply chain, respect for standards of Social & Environmental Responsibility in line with its sustainability strategy",
          "categories":["Accessories",  "Women", "Bracelets", "Jewels"],
          "colors":["Pink"],
          "sizes": ["Default"],
          "images":[
            {
              "color":"Pink",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p7/p7-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p7/p7-2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p7/p7-3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p7/p7-4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p7/p7-5.avif"]
            },
            {
              "color":"Black",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p7/p7-black.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p7/p7-black2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p7/p7-black3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p7/p7-black4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p7/p7-black5.avif"]
            }
          ],
          "price": 310,
          "stock": [
            {
              "color": "Pink",
              "stock": 100,
              "sold": 0
            }
          ]
        },
        {
          "name":"'GUCCI' LEATHER BRACELET",
          "brand": "Gucci",
          "description":"Spelled out in metal letters, the name of the House boldly defines this leather bracelet. The recognizable script decorates a number of accessories and ready-to wear pieces, imbuing the narrative with a distinct logo feel.",
          "specifications": "@Pink leather @Palladium metal @Gucci charm @Adjustable buckle closure @Length: 8.1' @Lettering: .4' @Made in Italy @Gucci guarantees, internally and within its supply chain, respect for standards of Social & Environmental Responsibility in line with its sustainability strategy.",
          "categories":["Accessories",  "Women", "Bracelets", "Jewels"],
          "colors":["Pink"],
          "sizes": ["Default"],
          "images":[
            {
              "color":"Pink",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p8/p8-pink-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p8/p8-pink-2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p8/p8-pink-3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p8/p8-pink-4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p8/p8-pink-5.avif"]
            },
            {
              "color":"White",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p8/p8-white-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p8/p8-white-2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p8/p8-white-3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p8/p8-white-4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p8/p8-white-5.avif"]
            },
            {
              "color":"Black",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p8/p8-black-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p8/p8-black-2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p8/p8-black-3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p8/p8-black-4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p8/p8-black-5.avif"]
            }
          ],
          "price": 480,
          "stock": [
            {
              "color": "Pink",
              "stock": 100,
              "sold": 0
            },
            {
              "color": "white",
              "stock": 100,
              "sold": 0
            },
            {
              "color": "Black",
              "stock": 100,
              "sold": 0
            }
          ]
        },
        {
          "name":"DOUBLE G FLOWER BRACELET",
          "brand": "Gucci",
          "description":"This chain bracelet features the emblematic Double G logo. The House symbol appears repurposed in a delicate rose gold finish, while a central pendant is embellished with pearl resin and glinting crystals to create the appearance of a delicate flower.",
          "specifications": "@Metal with rose gold-toned finish @Thin gourmette chain with Double G @Double G resin flower pendant with crystals @Clasp closure with Double G @6.3' length adjustable to 7.1' @Made in Italy @Gucci guarantees, internally and within its supply chain, respect for standards of Social & Environmental Responsibility in line with its sustainability strategy",
          "categories":["Accessories",  "Women", "Bracelets", "Jewels"],
          "colors":["Gold"],
          "sizes": ["Default"],
          "images":[
            {
              "color":"Gold",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p9/p9-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p9/p9-2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p9/p9-3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p9/p9-4.avif"]
            }
          ],
          "price": 520,
          "stock": [
            {
              "color": "Gold",
              "stock": 100,
              "sold": 0
            }
          ]
        },
        {
          "name":"DOUBLE G CRYSTAL FLOWERS BRACELET",
          "brand": "Gucci",
          "description":"A signature emblem of the House, the initials of Founder Guccio Gucci define this fashion jewelry piece. The Double G bracelet is set with crystals all along the antique gold-toned chain, adding a sparkling and refined touch.",
          "specifications": "@Antique gold-toned metal @Multicolor crystals @Double G crystal flowers @Clasp closure @Double G: 1'W x 1'H @Made in Italy @Gucci guarantees, internally and within its supply chain, respect for standards of Social & Environmental Responsibility in line with its sustainability strategy.",
          "categories":["Accessories",  "Women", "Bracelets", "Jewels"],
          "colors":["Gold"],
          "sizes": ["Default"],
          "images":[
            {
              "color":"Gold",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p10/p10-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p10/p10-2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p10/p10-3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p10/p10-4.avif"]
            }
          ],
          "price": 1600,
          "stock": [
            {
              "color": "Gold",
              "stock": 100,
              "sold": 0
            }
          ]
        },
        {
          "name":"GG MARMONT THIN BELT",
          "brand": "Gucci",
          "description":"A thin belt made in smooth leather with Double G buckle.",
          "specifications": "@White leather @Antique brass hardware @Double G buckle @Buckle: W4cm x H 3cm @.8' belt width @Made in Italy @Can be worn as a hip or waist belt. Sizing will differ based on where the belt is worn, please refer to the size guide to find your size.",
          "categories":["Accessories",  "Women", "Belts", "Jewels"],
          "colors":["White"],
          "sizes": ["Default"],
          "images":[
            {
              "color":"White",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p11/p11-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p11/p11-2.avif"]
            }
          ],
          "price": 390,
          "stock": [
            {
              "color": "White",
              "stock": 100,
              "sold": 0
            }
          ]
        },
        {
          "name":"GG MARMONT MATELASSÉ WIDE BELT",
          "brand": "Gucci",
          "description":"For Pre-Fall 2023, heritage codes continue to be reimagined. Presenting the GG logo, the signature Matelassé leather boasts a rich texture on this GG Marmont belt. Crafed from pink Matelassé leather, this wide belt is defined by a gold-toned hardware.",
          "specifications": "@Pink GG Matelassé leather @Gold-toned hardware @Double G buckle @Buckle: 3'W x 2.4'H @1.5' belt width @Made in Italy @Can be worn as a waist belt. Sizing will differ based on where the belt is worn, please refer to the size guide to find your size.",
          "categories":["Accessories",  "Women", "Belts", "Jewels"],
          "colors":["Pink"],
          "sizes": ["Default"],
          "images":[
            {
              "color":"Pink Leather",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p12/p12-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p12/p12-2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p12/p12-3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p12/p12-4.avif"]
            }
          ],
          "price": 595,
          "stock": [
            {
              "color": "Pink",
              "stock": 100,
              "sold": 0
            }
          ]
        },
        {
          "name":"GG CANVAS BASEBALL HAT",
          "brand": "Gucci",
          "description":"Archival Gucci motifs feature prominently in logo-defined pieces. Here, the distinctive GG canvas is displayed against this baseball hat. The style is completed by a tonal leather detail and an adjustable closure.",
          "specifications": "@Pink GG canvas @Pink leather trim @Cotton linen lining @Adjustable hook-and-loop closure @Made in Italy @70% cotton, 30% polyester; 65% cotton, 35% linen (lining); 55% cotton, 45% viscose (inner); calfskin (detail); calfskin (leather piping)",
          "categories":["Accessories",  "Women", "Hats"],
          "colors":["Blue"],
          "sizes": ["Default"],
          "images":[
            {
              "color":"Blue",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p13/p13-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p13/p13-2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p13/p13-3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p13/p13-4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p13/p13-5.avif"]
            }
          ],
          "price": 460,
          "stock": [
            {
              "color": "Blue",
              "stock": 100,
              "sold": 0
            }
          ]
        },
        {
          "name":"GG CANVAS BUCKET HAT",
          "brand": "Gucci",
          "description":"Archival Gucci motifs feature prominently in logo-defined pieces. Here, the distinctive GG canvas is displayed against this ivory bucket hat. A tonal leather trim and a subtle Double G detail complete the style.",
          "specifications": "@Ivory GG cotton canvas @Ivory leather trim @Double G detail @Made in Italy",
          "categories":["Accessories",  "Women", "Hats"],
          "colors":["Ivory"],
          "sizes": ["Default"],
          "images":[
            {
              "color":"Ivory",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p14/p14-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p14/p14-2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p14/p14-3.avif"]
            }
          ],
          "price": 590,
          "stock": [
            {
              "color": "Ivory",
              "stock": 100,
              "sold": 0
            }
          ]
        },
        {
          "name":"JUMBO GG BASEBALL HAT",
          "brand": "Gucci",
          "description":"This version of the jumbo GG motif plays with colors and texture onto a soft canvas. Here, it offers a refreshing twist on the classic baseball hat silhouette, complete with a light pink trim.",
          "specifications": "@Beige and lightgreen jumbo GG canvas @Light pink leather trim @Adjustable hook-and-loop closure @Made in Italy @70% cotton, 30% polyester; 65% cotton, 35% linen (lining); 100% calfskin (detail); 55% cotton, 45% viscose (interior)",
          "categories":["Accessories",  "Women", "Hats"],
          "colors":["Lightgreen"],
          "sizes": ["Default"],
          "images":[
            {
              "color":"Lightgreen",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p15/p15-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p15/p15-2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p15/p15-3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p15/p15-4.avif"]
            }
          ],
          "price": 460,
          "stock": [
            {
              "color": "Lightgreen",
              "stock": 100,
              "sold": 0
            }
          ]
        },
        {
          "name":"GUARDIANS™ BASEBALL HAT",
          "brand": "Gucci",
          "description":"The House’s historic codes once again meet those of Major League Baseball™ in a special capsule of ready-to-wear and accessories celebrating the crafted signature style of some of the most storied clubs in baseball, from the Boston Red Sox™, Cleveland Guardians™, Detroit Tigers™, Oakland Athletics™, New York Mets™, New York Yankees™ and Pittsburgh Pirates™. The Cleveland Guardians™ patch is brought to the forefront, enriching the House's signature silhouettes and accessories, as shown on this baseball hat animal printed fuchsia cotton.",
          "specifications": "@Yellow felted wool with polka dots print @Cleveland Guardians™ patch at the front @Gucci embroidered patch at the back @Moiré lining @New Era embroidered logo at the side @Major League Baseball trademarks and copyrights are used with permission of Major League Baseball Properties, Inc. @Adjustable hook-and-loop closure on back",
          "categories":["Accessories",  "Women", "Hats"],
          "colors":["Yellow"],
          "sizes": ["Default"],
          "images":[
            {
              "color":"Yellow",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p16/p16-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p16/p16-2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p16/p16-3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Accesories/p16/p16-4.avif"]
            }
          ],
          "price": 690,
          "stock": [
            {
              "color": "Yellow",
              "stock": 100,
              "sold": 0
            }
          ]
        },
        {
          "name":"WOMEN'S GG SLINGBACK PUMP",
          "brand": "Gucci",
          "description":"The House's designs continue to play with expectations, bringing together diverse shapes and silhouettes to create hybrid pieces. Crafted from fuchsia mesh, an elegant GG crystal multicolor motif adds a contemporary feel to this pair of slide sandals.",
          "specifications": "@Fuchsia GG crystal mesh @Women's @Leather sole @Back buckle closure @Mid-heel @3' heel height @Made in Italy @Please note the absence of crystals near the sole is a technical detail which contributes to the durability of the design.",
          "categories":["Heels", "Women"],
          "colors":["Fuchsia"],
          "sizes": ["35", "35.5", "36", "36.5", "37", "37.5", "38", "38.5", "39", "39.5"],
          "images":[
            {
              "color":"Fuchsia",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t1/t1-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t1/t1-2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t1/t1-3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t1/t1-4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t1/t1-5.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t1/t1-6.avif"]
            }
          ],
          "price": 1220,
          "stock": [
            {
              "color": "Fuchsia",
              "stock": 100,
              "sold": 0
            }
          ]
        },
        {
          "name":"WOMEN'S HIGH HEEL PUMP THIN",
          "brand": "Gucci",
          "description":"Subtle House details add a logo touch to this pair of high heel pumps. Crafted from pink leather, a Double G detail on the heel enhances the elegance of the style's classic silhouette.",
          "specifications": "@Leather @Women's @Double G detail on heel @Pointed toe @Leather sole @High-heel @4.1' heel height @Made in Italy",
          "categories":["Heels", "Women"],
          "colors":["Green", "Pink", "Black"],
          "sizes": ["35", "35.5", "36", "36.5", "37", "37.5", "38", "38.5", "39", "39.5"],
          "images":[
            {
              "color":"Green",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t2/t2-green-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t2/t2-green-2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t2/t2-green-3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t2/t2-green-4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t2/t2-green-5.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t2/t2-green-6.avif"]
            },
            {
              "color":"Pink",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t2/t2-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t2/t2-2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t2/t2-3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t2/t2-4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t2/t2-5.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t2/t2-6.avif"]
            },
            {
              "color":"Black",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t2/t2-black-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t2/t2-black-2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t2/t2-black-3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t2/t2-black-4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t2/t2-black-5.avif"]
            }
          ],
          "price": 850,
          "stock": [
            {
              "color": "Green",
              "stock": 100,
              "sold": 0
            },
            {
              "color": "Pink",
              "stock": 100,
              "sold": 0
            },
            {
              "color": "Black",
              "stock": 100,
              "sold": 0
            }
          ]
        },
        {
          "name":"WOMEN'S HIGH HEEL PUMP",
          "brand": "Gucci",
          "description":"The recognizable double ring and bar adds a decorative finish to this pair of leather high heel pumps. A nod to the House's equestrian past, the Horsebit has become both a historical and contemporary emblem throughout the years.",
          "specifications": "@White leather @Women's @Horsebit @Leather sole @Buckle slingback closure @High-heel @4.7' heel with 1.4' platform @Made in Italy",
          "categories":["Heels", "Women"],
          "colors":["Black", "Black", "White"],
          "sizes": ["35", "35.5", "36", "36.5", "37", "37.5", "38", "38.5", "39", "39.5"],
          "images":[
            {
              "color":"Black",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t3/t3-black-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t3/t3-black-2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t3/t3-black-3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t3/t3-black-4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t3/t3-black-5.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t3/t3-black-5.avif"]
            },
            {
              "color":"White",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t3/t3-white-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t3/t3-white-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t3/t3-white-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t3/t3-white-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t3/t3-white-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t3/t3-white-1.avif"]
            },
            {
              "color":"Green",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t3/t3-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t3/t3-2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t3/t3-3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t3/t3-4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t3/t3-5.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t3/t3-6.avif"]
            }
          ],
          "price": 1100,
          "stock": [
            {
              "color": "Black",
              "stock": 100,
              "sold": 0
            },
            {
              "color": "White",
              "stock": 100,
              "sold": 0
            },
            {
              "color": "Green",
              "stock": 100,
              "sold": 0
            }
          ]
        },
        {
          "name":"WOMEN'S MID-HEEL SLINGBACK WITH HORSEBIT",
          "brand": "Gucci",
          "description":"A slingback pump with vintage accents such as a square shaped toe and sculpted block heel. A code from the archives, the Horsebit detail connects the style to the House's equestrian roots. The style is presented in light pink leather.",
          "specifications": "@Leather @Women's @Horsebit detail @Sculpted block heel @Leather sole @Mid-heel @3' heel height @Made in Italy",
          "categories":["Heels", "Women"],
          "colors":["Beige", "White"],
          "sizes": ["35", "35.5", "36", "36.5", "37", "37.5", "38", "38.5", "39", "39.5"],
          "images":[
            {
              "color":"Beige",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t4/t4-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t4/t4-2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t4/t4-3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t4/t4-4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t4/t4-5.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t4/t4-6.avif"]
            },
            {
              "color":"White",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t4/t4-white-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t4/t4-white-2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t4/t4-white-3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t4/t4-white-4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t4/t4-white-5.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t4/t4-white-6.avif"]
            }
          ],
          "price": 920,
          "stock": [
            {
              "color": "Beige",
              "stock": 100,
              "sold": 0
            }
          ]
        },
        {
          "name":"WOMEN'S LACE-UP PUMPS",
          "brand": "Gucci",
          "description":"The House's designs continue to play with expectations, bringing together diverse shapes and silhouettes to create hybrid pieces. Crafted from fuchsia mesh, an elegant GG crystal multicolor motif adds a contemporary feel to this pair of slide sandals.",
          "specifications": "@Fuchsia GG crystal mesh @Women's @Leather sole @Back buckle closure @Mid-heel @3' heel height @Made in Italy @Please note the absence of crystals near the sole is a technical detail which contributes to the durability of the design.",
          "categories":["Heels", "Women"],
          "colors":["Fuchsia", "Green", "Blue"],
          "sizes": ["35", "35.5", "36", "36.5", "37", "37.5", "38", "38.5", "39", "39.5"],
          "images":[
            {
              "color":"Fuchsia",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t5/t5-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t5/t5-2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t5/t5-3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t5/t5-4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t5/t5-5.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t5/t5-6.avif"]
            },
            {
              "color":"Green",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t5/t5-green-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t5/t5-green-2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t5/t5-green-3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t5/t5-green-4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t5/t5-green-5.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t5/t5-green-6.avif"]
            },
            {
              "color":"Blue",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t5/t5-blue-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t5/t5-blue-2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t5/t5-blue-3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t5/t5-blue-4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t5/t5-blue-5.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t5/t5-blue-6.avif"]
            }
          ],
          "price": 850,
          "stock": [
            {
              "color": "Fuchsia",
              "stock": 100,
              "sold": 0
            },
            {
              "color": "Green",
              "stock": 100,
              "sold": 0
            },
            {
              "color": "Blue",
              "stock": 100,
              "sold": 0
            }
          ]
        },
        {
          "name":"WOMEN'S CROCODILE SLINGBACK",
          "brand": "Gucci",
          "description":"Each part of the House's history comes together to shape the latest collections as symbolic details are reinterpreted with a contemporary spirit. An emblem of Gucci's equestrian origins, the Horsebit defines this pair of slingback pumps. The shoe is presented in precious black crocodile with a square-toe and sculpted heel.",
          "specifications": "@Black crocodile @Women's @Gold-toned hardware @Horsebit @Sculpted block heel @Leather sole @' heel height @Made in Italy",
          "categories":["Heels", "Women"],
          "colors":["Black"],
          "sizes": ["35", "35.5", "36", "36.5", "37", "37.5", "38", "38.5", "39", "39.5"],
          "images":[
            {
              "color":"Black",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t6/t6-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t6/t6-2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t6/t6-3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t6/t6-4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t6/t6-5.avif"]
            }
          ],
          "price": 8000,
          "stock": [
            {
              "color": "Black",
              "stock": 100,
              "sold": 0
            }
          ]
        },
        {
          "name":"WOMEN'S OPEN-TOE SANDAL",
          "brand": "Gucci",
          "description":"Introduced as part of Cruise 2023 Gucci Cosmogonie, black leather animates this pair of open-toe sandals. The gold-toned Interlocking G button on the front defines the model's v shaped silhouette.",
          "specifications": "@Black leather @Women's @Gold-toned Interlocking G button hardware @Leather sole @Open toe @Adjustable ankle buckle closure @High-heel @3.7' heel height @Made in Italy",
          "categories":["Heels", "Women"],
          "colors":["Black"],
          "sizes": ["35", "35.5", "36", "36.5", "37", "37.5", "38", "38.5", "39", "39.5"],
          "images":[
            {
              "color":"Black",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t7/t7-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t7/t7-2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t7/t7-3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t7/t7-4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t7/t7-5.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t7/t7-6.avif"]
            }
          ],
          "price": 980,
          "stock": [
            {
              "color": "Black",
              "stock": 100,
              "sold": 0
            }
          ]
        },
        {
          "name":"WOMEN'S PLATFORM PUMP WITH GG STUDS",
          "brand": "Gucci",
          "description":"An elegant and whimsical women's pump, reflecting the latest collection, is defined by subtle yet impactful GG studs appliqué. Crafted in black leather, a spool heel completes the style.",
          "specifications": "@Black leather @Women's @GG studs appliqué @Spool heel @Leather sole @Ankle closure with adjustable buckle @High-heel @4.5' heel height with 1.6' platform, based on a size 37(IT) @Made in Italy",
          "categories":["Heels", "Women"],
          "colors":["Black"],
          "sizes": ["35", "35.5", "36", "36.5", "37", "37.5", "38", "38.5", "39", "39.5"],
          "images":[
            {
              "color":"Black",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t8/t8-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t8/t8-2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t8/t8-3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t8/t8-4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t8/t8-5.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t8/t8-6.avif"]
            }
          ],
          "price": 1350,
          "stock": [
            {
              "color": "Black",
              "stock": 100,
              "sold": 0
            }
          ]
        },
        {
          "name":"WOMEN'S PETITE GG SLINGBACK PUMP",
          "brand": "Gucci",
          "description":"An elegant and whimsical women's pump, reflecting the latest collection, is defined by subtle yet impactful GG studs appliqué. Crafted in black leather, a spool heel completes the style.",
          "specifications": "@Black leather @Women's @GG studs appliqué @Spool heel @Leather sole @Ankle closure with adjustable buckle @High-heel @4.5' heel height with 1.6' platform, based on a size 37(IT) @Made in Italy",
          "categories":["Heels", "Women"],
          "colors":["Black", "Green", "White"],
          "sizes": ["35", "35.5", "36", "36.5", "37", "37.5", "38", "38.5", "39", "39.5"],
          "images":[
            {
              "color":"Black",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t9/t9-black-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t9/t9-black-2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t9/t9-black-3.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t9/t9-black-4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t9/t9-black-5.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t9/t9-black-6.avif"]
            },
            {
              "color":"Green",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t9/t9-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t9/t9-2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t9/t9-3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t9/t9-4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t9/t9-5.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t9/t9-6.avif"]
            },
            {
              "color":"White",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t9/t9-white-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t9/t9-white-2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t9/t9-white-3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t9/t9-white-4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t9/t9-white-5.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t9/t9-white-6.avif"]
            }
          ],
          "price": 940,
          "stock": [
            {
              "color": "Black",
              "stock": 100,
              "sold": 0
            },
            {
              "color": "White",
              "stock": 100,
              "sold": 0
            },
            {
              "color": "Green",
              "stock": 100,
              "sold": 0
            }
          ]
        },
        {
          "name":"WOMEN'S GG SLINGBACK PUMP SHORT",
          "brand": "Gucci",
          "description":"The Gucci Aria collection takes references from the archives of the '90s and early '2000s, with pieces inspired from Tom Ford's era in Gucci. The new idea of femininity shows glamorous details, such as lace, crystals and sheer fabrics. This pair of slingback shoes are presented in a light shade of rose mesh with a sparkling GG motif.",
          "specifications": "@Women's @Tonal suede details @Leather sole @Back buckle closure @Low heel @1.4' heel height @Made in Italy @Please note the absence of crystals near the sole is a technical detail which contributes to the durability of the design.",
          "categories":["Heels", "Women"],
          "colors":["Blue", "LightPink", "Black"],
          "sizes": ["35", "35.5", "36", "36.5", "37", "37.5", "38", "38.5", "39", "39.5"],
          "images":[
            {
              "color":"Blue",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t10/t10-blue-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t10/t10-blue-2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t10/t10-blue-3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t10/t10-blue-4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t10/t10-blue-5.avif"]
            },
            {
              "color":"LightPink",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t10/t10-lp-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t10/t10-lp-2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t10/t10-lp-3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t10/t10-lp-4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t10/t10-lp-5.avif"]
            },
            {
              "color":"Black",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t10/t10-black-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t10/t10-black-2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t10/t10-black-3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t10/t10-black-4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t10/t10-black-5.avif"]
            }
          ],
          "price": 1150,
          "stock": [
            {
              "color": "Blue",
              "stock": 100,
              "sold": 0
            },
            {
              "color": "Black",
              "stock": 100,
              "sold": 0
            },
            {
              "color": "LightPink",
              "stock": 100,
              "sold": 0
            }
          ]
        },
        {
          "name":"WOMEN'S PYTHON PRINT PUMP",
          "brand": "Gucci",
          "description":"Contrast details play with shades and textures to bring a contemporary feel to classic designs. Crafted from leather with an allover python print, the animal motif is matched with a GG mesh insert detail.",
          "specifications": "@Women's @GG mesh insert detail @Pointed toe @Leather sole @High-heel @4.1' heel height @Made in Italy",
          "categories":["Heels", "Women"],
          "colors":["Pink", "Black"],
          "sizes": ["35", "35.5", "36", "36.5", "37", "37.5", "38", "38.5", "39", "39.5"],
          "images":[
            {
              "color":"Pink",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t11/t11-pink-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t11/t11-pink-2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t11/t11-pink-3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t11/t11-pink-4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t11/t11-pink-5.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t11/t11-pink-6.avif"]
            },
            {
              "color":"Black",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t11/t11-black-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t11/t11-black-2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t11/t11-black-3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t11/t11-black-4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t11/t11-black-5.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t11/t11-black-6.avif"]
            }
          ],
          "price": 940,
          "stock": [
            {
              "color": "Black",
              "stock": 100,
              "sold": 0
            },
            {
              "color": "Pink",
              "stock": 100,
              "sold": 0
            }
          ]
        },
        {
          "name":"WOMEN'S SLINGBACK PUMP WITH PLEATS",
          "brand": "Gucci",
          "description":"Further exploring formalwear with an unconventional approach, the Spring Summer 2023 collection looks at the concept of tailoring with a new lens. Inspired by Art Deco fashion, these slingback pumps feature intricate pleated leather toe cap on the shoe front, with a contrasting trim.",
          "specifications": "@Red and black leather @Women's @Red trim @Pleated leather toe cap @Leather sole @Tapered heel @Elastic ankle strap closure @High-heel @3.7' heel height, based on a size 37 (IT) @Made in Italy",
          "categories":["Heels", "Women"],
          "colors":["Red"],
          "sizes": ["35", "35.5", "36", "36.5", "37", "37.5", "38", "38.5", "39", "39.5"],
          "images":[
            {
              "color":"Red",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t12/t12-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t12/t12-2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t12/t12-3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t12/t12-4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t12/t12-5.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t12/t12-6.avif"]
            }
          ],
          "price": 1450,
          "stock": [
            {
              "color": "Red",
              "stock": 100,
              "sold": 0
            }
          ]
        },
        {
          "name":"WOMEN'S GUCCI BLONDIE PUMP",
          "brand": "Gucci",
          "description":"The Gucci Blondie first debuted along the star-studded Hollywood Boulevard in Los Angeles during Gucci Love Parade. The new line mirrors the mood found throughout the latest collection, bringing eras together by combining a retro aesthetic with a contemporary character. Taken straight from the '70s archives, the Founder's monogram defines this pair of GG Supreme mid-heel shoes.",
          "specifications": "@Beige and ebony GG Supreme canvas @Women's @Gold-toned hardware @Brown leather trim @Round Interlocking G @Leather sole @Mid-heel @2.2' heel height @Made in Italy",
          "categories":["Heels", "Women"],
          "colors":["Beige"],
          "sizes": ["35", "35.5", "36", "36.5", "37", "37.5", "38", "38.5", "39", "39.5"],
          "images":[
            {
              "color":"Beige",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t13/t13-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t13/t13-2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t13/t13-3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t13/t13-4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t13/t13-5.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t13/t13-6.avif"]
            }
          ],
          "price": 990,
          "stock": [
            {
              "color": "Beige",
              "stock": 100,
              "sold": 0
            }
          ]
        },
        {
          "name":"WOMEN'S PUMP WITH GG CANVAS",
          "brand": "Gucci",
          "description":"This pair of patent leather pumps are presented with a cut-out detail on the sides. Coordinating with a delicate fabric bow, the emblematic GG canvas appears at the front as a subtle logo detail.",
          "specifications": "@Black patent leather @Women's @GG canvas trim @Bow detail @Leather sole @Cut-out detail @Block heel @1.7' heel height @Made in Italy",
          "categories":["Heels", "Women"],
          "colors":["Black"],
          "sizes": ["35", "35.5", "36", "36.5", "37", "37.5", "38", "38.5", "39", "39.5"],
          "images":[
            {
              "color":"Black",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t14/t14-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t14/t14-2.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t14/t14-3.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t14/t14-4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t14/t14-5.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t14/t14-6.avif"]
            }
          ],
          "price": 1120,
          "stock": [
            {
              "color": "Black",
              "stock": 100,
              "sold": 0
            }
          ]
        },
        {
          "name":"WOMEN'S STUDDED PUMP",
          "brand": "Gucci",
          "description":"Distinctive shapes brought to life by unexpected details, such as this women's pump defined by a curved silhouette and multi-buckle ankle straps. The studs and eyelet detailing lends a rock vibe to the style",
          "specifications": "@Black leather @Women's @Studs and eyelets @Pointed toe @Leather sole @Multi-buckles closure @Mid-heel @3' heel height @Made in Italy",
          "categories":["Heels", "Women"],
          "colors":["Black"],
          "sizes": ["35", "35.5", "36", "36.5", "37", "37.5", "38", "38.5", "39", "39.5"],
          "images":[
            {
              "color":"Black",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t15/t15-1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t15/t15-2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t15/t15-3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t15/t15-4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t15/t15-5.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Nacho/Heels/t15/t15-6.avif"]
            }
          ],
          "price": 2190,
          "stock": [
            {
              "color": "Black",
              "stock": 100,
              "sold": 0
            }
          ]
        }
        // BAGS & SNEAKERS BARBIE COMPLETED
        // ACCESORIES & HEELS NACHO COMPLETED
    ])
  }else{
    res.staus(403).json({message: "Token not authorized"})
  }
})


// ------ Louis Vuitton --------> (Women Completed)
app.get("/lv/women/:token", (req, res)=>{
  if(req.params.token === TOKEN){
    res.status(200).json([
      {
        "name":"OnTheGo MM",
        "brand":"Louis Vuitton",
        "description":"The OnTheGo MM bag is crafted in coated canvas with an oversized Monogram motif on a cream background. The piece is embellished and lined with an intricate Monogram floral print inspired by traditional Portuguese tiles. This spacious and versatile model features short and long handles that allow it to be carried in multiple ways.",
        "specifications":"@Monogram Coated Canvas @Textile lining @Metal pieces finished in gold. @D-ring to secure belongings @Inside flat zip pocket @Inside with double pocket" ,
        "categories":["Bags"],
        "colors": ["Beige"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Beige",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+1+/Onthego-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+1+/Onthego3-deLado.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+1+/Onthego-Interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+1+/OnthegoModelo1.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+1+/OnthegoModelo2.webp"]
            }        
        ],
        "price": 2350,
        "stock": [
            {
                "color":"Beige",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Neverfull MM",
        "brand":"Louis Vuitton",
        "description":"This summer version of the Neverfull MM tote bag is crafted in cream-colored Canvas. The model is decorated with an oversize Monogram motif reinterpreted with a watercolor effect. The design is finished with a Monogram flower print on the handles and trim along the top.",
        "specifications":"@Beige color, @Coated Monogram canvas with @Textile lining, accented by @Metal pieces with a gold-colored finish. The bag features @Four laces on the sides, a @D-shaped ring, and @Closes with a carabiner. Inside, there's a @Flat interior pocket with textile lining, along with a @Removable pouch with a zipper. It comes with a @Strap: Z01 and a @Handle: Z06.",
        "categories":["Bags"],
        "colors": ["Beige","Black","LightPink"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Beige",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+2/Color+Creme/OnTheGoCreeme-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+2/Color+Creme/OnTheGoCreeme-deLado.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+2/Color+Creme/OnTheGoCreeme-Interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+2/Color+Creme/OnTheGoCreeme-Modelo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+2/Color+Creme/OnTheGoCreeme6-Modelo.webp"]
            },
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+2/Color+Black/OnthegoMonogramLeather-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+2/Color+Black/OnthegoMonogramLeather-DeLado.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+2/Color+Black/OnthegoMonogramLeather-Interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+2/Color+Black/OnthegoMonogramLeather-Modelo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+2/Color+Black/OnthegoMonogramLeather-Modelo2.webp"]
            },
            {
                "color":"LightPink",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+2/Color+Rose/OnthegoLeatherRose-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+2/Color+Rose/OnthegoLeatherRose-DeLado.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+2/Color+Rose/OnthegoLeatherRose-Interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+2/Color+Rose/OnthegoLeatherRose-zoom.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+2/Color+Rose/OnthegoLeatherRose-zoom2.webp"]
            }        
        ],
        "price": 2870,
        "stock": [
            {
                "color":"Beige",
                "stock":100,
                "sold":0
            },
            {
                "color":"Black",
                "stock":100,
                "sold":0
            },
            {
                "color":"LightPink",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"OnTheGo PM",
        "brand":"Louis Vuitton",
        "description":"The OnTheGo PM bag features a functional tote-style design ideal for everyday use. The piece is made of Canvas Monograma and Canvas Monograma Reverse and shows off the innovative Giant print. The model is completed with a delicate removable coin purse, Toron handles and a Jacquard strap with the Louis Vuitton logo embroidered in contrasting cream beige.",
        "specifications":"@Coated Monogram Canvas and @Coated Monogram Reverse Canvas, both with @Textile lining, adorned with @Metal pieces featuring a gold-colored finish. It includes a @Removable coin purse with zipper, a spacious @Interior flat pocket with zipper, and two @Interior flat pockets. There's also a @D-shaped ring, with four corners embellished with iconic rivets and trim. The bag comes with a @Strap: Z05, with a strap drop of 35.2 cm and a maximum strap drop of 53.0 cm, as well as a @Handle: Z06.",
        "categories":["Bags"],
        "colors": ["Brown"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Brown",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+3/OnthegoMM-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+3/OnthegoMM-deLado.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+3/OnthegoMM-Interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+3/OnthegoMM-Modelo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+3/OnthegoMM5-Modelo2.webp"]
            }        
        ],
        "price": 3530,
        "stock": [
            {
                "color":"Brown",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Neverfull TW MM",
        "brand":"Louis Vuitton",
        "description":"This summer version of the Neverfull MM tote bag is crafted in cream-colored Canvas. The model is decorated with an oversize Monogram motif reinterpreted with a watercolor effect. The design is finished with a Monogram flower print on the handles and trim along the top.",
        "specifications":"@Beige color, @Coated Monogram Canvas, and @Textile lining, complemented by @Metal pieces with a gold-colored finish. The design features @Four laces on the sides, a @D-shaped ring, and @Closes through a carabiner. Inside, there's a @Flat interior pocket with textile lining, along with a @Removable pouch with a zipper. It comes with a @Strap: Z01 and a @Handle: Z06.",
        "categories":["Bags"],
        "colors": ["Blue","Beige","LightPink"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Blue",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+4/Azul/NeverFullAzul-Front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+4/Azul/NeverFullAzul-horizontal.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+4/Azul/NeverFullAzul-Interior.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+4/Azul/NeverFullAzul-Modelo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+4/Azul/NeverFullAzul-Modelo2.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+4/Azul/NeverFullAzullVideo.mp4"]
            },
            {
                "color":"Beige",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+4/Beige/Neverfull-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+4/Beige/Neverfull-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+4/Beige/Neverfull-Interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+4/Beige/Neverfull-Zoom.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+4/Beige/NeverfullBeige-Modelo.webp"]
            },
            {
                "color":"LightPink",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+4/Rosa/Neverfull-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+4/Rosa/Neverfull-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+4/Rosa/Neverfull-Interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+4/Rosa/Neverfull-Modelo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+4/Rosa/Neverfull-Modelo2.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+4/Rosa/NeverfullRosaVideo.mp4"]
            }  
                  
        ],
        "price": 2870,
        "stock": [
            {
                "color":"Blue",
                "stock":100,
                "sold":0
            },
            {
                "color":"Beige",
                "stock":100,
                "sold":0
            },
            {
                "color":"LightPink",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Neo Alma BB",
        "brand":"Louis Vuitton",
        "description":"The Neo Alma BB bag, crafted in flexible Monogram Empreinte leather, is an ideal accessory for both day and night. This compact model features two rounded top handles and a removable strap. The contrasting colored lining and classic Louis Vuitton details, such as the closure and key holder, make it a timeless and avant-garde design.",
        "specifications":"@Black color, made from @Grained flexible leather featuring engraved Monogram Empreinte motif, combined with @Grained flexible leather, and complemented by a @Microfiber lining. The design includes @Grained leather edging, @Metal pieces in a gold color, and a @Double zipper closure. Inside, there's an @Interior pocket, as well as a @Lock and a @Key holder. The base is protected by four @Metal protective studs. The bag comes with a @Strap: Z04, with a strap drop of 52.0 cm, as well as a @Handle: Z06.",
        "categories":["Bags"],
        "colors": ["Black"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+5/NeoAlmaBB-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+5/NeoAlma-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+5/NeoAlmaBB-Interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+5/NeoAlma-zoom.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+5/NeoAlmaBB-Modelo.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+5/NeoAlmaBBVideo.mp4"]
            }        
        ],
        "price": 2850,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Multi Pochette Accessoires",
        "brand":"Louis Vuitton",
        "description":"The Multi Pochette Accessories crossbody bag, in Monogram Empreinte leather, combines design and functionality. All the components of this two-in-one accessory are removable: the coin purse and the clutch, the golden chain and the leather shoulder strap. The oversized Monogram motif engraved on the front contrasts with the classic Monogram pattern on the side gussets.",
        "specifications":"@Removable large handbag: 25 x 14.5 x 4.5 cm (length x height x width) and @Removable small handbag: 20 x 12.5 x 4 cm (length x height x width). The color is @Cream beige, crafted from @Grained and embossed flexible leather, with @Leather edging, and a @Microfiber lining. The @Metal pieces are in a gold color. The @Large handbag features an @Interior flat pocket. The bag comes with a @Strap: Z05, with a strap drop of 27.0 cm and a maximum strap drop of 47.0 cm, as well as a @Chain: Z03 with a chain drop of 32.0 cm, and a @Handle: Z01.",
        "categories":["Bags"],
        "colors": ["Black","Beige"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+6/Black/Pochette-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+6/Black/Pochette-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+6/Black/Pochette5-Arriba.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+6/Black/Pochette-zoom.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+6/Black/Pochette-Modelo.webp"]
            },
            {
                "color":"Beige",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+6/Creme/Pochette-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+6/Creme/Pochette-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+6/Creme/Pochette-Arriba.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+6/Creme/Pochette-complemento.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+6/Creme/Pochette-zoom.webp"]
            }         
        ],
        "price": 3200,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            },
            {
                "color":"Beige",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":" Speedy 20",
        "brand":"Louis Vuitton",
        "description":"The Speedy 20 bag from the Nanogram capsule collection is crafted in calf leather and features a small raised and printed Monogram motif. The unmistakable silhouette of the model is enhanced with an iconic golden-colored padlock. The piece comes with an adjustable and removable chain strap with braided leather, allowing it to be worn over the shoulder or crossbody.",
        "specifications":"@Calfskin leather with @Calfskin leather edging, and a @Microfiber lining. The @Metal pieces have a gold-colored finish. It features rounded handles made from leather, an @Interior flat pocket, and a @Double zipper closure with a @Lock. The bag comes with a @Strap: Z05, with a strap drop of 49.0 cm and a maximum strap drop of 54.0 cm, as well as a @Handle: Z06",
        "categories":["Bags"],
        "colors": ["Black","LightPink"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+7/Black/Speedy-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+7/Black/Speedy-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+7/Black/Speedy-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+7/Black/Speedy-zoom.webp"]
            },
            {
                "color":"LightPink",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+7/Rose/Speedy-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+7/Rose/Speedy-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+7/Rose/Speedy-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+7/Rose/Speedy-zoom.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+7/Rose/Speedy-modelo.webp"]
            }         
        ],
        "price": 3400,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            },
            {
                "color":"LightPink",
                "stock":100,
                "sold":0
            } 
        ]
      },
      {
        "name":"NeoNoe MM",
        "brand":"Louis Vuitton",
        "description":"The NéoNoé bucket bag, one of the iconic models of the Maison, is a reinterpretation of a design by Gaston-Louis Vuitton created in 1932 to stylishly carry champagne bottles. This modern and elegant version is crafted in Monogram Canvas and features a colorful trim with a matching lining. It incorporates a clever adjustable strap that allows it to be worn over the shoulder or crossbody.",
        "specifications":"@Coated Monogram Canvas, with @Smooth leather edging, and a @Microfiber lining. The @Metal pieces are in a gold color. It features an adjustable drawstring with @Metal eyelets, and two compartments. In the center, there's a @Central flat pocket with a zipper. The bag comes with a @Strap: Z05, with a strap drop of 33.0 cm and a maximum strap drop of 56.0 cm, as well as a @Handle: Z01.",
        "categories":["Bags"],
        "colors": ["Brown"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Brown",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+8/NeoNeoMM-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+8/NeoNeoMM-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+8/NeoNeoMM-zoom.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+8/NeoNeoMM-modelo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+8/NeoNeoMM-modelo2.jpg"]
            }        
        ],
        "price": 2300,
        "stock": [
            {
                "color":"Brown",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Boétie MM",
        "brand":"Louis Vuitton",
        "description":"The Boétie MM bag, crafted in Monogram Canvas, features a leather trim and is enhanced with classic Maison details, such as the golden padlock and rolled leather top handles. This spacious everyday model offers room for a 13-inch MacBook Pro. The piece can be carried by hand, hung over the shoulder, or worn crossbody thanks to the removable strap.",
        "specifications":"@Coated Monogram Canvas, with a @Fabric lining and @Natural leather edging. @Metal pieces are in a gold color ,@Double pocket for cell phones, and a spacious @Interior flat pocket. @Lock for security. @Strap: Z05, with a strap drop of 37.5 cm and a maximum strap drop of 45.5 cm @Handle: Z06.",
        "categories":["Bags"],
        "colors": ["Brown"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Brown",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+9+/BolsaBoetieMM-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+9+/BolsaBoetieMM-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+9+/BolsaBoetieMM-Interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+9+/BolsaBoetieMM-Modelo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+9+/BolsaBoetieMM-Modelo2.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+9+/Bolsa+Bo%C3%A9tieMM-Video.mp4"]
            }        
        ],
        "price": 2500,
        "stock": [
            {
                "color":"Brown",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Alma BB",
        "brand":"Louis Vuitton",
        "description":"The Alma BB bag joins the Bubblegram line for this season in a striking color combination. This design is crafted in quilted calf leather and features the iconic Monogram motif embroidered. The piece includes a wide strap and top handles that allow it to be carried in various ways.",
        "specifications":"@Basilic green color. @Soft quilted and embroidered calfskin leather. Adjustable strap crafted from nylon. @Jacquard technique lining with tonal Nano Monogram pattern. @Metal pieces with a gold-colored finish. @Double zipper closure. Interior @flat pocket. Four @metal protective studs at the base. @Strap: Z05, with a strap drop of 42.0 cm and a maximum strap drop of 60.0 cm. @Handle: Z06.",
        "categories":["Bags"],
        "colors": ["Green"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Green",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+10/BolsaAlmaBB-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+10/BolsaAlmaBB-Horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+10/BolsaAlmaBB-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+10/BolsaAlmaBB-zoom.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+10/BolsaAlmaBB-correa.webp"]
            }        
        ],
        "price": 3300,
        "stock": [
            {
                "color":"Green",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Pochette Métis MM",
        "brand":"Louis Vuitton",
        "description":"This Pochette Métis MM bag is crafted in cream-colored canvas and features Monogram flowers and LV initials printed with a soft watercolor effect. The model showcases an intricate Monogram flower design on the top handle and removable strap, evoking the ceramic tiles on the facades of buildings in Lisbon.",
        "specifications":"@Blue color. @Coated Monogram Canvas. @Textile lining. @Metal pieces with a gold-colored finish. Opens with an S-lock security clasp. Exterior pocket with zipper. Three interior compartments. @Strap: Z05, with a strap drop of 48.0 cm and a maximum strap drop of 55.0 cm. @Handle: Z05",
        "categories":["Bags"],
        "colors": ["Blue"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Blue",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+11/PochetteMetis-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+11/PochetteMetis-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+11/PochetteMetis-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+11/PochetteMetis-Modelo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+11/PochetteMetis-Modelo2.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+11/PochetteMetisVideo.mp4"]
            }        
        ],
        "price": 3200,
        "stock": [
            {
                "color":"Blue",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Bella",
        "brand":"Louis Vuitton",
        "description":"This Bella bucket bag is crafted in Mahina calf leather adorned with Monogram flowers and features LV initials surrounded by over 60,000 unique perforations. The piece includes a coin purse, a braided handle, and an adjustable, removable leather strap. The model is enhanced with tone-on-tone leather trim and silver-colored metal pieces.",
        "specifications":"@Grey color, known as Gris Souris. @Made from @Perforated calfskin Mahina leather with @Calfskin leather edging. @Microfiber lining. @Metal pieces with a silver-colored finish. @Leather drawstring for securing belongings. @Round coin purse. Four @metal protective studs on the bag's base. @Strap: Z05, with a strap drop of 50.0 cm and a maximum strap drop of 56.0 cm. @Handle: Z02.",
        "categories":["Bags"],
        "colors": ["Grey"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Grey",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+12/Bella-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+12/Bella-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+12/Bella-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+12/Bella-zoom.webp"]
            }        
        ],
        "price": 4900,
        "stock": [
            {
                "color":"Grey",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Carmel",
        "brand":"Louis Vuitton",
        "description":"The Carmel hobo-style bag features a spacious interior ideal for storing essentials. This piece is crafted in supple Mahina leather and is enhanced with the Monogram motif surrounded by 120,000 perforations. The lightweight and soft design is perfect for everyday use and is completed with a braided top handle that allows it to be carried on the shoulder or in the crook of the arm.",
        "specifications":"@Grey color, known as Gris Souris. @Made from @Perforated calfskin Mahina leather. @Calfskin leather edging. @Microfiber lining. @Metal pieces with a silver-colored finish. @Closes with a magnetic clasp. Two compartments. Interior @pocket. Removable LV pendant crafted from leather. Identification tag. Four @metal protective studs on the bag's base. @Strap: Z01. @Handle: Z05.",
        "categories":["Bags"],
        "colors": ["Grey"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Grey",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+13/Carmel-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+13/Carmel-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+13/Carmel-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+13/Carmel-zoom.webp"]
            }        
        ],
        "price": 6040,
        "stock": [
            {
                "color":"Grey",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":" On My Side",
        "brand":"Louis Vuitton",
        "description":"The On My Side PM bag features a perforated motif of Monogram flowers and LV logos. The model is crafted in soft calf leather with hand-braided details on the front and back, as well as on the leather strap. This elegant piece is perfect for carrying with both formal and casual outfits.",
        "specifications":"@Coffe Arizona color. @Made from @Calfskin leather and perforated calfskin leather. @Leather edging. @Microfiber lining. @Metal pieces with a gold-colored finish. @Closes with a carabiner clasp. Two exterior pockets (front and back). Interior @pocket with zipper. Flat interior pocket. @Four metal protective studs at the bag's base. @Strap: Z04, with a strap drop of 49.0 cm. @Handle: Z06.",
        "categories":["Bags"],
        "colors": ["Brown"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Brown",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+14/OnMySide-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+14/OnMySide-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+14/OnMySide-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+14/OnMySide-zoom.webp"]
            }        
        ],
        "price": 5380,
        "stock": [
            {
                "color":"Brown",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Mini Pochette Accessoires",
        "brand":"Louis Vuitton",
        "description":"This stylish version of the Mini Pochette Accessories bag is crafted in natural cotton adorned with the Monogram motif in black and a matching leather trim. The tiny piece is perfect for carrying small everyday essentials. The model is completed with a secure closure, a snap hook, and a golden-toned chain that allows it to be attached to a bag or belt.",
        "specifications":"@Black color. @Lotus cotton. @Leather edging. @Microfiber lining. @Metal pieces with a gold-colored finish. @Chain with carabiner. @Strap: Z01. @Chain: Z02. @Chain drop: 15.0 cm. @Handle: Z01.",
        "categories":["Bags"],
        "colors": ["Black"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+15/MiniPochette-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+15/MiniPochette-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+15/MiniPochette-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Bags/Modelo+15/MiniPochette-reverse.webp"]
            }        
        ],
        "price": 1000,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"LV Trainer ",
        "brand":"Louis Vuitton",
        "description":"The iconic LV Trainer sneakers from Louis Vuitton's men's shoe collection are reinterpreted for the first time for women. The classic model created by Virgil Abloh is crafted in calf leather and draws inspiration from vintage basketball footwear. The design showcases LV initials and distinctive Vuitton elements made of rubber, and is elevated with Monogram flowers on the sole.",
        "specifications":"@Main part: calfskin leather and Monogram denim. @Rubber sole. @LV initials logo on the tongue, side, and back. @Vuitton emblem on the side. Monogram Flowers detail on the sole. @Item made in Italy." ,
        "categories":["Sneakers","Women"],
        "colors": ["Black" , "Blue"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+1/Negro/LVTrainer2.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+1/Negro/LVTrainer4.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+1/Negro/LVTrainer5.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+1/Negro/LVTrainer3.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+1/Negro/LVTRAINER.mp4"]
            },
            {
                "color":"Blue",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+1/Azul/LVTrainer2.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+1/Azul/LVTrainer4.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+1/Azul/LVTrainer5.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+1/Azul/LVTrainer3.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+1/Azul/LVTrainer1.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+1/Azul/LVtrainer.mp4"]
            }        
        ],
        "price": 1440,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            },
            {
                "color":"Blue",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"LV Trainer WT",
        "brand":"Louis Vuitton",
        "description":"The iconic LV Trainer sneakers from Louis Vuitton's men's shoe collection are reimagined for the first time for women. The classic model designed by Virgil Abloh is crafted in calf leather and draws inspiration from vintage basketball footwear. The design features LV initials and distinctive Vuitton elements made of rubber, while being elevated with Monogram flowers on the sole.",
        "specifications":"@White color. @Main part: calfskin leather. @Rubber sole. @LV initials logo on the tongue, side, and back. @Vuitton emblem on the side. Monogram Flowers detail on the sole. @Item made in Italy." ,
        "categories":["Sneakers","Women"],
        "colors": ["White"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"White",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+2/LVTrainer-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+2/LVTrainer-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+2/LVTrainer-vertical.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+2/LVTrainer-Suela.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+2/LVTrainerModelo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+2/LVTrainerVideo.mp4"]
            }        
        ],
        "price": 1440,
        "stock": [
            {
                "color":"White",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"LV Archlight",
        "brand":"Louis Vuitton",
        "description":"The LV Archlight sneakers showcase an iconic look from the Spring-Summer 2018 Collection. With a futuristic design, they feature an elastic rubber sole with a wavy shape. The oversized tongue with a low cut around the ankle gives this piece a delicate and feminine touch.",
        "specifications":"@Shiny Monogram Canvas and technical fabrics. @Rubber sole with extra thickness for added height (5 cm). @Rubber sole. @Item made in Italy." ,
        "categories":["Sneakers","Women"],
        "colors": ["Black","White"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+3/Negro/LVTrainerArchlight-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+3/Negro/LVTrainerArchlight-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+3/Negro/LVTrainerArchlight-up.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+3/Negro/LVTrainerArchlight-zoom.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+3/Negro/LVTrainerArchlight.mp4"]
            },
            {
                "color":"White",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+3/Blanco/LVTrainer-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+3/Blanco/LVTrainer-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+3/Blanco/LVTrainer-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+3/Blanco/LVTrainer-Modelo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+3/Blanco/LVTrainerModelo2.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+3/Blanco/LVTrainerArchlight.mp4"]
            }        
        ],
        "price": 1500,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            },
            {
                "color":"White",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"LV Archlight WHT",
        "brand":"Louis Vuitton",
        "description":"The versatile LV Archlight sneakers are reinterpreted in Monogram denim. This iconic model features a wavy sole, a feminine ankle cut, and an oversized tongue adorned with the LV Circle logo in rubber. The design is completed with a shiny Monogram Canvas loop at the back.",
        "specifications":"@Beige color. @Material: Monogram denim. @5 cm oversize sole made from rubber. @LV Circle logo engraved on the tongue and sole. @Loop crafted from Monogram Canvas patent leather. @Item made in Italy." ,
        "categories":["Sneakers","Women"],
        "colors": ["Beige"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Beige",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+4/LVTrainerArchlight-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+4/LVTrainerArchlight-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+4/LVTrainerArchlight-zoom.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+4/LVTrainerArchlight-modelo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+4/LVTrainerArchlight-modelo2.webp"]
            }        
        ],
        "price": 1500,
        "stock": [
            {
                "color":"Beige",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"LV Archlight BLCT",
        "brand":"Louis Vuitton",
        "description":"These LV Archlight sneakers, inspired by gothic aesthetics, are reinterpreted with an all-black design. The model is crafted in soft lambskin leather with exquisite pleating that reflects Louis Vuitton's expert craftsmanship in leatherwork. The piece stands out with its iconic wavy rubber sole in a glossy black tone.",
        "specifications":"@Black color. @Lambskin leather. @5 cm oversize rubber sole. @LV Circle logo on the sole and tongue. @Loop crafted from Monogram Canvas patent leather. @Item made in Italy." ,
        "categories":["Sneakers","Women"],
        "colors": ["Black"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+5/LVTrainerArchlight-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+5/LVTrainerArchlight-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+5/LVTrainerArchlight-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+5/LVTrainerArchlight-Modelo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+5/LVTrainerArchlight.mp4"]
            }        
        ],
        "price": 1440,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Run Away",
        "brand":"Louis Vuitton",
        "description":"The Run Away sneakers are Louis Vuitton's iconic take on running footwear. Crafted in supple calf leather and glossy Monogram Canvas, this model features a gold-tone metal plate and the LV Circle logo on the side. The discreet wedge-shaped sole adds a few extra centimeters of height.",
        "specifications":"@Calfskin and shiny Monogram Canvas. @White color. @Technical rubber sole. @Item made in Italy." ,
        "categories":["Sneakers","Women"],
        "colors": ["White"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"White",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+6/RunAway-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+6/RunAway-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+6/RunAway-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+6/RunAway-modelo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+6/RunAway-modelo2.webp"]
            }        
        ],
        "price": 2200,
        "stock": [
            {
                "color":"White",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Time Out",
        "brand":"Louis Vuitton",
        "description":"The Time Out sneakers are crafted in Louis Vuitton's signature Monogram Canvas. This model stands out with its modern elevated white rubber sole, adorned with a low relief Monogram flower pattern. It's completed with bright white laces and two engraved golden eyelets.",
        "specifications":"@Café cacao color. @Shiny Monogram Canvas. @Striated rubber sole. @Louis Vuitton emblem engraved on eyelets. Monogram Flowers on the sole. @Item made in Italy." ,
        "categories":["Sneakers","Women"],
        "colors": ["Brown"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Brown",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+7/TimeOut-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+7/TimeOut-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+7/TimeOut-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+7/TimeOut-Modelo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+7/TimeOut-Video.mp4"]
            }        
        ],
        "price": 1200,
        "stock": [
            {
                "color":"Brown",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Time Out LV WH",
        "brand":"Louis Vuitton",
        "description":"The Time Out sneakers are reimagined in soft calf leather, featuring the distinctive Louis Vuitton signature and Monogram motif engraved. This design includes a recycled Monogram nylon trim at the back. The piece is completed with an elevated rubber sole adorned with a three-dimensional Monogram flower motif.",
        "specifications":"@White color. @Embossed calfskin and recycled Monogram nylon. @Striated rubber sole. @Louis Vuitton emblem engraved on eyelets. Monogram Flowers on the sole. @Item has been made in Italy." ,
        "categories":["Sneakers","Women"],
        "colors": ["White"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"White",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+8/TimeOut-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+8/TimeOut-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+8/TimeOut-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+8/TimeOut-brand.webp"]
            }        
        ],
        "price": 1440,
        "stock": [
            {
                "color":"White",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Run 55",
        "brand":"Louis Vuitton",
        "description":"The Run 55 sneakers, taking inspiration from racing footwear, present a sporty design characterized by Monogram Canvas. The model's distinctive feature lies in its upper, which is crafted using layers of technical materials, along with an elevated sole that offers improved cushioning and comfort. The sneakers are further enhanced by Monogram detailing on the sides, and LV initials are engraved on both the front and back.",
        "specifications":"@Black color. @Blend of materials. @Elevated rubber sole. @LV Circle motif on the tongue. @Louis Vuitton emblem engraved on eyelets. @Monogram tape on the sides. @LV initials engraved on the front. @Louis Vuitton emblem, LV initials, and Monogram Flowers motif engraved on the back. LV initials and Monogram Flowers ornament beneath the sole. @Item made in Italy." ,
        "categories":["Sneakers","Women"],
        "colors": ["Black"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+9/Run55-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+9/Run55-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+9/Run55-up.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+9/Run55-zoom.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+9/Run55-Video.mp4"]
            }        
        ],
        "price": 1440,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Frontrow",
        "brand":"Louis Vuitton",
        "description":"The timeless Louis Vuitton Frontrow sneakers are interpreted in the iconic Monogram canvas, instantly recognizable. The addition of black patent calf leather accents and the golden metal Louis Vuitton signature on the sole complement this stylish design, featuring clean lines inspired by classic tennis shoes.",
        "specifications":"@Monogram patent canvas and patent calfskin leather. @Rubber sole. @Item made in Italy." ,
        "categories":["Sneakers","Women"],
        "colors": ["Brown"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Brown",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+10/Frontrow-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+10/Frontrow-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+10/Frontrow-modelo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+10/Frontrow-modelo2.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+10/Frontrow-zoom.webp"]
            }        
        ],
        "price": 1160,
        "stock": [
            {
                "color":"Brown",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Frontrow WHT",
        "brand":"Louis Vuitton",
        "description":"The iconic Frontrow sneakers are reinterpreted in a summery style, crafted from soft calf leather and Damier Azur canvas. This timeless design features the distinctive Louis Vuitton logo engraved on the gold-tone eyelets and embossed on the sole with a metallic finish. The elegant piece is finished with a leather trim at the back.",
        "specifications":"@Azure blue color. @Calfskin and Damier Azur Canvas. @Rubber sole. @Embossed Louis Vuitton emblem on eyelets. @Louis and Vuitton accessories on the laces. @Louis Vuitton emblem engraved on the tongue and sole. @Item has been made in Italy." ,
        "categories":["Sneakers","Women"],
        "colors": ["White"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"White",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+11/Frontrow-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+11/Frontrow-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+11/Frontrow-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+11/Frontrow-zoom.webp"]
            }        
        ],
        "price": 1380,
        "stock": [
            {
                "color":"White",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Lous",
        "brand":"Louis Vuitton",
        "description":"This edition of the Lous sneakers, crafted in gray Monogram denim fabric, coordinates with items from the Cruise 2023 leather goods collection. The model features double thick cotton laces and a comfortable padded tongue made from soft napa leather. It's completed with a flexible rubber sole and elastic inserts that make them easy to slip on.",
        "specifications":"@Grey color. @Monogram denim fabric. @Double laces. @Padded tongue. @Elastic for a comfortable fit. @Rubber sole. @Louis Vuitton emblem on the sole. @Item has been made in Italy." ,
        "categories":["Sneakers","Women"],
        "colors": ["Gray"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Gray",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+12/Lous-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+12/Lous-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+12/Lous-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+12/Lous-p.webp"]
            }        
        ],
        "price": 1330,
        "stock": [
            {
                "color":"Gray",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Run Away Bl",
        "brand":"Louis Vuitton",
        "description":"The Run Away sneakers are reimagined this season in a summery style featuring Monogram denim fabric and exquisite metallic leather and suede trims. The model showcases a silver stabilizer with an engraved LV Circle logo, also present on the side. This design is completed with a wedge sole and a hidden insole to increase height.",
        "specifications":"@Denim blue color. @Main part: Monogram denim. @Hidden 2 cm height insole. @Technical rubber sole. @LV Circle logo on the side and back. @Louis Vuitton emblem engraved on eyelets. @Item has been made in Italy." ,
        "categories":["Sneakers","Women"],
        "colors": ["Blue"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Blue",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+13/RunAway-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+13/RunAway-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+13/RunAway-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+13/RunAway-brand.png"]
            }        
        ],
        "price": 1230,
        "stock": [
            {
                "color":"Blue",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Time Out LV x YK",
        "brand":"Louis Vuitton",
        "description":"The Time Out LV x YK sneakers belong to the Louis Vuitton x Yayoi Kusama collection and are crafted in soft calf leather. This special edition features the renowned Infinity Dots design by the Japanese artist. The iconic and feminine design from the Maison showcases an elevated rubber sole adorned with three-dimensional Monogram flowers.",
        "specifications":"@White color. @Embossed calfskin leather. @Striated rubber sole. @Louis Vuitton emblem engraved on eyelets. Monogram Flowers on the sole. @Item has been made in Italy." ,
        "categories":["Sneakers","Women"],
        "colors": ["White"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"White",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+14/TimeOutLVxYK-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+14/TimeOutLVxYK-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+14/TimeOutLVxYK-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+14/TimeOutLVxYK-modelo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+14/TimeOutLVxYK-modelo2.webp"]
            }        
        ],
        "price": 1550,
        "stock": [
            {
                "color":"White",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"LV x YK Tenis Time Out",
        "brand":"Louis Vuitton",
        "description":"The Time Out LV x YK sneakers are part of the Louis Vuitton x Yayoi Kusama collection, stemming from the second major collaboration between the Maison and the Japanese artist. The design showcases an original combination of the classic Monogram Canvas and the Pumpkins print, a recurring theme in the artist's work. The iconic model features engraved gold-tone eyelets and an elevated rubber sole.",
        "specifications":"@Café cacao color. @Embossed Monogram Canvas patent leather. @Striated rubber sole. @Embossed Louis Vuitton emblem on eyelets. Monogram Flowers on the sole. @Item has been made in Italy.",
        "categories":["Sneakers","Women"],
        "colors": ["Brown"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Brown",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+15/TimeOutLVxYK-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+15/TimeOutLVxYK-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+15/TimeOutLVxYK-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+15/TimeOutLVxYK-modelo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Mujer/Mujer/Modelo+15/TimeOutLVxYK-modelo2.jpg"]
            }        
        ],
        "price": 1990,
        "stock": [
            {
                "color":"Brown",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Madeleine court shoe  ",
        "brand":"Louis Vuitton",
        "description":"The Madeleine pump, made of shiny Monogram Canvas, is a classic Louis Vuitton design. This piece features a round toe and a wide, chunky heel, which gives it a vintage touch. The upper is enhanced with an elegant oversize LV Circle embellishment in gold-colored metal. ",
        "specifications":"@Glossy Monogram Canvas, Leather sole, @7.5cm heel " ,
        "categories":["Heels", "Women"],
        "colors": ["Brown" ],
        "sizes": ["35","35.5","36","36.5", "37", "37.5", "38", "38.5", "39", "39,5","40", "40,5", "41"],
        "images":[
            {
                "color":"Brown",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/1/1.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/1/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/1/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/1/4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/1/5.avif"]
            }
            
        ],
        "price": 1000 ,
        "stock": [
            {
                "color":"Brown",
                "stock":100,
                "sold":0
            }            
        ]
    },
    {
        "name":"Shake slingback court shoe",
        "brand":"Louis Vuitton",
        "description":"This version of the Shake slingback pump is crafted in Louis Vuitton's iconic Epi patent leather. This model stands out for its modern lines and high, wide, V-shaped heel. The design is completed with an oversize LV initials decoration in the same tone on the instep and an elastic strap at the back for easy adjustment.",
        "specifications":"@Epi Leather Patent, @Lining made of lambskin, @Elastic strap, Leather sole,@8,5cm heel, @LV logo accesory",
        "categories":["Heels", "Women"],
        "colors": ["Pink"],
        "sizes": ["35","35.5","36","36.5", "37", "37.5", "38", "38.5", "39", "39,5","40", "40,5", "41"],
        "images":[
            {
                "color":"Pink",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/2/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/2/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/2/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/2/4.avif"]
            }
                 
        ],
        "price": 1200 ,
        "stock": [
            {
                "color":"Pink",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Cherie slingback shoe ",
        "brand":"Louis Vuitton",
        "description":"The Cherie court shoe updates a classic Louis Vuitton design with its feminine slingback design. The piece combines Monogram Canvas with black patent leather and shows off a thin strap that is adjusted with a small golden buckle. Its leather sole shows off a rubber insert to provide greater resistance.",
        "specifications":"@Canvas Monogram in patent leather and patent calfskin, @Black, Leather sole, @6.5 cm heel, @Made in Italy" ,
        "categories":["Heels", "Women"],
        "colors": ["Black" ],
        "sizes": ["35","35.5","36","36.5", "37", "37.5", "38", "38.5", "39", "39,5","40", "40,5", "41"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/3/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/3/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/3/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/3/4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/3/5.avif"]
            }       
        ],
        "price":1050  ,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Archlight slingback court shoe ",
        "brand":"Louis Vuitton",
        "description":"The Archlight slingback court shoe features a combination of soft lambskin and shiny patent leather that creates an eye-catching colour-block design. The model features sporty details, such as mesh inserts, House motifs and a wavy rubber sole, inspired by the iconic LV Archlight sneakers. The piece is completed with a velcro strap at the back and a high stiletto heel.  ",
        "specifications":"@Lambskin and patent leather,  @Velcro adjustable strap,  @flexible rubber sole,  @9cm heel, LV Circle Logo,  @Louis Vuitton signature on the strap,  @made in Italy " ,
        "categories":["Heels", "Women"],
        "colors": ["White" ],
        "sizes": ["35","35.5","36","36.5", "37", "37.5", "38", "38.5", "39", "39,5","40", "40,5", "41"],
        "images":[
            {
                "color":"White",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/4/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/4/2.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/4/3.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/4/4.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/4/5.avif"]
            }       
        ],
        "price": 1220 ,
        "stock": [
            {
                "color":"White",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Blossom flat ballerina ",
        "brand":"Louis Vuitton",
        "description":"The Blossom flat ballerina is made of shiny patent leather. This shoe features a feminine point-toe design with an oversized bow inspired by the Louis Vuitton archives. The piece shows off a stud and a metallic heel embellished with the initials LV.",
        "specifications":"@Main part: patent leather,    @Leather sole, @LV initials logo stud, @LV initials embellishment on the heel, @The item is @made in Italy " ,
        "categories":["Heels", "Women"],
        "colors": ["Black" ],
        "sizes": ["35","35.5","36","36.5", "37", "37.5", "38", "38.5", "39", "39,5","40", "40,5", "41"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/5/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/5/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/5/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/5/4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/5/5.avif"]
            }       
        ],
        "price":1200 ,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Blossom slingback court shoe",
        "brand":"Louis Vuitton",
        "description":"This elegant Blossom court shoe in goatskin suede features a slingback design. The model features an adjustable strap at the back, made of the Maison's emblematic natural leather, which is enhanced with a gold-coloured stud engraved with the Louis Vuitton signature. The piece is completed with a heel that matches the instep, inspired by the Monogram flower with rounded edges.",
        "specifications":"@Goatskin suede,Strap made of natural leather,@Leather sole,@7.5cm heel,@Louis Vuitton signature engraved on the strap,@made in Italy" ,
        "categories":["Heels", "Women"],
        "colors": ["Red"],
        "sizes": ["35","35.5","36","36.5", "37", "37.5", "38", "38.5", "39", "39,5","40", "40,5", "41"],
        "images":[
            {
                "color":"Red",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/6/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/6/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/6/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/6/4.png"]
            }       
        ],
        "price":1200  ,
        "stock": [
            {
                "color":"Red",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Shake slingback court shoe",
        "brand":"Louis Vuitton",
        "description":"The Shake slingback court shoe is crafted in soft lambskin and features a high, chunky, V-shaped heel. In this edition, the heel is decorated with the Malletage crisscross pattern, inspired by the lining of Louis Vuitton trunks. The elegant design is completed by a chunky gold LV initials embellishment on the front.",
        "specifications":"@Main part: lambskin, elastic bracelet,Leather sole, 8.5 cm heel, @LV logo accessory, @Iconic malletage motif on the heel,  @made in Italy " ,
        "categories":["Heels", "Women"],
        "colors": ["Black"],
        "sizes": ["35","35.5","36","36.5", "37", "37.5", "38", "38.5", "39", "39,5","40", "40,5", "41"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/7/1.avif" , "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/7/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/7/3.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/7/4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/7/5.avif"]
            }       
        ],
        "price": 1250 ,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Sparkle slingback court shoe ",
        "brand":"Louis Vuitton",
        "description":"The Sparkle slingback court shoe is made of smooth calf leather and is characterized by its exquisite details. The model sports a chain with the engraved Monogram motif inspired by the Coussin bag. The design features an elegant mid-heel with a metal insert bearing the LV initials and is finished with a pointed toe and a leather sole.",
        "specifications":"@Calfskin, elastic band, @Sole made of leather, @6.5 cm high heel, @Embossed Monogram Chain, @LV initials embellishment on the heel, @The item is @made in Italy",
        "categories":["Heels", "Women"],
        "colors": ["Black"],
        "sizes": ["35","35.5","36","36.5", "37", "37.5", "38", "38.5", "39", "39,5","40", "40,5", "41"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/8/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/8/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/8/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/8/4.avif", ""]
            }       
        ],
        "price":1300 ,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Shake slingback court shoe ",
        "brand":"Louis Vuitton",
        "description":"The Shake slingback court shoe is reinterpreted this season in Epi patent leather that combines a shiny finish with the grain of Louis Vuitton's iconic leather. This striking model stands out for its high, wide, V-shaped heel. The design is completed with a thick embellishment of LV initials in a matching color on the instep.",
        "specifications":"@Patent leather Epi calfskin, @Lining made of lambskin , @elastic strap , @Leather sole , @9.5cm heel , @LV logo accessory, @The item is @made in Italy ",
        "categories":["Heels", "Women"],
        "colors": ["Black" ],
        "sizes": ["35","35.5","36","36.5", "37", "37.5", "38", "38.5", "39", "39,5","40", "40,5", "41"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/9/1.avif" , "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/9/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/9/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/9/4.avif"]
            }       
        ],
        "price": 1250 ,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Sparkle court shoe",
        "brand":"Louis Vuitton",
        "description":"Crafted in soft lambskin, the Sparkle court shoe features clean lines. This elegant model stands out for its pointed toe and its striking flared high heel. The design is completed with a gold-coloured metal insert embellished with the engraved initials LV. ",
        "specifications":"@lamb skin, Sole made of leather , @9.5cm heel , @LV initials embellishment on the heel , @made in Italy" ,
        "categories":["Heels", "Women"],
        "colors": ["Pink" ],
        "sizes": ["35","35.5","36","36.5", "37", "37.5", "38", "38.5", "39", "39,5","40", "40,5", "41"],
        "images":[
            {
                "color":"Pink",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/10/1.avif" , "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/10/2.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/10/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/10/4.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/10/5.png"]
            }       
        ],
        "price":1200  ,
        "stock": [
            {
                "color":"Pink",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Sparkle slingback court shoe ",
        "brand":"Louis Vuitton",
        "description":"The Sparkle slingback court shoe is elegantly crafted in supple calf leather. The model stands out for its pointed toe and its feminine flared heel. The piece is enhanced with silver-tone hardware, Louis Vuitton signature on the elastic strap and an engraved LV Circle logo on the heel. ",
        "specifications":"@Calfskin, @elastic back strap , @leather sole , @9.5cm heel , @Louis Vuitton signature on strap ,@LV Circle logo on heel, @made in Italy " ,
        "categories":["Heels", "Women"],
        "colors": ["Pink" ],
        "sizes": ["35","35.5","36","36.5", "37", "37.5", "38", "38.5", "39", "39,5","40", "40,5", "41"],
        "images":[
            {
                "color":"Pink",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/11/1.avif" , "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/11/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/11/3.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/11/4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/11/5.avif"]
            }       
        ],
        "price": 1400 ,
        "stock": [
            {
                "color":"Pink",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Star Trail court shoe ",
        "brand":"Louis Vuitton",
        "description":"Crafted in glossy calfskin, the Star Trail court shoe is the season's reinterpretation of one of Louis Vuitton's most distinctive styles. This feminine design features a strap with a buckle decorated with gold studs in the shape of a Monogram. The model features a high heel and a grooved rubber sole, which are characteristic elements of the Star Trail line.",
        "specifications":"@shiny calfskin, @Grooved rubber sole , @9.5cm heel , @Engraved Monogram Studs, @Buckle engraved with the Louis Vuitton hallmark , Shiny Monogram Canvas Clip ,  @made in Italy" ,
        "categories":["Heels", "Women"],
        "colors": ["Black"],
        "sizes": ["35","35.5","36","36.5", "37", "37.5", "38", "38.5", "39", "39,5","40", "40,5", "41"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/12/1.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/12/2.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/12/3.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/12/4.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/12/5.avif"]
            }       
        ],
        "price": 1410 ,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Urban Twist court shoe",
        "brand":"Louis Vuitton",
        "description":"The Urban Twist court shoe is a renewed and elegant version of the classic Tennis. It's made of smooth calfskin and it shows off a striking silver metallic toecap. The emblematic engraved LV Circle logo gives the piece the distinctive Louis Vuitton touch. ",
        "specifications":"@Calfskin, @leather sole , @10.5cm heel ,  @made in Italy" ,
        "categories":["Heels", "Women"],
        "colors": ["White"],
        "sizes": ["35","35.5","36","36.5", "37", "37.5", "38", "38.5", "39", "39,5","40", "40,5", "41"],
        "images":[
            {
                "color":"White",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/13/1.avif" , "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/13/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/13/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/13/4.avif"]
            }       
        ],
        "price": 1100 ,
        "stock": [
            {
                "color":"White",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Mansion slingback court shoe",
        "brand":"Louis Vuitton",
        "description":"The Mansion slingback court shoe, made of smooth calfskin, shows off a feminine design thanks to its details such as the high heel and pointed toe. On the instep is a dainty gold-tone anklet with an LV Circle pendant. This shoe is completed with an adjustable back strap and a cushioned insole for added comfort.",
        "specifications":"@Calfskin, @leather sole , @9cm heel , @LV Circle Logo , @made in Italy" ,
        "categories":["Heels", "Women"],
        "colors": ["Black" ],
        "sizes": ["35","35.5","36","36.5", "37", "37.5", "38", "38.5", "39", "39,5","40", "40,5", "41"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/14/1.avif" , "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/14/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/14/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/14/4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/14/5.avif"]
            }       
        ],
        "price": 1270 ,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Brown Monogram Canvas Lock It Sandals Size  ",
        "brand":"Louis Vuitton",
        "description":"Crafted in soft lambskin, the Sparkle court shoe features clean lines. This elegant model stands out for its pointed toe and its striking flared high heel. The design is completed with a gold-coloured metal insert embellished with the engraved initials LV. ",
        "specifications":"@Canvas exterior, @Insole Leather, @Leather sole, @Item @made in Italy " ,
        "categories":["Heels", "Women"],
        "colors": ["Brown"],
        "sizes": ["35","35.5","36","36.5", "37", "37.5", "38", "38.5", "39", "39,5","40", "40,5", "41"],
        "images":[
            {
                "color":"Brown",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/15/1.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/15/2.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/15/3.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/HEELS/15/4.jpg", ""]
            }       
        ],
        "price": 1400 ,
        "stock": [
            {
                "color":"Brown",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"LV Malletage Cat Eye Sunglasses",
        "brand":"Louis Vuitton",
        "description":"The sophisticated look of the new LV Malletage Cat Eye Sunglasses recalls the diamond pattern of the padding lining Louis Vuitton’s historic trunks. The golden metal Malletage studs on the hand-assembled temples come engraved with the LV Initials for a refined signature touch.",
        "specifications":"@Metal and acetate frame, @Full Brown lenses, @Hand-assembled LV-engraved Malletage studs on the temples, @Malletage frontal signature, @Transmittance:25% , @UV Protection:100%" ,
        "categories":["Sunglasses", "Women"],
        "colors": ["White"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"White",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/1/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/1/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/1/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/1/4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/1/5.avif"]
            }       
        ],
        "price":925,
        "stock": [
            {
                "color":"White",
                "stock":100,
                "sold":0
            }
        ]
    }, 
    {
        "name":"LV Malletage Sunglasses ",
        "brand":"Louis Vuitton",
        "description":"he sophisticated look of the new LV Malletage Cat Eye Sunglasses recalls the diamond pattern of the padding lining Louis Vuitton’s historic trunks. The golden metal Malletage studs on the hand-assembled temples come engraved with the LV Initials for a refined signature touch. With their classic feminine shape, these sunglasses are flattering to the face and easy on the eyes.",
        "specifications":"@Metal and acetate frame, @Full Brown lenses, @Hand-assembled LV-engraved Malletage studs on the temples, @Malletage frontal signature, @Transmittance:25% , @UV Protection:100%" ,
        "categories":["Sunglasses", "Women"],
        "colors": ["Black"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/2/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/2/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/2/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/2/4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/2/5.avif"]
            }       
        ],
        "price":925,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    }, 
    {
        "name":"LV First Metal Cat Eye Sunglasses",
        "brand":"Louis Vuitton",
        "description":"The LV First Metal Cat Eye Sunglasses update a classic feminine frame shape with a contemporary design. The refinement of the ultra-light golden metal rims and end tips complements the round temples, lined with the House’s iconic Monogram canvas",
        "specifications":"@Blue gradient lenses, @Signature Monogram canvas on the round tube temples, @Transmittance:25%, @UV Protection:100%, @Filter Category:2" ,
        "categories":["Sunglasses", "Women"],
        "colors": ["Gold"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Gold",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/3/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/3/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/3/3.avif"]
            }       
        ],
        "price":680 ,
        "stock": [
            {
                "color":"Gold",
                "stock":100,
                "sold":0
            }
        ]
    }, 
    {
        "name":"LV Monogram Pearl Cat Eye Sunglasses",
        "brand":"Louis Vuitton",
        "description":"With their flattering cat eye shape, the new LV Monogram Pearl sunglasses feature a sophisticated signature. The temples are adorned with pearl-like insets, one with a Monogram Flower and the other with the LV Initials. There is a subtle beautifying detail: the gold-finish metal of the temples extends over the rims, catching the light to illuminate the face.",
        "specifications":"@Black gradient lenses, @Monogram Flower inset on the right temple, @LV Initials inset on the left temple, @Engraved Monogram Flower detail on the end tips, @Transmittance:21%, @UV protection:100%, @Filter Category:2" ,
        "categories":["Sunglasses", "Women"],
        "colors": ["Black"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/4/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/4/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/4/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/4/4.avif"]
            }       
        ],
        "price": 715,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    }, 
    {
        "name":"LV Moon Pearl Square Sunglasses",
        "brand":"Louis Vuitton",
        "description":"The LV Moon Pearl Square sunglasses offer a sophisticated shape enhanced by luxurious detailing. The sides of the rims are accentuated by metal inserts inspired by the chain links of the Coussin bag, in this animation of the iconic model, theses inserts are encrusted with precious white resin pearls. A high-contrast look that beautifies the face with an interplay of light and shadow.",
        "specifications":"@Metal and acetate frame, @Gradient lenses, @Gold-color hardware, @White resin pearls set in the metal inserts, @Transmittance:28%, @UV Protection:100%, @Filter Category:2" ,
        "categories":["Sunglasses", "Women"],
        "colors": ["Black"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/5/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/5/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/5/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/5/4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/5/5.avif"]
            }       
        ],
        "price": 840 ,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    }, 
    {
        "name":"LV Moon Metal Square Sunglasses",
        "brand":"Louis Vuitton",
        "description":"A new take on the LV Moon signature, the LV Moon Metal Square sunglasses bring a fashion-forward spirit to a classic lens shape. The sleek rimless design features gold-tone metal side attachments finely engraved with the LV Initials and Monogram Flowers, modeled after the chain of the House’s iconic Coussin handbag. A sophisticated way to frame the face with a rich yet subtle signature look.",
        "specifications":"@Metal and acetate frame, @Gradient lenses, @Gold-color hardware, @White resin pearls set in the metal inserts, @Transmittance:28%, @UV Protection:100%, @Filter Category:2" ,
        "categories":["Sunglasses", "Women"],
        "colors": ["Gold"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Gold",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/6/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/6/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/6/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/6/4.avif"]
            }       
        ],
        "price": 745,
        "stock": [
            {
                "color":"Gold",
                "stock":100,
                "sold":0
            }
        ]
    }, 
    {
        "name":"LV Moon Metal Cat Eye Sunglasses",
        "brand":"Louis Vuitton",
        "description":"A new take on the LV Moon signature, the LV Moon Metal Cat Eye sunglasses bring a fashion-forward spirit to a classic lens shape. The sleek rimless design features gold-tone metal side attachments finely engraved with the LV Initials and Monogram Flowers, modeled after the chain of the House’s iconic Coussin handbag.",
        "specifications":"@Metal and acetate frame, @Gradient lenses, @Gold-color hardware, @White resin pearls set in the metal inserts, @Transmittance:28%, @UV Protection:100%, @Filter Category:2" ,
        "categories":["Sunglasses", "Women"],
        "colors": ["Gold"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Gold",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/7/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/7/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/7/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/7/4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/7/5.avif"]
            }       
        ],
        "price": 745,
        "stock": [
            {
                "color":"Gold",
                "stock":100,
                "sold":0
            }
        ]
    }, 
    {
        "name":"LV Pearl Cat Eye Sunglasses",
        "brand":"Louis Vuitton",
        "description":"Introducing the LV Pearl eyewear family, a delicate and sophisticated signature inspired by the delicate beauty of the pearl. Here offered in a modern cat eye shape. The ultra-slim metal rims are lined with lustrous white resin pearls, echoed by a larger pearl on each temple bearing the LV initials signature.",
        "specifications":"@Metal frame, @Gradient lenses, @White resin pearls set in the rims, @Pearl with LV signature on the temples, @Monogram Flower detail on the end tips" ,
        "categories":["Sunglasses", "Women"],
        "colors": ["Gold"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Gold",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/8/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/8/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/8/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/8/4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/8/5.avif"]
            }       
        ],
        "price":885 ,
        "stock": [
            {
                "color":"Gold",
                "stock":100,
                "sold":0
            }
        ]
    }, 
    {
        "name":"LV Glam Square Sunglasses",
        "brand":"Louis Vuitton",
        "description":"The LV Glam Square sunglasses bring a delicate touch of charm to the Louis Vuitton eyewear collection. Set in a sleek, ultra-light metal frame, the oversized lenses have varnished edges for an extra glint of color. The crystal Monogram Flower on one lens and a removable LV Initials charm add a playful signature. Here offered in black for a sleek look.",
        "specifications":"@Gold-color metal frame, @Gradient lenses with varnished edges, @Engraved Louis Vuitton signature on the temples, @Crystal Monogram Flower detail on the left lens, @Removable LV Initials charm, @Pouch for storing removable charms, @Transmittance:16%, @UV Protection:100%, @Filter Category:3" ,
        "categories":["Sunglasses", "Women"],
        "colors": ["Black"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/9/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/9/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/9/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/9/4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/9/5.avif"]
            }       
        ],
        "price": 800 ,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    }, 
    {
        "name":"LV First Metal Square Sunglasses",
        "brand":"Louis Vuitton",
        "description":"This new square model joins the LV First family of stylish sunglasses. An ultra-light frame in gold-colour metal accentuates the squared-off lenses, complementing the round temples lined with the House’s emblematic Monogram canvas. With their timeless yet modern shape paired with classic brown lenses, these sunglasses combine everyday elegance with an understated signature touch.",
        "specifications":"@ight Brown gradient lenses, @Signature Monogram canvas lining on the tube temples, @Transmittance:30%, @UV Protection:100%, @Filter Category:2" ,
        "categories":["Sunglasses", "Women"],
        "colors": ["Brown"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Brown",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/10/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/10/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/10/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/10/4.avif"]
            }       
        ],
        "price":680 ,
        "stock": [
            {
                "color":"Brown",
                "stock":100,
                "sold":0
            }
        ]
    }, 
    {
        "name":"LV Star Square Sunglasses",
        "brand":"Louis Vuitton",
        "description":"The LV Star Square sunglasses offer an updated take on the classic square shape with a subtle cat eye. A pointed Monogram Flower at the center of the pair is offset by slender hardware frames. Other House touches include Monogram Flower signatures on the temples, nose pads and acetate tips.",
        "specifications":"@Gradient Blue and Orange lenses, @Square shape, @Monogram Flower on bridge, @Monogram Flowers on nose pads and acetate tips, @Monogram Flower engraving on temples, @Transmittance:20%, @UV Protection:100%, @Filter Category:2" ,
        "categories":["Sunglasses", "Women"],
        "colors": ["Silver"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Silver",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/11/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/11/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/11/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/11/4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/11/5.avif"]
            }       
        ],
        "price": 705,
        "stock": [
            {
                "color":"Silver",
                "stock":100,
                "sold":0
            }
        ]
    }, 
    {
        "name":"LV Halo Square Sunglasses",
        "brand":"Louis Vuitton",
        "description":"New for Spring-Summer 2023, the LV Halo Square Sunglasses combine a contemporary shape with an iconic Louis Vuitton look. The House’s historic Monogram pattern is featured in fine engraving on the temples and a subtle flash around the lenses, accentuated by the ultra-light rimless design. A Monogram Flower detail on the end tips adds a final signature flourish.",
        "specifications":"@Metallic Blue gradient lenses, @Subtle Monogram flash around the lenses, @Monogram Flowers and LV Initials engraved on the temples, @Monogram Flower detail on the end tips, @Transmittance:14%, @UV Protection:100%, @Filter Category:3" ,
        "categories":["Sunglasses", "Women"],
        "colors": ["Blue"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Blue",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/12/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/12/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/12/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/12/4.avif"]
            }       
        ],
        "price": 595 ,
        "stock": [
            {
                "color":"Blue",
                "stock":100,
                "sold":0
            }
        ]
    }, 
    {
        "name":"LV Moon Square Sunglasses",
        "brand":"Louis Vuitton",
        "description":"A summery animation of the iconic LV Moon Square sunglasses. The engraved golden inserts inspired by the Coussin Bag's chain links are complimented by the milky pink colorway.",
        "specifications":"@Acetate, @Gold-color metal, @Gradient lenses, @Engraved LV Initials and Monogram Flowers on the metal inserts, @Transmittance:23%, @UV Protection:100%, @Filter Category:2" ,
        "categories":["Sunglasses", "Women"],
        "colors": ["Pink"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Pink",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/13/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/13/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/13/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/13/4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/13/5.avif"]
            }       
        ],
        "price": 675,
        "stock": [
            {
                "color":"Pink",
                "stock":100,
                "sold":0
            }
        ]
    }, 
    {
        "name":"LV Moon Rectangular Sunglasses",
        "brand":"Louis Vuitton",
        "description":"The LV Moon Rectangular sunglasses are imbued with modern femininity. The bold, frames feature metal detailing finely engraved with Monogram motif,a signature inspired by the Coussin Bag's chain links. A classic Louis Vuitton signature can also be found along the inside of the temples.",
        "specifications":"@Black frame, @Gold-color hardware, @Rectangular shape, @Monogram engraving, @Transmittance:17%, @UV Protection:100%, @Filter Category:3" ,
        "categories":["Sunglasses", "Women"],
        "colors": ["Black"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/14/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/14/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/14/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/14/4.avif"]
            }       
        ],
        "price": 650 ,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    }, 
    {
        "name":"LV Moon Cat Eye Sunglasses",
        "brand":"Louis Vuitton",
        "description":"The LV Moon Cat Eye sunglasses reinterpret a classic style with new sparkling accents. The acetate frame features an angular cat-eye shape encrusted with light-reflecting crystals at the edges. Subtle House motifs, including a Louis Vuitton signature on the temple, an LV Circle on the inner hinges and Monogram Flowers on the tips complete this dazzling design.",
        "specifications":"@Cat-eye shape, @Silver-toned hardware, @Louis Vuitton signature on temple, @LV Circle on inner hinge, @Monogram Flowers on tips, @Transmittance:13%, @UV Protection:100%, @Filter Category:3" ,
        "categories":["Sunglasses", "Women"],
        "colors": ["Black"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/15/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/15/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/15/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sunglasses/15/4.avif"]
            }       
        ],
        "price": 745,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
      "name":"LV Stellar Bracelet",
      "brand":"Louis Vuitton",
      "description":"The LV Stellar bracelet demonstrates the innovative design that can be seen across the Spring-Summer 2023 fashion jewelry collection. The centerpiece is an LV Circle presented in a three-dimensional effect that creates a sense of movement. An adjustable chain complete with a small charm completes this polished metal piece. ",
      "specifications":"@length: 8.7 in/22 cm adjustable, @5.9 in/15 cm, @@LV Circle, @Metal with gold-color finish, @Clasp closure" ,
      "categories":["Accesories", "Women"],
      "colors": ["Gold" ],
      "sizes": ["Default"],
      "images":[
          {
              "color":"Gold",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/1/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/1/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/1/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/1/4.avif"]
          }       
      ],
      "price":530 ,
      "stock": [
          {
              "color":"Gold",
              "stock":100,
              "sold":0
          }
      ]
  }, 
  {
      "name":"LV Twiggy Bracelet",
      "brand":"Louis Vuitton",
      "description":"Sharp angles give this version of the LV Twiggy bracelet a contemporary edge. The focal point of the design is an interpretation of the House's pointed Monogram Flower, which recalls the tri-flower buckle of the coordinating LV Twiggy belt. ",
      "specifications":"@Length: 6.1 in/15.5 cm adjustable, @8.5 in/21.5 cm, @Metal with gold-color finish, @Monogram Flower, @LV Circle charms, @Clasp closure",
      "categories":["Accesories", "Women"],
      "colors": ["Gold"],
      "sizes": ["Default"],
      "images":[
          {
              "color":"Gold",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/2/1.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/2/2.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/2/3.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/2/4.webp"]
          }       
      ],
      "price": 440,
      "stock": [
          {
              "color":"Gold",
              "stock":100,
              "sold":0
          }
      ]
  }, 
  {
      "name":"LV Circle Reversible Bracelet ",
      "brand":"Louis Vuitton",
      "description":"Characterized by iconic Monogram canvas and gold-color metal trunk studs, the LV Circle reversible bracelet pays homage to Louis Vuitton's history. Smooth and refined calf leather, along with a metallic clasp, creates a polished look. An LV Circle engraved on the front adds a final House hallmark to this design.",
      "specifications":"@Metal with gold-color finish, @Black calf leather recto side, @Monogram canvas verso side, @LV Circle" ,
      "categories":["Accesories", "Women"],
      "colors": ["Black" ],
      "sizes": ["Default"],
      "images":[
          {
              "color":"Black",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/3/1.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/3/2.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/3/3.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/3/4.jpeg"]
          }       
      ],
      "price": 560 ,
      "stock": [
          {
              "color":"Black",
              "stock":100,
              "sold":0
          }
      ]
  }, 
  {
      "name":"Pillow Nanogram Bracelet",
      "brand":"Louis Vuitton",
      "description":"The Pillow Nanogram bracelet features the Nanogram pattern carefully engraved into the finished metal. With a rigid bangle style, this piece of jewelry opens and closes using a hinged fastening. The elevated item takes inspiration from the Coussin handbag and its puffy texture, which is embossed with the House's Monogram pattern.",
      "specifications":"@Metal with silver-color finish, @Nanogram pattern, @Louis Vuitton signature engraving",
      "categories":["Accesories", "Women"],
      "colors": ["Silver"],
      "sizes": ["Default"],
      "images":[
          {
              "color":"Silver",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/4/1.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/4/2.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/4/3.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/4/4.webp"]
          }       
      ],
      "price":358  ,
      "stock": [
          {
              "color":"Silver",
              "stock":100,
              "sold":0
          }
      ]
  }, 
  {
      "name":"LV Clic It Fun and Sun bracelet",
      "brand":"Louis Vuitton",
      "description":"The LV Clic It Fun and Sun bracelet features two strands of supple, braided leather. This accessory has a functional clasp that displays the LV Initials, as well as Monogram Flower accents that secure the braiding.",
      "specifications":"@Leather, @Gold-color hardware, @LV Circle on clasp, @Monogram Flower motif",
      "categories":["Accesories", "Women"],
      "colors": ["Pink"],
      "sizes": ["Default"],
      "images":[
          {
              "color":"Pink",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/5/1.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/5/2.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/5/3.webp"]
          }       
      ],
      "price": 385 ,
      "stock": [
          {
              "color":"Pink",
              "stock":100,
              "sold":0
          }
      ]
  }, 
  {
      "name":"LV Uptown Bucket Hat",
      "brand":"Louis Vuitton",
      "description":"The oversized LV Uptown bucket hat is styled in an on-trend, ultra-contemporary material: blue denim. A giant Monogram Flower in natural cowhide adds a distinctive House touch, heightened by refined details like an all-silk lining and leather piping on the brim. A comfortable, user-friendly hat, and a fun way to wear the Monogram signature.",
      "specifications":"@Denim Blue, @100% cotton, @100% silk lining, @Natural cowhide piping, @Embroidered natural cowhide Monogram Flower patch" ,
      "categories":["Accesories", "Women"],
      "colors": ["Blue"],
      "sizes": ["Default"],
      "images":[
          {
              "color":"Blue",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/6/1.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/6/2.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/6/3.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/6/4.webp"]
          }       
      ],
      "price": 920 ,
      "stock": [
          {
              "color":"Blue",
              "stock":100,
              "sold":0
          }
      ]
  }, 
  {
      "name":"Dailygram Bucket Hat",
      "brand":"Louis Vuitton",
      "description":"Stylish and versatile, the reversible Dailygram bucket hat is sure to become an everyday essential. One side features a tone-on-tone XXL Monogram jacquard weave for a contemporary signature look. Turned inside out, it reveals a gold embroidered Louis Vuitton signature for a more classic feminine effect. Natural cowhide piping adds a luxurious finishing touch.",
      "specifications":"@100% cotton, @Reversible, @Monogram jacquard weave, @Natural cowhide piping, @Embroidered Louis Vuitton signature, @Metal eyelets" ,
      "categories":["Accesories", "Women"],
      "colors": ["Black" ],
      "sizes": ["Default"],
      "images":[
          {
              "color":"Black",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/7/1.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/7/2.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/7/3.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/7/4.webp"]
          }       
      ],
      "price": 740 ,
      "stock": [
          {
              "color":"Black",
              "stock":100,
              "sold":0
          }
      ]
  }, 
  {
      "name":"LV x YK Reversible Infinity Dots Bucket Hat",
      "brand":"Louis Vuitton",
      "description":"Part of the Louis Vuitton x Yayoi Kusama collection, the LV x YK reversible Infinity Dots bucket hat offers two stylish options in one. One side is printed with the Japanese artist's iconic dots motif for an eye-catching look, while the other comes in a tonal Monogram jacquard weave for a more understated effect. This versatile piece in pure cotton is finished with refined leather piping.",
      "specifications":"@100% cotton, @Printed dots recto side, @Monogram jacquard weave verso side, @Leather piping, @Leather tag with rivet, @Clean by specialist only",
      "categories":["Accesories", "Women"],
      "colors": ["Black" ],
      "sizes": ["Default"],
      "images":[
          {
              "color":"Black",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/8/1.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/8/2.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/8/3.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/8/4.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/8/5.png"]
          }       
      ],
      "price": 760,
      "stock": [
          {
              "color":"Black",
              "stock":100,
              "sold":0
          }
      ]
  }, 
  {
      "name":"Oceanview Hat",
      "brand":"Louis Vuitton",
      "description":"With its broad openwork brim and dome-shaped crown, the Oceanview summer hat emanates fresh sophistication. In keeping with the House’s expert know-how and stringent quality standards, each one is hand-woven in Ecuador from carefully selected natural palm fibers, then finished in Italy. For the final touch, an embroidered textile band adds an elegant signature.",
      "specifications":"@Natural color, @Natural palm fiber, @Cotton trim, @Textile band with embroidered @LV Circle and Monogram Flower motifs, @Textile logo on top",
      "categories":["Accesories", "Women"],
      "colors": ["White" ],
      "sizes": ["Default"],
      "images":[
          {
              "color":"White",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/9/1.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/9/2.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/9/3.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/9/4.webp"]
          }       
      ],
      "price": 880 ,
      "stock": [
          {
              "color":"White",
              "stock":100,
              "sold":0
          }
      ]
  }, 
  {
      "name":"LV x YK Infinity Dots Beanie",
      "brand":"Louis Vuitton",
      "description":"The LV x YK Infinity Dots beanie comes in pure cashmere for exceptional warmth and softness. Part of the Louis Vuitton x Yayoi Kusama collection, it is signed with an LV Initials accessory decorated with the Japanese artist's iconic recurring dots. At once practical and fashionable, this cozy hat will add a touch of color and creativity to any silhouette.",
      "specifications":"@100% cashmere, @LV Initials signature with dots, @Dry clean only" ,
      "categories":["Accesories", "Women"],
      "colors": ["Yellow"],
      "sizes": ["Default"],
      "images":[
          {
              "color":"Yellow",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/10/1.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/10/2.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/10/3.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/10/4.jpeg"]
          }       
      ],
      "price":575  ,
      "stock": [
          {
              "color":"Yellow",
              "stock":100,
              "sold":0
          }
      ]
  }, 
  {
      "name":"LV Croisiere Hat",
      "brand":"Louis Vuitton",
      "description":"the LV Croisière hat is a standout in the House’s summer offerings: an openwork crochet bucket hat painstakingly embroidered with Monogram Flowers. Crafted in fine cotton, it keeps the head cool and adds a sophisticated touch to a summer outfit. And it’s a fun way to sport the Louis Vuitton signature.",
      "specifications":"@LV Logo on the top, @100% cotton, @Fully embroidered Monogram Flowers" ,
      "categories":["Accesories", "Women"],
      "colors": ["Blue" ],
      "sizes": ["Default"],
      "images":[
          {
              "color":"Blue",
              "images": [ "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/11/1.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/11/2.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/11/3.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/11/4.webp"]
          }       
      ],
      "price": 1590,
      "stock": [
          {
              "color":"Blue",
              "stock":100,
              "sold":0
          }
      ]
  }, 
  {
      "name":"Beachview Visor",
      "brand":"Louis Vuitton",
      "description":"The Beachview Visor offers sophisticated protection from the summer sun. It is styled in raffia-look fabric adorned with Monogram Flowers, plus natural cowhide piping around the brim for a refined crafted touch. Cool and comfortable worn by itself, it can be combined with a silk bandeau slipped through the cowhide loops for a more sophisticated effect.",
      "specifications":"@52% viscose, @48% cotton, Default, @Natural cowhide piping, @Natural cowhide loops, @Louis Vuitton signature on the headband, @Monogram @Flowers on the brim, @Elastic band in the back" ,
      "categories":["Accesories", "Women"],
      "colors": ["Brown" ],
      "sizes": ["Default"],
      "images":[
          {
              "color":"Brown",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/12/1.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/12/2.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/12/3.webp"]
          }       
      ],
      "price": 1020 ,
      "stock": [
          {
              "color":"Brown",
              "stock":100,
              "sold":0
          }
      ]
  }, 
  {
      "name":"LV Day Cap",
      "brand":"Louis Vuitton",
      "description":"The LV Day cap elevates a casual look with superb craftsmanship. An embroidered Monogram Diamond with bouclette detailing makes for an eye-catching centerpiece, while Monogram jacquard adds a layer of richness. The youthful hat is composed of mixed materials, including breathable cotton and smooth leather.",
      "specifications":"@Ecru White, @100% cotton, @Silk lining, @Lambskin, @Monogram jacquard, @Embroidered patch, @Dry clean only" ,
      "categories":["Accesories", "Women"],
      "colors": ["White" ],
      "sizes": ["Default"],
      "images":[
          {
              "color":"White",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/13/1.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/13/2.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/13/3.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/13/4.webp"]
          }       
      ],
      "price": 690 ,
      "stock": [
          {
              "color":"White",
              "stock":100,
              "sold":0
          }
      ]
  }, 
  {
      "name":"Tambour Street Diver, Quartz, 39.5mm, Steel & Rose Gold",
      "brand":"Louis Vuitton",
      "description":"The Gold Lagoon edition of the Tambour Street Diver Watch brings the precious touch of 18-karat pink gold to this sporty, feminine dive watch. The glossy white-lacquered dial features luminescent indexes and golden polished hands. Set on a modern white rubber strap, this casual yet sophisticated piece is the ideal complement to any off-duty outfit.",
      "specifications":"@High precision quartz movement, @Functions: hours, minutes, seconds" ,
      "categories":["Accesories", "Women"],
      "colors": ["Silver"],
      "sizes": ["Default"],
      "images":[
          {
              "color":"Silver",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/14/1.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/14/2.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/14/3.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/14/4.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/14/5.webp"]
          }       
      ],
      "price": 1200 ,
      "stock": [
          {
              "color":"Silver",
              "stock":100,
              "sold":0
          }
      ]
  },  
  {
      "name":"Tambour Street Diver, Quartz, 39.5mm, Steel",
      "brand":"Louis Vuitton",
      "description":"This Pacific White model brings a feminine touch to the versatile Tambour Street Diver range. Casual and sporty, it combines traditional dive watch functions with the colourful, creative and unconventional style unique to Louis Vuitton. Its bright colours, contrasting finish and luminescent indexes will add a modern twist to any outfit.",
      "specifications":"@High precision quartz movement, @Functions: hours, minutes, seconds" ,
      "categories":["Accesories", "Women"],
      "colors": ["Silver" ],
      "sizes": ["Default"],
      "images":[
          {
              "color":"Silver",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/15/1.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/15/2.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/15/3.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/15/4.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/15/5.webp"]
          }       
      ],
      "price": 1250 ,
      "stock": [
          {
              "color":"Silver",
              "stock":100,
              "sold":0
          }
      ]
  } 
  
    ])
  }else{
    res.status(403).json({message: "Token not authorized"})
  }
});



// ---------- Dolce & Gabbana -----------> (Women Completed)
app.get("/dolce/women:token", (req, res)=>{
  if(req.params.token === TOKEN){
    res.status(200).json([
      {
        "name":"Lace slingbacks",
        "brand":"Dolce & Gabbana",
        "description":"Iconic and timeless, these lace Lollo slingbacks feature gros-grain piping and the DG logo appliqué on the heel.",
        "specifications":"@90-mm heel with DG logo, @Kidskin insole with branded label, @Branded leather sole, @Item comes with a branded dust bag, @Made in Italy" ,
        "categories":["Heels", "Women"],
        "colors": ["Black" ],
        "sizes": ["35", "35.5", "36", "36.50", "37", "37.5", "38", "38.5", "39", "39.5", "40", "40.5", "41"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/1/1.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/1/2.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/1/3.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/1/4.webp"]
            }       
        ],
        "price":875 ,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Polished calfskin pumps",
        "brand":"Dolce & Gabbana",
        "description":"Bold and contemporary, these new polished calfskin pumps feature a branded sculptural heel with rhinestone embellishment.",
        "specifications":"@105-mm heel with DG logo and rhinestones, @Kidskin insole with branded label, @Branded leather sole, @Item comes with a branded dust bag, @Made in Italy" ,
        "categories":["Heels", "Women"],
        "colors": ["Black"],
        "sizes": ["35", "35.5", "36", "36.50", "37", "37.5", "38", "38.5", "39", "39.5", "40", "40.5", "41"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/2/1.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/2/2.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/2/3.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/2/4.webp"]
            }       
        ],
        "price":1725 ,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Satin slingbacks with fusible rhinestones",
        "brand":"Dolce & Gabbana",
        "description":"Elegant and sophisticated, this slingback from the Lollo line is made from satin and embellished with fusible rhinestones all over.",
        "specifications":"@60-mm heel, Foiled kidskin insole with branded label, @Branded leather sole, @Item comes with a branded dust bag, @Made in Italy" ,
        "categories":["Heels", "Women"],
        "colors": ["Pink" ],
        "sizes": ["35", "35.5", "36", "36.50", "37", "37.5", "38", "38.5", "39", "39.5", "40", "40.5", "41"],
        "images":[
            {
                "color":"Pink",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/3/1.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/3/2.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/3/3.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/3/4.jpg"]
            }       
        ],
        "price":1775 ,
        "stock": [
            {
                "color":"Pink",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Printed polished calfskin pumps",
        "brand":"Dolce & Gabbana",
        "description":"Elegant and sophisticated, this slingback from the Lollo line is made from satin and embellished with fusible rhinestones all over.",
        "specifications":"@105-mm heel with DG logo, @Printed kidskin insole with branded label, @Logo-print leather sole, @Item comes with a branded dust bag, @Made in Italy" ,
        "categories":["Heels", "Women"],
        "colors": ["Brown" ],
        "sizes": ["35", "35.5", "36", "36.50", "37", "37.5", "38", "38.5", "39", "39.5", "40", "40.5", "41"],
        "images":[
            {
                "color":"Brown",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/4/1.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/4/2.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/4/3.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/4/4.jpg"]
            }       
        ],
        "price":1175 ,
        "stock": [
            {
                "color":"Brown",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"KIM DOLCE&GABBANA Polished calfskin pumps",
        "brand":"Dolce & Gabbana",
        "description":"The fusion and alchemy between the history and creativity of D&G’s designers and the contemporary vision of Kim Kardashian, style and beauty icon, lie at the heart of the new Runway collection.",
        "specifications":"@Polished calfskin upper, @90-mm heel, @Kidskin insole with branded label, @Branded leather sole, @Made in Italy",
        "categories":["Heels", "Women"],
        "colors": ["White" ],
        "sizes": ["35", "35.5", "36", "36.50", "37", "37.5", "38", "38.5", "39", "39.5", "40", "40.5", "41"],
        "images":[
            {
                "color":"White",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/5/1.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/5/2.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/5/3.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/5/4.jpg"]
            }       
        ],
        "price":793 ,
        "stock": [
            {
                "color":"White",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Polished calfskin Mary Janes",
        "brand":"Dolce & Gabbana",
        "description":"These new Jackie Mary Janes come in polished calfskin with the metal DG logo cut-out. ",
        "specifications":"@90-mm heel, @Kidskin insole with branded label, @Branded leather sole, @Item comes with a branded dust bag, @Made in Italy" ,
        "categories":["Heels", "Women"],
        "colors": ["Black" ],
        "sizes": ["35", "35.5", "36", "36.50", "37", "37.5", "38", "38.5", "39", "39.5", "40", "40.5", "41"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/6/1.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/6/2.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/6/3.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/6/4.jpg"]
            }       
        ],
        "price":945  ,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Calfskin pumps",
        "brand":"Dolce & Gabbana",
        "description":"These Lollo pumps feature a bold, tapered shape. Feminine and elegant, they feature the metal DG logo cut-out.",
        "specifications":"@90-mm heel, @Kidskin insole with branded label, @Branded leather sole, @Item comes with a branded dust bag, @Made in Italy" ,
        "categories":["Heels", "Women"],
        "colors": ["Black" ],
        "sizes": ["35", "35.5", "36", "36.50", "37", "37.5", "38", "38.5", "39", "39.5", "40", "40.5", "41"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/7/1.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/7/2.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/7/3.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/7/4.webp"]
            }       
        ],
        "price": 1025 ,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Calfskin pumps in Brown",
        "brand":"Dolce & Gabbana",
        "description":"These Lollo pumps feature a bold, tapered shape. Feminine and elegant, they feature the metal DG logo cut-out. ",
        "specifications":"@90-mm heel, @Kidskin insole with branded label, @Branded leather sole, @Item comes with a branded dust bag, @Made in Italy" ,
        "categories":["Heels", "Women"],
        "colors": ["Brown" ],
        "sizes": ["35", "35.5", "36", "36.50", "37", "37.5", "38", "38.5", "39", "39.5", "40", "40.5", "41"],
        "images":[
            {
                "color":"Brown",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/8/1.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/8/2.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/8/3.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/8/4.jpg"]
            }       
        ],
        "price":945  ,
        "stock": [
            {
                "color":"Brown",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Printed polished calfskin slingbacks",
        "brand":"Dolce & Gabbana",
        "description":"Iconic style is being given some contemporary edge, creating a new vision of the brand’s signature aesthetic. ",
        "specifications":" @60-mm heel with DG logo, @Printed kidskin insole with branded label, @Logo-print leather sole, @Item comes with a branded dust bag , @Made in Italy" ,
        "categories":["Heels", "Women"],
        "colors": ["Brown" ],
        "sizes": ["35", "35.5", "36", "36.50", "37", "37.5", "38", "38.5", "39", "39.5", "40", "40.5", "41"],
        "images":[
            {
                "color":"Brown",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/9/1.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/9/2.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/9/3.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/9/4.webp"]
            }       
        ],
        "price": 1045 ,
        "stock": [
            {
                "color":"Brown",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"KIM DOLCE&GABBANA Satin slingbacks with fusible rhinestones ",
        "brand":"Dolce & Gabbana",
        "description":"The fusion and alchemy between the history and creativity of D&G’s designers and the contemporary vision of Kim Kardashian, style and beauty icon, lie at the heart of the new Runway collection.",
        "specifications":"@Fusible rhinestones on the satin upper, @105-mm heel, @Foiled kidskin insole with branded label, @Foiled leather sole with logo, @Made in Italy" ,
        "categories":["Heels", "Women"],
        "colors": ["Grey" ],
        "sizes": ["35", "35.5", "36", "36.50", "37", "37.5", "38", "38.5", "39", "39.5", "40", "40.5", "41"],
        "images":[
            {
                "color":"Grey",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/10/1.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/10/3.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/10/2.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/10/4.jpg"]
            }       
        ],
        "price":1595  ,
        "stock": [
            {
                "color":"Grey",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Patent leather and mesh slingbacks",
        "brand":"Dolce & Gabbana",
        "description":"Iconic black and white are the key to the new DNA collection, where tradition and modernity merge to create unique, timeless style.",
        "specifications":" @Mesh upper, @60-mm heel Calfskin toe, @Kidskin insole with branded label, @Branded leather sole, @Made in Italy" ,
        "categories":["Heels", "Women"],
        "colors": ["Black"],
        "sizes": ["35", "35.5", "36", "36.50", "37", "37.5", "38", "38.5", "39", "39.5", "40", "40.5", "41"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/11/1.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/11/2.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/11/3.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/11/4.jpg"]
            }       
        ],
        "price": 825 ,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Patchwork denim slingbacks with rhinestone buckle",
        "brand":"Dolce & Gabbana",
        "description":"The new “Denim” collection is the result of an evocative journey back to the brand’s roots, which have been reworked to add contemporary edge. Flaunting bold allure, the new Lollo slingbacks come in 100% patchwork denim. ",
        "specifications":"@Patchwork denim upper, @60-mm heel,  @Kidskin insole with branded label, @Branded leather sole, @Made in Italy" ,
        "categories":["Heels", "Women"],
        "colors": ["Blue" ],
        "sizes": ["35", "35.5", "36", "36.50", "37", "37.5", "38", "38.5", "39", "39.5", "40", "40.5", "41"],
        "images":[
            {
                "color":"Blue",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/12/1.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/12/2.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/12/3.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/12/4.jpg"]
            }       
        ],
        "price": 1145 ,
        "stock": [
            {
                "color":"Blue",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Printed fabric slingbacks",
        "brand":"Dolce & Gabbana",
        "description":"A tribute to love and life, the new Happy Garden collection tells the story of a woman who is surrounded by a flowering garden. Feminine and sophisticated, these new Lollo slingbacks come in 100% soft poppy-print fabric with the DG logo on the heel.",
        "specifications":"@Printed fabric upper, @60-mm heel, @Kidskin insole with branded label, @Branded leather sole , @Made in Italy" ,
        "categories":["Heels", "Women"],
        "colors": ["White" ],
        "sizes": ["35", "35.5", "36", "36.50", "37", "37.5", "38", "38.5", "39", "39.5", "40", "40.5", "41"],
        "images":[
            {
                "color":"White",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/13/1.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/13/2.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/13/3.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/13/4.jpg"]
            }       
        ],
        "price": 895 ,
        "stock": [
            {
                "color":"White",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Zebra-print polished calfskin slingbacks",
        "brand":"Dolce & Gabbana",
        "description":"The black and white of the new Zebra Collection are the stars of a new communicative mode where innovation and tradition come together to create bold sophisticated contrast.",
        "specifications":"@105-mm heel with palladium-plated DG logo, @Kidskin insole with branded label, @Branded leather sole, @Item comes with themed packaging, @Made in Italy" ,
        "categories":["Heels", "Women"],
        "colors": ["Black"],
        "sizes": ["35", "35.5", "36", "36.50", "37", "37.5", "38", "38.5", "39", "39.5", "40", "40.5", "41"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/14/1.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/14/2.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/14/3.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/14/4.jpg"]
            }       
        ],
        "price": 995 ,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Pump in Taormina lace with crystals",
        "brand":"Dolce & Gabbana",
        "description":"The Rainbow Lace collection is a special range of footwear and accessories in a wide array of colored lace, inspired by the thousand hues and facets of the rainbow.",
        "specifications":"@90 mm heel covered in Taormina lace, @Swarovski crystals on the toe, @Leather insole with satin piping and logo label, @Logoed leather sole, @Exclusive lace-patterned packaging with matching branded satin dust bag, @Made in Italy" ,
        "categories":["Heels", "Women"],
        "colors": ["White" ],
        "sizes": ["35", "35.5", "36", "36.50", "37", "37.5", "38", "38.5", "39", "39.5", "40", "40.5", "41"],
        "images":[
            {
                "color":"White",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/15/1.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/15/2.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/15/3.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/15/4.webp"]
            }       
        ],
        "price": 1045 ,
        "stock": [
            {
                "color":"White",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
      "name":"Necklace with DG logo and cherry charms",
      "brand":"Dolce & Gabbana",
      "description":"The absolute star of the new Black Sicily collection is black, the color of immortal elegance that encapsulates the most diverse facets of Dolce&Gabbana. They preserve the signature identity of the brand’s DNA, which is reworked in the light of the word synthesis.",
      "specifications":"@Clasp fastening, @Nickel-free and hypoallergenic materials, @Engraved logo, @Made in Italy" ,
      "categories":["Accessories", "Women"],
      "colors": ["Gold"],
      "sizes": ["Default"],
      "images":[
          {
              "color":"Gold",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/1/1.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/1/2.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/1/3.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/1/4.jpg"]
          }       
      ],
      "price":1195 ,
      "stock": [
          {
              "color":"Gold",
              "stock":100,
              "sold":0
          }
      ]
  },{
      "name":"Link necklace with DG logo and tag",
      "brand":"Dolce & Gabbana",
      "description":"The Dolce&Gabbana Jewelry Collection is filled with unique pieces boasting great craftsmanship. Contemporary accessories with original and exclusive DG logo details, featuring different plated finishes, will be perfect for finishing off any look with style. ",
      "specifications":"@Clasp fastening, @Nickel-free and hypoallergenic materials, @Engraved logo, @Made in Italy" ,
      "categories":["Accessories", "Women"],
      "colors": ["Gold"],
      "sizes": ["Default"],
      "images":[
          {
              "color":"Gold",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/2/1.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/2/2.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/2/3.jpg"]
          }       
      ],
      "price": 845,
      "stock": [
          {
              "color":"Gold",
              "stock":100,
              "sold":0
          }
      ]
  },{
      "name":"Creole earrings with DG logo",
      "brand":"Dolce & Gabbana",
      "description":"The Dolce&Gabbana Jewelry Collection is filled with unique pieces boasting great craftsmanship. Contemporary accessories with original and exclusive DG logo details, featuring different plated finishes, will be perfect for finishing off any look with style. ",
      "specifications":" @Creole fastening with pin, @Nickel-free and hypoallergenic materials, @Engraved logo, @Made in Italy" ,
      "categories":["Accessories", "Women"],
      "colors": ["Gold" ],
      "sizes": ["Default"],
      "images":[
          {
              "color":"Gold",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/3/1.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/3/2.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/3/3.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/3/4.jpg"]
          }       
      ],
      "price":335 ,
      "stock": [
          {
              "color":"Gold",
              "stock":100,
              "sold":0
          }
      ]
  },{
      "name":"Choker with DG logos",
      "brand":"Dolce & Gabbana",
      "description":"The Dolce&Gabbana Jewelry Collection is filled with unique pieces boasting great craftsmanship. Contemporary accessories with original and exclusive DG logo details, featuring different plated finishes, will be perfect for finishing off any look with style.",
      "specifications":"@Nickel-free and hypoallergenic materials, @Engraved logo, @Made in Italy" ,
      "categories":["Accessories", "Women"],
      "colors": ["Gold"],
      "sizes": ["Default"],
      "images":[
          {
              "color":"Gold",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/4/1.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/4/2.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/4/3.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/4/4.jpg"]
          }       
      ],
      "price":1745 ,
      "stock": [
          {
              "color":"Gold",
              "stock":100,
              "sold":0
          }
      ]
  },{
      "name":"earrings with DG logo",
      "brand":"Dolce & Gabbana",
      "description":"The Dolce&Gabbana Jewelry Collection is filled with unique pieces boasting great craftsmanship. Contemporary accessories with original and exclusive DG logo details, featuring different plated finishes, will be perfect for finishing off any look with style. ",
      "specifications":" @Made in Italy" ,
      "categories":["Accessories", "Women"],
      "colors": ["Gold" ],
      "sizes": ["Default"],
      "images":[
          {
              "color":"Gold",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/5/1.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/5/2.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/5/3.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/5/4.jpg"]
          }       
      ],
      "price":335 ,
      "stock": [
          {
              "color":"Gold",
              "stock":100,
              "sold":0
          }
      ]
  },{
      "name":"Gabardine baseball cap with DG logo",
      "brand":"Dolce & Gabbana",
      "description":"Since the very beginning, the style of the Sicilian Carretto carts has been an indelible part of Dolce&Gabbana. The amazement that these marvelous, beautiful works of art inspire when you first see them led our designers to put a fresh spin on the vision behind them. ",
      "specifications":"@Lined, Rigid peak, @Logo tag, Gros-grain sweatband on the interior, @Made in Italy" ,
      "categories":["Accessories", "Women"],
      "colors": ["White" ],
      "sizes": ["Default"],
      "images":[
          {
              "color":"White",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/6/1.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/6/2.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/6/3.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/6/4.jpg"]


          }       
      ],
      "price": 435,
      "stock": [
          {
              "color":"White",
              "stock":100,
              "sold":0
          }
      ]
  },{
      "name":"Bucket hat with Majolica print",
      "brand":"Dolce & Gabbana",
      "description":"Against a striking white base, evoking the dazzling sunlight shining on houses facing the sea, the ‘calligraphic-naturalistic’ decoration here in deep fuchsia  adorning Majolica pottery from Caltagirone is the inspiration for the FW 23-24 collection.",
      "specifications":"@Multi-colored, @Lined, @Gros-grain sweatband on the interior , @Made in Italy" ,
      "categories":["Accessories", "Women"],
      "colors": ["White" ],
      "sizes": ["Default"],
      "images":[
          {
              "color":"White",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/7/1.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/7/2.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/7/3.webp"]
          }       
      ],
      "price":485 ,
      "stock": [
          {
              "color":"White",
              "stock":100,
              "sold":0
          }
      ]
  },{
      "name":"Baseball cap with Majolica print",
      "brand":"Dolce & Gabbana",
      "description":"The two-tone effect takes us on a journey of discovery into iconic and authentic shapes and styles made all the more special by unique, non-repeating placed patterns that celebrate original craftsmanship, lightness and femininity.",
      "specifications":"@Lined,Adjustable buckle,@Rigid peak, @Gros-grain sweatband on the interior, @Made in Italy" ,
      "categories":["Accessories", "Women"],
      "colors": ["White" ],
      "sizes": ["Default"],
      "images":[
          {
              "color":"White",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/8/1.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/8/2.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/8/3.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/8/4.jpg"]
          }       
      ],
      "price":485 ,
      "stock": [
          {
              "color":"White",
              "stock":100,
              "sold":0
          }
      ]
  },{
      "name":"Baseball cap with Majolica-print scarf Multicolor",
      "brand":"Dolce & Gabbana",
      "description":"Against a striking white base, evoking the dazzling sunlight shining on houses facing the sea, the ‘calligraphic-naturalistic’ decoration – here in deep fuchsia,  adorning Majolica pottery from Caltagirone is the inspiration for the FW 23-24 collection. ",
      "specifications":"@Lined, Adjustable buckle, @Rigid peak, @Gros-grain sweatband on the interior , @Made in Italy" ,
      "categories":["Accessories", "Women"],
      "colors": ["Purple" ],
      "sizes": ["Default"],
      "images":[
          {
              "color":"Purple",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/9/1.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/9/2.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/9/3.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/9/4.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/9/5.jpg"]
          }       
      ],
      "price":975 ,
      "stock": [
          {
              "color":"Purple",
              "stock":100,
              "sold":0
          }
      ]
  },
  {
      "name":"Carretto-print baseball cap",
      "brand":"Dolce & Gabbana",
      "description":"Since the very beginning, the style of the Sicilian Carretto carts has been an indelible part of Dolce&Gabbana. The amazement that these marvelous, beautiful works of art inspire when you first see them led our designers to put a fresh spin on the vision behind them.",
      "specifications":"@Lined, Adjustable buckle, @Rigid peak, @Gros-grain sweatband on the interior, @Made in Italy" ,
      "categories":["Accessories", "Women"],
      "colors": ["Blue" ],
      "sizes": ["Default"],
      "images":[
          {
              "color":"Blue",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/10/1.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/10/2.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/10/3.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/10/4.jpg"]
          }       
      ],
      "price":485 ,
      "stock": [
          {
              "color":"Blue",
              "stock":100,
              "sold":0
          }
      ]
  },{
      "name":"Nylon baseball cap with DG graffiti print",
      "brand":"Dolce & Gabbana",
      "description":"The black and white graffiti print is the star of this cap that will add some modern, contemporary allure to your looks.",
      "specifications":"@Graffiti print, @made with Nylon, @Made in Italy" ,
      "categories":["Accessories", "Women"],
      "colors": ["Black" ],
      "sizes": ["Default"],
      "images":[
          {
              "color":"Black",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/11/1.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/11/2.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/11/3.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/11/4.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/11/5.jpg"]
          }       
      ],
      "price":415 ,
      "stock": [
          {
              "color":"Black",
              "stock":100,
              "sold":0
          }
      ]
  },{
      "name":"Sofia steel watch with colorless diamonds",
      "brand":"Dolce & Gabbana",
      "description":"Sofia steel watch with colorless diamonds",
      "specifications":"@Material. 316L steel, Size. 24 x 24 mm, Glass. “sapphire” glass with geometrical facets, Bottom clasp. @with four side screws and safety closure, @Crown. 316L steel set with 1 rose cut black diamond , @Made in Italy" ,
      "categories":["Accessories", "Women"],
      "colors": ["Black" ],
      "sizes": ["Default"],
      "images":[
          {
              "color":"Black",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/12/1.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/12/2.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/12/3.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/12/4.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/12/5.jpg"]
          }       
      ],
      "price": 2450,
      "stock": [
          {
              "color":"Black",
              "stock":100,
              "sold":0
          }
      ]
  },
  {
      "name":"Iris watch in rose gold with multi-colored fine gems",
      "brand":"Dolce & Gabbana",
      "description":"Iris watch in rose gold with multi-colored fine gems",
      "specifications":"@Indication of hours and minutes, @Material: 18k rose gold, @sapphire crystal, @Water resistance, @Made in Italy" ,
      "categories":["Accessories", "Women"],
      "colors": ["Purple" ],
      "sizes": ["Default"],
      "images":[
          {
              "color":"Purple",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/13/1.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/13/2.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/13/3.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/13/4.jpg"]
          }       
      ],
      "price": 2645,
      "stock": [
          {
              "color":"Purple",
              "stock":100,
              "sold":0
          }
      ]
  },{
      "name":"Gold watch with silk strap",
      "brand":"Dolce & Gabbana",
      "description":"Watch from the SOFIA line with 100% pure blue silk satin strap.",
      "specifications":"@Indication of hours and minutes, @Material: 18k rose gold, @sapphire crystal, @Water resistance, @Made in Italy" ,
      "categories":["Accessories", "Women"],
      "colors": ["Gold" ],
      "sizes": ["Default"],
      "images":[
          {
              "color":"Gold",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/14/1.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/14/2.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/14/3.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/14/4.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/14/5.png"]
          }       
      ],
      "price":3540 ,
      "stock": [
          {
              "color":"Gold",
              "stock":100,
              "sold":0
          }
      ]
  },{
      "name":"DG7 Barocco ",
      "brand":"Dolce & Gabbana",
      "description":"DG7 Barocco watch with black satin strap.",
      "specifications":"@Functions. hour and minute hands, @Dial. satin-finished black enamel dial with rose gold DG logo - Hands, @Made in Italy" ,
      "categories":["Accessories", "Women"],
      "colors": ["Black" ],
      "sizes": ["Default"],
      "images":[
          {
              "color":"Black",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/15/1.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/15/2.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/15/3.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/15/4.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/15/5.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/15/6.jpg"]
          }       
      ],
      "price": 1750,
      "stock": [
          {
              "color":"Black",
              "stock":100,
              "sold":0
          }
      ]
  },
  // ACCESORIES & HEELS COMPLETE DARIO

  {
    "name": "Re-Edition sunglasses ",
    "brand": "Dolce & Gabbana",
    "description": "New colours for the RE-EDITION family: a modern touch to the lively look of Carretto. Made in Italy",
    "specification": "@Blue opaline acetate temples @Blue gradient silver mirror lenses @100% UV protection",
    "categories": ["Sunglasses","Women"],
    "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
    "colors": ["Blue"],
    "sizes": ["Default"],
    "images": [
      {
        "color": "Blue",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Re-Edition+sunglasses+Frontal.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Re-Edition+sunglasses+Lado.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Re-Edition+sunglasses+Lateral.jpg"
        ]
      }
    ],
    "price": 345,
    "stock": [
      {
        "color": "Blue",
        "stock": "100",
        "sold": 0
      }
    ]
  },
  {
    "name": "DG Elastic Sunglasses",
    "brand": "Dolce & Gabbana",
    "description": "The new DG ELASTIC family features a geometric design and square profiles. The temples are wide and embellished with a print that recalls the iconic Dolce&Gabbana elastic logo. Made in Italy",
    "specification": "@Black nylon fiber frame @Black nylon fiber temples @Dark grey lenses @100% UV protection ",
    "categories": ["Sunglasses","Women"],
    "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
    "colors": ["Black"],
    "sizes": ["Default"],
    "images": [
      {
        "color": "black",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/DG+Elastic+Sunglasses+frontal.webp",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/DG+Elastic+Sunglasses+Lado.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/DG+Elastic+Sunglasses+Lateral.webp"
        ]
      }
    ],
    "price": 315,
    "stock": [
      {
        "color": "black",
        "stock": "100",
        "sold": 0
      }
    ]
  },
  {
    "name": "Maiolica Sunglasses ",
    "brand": "Dolce & Gabbana",
    "description": "The evolution of the iconic Print Family: the distinctive brand pattern for a unique look. Made in Italy",
    "specification": "@Maiolica fucsia acetate frame @Maiolica fucsia acetate temples @Pink lenses @100% UV protection",
    "categories": ["Sunglasses","Women"],
    "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
    "colors": ["pink"],
    "sizes": ["Default"],
    "images": [
      {
        "color": "pink",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Maiolica+Sunglasses+Frontal.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Maiolica+Sunglasses+Lado.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Maiolica+Sunglasses+Lateral.jpg"
        ]
      }
    ],
    "price": 345,
    "stock": [
      {
        "color": "pink",
        "stock": "100",
        "sold": 0
      }
    ]
  },
  {
    "name": "DG Crossed Sunglasses",
    "brand": "Dolce & Gabbana",
    "description": "A new chapter for the DG Crossed family: featuring the iconic Dolce&Gabbana feminine shapes combined with the DG monogram. Made in Italy",
    "specification": "@Black acetate frame @Black acetate temples @Dark grey lenses @100% UV protection",
    "categories": ["Sunglasses","Women"],
    "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
    "colors": ["Black"],
    "sizes": ["Default"],
    "images": [
      {
        "color": "black",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/DG+Crossed+Sunglasses+Frontal.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/DG+Crossed+Sunglasses+Lado.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/DG+Crossed+Sunglasses+Lateral.jpg"
        ]
      }
    ],
    "price": 315,
    "stock": [
      {
        "color": "black",
        "stock": "100",
        "sold": 0
      }
    ]
  },
  {
    "name": "DG Barocco Sunglasses ",
    "brand": "Dolce & Gabbana",
    "description": "DG Barocco, Dolce&Gabbana's new Eyewear family, featuring modern acetate geometrical shapes for an ultra-feminine look.  Made in Italy",
    "specification": "@White acetate frame @White acetate temples @Clear mirror silver lenses @100% UV protection",
    "categories": ["Sunglasses","Women"],
    "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
    "colors": ["white"],
    "sizes": ["Default"],
    "images": [
      {
        "color": "white",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/DG+Barocco+Sunglasses+Frontal.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/DG+Barocco+Sunglasses+Lado.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/DG+Barocco+Sunglasses+Lateral.jpg"
        ]
      }
    ],
    "price": 410,
    "stock": [
      {
        "color": "white",
        "stock": "100",
        "sold": 0
      }
    ]
  },
  {
    "name": "DG Light Sunglasses",
    "brand": "Dolce & Gabbana",
    "description": "Lightness and minimalist elegance for a unique refined lookcharacterize the DG Light Dolce&Gabbana sunglasses.  Made in Italy",
    "specification": "@Black metal frame @Black metal temples @Dark grey lenses @100% UV protection",
    "categories": ["Sunglasses","Women"],
    "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
    "colors": ["Black"],
    "sizes": ["Default"],
    "images": [
      {
        "color": "black",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/DG+Light+Sunglasses+Frontal.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/DG+Light+Sunglasses+Lado.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/DG+Light+Sunglasses+Lateral.jpg"
        ]
      }
    ],
    "price": 345,
    "stock": [
      {
        "color": "black",
        "stock": "100",
        "sold": 0
      }
    ]
  },
  {
    "name": "New Print Sunglasses ",
    "brand": "Dolce & Gabbana",
    "description": "The evolution of the iconic Print Family:the distinctive brand pattern now plays with different colours for a unique look.  Made in Italy",
    "specification": "@Blue on Blue Maiolica frame @Blue on Blue Maiolica acetate temples @Light blue lenses @100% UV protection",
    "categories": ["Sunglasses","Women"],
    "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
    "colors": ["Blue"],
    "sizes": ["Default"],
    "images": [
      {
        "color": "Blue",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/New+Print+Sunglasses+Frontal.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/New+Print+Sunglasses+Lado.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/New+Print+Sunglasses+Lateral.jpg"
        ]
      }
    ],
    "price": 345,
    "stock": [
      {
        "color": "Blue",
        "stock": "100",
        "sold": 0
      }
    ]
  },
  {
    "name": "Half Print Sunglasses",
    "brand": "Dolce & Gabbana",
    "description": "The evolution of the iconic Print Family:the distinctive brand pattern now plays with different colours for a unique look. Made in Italy",
    "specification": "@Havana on carretto acetate frame @Gold metal temples @Brown lenses @100% UV protection",
    "categories": ["Sunglasses","Women"],
    "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
    "colors": ["brown"],
    "sizes": ["Default"],
    "images": [
      {
        "color": "brown",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Half+Print+Sunglasses+Frontal.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Half+Print+Sunglasses+Lado.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Half+Print+Sunglasses+Lateral.jpg"
        ]
      }
    ],
    "price": 370,
    "stock": [
      {
        "color": "brown",
        "stock": "100",
        "sold": 0
      }
    ]
  },
  {
    "name": "DNA sunglasses",
    "brand": "Dolce & Gabbana",
    "description": "A retro-inspired squared shape is designed for a modern and elegant look. Made in Italy",
    "specification": "@Black acetate frame @Black acetate temple @Dark grey lenses @100% UV protection",
    "categories": ["Sunglasses","Women"],
    "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
    "colors": ["Black"],
    "sizes": ["Default"],
    "images": [
      {
        "color": "black",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/DNA+sunglasses+Frontal.webp",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/DNA+sunglasses+Lado.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/DNA+sunglasses+Lateral.jpg"
        ]
      }
    ],
    "price": 315,
    "stock": [
      {
        "color": "black",
        "stock": "100",
        "sold": 0
      }
    ]
  },
  {
    "name": "Re-Edition Dna Sunglasses",
    "brand": "Dolce & Gabbana",
    "description": "An exploration of the Dolce&Gabbana heritage: vintage and narrow shapes celebrating the 90’s/2000’s aesthetic vibes. Made in Italy",
    "specification": "@Black acetate frame @Black acetate temples @Dark grey lenses @100% UV protection",
    "categories": ["Sunglasses","Women"],
    "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
    "colors": ["Black"],
    "sizes": ["Default"],
    "images": [
      {
        "color": "black",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Re-Edition+Dna+Sunglasses+Frontal.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Re-Edition+Dna+Sunglasses+Lado.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Re-Edition+Dna+Sunglasses+Lateral.jpg"
        ]
      }
    ],
    "price": 345,
    "stock": [
      {
        "color": "black",
        "stock": "100",
        "sold": 0
      }
    ]
  },
  {
    "name": "Happy Gardensunglasses",
    "brand": "Dolce & Gabbana",
    "description": "A Dolce&Gabbana narration of summer freshness and energy,characterized by a oversized bold shape and vibrant colors. Made in Italy",
    "specification": "@Red acetate frame @Red acetate temples @Dark grey lenses @100% UV protection",
    "categories": ["Sunglasses","Women"],
    "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
    "colors": ["red"],
    "sizes": ["Default"],
    "images": [
      {
        "color": "red",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Happy+Gardensunglasses+Frontal.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Happy+Gardensunglasses+Lado.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Happy+Gardensunglasses+Lateral.jpg"
        ]
      }
    ],
    "price": 825,
    "stock": [
      {
        "color": "red",
        "stock": "100",
        "sold": 0
      }
    ]
  },
  {
    "name": "Narrow sunglasses ",
    "brand": "Dolce & Gabbana",
    "description": "Elegant and sophisticated narrow sunglasses, embellished with silver crystals on frontal frame and temples.This unique style is hand-made produced in 50 pieces. Made in Italy",
    "specification": "@Silver metal frame with crystals @Silver metal temples with crystals @Smoke lenses @100% UV protection",
    "categories": ["Sunglasses","Women"],
    "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
    "colors": ["white"],
    "sizes": ["Default"],
    "images": [
      {
        "color": "white",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Narrow+sunglasses+Frontal.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Narrow+sunglasses+Lado.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Narrow+sunglasses+Lateral.jpg"
        ]
      }
    ],
    "price": 1420,
    "stock": [
      {
        "color": "white",
        "stock": "100",
        "sold": 0
      }
    ]
  },
  {
    "name": "DG Bella sunglasses",
    "brand": "Dolce & Gabbana",
    "description": "Dolce&Gabbana's new Eyewear family, featuring modern acetate shapes and vibrant colors. Made in Italy",
    "specification": "@Metallic grey acetate frame @Metallic grey acetate temples @Light grey mirror silver lenses @100% UV protection",
    "categories": ["Sunglasses","Women"],
    "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
    "colors": ["gray"],
    "sizes": ["Default"],
    "images": [
      {
        "color": "gray",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Narrow+sunglasses+Frontal.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Narrow+sunglasses+Lado.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Narrow+sunglasses+Lateral.jpg"
        ]
      }
    ],
    "price": 1420,
    "stock": [
      {
        "color": "gray",
        "stock": "100",
        "sold": 0
      }
    ]
  },
  {
    "name": "Flowers sunglasses",
    "brand": "Dolce & Gabbana",
    "description": "An outerwear focused collection revamped with the iconic flower prints and an explosion of color: a floral & hyper-coloured winter garden. Made in Italy",
    "specification": "@Black shiny nylon fiber frame @Black elastic temples with white logo @Smoke lenses mirrorred silver with DG crossed @100% UV protection ",
    "categories": ["Sunglasses","Women"],
    "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
    "colors": ["Black"],
    "sizes": ["Default"],
    "images": [
      {
        "color": "black",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Flowers+sunglasses+Frontal.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Flowers+sunglasses+Lado.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Flowers+sunglasses+Lateral.jpg"
        ]
      }
    ],
    "price": 755,
    "stock": [
      {
        "color": "black",
        "stock": "100",
        "sold": 0
      }
    ]
  },
  {
    "name": "Zebra sunglasses",
    "brand": "Dolce & Gabbana",
    "description": "a reinterpretation of Dolce&Gabbana heritage with a contemporary touch. Made in Italy",
    "specification": "@Black&zebra print acetate frame @Black&zebra print acetate temples @Light grey gradient black lenses @100% UV protectionMeasurements",
    "categories": ["Sunglasses","Women"],
    "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
    "colors": ["Black"],
    "sizes": ["Default"],
    "images": [
      {
        "color": "black",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Zebra+sunglasses+Frontal.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Zebra+sunglasses+Lado.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Zebra+sunglasses+Lateral.jpg"
        ]
      }
    ],
    "price": 575,
    "stock": [
      {
        "color": "black",
        "stock": "100",
        "sold": 0
      }
    ]
  },
  {
    "name": "DG Logo Bag shoulder bag in calfskin",
    "brand": "Dolce & Gabbana",
    "description": "Iconic codes are reinterpreted in a modern key to create a new vision of the brand's DNA. Characterized by a refined design with geometric lines, this shoulder bag pays homage to the logo. Made entirely of calfskin, it stands out with the quilted DG logo with a three-dimensional effect and includes an adjustable and removable strap.",
    "specification": "@Cierre de solapa con doble imán oculto @Forro de alcántara, bolsillo con cremallera y compartimento con tira con botón a presión @Artículo con bolsa protectora con logotipo @Medidas: 16 x 20 x 5,5 cm @Hecho en Italia @Composición externa: 100 % Piel de becerro",
    "categories": ["Bags", "Women", "underarm"],
    "colors": ["white", "red", "black"],
    "sizes": ["default"],
    "images": [
      {
        "color": "white",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_baldolera_blanco_01.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_baldolera_blanco_02.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_baldolera_blanco_03.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_baldolera_blanco_04.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_baldolera_blanco_05.jpg"
        ]
      },
      {
        "color": "red",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_baldolera_rojo_01.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_baldolera_rojo_02.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_baldolera_rojo_03.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_baldolera_rojo_04.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_baldolera_rojo_05.jpg"
        ]
      },
      {
        "color": "black",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_baldolera_negro_01.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_baldolera_negro_02.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_baldolera_negro_03.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_baldolera_negro_04.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_baldolera_negro_05.jpg"
        ]
      }
    ],
    "price": 1195,
    "stock": [
      {
        "color": "white",
        "stock": "100",
        "sold": 0
      },
      {
        "color": "red",
        "stock": "100",
        "sold": 0
      },
      {
        "color": "black",
        "stock": "100",
        "sold": 0
      }
    ]
  },
  {
    "name": "Medium crossbody bag in calfskin DG Logo",
    "brand": "Dolce & Gabbana",
    "description": "Iconic codes are reinterpreted in a modern key to create a new vision of the brand's DNA. Characterized by a refined design with geometric lines, this new shoulder bag pays homage to the logo, the absolute star of the new collection. Practical and versatile, it is made entirely of calfskin and embellished with the quilted DG logo with a three-dimensional effect. It features an adjustable and removable strap.",
    "specification": "@Zip closure with double puller with logo @Alcantara lining, zip pocket and compartment with snap-button strap @Article with protective bag with logo @Sizes. 16 x 20 x 5.5 cm @Made in Italy @External composition: 100% Calfskin @Internal composition: 56% Polyester 20% Calfskin 16% Polyurethane 5% Viscose 2% Polyamide 1% Elastane",
    "categories": ["Bags", "Women", "underarm"],
    "colors": ["white", "red", "black"],
    "sizes": ["default"],
    "images": [
      {
        "color": "white",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_baldoleramediano_blanco_01.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_baldoleramediano_blanco_02.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_baldoleramediano_blanco_03.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_baldoleramediano_blanco_04.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_baldoleramediano_blanco_05.jpg"
        ]
      },
      {
        "color": "red",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_baldoleramediano_rojo_01.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_baldoleramediano_rojo_02.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_baldoleramediano_rojo_03.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_baldoleramediano_rojo_04.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_baldoleramediano_rojo_05.jpg"
        ]
      },
      {
        "color": "black",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_baldoleramediano_negro_01.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_baldoleramediano_negro_02.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_baldoleramediano_negro_03.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_baldoleramediano_negro_04.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_baldoleramediano_negro_05.jpg"
        ]
      }
    ],
    "price": 1445,
    "stock": [
      {
        "color": "white",
        "stock": "100",
        "sold": 0
      },
      {
        "color": "red",
        "stock": "100",
        "sold": 0
      },
      {
        "color": "black",
        "stock": "100",
        "sold": 0
      }
    ]
  },
  {
    "name": "Small DG Logo Bag shoulder bag in calfskin",
    "brand": "Dolce & Gabbana",
    "description": "Iconic codes are reinterpreted in a modern key to create a new vision of the brand's DNA. Characterized by a refined design with geometric lines, this new shoulder bag pays homage to the logo, the absolute star of the new collection. Practical and compact, it is made entirely of calfskin and embellished with the quilted DG logo with a three-dimensional effect. It features an adjustable and removable strap.",
    "specification": "@Zip closure with double puller with logo @Alcantara lining, zip pocket and compartment with snap-button strap @Article with protective bag with logo @Sizes. 11 x 20 x 5.5 cm @Made in Italy @External composition: 100% Calf Leather @Internal composition: 100% Calf Leather",
    "categories": ["Bags", "Women", "underarm"],
    "colors": ["beige", "red", "black"],
    "sizes": ["default"],
    "images": [
      {
        "color": "beige",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_baldolerasmall_beige_01.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_baldolerasmall_beige_02.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_baldolerasmall_beige_03.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_baldolerasmall_beige_04.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_baldolerasmall_beige_05.jpg"
        ]
      },
      {
        "color": "red",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_baldolerasmall_rojo_01.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_baldolerasmall_rojo_02.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_baldolerasmall_rojo_03.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_baldolerasmall_rojo_04.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_baldolerasmall_rojo_05.jpg"
        ]
      },
      {
        "color": "black",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_baldolerasmall_negro_01.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_baldolerasmall_negro_02.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_baldolerasmall_negro_03.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_baldolerasmall_negro_04.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_baldolerasmall_negro_05.jpg"
        ]
      }
    ],
    "price": 1195,
    "stock": [
      {
        "color": "beige",
        "stock": "100",
        "sold": 0
      },
      {
        "color": "red",
        "stock": "100",
        "sold": 0
      },
      {
        "color": "black",
        "stock": "100",
        "sold": 0
      }
    ]
  },
  {
    "name": "Medium Sicily handbag",
    "brand": "Dolce & Gabbana",
    "description": "An icon of the brand par excellence, this medium-sized Sicily bag is made of Dauphine calfskin. With simple and feminine lines, it is adorned with a big-galvanized plate with the logo.",
    "specification": "@Flap with double concealed magnetic closure at front @Big galvanized logo plate @Top handle and adjustable and removable strap in Dauphine calfskin @Printed fabric lining @Inner zip pocket with logo and smartphone pocket @Metal braces on the base @Item with protective bag with logo @Measurements: W18.5 x L20 x D10 cm @Made in Italy @External composition: 100% Calfskin @Internal composition: 90% Cotton 10% Calfskin",
    "categories": ["Bags", "Women", "underarm"],
    "colors": ["yellow", "orange", "pink"],
    "sizes": ["default"],
    "images": [
      {
        "color": "yellow",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_sicily_amarillo_01.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_sicily_amarillo_02.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_sicily_amarillo_03.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_sicily_amarillo_04.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_sicily_amarillo_05.jpg"
        ]
      },
      {
        "color": "orange",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_sicily_naranja_01.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_sicily_naranja_02.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_sicily_naranja_03.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_sicily_naranja_04.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_sicily_naranja_05.jpg"
        ]
      },
      {
        "color": "pink",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_sicily_rosa_01.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_sicily_rosa_02.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_sicily_rosa_03.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_sicily_rosa_04.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_sicily_rosa_05.jpg"
        ]
      }
    ],
    "price": 1745,
    "stock": [
      {
        "color": "yellow",
        "stock": "100",
        "sold": 0
      },
      {
        "color": "orange",
        "stock": "100",
        "sold": 0
      },
      {
        "color": "pink",
        "stock": "100",
        "sold": 0
      }
    ]
  },
  {
    "name": "Small Sicily handbag",
    "brand": "Dolce & Gabbana",
    "description": "An icon of the brand, the Sicily bag is practical and compact, and ideal for carrying personal belongings. Made of Dauphine calfskin, it features an adjustable and removable strap and is embellished with a big-galvanized logo plate.",
    "specification": "@Flap with double concealed magnetic closure at front @Big galvanized logo plaque @Top handle and adjustable and removable strap in Dauphine calfskin @Printed fabric lining and flat pocket @Item with logoed protective pouch @Measurements: W13 x L19 x D6 cm @Made in Italy @Composition de l'extérieur : 100% Cuir de veau @Composition de l'intérieur : 80% Cotton 20% Cuir de veau",
    "categories": ["Bags", "Women", "underarm"],
    "colors": ["yellow", "orange", "pink"],
    "sizes": ["default"],
    "images": [
      {
        "color": "yellow",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_sicilysmall_amarillo_01.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_sicilysmall_amarillo_02.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_sicilysmall_amarillo_03.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_sicilysmall_amarillo_04.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_sicilysmall_amarillo_05.jpg"
        ]
      },
      {
        "color": "orange",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_sicilysmall_naranja_01.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_sicilysmall_naranja_02.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_sicilysmall_naranja_03.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_sicilysmall_naranja_04.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_sicilysmall_naranja_05.jpg"
        ]
      },
      {
        "color": "pink",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_sicilysmall_rosa_01.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_sicilysmall_rosa_02.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_sicilysmall_rosa_03.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_sicilysmall_rosa_04.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_sicilysmall_rosa_05.jpg"
        ]
      }
    ],
    "price": 1495,
    "stock": [
      {
        "color": "yellow",
        "stock": "100",
        "sold": 0
      },
      {
        "color": "orange",
        "stock": "100",
        "sold": 0
      },
      {
        "color": "pink",
        "stock": "100",
        "sold": 0
      }
    ]
  },
  {
    "name": "KIM DOLCE&GABBANA Medium Sicily handbag",
    "brand": "Dolce & Gabbana",
    "description": "The fusion and alchemy between the history and creativity of the designers and the contemporary vision of Kim Kardashian, an icon of style and beauty, make up the heart of the new Sfilata collection. The brand's origins and precious archives are reinterpreted to breathe new life into Dolce&Gabbana's DNA.",
    "specification": "@Flap with double concealed magnetic closure at front @Big galvanized logo plate @Top handle and adjustable and removable strap in shiny calfskin @Printed fabric lining @Inner zip pocket with logo and smartphone pocket @Metal braces on back base @Item with protective bag with logo @Measurements: W18.5 x L20 x D10 cm @Made in Italy @External composition: 100% Calfskin @Internal composition: 88% Cotton 12% Calfskin",
    "categories": ["Bags", "Women", "underarm"],
    "colors": ["grey", "black", "beige"],
    "sizes": ["default"],
    "images": [
      {
        "color": "grey",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_KIMsicily_gris_01.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_KIMsicily_gris_02.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_KIMsicily_gris_03.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_KIMsicily_gris_04.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_KIMsicily_gris_05.jpg"
        ]
      },
      {
        "color": "black",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_KIMsicily_negro_01.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_KIMsicily_negro_02.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_KIMsicily_negro_03.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_KIMsicily_negro_04.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_KIMsicily_negro_05.jpg"
        ]
      },
      {
        "color": "beige",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_KIMsicily_beige_01.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_KIMsicily_beige_02.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_KIMsicily_beige_03.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_KIMsicily_beige_04.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_KIMsicily_beige_05.jpg"
        ]
      }
    ],
    "price": 1945,
    "stock": [
      {
        "color": "grey",
        "stock": "100",
        "sold": 0
      },
      {
        "color": "black",
        "stock": "100",
        "sold": 0
      },
      {
        "color": "beige",
        "stock": "100",
        "sold": 0
      }
    ]
  },
  {
    "name": "Large Devotion bag in quilted nappa leather",
    "brand": "Dolce & Gabbana",
    "description": "The new large bag in the Devotion line is made of quilted nappa leather. Characterized by double quilting and the iconic leopard print lining, it presents the exclusive heart-shaped jewel clasp with a vintage gold finish and a strap inspired by the haute jewelery manufacture.",
    "specification": "@Sliding chain strap with nappa insert, to allow it to be worn on the shoulder or across the body @Front flap with jeweled heart with logo handcrafted with metal alloy and pearls @Concealed press-stud closure @Printed fabric interior with pocket characterized by the zipper with Devotion slider @Article supplied with a protective bag with the @Measures logo. 16 x 26 x 5 cm @Made in Italy @External composition: 100% Lambskin @Internal composition: 55% Lambskin, 45% Cotton",
    "categories": ["Bags", "Women", "underarm"],
    "colors": ["white", "black", "red"],
    "sizes": ["default"],
    "images": [
      {
        "color": "white",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_DevotionGrande_blanco_01.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_DevotionGrande_blanco_02.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_DevotionGrande_blanco_03.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_DevotionGrande_blanco_04.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_DevotionGrande_blanco_05.jpg"
        ]
      },
      {
        "color": "black",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_DevotionGrande_negro_01.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_DevotionGrande_negro_02.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_DevotionGrande_negro_03.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_DevotionGrande_negro_04.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_DevotionGrande_negro_05.jpg"
        ]
      },
      {
        "color": "red",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_DevotionGrande_rojo_01.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_DevotionGrande_rojo_02.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_DevotionGrande_rojo_03.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_DevotionGrande_rojo_04.jpg"
        ]
      }
    ],
    "price": 2795,
    "stock": [
      {
        "color": "white",
        "stock": "100",
        "sold": 0
      },
      {
        "color": "black",
        "stock": "100",
        "sold": 0
      },
      {
        "color": "red",
        "stock": "100",
        "sold": 0
      }
    ]
  },
  {
    "name": "Mixed-materials Daymaster sneakers",
    "brand": "Dolce & Gabbana",
    "description": "Understated and light, these nylon Daymaster sneakers feature suede and rubberized calfskin details. Featuring the DG logo patch, they have the super-flex rubber sole.",
    "specifications": "@Nylon Daymaster sneakers with calfskin and suede details and the DG logo patch: @Multi-colored @Branded heel cup @Tubular laces with drawstring @Calfskin footbed with branded label @Extra-light rubber bottom assembly @Item comes with a branded dust bag @Made in Italy",
    "categories": ["Sneakers", "Women"],
    "colors": ["Brown"],
    "sizes": [
      "35",
      "35.5",
      "36",
      "36.7",
      "37",
      "37.5",
      "38",
      "38.5",
      "39",
      "39.5",
      "40",
      "40.5",
      "41"
    ],
    "images": [
      {
        "color": "Brown",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Mixed-materialsDaymasterSneakers_Brown_01.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Mixed-materialsDaymasterSneakers_Brown_02.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Mixed-materialsDaymasterSneakers_Brown_03.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Mixed-materialsDaymasterSneakers_Brown_04.webp"
        ]
      }
    ],
    "price": 895,
    "stock": [
      {
        "color": "Brown",
        "stock": 100,
        "sold": 0
      }
    ]
  },
  {
    "name": "Calfskin New Roma sneakers White",
    "brand": "Dolce & Gabbana",
    "description": "The understated shape of the iconic Roma sneakers and the contemporary allure of the Miami line merge to create the New Roma. Coming in 100% calfskin, they feature tonal 3D-effect details and the contrasting DG logo on the tongue.",
    "specifications": "@Calfskin New Roma sneakers: @White @Flat laces @Calfskin footbed with branded label @Branded rubber sole and bottom assembly @Made in Italy",
    "categories": ["Sneakers", "Women"],
    "colors": ["White"],
    "sizes": [
      "35",
      "35.5",
      "36",
      "36.7",
      "37",
      "37.5",
      "38",
      "38.5",
      "39",
      "39.5",
      "40",
      "40.5",
      "41"
    ],
    "images": [
      {
        "color": "White",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_CalfskinNewRomaSneakersWhite_01.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_CalfskinNewRomaSneakersWhite_02.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_CalfskinNewRomaSneakersWhite_03.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_CalfskinNewRomaSneakersWhite_04.jpg"
        ]
      }
    ],
    "price": 775,
    "stock": [
      {
        "color": "White",
        "stock": 100,
        "sold": 0
      }
    ]
  },
  {
    "name": "Calfskin New Roma sneakers Pink",
    "brand": "Dolce & Gabbana",
    "description": "The understated shape of the iconic Roma sneakers and the contemporary allure of the Miami line merge to create the New Roma. Coming in 100% calfskin, it features contrasting 3D-effect details and the DG logo on the tongue.",
    "specifications": "@Calfskin upper @Flat laces @Calfskin footbed with branded label @Branded rubber bottom assembly and branded sole @Item comes with themed packaging @Made in Italy",
    "categories": ["Sneakers", "Women"],
    "colors": ["pink"],
    "sizes": [
      "35",
      "35.5",
      "36",
      "36.7",
      "37",
      "37.5",
      "38",
      "38.5",
      "39",
      "39.5",
      "40",
      "40.5",
      "41"
    ],
    "images": [
      {
        "color": "pink",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Calfskin+New+Roma+sneakers+Pink_01.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Calfskin+New+Roma+sneakers+Pink_02.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Calfskin+New+Roma+sneakers+Pink_03.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Calfskin+New+Roma+sneakers+Pink_04.jpg"
        ]
      }
    ],
    "price": 775,
    "stock": [
      {
        "color": "pink",
        "stock": 100,
        "sold": 0
      }
    ]
  },
  {
    "name": "Calfskin New Roma sneakers Grey",
    "brand": "Dolce & Gabbana",
    "description": "The understated shape of the iconic Roma sneakers and the contemporary allure of the Miami line merge to create the New Roma. Coming in calfskin with nubuck details, they feature contrasting 3D-effect details and the contrasting DG logo on the tongue...",
    "specifications": "@Calfskin New Roma sneakers: @Calfskin upper @Flat laces @Calfskin footbed with branded label @Branded rubber sole and bottom assembly @Made in Italy",
    "categories": ["Sneakers", "Women"],
    "colors": ["Grey"],
    "sizes": [
      "35",
      "35.5",
      "36",
      "36.7",
      "37",
      "37.5",
      "38",
      "38.5",
      "39",
      "39.5",
      "40",
      "40.5",
      "41"
    ],
    "images": [
      {
        "color": "Grey",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Calfskin+New+Roma+sneakers+Grey_01.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Calfskin+New+Roma+sneakers+Grey_02.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Calfskin+New+Roma+sneakers+Grey_03.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Calfskin+New+Roma+sneakers+Grey_04.jpg"
        ]
      }
    ],
    "price": 775,
    "stock": [
      {
        "color": "Grey",
        "stock": 100,
        "sold": 0
      }
    ]
  },
  {
    "name": "Calfskin New Roma sneakers All-White",
    "brand": "Dolce & Gabbana",
    "description": "A new model is joining the sneaker collection. The understated shape of the iconic Roma sneakers and the contemporary allure of the Miami line merge to create the New Roma. Coming in 100% calfskin, they feature tonal 3D-effect details and the contras...",
    "specifications": "@Calfskin upper @Flat laces @Calfskin footbed with branded label @Branded rubber bottom assembly and branded sole @Item comes with themed packaging @Made in Italy",
    "categories": ["Sneakers", "Women"],
    "colors": ["White"],
    "sizes": [
      "35",
      "35.5",
      "36",
      "36.7",
      "37",
      "37.5",
      "38",
      "38.5",
      "39",
      "39.5",
      "40",
      "40.5",
      "41"
    ],
    "images": [
      {
        "color": "White",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Calfskin+New+Roma+sneakersAllWhite_01.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Calfskin+New+Roma+sneakersAllWhite_02.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Calfskin+New+Roma+sneakersAllWhite_03.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Calfskin+New+Roma+sneakersAllWhite_04.jpg"
        ]
      }
    ],
    "price": 775,
    "stock": [
      {
        "color": "White",
        "stock": 100,
        "sold": 0
      }
    ]
  },
  {
    "name": "Calfskin Portofino sneakers",
    "brand": "Dolce & Gabbana",
    "description": "These iconic Portofino sneakers come in calfskin nappa leather. Featuring understated lines, they are embellished with the DG logo patch in two-tone calfskin.",
    "specifications": "@Calfskin Portofino sneakers with DG logo patch: @White @Calfskin heel cup @Flat laces @Calfskin insole with branded label @Rubber bottom with branded spoiler @Branded rubber sole @Item comes with a branded dust bag @Made in Italy",
    "categories": ["Sneakers", "Women"],
    "colors": ["Pink"],
    "sizes": [
      "35",
      "35.5",
      "36",
      "36.7",
      "37",
      "37.5",
      "38",
      "38.5",
      "39",
      "39.5",
      "40",
      "40.5",
      "41"
    ],
    "images": [
      {
        "color": "Pink",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Calfskin+Portofino+sneakers_01.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Calfskin+Portofino+sneakers_02.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Calfskin+Portofino+sneakers_03.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Calfskin+Portofino+sneakers_04.jpg"
        ]
      }
    ],
    "price": 725,
    "stock": [
      {
        "color": "Pink",
        "stock": 100,
        "sold": 0
      }
    ]
  },
  {
    "name": "Portofino vintage calfskin sneakers",
    "brand": "Dolce & Gabbana",
    "description": "These iconic Portofino sneakers come in a new version boasting vintage allure featuring soft, deconstructed lines.",
    "specifications": "@Calfskin Portofino Vintage sneakers: @White @Contrasting calfskin heel cup @Flat laces @Calfskin footbed with branded label @Rubber bottom with branded spoiler @Branded rubber sole @Item comes with a branded dust bag @Made in Italy",
    "categories": ["Sneakers", "Women"],
    "colors": ["Pink"],
    "sizes": [
      "35",
      "35.5",
      "36",
      "36.7",
      "37",
      "37.5",
      "38",
      "38.5",
      "39",
      "39.5",
      "40",
      "40.5",
      "41"
    ],
    "images": [
      {
        "color": "Pink",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Portofino+vintage+calfskin+sneakers_01.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Portofino+vintage+calfskin+sneakers_02.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Portofino+vintage+calfskin+sneakers_03.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Portofino+vintage+calfskin+sneakers_04.jpg"
        ]
      }
    ],
    "price": 525,
    "stock": [
      {
        "color": "Pink",
        "stock": 100,
        "sold": 0
      }
    ]
  },
  {
    "name": "Portofino vintage calfskin sneakers White Black & Gold",
    "brand": "Dolce & Gabbana",
    "description": "These iconic Portofino sneakers come in a new version boasting vintage allure featuring soft, deconstructed lines.",
    "specifications": "@Calfskin Portofino Vintage sneakers: @White @Contrasting foiled Dauphine calfskin heel cup @Flat laces @Calfskin footbed with branded label @Rubber bottom with branded spoiler @Branded rubber sole @Item comes with a branded dust bag @Made in Italy",
    "categories": ["Sneakers", "Women"],
    "colors": ["White"],
    "sizes": [
      "35",
      "35.5",
      "36",
      "36.7",
      "37",
      "37.5",
      "38",
      "38.5",
      "39",
      "39.5",
      "40",
      "40.5",
      "41"
    ],
    "images": [
      {
        "color": "White",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Portofino+vintage+calfskin+sneakers+White+Black+%26+Gold_01.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Portofino+vintage+calfskin+sneakers+White+Black+%26+Gold_02.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Portofino+vintage+calfskin+sneakers+White+Black+%26+Gold_03.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Portofino+vintage+calfskin+sneakers+White+Black+%26+Gold_04.jpg"
        ]
      }
    ],
    "price": 575,
    "stock": [
      {
        "color": "White",
        "stock": 100,
        "sold": 0
      }
    ]
  },
  {
    "name": "Portofino vintage calfskin sneakers DG",
    "brand": "Dolce & Gabbana",
    "description": "These iconic Portofino sneakers come in a new version boasting vintage allure featuring soft, deconstructed lines.",
    "specifications": "@Portofino Vintage calfskin sneakers with rhinestone-detailed DG logo: @White @Contrasting foiled Dauphine calfskin heel cup @Flat laces @Calfskin footbed with branded label @Rubber bottom with branded spoiler @Branded rubber sole @Item comes with a branded dust bag @Made in Italy",
    "categories": ["Sneakers", "Women"],
    "colors": ["White"],
    "sizes": [
      "35",
      "35.5",
      "36",
      "36.7",
      "37",
      "37.5",
      "38",
      "38.5",
      "39",
      "39.5",
      "40",
      "40.5",
      "41"
    ],
    "images": [
      {
        "color": "White",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Portofino+vintage+calfskin+sneakers+DG_01.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Portofino+vintage+calfskin+sneakers+DG_02.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Portofino+vintage+calfskin+sneakers+DG_03.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Portofino+vintage+calfskin+sneakers+DG_04.jpg"
        ]
      }
    ],
    "price": 945,
    "stock": [
      {
        "color": "White",
        "stock": 100,
        "sold": 0
      }
    ]
  },
  {
    "name": "Stretch mesh Fast sneakers White & Black",
    "brand": "Dolce & Gabbana",
    "description": "The iconic Sorrento slip-on sneakers come in a new contemporary version. Featuring the new ultra-light sole, they come in stretch mesh with the logo tape print and have contrasting details that emphasize the silhouette.",
    "specifications": "@Stretch mesh Fast sneakers with logo: @Printed stretch knit upper @Branded pull-tab @Calfskin footbed with branded label @Extra-light two-tone sole @Packaging matches the item @Made in Italy",
    "categories": ["Sneakers", "Women"],
    "colors": ["White"],
    "sizes": [
      "35",
      "35.5",
      "36",
      "36.7",
      "37",
      "37.5",
      "38",
      "38.5",
      "39",
      "39.5",
      "40",
      "40.5",
      "41"
    ],
    "images": [
      {
        "color": "White",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Stretch+mesh+Fast+sneakers+White+%26+Black_01.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Stretch+mesh+Fast+sneakers+White+%26+Black_02.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Stretch+mesh+Fast+sneakers+White+%26+Black_03.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Stretch+mesh+Fast+sneakers+White+%26+Black_04.webp"
        ]
      }
    ],
    "price": 695,
    "stock": [
      {
        "color": "White",
        "stock": 100,
        "sold": 0
      }
    ]
  },
  {
    "name": "Stretch mesh Fast sneakers Pink",
    "brand": "Dolce & Gabbana",
    "description": "The iconic Sorrento slip-on sneakers come in a new contemporary version. Featuring the new ultra-light sole, they come in stretch mesh with the logo tape print and have contrasting details that emphasize the silhouette.",
    "specifications": "@Stretch mesh Fast sneakers with logo: @Printed stretch knit upper @Branded pull-tab @Calfskin footbed with branded label @Extra-light two-tone sole @Packaging matches the item @Made in Italy",
    "categories": ["Sneakers", "Women"],
    "colors": ["Pink"],
    "sizes": [
      "35",
      "35.5",
      "36",
      "36.7",
      "37",
      "37.5",
      "38",
      "38.5",
      "39",
      "39.5",
      "40",
      "40.5",
      "41"
    ],
    "images": [
      {
        "color": "Pink",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Stretch+mesh+Fast+sneakers+Pink_01.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Stretch+mesh+Fast+sneakers+Pink_02.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Stretch+mesh+Fast+sneakers+Pink_03.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Stretch+mesh+Fast+sneakers+Pink_04.webp"
        ]
      }
    ],
    "price": 695,
    "stock": [
      {
        "color": "Pink",
        "stock": 100,
        "sold": 0
      }
    ]
  },
  {
    "name": "Stretch mesh Fast sneakers Gabbana",
    "brand": "Dolce & Gabbana",
    "description": "The iconic Sorrento slip-on sneakers come in a new contemporary version. Featuring the new ultra-light sole, they come in stretch mesh with the logo tape print and have contrasting details that emphasize the silhouette.",
    "specifications": "@Stretch mesh Fast sneakers with logo: @Printed stretch knit upper @Branded pull-tab @Calfskin footbed with branded label @Extra-light two-tone sole @Packaging matches the item @Made in Italy",
    "categories": ["Sneakers", "Women"],
    "colors": ["Black"],
    "sizes": [
      "35",
      "35.5",
      "36",
      "36.7",
      "37",
      "37.5",
      "38",
      "38.5",
      "39",
      "39.5",
      "40",
      "40.5",
      "41"
    ],
    "images": [
      {
        "color": "Black",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Stretch+mesh+Fast+sneakers+Gabbana_01.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Stretch+mesh+Fast+sneakers+Gabbana_02.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Stretch+mesh+Fast+sneakers+Gabbana_03.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Stretch+mesh+Fast+sneakers+Gabbana_04.jpg"
        ]
      }
    ],
    "price": 695,
    "stock": [
      {
        "color": "Black",
        "stock": 100,
        "sold": 0
      }
    ]
  },
  {
    "name": "Limited edition Portofino sneakers #1",
    "brand": "Dolce & Gabbana",
    "description": "Exclusively available on the Online Store. Dolce&Gabbana presents the collection of Limited Edition sneakers for Her and for Him, decorated by unique designs, that are hand painted and sewn by our artisans",
    "specifications": "@The Limited Edition sneakers are made exclusively for you and will be delivered for free within 3 weeks. @Portofino line sneakers in calfskin with Dolce&Gabbana logo on the heel. @Calfskin upper @Flat laces @Calfskin insole with logo on label @Rubber sole with logo @Made in Italy",
    "categories": ["Sneakers", "Women"],
    "colors": ["Pink"],
    "sizes": [
      "35",
      "35.5",
      "36",
      "36.7",
      "37",
      "37.5",
      "38",
      "38.5",
      "39",
      "39.5",
      "40",
      "40.5",
      "41"
    ],
    "images": [
      {
        "color": "Pink",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Limited+edition+Portofino+sneakers+%231_01.webp",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Limited+edition+Portofino+sneakers+%231_02.webp",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Limited+edition+Portofino+sneakers+%231_03.webp",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Limited+edition+Portofino+sneakers+%231_04.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Limited+edition+Portofino+sneakers+%231_05.jpg"
        ]
      }
    ],
    "price": 995,
    "stock": [
      {
        "color": "Pink",
        "stock": 100,
        "sold": 0
      }
    ]
  },
  {
    "name": "Limited edition Portofino sneakers #2",
    "brand": "Dolce & Gabbana",
    "description": "Exclusively available on the Online Store. Dolce&Gabbana presents the collection of Limited Edition sneakers for Her and for Him, decorated by unique designs, that are hand painted and sewn by our artisans.",
    "specifications": "@The Limited Edition sneakers are made exclusively for you and will be delivered for free within 3 weeks. @Portofino line sneakers in calfskin with Dolce&Gabbana logo on the heel. @Calfskin upper @Flat laces @Calfskin insole with logo on label @Rubber sole with logo @Made in Italy",
    "categories": ["Sneakers", "Women"],
    "colors": ["Pink"],
    "sizes": [
      "35",
      "35.5",
      "36",
      "36.7",
      "37",
      "37.5",
      "38",
      "38.5",
      "39",
      "39.5",
      "40",
      "40.5",
      "41"
    ],
    "images": [
      {
        "color": "Pink",
        "images": [
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Limited+edition+Portofino+sneakers+%232_01.webp",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Limited+edition+Portofino+sneakers+%232_02.webp",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Limited+edition+Portofino+sneakers+%232_03.webp",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Limited+edition+Portofino+sneakers+%232_03.webp",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Limited+edition+Portofino+sneakers+%232_04.jpg",
          "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Sneakers/Dolce%26Gabbana_Limited+edition+Portofino+sneakers+%232_05.jpg"
        ]
      }
    ],
    "price": 945,
    "stock": [
      {
        "color": "Pink",
        "stock": 100,
        "sold": 0
      }
    ]
  }
  // BAGS & SUNGLASSES & SNEAKERS INAKI

  

    ])
  }else{
    res.status(403).json({message: "Token not authorized"})
  }
})

// --------- Jimmy Choo -------->  (Women Completed)
app.get("/jimmyChoo/women/:token", (req, res)=>{
  if(req.params.token === TOKEN){
    res.status(200).json([
      {
        "name":"Diamond Chain Necklace",
        "brand":"Jimmy Choo",
        "description":"Our Diamond chain necklace is elegant in its simplicity, crafted in gold-finish metal, taking signatures from our Diamond collection with a geometric design. Pair with off-duty ensembles for effortless charm.",
        "specifications":"@Nickel-free brass with gold metal finishing. @Diamond Collection inspired design. @Chain length: 43cm. @Comes in a Jimmy Choo pouch and box. @Made in Italy. @Due to its handcrafted nature, every style is unique and there may be small differences between the pieces." ,
        "categories":["Accessories","Women","Chain Necklace"],
        "colors": ["Gold"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Gold",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+1/DiamondChainNecklace-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+1/DiamondChainNecklace-modelo1.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+1/DiamondChainNecklace-zoom.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+1/DiamondChainNecklace-zoom2.webp"]
            }
        ],
        "price": 795,
        "stock": [
            {
                "color":"Gold",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Diamond Chain Hoops M",
        "brand":"Jimmy Choo",
        "description":"Our Diamond chain hoop earrings are elegant in their simplicity, crafted in gold-finish metal, taking signatures from our Diamond collection with a geometric design. Pair with off-duty ensembles for effortless charm.",
        "specifications":"@Nickel-free brass with gold metal finishing. @Diamond Collection inspired design. @Size: 6cm x 6cm. @Comes in a Jimmy Choo pouch and box. @Made in Italy. @Due to its handcrafted nature, every style is unique and there may be small differences between the pieces. @Please note that this product is not eligible for return." ,
        "categories":["Accessories","Women","Earring"],
        "colors": ["Gold"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Gold",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+2/DiamondAretesHoops-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+2/DiamondAretesHoops-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+2/DiamondAretesHoops-brand.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+2/DiamondAretesHoops-modelo1.webp"]
            }
        ],
        "price": 450,
        "stock": [
            {
                "color":"Gold",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Diamond Chain Earring",
        "brand":"Jimmy Choo",
        "description":"Our Diamond chain earrings are elegant in their simplicity, crafted in gold-finish metal, taking signatures from our Diamond collection with a geometric design. Pair with off-duty ensembles for effortless charm.",
        "specifications":"@Nickel-free brass with gold metal finishing. @Diamond Collection inspired design. @Size: 1cm x 2cm. @Comes in a Jimmy Choo pouch and box. @Made in Italy. @Due to its handcrafted nature, every style is unique and there may be small differences between the pieces. @Please note that this product is not eligible for return." ,
        "categories":["Accessories","Women","Earring"],
        "colors": ["Gold"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Gold",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+3/DiamondAretesEarring-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+3/DiamondAretesEarring-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+3/DiamondAretesEarring-brand.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+3/DiamondAretesEarring-modelo.webp"]
            }
        ],
        "price": 350,
        "stock": [
            {
                "color":"Gold",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Diamond Chain Bracelet",
        "brand":"Jimmy Choo",
        "description":"Our Diamond chain bracelet is elegant in its simplicity, crafted in gold-finish metal, taking signatures from our Diamond collection with a geometric design. Complete with a clasp closure, pair with off-duty ensembles for effortless charm.",
        "specifications":"@Nickel-free brass with gold metal finishing. @Diamond Collection inspired design. @Clasp closure. @Chain length: 18cm. @Comes in a Jimmy Choo pouch and box. @Made in Italy. @Due to its handcrafted nature, every style is unique and there may be small differences between the pieces." ,
        "categories":["Accessories","Women","Bracelet"],
        "colors": ["Gold"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Gold",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+4/DiamondBraceletChain-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+4/DiamondBraceletChain-zoom1.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+4/DiamondBraceletChain-zoom2.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+4/DiamondBraceletChain-modelo.webp"]
            }
        ],
        "price": 550,
        "stock": [
            {
                "color":"Gold",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Auri ",
        "brand":"Jimmy Choo",
        "description":"The Auri ring combines is an elegant piece in gold-finish metal with pearl and crystal embellishment. They're a perfect pairing with our Auri earrings for a timeless look",
        "specifications":"@Nickel-free brass with gold metal finishing. @Pearl and crystal embellishment. @Comes in a Jimmy Choo pouch and box. @Due to its handcrafted nature, every style is unique and there may be small differences between the pieces." ,
        "categories":["Accessories","Women","Ring"],
        "colors": ["Gold"],
        "sizes": ["XXS","XS","S","M","L"],
        "images":[
            {
                "color":"Gold",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+5/AuriRing-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+5/AuriRing-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+5/AuriRing-brand.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+5/AuriRing-modelo1.webp"]
            }
        ],
        "price": 350,
        "stock": [
            {
                "color":"Gold",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Auri",
        "brand":"Jimmy Choo",
        "description":"The Auri earrings combine elegance with modernity in gold-finish metal decorated with signature crystals and pearls. Pair with our Auri ring for a timeless look.",
        "specifications":"@Nickel-free brass with gold metal finishing. @Pearl and crystal embellishment. @Comes in a Jimmy Choo pouch and box. @Due to its handcrafted nature, every style is unique and there may be small differences between the pieces. @Please note that this product is not eligible for return" ,
        "categories":["Accessories","Women","Earring"],
        "colors": ["Gold"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Gold",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+6/AuriEarring-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+6/AuriEarring-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+6/AuriEarring-brand.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+6/AuriEarring-modelo.webp"]
            }
        ],
        "price": 625,
        "stock": [
            {
                "color":"Gold",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Diamond Clasp Belt",
        "brand":"Jimmy Choo",
        "description":"A signature motif in our Diamond family, our leather belt is a complementing accessory for your collection. With a distinct metal clasp, it's a perfect pairing with both evening and day looks and an ideal match with handbags from our Diamond collection.",
        "specifications":"@Polished calf leather. @Adjustable clasp fastening. @Made in Italy." ,
        "categories":["Accessories","Women","Belt"],
        "colors": ["Black","Red","White"],
        "sizes": ["75","80","85","90","95","100","110"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+7/Black/DiamondClaspBelt-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+7/Black/DiamondClaspBelt-brand.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+7/Black/DiamondClaspBelt-reverse.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+7/Black/DiamondClaspBelt-modelo1.webp"]
            },
            {
                "color":"Red",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+7/Red/DiamondClaspBelt-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+7/Red/DiamondClaspBelt-reverse.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+7/Red/DiamondClaspBelt-brand.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+7/Red/DiamondClaspBelt-zoom.webp"]
            },
            {
                "color":"White",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+7/White/DiamondClaspBelt-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+7/White/DiamondClaspBelt-reverse.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+7/White/DiamondClaspBelt-brand.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+7/White/DiamondClaspBelt-zoom.webp"]
            }
        ],
        "price": 395,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            },
            {
                "color":"Red",
                "stock":100,
                "sold":0
            },
            {
                "color":"White",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Diamond Chain Belt/S",
        "brand":"Jimmy Choo",
        "description":"A signature motif in our Diamond family, our chain belt is a complementing accessory for your collection. With a distinct metal chain and JC emblem, it's a perfect pairing with both evening and day looks and an ideal match with handbags from our Diamond collection.",
        "specifications":"@Polished calf leather. @Chain fastening. @Belt width: 2cm. @Made in Italy." ,
        "categories":["Accessories","Women","Belt"],
        "colors": ["Black"],
        "sizes": ["M/L","S/M"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+8/DiamondChainBelt-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+8/DiamondChainBelt-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+8/DiamondChainBelt-brand.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+8/DiamondChainBelt-zoom.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+8/DiamondChainBelt-modelo1.webp"]
            }
        ],
        "price": 1050,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Avenue Wallet W/Chain",
        "brand":"Jimmy Choo",
        "description":"Our Avenue wallet is a timeless style for every day that features our signature matelassé motif. Crafted to a clean, streamlined shape, unzip it to reveal an organised interior for separating your most used cards, notes and loose change.",
        "specifications":"@Avenue Nappa leather. @Fold-over style. @Chain strap. @Interior card slots and note pockets. @Bag measures: L 19 x H 10 x W 4cm. @Made in Italy." ,
        "categories":["Accessories","Women","Wallet"],
        "colors": ["Gold","Red"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Gold",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+9/Gold/WalletAvenue-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+9/Gold/WalletAvenue-horizontal.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+9/Gold/WalletAvenue-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+9/Gold/WalletAvenue-modelo1.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+9/Gold/WalletAvenue-modelo2.webp"]
            },
            {
                "color":"Red",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+9/Red/WalletAvenue-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+9/Red/WalletAvenue-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+9/Red/WalletAvenue-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+9/Red/WalletAvenue-modelo1.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+9/Red/WalletAvenue-modelo2.webp"]
            }
        ],
        "price": 950,
        "stock": [
            {
                "color":"Gold",
                "stock":100,
                "sold":0
            },
            {
                "color":"Red",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Lise-Z",
        "brand":"Jimmy Choo",
        "description":"Our black quilted nappa leather card holder is a streamlined accessory ideal for neatly stowing away essentials. It’s crafted in Italy to a slender shape and decorated with the signature light gold JC emblem. Take yours with you everywhere.",
        "specifications":"@Quilted nappa leather. @JC emblem. @Zip closure. @5 card slots. @Key ring. @Bag Measures: L 14 x H 7.5 x W 0.5 cm. @Made in Italy." ,
        "categories":["Accessories","Women","Wallet"],
        "colors": ["Black"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+10/Lise-Z-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+10/Lise-Z-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+10/Lise-Z-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+10/Lise-Z-brand.webp"]
            }
        ],
        "price": 395,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Card Holder W/Chain",
        "brand":"Jimmy Choo",
        "description":"Stay stylishly organised with our leather card holder. Crafted in smooth leather it's complemented by our signature JC logo. This streamlined design features a chain strap and card slots for your daily essentials.",
        "specifications":"@Smooth leather. @Jimmy Choo logo. @Card compartments. @Chain strap. @Bag measures: L 7 x H 1 x W 2cm. @Made in Italy." ,
        "categories":["Accessories","Women","Card Holder"],
        "colors": ["Black","Pink"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+11/Black/CardHolder-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+11/Black/CardHolder-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+11/Black/CardHolder-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+11/Black/CardHolder-brand.webp"]
            },
            {
                "color":"Pink",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+11/Pink/CardHolder-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+11/Pink/CardHolder-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+11/Pink/CardHolder-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+11/Pink/CardHolder-brand.webp"]
            }
        ],
        "price": 315,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            },
            {
                "color":"Pink",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Bag Strap",
        "brand":"Jimmy Choo",
        "description":"Unmistakably Jimmy Choo featuring our signature logo, our bag strap is crafted in ribbon and features metal clasps; the perfect complement to a tote.",
        "specifications":"@Ribbon. @Jimmy Choo branding. @Metal clasps. @Made in Italy." ,
        "categories":["Accessories","Women","Bag Strap"],
        "colors": ["Black"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+12/BagStrap-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+12/BagStrap-brand.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+12/BagStrap-zoom.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+12/BagStrap-modelo1.webp"]
            }
        ],
        "price": 235,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Zana",
        "brand":"Jimmy Choo",
        "description":"A subversive statement piece for your seasonal wardrobe. Crafted from 100% wool, our Zana balaclava is knitted in latte, featuring the Jimmy Choo logo. Perfect for warm, off-duty looks for effortless style.",
        "specifications":"@100% wool. @Intarsia Jimmy Choo logo. @One Size. @Made in Italy." ,
        "categories":["Accessories","Women","Balaclava"],
        "colors": ["Black","Beige"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+13/Black/Zana-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+13/Black/Zana-brand.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+13/Black/Zana-reverse.webp"]
            },
            {
                "color":"Beige",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+13/Beige/Zana-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+13/Beige/Zana-brand.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+13/Beige/Zana-reverse.webp"]
            }
        ],
        "price": 295,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            },
            {
                "color":"Beige",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Renata",
        "brand":"Jimmy Choo",
        "description":"A wardrobe essential, the RENATA bucket hat is crafted in Italy from denim. Arriving with a classic bucket silhouette, it is decorated with JC monogram-jacquard motifs and finished with tonal stitching. Wear yours everywhere.",
        "specifications":"@Denim. @Cotton lining. @JC monogram-jacquard. @Ribbed brim. @One size. @Made in Italy." ,
        "categories":["Accessories","Women","Bucket Hat"],
        "colors": ["Black","Gold","LightBlue","White"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+14/Black/Renata-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+14/Black/Renata-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+14/Black/Renata-reverse.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+14/Black/Renata-zoom.webp"]
            },
            {
                "color":"Gold",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+14/Gold/Renata-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+14/Gold/Renata-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+14/Gold/Renata-reverse.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+14/Gold/Renata-zoom.webp"]
            },
            {
                "color":"LightBlue",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+14/LightBlue/Renata-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+14/LightBlue/Renata-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+14/LightBlue/Renata-brand.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+14/LightBlue/Renata-reverse.webp"]
            },
            {
                "color":"White",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+14/White/Renata-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+14/White/Renata-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+14/White/Renata-brand.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+14/White/Renata-reverse.jpg"]
            }
        ],
        "price": 495,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            },
            {
                "color":"Gold",
                "stock":100,
                "sold":0
            },
            {
                "color":"LightBlue",
                "stock":100,
                "sold":0
            },
            {
                "color":"White",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Paxy",
        "brand":"Jimmy Choo",
        "description":"The signature JC monogram takes centre stage on the PAXY baseball cap. Our must-have accessory arrives in candy pink and is crafted in Italy from 100% cotton. Complete off-duty dressing as you shade from the sun or see off showers.",
        "specifications":"@100% cotton. @Polyurethane JC monogram. @Total depth of baseball hat: approximately 17cm. @Made in Italy." ,
        "categories":["Accessories","Women","Cap"],
        "colors": ["Beige","Black","Pink","White"],
        "sizes": ["ML","SM"],
        "images":[
            {
                "color":"Beige",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+15/Beige/Paxy-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+15/Beige/Paxy-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+15/Beige/Paxy-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+15/Beige/Paxy-brand.webp"]
            },
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+15/Black/Paxy-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+15/Black/Paxy-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+15/Black/Paxy-reverse.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+15/Black/Paxy-brand.webp"]
            },
            {
                "color":"Pink",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+15/Pink/Paxy-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+15/Pink/Paxy-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+15/Pink/Paxy-brand.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+15/Pink/Paxy-reverse.webp"]
            },
            {
                "color":"White",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+15/White/Paxy-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+15/White/Paxy-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+15/White/Paxy-reverse.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+15/White/Paxy-brand.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Accesories/Modelo+15/White/Paxy-modelo.webp"]
            }
        ],
        "price": 450,
        "stock": [
            {
                "color":"Beige",
                "stock":100,
                "sold":0
            },
            {
                "color":"Black",
                "stock":100,
                "sold":0
            },
            {
                "color":"Pink",
                "stock":100,
                "sold":0
            },
            {
                "color":"White",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Diamond Top Handle",
        "brand":"Jimmy Choo",
        "description":"Timeless in luxe leather, our Diamond top handle bag is complemented by distinct hardware, signature to the collection. With a top handle and detachable shoulder strap, it's a versatile style that can be worn endlessly.",
        "specifications":"@Box calf leather. @'Diamond' hardware. @Top handle. @Detachable crossbody strap. @Foldover button closure. @Bag measures: L 22cm W 9cm H 16cm. @Made in Italy." ,
        "categories":["Bags","Women"],
        "colors": ["Black","Rosybrown"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+1/Black/DiamondTopHandle-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+1/Black/DiamondTopHandle-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+1/Black/DiamondTopHandle-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+1/Black/DiamondTopHandle-modelo1.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+1/Black/DiamondTopHandle-modelo2.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+1/Black/DiamondTopHandle-video.mp4"]
            },
            {
                "color":"Rosybrown",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+1/rosybrown/DiamondTopHandle-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+1/rosybrown/DiamondTopHandle-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+1/rosybrown/DiamondTopHandle-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+1/rosybrown/DiamondTopHandle-modelo1.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+1/rosybrown/DiamondTopHandle-modelo2.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+1/rosybrown/DiamondTopHandle-video.mp4"]
            }
        ],
        "price": 2160,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            },
            {
                "color":"Rosybrown",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Diamond Crossbody",
        "brand":"Jimmy Choo",
        "description":"Timeless in luxe leather, our Diamond crossbody bag is complemented by distinct hardware, signature to the collection. With a chain strap and an adjustable shoulder strap, it's a versatile style that can be worn endlessly.",
        "specifications":"@Box leather. @'Diamond' hardware. @Chain strap. @Adjustable crossbody strap. @Foldover button closure. @Bag measures: L 22.5cm W 11cm H 15cm. @Made in Italy." ,
        "categories":["Bags","Women"],
        "colors": ["Black","Red"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+2/Black/DiamondCrossbody-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+2/Black/DiamondCrossbody-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+2/Black/DiamondCrossbody-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+2/Black/DiamondCrossbody-modelo1.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+2/Black/DiamondCrossbody-modelo2.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+2/Black/DiamondCrossbody-video.mp4"]
            },
            {
                "color":"Red",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+2/Red/DiamondCrossbody-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+2/Red/DiamondCrossbody-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+2/Red/DiamondCrossbody-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+2/Red/DiamondCrossbody-modelo1.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+2/Red/DiamondCrossbody-modelo2.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+2/Red/DiamondCrossbody-video.mp4"]
            }
        ],
        "price": 2160,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            },
            {
                "color":"Red",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Diamond Crossbody SLV",
        "brand":"Jimmy Choo",
        "description":"Embellished with crystals, our Diamond crossbody bag is a statement style complemented by distinct hardware, signature to the collection. With a chain strap and an adjustable shoulder strap, it's a versatile handbag that can be worn endlessly.",
        "specifications":"@Hotfix crystals. @'Diamond' hardware. @Chain strap. @Adjustable crossbody strap. @Foldover button closure. @Bag measures: L 22.5cm W 11cm H 15cm. @Made in Italy." ,
        "categories":["Bags","Women"],
        "colors": ["Black"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+3/DiamondCrossbody-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+3/DiamondCrossbody-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+3/DiamondCrossbody-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+3/DiamondCrossbody-modelo1.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+3/DiamondCrossbody-modelo2.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+3/DiamondCrossbody-video.webm"]
            }
        ],
        "price": 3440,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Avenue Quad",
        "brand":"Jimmy Choo",
        "description":"A modern yet timeless choice, the Avenue Quad is Italian-crafted in black avenue nappa leather. Unmistakably Jimmy Choo, our foldover style features the signature light gold JC emblem and a lightweight chain and leather strap. Wear our elegant and refined accessory on the shoulder or cross-body.",
        "specifications":"@Quilted nappa leather. @JC emblem. @Magnetic fastening. @Chain and leather strap. @Internal slip pocket. @External back pocket. @Size: L20 x H18 x W5cm. @Shoulder strap: 50cm. @Made in Italy." ,
        "categories":["Bags","Women"],
        "colors": ["Black","Pink","Red"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+4/Black/AvenueQuad-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+4/Black/AvenueQuad-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+4/Black/AvenueQuad-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+4/Black/AvenueQuad-brand.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+4/Black/AvenueQuad-modelo1.webp"]
            },
            {
                "color":"Pink",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+4/Pink/AvenueQuad-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+4/Pink/AvenueQuad-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+4/Pink/AvenueQuad-interior.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+4/Pink/AvenueQuad-brand.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+4/Pink/AvenueQuad-modelo1.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+4/Pink/AvenueQuad-video.mp4"]
            },
            {
                "color":"Red",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+4/Red/AvenueQuad-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+4/Red/AvenueQuad-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+4/Red/AvenueQuad-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+4/Red/AvenueQuad-brand.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+4/Red/AvenueQuad-modelo1.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+4/Red/AvenueQuad-video.mp4"]
            }
        ],
        "price": 1740,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            },
            {
                "color":"Pink",
                "stock":100,
                "sold":0
            },
            {
                "color":"Red",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Avenue Quad GD",
        "brand":"Jimmy Choo",
        "description":"A modern yet timeless choice, the Avenue Quad is Italian-crafted in striking gold avenue metallic nappa leather. Unmistakably Jimmy Choo, our foldover style features the signature light gold JC emblem and a lightweight chain and leather strap. Wear our elegant and refined accessory on the shoulder or cross-body.",
        "specifications":"@Avenue metallic nappa leather. @JC emblem. @Magnetic fastening. @Chain and leather strap. @Internal slip pocket. @External back pocket. @Size: L20 x H18 x W5cm. @Shoulder strap: 50cm. @Made in Italy." ,
        "categories":["Bags","Women"],
        "colors": ["Gold"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Gold",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+5/AvenueQuadGD-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+5/AvenueQuadGD-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+5/AvenueQuadGD-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+5/AvenueQuadGD-brand.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+5/AvenueQuadGD-modelo1.webp"]
            }
        ],
        "price": 1790,
        "stock": [
            {
                "color":"Gold",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Diamond Crossbody MZC",
        "brand":"Jimmy Choo",
        "description":"Statement in beaded tartan, our Diamond crossbody bag is complemented by distinct hardware, signature to the collection. With a chain strap and an adjustable shoulder strap, it's a versatile style that can be worn endlessly.",
        "specifications":"@Satin. @Beaded tartan. @'Diamond' antique silver-tone hardware. @Chain strap. @Adjustable crossbody strap. @Foldover button closure. @Bag measures: L 22.5cm W 11cm H 15cm. @Made in Italy." ,
        "categories":["Bags","Women"],
        "colors": ["Black"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+6/AvenueQuadXS-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+6/AvenueQuadXS-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+6/AvenueQuadXS-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+6/AvenueQuadXS-modelo1.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+6/AvenueQuadXS-modelo2.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+6/AvenueQuadXS-video.mp4"]
            }
        ],
        "price": 4410,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Avenue Quad XS",
        "brand":"Jimmy Choo",
        "description":"A modern yet timeless choice, our Avenue shoulder bag is Italian-crafted in luxurious box leather. Unmistakably Jimmy Choo, our foldover style features a sparkling crystal-embellished bar and the signature gold-tone JC emblem. A striking leather strap with Swarovski crystal and pearls offers the final touch of distinction.",
        "specifications":"@Box leather. @JC emblem. @Crystal-embellished bar. @Internal slip pocket. @Swarovski crystal and pearl strap. @Size: L17 x H15 x W5.5cm. @Shoulder strap: 45cm. @Made in Italy." ,
        "categories":["Bags","Women"],
        "colors": ["Aqua","Black","White"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Aqua",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+7/Aqua/AvenueQuadXS-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+7/Aqua/AvenueQuadXS-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+7/Aqua/AvenueQuadXS-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+7/Aqua/AvenueQuadXS-brand.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+7/Aqua/AvenueQuadXS-modelo1.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+7/Aqua/AvenueQuadXS-video.mp4"]
            },
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+7/Black/AvenueQuadXS-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+7/Black/AvenueQuadXS-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+7/Black/AvenueQuadXS-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+7/Black/AvenueQuadXS-modelo1.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+7/Black/AvenueQuadXS-modelo2.webp"]
            },
            {
                "color":"White",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+7/White/AvenueQuadXS-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+7/White/AvenueQuadXS-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+7/White/AvenueQuadXS-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+7/White/AvenueQuadXS-brand.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+7/White/AvenueQuadXS-modelo.webp"]
            }
        ],
        "price": 1460,
        "stock": [
            {
                "color":"Aqua",
                "stock":100,
                "sold":0
            },
            {
                "color":"Black",
                "stock":100,
                "sold":0
            },
            {
                "color":"White",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Micro Bon Bon",
        "brand":"Jimmy Choo",
        "description":"Our iconic BON BON bag is reimagined in miniature. Italian-crafted in standout gold metallic nappa, the perfectly petite MICRO BON BON features a light gold chain drawstring fastening and a light gold metal bracelet top handle. Prepare for mini proportions and maximum impact.",
        "specifications":"@Metallic Nappa leather. @Metal top handle. @Chain drawstring closure. @Chain strap. @Interior pocket. @Tassel detail. @Measures: L 11.5 x W 7 x H 12 cm. @Handle drop: 8cm. @Shoulder strap: 55cm. @Made in Italy." ,
        "categories":["Bags","Women"],
        "colors": ["Gold","Gray","Pink"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Gold",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+8/Gold/MicroBonBon-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+8/Gold/MicroBonBon-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+8/Gold/MicroBonBon-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+8/Gold/MicroBonBon-modelo1.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+8/Gold/MicroBonBon-modelo2.webp"]
            },
            {
                "color":"Gray",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+8/Gray/MicroBonBon-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+8/Gray/MicroBonBon-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+8/Gray/MicroBonBon-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+8/Gray/MicroBonBon-modelo1.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+8/Gray/MicroBonBon-modelo2.webp"]
            },
            {
                "color":"Pink",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+8/Pink/MicroBonBon-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+8/Pink/MicroBonBon-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+8/Pink/MicroBonBon-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+8/Pink/MicroBonBon-brand.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+8/Pink/MicroBonBon-modelo1.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+8/Pink/MicroBonBon-video.mp4"]
            }
        ],
        "price": 730,
        "stock": [
            {
                "color":"Gold",
                "stock":100,
                "sold":0
            },
            {
                "color":"Gray",
                "stock":100,
                "sold":0
            },
            {
                "color":"Pink",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Diamond Box Clutch",
        "brand":"Jimmy Choo",
        "description":"A signature motif in our Diamond collection, our box clutch is crafted from smooth satin with a hard case. A modern and streamlined accessory for your evening wardrobe, it's finished with a metal clasp and detachable strap for versatile styling.",
        "specifications":"@Satin. @Metal clasp. @Detachable shoulder strap. @Lined interior. @Bag measures: L 18cm W 6.5cm H 12.5cm. @Made in Italy." ,
        "categories":["Bags","Women"],
        "colors": ["Black","Purple"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+9/Black/MicroBonBon-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+9/Black/MicroBonBon-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+9/Black/MicroBonBon-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+9/Black/MicroBonBon-brand.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+9/Black/MicroBonBon-modelo1.webp"]
            },
            {
                "color":"Purple",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+9/Purple/MicroBonBon-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+9/Purple/MicroBonBon-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+9/Purple/MicroBonBon-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+9/Purple/MicroBonBon-brand.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+9/Purple/MicroBonBon-modelo1.webp"]
            }
        ],
        "price": 2390,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            },
            {
                "color":"Purple",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Diamond Box Clutch XS",
        "brand":"Jimmy Choo",
        "description":"A signature motif in our Diamond collection, our box clutch is crafted from luxe Nappa leather with a metallic finish. A modern and streamlined accessory for your evening wardrobe, it's finished with a metal clasp and detachable strap for versatile styling.",
        "specifications":"@Metallic Nappa leather. @Metal clasp. @Detachable shoulder strap. @Lined interior. @Bag measures: L 18cm W 6.5cm H 12.5cm. @Made in Italy." ,
        "categories":["Bags","Women"],
        "colors": ["Gold","Gray"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Gold",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+10/Gold/DiamondBoxClutch-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+10/Gold/DiamondBoxClutch-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+10/Gold/DiamondBoxClutch-brand.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+10/Gold/DiamondBoxClutch-modelo1.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+10/Gold/DiamondBoxClutch-modelo2.webp"]
            },
            {
                "color":"Gray",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+10/Gray/DiamondBoxClutch-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+10/Gray/DiamondBoxClutch-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+10/Gray/DiamondBoxClutch-brand.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+10/Gray/DiamondBoxClutch-modelo1.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+10/Gray/DiamondBoxClutch-modelo2.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+10/Gray/DiamondBoxClutch-video.mp4"]
            }
        ],
        "price": 2390,
        "stock": [
            {
                "color":"Gold",
                "stock":100,
                "sold":0
            },
            {
                "color":"Gray",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Callie Shoulder",
        "brand":"Jimmy Choo",
        "description":"Our statement-making, Callie is presented in satin, decorated with crystal fringe. Featuring a chain shoulder strap detailed with a tassel, its complemented by gold-tone hardware; yours to wear in stand-out evening looks.",
        "specifications":"@Satin. @Crystal fringe. @Chain shoulder strap. @Zip closure. @Bag measures: L 24 x H 2 x W 3.5cm. @Made in Italy" ,
        "categories":["Bags","Women"],
        "colors": ["Gold"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Gold",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+11/CallieShoulder-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+11/CallieShoulder-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+11/CallieShoulder-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+11/CallieShoulder-modelo1.webp"]
            }
        ],
        "price": 5060,
        "stock": [
            {
                "color":"Gold",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Callie Shoulder",
        "brand":"Jimmy Choo",
        "description":"Our statement-making, Callie is presented in satin, decorated with crystal fringe. Featuring a chain shoulder strap detailed with a tassel, its complemented by gold-tone hardware; yours to wear in stand-out evening looks.",
        "specifications":"@Satin. @Crystal fringe. @Chain shoulder strap. @Zip closure. @Bag measures: L 24 x H 2 x W 3.5cm. @Made in Italy." ,
        "categories":["Bags","Women"],
        "colors": ["Pink","Purple"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Pink",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+12/Pink/CallieShoulder-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+12/Pink/CallieShoulder-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+12/Pink/CallieShoulder-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+12/Pink/CallieShoulder-modelo1.webp"]
            },
            {
                "color":"Purple",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+12/Purple/CallieShoulder-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+12/Purple/CallieShoulder-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+12/Purple/CallieShoulder-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+12/Purple/CallieShoulder-modelo1.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+12/Purple/CallieShoulder-modelo2.webp"]
            }
        ],
        "price": 2750,
        "stock": [
            {
                "color":"Pink",
                "stock":100,
                "sold":0
            },
            {
                "color":"Purple",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Avenue Mini Shoulder",
        "brand":"Jimmy Choo",
        "description":"Our mini shoulder bag is a timeless accessory in smooth leather. Crafted to a clean, streamlined shape, it's complemented by our signature JC emblem and features an adjustable shoulder strap.",
        "specifications":"@Smooth leather. @JC emblem. @Adjustable shoulder strap. @Bag measures: L 20.5 x H 11 x W 5cm. @Made in Italy." ,
        "categories":["Bags","Women"],
        "colors": ["Black","Orange","White"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+13/Black/MiniShoulder-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+13/Black/MiniShoulder-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+13/Black/MiniShoulder-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+13/Black/MiniShoulder-brand.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+13/Black/MiniShoulder-modelo1.webp"]
            },
            {
                "color":"Orange",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+13/Orange/MiniShoulder-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+13/Orange/MiniShoulder-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+13/Orange/MiniShoulder-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+13/Orange/MiniShoulder-brand.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+13/Orange/MiniShoulder-modelo1.webp"]
            },
            {
                "color":"White",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+13/White/MiniShoulder-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+13/White/MiniShoulder-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+13/White/MiniShoulder-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+13/White/MiniShoulder-brand.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+13/White/MiniShoulder-modelo1.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+13/White/MiniShoulder-video.mp4"]
            }
        ],
        "price": 1099,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            },
            {
                "color":"Orange",
                "stock":100,
                "sold":0
            },
            {
                "color":"White",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Avenue Mini Shoulder SLV",
        "brand":"Jimmy Choo",
        "description":"Our mini shoulder bag is a timeless silhouette elevated with a glamorous touch in metallic Nappa leather. Crafted to a clean, streamlined shape, it's complemented by our signature JC emblem embellished with crystals and features an adjustable shoulder strap",
        "specifications":"@Metallic Nappa leather. @JC emblem. @Crystal embellishment. @Adjustable shoulder strap. @Bag measures: L 20.5 x H 11 x W 5cm. @Made in Italy." ,
        "categories":["Bags","Women"],
        "colors": ["Gray"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Gray",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+14/MiniShoulderSLV-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+14/MiniShoulderSLV-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+14/MiniShoulderSLV-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+14/MiniShoulderSLV-brand.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+14/MiniShoulderSLV-modelo1.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+14/MiniShoulderSLV-video.mp4"]
            }
        ],
        "price": 1240,
        "stock": [
            {
                "color":"Gray",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Diamond Soft Hobo/S",
        "brand":"Jimmy Choo",
        "description":"A new classic in our Diamond family; our small soft hobo bag is a contemporary addition with a brass chain strap specifically for our Diamond family. Italian-crafted in buttery calf leather to a soft silhouette, giving it an elegant and modern look. Made for versatile styling with a detachable strap.",
        "specifications":"@Calf leather. @Brass hardware. @Zip closure. @Soft draped silhouette. @Shoulder chain, specifically designed for the Diamond family. @Detachable leather strap. @Bag measures: L 25 x H 12 x W 10cm. @Made in Italy." ,
        "categories":["Bags","Women"],
        "colors": ["Black","White"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+15/Black/DiamondSoftHobo-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+15/Black/DiamondSoftHobo-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+15/Black/DiamondSoftHobo-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+15/Black/DiamondSoftHobo-brand.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+15/Black/DiamondSoftHobo-modelo1.webp"]
            },
            {
                "color":"White",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+15/White/DiamondSoftHobo-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+15/White/DiamondSoftHobo-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+15/White/DiamondSoftHobo-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+15/White/DiamondSoftHobo-modelo1.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Bags/Modelo+15/White/DiamondSoftHobo-modelo2.webp"]
            }
        ],
        "price": 1559,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            },
            {
                "color":"White",
                "stock":100,
                "sold":0
            }
            
        ]
      },
      {
        "name":"Didi SLV",
        "brand":"Jimmy Choo",
        "description":"Didi in liquid metal leather is a striking design with a pointed toe silhouette. This slingback shoe features a strap fastening and a modern kick heel. Pair with your evening ensembles to bring statement shine to your wardrobe.",
        "specifications":"@Liquid Metal Leather @Pointed Toe @Strap Fastening @Heel Height: 45mm/1.7 inches @Made in Italy." ,
        "categories":["Heels", "Women"],
        "colors": ["Gray"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Gray",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+1/Didi-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+1/Didi-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+1/Didi-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+1/Didi-mix.webp"]
            }       
        ],
        "price": 975,
        "stock": [
            {
                "color":"Gray",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Didi 45",
        "brand":"Jimmy Choo",
        "description":"Didi is a striking design in tartan fabric. This slingback shoe features a strap fastening and a modern kick heel. Pair with your evening ensembles to bring contemporary glamour to your wardrobe.",
        "specifications":"@Tartan Fabric @Pointed Toe @Strap Fastening @Leather Lining and Sole @Heel Height: 45mm/1.7 inches @Made in Italy." ,
        "categories":["Heels", "Women"],
        "colors": ["Blue"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Blue",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+2/Didi-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+2/Didi-horizontal.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+2/Didi-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+2/Didi-mix.webp"]
            }       
        ],
        "price": 975,
        "stock": [
            {
                "color":"Blue",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Azia Pump 95",
        "brand":"Jimmy Choo",
        "description":"Sharp and distinct, our Azia pumps take cues from our statement Azia sandals in patent leather, featuring delicate curved straps that flatteringly snake up your feet. This Italian-crafted pair are designed with a slim heel and a pointed toe.",
        "specifications":"@Patent Leather @Ankle Strap @Pointed Toe @Slim Heel @Heel Height: 95mm/3.7 inches @Made in Italy." ,
        "categories":["Heels", "Women"],
        "colors": ["LightPink"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"LightPink",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+3/AziaPump-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+3/AziaPump-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+3/AziaPump-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+3/AziaPump-mix.webp"]
            }       
        ],
        "price": 895,
        "stock": [
            {
                "color":"LightPink",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Azia Pump SLV",
        "brand":"Jimmy Choo",
        "description":"Sharp and distinct, our Azia pumps takes cues from our statement Azia sandals in glitter leather, featuring delicate curved straps that flatteringly snake up your feet. This Italian-crafted pair are designed with a slim heel and a pointed toe",
        "specifications":"@Glitter Leather @Ankle Strap @Pointed Toe @Slim Heel @Heel Height: 95mm/3.7 inches @Made in Italy." ,
        "categories":["Heels", "Women"],
        "colors": ["Gray"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Gray",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+4/AziaPump-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+4/AziaPump-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+4/AziaPump-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+4/AziaPump-mix.webp"]
            }       
        ],
        "price": 895,
        "stock": [
            {
                "color":"Gray",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Elisa 45",
        "brand":"Jimmy Choo",
        "description":"Our Elisa pumps are a classic silhouette crafted in Nappa with a patent leather toe. They're embellished with a pearl-adorned strap and feature a block 45mm heel. Perfectly styled in your work or weekend wardrobe for elevated looks.",
        "specifications":"@Nappa Leather @Patent Leather @Square Toe @Pearl Embellishment @Heel Height: 45mm/1.7 inches @Made in Italy." ,
        "categories":["Heels", "Women"],
        "colors": ["Black","Gray"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+5/Black/Elisa45-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+5/Black/Elisa45-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+5/Black/Elisa45-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+5/Black/Elisa45-mix.webp"]
            },
            {
                "color":"Gray",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+5/Gray/Elisa45-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+5/Gray/Elisa45-horizontal.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+5/Gray/Elisa45-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+5/Gray/Elisa45-mix.webp"]
            }        
        ],
        "price": 775,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            },
            {
                "color":"Gray",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Amita 45",
        "brand":"Jimmy Choo",
        "description":"Chic and feminine, the AMITA pumps are Italian-crafted in white fishnet mesh and latte nappa. Our pointed-toe style sits on easy-to-wear 45mm heels and is detailed with a light-catching JC pearl. Step into easy elegance.",
        "specifications":"" ,
        "categories":["Heels", "Women"],
        "colors": ["White"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"White",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+6/Amita-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+6/Amita-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+6/Amita-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+6/Amita-mix.webp"]
            }       
        ],
        "price": 795,
        "stock": [
            {
                "color":"White",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Diamond Tilda Sling Back 45",
        "brand":"Jimmy Choo",
        "description":"Our Tilda sling back pumps are crafted in soft patent leather, featuring a distinct multifaceted chain; emblematic of our Diamond collection. A contemporary approach to a timeless shoe, this sleek silhouette is balanced on a chunky 45mm heel.",
        "specifications":"@Patent Leather @Multifaceted Chain Embellishment @Square Toe @Heel Height: 45mm/1.7 inches." ,
        "categories":["Heels", "Women"],
        "colors": ["White","Red"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"White",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+7/White/DiamondTilda-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+7/White/DiamondTilda-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+7/White/DiamondTilda-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+7/White/DiamondTilda-mix.webp"]
            },
            {
                "color":"Red",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+7/Red/DiamondTilda-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+7/Red/DiamondTilda-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+7/Red/DiamondTilda-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+7/Red/DiamondTilda-mix.webp"]
            }       
        ],
        "price": 925,
        "stock": [
            {
                "color":"White",
                "stock":100,
                "sold":0
            },
            {
                "color":"Red",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Maryanne 100",
        "brand":"Jimmy Choo",
        "description":"In a sleek silhouette, our Maryanne pumps are effortlessly sophisticated. The deep vamp and kick heel gives them a contemporary edge; perfectly paired with denim looks for the weekend or tailored looks in your workwear wardrobe.",
        "specifications":"@Calf Leather @Pointed Toe @Kick Heel @Heel Height Measures: 100mm/3.9 inches @Made in Italy" ,
        "categories":["Heels", "Women"],
        "colors": ["Black"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+8/Maryanne-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+8/Maryanne-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+8/Maryanne-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+8/Maryanne-mix.webp"]
            }       
        ],
        "price": 895,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Nell Mule 85",
        "brand":"Jimmy Choo",
        "description":"In luxe calf leather, our Nell mules are designed to a classic pointed-toe silhouette with a slim heel. They feature gold-tone hardware signature to our Diamond collection. Wear to elevate looks with effortless sophistication.",
        "specifications":"@Calf Leather @Pointed Toe @'Diamond' Hardware @Heel Height: 85mm/3.3 inches" ,
        "categories":["Heels", "Women"],
        "colors": ["Red","Black"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Red",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+9/Red/NellMule-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+9/Red/NellMule-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+9/Red/NellMule-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+9/Red/NellMule-mix.webp"]
            },
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+9/Black/NellMule-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+9/Black/NellMule-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+9/Black/NellMule-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+9/Black/NellMule-mix.webp"]
            }       
        ],
        "price": 995,
        "stock": [
            {
                "color":"Red",
                "stock":100,
                "sold":0
            },
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Cass 95",
        "brand":"Jimmy Choo",
        "description":"Modern yet elegant, our CASS pumps are crafted in Italy from latte nappa and patent leather. They are set on slim 95mm heels and designed with a sharp pointed toe.",
        "specifications":"@Nappa @Patent @Pointed-Toe Style @Heel Height: 95mm/3.7 inches @Made in Italy" ,
        "categories":["Heels", "Women"],
        "colors": ["White","Black"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"White",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+10/White/Cass-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+10/White/Cass-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+10/White/Cass-back.webp"]
            },
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+10/Black/Cass-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+10/Black/Cass-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+10/Black/Cass-back.webp"]
            }       
        ],
        "price": 775,
        "stock": [
            {
                "color":"White",
                "stock":100,
                "sold":0
            },
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Aurelie SK",
        "brand":"Jimmy Choo",
        "description":"Our Aurelie pumps are crafted in Italy from smoky blue patent leather. Sophisticated and standout, this pointed-toe style is set on slim 65mm heels and defined by a single strap of glossy white pearls. Let yours carry you effortlessly from dawn to dusk.",
        "specifications":"@Patent Leather @Pearl and Crystal Embellishment @Pointed Toe @Open Sides @Arch Strap @Heel Height Measures: 85mm/3.3 inches @Made in Italy @By purchasing this product, you are supporting sustainable leather manufacturing through the Leather Working Group" ,
        "categories":["Heels", "Women"],
        "colors": ["Skyblue","LightPink"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Skyblue",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+11/Skyblue/Aurelie-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+11/Skyblue/Aurelie-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+11/Skyblue/Aurelie-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+11/Skyblue/Aurelie-mix.webp"]
            },
            {
                "color":"LightPink",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+11/LightPink/Aurelie-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+11/LightPink/Aurelie-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+11/LightPink/Aurelie-mix.webp"]
            }        
        ],
        "price": 895,
        "stock": [
            {
                "color":"Skyblue",
                "stock":100,
                "sold":0
            },
            {
                "color":"LightPink",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Saeda 100",
        "brand":"Jimmy Choo",
        "description":"Blurring the lines between shoes and jewellery, our Saeda pumps in satin are true showstoppers. This pair is decorated with all-over hotfix crystal embellishment, and a delicate crystal chain that suspends a single crystal gently adorns the ankle like jewellery. The meticulously crafted crystals also drip gracefully down the line of the heel. Striking and statement, they sit on a slim 100mm heel. A truly exquisite masterpiece.",
        "specifications":"@Satin @Hotfix Crystal Embellishment @Crystal Chain Embellishment @Pointed Toe @Slim Heel @Heel Height Measures: 100mm/4 inches @Made in Italy @This product uses responsible satin  a mix of 28% organic silk and 72% certified viscose" ,
        "categories":["Heels", "Women"],
        "colors": ["Skyblue","LightPink"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Skyblue",
                "images": ["hhttps://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+12/Skyblue/Saeda-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+12/Skyblue/Saeda-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+12/Skyblue/Saeda-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+12/Skyblue/Saeda-mix.webp"]
            },
            {
                "color":"LightPink",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+12/LightPink/Saeda-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+12/LightPink/Saeda-horizontal.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+12/LightPink/Saeda-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+12/LightPink/Saeda-mix.webp"]
            }       
        ],
        "price": 1995,
        "stock": [
            {
                "color":"Skyblue",
                "stock":100,
                "sold":0
            },
            {
                "color":"LightPink",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Romy 85",
        "brand":"Jimmy Choo",
        "description":"The classic pointy toe pump has been slightly updated with a softer point and a new stiletto heel. Leather lined with a leather sole, they are finished with a black kid leather upper. Made in Italy. Heel height measure 85mm/3.3 inches.",
        "specifications":"@Kid Leather @Mid Heel @Leather Lined @Leather Sole @Heel Height Measures: 85mm/3.3 inches @Made in Italy" ,
        "categories":["Heels", "Women"],
        "colors": ["Black","White"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+13/Black/Romy85-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+13/Black/Romy85-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+13/Black/Romy85-black.webp"]
            },
            {
                "color":"White",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+13/White/Romy85-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+13/White/Romy85-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+13/White/Romy85-back.webp"]
            }       
        ],
        "price": 750,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            },
            {
                "color":"White",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Romy Classic",
        "brand":"Jimmy Choo",
        "description":"The ever-classic Romy heel gets a statement update in platinum ice dusty glitter. The 85mm heel height provides a leg-lengthening effect. Steal the show at your next party invite in these head turning heels.",
        "specifications":"@Dusty Glitter @Point Toe @Leather Lined @Leather Sole @Heel Height Measures: 85mm/3.3 inches @Made in Italy" ,
        "categories":["Heels", "Women"],
        "colors": ["Black"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+14/Romy85-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+14/Romy85-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+14/Romy85-back.webp"]
            }       
        ],
        "price": 775,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Aurelie BLCT",
        "brand":"Jimmy Choo",
        "description":"Our AURELIE pumps are crafted in Italy from black patent leather. Sophisticated and standout, this pointed-toe style is set on slim 85mm heels and defined by a single strap of glossy white pearls. Let yours carry you effortlessly from dawn to dusk",
        "specifications":"@Patent Leather @Pearl and Crystal Embellishment @Pointed Toe @Open Sides @Arch Strap @Heel Height Measures: 85mm/3.3 inches @Made in Italy @Supporting Sustainable Leather Manufacturing through the Leather Working Group" ,
        "categories":["Heels", "Women"],
        "colors": ["Black"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+15/Aurelie-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+15/Aurelie-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Heels/Modelo+15/Aurelie-allview.webp"]
            }       
        ],
        "price": 895,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Diamond Light Maxi",
        "brand":"Jimmy Choo",
        "description":"Our Diamond Light Maxi has evolved from the signature Diamond Light trainer. Crafted in Nappa leather, they’re shaped with a round toe and rest on a unique platform sole that resembles diamonds set in stone and elevates the trainer to give extra height. Super comfortable, upgrade your wardrobe with our platform trainers that bring personality to your outfits.",
        "specifications":"@Nappa Leather @Low-Top @Flecked Rubber Sole @Round Toe @Jimmy Choo Embossing on Heel, Side, and Front @Platform Measures: 3cm at Front, 4.5cm at Back @Supporting Sustainable Leather Manufacturing through the Leather Working Group" ,
        "categories":["Sneakers", "Women"],
        "colors": ["White"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"White",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+1/DiamondLight-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+1/DiamondLight-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+1/DiamondLight-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+1/DiamondLight-mix.webp"]
            }       
        ],
        "price": 650,
        "stock": [
            {
                "color":"White",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Diamond Light PT",
        "brand":"Jimmy Choo",
        "description":"Our Diamond Light Maxi has evolved from the signature Diamond Light trainer. Crafted in luxe Nappa leather and complemented studs emblematic of the Diamond family. They’re shaped with a round toe and rest on a unique platform sole that resembles diamonds set in stone and elevates the trainer to give extra height. Opt for these to bring modernity and a touch of glamour to your off-duty and weekend capsule.",
        "specifications":"@Nappa Leather @Studded Embellishment @Lace-Up Style @Multifaceted Platform Sole @Round Toe @Jimmy Choo Embossing on Heel, Side, and Front @Platform Measures: 3cm at Front, 4.5cm at Back" ,
        "categories":["Sneakers", "Women"],
        "colors": ["White"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"White",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+2/DiamondLight-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+2/DiamondLight-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+2/DiamondLight-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+2/DiamondLight-mix.webp"]
            }       
        ],
        "price": 875,
        "stock": [
            {
                "color":"White",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Diamond Light Silver",
        "brand":"Jimmy Choo",
        "description":"Our Diamond Light Maxi has evolved from the signature Diamond Light trainer. Crafted from a responsible Nappa in striking silver, they’re shaped with a round toe and rest on a unique platform sole that resembles diamonds set in stone and elevates the trainer to give extra height. Super comfortable, upgrade your wardrobe with our platform trainers that bring personality to your outfits.",
        "specifications":"@Metallic Nappa @Lace-Up Style @Multifaceted Rubber Sole @Round Toe @Jimmy Choo Embossing on Heel, Side, and Front @Platform Measures: 3cm at Front, 4.5cm at Back" ,
        "categories":["Sneakers", "Women"],
        "colors": ["Gray"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Gray",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+3/DiamondLight-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+3/DiamondLight-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+3/DiamondLight-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+3/DiamondLight-mix.webp"]
            }       
        ],
        "price": 695,
        "stock": [
            {
                "color":"Gray",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Florent",
        "brand":"Jimmy Choo",
        "description":"Playfully stylish, our Florent trainers are crafted from leather in a mixed palette of vibrant hues. This lace-up style is a modern addition to your weekend or off-duty capsule, featuring a rubber sole and our standout Choo lettering at the back.",
        "specifications":"@Leather @Choo Lettering @Lace-Up Style @Rubber Sole" ,
        "categories":["Sneakers", "Women"],
        "colors": ["White"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"White",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+4/DiamondLight-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+4/DiamondLight-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+4/DiamondLight-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+4/DiamondLight-mix.webp"]
            }       
        ],
        "price": 775,
        "stock": [
            {
                "color":"White",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Florent GLT",
        "brand":"Jimmy Choo",
        "description":"Strong and striking, our Florent trainers are crafted in leather with a glamorous glitter finish. This lace-up style is an elevated addition to your weekend or off-duty capsule, featuring a rubber sole and our standout Choo lettering at the back.",
        "specifications":"@Leather @Glitter Fabric @Choo Lettering @Lace-Up Style @Rubber Sole" ,
        "categories":["Sneakers", "Women"],
        "colors": ["White"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"White",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+5/DiamondLight-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+5/DiamondLight-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+5/DiamondLight-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+5/DiamondLight-mix.webp"]
            }       
        ],
        "price": 795,
        "stock": [
            {
                "color":"White",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Venice",
        "brand":"Jimmy Choo",
        "description":"Our Venice trainers are crafted with a knit upper, embellished with a pearl and crystal-adorned bracelet adding a glamorous touch. Designed with a sock-like upper for a snug fit, this lightweight style also features a flexible sole. Perfect for uplifting your off-duty wardrobe.",
        "specifications":"@Knit Upper @Pearl and Crystal Bracelet @Sock Fit @Rubber Sole" ,
        "categories":["Sneakers", "Women"],
        "colors": ["Black","LightPink"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+6/Black/Venice-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+6/Black/Venice-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+6/Black/Venice-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+6/Black/Venice-mix.webp"]
            },
            {
                "color":"LightPink",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+6/LightPink/Venice-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+6/LightPink/Venice-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+6/LightPink/Venice-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+6/LightPink/Venice-mix.webp"]
            }       
        ],
        "price": 895,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            },
            {
                "color":"LightPink",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Verona",
        "brand":"Jimmy Choo",
        "description":"The Verona trainer in black knit perfectly balances practicality and glamour. The silhouette is juxtaposed with black crystal detailing and boasts a snug, sock-like fit. Perfect for running errands at the weekend, they’re the ideal lightweight counterpart to midi dresses and cropped jeans.",
        "specifications":"@Knit @Crystal Piece @Rubber Sole" ,
        "categories":["Sneakers", "Women"],
        "colors": ["Black"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+7/Verona-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+7/Verona-horizontal.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+7/Verona-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+7/Verona-mix.webp"]
            }       
        ],
        "price": 895,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Antibes",
        "brand":"Jimmy Choo",
        "description":"Classic yet contemporary, our Antibes trainers are a low-top design in calf leather. Featuring pearl-embellished eyelets; wear to elevate day-to-day dressing.",
        "specifications":"@Calf Leather @Rubber Sole @Jimmy Choo Embossing @Pearl Eyelets" ,
        "categories":["Sneakers", "Women"],
        "colors": ["White"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"White",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+8/Antibes-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+8/Antibes-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+8/Antibes-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+8/Antibes-mix.webp"]
            }       
        ],
        "price": 875,
        "stock": [
            {
                "color":"White",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Rome",
        "brand":"Jimmy Choo",
        "description":"Classic yet contemporary, our Rome is a modern low-top trainer with a statement dégrade design . Crafted in calf leather, it features a metallic back counter with our signature Jimmy Choo logo and it has been designed to be exceptionally resilient to wear and tear. Wear to elevate day-to-day dressing.",
        "specifications":"@Calf Leather @Dégradé Design @Leather Back Counter with Jimmy Choo Branding @Lace-up Style @Rubber Sole @By purchasing this product, you are supporting sustainable leather manufacturing through the Leather Working Group" ,
        "categories":["Sneakers", "Women"],
        "colors": ["White"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"White",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+9/Rome-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+9/Rome-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+9/Rome-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+9/Rome-mix.webp"]
            }       
        ],
        "price": 695,
        "stock": [
            {
                "color":"White",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Diamond Light BLCK",
        "brand":"Jimmy Choo",
        "description":"Our Diamond Light Maxi has evolved from the signature Diamond Light trainer. Crafted with a responsible knit upper, they’re shaped with a round toe and rest on a unique platform sole that resembles diamonds set in stone, elevating the trainer to give extra height. In classic black, they offer a bold yet understated look for off-duty days.",
        "specifications":"@Responsible Knit @Lace-up Style @Multifaceted Rubber Sole with Flecked Finish @Round Toe @Platform Measures: 3cm at Front, 4.5cm at Back @Leather Back Panel @By purchasing this product, you are supporting sustainable leather manufacturing through the Leather Working Group" ,
        "categories":["Sneakers", "Women"],
        "colors": ["Black"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+10/DiamondLight-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+10/DiamondLight-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+10/DiamondLight-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+10/DiamondLight-mix.webp"]
            }       
        ],
        "price": 650,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Diamond Light Classic",
        "brand":"Jimmy Choo",
        "description":"DIAMOND LIGHT reinterprets the silhouette of our retro-inspired DIAMOND trainers. Crafted from black nappa leather, they’re shaped with a round toe and rest on a durable rubber sole that resembles diamonds set in stone. Super comfortable, this pair is designed to slip on for casual everyday excellence.",
        "specifications":"@Nappa Leather @Lace-up Style @Rubber Sole @Jimmy Choo Embossing on Heel, Side, and Front @By purchasing this product, you are supporting sustainable leather manufacturing through the Leather Working Group" ,
        "categories":["Sneakers", "Women"],
        "colors": ["Black"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+11/Diamond-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+11/Diamond-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+11/Diamond-back.webp"]
            }       
        ],
        "price": 650,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Verona PRL",
        "brand":"Jimmy Choo",
        "description":"Our VERONA trainer in black knit perfectly balances practicality and femininity. The silhouette is juxtaposed with crystal and pearl detailing and boasts a snug, sock-like fit. Perfect for running errands at the weekend, they’re the ideal lightweight counterpart to midi dresses and cropped jeans",
        "specifications":"@Knit @Pearl and Crystal Detailing @Rubber Sole @Made in Italy" ,
        "categories":["Sneakers", "Women"],
        "colors": ["Black"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+12/Verona-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+12/Verona-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+12/Verona-black.webp"]
            }       
        ],
        "price": 895,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Diamond All Pnk ",
        "brand":"Jimmy Choo",
        "description":"DIAMOND has evolved from the signature DIAMOND LIGHT trainer. Crafted from playful candy pink nappa leather, they’re shaped with a round toe and rest on a unique platform sole that resembles diamonds set in stone and elevates the trainer to give extra height. Super comfortable, upgrade your wardrobe with our platform trainers that bring personality to your outfits.",
        "specifications":"@Nappa Leather @Lace-up Style @Multifaceted Rubber Sole @Round Toe @Jimmy Choo Embossing @Platform Measures: 3cm at Front, 4.5cm at Back @By purchasing this product, you are supporting sustainable leather manufacturing through the Leather Working Group" ,
        "categories":["Sneakers", "Women"],
        "colors": ["LightPink"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"LightPink",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+13/DL-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+13/DL-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+13/DL-back.webp"]
            }       
        ],
        "price": 650,
        "stock": [
            {
                "color":"LightPink",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Diamond WHTLL ",
        "brand":"Jimmy Choo",
        "description":"Our Diamond Light Maxi has evolved from the signature Diamond Light trainer. Crafted with a responsible nappa leather upper, they’re shaped with a round toe and rest on a unique platform sole that resembles diamonds set in stone, elevating the trainer to give extra height. In classic white, they offer a bold yet understated look for off-duty days.",
        "specifications":"@Nappa Leather @Low-Top @Flecked Rubber Sole @Round Toe @Jimmy Choo Embossing on Heel, Side, and Front @Platform Measures: 3cm at Front, 4.5cm at Back @By purchasing this product, you are supporting sustainable leather manufacturing through the Leather Working Group" ,
        "categories":["Sneakers", "Women"],
        "colors": ["White"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"White",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+14/DL-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+14/DL-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+14/DL-back.webp"]
            }       
        ],
        "price": 650,
        "stock": [
            {
                "color":"White",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Venezia Classic",
        "brand":"Jimmy Choo",
        "description":"Venezia reinterprets the silhouette of our retro-inspired Venezia trainers. Crafted from white nappa leather, they’re shaped with a round toe and rest on a durable rubber sole that resembles diamonds set in stone. Super comfortable, this pair is designed for casual everyday excellence.",
        "specifications":"@Nappa Leather @Lace-Up Style @Rubber Sole @Jimmy Choo Embossing on Heel, Side, and Front @By purchasing this product, you are supporting sustainable leather manufacturing through the Leather Working Group" ,
        "categories":["Sneakers", "Women"],
        "colors": ["White"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"White",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+15/DL-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+15/DL-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sneakers/Modelo+15/DL-back.webp"]
            }       
        ],
        "price": 650,
        "stock": [
            {
                "color":"White",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Nena",
        "brand":"Jimmy Choo",
        "description":"Our Nena sunglasses are a refined classic with a square frame shape and grey lenses. Crafted with black metal temples distinguished by our signature JC emblem, they're a timeless design that will remain a staple throughout the seasons.",
        "specifications":"@Acetate Front @Metal Temples with JC Emblem @Square Frame @Black Tips @Grey Shaded Lenses @100% UVA and UVB Protection @Comes with Jimmy Choo Case and Cloth @Made in Italy" ,
        "categories":["Sunglasses","Women"],
        "colors": ["Black","Red"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+1/Black/Nena-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+1/Black/Nena-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+1/Black/Nena-diagonal.webp"]
            },
            {
                "color":"Red",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+1/Red/Nena-frojnt.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+1/Red/Nena-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+1/Red/Nena-diagonal.webp"]
            }       
        ],
        "price":415,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            },
            {
                "color":"Red",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Addy",
        "brand":"Jimmy Choo",
        "description":"For a contemporary take on retro-inspired style, look to our Addy sunglasses in a cat eye shape and grey lenses. A statement design featuring rose gold temples complemented by a glitter fabric insert and our signature Jimmy Choo lettering, adding a distinctly glamorous touch.",
        "specifications":"@Acetate Front @Rose Gold Temples @Cat Eye Frame @Glitter Fabric Insert @Grey Lenses @100% UVA and UVB Protection @Comes with Jimmy Choo Case and Cloth @Made in Italy" ,
        "categories":["Sunglasses","Women"],
        "colors": ["White","Black"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"White",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+2/White/Addy-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+2/White/Addy-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+2/White/Addy-diagonal.webp"]
            },
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+2/Black/Addy-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+2/Black/Addy-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+2/Black/Addy-diagonal.webp"]
            }       
        ],
        "price":340,
        "stock": [
            {
                "color":"White",
                "stock":100,
                "sold":0
            },
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Renee/N",
        "brand":"Jimmy Choo",
        "description":"For a daring look with detailed glamour, look to our RENEE sunglasses in an oversized square shape and grey lenses. Italian-crafted in acetate, complemented by a detachable gold chain with a pearl charm and our signature Jimmy Choo monogram. A versatile pair for entrance-making looking in your day-to-evening style",
        "specifications":"@Black Acetate Front @Ivory Mother of Pearl Interior @JC Monogram @Detachable Chain with Pearl Charm @Square Frame @Grey Lenses @100% UVA and UVB Protection @Comes with Sustainable Natural Linen Soft Case with Gold JC Logo and Cloth @Made in Italy" ,
        "categories":["Sunglasses","Women"],
        "colors": ["Black"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+3/Renee-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+3/Renee-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+3/Renee-diagonal.webp"]
            }       
        ],
        "price":415,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Esther",
        "brand":"Jimmy Choo",
        "description":"A bold style, our ESTHER sunglasses arrive in an oversized geometric-square shape and dark grey shaded lenses. Crafted in Italy from acetate, complemented by ivory pearl embellishment and our signature Jimmy Choo monogram. An entrance-making pair for day-to-evening dressing.",
        "specifications":"@Acetate Front @Rose Gold Metal Temples @Extra Slim Temples @Micro-Cast Pearl Detail @Mother of Pearl Tip @Square-Eye Frame @Grey Lenses @100% UVA and UVB Protection @Comes with Sustainable Natural Linen Soft Case with Gold JC Logo and Cloth @Made in Italy" ,
        "categories":["Sunglasses","Women"],
        "colors": ["Gray"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Gray",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+4/Esther-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+4/Esther-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+4/Esther-diagonal.webp"]
            }       
        ],
        "price":350,
        "stock": [
            {
                "color":"Gray",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Reyes",
        "brand":"Jimmy Choo",
        "description":"For classic style imbued with modernity, look to our REYES sunglasses in an oversized square shape and mirrored lenses. Italian-crafted in stainless steel they are complemented by Swarovski crystal detailing for a touch of everyday glamour. A sleek pair that elevates daily dressing.",
        "specifications":"@Copper Gold Metal Front and Temple @Acetate Tip with Animalier Print @Swarovski Crystal Detail @Engraved Jimmy Choo Logo @Square Frame @Nude and Silver Mirror Lenses @100% UVA and UVB Protection @Comes with Sustainable Natural Linen Soft Case with Gold JC Logo and Cloth @Made in Italy" ,
        "categories":["Sunglasses","Women"],
        "colors": ["Pink","Brown"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Pink",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+5/Lightpink/Reyes-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+5/Lightpink/Reyes-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+5/Lightpink/Reyes-diagonal.webp"]
            },
            {
                "color":"Brown",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+5/Brown/Reyes-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+5/Brown/Reyes-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+5/Brown/Reyes-diagonal.webp"]
            }     
        ],
        "price":310,
        "stock": [
            {
                "color":"Pink",
                "stock":100,
                "sold":0
            },
            {
                "color":"Brown",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Edna",
        "brand":"Jimmy Choo",
        "description":"A statement making pair, our EDNA sunglasses arrive in a solid square shape and grey shaded azure lenses. Crafted in Italy from acetate with metal accents and complemented by our signature Jimmy Choo monogram. A bold style that elevates daily dressing.",
        "specifications":"@Acetate Front @Rose Gold Metal Temples @Glitter Detail @Square-Eye Frame @Grey Shaded Azure Lenses @100% UVA and UVB Protection @Comes with Sustainable Natural Linen Soft Case with Gold JC Logo and Cloth @Made in Italy" ,
        "categories":["Sunglasses","Women"],
        "colors": ["Gray"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Gray",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+6/Edna-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+6/Edna-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+6/Edna-diagonal.webp"]
            }       
        ],
        "price":355,
        "stock": [
            {
                "color":"Gray",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Oriane",
        "brand":"Jimmy Choo",
        "description":"For retro style with a modern edge, look to our ORIANE sunglasses in a round shape and grey lenses. Italian-crafted in stainless steel, complemented by glitter detailing for a touch of everyday glamour. An effortlessly stylish pair that elevates daily dressing.",
        "specifications":"@Rose Gold Stainless Steel Front @Metal Temples with Glitter Detail @Havana Tip @Round Frame @Grey Lenses @100% UVA and UVB Protection @Comes with Sustainable Natural Linen Soft Case with Gold JC Logo and Cloth @Made in Italy" ,
        "categories":["Sunglasses","Women"],
        "colors": ["Gold","LightPink"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Gold",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+7/Gold/Oriane-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+7/Gold/Oriane-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+7/Gold/Oriane-diagonal.webp"]
            },
            {
                "color":"LightPink",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+7/LightPink/Oriane-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+7/LightPink/Oriane-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+7/LightPink/Oriane-diagonal.webp"]
            }       
        ],
        "price":385,
        "stock": [
            {
                "color":"Gold",
                "stock":100,
                "sold":0
            },
            {
                "color":"LightPink",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Nettal",
        "brand":"Jimmy Choo",
        "description":"For understated modernity, look to our NETTAL sunglasses in an oversized square shape and brown shaded lenses. Italian-crafted in a lightweight acetate this sleek pair is complemented by our signature Jimmy Choo monogram. Your go-to for uplifted style in your daily dressing.",
        "specifications":"@Brown Havana Acetate Front and Temples @Lightweight Structure @Square Frame @Brown Shaded Lenses @100% UVA and UVB Protection @Comes with Sustainable Natural Linen Soft Case with Gold JC Logo and Cloth @Made in Italy" ,
        "categories":["Sunglasses","Women"],
        "colors": ["Black"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+8/Nettal-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+8/Nettal-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+8/Nettal-diagonal.webp"]
            }       
        ],
        "price":295,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Kristen",
        "brand":"Jimmy Choo",
        "description":"For a sleek look with detailed glamour, look to our KRISTEN sunglasses in an elegant masked shape and nude, mirror shaded lenses. Crafted in Italy with a gold frame, this statement design is complemented by glitter embellishment. An entrance-making pair for day-to-evening dressing.",
        "specifications":"@Rose Gold Front @Havana Tip @Glitter Front Bar Detail @Mask Frame @Brown Lenses @100% UVA and UVB Protection @Comes with Sustainable Natural Linen Soft Case with Gold JC Logo and Cloth @Made in Italy" ,
        "categories":["Sunglasses","Women"],
        "colors": ["LightPink"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"LightPink",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+9/Kristen-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+9/Kristen-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+9/Kristen-diagonal.webp"]
            }       
        ],
        "price":415,
        "stock": [
            {
                "color":"LightPink",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Leah",
        "brand":"Jimmy Choo",
        "description":"For a daring look with detailed glamour, look to our LEAH sunglasses in a masked shape and grey shaded lenses. Crafted in Italy with a gold frame, this statement design is complemented by glitter embellishment. An entrance-making pair for day-to-evening dressing.",
        "specifications":"@Silver Front @Black Tip @Glitter Front Bar Detail @Mask Frame @Grey Lenses @100% UVA and UVB Protection @Comes with Sustainable Natural Linen Soft Case with Gold JC Logo and Cloth @Made in Italy" ,
        "categories":["Sunglasses","Women"],
        "colors": ["Gray"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Gray",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+10/Leah-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+10/Leah-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+10/Leah-diagonal.webp"]
            }       
        ],
        "price":415,
        "stock": [
            {
                "color":"Gray",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Olye",
        "brand":"Jimmy Choo",
        "description":"For understated modernity, look to our OLYE sunglasses in an oversized square shape and brown lenses. Italian-crafted in a lightweight acetate and metal temples this sleek pair is complemented by glitter detailing. Your go-to for subtle glamour in your daily dressing.",
        "specifications":"@Brown Acetate Front @Metal Temples with Glitter Detail @Square Frame @Brown Lenses @100% UVA and UVB Protection @Comes with Sustainable Natural Linen Soft Case with Gold JC Logo and Cloth @Made in Italy" ,
        "categories":["Sunglasses","Women"],
        "colors": ["Brown"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Brown",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+11/Olye-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+11/Olye-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+11/Olye-diagonal.webp"]
            }       
        ],
        "price":365,
        "stock": [
            {
                "color":"Brown",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Esther",
        "brand":"Jimmy Choo",
        "description":"A bold style, our ESTHER sunglasses arrive in an oversized geometric-square shape and brown shaded lenses. Crafted in Italy from acetate, complemented by ivory pearl embellishment and our signature Jimmy Choo monogram. An entrance-making pair for day-to-evening dressing.",
        "specifications":"@Acetate Front @Copper Gold Metal Temples @Extra Slim Temples @Micro-cast Pearl Detail @Square-eye Frame @Brown Shaded Lenses @100% UVA and UVB Protection @Comes with Sustainable Natural Linen Soft Case with Gold JC Logo and Cloth @Made in Italy" ,
        "categories":["Sunglasses","Women"],
        "colors": ["Red"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Red",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+12/Esther-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+12/Esther-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+12/Esther-diagonal.webp"]
            }       
        ],
        "price":350,
        "stock": [
            {
                "color":"Red",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Tinsley",
        "brand":"Jimmy Choo",
        "description":"For retro style with a modern edge, look to our TINSLEY sunglasses in an oversized cat eye shape and brown shaded lenses. Italian-crafted in acetate and metal complemented by ivory pearl detailing for a touch of everyday glamour. Your go-to pair for elevated day-to-evening dressing.",
        "specifications":"@Brown Havana Acetate Front @Rose Gold Temple with Pearl Detail @Cat Eye Frame @Brown Shaded Lenses @100% UVA and UVB Protection @Comes with Sustainable Natural Linen Soft Case with Gold JC Logo and Cloth @Made in Italy" ,
        "categories":["Sunglasses","Women"],
        "colors": ["Brown"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Brown",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+13/Tinsley-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+13/Tinsley-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+13/Tinsley-diagonal.webp"]
            }       
        ],
        "price":350,
        "stock": [
            {
                "color":"Brown",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Vella",
        "brand":"Jimmy Choo",
        "description":"Our Vella sunglasses are a refined pair in a classic square frame shape and grey lenses. Crafted with a rose gold frame and temples distinguished by our signature JC emblem, they're a timeless design that you can style season after season.",
        "specifications":"@Rose Gold Stainless Steel Front @Metal Temples with JC Emblem @Square Frame @Black Tips @Grey Lenses @100% UVA and UVB Protection @Comes with Jimmy Choo Case and Cloth @Made in Italy" ,
        "categories":["Sunglasses","Women"],
        "colors": ["Gold"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Gold",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+14/Vella-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+14/Vella-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+14/Vella-diagonal.webp"]
            }       
        ],
        "price":350,
        "stock": [
            {
                "color":"Gold",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Gaya",
        "brand":"Jimmy Choo",
        "description":"Distincly Jimmy Choo, our Gaya sunglasses are an elevated approach to a classic square frame design. Crafted to refine your off-duty capsule and perfect day-to-evening looks, they feature grey shaded lenses and rose gold temples complemented by our signature JC emblem.",
        "specifications":"@Acetate Front @Rose Gold Temples with JC Emblem @Square Frame @Grey Shaded Lenses @100% UVA and UVB Protection @Comes with Jimmy Choo Case and Cloth @Made in Italy" ,
        "categories":["Sunglasses","Women"],
        "colors": ["Black"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+15/Gaya-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+15/Gaya-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Sunglasses/Modelo+15/Gaya-diagonal.webp"]
            }       
        ],
        "price":415,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    } 
    ])
  }else{
    res.status(403).json({message: "Token not authorized"})
  }
})


// ---------- Fendi --------> (Women Completed)
app.get("/fendi/women/:token", (req, res)=>{
  if(req.params.token === TOKEN){
    res.status(200).json([
      {
        "name": "Baguette Bag dove grey",
        "brand": "Fendi",
        "description": "Iconic medium-sized Baguette bag, made with an all-over embroidery of dove gray metallic sequins in different shapes and sizes. Decorated with FF closure. It has a front flap, leather details, tone-on-tone bead embroidery and a magnetic closure. It features an interior compartment lined in silk with a zippered pocket and metallic accessories with a gold finish. It can be carried by hand, on the shoulder or across the body thanks to the removable handle and shoulder strap. Made in Italy",
        "specification": "@Height: 15 cm @Depth: 6 cm @Width : 27cm",
        "categories": ["Bags", "Women", "underarm"],
        "colors": ["Silver"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Silver",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_baguette_color4_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_baguette_color4_02.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_baguette_color4_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_baguette_color4_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_baguette_color4_05.avif"
            ]
          }
        ],
        "price": 5100,
        "stock": [
          {
            "color": "Silver",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Baguette Bag canvas",
        "brand": "Fendi",
        "description": "Iconic medium-sized Baguette bag, made in natural-colored canvas with the FF motif embroidered in relief in multicolor thread. Model finished in dove gray leather and decorated with an FF clasp. It features a front flap, magnetic button closure, an interior compartment with a zip pocket and metal accessories with a vintage gold finish. It can be carried by hand, on the shoulder or across the body thanks to the removable handle and shoulder strap. Made in Italy",
        "specification": "@Height: 15 cm @Depth: 6 cm @Width : 27cm",
        "categories": ["Bags", "Women", "underarm"],
        "colors": ["White"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "White",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_baguette_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_baguette_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_baguette_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_baguette_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_baguette_05.avif"
            ]
          }
        ],
        "price": 5100,
        "stock": [
          {
            "color": "White",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Baguette Bag jacquard",
        "brand": "Fendi",
        "description": "Iconic medium-sized Baguette bag, made of jacquard fabric with FF motif in brown tones, decorated with FF closure and finished with black embroidered trims. It features a front flap, magnetic button closure, an unlined interior compartment with a zippered pocket and gold-finish metal accessories. It can be carried by hand, on the shoulder or across the body thanks to the handle and the shoulder strap with the Fendi Label motif, both of which are removable. Made in Italy",
        "specification": "@Height: 15 cm @Depth: 6 cm @Width : 27cm @Weight : 0.6kg @Strap length (min.) : 90 cm @Leash length (max.) : 90 cm @Shoulder strap drop: 41 cm",
        "categories": ["Bags", "Women", "underarm"],
        "colors": ["Brown"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_baguette_color3_01.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_baguette_color2_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_baguette_color2_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_baguette_color2_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_baguette_color2_05.jpg"
            ]
          }
        ],
        "price": 5100,
        "stock": [
          {
            "color": "Brown",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Nano C'mon Bag",
        "brand": "Fendi",
        "description": "Iconic Fendi C'mon small version bag, equipped with flap and FF magnetic button closure. The loop on the back allows the accessory to be worn at the waist as a charm. It can be worn crossbody thanks to the thin adjustable shoulder strap. Interior with flat pocket for credit cards. Made of FF jacquard fabric. Dark brown leather details. Metal accessories with vintage gold finish. Made in Italy",
        "specification": "@Height : 9.5cm @Depth : 7cm @Width : 14cm",
        "categories": ["Bags", "Women", "underarm"],
        "colors": ["Brown"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_C'mon_color1_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_C'mon_color1_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_C'mon_color1_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_C'mon_color1_04.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_C'mon_color1_05.jpg"
            ]
          }
        ],
        "price": 1250,
        "stock": [
          {
            "color": "Brown",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "C'mon Mini Bag",
        "brand": "Fendi",
        "description": "Small satchel bag, with curved and feminine lines, made of white leather. Model finished with raised edges and details and decorated with the FF logo on the flap. Magnetic closure. Flat pocket on the back. It has a lined interior with a flat pocket and metallic accessories with a vintage gold finish. It features an adjustable and removable shoulder strap. The shoulder strap hooks are an elegant detail, riveted with the FF logo, when the bag is open. Made in Italy",
        "specification": "@Height : 15cm @Depth: 6.5cm @Width : 21cm @Strap length (max.) : 56 cm",
        "categories": ["Bags", "Women", "underarm"],
        "colors": ["White"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "White",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_C'mon_color3_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_C'mon_color3_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_C'mon_color3_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_C'mon_color3_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_C'mon_color3_05.avif"
            ]
          }
        ],
        "price": 2490,
        "stock": [
          {
            "color": "White",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "C'mon Medium Bag",
        "brand": "Fendi",
        "description": "Medium size satchel bag, with curved and feminine lines, equipped with an elongated flap embellished with the metal FF logo. Made of dove gray leather with embossed details and edges. The sides of the accessory are in tone-on-tone grained leather. Flat pocket on the back. Magnetic button closure and metal FF logo. It has a lined interior with a flat pocket and metallic accessories with a vintage gold finish. It features an adjustable and removable shoulder strap. The shoulder strap hooks are an elegant detail, riveted with the FF logo, when the bag is open. Made in Italy",
        "specification": "@Height : 20cm @Depth: 7cm @Width : 25cm",
        "categories": ["Bags", "Women", "underarm"],
        "colors": ["Grey"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Grey",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_C'mon_color2_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_C'mon_color2_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_C'mon_color2_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_C'mon_color2_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_C'mon_color2_05.jpg"
            ]
          }
        ],
        "price": 2490,
        "stock": [
          {
            "color": "Grey",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Baguette Bag 25 years",
        "brand": "Fendi",
        "description": "Fendi celebrates 25 years of the Baguette bag with 25 re-editions of the famous “under-the-arm” bag’s most iconic archived styles. The Baguette #12 is inspired by the “sequin embroidery” Baguette from the Fall/Winter 1999-2000 collection. The bag is entirely embroidered by hand with 9,200 square sequins and around 3,000 micro-beads for a pink color-block effect. Finished with red elaphe details. Decorated with an FF clasp and featuring a front flap, magnetic clasp, internal compartment with zipper pocket, a “Baguette Fendi Re-Edition” plate and palladium-finish metalware. The bag can be carried by hand, or worn either on the shoulder or cross-body thanks to the elaphe shoulder strap and handle, both detachable. Made in Italy",
        "specification": "@Height: 15 cm @Depth: 6 cm @Width : 27cm",
        "categories": ["Bags", "Women", "underarm"],
        "colors": ["Pink"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Pink",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_baguette_color2_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_baguette_color2_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_baguette_color2_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_baguette_color2_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_baguette_color2_05.jpg"
            ]
          }
        ],
        "price": 5100,
        "stock": [
          {
            "color": "Pink",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Cookie Bag",
        "brand": "Fendi",
        "description": "Cookie mini hobo bag, made of jacquard fabric with iconic FF motif in brown tones and decorated with FF closure.Lined interior compartment and metal accessories with a gold finish. It can be carried by hand thanks to the adjustable shoulder strap. Made in Italy",
        "specification": "@Height: 17.5 cm @Depth: 4.5 cm; @Width : 22cm; @Weight: 0.23kg",
        "categories": ["Bags", "Women", "underarm"],
        "colors": ["#746e50"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "#746e50",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_cookie_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_cookie_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_cookie_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_cookie_04.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_cookie_05.webp"
            ]
          }
        ],
        "price": 2500,
        "stock": [
          {
            "color": "#746e50",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Peekaboo Mini Bag cuoio Romano",
        "brand": "Fendi",
        "description": "Iconic small Peekaboo ISeeU bag, made of brown Cuoio Romano leather, finished by hand with tone-on-tone stitching and the classic twist lock on both sides. Featuring a lining with the Selleria stamp in leather, two internal compartments separated by a stiff partition, an inner pocket with button and palladium-finish metalware. Can be carried by hand or on the shoulder thanks to the handle and the adjustable, removable shoulder strap. Made in Italy",
        "specification": "@Height: 21cm @Depth: 11cm @Width : 27cm",
        "categories": ["Bags", "Women", "underarm"],
        "colors": ["Brown"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_PeekabooMini_color3_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_PeekabooMini_color3_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_PeekabooMini_color3_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_PeekabooMini_color3_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_PeekabooMini_color3_05.avif"
            ]
          }
        ],
        "price": 2900,
        "stock": [
          {
            "color": "Brown",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Peekaboo Mini Bag camellia leather",
        "brand": "Fendi",
        "description": "Iconic small-sized Peekaboo bag, made of camellia leather and finished with tone-on-tone threading on the top, edges and handle. Decorated with the unmistakable twist lock on both sides. It has interiors lined in soft tone-on-tone nappa leather, two interior compartments divided by a rigid partition, an interior zipped pocket and gold-finish metal accessories. It can be carried by hand, on the shoulder or across the body thanks to the handle and the adjustable and removable shoulder strap. Made in Italy",
        "specification": "@Height: 18cm @Depth: 11cm @Width : 23cm",
        "categories": ["Bags", "Women", "underarm"],
        "colors": ["#fffce7"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "#fffce7",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_PeekabooMini_color2_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_PeekabooMini_color2_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_PeekabooMini_color2_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_PeekabooMini_color2_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_PeekabooMini_color2_05.jpg"
            ]
          }
        ],
        "price": 4900,
        "stock": [
          {
            "color": "#fffce7",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Peekaboo Mini Bag jacquard",
        "brand": "Fendi",
        "description": "Iconic Peekaboo ISeeU bag in an ideal compact size. Made of fabric with a jacquard FF motif fully embroidered with transparent sequins with a shiny effect. Decorated with the unmistakable twist lock on both sides. It has tone-on-tone lined interiors, two compartments divided by a rigid partition, an interior pocket and gold-finish metal accessories. It can be carried by hand or across the body using the handle and the adjustable and removable shoulder strap. Made in Italy",
        "specification": "@Height: 15.5cm @Depth: 11cm @Width : 20cm",
        "categories": ["Bags", "Women", "underarm"],
        "colors": ["Brown"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_PeekabooMini_color1_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_PeekabooMini_color1_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_PeekabooMini_color1_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_PeekabooMini_color1_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_PeekabooMini_color1_05.jpg"
            ]
          }
        ],
        "price": 2500,
        "stock": [
          {
            "color": "Brown",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Peekaboo Medium Bag camellia leather",
        "brand": "Fendi",
        "description": "Iconic medium-sized Peekaboo ISeeU bag, made of camellia leather and exquisitely embellished with a floral motif embroidered in white thread. Decorated with the unmistakable twist lock on both sides. It has interiors lined with soft tone-on-tone nappa leather visible from the outside, two compartments divided by a rigid partition, a removable and customizable interior bag, and gold-finish metal accessories. It can be carried by hand or on the shoulder using the handle and the adjustable and removable shoulder strap. Made in Italy",
        "specification": "@Height: 25.5cm @Depth: 13cm @Width : 33.5cm",
        "categories": ["Bags", "Women", "underarm"],
        "colors": ["#fffce7"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "#fffce7",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_PeekabooMedium_color2_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_PeekabooMedium_color2_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_PeekabooMedium_color2_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_PeekabooMedium_color2_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_PeekabooMedium_color2_05.jpg"
            ]
          }
        ],
        "price": 5800,
        "stock": [
          {
            "color": "#fffce7",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Peekaboo Medium Bag jacquard",
        "brand": "Fendi",
        "description": "Iconic medium-size Peekaboo ISeeU bag, made of fabric with a jacquard FF motif completely embroidered with transparent sequins with a shiny effect. Decorated with the unmistakable twist lock on both sides. It has tone-on-tone lined interiors visible from the outside, two compartments divided by a rigid partition, a removable and customizable interior pocket, and gold-finish metal accessories. It can be carried by hand or on the shoulder using the handle and the adjustable and removable shoulder strap. Made in Italy",
        "specification": "@Height: 25.5cm @Depth: 13cm @Width : 33.5cm",
        "categories": ["Bags", "Women", "underarm"],
        "colors": ["Brown"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_PeekabooMedium_color1_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_PeekabooMedium_color1_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_PeekabooMedium_color1_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_PeekabooMedium_color1_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_PeekabooMedium_color1_05.jpg"
            ]
          }
        ],
        "price": 5800,
        "stock": [
          {
            "color": "Brown",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Peekaboo Medium Bag Cuoio Romano",
        "brand": "Fendi",
        "description": "Iconic medium size Peekaboo ISeeU bag, made of brown Cuoio Romano leather and finished with large tone-on-tone handmade stitching. Decorated with the unmistakable twist lock on both sides. It has lined interiors visible from the outside with the Selleria leather seal, two compartments divided by a rigid partition, a removable and customizable interior pocket, and palladium-finish metal accessories. It can be carried by hand or on the shoulder using the handle and the adjustable and removable shoulder strap. Made in Italy",
        "specification": "@Height: 25.5cm @Depth: 13cm @Width : 33.5cm",
        "categories": ["Bags", "Women", "underarm"],
        "colors": ["Brown"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_PeekabooMedium_color3_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_PeekabooMedium_color3_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_PeekabooMedium_color3_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_PeekabooMedium_color3_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_PeekabooMedium_color3_05.jpg"
            ]
          }
        ],
        "price": 5800,
        "stock": [
          {
            "color": "Brown",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Kan U Bag",
        "brand": "Fendi",
        "description": "Mini bag with flap made of leather with embossed FF motif and hand-painted in brown and black tones. Decorated with the emblematic FF snap closure. It has two expandable interior compartments divided by a rigid partition, an interior pocket and metallic accessories with a gold finish. It can be carried crossbody or by hand thanks to the removable shoulder strap. Made in Italy",
        "specification": "@Height: 13cm @Depth: 9cm @Width : 19cm @Weight: 0.6kg",
        "categories": ["Bags", "Women", "underarm"],
        "colors": ["Brown"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_KanU_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_KanU_02.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_KanU_03.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_KanU_04.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_KanU_05.avif"
            ]
          }
        ],
        "price": 2500,
        "stock": [
          {
            "color": "Brown",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "By the Way Mini",
        "brand": "Fendi",
        "description": "Iconic mini-size Boston By The Way bag, made of leather with a thermo-stamped FENDI ROMA motif and rigid tortoiseshell-effect plexiglass handles. Zip closure. It has an interior lined in FF fabric, a zippered pocket and metallic accessories with a gold finish. It can be carried by hand thanks to the handles, on the shoulder or across the body thanks to the adjustable and removable shoulder strap. Made in Italy",
        "specification": "@Height : 12cm @Depth : 9cm @Width : 20.5cm @Shoulder strap drop: 62.5 cm",
        "categories": ["Bags", "Women", "underarm"],
        "colors": ["Brown", "White", "Pink"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymini_color1_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymini_color1_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymini_color1_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymini_color1_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymini_color1_05.jpg"
            ]
          },
          {
            "color": "White",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymini_color2_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymini_color2_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymini_color2_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymini_color2_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymini_color2_05.jpg"
            ]
          },
          {
            "color": "Pink",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymini_color3_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymini_color3_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymini_color3_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymini_color3_04.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymini_color3_05.avif"
            ]
          }
        ],
        "price": 1950,
        "stock": [
          {
            "color": "Brown",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "White",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "Pink",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "By the Way Medium",
        "brand": "Fendi",
        "description": "Iconic medium-sized Boston By The Way bag, made of leather with hot-stamped “FENDI ROMA” and fastened with a zip. It has a spacious lined interior, an interior zip pocket and palladium-finish metal accessories. It can be carried by hand thanks to the handles, on the shoulder or across the body thanks to the adjustable and removable shoulder strap. Made in Italy",
        "specification": "@Height : 15cm @Depth : 13cm @Width : 27cm; @Weight : 0.6kg @Strap length (min.) : 97 cm @Leash length (max.) : 115 cm @Shoulder strap drop: 48 cm",
        "categories": ["Bags", "Women"],
        "colors": ["Brown", "White", "Pink"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymediano_color3_01.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymediano_color3_02.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymediano_color3_03.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymediano_color3_04.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymediano_color3_05.webp"
            ]
          },
          {
            "color": "White",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymediano_color1_01.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymediano_color1_02.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymediano_color1_03.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymediano_color1_04.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymediano_color1_05.avif"
            ]
          },
          {
            "color": "Beige",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymediano_color2_01.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymediano_color2_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymediano_color2_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymediano_color2_04.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymediano_color2_05.avif"
            ]
          }
        ],
        "price": 2150,
        "stock": [
          {
            "color": "Brown",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "White",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "Pink",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Mon Tresor Bag",
        "brand": "Fendi",
        "description": "Small Mon Tresor bucket bag, made of fabric with FF motif. Lined interior and metal accessories with a gold finish. The bag has two removable shoulder straps, one long and one short, to be worn on the shoulder or across the body. Made in Italy",
        "specification": "@Height : 18cm @Depth : 10cm @Width : 12cm",
        "categories": ["Bags", "Women"],
        "colors": ["Brown", "White", "#fffce7"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_MonTresor_color1_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_MonTresor_color1_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_MonTresor_color1_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_MonTresor_color1_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_MonTresor_color1_05.avif"
            ]
          },
          {
            "color": "White",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_MonTresor_color2_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_MonTresor_color2_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_MonTresor_color2_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_MonTresor_color2_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_MonTresor_color2_05.jpg"
            ]
          },
          {
            "color": "#fffce7",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_MonTresor_color3_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_MonTresor_color3_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_MonTresor_color3_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_MonTresor_color3_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_MonTresor_color3_05.avif"
            ]
          }
        ],
        "price": 1950,
        "stock": [
          {
            "color": "Brown",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "White",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "#fffce7",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "First Bag",
        "brand": "Fendi",
        "description": "Small size Fendi First bag, made of fabric with FF motif. Features a large F-shaped clasp in coated metal. It has an interior compartment lined in fabric with the iconic FF motif, removable interior hooks and gold-finish metal accessories. It can be carried by hand as a bag or on the shoulder thanks to the removable shoulder strap. Made in Italy",
        "specification": "@Height : 18cm; @Depth : 9.6cm @Width : 26cm",
        "categories": ["Bags", "Women", "underarm"],
        "colors": ["Brown", "Pink", "#fffce7"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_firstsmall_color2_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_firstsmall_color2_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_firstsmall_color2_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_firstsmall_color2_04.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_firstsmall_color2_05.avif"
            ]
          },
          {
            "color": "Pink",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_firstsmall_color1_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_firstsmall_color1_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_firstsmall_color1_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_firstsmall_color1_04.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_firstsmall_color1_05.avif"
            ]
          },
          {
            "color": "#fffce7",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_firstsmall_color3_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_firstsmall_color3_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_firstsmall_color3_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_firstsmall_color3_04.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_firstsmall_color3_05.avif"
            ]
          }
        ],
        "price": 4400,
        "stock": [
          {
            "color": "Brown",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "Pink",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "#fffce7",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Fendigraphy Mini Bag",
        "brand": "Fendi",
        "description": "Small size hobo bag made of soft leather and decorated with the FENDI inscription in vintage gold metal visible when worn under the arm. Zip closure and interior compartment lined with fabric, metal accessories with a gold finish. It can be carried under the arm or across the body thanks to the adjustable and removable strap, and the hooks that allow a shoulder strap to be incorporated. Made in Italy",
        "specification": "@Height : 24.5cm; @Depth : 10cm @Width : 29cm @Weight: 0.7kg Shoulder strap drop: 18 cm",
        "categories": ["Bags", "Women", "underarm"],
        "colors": ["Brown", "Pink", "Black"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_fendigraphymini_color2_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_fendigraphymini_color2_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_fendigraphymini_color2_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_fendigraphymini_color2_04.avif"
            ]
          },
          {
            "color": "Pink",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_fendigraphymini_color3_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_fendigraphymini_color3_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_fendigraphymini_color3_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_fendigraphymini_color3_04.avif"
            ]
          },
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_fendigraphymini_color1_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_fendigraphymini_color1_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_fendigraphymini_color1_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_fendigraphymini_color1_04.avif"
            ]
          }
        ],
        "price": 4400,
        "stock": [
          {
            "color": "Brown",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "Pink",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Fendigraphy Medium Bag",
        "brand": "Fendi",
        "description": "Medium size hobo bag made of leather and decorated with the FENDI inscription in vintage palladium metal visible when worn under the arm. It features a zip fastener, an interior compartment lined in fabric and metal accessories with a palladium finish. It can be carried under the arm or across the body thanks to the adjustable and removable strap, and the hooks that allow a shoulder strap to be incorporated. Made in Italy",
        "specification": "@Height : 30cm @Depth : 11cm @Width : 36cm @Weight: 0.99kg @Shoulder strap drop: 29 cm",
        "categories": ["Bags", "Women", "underarm"],
        "colors": ["Brown", "White", "Black"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_fendigraphymediano_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_fendigraphymediano_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_fendigraphymediano_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_fendigraphymediano_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_fendigraphymediano_05.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_fendigraphymediano_06.avif"
            ]
          },
          {
            "color": "White",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_fendigraphymediano_color2_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_fendigraphymediano_color2_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_fendigraphymediano_color2_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_fendigraphymediano_color2_04.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_fendigraphymediano_color2_05.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_fendigraphymediano_color2_06.avif"
            ]
          },
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_fendigraphymediano_color3_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_fendigraphymediano_color3_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_fendigraphymediano_color3_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_fendigraphymediano_color3_04.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_fendigraphymediano_color3_05.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_fendigraphymediano_color3_06.avif"
            ]
          }
        ],
        "price": 4400,
        "stock": [
          {
            "color": "Brown",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "White",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Mini Sunshine Shopper Bag",
        "brand": "Fendi",
        "description": "Mini size Sunshine shopper bag. Presents FENDI ROMA inscription applied to leather. It has a lined interior compartment, leather trims and metal accessories with a gold finish. It can be carried by hand or on the shoulder thanks to the two handles and the slim, adjustable and removable shoulder strap. Made in Italy",
        "specification": "@Height : 18cm @Depth : 6.5cm @Width : 13cm",
        "categories": ["Bags", "Women", "underarm"],
        "colors": ["Brown", "White", "Black"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_SunshineShopper_color1_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_SunshineShopper_color1_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_SunshineShopper_color1_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_SunshineShopper_color1_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_SunshineShopper_color1_05.avif"
            ]
          },
          {
            "color": "White",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_SunshineShopper_color2_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_SunshineShopper_color2_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_SunshineShopper_color2_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_SunshineShopper_color2_04.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_SunshineShopper_color2_05.avif"
            ]
          }
        ],
        "price": 1750,
        "stock": [
          {
            "color": "Brown",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "White",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Sunshine Large Bag",
        "brand": "Fendi",
        "description": "Sunshine Shopper bag made of fabric with brown FF jacquard motif and FENDI ROMA leather and stiff leather handles. Features a spacious lined internal compartment, leather edging and gold-finish metalware. Can be carried by hand with the two handles, and two inner hooks allow you to attach a shoulder strap. Made in Italy",
        "specification": "@Height: 35cm Bottom: 21.5cm @Width: 40.5cm @Weight: 1.2kg @Shoulder strap drop: 11 cm",
        "categories": ["Bags", "Women"],
        "colors": ["Brown", "#746e50", "Black"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_sunshine_color1_01.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_sunshine_color1_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_sunshine_color1_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_sunshine_color1_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_sunshine_color1_05.avif"
            ]
          },
          {
            "color": "#746e50",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_sunshine_color3_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_sunshine_color2_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_sunshine_color2_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_sunshine_color2_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_sunshine_color2_05.jpg"
            ]
          },
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_sunshine_color2_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_sunshine_color3_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_sunshine_color3_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_sunshine_color3_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_sunshine_color3_05.jpg"
            ]
          }
        ],
        "price": 3190,
        "stock": [
          {
            "color": "Brown",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "#746e50",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Delfina Brown fabric high-heeled sandals",
        "brand": "Fendi",
        "description": "Delfina round-toe sandals with an ankle strap. Made of FF jacquard fabric. Details in brown leather. Heel with cut-out detail and gold-colored metal FF motif. Made in Italy",
        "specification": "@Composition: 65% polyamide, 35% cotton, 100% calf leather, inside: 100% goat leather, @Heel height : 95 mm",
        "categories": ["Heels", "Women"],
        "colors": ["Brown"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Delfina+Brown+fabric+high-heeled+sandals+atras.jpeg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Delfina+Brown+fabric+high-heeled+sandals+frontal.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Delfina+Brown+fabric+high-heeled+sandals+lateral.avif"
            ]
          }
        ],
        "price": 1050,
        "stock": [
          {
            "color": "Brown",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Delfina Black fabric high-heeled sandals",
        "brand": "Fendi",
        "description": "Delfina round-toe sandals with an ankle strap. Made of black karung. Heel with cut-out detail and gold-colored metal FF motif. Made in Italy",
        "specification": "@100% Karung snake leather, interior: 100% Goatskin, @Heel height : 95 mm",
        "categories": ["Heels", "Women"],
        "colors": ["Black"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Delfina+Black+leather+high-heeled+pumps+atras.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Delfina+Black+leather+high-heeled+pumps+lateral.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Delfina+Black+leather+high-heeled+pumps+Superior.avif"
            ]
          }
        ],
        "price": 1250,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Delfina Black leather high-heeled pumps",
        "brand": "Fendi",
        "description": "Round-toe Delfina pumps. Strap closure. Made of black leather. Heel with cut-out detail and gold-colored metal FF motif. Made in Italy",
        "specification": "@100% calf leather, interior: 100% goat leather, @Heel height : 105 mm",
        "categories": ["Heels", "Women"],
        "colors": ["Black"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Delfina+Black+fabric+high-heeled+sandals+atras.jpeg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Delfina+Black+fabric+high-heeled+sandals+lado.jpeg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Delfina+Black+fabric+high-heeled+sandals+lateral.avif"
            ]
          }
        ],
        "price": 1190,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Delfina Black fabric high-heeled sandals",
        "brand": "Fendi",
        "description": "Delfina round-toe sandals with an ankle strap. Made of black karung. Heel with cut-out detail and gold-colored metal FF motif. Made in Italy",
        "specification": "@100% Karung snake leather, interior: 100% Goatskin, @Heel height : 95 mm",
        "categories": ["Heels", "Women"],
        "colors": ["Black"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Delfina+Black+fabric+high-heeled+sandals+atras.jpeg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Delfina+Black+fabric+high-heeled+sandals+lado.jpeg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Delfina+Black+fabric+high-heeled+sandals+lado.jpeg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Delfina+Black+fabric+high-heeled+sandals+lateral.avif"
            ]
          }
        ],
        "price": 1250,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Delfina Black leather biker boots",
        "brand": "Fendi",
        "description": "Delfina biker boots with a round toe, laces, straps and a side zipper on the inside. Lug sole in rubber. Made of black leather with tone-on-tone fabric details. Gold-finish metalware. Made in Italy",
        "specification": "@100% Calfskin, interior: 100% Lambskin, @Heel height : 50 mm",
        "categories": ["Heels", "Women"],
        "colors": ["Black"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Delfina+Black+leather+biker+boots+atras.jpeg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Delfina+Black+leather+biker+boots+frontal+lateral.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Delfina+Black+leather+biker+boots+lateral.avif"
            ]
          }
        ],
        "price": 1590,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Rockoko Black leather biker boots with stretch fabric",
        "brand": "Fendi",
        "description": "Rockoko combat boots with stretch fabric inserts. Non-slip rubber sole. Made of black calfskin. The sock-like high top is trimmed with the FF motif and contrasting sporty stripes. Made in Italy",
        "specification": "@100% calf leather, 87% polyamide, 13% elastane, inside: 100% calf leather, @Heel height : 30 mm",
        "categories": ["Heels", "Women"],
        "colors": ["Black"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Rockoko+Black+leather+biker+boots+with+stretch+fabric+atras.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Rockoko+Black+leather+biker+boots+with+stretch+fabric+frontal.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Rockoko+Black+leather+biker+boots+with+stretch+fabric+lateral.avif"
            ]
          }
        ],
        "price": 1050,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Fendi First Black leather high-heeled sandals",
        "brand": "Fendi",
        "description": "Fendi First sandals with wide band and strap. Made of black leather. Diagonal F-shaped sculpted heel in gold-colored metal. Made in Italy",
        "specification": "@100% calf leather, inside: 100% lamb leather, @Heel height : 95 mm",
        "categories": ["Heels", "Women"],
        "colors": ["Black"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Fendi+First+Black+leather+high-heeled+sandals+atras.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Fendi+First+Black+leather+high-heeled+sandals+lateral.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Fendi+First+Black+leather+high-heeled+sandals+superior.webp"
            ]
          }
        ],
        "price": 1450,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Colibrì Black mesh high-heeled slingbacks",
        "brand": "Fendi",
        "description": "Colibrì slingbacks with pointed toe and elastic ribbons that wrap around the foot. The sole is embellished with rubber inserts. Made of micro mesh with an FF motif. Finished with amber-colored sequin embroidery. The padded cushion and hiking shoe tab add a sporty touch. Gold-enameled heel. Made in Italy",
        "specification": "@100% polyester, 100% polyurethane, lining: 100% polyamide, @Heel height : 85 mm",
        "categories": ["Heels", "Women"],
        "colors": ["Black"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Colibr%C3%AC+Black+mesh+high-heeled+slingbacks+atras.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Colibr%C3%AC+Black+mesh+high-heeled+slingbacks+lateral.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Colibr%C3%AC+Black+mesh+high-heeled+slingbacks+superior.avif"
            ]
          }
        ],
        "price": 1150,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Domino White FF fabric low-tops",
        "brand": "Fendi",
        "description": "Domino sneakers with rubber cupsoles. Made of jacquard fabric with FF motif in ivory white. Trimmed with tone on tone grosgrain ribbon. The white sole with contrasting bottom features a combination of embossed textures, the FF pattern superimposed on the toe and the Fendi Roma logo on the heel. Extra white laces. Made in Italy",
        "specification": "@65% Polyamide, 35% Cotton, 55% Cotton, 45% Polyamide, coating: 100% Resin, interior: 100% Cotton, @Heel height : 20 mm",
        "categories": ["Sneakers", "Women"],
        "colors": ["White"],
        "sizes": [
          "6",
          "6.5",
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "10.5",
          "11",
          "11.5",
          "12"
        ],
        "images": [
          {
            "color": "White",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Domino+White+FF+fabric+low-tops+atras.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Domino+White+FF+fabric+low-tops+lateral.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Domino+White+FF+fabric+low-tops+superior.webp"
            ]
          }
        ],
        "price": 695,
        "stock": [
          {
            "color": "White",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Fendi Flow White suede low tops",
        "brand": "Fendi",
        "description": "Slip-on sneakers with elastic laces, side zipper and corrugated sole with engraved F. Fendi Flow lettering embossed on the heels. Made of white suede with tech fabric inserts. Embellished with Lycra® details with FF motif. Lightweight white rubber soles with pale pink diagonal F detail. Made in Italy",
        "specification": "@100% calf leather, 100% polyester, inside: 100% polyester, @Heel height : 30 mm",
        "categories": ["Sneakers", "Women"],
        "colors": ["White"],
        "sizes": [
          "6",
          "6.5",
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "10.5",
          "11",
          "11.5",
          "12"
        ],
        "images": [
          {
            "color": "White",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Fendi+Flow+White+suede+low+tops+atras.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Fendi+Flow+White+suede+low+tops+lateral.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Fendi+Flow+White+suede+low+tops+superior.avif"
            ]
          }
        ],
        "price": 995,
        "stock": [
          {
            "color": "White",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Fendi Match Low tops in black suede",
        "brand": "Fendi",
        "description": "Fendi Match compact design sneakers with vintage label on tongue. Branded with FF pattern sewn on the side and embossed Fendi lettering on the sole. Made of black suede with white leather details. Embellished with black terry collar and laces. Covered rubber cupsole with brown bumper. The style includes a second pair of white terry laces. Made in Italy",
        "specification": "@100% Calfskin, 100% Calfskin (suede), inside: 69% Polyester, 28% Polyamide, 3% Elastane, 100% Calfskin, @Heel height : 20 mm",
        "categories": ["Sneakers", "Women"],
        "colors": ["White"],
        "sizes": [
          "6",
          "6.5",
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "10.5",
          "11",
          "11.5",
          "12"
        ],
        "images": [
          {
            "color": "White",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Fendi+Match+Low+tops+in+black+suede+atras.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Fendi+Match+Low+tops+in+black+suede+lateral.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Fendi+Match+Low+tops+in+black+suede+superior.webp"
            ]
          }
        ],
        "price": 930,
        "stock": [
          {
            "color": "White",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Baguette Beige nappa leather sandals",
        "brand": "Fendi",
        "description": "Baguette sandals with lightly padded bands and crisscrossed strap on the ankle and arch. Made of beige nappa leather. Heel with FF Baguette motif in golden metal. Made in Italy",
        "specification": "@100% Lambskin, interior: 100% Goatskin, @Heel height : 0 mm",
        "categories": ["Heels", "Women"],
        "colors": ["Beige"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Beige",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Baguette+Beige+nappa+leather+sandals+atras.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Baguette+Beige+nappa+leather+sandals+frontal.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Baguette+Beige+nappa+leather+sandals+lateral.avif"
            ]
          }
        ],
        "price": 1190,
        "stock": [
          {
            "color": "Beige",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Colibrì High-heeled slingbacks with embroidery",
        "brand": "Fendi",
        "description": "Streamlined and feminine Colibrì slingbacks with elastic ribbons that wrap around the foot. The sole is embellished with rubber inserts. Made of micromesh with FF Vertigo embroidery with multicolor beads. The padded cushion and hiking shoe tab add a sporty touch. Heel with FF Baguette motif in golden metal. Made in Italy",
        "specification": "@100% Cotton, interior: 100% Goatskin, @Heel height : 85 mm",
        "categories": ["Heels", "Women"],
        "colors": ["Blue"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Blue",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Colibr%C3%AC+High-heeled+slingbacks+with+embroidery+atras.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Colibr%C3%AC+High-heeled+slingbacks+with+embroidery+frontal.jpeg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Colibr%C3%AC+High-heeled+slingbacks+with+embroidery+lateral.avif"
            ]
          }
        ],
        "price": 1050,
        "stock": [
          {
            "color": "Blue",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Fashion Show Beige nappa leather slides",
        "brand": "Fendi",
        "description": "Platform slides with wide band presented during the Spring/Summer 2023 fashion show. Made of light beige nappa leather. Rubber platform sole with embossed oversized FF pattern. Made in Italy",
        "specification": "@100% Lambskin, interior: 100% Lambskin, @Heel height : 140 mm",
        "categories": ["Heels", "Women"],
        "colors": ["Beige"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Beige",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Fashion+Show+Beige+nappa+leather+slides+atras.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Fashion+Show+Beige+nappa+leather+slides+frontal.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Fashion+Show+Beige+nappa+leather+slides+superior.avif"
            ]
          }
        ],
        "price": 995,
        "stock": [
          {
            "color": "Beige",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Sneakers Black fabric sneakers",
        "brand": "Fendi",
        "description": "Rockoko sneakers with two-toned running shoe sole. The micro-perforated fabric means it has a flexible and lightweight fit. Made of black stretch yarn. Embellished with FF inlay. Velcro closure with black rubber tag and FENDI lettering. Made in Italy",
        "specification": "@87% polyamide, 13% elastane, 100% calf leather, 100% pvc, @Heel height : 35 mm",
        "categories": ["Sneakers", "Women"],
        "colors": ["Black"],
        "sizes": [
          "6",
          "6.5",
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "10.5",
          "11",
          "11.5",
          "12"
        ],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Sneakers+Black+fabric+sneakers+atras.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Sneakers+Black+fabric+sneakers+frontal.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Sneakers+Black+fabric+sneakers+lateral.avif"
            ]
          }
        ],
        "price": 895,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Colibrì Lite High-heeled blue FF chenille slingbacks",
        "brand": "Fendi",
        "description": "Streamlined and feminine Colibrì Lite slingbacks with narrow elastic ribbons that wrap around the foot. The sole is embellished with rubber inserts. Made of chenille with blue and black FF jacquard motif. The padded cushion and hiking shoe tab add a sporty touch. Black enameled heel. Made in Italy",
        "specification": "@64% viscose, 20% polyester, 16% cotton, 72% viscose, 28% silk, inside: 52% viscose, 28% cotton, 20% polyester, @Heel height : 85 mm",
        "categories": ["Heels", "Women"],
        "colors": ["Blue"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Blue",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Colibr%C3%AC+Lite+High-heeled+blue+FF+chenille+slingbacks+atras.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Colibr%C3%AC+Lite+High-heeled+blue+FF+chenille+slingbacks+frontal.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Colibr%C3%AC+Lite+High-heeled+blue+FF+chenille+slingbacks+lateral.avif"
            ]
          }
        ],
        "price": 995,
        "stock": [
          {
            "color": "Blue",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Baguette Black acetate sunglasses",
        "brand": "Fendi",
        "description": "Oversized oval Baguette eyeglasses in black acetate. Temples with cut-out Baguette logo and gold-colored metal trim. Gray lenses. Made in Italy",
        "specification": "@100% acetate",
        "categories": ["Sunglasses", "Women"],
        "care": "Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always keep your eyeglasses in their case",
        "colors": ["Black"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Baguette+Black+acetate+sunglasses+atras.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Baguette+Black+acetate+sunglasses+frontal.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Baguette+Black+acetate+sunglasses+lateral.jpeg"
            ]
          }
        ],
        "price": 450,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Fendi O’Lock Black acetate sunglasses",
        "brand": "Fendi",
        "description": "Square O’Lock glasses in black acetate. Temples with tone-on-tone metal O’Lock and blue lenses. Made in Italy",
        "specification": "@100% acetate",
        "categories": ["Sunglasses", "Women"],
        "care": "Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.",
        "colors": ["Black"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+O%E2%80%99Lock+Black+acetate+sunglasses+atras.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+O%E2%80%99Lock+Black+acetate+sunglasses+frontal.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+O%E2%80%99Lock+Black+acetate+sunglasses+lateral.avif"
            ]
          }
        ],
        "price": 460,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Fendi Roma Beige acetate sunglasses",
        "brand": "Fendi",
        "description": "Oversize, square Fendi Roma sunglasses made of transparent beige acetate. Temples with visible metal core with laser etched FF. Gold finish Fendi Roma logo on the sides. Brown lenses. Made in Italy",
        "specification": "@59% acetate, 41% viscose",
        "categories": ["Sunglasses", "Women"],
        "care": "Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
        "colors": ["Beige"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Beige",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+Roma+Beige+acetate+sunglasses+frontal.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+Roma+Beige+acetate+sunglasses+lado.jpeg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+Roma+Beige+acetate+sunglasses+lateral.jpeg"
            ]
          }
        ],
        "price": 380,
        "stock": [
          {
            "color": "Beige",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Baguette Gold-colored metal sunglasses",
        "brand": "Fendi",
        "description": "Oversize, square Fendi Roma sunglasses made of transparent beige acetate. Temples with visible metal core with laser etched FF. Gold finish Fendi Roma logo on the sides. Brown lenses. Made in Italy",
        "specification": "@100% acetate",
        "categories": ["Sunglasses", "Women"],
        "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always keep your eyeglasses in their case.After use, always place the eyeglasses back in their case.",
        "colors": ["Gold"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Gold",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Baguette+Gold-colored+metal+sunglasses+frontal.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Baguette+Gold-colored+metal+sunglasses+lado.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Baguette+Gold-colored+metal+sunglasses+lateral.avif"
            ]
          }
        ],
        "price": 460,
        "stock": [
          {
            "color": "Gold",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Fendigraphy Blue gradient shield sunglasses",
        "brand": "Fendi",
        "description": "Rectangular Fendigraphy shield eyeglasses inspired by the Hobo bag. Temples with in-line gold-colored metal Fendi maxi lettering. Blue gradient lenses and adjustable nose pads. Made in Italy",
        "specification": "@100% plastic, 100% metal",
        "categories": ["Sunglasses", "Women"],
        "care": "Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always keep your eyeglasses in their case.",
        "colors": ["Blue"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Blue",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendigraphy+Blue+gradient+shield+sunglasses+frontal.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendigraphy+Blue+gradient+shield+sunglasses+lado.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendigraphy+Blue+gradient+shield+sunglasses+lateral.avif"
            ]
          }
        ],
        "price": 490,
        "stock": [
          {
            "color": "Blue",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Fendi Roma Black acetate sunglasses",
        "brand": "Fendi",
        "description": "Rectangular Fendi Roma sunglasses in black acetate. Temples with visible metal core with laser etched FF. Gold finish Fendi Roma logo on the sides. Gray lenses. Made in Italy",
        "specification": "@59% acetate, 41% viscose",
        "categories": ["Sunglasses", "Women"],
        "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
        "colors": ["Black"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+Roma+Black+acetate+sunglasses+frontal.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+Roma+Black+acetate+sunglasses+lado.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+Roma+Black+acetate+sunglasses+lateral.avif"
            ]
          }
        ],
        "price": 380,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Fendi First Black acetate sunglasses GOLD",
        "brand": "Fendi",
        "description": "Square Fendi First eyeglasses in black acetate. Temples with oversize diagonal F motif in gold-colored metal. Blue gradient lenses. Made in Italy",
        "specification": "@100% acetate",
        "categories": ["Sunglasses", "Women"],
        "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
        "colors": ["Black"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+First+Black+acetate+sunglasses+frontal.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+First+Black+acetate+sunglasses+lado.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+First+Black+acetate+sunglasses+lateral.avif"
            ]
          }
        ],
        "price": 450,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Fendi First Shield sunglasses with gray gradient lenses",
        "brand": "Fendi",
        "description": "Fendi First shield sunglasses with palladium-color metal temples and gray gradient lenses with micro F in crystals. Adjustable nose pads. Made in Italy",
        "specification": "@100% Metal",
        "categories": ["Sunglasses", "Women"],
        "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
        "colors": ["Black"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+First+Shield+sunglasses+with+gray+gradient+lenses+frontal.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+First+Shield+sunglasses+with+gray+gradient+lenses+lado.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+First+Shield+sunglasses+with+gray+gradient+lenses+lateral.avif"
            ]
          }
        ],
        "price": 520,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Fendi First Gold metal sunglasses with gradient lenses",
        "brand": "Fendi",
        "description": "Oversized square Fendi First eyewear in gold-colored metal. Gray gradient lenses embellished with micro F in crystals. Adjustable nose pads. Made in Italy",
        "specification": "@100% Metal",
        "categories": ["Sunglasses", "Women"],
        "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
        "colors": ["Gold"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Gold",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+First+Gold+metal+sunglasses+with+gradient+lenses+frontal.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+First+Gold+metal+sunglasses+with+gradient+lenses+lado.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+First+Gold+metal+sunglasses+with+gradient+lenses+lateral.webp"
            ]
          }
        ],
        "price": 520,
        "stock": [
          {
            "color": "Gold",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "O’Lock Sunglasses in transparent caramel acetate",
        "brand": "Fendi",
        "description": "Square O’Lock eyeglasses in transparent caramel acetate. Temples with gold-colored metal O’Lock and light brown gradient lenses. Made in Italy",
        "specification": "@100% Plastic, 100% Metal",
        "categories": ["Sunglasses", "Women"],
        "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
        "colors": ["Brown"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/O%E2%80%99Lock+Sunglasses+in+transparent+caramel+acetate+frontal.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/O%E2%80%99Lock+Sunglasses+in+transparent+caramel+acetate+lado.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/O%E2%80%99Lock+Sunglasses+in+transparent+caramel+acetate+lateral.jpeg"
            ]
          }
        ],
        "price": 460,
        "stock": [
          {
            "color": "Brown",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Fendi First Fashion Show sunglasses",
        "brand": "Fendi",
        "description": "Presented at the Fall-Winter 22 fashion show, these oval-shaped gold-tone metal sunglasses are inspired by the atmosphere of the 2000s. In keeping with the new Fendi First Fashion Jewelry line, designed by Delfina Delettrez Fendi, they are decorated with a crystal micro F design. Green lenses. Adjustable nose pads. Made in Italy",
        "specification": "@100% Metal",
        "categories": ["Sunglasses", "Women"],
        "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
        "colors": ["green"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "green",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+First+Fashion+Show+sunglasses+frontal.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+First+Fashion+Show+sunglasses+lado.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+First+Fashion+Show+sunglasses+lateral.webp"
            ]
          }
        ],
        "price": 520,
        "stock": [
          {
            "color": "green",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Fendi First Mint green acetate sunglasses",
        "brand": "Fendi",
        "description": "Square Fendi First eyeglasses in mint green acetate. Temples with oversize diagonal F motif in gold-colored metal. Light khaki gradient lenses. Made in Italy",
        "specification": "@100% acetate",
        "categories": ["Sunglasses", "Women"],
        "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
        "colors": ["Mint"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Mint",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+First+Mint+green+acetate+sunglasses+frontal.jpeg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+First+Mint+green+acetate+sunglasses+lado.jpeg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+First+Mint+green+acetate+sunglasses+lateral.jpeg"
            ]
          }
        ],
        "price": 450,
        "stock": [
          {
            "color": "Mint",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Fendigraphy Transparent pink acetate sunglasses",
        "brand": "Fendi",
        "description": "Oversized round Fendigraphy eyewear in transparent pink acetate, inspired by the Hobo bag. Temples with in-line gold-colored metal Fendi maxi lettering. Brown gradient lenses. Made in Italy",
        "specification": "@100% acetate",
        "categories": ["Sunglasses", "Women"],
        "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
        "colors": ["Pink"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Pink",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendigraphy+Transparent+pink+acetate+sunglasses+frontal.jpeg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendigraphy+Transparent+pink+acetate+sunglasses+lado.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendigraphy+Transparent+pink+acetate+sunglasses+lateral.avif"
            ]
          }
        ],
        "price": 490,
        "stock": [
          {
            "color": "Pink",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Baguette Gray Havana FF acetate sunglasses",
        "brand": "Fendi",
        "description": "Square Baguette eyewear in gray Havana acetate with FF logo. Gray gradient lenses and gold-color metal temples with Baguette logo. Made in Italy",
        "specification": "@100% Metal, 100% Plastic Trim",
        "categories": ["Sunglasses", "Women"],
        "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
        "colors": ["Grey"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Grey",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Baguette+Gray+Havana+FF+acetate+sunglasses+frontal.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Baguette+Gray+Havana+FF+acetate+sunglasses+lado.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Baguette+Gray+Havana+FF+acetate+sunglasses+lateral.avif"
            ]
          }
        ],
        "price": 400,
        "stock": [
          {
            "color": "Grey",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": ": Fendi O’Lock Havana acetate sunglasses",
        "brand": "Fendi",
        "description": "Square O’Lock glasses in Havana acetate. Temples with gold-colored metal O’Lock and brown gradient lenses. Made in Italy",
        "specification": "@100% acetate",
        "categories": ["Sunglasses", "Women"],
        "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
        "colors": ["Black"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+O%E2%80%99Lock+Havana+acetate+sunglasses+frontal.jpeg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+O%E2%80%99Lock+Havana+acetate+sunglasses+lado.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+O%E2%80%99Lock+Havana+acetate+sunglasses+lateral.jpeg"
            ]
          }
        ],
        "price": 460,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "FF Belt Brown leather belt",
        "brand": "Fendi",
        "description": "Thin belt with loop and FF stud buckle. Made of tobacco-colored leather with an embossed mini FF print. Metal accessories in a vintage-gold finish. Made in Italy",
        "specification": "@100% calfskin, inside: 100% calfskin @Width : 2 cm",
        "categories": ["belt", "Accessories", "Women"],
        "colors": ["Brown"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Accesories/FF+Belt+Brown+leather+belt+frontal.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Accesories/FF+Belt+Brown+leather+belt+lateral.avif"
            ]
          }
        ],
        "price": 470,
        "stock": [
          {
            "color": "Brown",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Fendigraphy belt Beige leather belt",
        "brand": "Fendi",
        "description": "Belt with loop and stud buckle. Made of beige leather and embellished with metal Fendi lettering. Metal accessories in a vintage-gold finish. Made in Italy",
        "specification": "@100% calf leather, interior: 100% calf leather @Width : 3 cm",
        "categories": ["belt", "Accessories", "Women"],
        "colors": ["Beige"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Beige",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Accesories/Fendigraphy+belt+Beige+leather+belt+beige.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Accesories/Fendigraphy+belt+Beige+leather+belt+lado.avif"
            ]
          }
        ],
        "price": 850,
        "stock": [
          {
            "color": "Beige",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "F Is Fendi 28 mm - Round watch with F is Fendi logo",
        "brand": "Fendi",
        "description": "28 mm round shiny and satin-finish gold-colored stainless steel case with tone-on-tone stainless steel F insert. Off-center gold sunray dial with glossy FF print, gold indices and hands. Tone-on-tone stainless steel bracelet, 11.95/10 mm, with engraved FF motif and folding buckle.",
        "specification": "@100% Stainless steel IP yellow",
        "categories": ["watch", "Accessories", "Women"],
        "colors": ["Gold"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Gold",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Accesories/F+Is+Fendi+28+mm+-+Round+watch+with+F+is+Fendi+logo+frontal.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Accesories/F+Is+Fendi+28+mm+-+Round+watch+with+F+is+Fendi+logo+lateral.avif"
            ]
          }
        ],
        "price": 1350,
        "stock": [
          {
            "color": "Gold",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "O’Lock Vertical 14.80 x 21.30 mm - Oval watch with FF logo",
        "brand": "Fendi",
        "description": "Gold-colored oval stainless steel case, 14.80 x 28.30 mm, Fendi O’Lock bevel with 33 inset diamonds in two different sizes, totaling around 0.10 carats. Crown set with one diamond, around 0.02 carats. Dark green enameled sunray dial, indicators with inset diamonds at 12 o’clock and 6 o’clock, totaling around 0.01 carats, gold-colored minute and second hands with radius cut. Two-toned stainless steel double-wrap bracelet, 4.80 mm, with contrasting satin-effect links and folding buckle.",
        "specification": "@100% stainless steel, 100% diamonds (36 stones ~0.13 carats)",
        "categories": ["watch", "Accessories", "Women"],
        "colors": ["Gold"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Gold",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Accesories/O%E2%80%99Lock+Vertical+14.80+x+21.30+mm+-+Oval+watch+with+FF+logo+Frontal.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Accesories/O%E2%80%99Lock+Vertical+14.80+x+21.30+mm+-+Oval+watch+with+FF+logo+lateral.avif"
            ]
          }
        ],
        "price": 2850,
        "stock": [
          {
            "color": "Gold",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Forever Fendi 19 mm – Bracelet watch with FF logo",
        "brand": "Fendi",
        "description": "Rose gold-colored polished and brushed stainless steel case, bezel set with 64 diamonds, approximately 0.14 carats, crown set with one diamond, approximately 0.02 carats. Genuine malachite dial, rose gold-colored indices and hands. Rose gold-colored satin-finish stainless steel bracelet, with polished central links with FF logo and folding buckle.",
        "specification": "@100% stainless steel, 100% diamonds (65 stones ~0.16 carats), 100% stone",
        "categories": ["watch", "Accessories", "Women"],
        "colors": ["Gold"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Gold",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Accesories/Forever+Fendi+19+mm+%E2%80%93+Bracelet+watch+with+FF+logo+Frontal.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Accesories/Forever+Fendi+19+mm+%E2%80%93+Bracelet+watch+with+FF+logo+lado.jpeg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Accesories/Forever+Fendi+19+mm+%E2%80%93+Bracelet+watch+with+FF+logo+lateral.jpeg"
            ]
          }
        ],
        "price": 2590,
        "stock": [
          {
            "color": "Gold",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Forever Fendi hair clip Gold metal hair clip",
        "brand": "Fendi",
        "description": "Hair clip with FF motif. Clip closure. Made of gold-finish metal.",
        "specification": "@100% brass",
        "care": "The product you have purchased may be embellished with a precious metal top or varnish and may also feature appliqués, gemstones (in various shades of the same color), crystals, plexiglass or resin. The mixture of materials and the special details give this product its unique character. To best maintain the product’s appearance over time, avoid contact with sea water, spa water, lacquers, perfumes, solvents, chemicals and abrasive materials. If necessary, clean with water and a neutral soap and/or polish with a dry microfiber cloth.",
        "categories": ["Head", "Accessories", "Women"],
        "colors": ["Gold"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Gold",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Accesories/Forever+Fendi+hair+clip+Gold+metal+hair+clip+atras.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Accesories/Forever+Fendi+hair+clip+Gold+metal+hair+clip+frente.avif"
            ]
          }
        ],
        "price": 520,
        "stock": [
          {
            "color": "Gold",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Tights Black nylon stockings",
        "brand": "Fendi",
        "description": "Stockings with all-over FF motif, made of opaque black nylon. Made in italy",
        "specification": "@93% Polyamide, 7% Elastane",
        "categories": ["socks", "Accessories", "Women"],
        "colors": ["Black"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Accesories/Tights+Black+nylon+stockings+frontal.webp"
            ]
          }
        ],
        "price": 260,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "FF Belt",
        "brand": "Fendi",
        "description": "Thin belt with loop and FF cufflink closure. Made of tobacco-colored leather with embossed mini FF motif. Metal accessories with vintage gold finish. Made in Italy",
        "specification": "@100% calfskin; internal part: 100% calfskin",
        "categories": ["Accessories", "Women", "belt"],
        "colors": ["Brown"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/accesories_cinturon_FF_marron_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/accesories_cinturon_FF_marron_02.avif"
            ]
          }
        ],
        "price": 370,
        "stock": [
          {
            "color": "Brown",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Shawl",
        "brand": "Fendi",
        "description": "Wide, square shawl crafted in a soft blend of wool and silk. The timeless FF print features some of the brand's most iconic accessories. The Baguette and the Peekaboo are found inside the small arches that decorate the edge of the graphic pattern. Finished with hand frayed edges. Made in Italy",
        "specification": "@90% modal, 10% cashmere",
        "categories": ["Accessories", "Women", "shawl"],
        "colors": ["Brown"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/accesories_chal_marron1_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/accesories_chal_marron1_02.avif"
            ]
          }
        ],
        "price": 570,
        "stock": [
          {
            "color": "Brown",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Shawl Large",
        "brand": "Fendi",
        "description": "Large shawl made of a soft wool and silk blend in brown. The luxurious jacquard weave reproduces the FF and Fendi Mirror logos with a 3D effect, allowing it to be worn in various ways. Suitable for all seasons. Made in Italy",
        "specification": "@52% silk, 48% fleece wool",
        "categories": ["Accessories", "Women", "shawl"],
        "colors": ["Brown"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/accesories_chal_marron2_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/accesories_chal_marron2_02.avif"
            ]
          }
        ],
        "price": 570,
        "stock": [
          {
            "color": "Brown",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Charm porta Airpods Pro FF Diamonds",
        "brand": "Fendi",
        "description": "Airpods® Pro case with clip and personalized ring. Presents diagonal FF closure with magnetic button. Leather construction with embossed mini FF motif. Metallic accessories with gold finish. Made in Italy",
        "specification": "@Measurements: @Height : 5 cm @Depth : 3 cm @Width : 7 cm",
        "categories": ["Accessories", "Women", "airpods holder"],
        "colors": ["Brown", "Black", "Pink"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/accesories_CharmportaAirpodsProFFDiamonds_marron1_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/accesories_CharmportaAirpodsProFFDiamonds_marron1_02.avif"
            ]
          },
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/accesories_CharmportaAirpodsProFFDiamonds_negro_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/accesories_CharmportaAirpodsProFFDiamonds_negro_02.avif"
            ]
          },
          {
            "color": "Pink",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/accesories_CharmportaAirpodsProFFDiamonds_rosa_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/accesories_CharmportaAirpodsProFFDiamonds_rosa_02.avif"
            ]
          }
        ],
        "price": 420,
        "stock": [
          {
            "color": "Brown",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "Pink",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Hair Bands",
        "brand": "Fendi",
        "description": "Two silk covered hair bands. One features a graphic print with the brand's iconic motifs in shades of beige and brown. The other is embellished with FF pattern. Made in Italy",
        "specification": "@100 % silk",
        "categories": ["Accessories", "Women", "hair bands", "bands"],
        "colors": ["Brown"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/accesories_goma_marronoscuroyclaro.avif"
            ]
          }
        ],
        "price": 230,
        "stock": [
          {
            "color": "Brown",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Wrappy",
        "brand": "Fendi",
        "description": "Wrappy reversible design. To wear around the neck, knotted on the wrist or to add a touch of color to bags. Silk making. One of its sides is decorated with a print made up of iconic elements of the brand in brown tones and the other presents a beige FF graphic pattern. Made in Italy",
        "specification": "@100% silk",
        "categories": ["Accessories", "Women", "hair bands", "bands"],
        "colors": ["Brown"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/accesories_wrappy_marronclaro_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/accesories_wrappy_marronclaro_02.avif"
            ]
          }
        ],
        "price": 170,
        "stock": [
          {
            "color": "Brown",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "ForEver Ring Brass",
        "brand": "Fendi",
        "description": "Wide band ring with two thin circles that can also be used as a bandana ring. Made of metal with a gold finish. Decorated with the FF motif enameled in black tones. Made in Italy",
        "specification": "@100% brass",
        "categories": ["Accessories", "Women", "ring"],
        "colors": ["Gold"],
        "sizes": ["S", "M", "L"],
        "images": [
          {
            "color": "Gold",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/fendi_ring_gold_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/fendi_ring_gold_02.avif"
            ]
          }
        ],
        "price": 270,
        "stock": [
          {
            "color": "Gold",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "ForEver Ring",
        "brand": "Fendi",
        "description": "Wide band ring with openwork FF motif. Made of metal with a gold finish. Made in Italy",
        "specification": "@Composition: 100% bronze @Measures: Band height : 1 cm",
        "categories": ["Accessories", "Women", "ring"],
        "colors": ["Gold"],
        "sizes": ["S", "M", "L"],
        "images": [
          {
            "color": "Gold",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/fendi_ring2_gold_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/fendi_ring2_gold_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/fendi_ring2_gold_03.avif"
            ]
          }
        ],
        "price": 290,
        "stock": [
          {
            "color": "Gold",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Fendigraphy",
        "brand": "Fendi",
        "description": "Letter D-shaped case in stainless steel with a shiny gold PVD coating. Crown with engraved FF logo. Champagne sunray dial, gold-colored indices and radial-cut gold-colored hands. 25mm rectangular link bracelet in gold PVD-coated stainless steel with tone-on-tone Fendi logo lettering. folding buckle",
        "specification": "@100% stainless steel with yellow IP",
        "categories": ["Accessories", "Women", "hair bands", "bands"],
        "colors": ["Gold"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Gold",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/fendi_watch_gold_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/fendi_watch_gold_02.jpg"
            ]
          }
        ],
        "price": 1300,
        "stock": [
          {
            "color": "Gold",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Forever Necklace",
        "brand": "Fendi",
        "description": "Fine chain necklace with intertwined FF pendants. Made of metal with a gold finish. Made in Italy",
        "specification": "@100% bronze",
        "categories": ["Accessories", "Women", "watch"],
        "colors": ["Gold"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Gold",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/fendi_necklace_gold_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/fendi_necklace_gold_02.jpg"
            ]
          }
        ],
        "price": 380,
        "stock": [
          {
            "color": "Gold",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "F Is Fendi Necklace",
        "brand": "Fendi",
        "description": "Chain necklace with ornaments in the F is Fendi logo shape. Small clip fastening and logo nameplate. Made of metal. Made in Italy",
        "specification": "@100% Bronze, 100% Zircon",
        "categories": ["Accessories", "Women", "watch"],
        "colors": ["Gold", "Silver", "Pink"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Gold",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/fendi_FIsFendi_gold_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/fendi_FIsFendi_gold_02.avif"
            ]
          },
          {
            "color": "Silver",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/fendi_FIsFendi_silver_01.avif"
            ]
          },
          {
            "color": "Pink",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/fendi_necklace_gold_01.avif"
            ]
          }
        ],
        "price": 430,
        "stock": [
          {
            "color": "Gold",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "Silver",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "Pink",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Hard case for mobile phone",
        "brand": "Fendi",
        "description": "iPhone® 14 case with ring. Made of leather with embossed FF motif. Metallic accessories with gold finish. Made in Italy",
        "specification": "@Height : 14.5 cm @Depth : 1.5 cm @Width : 7.5 cm",
        "categories": ["Accessories", "Women", "Hard case", "case"],
        "colors": ["Brown", "Black", "Pink"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/accesories_funda_marron_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/accesories_funda_marron_02.avif"
            ]
          },
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/accesories_funda_negro_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/accesories_funda_negro_02.avif"
            ]
          },
          {
            "color": "Pink",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/accesories_funda_rosa_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/accesories_funda_rosa_02.avif"
            ]
          }
        ],
        "price": 630,
        "stock": [
          {
            "color": "Brown",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "Pink",
            "stock": "100",
            "sold": 0
          }
        ]
      }
    ])
  }else{
    res.status(403).json({message: "Token not authorized"})
  }
})



// MAN SECTION

// ---------- Louis Vuitton --------> (Completed)

app.get("/lv/man/:token", (req, res)=>{
  if(req.params.token === TOKEN){
    res.status(200).json([
      {
        "name":" Keepall",
        "brand":"Louis Vuitton",
        "description":"The Keepall 25 travel bag is a new miniature version crafted in exquisite black Taurillon Monogram leather. This innovative urban design features all the characteristic details of the Keepall line, such as the two reinforcing straps and the removable identification tag made of leather. Ideal for men with contemporary tastes, the piece includes a double handle and the classic shoulder strap.",
        "specifications":"@Black color@Embossed Taurillon Monogram leather@Leather trim@Fabric lining@Tone-on-tone metal pieces@Zipper closure@Spacious main compartment@Interior flat pocket@Removable identification tag@Strap: Z05@Strap drop: 55.0 cm@Maximum strap drop: 63.0 cm@Handle: Z06." ,
        "categories":["Bags","Man"],
        "colors": ["Black"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo1/Keepall-front.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo1/Keepall-horizontal.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo1/Keepall-interior.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo1/Keepall-correa.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo1/Keepall-modelo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo1/Keepall-video.mp4"]
            }        
        ],
        "price": 3777,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":" City Keepall",
        "brand":"Louis Vuitton",
        "description":"This version of the iconic City Keepall travel bag, in black Aerogram leather, is part of Louis Vuitton's New Classics collection for Fall 2021. The piece is crafted from fine-grained calfskin leather, as soft and flexible as a traditional Aerogram. This elegant and contemporary model offers functionality with its removable shoulder strap and is enhanced by tone-on-tone metal LV initials.",
        "specifications":"@Black Aerogram grained calfskin leather@Leather trim@Fabric lining@Matte black metal pieces@Iconic metal initials@Double zipper closure@Spacious main compartment@Iconic customizable identification tag@Strap: Z05@Strap drop: 45.0 cm@Maximum strap drop: 56.0 cm@Handle: Z01." ,
        "categories":["Bags","Man"],
        "colors": ["Black"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo2/Keepall-front.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo2/Keepall-horizontal.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo2/Keepall-interior.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo2/Keepall-correa.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo2/Keepall-modelo.webp"]
            }        
        ],
        "price": 3560,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"LV Aerogram",
        "brand":"Louis Vuitton",
        "description":"The new LV Aerogram crossbody backpack, with its minimalist design and refined grained calfskin leather, is a practical accessory that allows for hands-free convenience. The black metal LV Initials and the strap inspired by the Maison's historic trunks add a subtle distinctive touch. Ideal for fashion-forward men, it features a spacious beveled flap pocket with a magnetic closure and an exterior compartment with a zipper.",
        "specifications":"@Black grained calfskin leather@Leather trim@Fabric lining@Black metal pieces@Metal LV Initials@Front flap pocket with magnetic closure@Exterior compartment with zipper@Strap: Z03@Strap drop: 36.0 cm@Maximum strap drop: 53.0 cm@Handle: Z01." ,
        "categories":["Bags","Man"],
        "colors": ["Black"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo3/Aerogram-front.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo3/Aerogram-horizontal.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo3/Aerogram-interior.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo3/Aerogram-modelo.png"]
            }        
        ],
        "price": 2676,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Racer",
        "brand":"Louis Vuitton",
        "description":"The Racer backpack, in Monogram Shadow leather, stands out for its elegant and sporty style. The lightweight and flexible calfskin leather is presented in a refined black tone with Louis Vuitton's classic Monogram pattern embossed, adding a subtle distinctive detail. Thanks to its comfortable straps and the perimeter zipper closure, it is an ideal accessory for everyday use and active lifestyles.",
        "specifications":"@Black color@Monogram Shadow leather@Leather trim@Fabric lining@Matte black metal pieces@Double zip-around closure@Front zip pocket for easy access@Interior flat pocket@Interior double flat pocket@D-ring for hanging accessories, keys, etc.@Strap: Z01@Handle: Z06.." ,
        "categories":["Bags","Man"],
        "colors": ["Black"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo4/Racer-front.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo4/Racer-horizontal.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo4/Racer-interior.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo4/Racer-modelo.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo4/Racer-modelo2.png"]
            }        
        ],
        "price": 3612,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Christopher MM",
        "brand":"Louis Vuitton",
        "description":"The Christopher MM backpack takes on the adventurous style of mountaineering accessories and reinterprets it for urban life. This spacious model is crafted in elegant Monogram Canvas. The design is the perfect complement for an office ensemble or a casual outfit.",
        "specifications":"@Body crafted in Monogram Canvas@Adjustable straps@Leather trim@Silver-colored metal pieces@Flap@Flap closure with drawstring and snap button@Fabric lining@Two side pockets@iPad pocket@Interior zip pocket@Two flat interior pockets@Strap: Z01@Handle: Z05." ,
        "categories":["Bags","Man"],
        "colors": ["Brown"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Brown",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo5/Christopher-front.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo5/Christopher-horizontal.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo5/Christopher-interior.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo5/Christopher-modelo1.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo5/Christopher-modelo2.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo5/Christopher-Video.mp4"]
            }        
        ],
        "price": 3790,
        "stock": [
            {
                "color":"Brown",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Avenue",
        "brand":"Louis Vuitton",
        "description":"The Avenue crossbody backpack, crafted in coated Monogram Macassar Canvas, is compact, sporty, and boasts a modern and casual style, making it the perfect urban accessory. It features an adjustable strap, allowing you to wear it on the left or right side. The piece conforms comfortably to the body and has a double closure to keep valuables secure.",
        "specifications":"@Coated Monogram Macassar Canvas@Fabric lining@Matte black metal pieces@Double closure@Exterior zip pocket@Two flat interior pockets@Strap: Z01@Handle: Z01." ,
        "categories":["Bags","Man"],
        "colors": ["Brown"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Brown",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo6/Avenue-front.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo6/Avenue-horizontal.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo6/Avenue-interior.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo6/Avenue-modelo1.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo6/Avenue-modelo2.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo6/Avenue-Video.mp4"]
            }        
        ],
        "price": 2350,
        "stock": [
            {
                "color":"Brown",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Discovery PM",
        "brand":"Louis Vuitton",
        "description":"The classic and elegant Discovery PM backpack is crafted in a combination of Monogram Macassar Canvas and black leather. This spacious model features silver-tone metal pieces and exterior pockets for easy access to everyday essentials. The design includes two interior pockets, one specifically designed to hold an iPad, adjustable leather straps, and a top handle.",
        "specifications":"@Coated Monogram Macassar Canvas@Leather trim@Textile lining@Silver-finished metal pieces@Double closure@Two open side pockets@Front zip pocket@Triple flat interior pocket@Strap: Z01@Handle: Z05." ,
        "categories":["Bags","Man"],
        "colors": ["Brown"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Brown",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo7/Discovery-front.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo7/Discovery-horizontal.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo7/Discovery-back.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo7/Discovery-zoom.webp"]
            }        
        ],
        "price": 2943,
        "stock": [
            {
                "color":"Brown",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Handle Soft Trunk",
        "brand":"Louis Vuitton",
        "description":"The Handle Soft Trunk bag, crafted in Louis Vuitton's iconic Monogram Macassar canvas, features reinforced corners and leather straps that evoke the Maison's luggage-making tradition. With its slim design, it includes a removable shoulder strap for comfortable carrying. The piece has a large opening for easy access to belongings such as small digital devices and other personal items.",
        "specifications":"@Coated Monogram Macassar canvas@Leather trim@Fabric lining@Matte black metal pieces@Corner and strap reinforcements inspired by trunks@Double zip closure@Expandable main compartment@Front flat pocket@Interior flat pocket@Strap: Z05@Strap drop: 44.5 cm@Maximum strap drop: 58.0 cm@Handle: Z05." ,
        "categories":["Bags","Man"],
        "colors": ["Brown"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Brown",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo8/SoftTrunk-front.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo8/SoftTrunk-horizontal.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo8/SoftTrunk-interior.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo8/SoftTrunk-modelo1.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo8/SoftTrunk-modelo2.webp"]
            }        
        ],
        "price": 3693,
        "stock": [
            {
                "color":"Brown",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Adrian",
        "brand":"Louis Vuitton",
        "description":"The Adrian backpack is crafted from textured Taïga leather. Ideal for work, this spacious model features a padded interior compartment for a laptop, an exterior pocket, and multiple closures. This modern piece is completed with a top handle and two adjustable straps that allow it to be worn in different ways.",
        "specifications":"@Black color@Taïga leather@Leather trim@Textile lining@Silver-finished metal pieces@Double closure@Main compartment@Padded compartment for a laptop@Front pocket with zipper and an interior flat pocket@Strap: Z01@Handle: Z05." ,
        "categories":["Bags","Man"],
        "colors": ["Black"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo9/SoftTrunk-front.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo9/SoftTrunk-horizontal.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo9/SoftTrunk-interior.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo9/SoftTrunk-back.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo9/SoftTrunk-modelo1.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo9/SoftTrunk-video.mp4"]
            }        
        ],
        "price": 3700,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Shoulder Strap",
        "brand":"Louis Vuitton",
        "description":"The Louis Vuitton crossbody backpack allows you to carry everything you need with hands-free convenience. This piece, crafted in Aerogram leather with a fine texture, features a flap with beveled corners that evoke the Maison's travel heritage and the origins of airmail. The design is completed with discreet khaki-orange metal LV initials.",
        "specifications":"@Khaki orange color@LV Aerogram leather@Leather trim@Textile lining@Silver-colored metal pieces@Tone-on-tone metal LV initials@Front zip pocket@Front flap pocket with hidden magnetic closure@Strap: Z03@Strap drop: 36.0 cm@Maximum strap drop: 53.0 cm@Handle: Z01." ,
        "categories":["Bags","Man"],
        "colors": ["Orange"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Orange",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo10/Bandolera-front.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo10/Bandolera-horizontal.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo10/Bandolera-interior.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo10/Bandolera-modelo1.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo10/Bandolera-modelo2.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo10/Bandolera-video.mp4"]
            }        
        ],
        "price": 2680,
        "stock": [
            {
                "color":"Orange",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Shoulder Strap",
        "brand":"Louis Vuitton",
        "description":"The Louis Vuitton crossbody backpack allows you to carry everything you need with hands-free convenience. This piece, crafted in Aerogram leather with a fine texture, features a flap with beveled corners that evoke the Maison's travel heritage and the origins of airmail. The design is completed with discreet khaki-green metal LV initials.",
        "specifications":"@Khaki green color@LV Aerogram leather@Leather trim@Textile lining@Silver-colored metal pieces@Tone-on-tone metal LV initials@Front zip pocket@Front flap pocket with hidden magnetic closure@Strap: Z03@Strap drop: 36.0 cm@Maximum strap drop: 53.0 cm@Handle: Z01." ,
        "categories":["Bags","Man"],
        "colors": ["Green"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Green",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo11/Bandolera-front.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo11/Bandolera-horizontal.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo11/Bandolera-interior.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo11/Bandolera-modelo1.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo11/Bandolera-modelo2.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo11/Bandolera-video.mp4"]
            }        
        ],
        "price": 2680,
        "stock": [
            {
                "color":"Green",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Messenger Takeoff",
        "brand":"Louis Vuitton",
        "description":"The Takeoff Messenger bag is crafted from soft and flexible LV Aerogram leather. The elegant design features tone-on-tone metal LV initials and a strap with the Louis Vuitton signature woven in Jacquard. This practical accessory is ideal for the city.",
        "specifications":"@Beige color@Main part: leather@Leather trim@Textile lining@Silver-finished metal pieces@Tone-on-tone metal LV initials@Customizable identification tag@Main compartment with magnetic flap closure@Two flat interior pockets@Back zip pocket@Strap: Z05@Strap drop: 46.0 cm@Maximum strap drop: 68.0 cm@Handle: Z01." ,
        "categories":["Bags","Man"],
        "colors": ["Beige"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Beige",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo12/Messenger-front.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo12/Messenger-horizontal.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo12/Messenger-interior.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo12/Messenger-modelo1.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo12/Messenger-modelo2.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo12/Messenger-video.mp4"]
            }        
        ],
        "price": 3000,
        "stock": [
            {
                "color":"Beige",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Keepall 55",
        "brand":"Louis Vuitton",
        "description":"This version of the Keepall 55 bag is part of the LV Portrait capsule collection. The model features a visual effect with a design that evokes a face. To create this model, the color printing is done first, and then the Monogram motif is added before sewing the two leather patches that form the silhouette of the eyes.",
        "specifications":"@Brown color@Leather and coated iconic Monogram Canvas@Leather trim@Textile lining@Golden-finished metal pieces@Closure@Leather and Canvas charm@Spacious capacity@Double handle@Interior zip pocket@Two eye-design patches on the front and back of the piece@Strap: Z05@Strap drop: 36.0 cm@Maximum strap drop: 50.0 cm@Handle: Z06." ,
        "categories":["Bags","Man"],
        "colors": ["Brown"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Brown",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo13/Keepall-front.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo13/Keepall-back.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo13/Keepall-horizontal.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo13/Keepall-interior.png"]
            }        
        ],
        "price": 2350,
        "stock": [
            {
                "color":"Brown",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Keepall 77",
        "brand":"Louis Vuitton",
        "description":"This version of the Keepall 55 bag belongs to the LV Portrait capsule collection. The model features a visual effect with a design that evokes a face. To create this model, the color printing is done first, and then the Monogram motif is added before sewing the two leather patches that form the silhouette of the eyes.",
        "specifications":"@Brown color@Leather and coated iconic Monogram Canvas@Leather trim@Textile lining@Golden-finished metal pieces@Closure@Leather and Canvas charm@Spacious capacity@Double handle@Interior zip pocket@Two eye-design patches on the front and back of the piece@Strap: Z05@Strap drop: 36.0 cm@Maximum strap drop: 50.0 cm@Handle: Z06." ,
        "categories":["Bags","Man"],
        "colors": ["Brown"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Brown",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo14/Keepall-front.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo14/Keepall-horizontal.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo14/Keepall-interior.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo14/Keepall-back.png"]
            }        
        ],
        "price": 2350,
        "stock": [
            {
                "color":"Brown",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Keepall 25",
        "brand":"Louis Vuitton",
        "description":"This version of the Keepall 25 bag belongs to the Metallic Nebula capsule collection. The piece is crafted from iconic Monogram Canvas and features a reflective mirror-like design that creates a halo effect in shades of silver, blue, and purple. The model showcases handles and the top that are enhanced with the exquisite glossy finish, as well as the removable identification tag.",
        "specifications":"@Coated Metallic Nebula Canvas@Leather trim@Textile lining@Silver-finished metal pieces@Closure@Main compartment@Removable identification tag@Double flat interior pocket@Strap: Z05@Strap drop: 55.0 cm@Maximum strap drop: 63.0 cm@Handle: Z06." ,
        "categories":["Bags","Man"],
        "colors": ["Brown"],
        "sizes": ["Default"],
        "images":[
            {
                "color":"Brown",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo15/Keepall-front.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo15/Keepall-horizontal.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo15/Keepall-modelo1.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo15/Keepall-modelo2.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Bags/Modelo15/Keepall-zoom.png"]
            }        
        ],
        "price": 3746,
        "stock": [
            {
                "color":"Brown",
                "stock":100,
                "sold":0
            }
        ]
      },
      {
        "name":"Derby LV Baroque",
        "brand":"Louis Vuitton",
        "description":"The LV Baroque derby shoe, a hybrid style, was showcased on the runway of the Fall-Winter 2022 men's collection. The piece features an upper crafted from shiny calfskin and a thick rubber sole with Monogram flowers and LV initials engraved, creating a 3D effect. The design incorporates a grooved sole with Monogram flowers.",
        "specifications":"@Black color@Calfskin leather@Rubber sole@Monogram flowers and LV initials engraved on the sole@Monogram flowers on the strap@Manufactured in Italy." ,
        "categories":["Shoes","Man"],
        "colors": ["Black"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo1/LVBaroque-front.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo1/LVBaroque-back.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo1/LVBaroque-complete.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo1/LVBaroque-modelo1.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo1/LVBaroque-modelo2.png"]
            }        
        ],
        "price": 1470,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Derby Kensington Classic ",
        "brand":"Louis Vuitton",
        "description":"The Kensington derby shoe is an elegant formal model that combines Louis Vuitton's iconic Epi leather with smooth calfskin. This lace-up design features a discreet LV initials motif engraved on the side. It is completed with a leather and rubber sole to provide better grip and wear resistance.",
        "specifications":"@Café moca@Calfskin Epi leather and calfskin leather@Blake construction@Leather and rubber sole@LV initials engraved on the side@Manufactured in Italy." ,
        "categories":["Shoes","Man"],
        "colors": ["Brown"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Brown",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo2/Kensington-front.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo2/Kensington-back.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo2/Kensington-allview.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo2/Kensington-modelo1.png",""]
            }        
        ],
        "price": 1250,
        "stock": [
            {
                "color":"Brown",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Derby Kensington",
        "brand":"Louis Vuitton",
        "description":"The Kensington derby shoe is an elegant executive model crafted from Louis Vuitton's iconic Epi leather and soft calfskin. This lace-up design features a discreet LV Initials logo engraved on one side. It is finished with a leather and rubber sole, offering increased wear resistance.",
        "specifications":"@Black color@Epi leather and calfskin leather@Blake construction@Leather and rubber sole@LV Initials on the side@Product manufactured in Italy." ,
        "categories":["Shoes","Man"],
        "colors": ["Black"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo3/Kensington-front.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo3/Kensington-back.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo3/Kensington-allview.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo3/Kensington-modelo1.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo3/Kensington-modelo2.png"]
            }        
        ],
        "price": 1210,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Derby Minister",
        "brand":"Louis Vuitton",
        "description":"The Minister derby shoe is crafted from shiny calfskin leather discreetly embossed with Louis Vuitton's historic Damier pattern. This classic piece features a padded insole and a Blake construction for excellent flexibility and comfort. It is finished with a durable, non-slip rubber sole.",
        "specifications":"@Shiny Damier calfskin leather@Graphite gray color@Blake construction@Rubber sole@Item manufactured in Italy." ,
        "categories":["Shoes","Man"],
        "colors": ["Black"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo4/Minister-front.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo4/Minister-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo4/Minister-allview.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo4/Minister-modelo1.png"]
            }        
        ],
        "price": 1110,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Richelieu LV Formal Dimension",
        "brand":"Louis Vuitton",
        "description":"The LV Formal Dimension Richelieu shoe is part of Louis Vuitton's Spring-Summer 2022 runway show. Crafted in patent leather, the model features a color-block rubber sole that contrasts with its classic upper. The piece is finished with a heel engraved with Monogram flowers and LV initials, creating an original 3D effect.",
        "specifications":"@Green color@Calfskin patent leather@Rubber sole@Monogram flowers and LV initials embossed on the heel@Item manufactured in Italy." ,
        "categories":["Shoes","Man"],
        "colors": ["Black"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo5/Richelieu-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo5/Richelieu-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo5/Richelieu-allview.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo5/Richelieu-modelo1.webp"]
            }        
        ],
        "price": 1660,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Derby LV Bold",
        "brand":"Louis Vuitton",
        "description":"The LV Bold derby shoe, crafted in shiny calfskin leather with the Monogram pattern, features a perforated decorative vamp. This hybrid model includes a sturdy yet lightweight micro sole, a technical fabric tongue, and laces secured with a modern clasp. It is finished with a rear loop that highlights the Louis Vuitton emblem.",
        "specifications":"@Black color@Shiny calfskin leather with Monogram pattern@Fabric tongue@Micro rubber sole@LV initials engraved on the tongue@Fabric loop with Louis Vuitton emblem engraved on the back@LV initials and Monogram flowers underneath the sole@Item manufactured in Italy." ,
        "categories":["Shoes","Man"],
        "colors": ["Black"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo6/Bold-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo6/Bold-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo6/Bold-allview.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo6/Bold-modelo1.webp"]
            }        
        ],
        "price": 1440,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Richelieu Varenne",
        "brand":"Louis Vuitton",
        "description":"The sleek Varenne Richelieu shoe is crafted from glossy patent leather. This timeless model features a flexible Goodyear Flex construction made on an anatomical last and an insole with additional padding that provides exceptional comfort. The design showcases elegant details such as a laser-engraved Monogram flower on the toe, Monogram flowers on the heel, and leather laces.",
        "specifications":"@Black color@Main part: patent leather@Laces made of leather@Anatomical@Goodyear Flex construction@Leather sole@Monogram flowers detail on the toe@Monogram flowers detail on the heel@Item manufactured in Italy." ,
        "categories":["Shoes","Man"],
        "colors": ["Black"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo7/Bold-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo7/Bold-back.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo7/Bold-allview.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo7/Bold-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo7/Bold-modelo1.webp"]
            }        
        ],
        "price": 1440,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Richelieu Varenne FRML",
        "brand":"Louis Vuitton",
        "description":"The elongated and elegant Varenne Richelieu shoe is crafted from smooth waxed calfskin leather. This model features a flexible Goodyear Flex construction made on an anatomical last and an insole with additional padding that provides exceptional comfort. The design is completed with iconic details like a laser-engraved Monogram flower on the toe.",
        "specifications":"@Black color@Waxed calfskin leather@Leather laces@Anatomical@Goodyear Flex construction@Leather sole@Monogram flowers adornment on the toe@Monogram flowers adornment on the heel@Item manufactured in Italy." ,
        "categories":["Shoes","Man"],
        "colors": ["Black"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo8/Varenne-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo8/Varenne-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo8/Varenne-allview.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo8/Varenne-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo8/Varenne-modelo1.webp"]
            }        
        ],
        "price": 2180,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"LV Derby Harness",
        "brand":"Louis Vuitton",
        "description":"The LV Derby Harness loafer, crafted from glossy calfskin leather, features a rubber gaiter that evokes Louis Vuitton's iconic Monogram canvas. Inspired by a model presented during the Fall-Winter 2020 runway show, the design is a modern take on the classic style. It is completed with a rubber sole and three Monogram Flowers on the heel.",
        "specifications":"@Cognac brown color@Glossy calfskin leather and Monogram rubber gaiter@Rubber sole@Monogram Flowers on the heel." ,
        "categories":["Shoes","Man"],
        "colors": ["Brown"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Brown",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo9/DerbyHarness-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo9/DerbyHarness-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo9/DerbyHarness-allview.webp"]
            }        
        ],
        "price": 1350,
        "stock": [
            {
                "color":"Brown",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Derby LV Black Ice",
        "brand":"Louis Vuitton",
        "description":"The LV Black Ice derby shoe is crafted from glossy calfskin leather with the iconic Monogram pattern, which fades towards the front. This model stands out for its thick, grooved micro-rubber sole that is resistant to wear. The design is completed with an adjustable closure on the laces and a Louis Vuitton fabric loop at the back.",
        "specifications":"@Graphite gray color@Glossy calfskin leather with Monogram pattern@Blake construction@Grooved micro-rubber sole@Louis Vuitton fabric loop@Monogram Flowers on the heel." ,
        "categories":["Shoes","Man"],
        "colors": ["Black"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo10/BlackIce-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo10/BlackIce-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo10/BlackIce-allview.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo10/BlackIce-modelo1.webp"]
            }        
        ],
        "price": 1240,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Derby LV Blk Ice Classic",
        "brand":"Louis Vuitton",
        "description":"The LV Blk Ice Classic derby shoe is crafted from glossy calfskin leather with the iconic Monogram pattern, which fades towards the front. This model stands out for its thick, grooved micro-rubber sole that is resistant to wear. The design is completed with an adjustable closure on the laces and a Louis Vuitton fabric loop at the back.",
        "specifications":"@Ebène brown color@Monogram canvas@Blake construction@Grooved micro-rubber sole@Louis Vuitton fabric loop@Monogram Flowers on the heel." ,
        "categories":["Shoes","Man"],
        "colors": ["Brown"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Brown",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo11/BlackIce-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo11/BlackIce-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo11/BlackIce-allview.webp"]
            }        
        ],
        "price": 1440,
        "stock": [
            {
                "color":"Brown",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"LV Richelieu",
        "brand":"Louis Vuitton",
        "description":"The LV Vendôme Richelieu shoe is crafted from waxed calfskin leather, with a hand-applied patina by Louis Vuitton's artisans. This glossy layer, which gradually darkens towards the back, gives each pair a unique character. The hand-painted leather sole completes this elegant lace-up model.",
        "specifications":"@Cognac brown color@Waxed calfskin leather@Hand-applied patina (45 minutes per pair)@Blake construction@Hand-painted leather sole@Item manufactured in Italy." ,
        "categories":["Shoes","Man"],
        "colors": ["Brown"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Brown",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo12/Richelieu-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo12/Richelieu-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo12/Richelieu-allview.webp"]
            }        
        ],
        "price": 1560,
        "stock": [
            {
                "color":"Brown",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"LV Richelieu FRML",
        "brand":"Louis Vuitton",
        "description":"This lace-up shoe is crafted from waxed calfskin leather and features a hand-applied patina that makes each pair unique. Characterized by its elegant elongated shape, the design bears witness to Louis Vuitton's legacy in shoemaking. The piece includes a natural leather lining and a hand-painted leather sole.",
        "specifications":"@Hand-waxed calfskin leather@Black color@Hand-applied patina (45 minutes per pair)@Blake construction@Hand-painted leather sole@Item manufactured in Italy." ,
        "categories":["Shoes","Man"],
        "colors": ["Black"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo13/Richelieu-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo13/Richelieu-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo13/Richelieu-allview.webp"]
            }        
        ],
        "price": 1640,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Mocasín Estate",
        "brand":"Louis Vuitton",
        "description":"The Estate loafer is a lightweight design crafted from supple grained calfskin leather. This easy-to-slip-on-and-off piece is adorned with a silver-colored LV initials metal ornament on the top. The design is completed with a comfortable padded insole and a flexible micro-rubber sole featuring the engraved Louis Vuitton emblem.",
        "specifications":"@Black color@Grained calfskin leather@Micro-rubber sole@LV initials ornament@LV logo engraved on the sole@Item manufactured in Italy." ,
        "categories":["Shoes","Man"],
        "colors": ["Black"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo14/Estate-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo14/Estate-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo14/Estate-allview.webp"]
            }        
        ],
        "price": 1070,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Mocasín Monte Carlo",
        "brand":"Louis Vuitton",
        "description":"This version of the Monte Carlo loafer, crafted from flexible calfskin leather, features a Monogram canvas trim. The hand-stitched vamp, a showcase of the Maison's craftsmanship tradition, is adorned with an LV Initials ornament. The tubular construction and the rubber-studded sole provide lightness and flexibility.",
        "specifications":"@Black color@Calfskin leather and Monogram canvas@Hand-stitched vamp (one hour per pair)@Hand-painted edges@Tubular construction@Large rubber-studded sole@LV Initials ornament." ,
        "categories":["Shoes","Man"],
        "colors": ["Black"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo15/Estate-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo15/Estate-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/LV-Hombre/Zapatos/Modelo15/Estate-alliew.webp"]
            }        
        ],
        "price": 958,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    }
    ])
  }else{
    res.status(403).json({message: "Token not authorized"})
  }
});


// --------- Gucci ----------> (Completed)
app.get("/gucci/man/:token", (req, res)=>{
  if(req.params.token === TOKEN){
    res.status(200).json([
      {
        "name":"Loafer with Interlocking G",
        "brand":"Gucci",
        "description":"Gucci footwear reinvents traditional designs with unexpected elements. This pair of leather shoes is embellished with a palladium-toned chain with a miniature version of the Interlocking G, bringing an unexpected touch of definition to the style.",
        "specifications":"@Palladium-toned hardware, @Interlocking G chain, @Leather sole, @Low-heel, @0.9 heel height, @Made in Italy" ,
        "categories":["Shoes", "Man"],
        "colors": ["Black"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/1/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/1/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/1/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/1/4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/1/5.avif"]
            }       
        ],
        "price":1200,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    }, 
    {
        "name":"Interlocking G loafer",
        "brand":"Gucci",
        "description":"The Interlocking G logo continues to enrich the latest collections of the House. Here, it enriches a classic loafer silhouette, appearing as a cut-out detail atop a black leather base.",
        "specifications":"@Interlocking G cut-out detail, @Leather sole, @Flat, @.59 height, @based on a size 43(IT) ,@Made in Italy" ,
        "categories":["Shoes", "Man"],
        "colors": ["Black"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/2/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/2/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/2/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/2/4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/2/5.avif"]
            }       
        ],
        "price":1000,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    }, 
    {
        "name":"Men's maxi GG loafer",
        "brand":"Gucci",
        "description":"Gucci footwear reinvents traditional designs with unexpected elements. This sleek men's loafer is presented in a camel and ebony maxi GG canvas, reimagining the House's historical monogram motif for a new season.",
        "specifications":"@Black leather and rubber trim, @Rubber EVA sole, @Low-heel, @1.8 heel height ,@Made in Italy" ,
        "categories":["Shoes", "Man"],
        "colors": ["Brown"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Brown",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/3/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/3/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/3/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/3/4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/3/5.avif"]
            }       
        ],
        "price":980,
        "stock": [
            {
                "color":"Brown",
                "stock":100,
                "sold":0
            }
        ]
    }, 
    {
        "name":"loafer with Geometric G",
        "brand":"Gucci",
        "description":"The Geometric G continues to be woven throughout the Gucci narrative, enhancing styles with a retro influence. The House emblem decorates this men's loafer presented in black.",
        "specifications":"@Gold-toned hardware, @Geometric G hardware, @Low-heel, @1 heel height ,@Made in Italy" ,
        "categories":["Shoes", "Man"],
        "colors": ["Black"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/4/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/4/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/4/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/4/4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/4/5.avif"]
            }       
        ],
        "price":1500,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    }, 
    {
        "name":"Gucci Jordaan loafer",
        "brand":"Gucci",
        "description":"The Gucci Jordaan is defined by a slim shape and the emblematic Horsebit hardware. For this new collection, the loafer is presented in dark brown Square G suede.",
        "specifications":"@Dark brown Square G suede, @Gold-toned hardware, @Brown leather trim, @Horsebit detail, @Leather sole, @Flat , @.4' heel ,@Made in Italy" ,
        "categories":["Shoes", "Man"],
        "colors": ["Brown"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Brown",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/5/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/5/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/5/3.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/5/4.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/5/5.jpg"]
            }       
        ],
        "price":950,
        "stock": [
            {
                "color":"Brown",
                "stock":100,
                "sold":0
            }
        ]
    }, 
    {
        "name":"Horsebit leather loafer",
        "brand":"Gucci",
        "description":"Made from incredibly soft and supple leather, this loafer is designed to be worn with the heel folded down.",
        "specifications":"@Leather sole, @Black leather, @Horsebit detail, @Flat, @.4' heel ,@Made in Italy" ,
        "categories":["Shoes", "Man"],
        "colors": ["Black"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/6/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/6/2.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/6/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/6/4.avif"]
            }       
        ],
        "price":950,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    }, 
    {
        "name":"Men's 1953 Horsebit loafer",
        "brand":"Gucci",
        "description":"Our 1953 Horsebit loafer in leather. Since the introduction of its classic shape in the 1950s, the preppy-inspired shoe has continued its influence, redesigned in new forms and materials.",
        "specifications":"@Horsebit detail, @1953 collection: 60th anniversary tag, @Leather sole, @Flat ,@.5' height ,@Made in Italy" ,
        "categories":["Shoes", "Man"],
        "colors": ["Black"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/7/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/7/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/7/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/7/4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/7/5.avif"]
            }       
        ],
        "price":950,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    }, 
    {
        "name":"Horsebit loafer",
        "brand":"Gucci",
        "description":"Lugged soles bring out the rugged appeal in men's shoes this season across a variety of designs, all embellished with the House motifs in tone-on-tone colors for a touch of discreet style. This sleek loafer is presented in black leather and enriched with a bicolor lug sole and a Gucci script detail.",
        "specifications":"@Black trim, @Horsebit, @Bicolor lug sole, @Gucci script sole detail, @Flat ,@Made in Italy" ,
        "categories":["Shoes", "Man"],
        "colors": ["Black"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/8/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/8/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/8/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/8/4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/8/5.avif"]
            }       
        ],
        "price":1100,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    }, 
    {
        "name":"Interlocking G loafer",
        "brand":"Gucci",
        "description":"The Interlocking G logo continues to enrich the latest collections of the House. Here, it enriches a classic loafer silhouette, appearing as a cut-out detail atop a blue leather base.",
        "specifications":"@Interlocking G cut-out detail, @Leather sole, @Flat, @.59' height, based on a size 43(IT) ,@Made in Italy" ,
        "categories":["Shoes", "Man"],
        "colors": ["Blue"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Blue",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/9/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/9/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/9/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/9/4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/9/5.avif"]
            }       
        ],
        "price":1000,
        "stock": [
            {
                "color":"Blue",
                "stock":100,
                "sold":0
            }
        ]
    }, 
    {
        "name":"GG loafer with tassel",
        "brand":"Gucci",
        "description":"One of Gucci's most emblematic designs, the loafer continues to be reimagined each season as an homage to the House's origins. Here, the style pairs black leather with beige and ebony GG Supreme canvas and a tassel detail for a contemporary take on the classic design.",
        "specifications":"@Tassel detail, @Leather sole, @Flat, @.6' heel height ,@Made in Italy" ,
        "categories":["Shoes", "Man"],
        "colors": ["Black"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/10/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/10/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/10/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/10/4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/10/5.avif"]
            }       
        ],
        "price":980,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    }, 
    {
        "name":"lace-up shoe",
        "brand":"Gucci",
        "description":"A message about leaving fashion’s old rules behind, the Epilogue collection conveys the idea that pieces should be timeless. Classic silhouettes such as this men's pair of lace-up shoe are brought to the fore.",
        "specifications":"@Lace-up closure, @Low-heel, @1.2' heel height ,@Made in Italy" ,
        "categories":["Shoes", "Man"],
        "colors": ["Black"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/11/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/11/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/11/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/11/4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/11/5.avif"]
            }       
        ],
        "price":1000,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    }, 
    {
        "name":"Ace embroidered",
        "brand":"Gucci",
        "description":"The Ace low-top sneaker in leather features the House's gold embroidered bee set against the Web. The bee is an archival code first introduced in Gucci ready-to-wear in the 1970s.",
        "specifications":"@Gold thread-embroidered bee, @Rubber sole, @Flat, @.6' height ,@Made in Italy" ,
        "categories":["Shoes", "Man"],
        "colors": ["Black"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/12/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/12/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/12/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/12/4.avif"]
            }       
        ],
        "price":850,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    }, 
    {
        "name":"Gucci Run sneaker",
        "brand":"Gucci",
        "description":"Designs inspired by the sporting world are interpreted through the Gucci lens with standout logo details. This pair of streamlined sneakers is crafted from grey suede and enriched with a bi-color rubber sole and an Interlocking G detail.",
        "specifications":"@Black suede trim, @Interlocking G, @Bi-color rubber sole, @Lace-up closure, @Low-heel ,@Made in Italy" ,
        "categories":["Shoes", "Man"],
        "colors": ["Grey"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Grey",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/13/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/13/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/13/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/13/4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/13/5.avif"]
            }       
        ],
        "price":1100,
        "stock": [
            {
                "color":"Grey",
                "stock":100,
                "sold":0
            }
        ]
    }, 
    {
        "name":"GG Supreme bees sneaker",
        "brand":"Gucci",
        "description":"Since its debut, the Ace sneaker has become a mainstay of the House's collections. The retro-looking design is inspired by a Gucci sneaker from the 1970s, with the Web stripe along the sides. The low-top silhouette has been embellished with metallic gold bees.",
        "specifications":"@Red leather on the back of one shoe and green on the back of the other Green and red Web, @Rubber sole, @Flat, @.25' height ,@Made in Italy" ,
        "categories":["Shoes", "Man"],
        "colors": ["Brown"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Brown",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/14/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/14/2.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/14/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/14/4.avif", ""]
            }       
        ],
        "price":820,
        "stock": [
            {
                "color":"Brown",
                "stock":100,
                "sold":0
            }
        ]
    }, 
    {
        "name":"GG Classic Logo sneaker",
        "brand":"Gucci",
        "description":"This sneaker's chunky silhouette gives it a playful, retro feel. Gucci's collections continue to look to other eras, finding inspiration in the everyday and bringing them to the present. Crafted from perforate GG leather, the monogram motif adds a logo twist.",
        "specifications":"@Printed Interlocking G logo on the back, @Rubber sole, @Additional pair of laces included, @Lace-up closure, @Mid-heel, @2.2' height ,@Made in Italy" ,
        "categories":["Shoes", "Man"],
        "colors": ["Brown"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Brown",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/15/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/15/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/15/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/ShoesMenGucci/15/4.avif", ""]
            }       
        ],
        "price":920,
        "stock": [
            {
                "color":"Brown",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
      "name":"Large duffle bag with Web",
      "brand":"Gucci",
      "description":" The GG Supreme is inspired by an archival design from the 1930s and remains one of the House's most emblematic materials. Here, the classic palette defines this duffle bag. A green d and red Web completes the travel piece.",
      "specifications":"@Leather detail with Gucci script logo, @Top handle with 7.8' drop, @Shoulder strap, @Zip closure, @17.9' W x 17.9'H x 10.6'D, @Made in Italy" ,
      "categories":["Bags", "Man"],
      "colors": ["Beige"],
      "sizes": ["Default"],
      "images":[
          {
              "color":"Beige",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/1/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/1/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/1/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/1/4.avif"]
          }       
      ],
      "price":1600,
      "stock": [
          {
              "color":"Beige",
              "stock":100,
              "sold":0
          }
      ]
  }, 
  {
  "name":"GG Crystal messenger bag",
  "brand":"Gucci",
  "description":" The GG Crystal canvas, with its lustrous surface and durable characteristics, lends itself well to the men's accessories line, adding a modern feel to established House designs. The emblematic green and red Web further enhances this messenger bag.",
  "specifications":"@Green and red Web stripe, @Nylon lining, @1 zip pocket under the flap, @Adjustable shoulder strap with 20.4' drop, @Zip closure, @10.6'W x 7.6'H x 4'D, @Made in Italy" ,
  "categories":["Bags", "Man"],
  "colors": ["Black"],
  "sizes": ["Default"],
  "images":[
      {
          "color":"Black",
          "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/2/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/2/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/2/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/2/4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/2/5.avif"]
      }       
  ],
  "price":1750,
  "stock": [
      {
          "color":"Black",
          "stock":100,
          "sold":0
      }
  ]
  },  
  {
  "name":"GG Crystal medium tote bag",
  "brand":"Gucci",
  "description":"The GG Crystal canvas, with its lustrous surface and durable characteristics, lends itself well to the men's accessories line, adding a modern feel to established House designs. The emblematic green and red Web further enhances this tote bag.",
  "specifications":"@Green and red Web grosgrain, @Nylon lining, @1 zip pocket, @Handle with 4.3' drop, @Medium size: 16'W x 15.3'H x 6.2'D, @Made in Italy" ,
  "categories":["Bags", "Man"],
  "colors": ["Black"],
  "sizes": ["Default"],
  "images":[
      {
          "color":"Black",
          "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/3/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/3/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/3/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/3/4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/3/5.avif"]
      }       
  ],
  "price":1450,
  "stock": [
      {
          "color":"Black",
          "stock":100,
          "sold":0
      }
  ]
  },  
  {
  "name":"GG Crystal mini shoulder bag",
  "brand":"Gucci",
  "description":"The GG Crystal canvas is well-known for its sportswear connotations and modern characteristics. The archival emblem appears across a shiny, durable surface, reimagining a selection of signature pieces for the Men's Fall Winter 2023 collection with a contemporary feel. Crafted from green GG Crystal, this mini shoulder bag follows the theme.",
  "specifications":"@Palladium-toned hardware, @Nylon lining, @Inside: 1 pocket with snap button, @1 external pocket, @Adjustable shoulder strap with 19.6' drop, @Zip closure, @8.8'W x 5.5'H x 1.9'D, @Made in Italy" ,
  "categories":["Bags", "Man"],
  "colors": ["Green"],
  "sizes": ["Default"],
  "images":[
      {
          "color":"Green",
          "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/4/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/4/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/4/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/4/4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/4/5.avif"]
      }       
  ],
  "price":990,
  "stock": [
      {
          "color":"Green",
          "stock":100,
          "sold":0
      }
  ]
  },  
  {
  "name":"Ophidia GG small shoulder bag",
  "brand":"Gucci",
  "description":"Gucci heritage meets contemporary design with the continuation of Ophidia. With its two archival details, the Web and the Double G hardware, the line takes on new shapes and dimensions in the Pre-Fall collection. This men's small shoulder bag denotes the nuances of the line. An inside pocket and detachable shoulder strap completes the design.",
  "specifications":"@Gold-toned hardware, @Green and red Web, @Cotton linen lining, @Double G, @Inside: 1 pocket, @Detachable shoulder strap with 17.3' drop, @Zip closure, @9.4'W x 6'H x 2.7'D, @Made in Italy" ,
  "categories":["Bags", "Man"],
  "colors": ["Brown"],
  "sizes": ["Default"],
  "images":[
      {
          "color":"Brown",
          "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/5/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/5/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/5/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/5/4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/5/5.avif"]
      }       
  ],
  "price":1510,
  "stock": [
      {
          "color":"Brown",
          "stock":100,
          "sold":0
      }
  ]
  },  
  {
  "name":" Ophidia GG small belt bag ",
  "brand":"Gucci",
  "description":"Gucci heritage meets contemporary design with the continuation of Ophidia. This men's belt bag combines the Double G hardware with the GG Supreme canvas in a grey and black variation of the classic material. The waist belt strap can be adjusted for versatile ways to wear.",
  "specifications":"@Palladium-toned hardware, @Cotton linen lining, @Double G, @Adjustable waist belt with 20.5' drop and 31.9', @Flap and magnetic snap closure, @9.4'W x 6.7'H x 1.4'D, @Made in Italy",
  "categories":["Bags", "Man"],
  "colors": ["Black"],
  "sizes": ["Default"],
  "images":[
      {
          "color":"Black",
          "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/6/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/6/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/6/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/6/4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/6/5.avif"]
      }       
  ],
  "price":1200,
  "stock": [
      {
          "color":"Black",
          "stock":100,
          "sold":0
      }
  ]
  },  
  {
  "name":"Ophidia GG medium backpack",
  "brand":"Gucci",
  "description":"Mirroring the material's historic origins, GG Supreme is introduced in a modern mix of grey and black for Pre-Fall 2023. The canvas has come to the front of each collection decade after decade to become a hallmark of the House. Here, this medium Ophidia backpack is defined by a palladium version of the Double G hardware and a front pocket..",
  "specifications":"@Palladium-hardware, @Cotton linen lining, @Double G, @Inside: padded laptop compartment and 1 zip pocket, @Outside: front zip pocket, @Top handle with 1.2' drop, @Zip closure, @11.8'W x 15.7'H x 5.5'D, @Made in Italy" ,
  "categories":["Bags", "Man"],
  "colors": ["Black"],
  "sizes": ["Default"],
  "images":[
      {
          "color":"Black",
          "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/7/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/7/2.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/7/3.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/7/4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/7/5.avif"]
      }       
  ],
  "price":2550,
  "stock": [
      {
          "color":"Black",
          "stock":100,
          "sold":0
      }
  ]
  },  
  {
  "name":"Gucci Savoy large duffle bag",
  "brand":"Gucci",
  "description":"The Gucci colour palette is constantly evolving to include more refined hues. New colourways and combinations result in the reinvention of signature styles with a contemporary feel. This Gucci Savoy duffle bag appears in an elegant grey and black variation of the GG Supreme canvas, complete with a palladium-toned Double G hardware. ",
  "specifications":"@Palladium-toned hardware, @Cotton linen lining, @Double G, @Detachable identification tag, key holder and lock, @Inside: 2 zip pockets, @Handle with 5.1' drop, @Adjustable canvas shoulder strap with 18.9' drop, @Zip closure, @Weight: 6.7lbs approximately, @20.5'W x 11.8'H x 11.4'D, @Made in Italy" ,
  "categories":["Bags", "Man"],
  "colors": ["Black"],
  "sizes": ["Default"],
  "images":[
      {
          "color":"Black",
          "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/8/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/8/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/8/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/8/4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/8/5.avif"]
      }       
  ],
  "price":3100,
  "stock": [
      {
          "color":"Black",
          "stock":100,
          "sold":0
      }
  ]
  },  
  {
  "name":"Messenger bag with Interlocking G",
  "brand":"Gucci",
  "description":"GG Supreme has been reimagined countless times, appearing in the House's collections since the 1960s. The emblematic Supreme canvas continues to enrich signature leather goods pieces in new dimensions, such as this messenger bag completed by a tonal leather trim and oval leather Interlocking G tag.",
  "specifications":"@Cotton linen lining, @Oval Interlocking G leather tag, @1 zip pocket, @Detachable wrist strap with 7' drop, @Detachable and adjustable shoulder strap with 21.6' drop, @Zip closure, @Weight: 1.3lbs, approximately, @8.8'W x 6.6'H x 1.9'D, @Made in Italy" ,
  "categories":["Bags", "Man"],
  "colors": ["Brown"],
  "sizes": ["Default"],
  "images":[
      {
          "color":"Brown",
          "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/9/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/9/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/9/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/9/4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/9/5.avif"]
      }       
  ],
  "price":1450,
  "stock": [
      {
          "color":"Brown",
          "stock":100,
          "sold":0
      }
  ]
  },  
  {
  "name":"GG mini bag with Interlocking G",
  "brand":"Gucci",
  "description":"Inspired by vintage styles, this mini bag has a classic silhouette and features an oval Interlocking G leather tag as a subtle nod to the House. The accessory appears in the historical beige and ebony GG Supreme canvas.",
  "specifications":"@Oval Interlocking G leather tag, @1 external pocket and 2 internal flap pockets with button closure, @Adjustable leather shoulder strap, @Lock closure, @8.3'W x 4.9'H x 2.4'D, @Made in Italy" ,
  "categories":["Bags", "Man"],
  "colors": ["Brown"],
  "sizes": ["Default"],
  "images":[
      {
          "color":"Brown",
          "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/10/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/10/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/10/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/10/4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/10/5.avif"]
      }       
  ],
  "price":2250,
  "stock": [
      {
          "color":"Brown",
          "stock":100,
          "sold":0
      }
  ]
  },  
  {
  "name":"Belt bag with Interlocking G",
  "brand":"Gucci",
  "description":"Colors animate the Gucci Aria collection, coming together to weave materials, textures and shapes into a story. Adding a contemporary edge to the archival fabric, this belt bag is crafted from GG Supreme canvas in black. The accessory is completed by the Interlocking G—appearing as a leather tag.",
  "specifications":"@Cotton linen lining, @Oval leather Interlocking G tag, @Inside: front pocket, @9'W x 4.7'H x 1'D, @Made in Italy" ,
  "categories":["Bags", "Man"],
  "colors": ["Black"],
  "sizes": ["Default"],
  "images":[
      {
          "color":"Black",
          "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/11/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/11/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/11/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/11/4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/11/5.avif"]
      }       
  ],
  "price":1200,
  "stock": [
      {
          "color":"Black",
          "stock":100,
          "sold":0
      }
  ]
  },  
  {
  "name":"Jumbo GG backpack",
  "brand":"Gucci",
  "description":"The all-black jumbo GG design returns for Pre-Fall 2023 atop a selection of leather luggage pieces. A reinterpretation of Guccio Gucci's initials, the motif is an evergreen of the House that appears prominently in maxi size for an eye-catching logo feel. This backpack in the emblematic leather features multiple pockets and easy wear shoulder straps.",
  "specifications":"@Exterior: 2 side pockets with buckles and additional magnetic snap closure, @Interior: padded Iaptop case and 2 smartphone cases, @Top handle with 1.75' drop; adjustable shoulder straps with padded mesh backing, @Flap closure with buckles and additional magnetic snaps, @13.4'W x 16.2'H x 4.7'D, @Weight: 3.3lbs, @Made in Italy" ,
  "categories":["Bags", "Man"],
  "colors": ["Black"],
  "sizes": ["Default"],
  "images":[
      {
          "color":"Black",
          "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/12/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/12/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/12/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/12/4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/12/5.avif"]
      }       
  ],
  "price":3800,
  "stock": [
      {
          "color":"",
          "stock":100,
          "sold":0
      }
  ]
  },  
  {
  "name":"Jumbo GG belt bag",
  "brand":"Gucci",
  "description":"Gucci's signature pieces are constantly evolving around a dynamic narrative. The luggage line is characterized by a taupe color as part of the Spring Summer 2023 collection, a delicate shade to reflect the arrival of a new season. The jumbo GG motif returns atop this belt bag, featuring prominently in maxi size for a distinctive logo feel.",
  "specifications":"@Front pocket with magnetic closure, @Zip closure, @Adjustable belt strap, @11'W x 7'H x 3.1'D, @Weight: 1.2lbs, @Made in Italy" ,
  "categories":["Bags", "Man"],
  "colors": ["Brown"],
  "sizes": ["Default"],
  "images":[
      {
          "color":"Brown",
          "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/13/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/13/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/13/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/13/4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/13/5.avif"]
      }       
  ],
  "price":1650,
  "stock": [
      {
          "color":"Brown",
          "stock":100,
          "sold":0
      }
  ]
  },  
  {
  "name":"Ophidia mini bag",
  "brand":"Gucci",
  "description":" The Gucci Aria collection explores the House archives, presenting emblematic symbols in celebration of Gucci's heritage. Here, this mini bag is presented in GG Supreme canvas with the green and red Web and Double G.",
  "specifications":"@Antique gold-toned hardware, @Green and red Web, @Cotton linen lining, @Double G, @Adjustable shoulder strap with 19.7' drop, @Zip closure, @4.7'W x 6.3'H x 2.75'D, @Made in Italy" ,
  "categories":["Bags", "Man"],
  "colors": ["Brown"],
  "sizes": ["Default"],
  "images":[
      {
          "color":"Brown",
          "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/14/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/14/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/14/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/14/4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/14/5.avif"]
      }       
  ],
  "price":1000,
  "stock": [
      {
          "color":"Brown",
          "stock":100,
          "sold":0
      }
  ]
  },  
  {
  "name":"Ophidia GG medium backpack",
  "brand":"Gucci",
  "description":"With a hiking pack inspired shape, the medium-sized backpack is crafted in GG Supreme canvas contrasted with technical mesh details. A classic combination of the House's most recognizable elements—the GG motif and Web stripe—the world of Ophidia continues to evolve, incorporating new shapes and silhouettes. The bag is finished with the Double G hardware which defines the line.",
  "specifications":"@Antique gold-toned hardware, @Double G, @Black mesh back, @Side flap pockets with magnetic closure, @Interior smartphone pockets and padded sleeve for tablet, @Adjustable shoulder straps with black mesh backing, @Drawstring and flap closure with leather buckled straps and additional magnetic closure for easy opening, @Weight: 2.8lbs approximately, @Medium size: 9.4'W x 15.7'H x 6.3'D, @Made in Italy" ,
  "categories":["Bags", "Man"],
  "colors": ["Brown"],
  "sizes": ["Default"],
  "images":[
      {
          "color":"Brown",
          "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/15/1.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/15/2.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/15/3.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/15/4.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Gucci/Dario/BagsMenGucci/15/5.avif"]
      }       
  ],
  "price":2500,
  "stock": [
      {
          "color":"Brown",
          "stock":100,
          "sold":0
      }
  ]
  }
    ])
  }else{
    res.status(403).json({message: "Token not authorized"})
  }
})


// ----------- Fendi ---------> (Completed)
app.get("/fendi/man/:token", (req, res)=>{
  if(req.params.token === TOKEN){
    res.status(200).json([
      {
        "name": "Shopper Go To Fendi Roma",
        "brand": "Fendi",
        "description": "Medium size shopper bag decorated with the Fendi Roma logo with a three-dimensional effect. Model finished with tone-on-tone handmade stitching and a cord tied at the sides. It has a lined interior compartment with a zippered pocket and palladium-finish metal accessories. It can be carried by hand or on the shoulder thanks to the double handle and the adjustable and removable strap with the FENDI inscription. Made in Italy",
        "specification": "@Height : 38cm @Depth: 13cm @Width : 36cm",
        "categories": ["Bags", "Man"],
        "colors": ["Blue", "White", "Black"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Blue",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_ShopperGoToFendiRoma_Blue_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_ShopperGoToFendiRoma_Blue_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_ShopperGoToFendiRoma_Blue_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_ShopperGoToFendiRoma_Blue_04.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_ShopperGoToFendiRoma_Blue_05.avif"
            ]
          },
          {
            "color": "White",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_ShopperGoToFendiRoma_White_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_ShopperGoToFendiRoma_White_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_ShopperGoToFendiRoma_White_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_ShopperGoToFendiRoma_White_04.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_ShopperGoToFendiRoma_White_05.avif"
            ]
          },
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_ShopperGoToFendiRoma_Black_01.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_ShopperGoToFendiRoma_Black_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_ShopperGoToFendiRoma_Black_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_ShopperGoToFendiRoma_Black_04.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_ShopperGoToFendiRoma_Black_05.avif"
            ]
          }
        ],
        "price": 3500,
        "stock": [
          {
            "color": "Blue",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "White",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Peekaboo ISeeU XCross",
        "brand": "Fendi",
        "description": "Iconic Peekaboo ISeeU XCross bag. Interior arranged in two compartments divided by a rigid partition, with the emblematic twist lock on the front and zip fastening on the back. It has interiors lined in tone-on-tone leather, two compartments divided by a rigid partition, card slots and palladium-finish metal accessories. It can be carried by hand or on the shoulder using the handle and the adjustable and removable strap with the FENDI inscription. Made in Italy",
        "specification": "@Height : 14cm @Depth: 6cm @Width : 23cm",
        "categories": ["Bags", "Man"],
        "colors": ["Lilac", "Grey", "Black"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Lilac",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_IseeUPeekabooXCross_Lilac_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_IseeUPeekabooXCross_Lilac_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_IseeUPeekabooXCross_Lilac_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_IseeUPeekabooXCross_Lilac_04.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_IseeUPeekabooXCross_Lilac_05.avif"
            ]
          },
          {
            "color": "Grey",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_IseeUPeekabooXCross_Grey_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_IseeUPeekabooXCross_Grey_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_IseeUPeekabooXCross_Grey_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_IseeUPeekabooXCross_Grey_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_IseeUPeekabooXCross_Grey_05.avif"
            ]
          },
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_IseeUPeekabooXCross_+Black_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_IseeUPeekabooXCross_+Black_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_IseeUPeekabooXCross_+Black_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_IseeUPeekabooXCross_+Black_04.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_IseeUPeekabooXCross_+Black_05.avif"
            ]
          }
        ],
        "price": 4210,
        "stock": [
          {
            "color": "Lilac",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "Grey",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Duffle Selleria",
        "brand": "Fendi",
        "description": "Travel bag with padded handles, name tag and adjustable and removable shoulder strap. Double zip closure. Made of black Cuoio Romano leather. Metallic accessories with palladium finish. Made in Italy",
        "specification": "@Height : 24cm @Depth : 22cm @Width : 46.5cm",
        "categories": ["Bags", "Man"],
        "colors": ["Black"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_DuffleSelleria_Black_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_DuffleSelleria_Black_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_DuffleSelleria_Black_03.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_DuffleSelleria_Black_04.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_DuffleSelleria_Black_05.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_DuffleSelleria_Black_06.avif"
            ]
          }
        ],
        "price": 4030,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Peekaboo ISeeU Forty8",
        "brand": "Fendi",
        "description": "Peekaboo ISeeU Forty8 bag made of fabric with jacquard FF motif and finished with beige leather details. It has a large compartment with a double slider zip and the emblematic turn closure. Inside pocket with zip and palladium-finish metal accessories. It can be carried by hand or on the shoulder thanks to the double handle and the removable adjustable shoulder strap. Made in Italy",
        "specification": "@Height : 33cm @Depth : 23cm @Width : 42.7cm @Strap length (min.) : 85 cm @Strap length (max.) : 147 cm @Shoulder strap drop: 14 cm",
        "categories": ["Bags", "Man"],
        "colors": ["Brown"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_IseeUPeekabooForty8_+Brown_01.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_IseeUPeekabooForty8_+Brown_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_IseeUPeekabooForty8_+Brown_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_IseeUPeekabooForty8_+Brown_04.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_IseeUPeekabooForty8_+Brown_05.avif"
            ]
          }
        ],
        "price": 5090,
        "stock": [
          {
            "color": "Brown",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "After FF",
        "brand": "Fendi",
        "description": "Fendi After bag, with a flat and soft shape, made of beige Fendi Shadow suede and embellished with a striped textured FF motif. Zip closure. Lined interior and metal accessories with a palladium finish. It can be carried by hand, on the shoulder or across the body thanks to the adjustable, removable and extra-long shoulder strap in tone-on-tone  leather. Made in Italy",
        "specification": "@Height : 35cm @Width : 43cm",
        "categories": ["Bags", "Man"],
        "colors": ["Beige"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Beige",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_AfterFF_Beige_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_AfterFF_Beige_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_AfterFF_Beige_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_AfterFF_Beige_04.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_AfterFF_Beige_05.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_AfterFF_Beige_06.avif"
            ]
          }
        ],
        "price": 3140,
        "stock": [
          {
            "color": "Beige",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Camera Case Organizer FF",
        "brand": "Fendi",
        "description": "Compact camera case bag made of black leather and FF fabric in gray and black tones. Embellished with metal FF appliqué. It has an exterior flat pocket, two zipped compartments, three interior card slots and palladium-finish metal accessories. Adjustable and removable ribbon shoulder strap with Fendi inscription. Made in Italy",
        "specification": "@Height : 14cm @Depth: 6.5cm @Width : 17.5cm",
        "categories": ["Bags", "Man"],
        "colors": ["Black"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_CameraCaseOrganizer_Black_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_CameraCaseOrganizer_Black_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_CameraCaseOrganizer_Black_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_CameraCaseOrganizer_Black_04.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_CameraCaseOrganizer_Black_05.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_CameraCaseOrganizer_Black_06.avif"
            ]
          }
        ],
        "price": 1930,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Camera Case Duo Fendi Shadow Diagonal",
        "brand": "Fendi",
        "description": "Medium size crossbody bag made of black Fendi Shadow leather with striped textured FF motif. Model finished with a diagonal appliqué in tone-on-tone smooth leather on the front pocket. It presents two compartments with zip closure and metal accessories with a palladium finish. Adjustable and removable strap shoulder strap with FENDI inscription. Made in Italy",
        "specification": "@Height : 17cm @Depth: 9.5cm @Width : 25cm",
        "categories": ["Bags", "Man"],
        "colors": ["Black"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_CameraCaseDuo_Black_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_CameraCaseDuo_Black_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_CameraCaseDuo_Black_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_CameraCaseDuo_Black_04.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_CameraCaseDuo_Black_05.avif"
            ]
          }
        ],
        "price": 2200,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Shadow Diagonal Belt Bag",
        "brand": "Fendi",
        "description": "Belt bag made of black Fendi Shadow leather with striped textured FF motif. Model finished with diagonal appliqué in tone-on-tone smooth leather. Internal compartment with zip closure and palladium-finish metal accessories. Equipped with an adjustable belt to wear it at the waist, on the shoulder and across the body. Made in Italy",
        "specification": "@Height : 18cm @Depth: 9cm @Width : 36cm",
        "categories": ["Bags", "Man"],
        "colors": ["Black"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_ShadowDiagonalBeltBag_Black_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_ShadowDiagonalBeltBag_Black_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_ShadowDiagonalBeltBag_Black_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_ShadowDiagonalBeltBag_Black_04.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_ShadowDiagonalBeltBag_Black_05.avif"
            ]
          }
        ],
        "price": 1790,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Shadow Diagonal flat wallet",
        "brand": "Fendi",
        "description": "Flat wallet with two pockets and interior card holder. Zip pocket on the back and removable bracelet strap. Made of black Fendi Shadow leather with a striped textured FF motif. Presents diagonal black leather detail. Made in Italy",
        "specification": "@Height : 21cm @Depth: 3cm @Width : 30cm",
        "categories": ["Bags", "Man"],
        "colors": ["Black"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_ShadowDiagonalflatwallet_Black_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_ShadowDiagonalflatwallet_Black_02.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_ShadowDiagonalflatwallet_Black_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_ShadowDiagonalflatwallet_Black_04.avif"
            ]
          }
        ],
        "price": 930,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Shopper Bag",
        "brand": "Fendi",
        "description": "Wide shopper bag made of recycled jacquard fabric with FF motif in black and gray tones. It has an interior compartment lined in fabric, an internal zippered pocket and metal accessories with a palladium finish. It can be carried by hand or on the shoulder thanks to the leather handles and the adjustable and removable leather shoulder strap. Made in Italy",
        "specification": "@Height : 35cm @Depth: 19cm @Width : 41cm @Weight : 1.2kg",
        "categories": ["Bags", "Man"],
        "colors": ["Brown", "Grey"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_ShopperBag_Brown_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_ShopperBag_Brown_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_ShopperBag_Brown_03.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_ShopperBag_Brown_04.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_ShopperBag_Brown_05.avif"
            ]
          },
          {
            "color": "Grey",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_ShopperBag_Grey_01.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_ShopperBag_Grey_02.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_ShopperBag_Grey_03.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_ShopperBag_Grey_04.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_ShopperBag_Grey_05.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_ShopperBag_Grey_06.avif"
            ]
          }
        ],
        "price": 3000,
        "stock": [
          {
            "color": "Brown",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "Grey",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Baguette Regular",
        "brand": "Fendi",
        "description": "Regular baguette with square flap and FF closure with magnetic button. It can be worn as a fanny pack, with the folding strap that is stored in the outer back pocket, on the shoulder or across the chest, hooking it to the removable shoulder straps. Interior with zip pocket. Made of brown fabric. Finished with an all-over jacquard FF motif. Metallic accessories with palladium finish. Made in Italy",
        "specification": "@Height : 18cm @Depth: 7cm @Width : 28cm @Weight : 0.6kg",
        "categories": ["Bags", "Man"],
        "colors": ["Brown"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_BaguetteRegular_Brown_01.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_BaguetteRegular_Brown_02.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_BaguetteRegular_Brown_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_BaguetteRegular_Brown_04.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_BaguetteRegular_Brown_05.avif"
            ]
          }
        ],
        "price": 3930,
        "stock": [
          {
            "color": "Brown",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Baguette Multipocket for Mens",
        "brand": "Fendi",
        "description": "Baguette Multipocket bag made of black Cuoio Romano leather and equipped with five patch pockets of different sizes finished with large handmade stitching. The pockets and the front flap are embellished with the iconic FF closure. Magnetic closure. It has a lined interior compartment, internal zipped pocket and palladium-finish metal accessories. It can be carried under the arm, crossed or as a fanny pack thanks to the removable handle and the adjustable shoulder strap. Made in Italy",
        "specification": "@Height : 17cm @Depth: 8cm @Width : 27cm",
        "categories": ["Bags", "Man"],
        "colors": ["Black"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_BaguetteMultipocket_Black_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_BaguetteMultipocket_Black_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_BaguetteMultipocket_Black_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_BaguetteMultipocket_Black_04.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_BaguetteMultipocket_Black_05.avif"
            ]
          }
        ],
        "price": 3930,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Baguette Soft Trunk jacquard",
        "brand": "Fendi",
        "description": "Baguette Soft Trunk bag made of jacquard fabric with FF motif. Flap with FF magnetic closure. Interior lined with microfiber, with 6 leather card slots and palladium-finish metal accessories. Adjustable and removable technical fabric shoulder strap with FENDI inscription. Made in Italy",
        "specification": "@Height : 13cm @Depth: 6.5cm @Width : 21.5cm @Weight : 1.41kg",
        "categories": ["Bags", "Man"],
        "colors": ["Beige", "Blue"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Beige",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_BaguetteSoftTrunkJacquard_Beige_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_BaguetteSoftTrunkJacquard_Beige_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_BaguetteSoftTrunkJacquard_Beige_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_BaguetteSoftTrunkJacquard_Beige_04.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_BaguetteSoftTrunkJacquard_Beige_05.avif"
            ]
          },
          {
            "color": "Blue",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_BaguetteSoftTrunkJacquard_Blue_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_BaguetteSoftTrunkJacquard_Blue_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_BaguetteSoftTrunkJacquard_Blue_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_BaguetteSoftTrunkJacquard_Blue_04.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_BaguetteSoftTrunkJacquard_Blue_05.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_BaguetteSoftTrunkJacquard_Blue_06.avif"
            ]
          }
        ],
        "price": 930,
        "stock": [
          {
            "color": "Beige",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "Blue",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Baguette Soft Trunk",
        "brand": "Fendi",
        "description": "Baguette Soft Trunk bag. Flap with FF magnetic closure. Model finished in tone-on-tone smooth leather. Interior lined with microfiber, with 6 tone-on-tone leather card slots and palladium-finish metal accessories. Fabric shoulder strap with FENDI inscription, adjustable and removable. Made in Italy",
        "specification": "@Height : 13cm @Depth: 6.5cm @Width : 21.5cm @Weight : 0.46kg",
        "categories": ["Bags", "Man"],
        "colors": ["Grey", "Blue", "Green"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Grey",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_BaguetteSoftTrunk_Grey_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_BaguetteSoftTrunk_Grey_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_BaguetteSoftTrunk_Grey_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_BaguetteSoftTrunk_Grey_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_BaguetteSoftTrunk_Grey_05.avif"
            ]
          },
          {
            "color": "Blue",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_BaguetteSoftTrunk_Blue_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_BaguetteSoftTrunk_Blue_02.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_BaguetteSoftTrunk_Blue_03.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_BaguetteSoftTrunk_Blue_04.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_BaguetteSoftTrunk_Blue_05.avif"
            ]
          },
          {
            "color": "Green",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_BaguetteSoftTrunk_Green_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_BaguetteSoftTrunk_Green_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_BaguetteSoftTrunk_Green_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_BaguetteSoftTrunk_Green_04.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_BaguetteSoftTrunk_Green_05.avif"
            ]
          }
        ],
        "price": 3100,
        "stock": [
          {
            "color": "Grey",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "Blue",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "Green",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "O’Lock Loafers black Nubuck",
        "brand": "Fendi",
        "description": "Loafer with exposed stitching on the upper and decorated toe with Fendi O'Lock detail. Manufactured in black nubuck. Gray and black jacquard FF fabric bandana. Tone-on-tone enamelled metal accessory. Embossed rubber sole. Made in Italy",
        "specification": "@65% cotton, 35% polyester, 100% calf leather; interior: 100% calfskin",
        "categories": ["Shoes", "Man"],
        "colors": ["Black"],
        "sizes": [
          "6",
          "6.5",
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "10.5",
          "11",
          "11.5",
          "12",
          "12.5",
          "13",
          "13.5",
          "14"
        ],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockLoafer_color3_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockLoafer_color3_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockLoafer_color3_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockLoafer_color3_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockLoafer_color3_05.avif"
            ]
          }
        ],
        "price": 3200,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "O’Lock Loafers jacquard",
        "brand": "Fendi",
        "description": "Loafer with exposed stitching on the upper and decorated toe with Fendi O'Lock detail. Made of black leather with jacquard fabric application with the FF logo. Metallic accessories with gold finish. Made in Italy",
        "specification": "@65% polyamide, 35% cotton, 55% cotton, 45% polyamide; lining: 100% resin, 100% calfskin; interior: 100% calfskin",
        "categories": ["Shoes", "Man"],
        "colors": ["Black"],
        "sizes": [
          "6",
          "6.5",
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "10.5",
          "11",
          "11.5",
          "12",
          "12.5",
          "13",
          "13.5",
          "14"
        ],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockLoafer_color1_01.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockLoafer_color1_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockLoafer_color1_03.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockLoafer_color1_04.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockLoafer_color1_05.avif"
            ]
          }
        ],
        "price": 930,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "O’Lock Loafers blue denim",
        "brand": "Fendi",
        "description": "Loafers with visible stitched shoe apron and upper decorated with Fendi O’Lock detail. Made of blue denim with jacquard FF motif on the shoe apron. Blue leather profiles. Palladium-finish metal accessories. Made in Italy",
        "specification": "@65% Cotton, 35% Polyester, 100% Calfskin, interior: 100% Calfskin",
        "categories": ["Shoes", "Man"],
        "colors": ["Blue"],
        "sizes": [
          "6",
          "6.5",
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "10.5",
          "11",
          "11.5",
          "12",
          "12.5",
          "13",
          "13.5",
          "14"
        ],
        "images": [
          {
            "color": "Blue",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockLoafer_color2_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockLoafer_color2_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockLoafer_color2_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockLoafer_color2_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockLoafer_color2_05.jpg"
            ]
          }
        ],
        "price": 930,
        "stock": [
          {
            "color": "Blue",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "O’Lock Driving Loafers black leather",
        "brand": "Fendi",
        "description": "Driver model moccasin. Flexible non-slip rubber sole. Manufactured in black leather. Finished in Fendi Shadow leather with a tone-on-tone textured striped FF motif. Fendi O'Lock buckle in black enamelled metal. Made in Italy",
        "specification": "@100%calfleather, inside:100%calfleather",
        "categories": ["Shoes", "Man"],
        "colors": ["Black"],
        "sizes": [
          "6",
          "6.5",
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "10.5",
          "11",
          "11.5",
          "12",
          "12.5",
          "13",
          "13.5",
          "14"
        ],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockDrivingLoafer_color1_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockDrivingLoafer_color1_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockDrivingLoafer_color1_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockDrivingLoafer_color1_04.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockDrivingLoafer_color1_05.avif"
            ]
          }
        ],
        "price": 860,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "O’Lock Driving Loafers brown alligator",
        "brand": "Fendi",
        "description": "Driver model moccasin. Flexible non-slip rubber sole. Made of brown alligator with tone-on-tone smooth leather details. Finished with a gold-finish metal Fendi O'Lock buckle. Made in Italy",
        "specification": "@100% alligator skin; 100% calfskin; interior: 100% calfskin",
        "categories": ["Shoes", "Man"],
        "colors": ["Brown"],
        "sizes": [
          "6",
          "6.5",
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "10.5",
          "11",
          "11.5",
          "12",
          "12.5",
          "13",
          "13.5",
          "14"
        ],
        "images": [
          {
            "color": "Brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockDrivingLoafer_color3_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockDrivingLoafer_color3_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockDrivingLoafer_color3_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockDrivingLoafer_color3_04.avif"
            ]
          }
        ],
        "price": 890,
        "stock": [
          {
            "color": "Brown",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "O’Lock Driving Loafers nubuck leather",
        "brand": "Fendi",
        "description": "Driving loafers. Flexible pebble soles. Made of beige nubuck leather with a tone-on-tone Fendi Shadow nubuck saddle strap with a textured stripe FF motif. Embellished with a Fendi O’Lock buckle in black enameled metal. Made in Italy",
        "specification": "@100% Calfskin, interior: 100% Calfskin",
        "categories": ["Shoes", "Man"],
        "colors": ["Brown"],
        "sizes": [
          "6",
          "6.5",
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "10.5",
          "11",
          "11.5",
          "12",
          "12.5",
          "13",
          "13.5",
          "14"
        ],
        "images": [
          {
            "color": "Brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockDrivingLoafer_color2_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockDrivingLoafer_color2_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockDrivingLoafer_color2_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockDrivingLoafer_color2_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockDrivingLoafer_color2_05.jpg"
            ]
          }
        ],
        "price": 870,
        "stock": [
          {
            "color": "Brown",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "FF Squared moccasin beige leather",
        "brand": "Fendi",
        "description": "Moccasin with FF Squared motif. Made of beige leather. Leather sole. Metallic accessories with palladium finish. Made in Italy",
        "specification": "@100% calfskin; interior: 100% calfskin",
        "categories": ["Shoes", "Man"],
        "colors": ["Beige"],
        "sizes": [
          "6",
          "6.5",
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "10.5",
          "11",
          "11.5",
          "12",
          "12.5",
          "13",
          "13.5",
          "14"
        ],
        "images": [
          {
            "color": "Beige",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_FFSquared_color1_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_FFSquared_color1_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_FFSquared_color1_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_FFSquared_color1_04.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_FFSquared_color1_05.webp"
            ]
          }
        ],
        "price": 770,
        "stock": [
          {
            "color": "Beige",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Chelsea",
        "brand": "Fendi",
        "description": "Fendi O'Lock Chelsea boot with elastic insert on the sides. Made of black leather with FF motif. Model finished with the classic brogue shoe holes. Presents leather sole with FF. Made in Italy",
        "specification": "@100% calfskin; interior: 100% calfskin",
        "categories": ["Shoes", "Man"],
        "colors": ["Black"],
        "sizes": [
          "6",
          "6.5",
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "10.5",
          "11",
          "11.5",
          "12",
          "12.5",
          "13",
          "13.5",
          "14"
        ],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_Chelsea_Black_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_Chelsea_Black_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_Chelsea_Black_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_Chelsea_Black_04.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_Chelsea_Black_05.webp"
            ]
          }
        ],
        "price": 1040,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Oxford",
        "brand": "Fendi",
        "description": "Oxford model lace-up shoe made of black patent leather. Model finished with tone-on-tone FF motif and metal Fendi O'Lock detail on the heel. Made in Italy",
        "specification": "@100% calfskin; interior: 100% calfskin",
        "categories": ["Shoes", "Man"],
        "colors": ["Black"],
        "sizes": [
          "6",
          "6.5",
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "10.5",
          "11",
          "11.5",
          "12",
          "12.5",
          "13",
          "13.5",
          "14"
        ],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_Oxford_Black_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_Oxford_Black_02.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_Oxford_Black_03.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_Oxford_Black_04.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Ingresos6-9/Fendi_Oxford_Black_05.webp"
            ]
          }
        ],
        "price": 950,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "FF Squared moccasin",
        "brand": "Fendi",
        "description": "Driver model moccasin. Flexible non-slip rubber sole. Made of blue leather. It features a matching ribbon with a palladium-finish metal FF Squared detail. Made in Italy",
        "specification": "@100% calfskin; interior: 100% calfskin",
        "categories": ["Shoes", "Man"],
        "colors": ["Blue"],
        "sizes": [
          "6",
          "6.5",
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "10.5",
          "11",
          "11.5",
          "12",
          "12.5",
          "13",
          "13.5",
          "14"
        ],
        "images": [
          {
            "color": "Blue",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_FFSquared_color2_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_FFSquared_color2_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_FFSquared_color2_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_FFSquared_color2_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_FFSquared_color2_05.jpg"
            ]
          }
        ],
        "price": 770,
        "stock": [
          {
            "color": "Blue",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Force lycra",
        "brand": "Fendi",
        "description": "Fendi Force lace-up sneaker. Manufactured in black leather. Details of FF jacquard fabric in shades of gray and black and collar finished in LYCRA®. Made in Italy",
        "specification": "@100% calf leather, 80% polyamide, 20% elastane, 65% polyamide, 35% cotton; inner: 65% polyamide; 35% cotton, 100% calfskin",
        "categories": ["Shoes", "Man"],
        "colors": ["Black", "Brown"],
        "sizes": [
          "6",
          "6.5",
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "10.5",
          "11",
          "11.5",
          "12",
          "12.5",
          "13",
          "13.5",
          "14"
        ],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_ForceCordones_color1_01.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_ForceCordones_color1_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_ForceCordones_color1_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_ForceCordones_color1_04.avif"
            ]
          },
          {
            "color": "Brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_ForceCordones_color2_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_ForceCordones_color2_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_ForceCordones_color2_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_ForceCordones_color2_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_ForceCordones_color2_05.jpg"
            ]
          }
        ],
        "price": 950,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "Brown",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Force gray and black tones",
        "brand": "Fendi",
        "description": "Fendi Force lace-up ankle boot. Made of black leather with FF jacquard fabric details in gray and black tones. Inner side zipper for easy putting on. It has a lightweight rubber sole with embossed FF detail on the heel. Made in Italy",
        "specification": "@100% calf leather, 65% polyamide, 35% cotton, 95% polyester, 5% polyurethane; interior: 100% calfskin",
        "categories": ["Shoes", "Man"],
        "colors": ["Black"],
        "sizes": [
          "6",
          "6.5",
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "10.5",
          "11",
          "11.5",
          "12",
          "12.5",
          "13",
          "13.5",
          "14"
        ],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_ForceBotas_color1_01.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_ForceBotas_color1_02.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_ForceBotas_color1_03.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_ForceBotas_color1_04.avif"
            ]
          }
        ],
        "price": 950,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Force adjustable lace",
        "brand": "Fendi",
        "description": "Fendi Force après ski style boot with adjustable lace. Made of waterproof fabric with jacquard FF motif in black and gray tones and black leather. Featuring a fleece lining and a lightweight rubber sole with an embossed FF detail to the toe. Made in Italy",
        "specification": "@100% calfskin; 65% polyester, 35% cotton; coating: 100% polyurethane; 88% polyamide, 12% elastane; inner: 100% polyamide; 100% polyester",
        "categories": ["Shoes", "Man"],
        "colors": ["Black"],
        "sizes": [
          "6",
          "6.5",
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "10.5",
          "11",
          "11.5",
          "12",
          "12.5",
          "13",
          "13.5",
          "14"
        ],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_ForceBotas_color3_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_ForceBotas_color3_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_ForceBotas_color3_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_ForceBotas_color3_04.jpg"
            ]
          }
        ],
        "price": 880,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Force black leather",
        "brand": "Fendi",
        "description": "Fendi Force Loafers. Made of black leather. Fabric detail with gray and black FF motif on the toe box. Lightweight rubber sole with debossed FF detailing on the toe and heel. Made in Italy",
        "specification": "@100% calf leather, 65% polyester, 35% cotton, inside: 100% lamb leather",
        "categories": ["Shoes", "Man"],
        "colors": ["Black"],
        "sizes": [
          "6",
          "6.5",
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "10.5",
          "11",
          "11.5",
          "12",
          "12.5",
          "13",
          "13.5",
          "14"
        ],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Force_color1_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Force_color1_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Force_color1_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Force_color1_04.jpg"
            ]
          }
        ],
        "price": 940,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
    
      {
        "name": "Force lace-up boots",
        "brand": "Fendi",
        "description": "Fendi Force lace-up ankle boots. Made of black suede. Tonal sheepskin details and interior. The zipper is on the inside for more comfortable wearing. Lightweight rubber sole with FF detailing at the toe. Made in italy",
        "specification": "@100% Pure Calfskin, 100% Pure Sheep Fur, Inside: 100% Pure Sheep Fur, 100% Pure Calfskin",
        "categories": ["Shoes", "Man"],
        "colors": ["Brown"],
        "sizes": [
          "6",
          "6.5",
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "10.5",
          "11",
          "11.5",
          "12",
          "12.5",
          "13",
          "13.5",
          "14"
        ],
        "images": [
          {
            "color": "Brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_ForceBotas_color2_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_ForceBotas_color2_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_ForceBotas_color2_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_ForceBotas_color2_04.jpg"
            ]
          }
        ],
        "price": 1080,
        "stock": [
          {
            "color": "Brown",
            "stock": "100",
            "sold": 0
          }
        ]
      }
    ])
  }else{
    res.status(403).json({message: "Token not authorized"})
  }
})

//  ------- Dolce ------->  
app.get("/dolce/man/:token", (req, res)=>{
  if(req.params.token === TOKEN){
    res.status(200).json([
      {
        "name": "Brushed calfskin ankle boots with zipper",
        "brand": "Dolce & Gabbana",
        "description": "The inspiration for this new collection was the metaverse that, through its direct vision of the future and the younger generations, creates multiple identities that can intermingle and coexist. These new Achille Chelsea boots come with bold, contemporary details. Made from 100% brushed calfskin, they feature a zip appliqué.",
        "specification": "@Leather-covered heel @Leather insole with quilted satin insert and branded label @Leather sole @Made in Italy",
        "categories": ["Shoes", "Man"],
        "colors": ["Black"],
        "sizes": [
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "10.5",
          "11",
          "11.5",
          "12",
          "12.5",
          "13",
          "13.5",
          "14"
        ],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_Brushedcalfskinanklebootswithzipper_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_Brushedcalfskinanklebootswithzipper_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_Brushedcalfskinanklebootswithzipper_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_Brushedcalfskinanklebootswithzipper_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_Brushedcalfskinanklebootswithzipper_05.jpg"
            ]
          }
        ],
        "price": 1295,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Brushed Raffaello ankle boots",
        "brand": "Dolce & Gabbana",
        "description": "These Raffaello ankle boots are the reinterpretation of a timeless, iconic line. Coming in brushed calfskin, they have been designed for everyday wear.",
        "specification": "@Blake construction @Brushed calfskin upper @Leather-covered heel @Calfskin insole with quilted satin insert and branded label @Leather sole @Made in Italy",
        "categories": ["Shoes", "Man"],
        "colors": ["Black"],
        "sizes": [
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "10.5",
          "11",
          "11.5",
          "12",
          "12.5",
          "13",
          "13.5",
          "14"
        ],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_BrushedRaffaelloankleboots_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_BrushedRaffaelloankleboots_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_BrushedRaffaelloankleboots_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_BrushedRaffaelloankleboots_04.jpg"
            ]
          }
        ],
        "price": 995,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Coated jacquard ankle boots",
        "brand": "Dolce & Gabbana",
        "description": "Flaunting bold, contemporary allure, these High Trekking ankle boots come in coated fabric with the all-over jacquard Dolce&Gabbana logo.",
        "specification": "@Coated fabric ankle boots with the all-over jacquard Dolce&Gabbana logo: @Black @Branded tag in ruthenium-plated metal @Calfskin footbed with branded label @Branded rubber sole @Item comes with a branded dust bag @Made in Italy",
        "categories": ["Shoes", "Man"],
        "colors": ["Black"],
        "sizes": [
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "10.5",
          "11",
          "11.5",
          "12",
          "12.5",
          "13",
          "13.5",
          "14"
        ],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_Coatedjacquardankleboots_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_Coatedjacquardankleboots_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_Coatedjacquardankleboots_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_Coatedjacquardankleboots_04.jpg"
            ]
          }
        ],
        "price": 1275,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Patchwork denim loafers with logo tag",
        "brand": "Dolce & Gabbana",
        "description": "The new “Denim” collection is the result of an evocative journey back to the brand’s roots, which have been reworked to add contemporary edge. These new loafers come in a 100% patchwork denim version with the palladium-plated maxi-tag with logo.",
        "specification": "@Patchwork denim upper @Calfskin insole with branded label @Branded rubber sole @Item comes with themed packaging @Made in Italy",
        "categories": ["Shoes", "Man"],
        "colors": ["#1560bd"],
        "sizes": [
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "10.5",
          "11",
          "11.5",
          "12",
          "12.5",
          "13",
          "13.5",
          "14"
        ],
        "images": [
          {
            "color": "#1560bd",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_Patchworkdenimloaferswithlogotag_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_Patchworkdenimloaferswithlogotag_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_Patchworkdenimloaferswithlogotag_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_Patchworkdenimloaferswithlogotag_04.jpg"
            ]
          }
        ],
        "price": 1145,
        "stock": [
          {
            "color": "#1560bd",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Crochet slippers",
        "brand": "Dolce & Gabbana",
        "description": "The “Re-Edition” fashion show is an evocative journey back to the brand’s origins, where the past and present meet to give life to an innovative vision and interpretation of our archives.",
        "specification": "@Crochet slippers: @Fabric upper @Calfskin footbed with branded label @Branded leather sole @Made in Italy",
        "categories": ["Shoes", "Man"],
        "colors": ["#C4A484"],
        "sizes": [
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "10.5",
          "11",
          "11.5",
          "12",
          "12.5",
          "13",
          "13.5",
          "14"
        ],
        "images": [
          {
            "color": "#C4A484",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_Crochetslippers_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_Crochetslippers_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_Crochetslippers_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_Crochetslippers_04.jpg"
            ]
          }
        ],
        "price": 995,
        "stock": [
          {
            "color": "#C4A484",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Brushed calfskin ankle boots",
        "brand": "Dolce & Gabbana",
        "description": "Elegant and timeless, these Giotto ankle boots come with new details. Made from 100% brushed calfskin, they feature the gold-plated metal fastening with logo:",
        "specification": "@Brushed calfskin upper @Side zipper @Calfskin insole with branded label @Branded leather sole @Made in Italy",
        "categories": ["Shoes", "Man"],
        "colors": ["Black"],
        "sizes": [
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "10.5",
          "11",
          "11.5",
          "12",
          "12.5",
          "13",
          "13.5",
          "14"
        ],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_Brushedcalfskinankleboots_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_Brushedcalfskinankleboots_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_Brushedcalfskinankleboots_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_Brushedcalfskinankleboots_04.jpg"
            ]
          }
        ],
        "price": 1725,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Brushed calfskin Chelsea boots",
        "brand": "Dolce & Gabbana",
        "description": "Flaunting bold, contemporary allure, these High Trekking Chelsea boots come in brushed calfskin with a matte finish.",
        "specification": "@Brushed calfskin Chelsea boots: @Black @Calfskin footbed with branded label @Branded rubber sole @Item comes with a branded dust bag @Made in Italy",
        "categories": ["Shoes", "Man"],
        "colors": ["Black"],
        "sizes": [
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "10.5",
          "11",
          "11.5",
          "12",
          "12.5",
          "13",
          "13.5",
          "14"
        ],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_BrushedcalfskinChelseaboots_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_BrushedcalfskinChelseaboots_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_BrushedcalfskinChelseaboots_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_BrushedcalfskinChelseaboots_04.jpg"
            ]
          }
        ],
        "price": 945,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Jacquard slippers with logo tag",
        "brand": "Dolce & Gabbana",
        "description": "The “Re-Edition” fashion show is an evocative journey back to the brand’s origins, where the past and present meet to give life to an innovative vision and interpretation of our archives.",
        "specification": "@These Ariosto slippers come in soft fabric with the all-over jacquard DG logo: @Jacquard fabric upper with gros-grain piping @Palladium-plated tag with logo @Calfskin insole with branded label @Branded leather sole @Made in Italy",
        "categories": ["Shoes", "Man"],
        "colors": ["Grey"],
        "sizes": [
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "10.5",
          "11",
          "11.5",
          "12",
          "12.5",
          "13",
          "13.5",
          "14"
        ],
        "images": [
          {
            "color": "Grey",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_Jacquardslipperswithlogotag_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_Jacquardslipperswithlogotag_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_Jacquardslipperswithlogotag_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_Jacquardslipperswithlogotag_04.jpg"
            ]
          }
        ],
        "price": 995,
        "stock": [
          {
            "color": "Grey",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Brushed calfskin loafers timeless",
        "brand": "Dolce & Gabbana",
        "description": "Elegant and timeless, these Ariosto loafers come with new details. Made from 100% brushed calfskin, they feature the gold-plated metal fastening with logo.",
        "specification": "@Brushed calfskin upper @Goatskin insole with branded label @Branded leather sole @Made in Italy",
        "categories": ["Shoes", "Man"],
        "colors": ["Black"],
        "sizes": [
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "10.5",
          "11",
          "11.5",
          "12",
          "12.5",
          "13",
          "13.5",
          "14"
        ],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_Brushedcalfskinloaferstimeless_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_Brushedcalfskinloaferstimeless_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_Brushedcalfskinloaferstimeless_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_Brushedcalfskinloaferstimeless_04.jpg"
            ]
          }
        ],
        "price": 1275,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Calfskin slippers",
        "brand": "Dolce & Gabbana",
        "description": "Elegant and sophisticated, the calfskin Ariosto slippers feature the crossover DG logo on the upper. Exuding craftsmanship and coming with a lightweight sole, they are finished off by the calfskin trims and heel cup.",
        "specification": "@Calfskin upper @Calfskin heel cup @Calfskin insole with quilted satin insert and branded label @Leather sole with logo @Made in Italy",
        "categories": ["Shoes", "Man"],
        "colors": ["Black"],
        "sizes": [
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "10.5",
          "11",
          "11.5",
          "12",
          "12.5",
          "13",
          "13.5",
          "14"
        ],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_Calfskinslippers_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_Calfskinslippers_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_Calfskinslippers_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_Calfskinslippers_04.jpg"
            ]
          }
        ],
        "price": 945,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Polished calfskin loafers",
        "brand": "Dolce & Gabbana",
        "description": "Versatile and contemporary, the new loafers from the Sport Classic line come in polished calfskin.",
        "specification": "@Polished calfskin loafers: @Black @Calfskin insole with branded label @Branded leather sole @Item comes with a branded dust bag @Made in Italy",
        "categories": ["Shoes", "Man"],
        "colors": ["Black"],
        "sizes": [
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "10.5",
          "11",
          "11.5",
          "12",
          "12.5",
          "13",
          "13.5",
          "14"
        ],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_Polishedcalfskinloafers_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_Polishedcalfskinloafers_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_Polishedcalfskinloafers_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_Polishedcalfskinloafers_04.jpg"
            ]
          }
        ],
        "price": 875,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Brushed calfskin loafers",
        "brand": "Dolce & Gabbana",
        "description": "Versatile and contemporary, the new loafers from the Sport Classic line come in polished calfskin with the branded tag.",
        "specification": "@Brushed calfskin loafers embellished by the branded tag featuring two metal plating finishes: @Black @Calfskin insole with branded label @Branded leather sole @Item comes with a branded dust bag @Made in Italy",
        "categories": ["Shoes", "Man"],
        "colors": ["Black"],
        "sizes": [
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "10.5",
          "11",
          "11.5",
          "12",
          "12.5",
          "13",
          "13.5",
          "14"
        ],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_Brushedcalfskinloafers_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_Brushedcalfskinloafers_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_Brushedcalfskinloafers_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_Brushedcalfskinloafers_04.jpg"
            ]
          }
        ],
        "price": 995,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Brushed calfskin Raffaello",
        "brand": "Dolce & Gabbana",
        "description": "These Raffaello Derby shoes come in brushed calfskin with gros-grain trims. Elegant and refined, they embody all the prerogatives for a timeless shoe.",
        "specification": "@Brushed calfskin upper @Waxed laces @Calfskin insole with quilted satin insert and branded label @Leather-covered heel @Leather bottom assembly @Made in Italy",
        "categories": ["Shoes", "Man"],
        "colors": ["Black"],
        "sizes": [
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "10.5",
          "11",
          "11.5",
          "12",
          "12.5",
          "13",
          "13.5",
          "14"
        ],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_BrushedcalfskinRaffaello_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_BrushedRaffaelloankleboots_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_BrushedRaffaelloankleboots_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_BrushedRaffaelloankleboots_04.jpg"
            ]
          }
        ],
        "price": 875,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Brushed calfskin Derby shoes",
        "brand": "Dolce & Gabbana",
        "description": "A new model is joining the Hi-trekking line. Contemporary and versatile, these new Derby shoes come in 100% brushed calfskin with a matte finish.",
        "specification": "@Brushed calfskin Derby shoes with top-stitching: @Black @Calfskin footbed with branded label @Branded rubber sole @Item comes with a branded dust bag @Made in Italy",
        "categories": ["Shoes", "Man"],
        "colors": ["Black"],
        "sizes": [
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "10.5",
          "11",
          "11.5",
          "12",
          "12.5",
          "13",
          "13.5",
          "14"
        ],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_BrushedcalfskinDerbyshoes_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_BrushedcalfskinDerbyshoes_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_BrushedcalfskinDerbyshoes_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_BrushedcalfskinDerbyshoes_04.jpg"
            ]
          }
        ],
        "price": 925,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Brushed calfskin Oxfords",
        "brand": "Dolce & Gabbana",
        "description": "The new Oxfords from the Day Classic line with ultra-light rubber sole come in brushed calfskin and feature brogue detailing.",
        "specification": "@Brushed calfskin Oxfords with brogue detailing: @Brown @Waxed laces @Calfskin insole with branded label @Branded rubber sole @Item comes with a branded dust bag @Made in Italy",
        "categories": ["Shoes", "Man"],
        "colors": ["Brown"],
        "sizes": [
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "10.5",
          "11",
          "11.5",
          "12",
          "12.5",
          "13",
          "13.5",
          "14"
        ],
        "images": [
          {
            "color": "Brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_BrushedcalfskinOxfords_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_BrushedcalfskinOxfords_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_BrushedcalfskinOxfords_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_BrushedcalfskinOxfords_04.jpg"
            ]
          },
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_BrushedcalfskinOxfords_black_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_BrushedcalfskinOxfords_black_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_BrushedcalfskinOxfords_black_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_BrushedcalfskinOxfords_black_04.jpg"
            ]
          }
        ],
        "price": 945,
        "stock": [
          {
            "color": "Brown",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Leather Derby Shoes",
        "brand": "Dolce & Gabbana",
        "description": "The “Re-Edition” collection is an evocative journey back to the brand’s origins, where the past and present meet to give life to an innovative vision and interpretation of our archives.",
        "specification": "@Leather San Pietro Derby shoes: @Brown @“Re-Edition” label @Waxed laces @Calfskin insole with branded label @Branded leather sole @Item comes with a branded dust bag @Made in Italy",
        "categories": ["Shoes", "Man"],
        "colors": ["Brown"],
        "sizes": [
          "7",
          "7.5",
          "8",
          "8.5",
          "9",
          "9.5",
          "10",
          "10.5",
          "11",
          "11.5",
          "12",
          "12.5",
          "13",
          "13.5",
          "14"
        ],
        "images": [
          {
            "color": "Brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_LeatherDerbyShoes_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_LeatherDerbyShoes_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_LeatherDerbyShoes_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Shoes/Gucci_LeatherDerbyShoes_04.jpg"
            ]
          }
        ],
        "price": 945,
        "stock": [
          {
            "color": "Brown",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Nylon holdall with rubberized logo",
        "brand": "Dolce & Gabbana",
        "description": "The brand’s iconic features adorn the logo. This holdall from the Nero Sicilia DNA range comes in soft nylon and features the Dolce&Gabbana Milano logo.",
        "specification": "@Nylon holdall with rubberized Dolce&Gabbana Milano logo: @Top fastening with double zipper and slider with logo @Double tape handles with calfskin details @Flat front pocket with zipper featuring branded slider @Adjustable and detachable tape strap with calfskin details @Nylon lining, a zipped inner pocket and two flat pockets @Item comes with a branded dust bag @Measurements: H33 x W50 x D20 cm @Made in Italy",
        "categories": ["Bags", "Man"],
        "colors": ["Green", "Black"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Green",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Nylonholdallwithrubberizedlogo_green_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Nylonholdallwithrubberizedlogo_green_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Nylonholdallwithrubberizedlogo_green_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Nylonholdallwithrubberizedlogo_green_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Nylonholdallwithrubberizedlogo_green_05.jpg"
            ]
          },
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Nylonholdallwithrubberizedlogo_black_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Nylonholdallwithrubberizedlogo_black_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Nylonholdallwithrubberizedlogo_black_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Nylonholdallwithrubberizedlogo_black_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Nylonholdallwithrubberizedlogo_black_05.jpg"
            ]
          }
        ],
        "price": 1945,
        "stock": [
          {
            "color": "Green",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Grainy calfskin and nylon backpack",
        "brand": "Dolce & Gabbana",
        "description": "Perfect for carrying your essentials with you at all times, this backpack comes in soft grainy calfskin and nylon. Practical and spacious, it features several zipped compartments and has the ruthenium-plated logo tag.",
        "specification": "@• Double zipper fastening with branded slider @Top handle @Outer pockets with zipper and branded sliders @Adjustable nylon shoulder straps on the back with calfskin details @Metal multi-functional ring @Nylon lining and inner pocket with zipper @Item comes with a dust bag @Measurements: 35.5 x 32 x 24 cm @Made in Italy",
        "categories": ["Bags", "Man"],
        "colors": ["Black"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Grainycalfskinandnylonbackpack_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Grainycalfskinandnylonbackpack_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Grainycalfskinandnylonbackpack_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Grainycalfskinandnylonbackpack_04.jpg"
            ]
          }
        ],
        "price": 2245,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Small nylon shopper with rubberized logo",
        "brand": "Dolce & Gabbana",
        "description": "The brand’s iconic features adorn the logo. The little shopper is crafted from nylon and features the Dolce&Gabbana Milano logo.",
        "specification": "@Small shopper in nylon and calfskin with rubberized Dolce&Gabbana Milano logo: @Beige @Concealed magnetic fastening @Calfskin top handles @Adjustable and detachable tape strap with calfskin details @Nylon lining, a zipped pocket and two flat pockets @Item comes with a branded dust bag @Measurements: H27 x W31 x D16 cm @Made in Italy",
        "categories": ["Bags", "Man"],
        "colors": ["Beige"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Beige",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Smallnylonshopperwithrubberizedlogo_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Smallnylonshopperwithrubberizedlogo_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Smallnylonshopperwithrubberizedlogo_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Smallnylonshopperwithrubberizedlogo_04.jpg"
            ]
          }
        ],
        "price": 1775,
        "stock": [
          {
            "color": "Beige",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Canvas backpack",
        "brand": "Dolce & Gabbana",
        "description": "The brand’s iconic features adorn the logo. The backpack from the Nero Sicilia DNA range is crafted from soft nylon and features the rubberized Dolce&Gabbana Milano logo.",
        "specification": "@This canvas backpack features calfskin details and the ruthenium-plated metal tag with logo: @Double fastening with adjustable calfskin straps, a top flap and a drawstring @Side pocket with adjustable calfskin straps @Adjustable canvas shoulder straps with calfskin details @Inner pocket with zipper @Item comes with a branded dust bag @Measurements: 43 x 38 x 19 cm @Made in Italy",
        "categories": ["Bags", "Man"],
        "colors": ["#e7dbcb"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "#e7dbcb",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Canvasbackpack_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Canvasbackpack_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Canvasbackpack_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Canvasbackpack_04.jpg"
            ]
          }
        ],
        "price": 1925,
        "stock": [
          {
            "color": "#e7dbcb",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Nylon backpack with rubberized logo",
        "brand": "Dolce & Gabbana",
        "description": "The brand’s iconic features adorn the logo. The backpack from the Nero Sicilia DNA range is crafted from soft nylon and features the rubberized Dolce&Gabbana Milano logo.",
        "specification": "@Nylon backpack with rubberized Dolce&Gabbana Milano logo: @Beige @Top fastening with double zipper and slider with logo @Tape top handle with calfskin details @Front pocket with zipper featuring double branded slider and flat pocket @Side pockets with zipper featuring double branded sliders @Adjustable tape shoulder straps with calfskin details @Nylon lining, a laptop pocket, an inner zipped pocket and flat pocket @Item comes with a branded dust bag @Measurements: H42 x W38 x D15 cm @Made in Italy",
        "categories": ["Bags", "Man"],
        "colors": ["Beige"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Beige",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Nylonbackpackwithrubberizedlogo_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Nylonbackpackwithrubberizedlogo_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Nylonbackpackwithrubberizedlogo_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Nylonbackpackwithrubberizedlogo_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Nylonbackpackwithrubberizedlogo_05.jpg"
            ]
          }
        ],
        "price": 1925,
        "stock": [
          {
            "color": "Beige",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Small printed canvas shopper",
        "brand": "Dolce & Gabbana",
        "description": "Iconic style is being given some contemporary edge, creating a new vision of the brand’s signature aesthetic. The Carretto print is getting new detailing and is being presented in this new version boasting “psychedelic” colors.",
        "specification": "@Small shopper in Psychedelic Carretto-print canvas: @Multi-colored @Branded tag in ruthenium-plated metal @Concealed magnetic fastening @Calfskin top handles @Adjustable and detachable calfskin strap @Fabric lining and zipped flat pocket @Item comes with a branded dust bag @Measurements: H31.5 x W28.5 x D9.5 cm @Made in Italy",
        "categories": ["Bags", "Man"],
        "colors": ["Red"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Red",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Smallprintedcanvasshopper_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Smallcoatedjacquardbeltbag_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Smallcoatedjacquardbeltbag_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Smallcoatedjacquardbeltbag_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Smallcoatedjacquardbeltbag_05.jpg"
            ]
          }
        ],
        "price": 1295,
        "stock": [
          {
            "color": "Red",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Large structured canvas shopper",
        "brand": "Dolce & Gabbana",
        "description": "Iconic style is being given some contemporary edge, creating a new vision of the brand’s signature aesthetic. Practical and compact, the large shopper features calfskin details and the Dolce&Gabbana Milano label.",
        "specification": "@Large structured canvas shopper with Dolce &Gabbana Milano logo: @Beige @Concealed magnetic fastening @Calfskin top handles @Fabric lining and zipped pocket @Item comes with a branded dust bag @Measurements: H34.5 x W42.5 x D14.5 cm @Made in Italy",
        "categories": ["Bags", "Man"],
        "colors": ["Beige"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Beige",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Largestructuredcanvasshopper_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Largestructuredcanvasshopper_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Largestructuredcanvasshopper_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Largestructuredcanvasshopper_04.jpg"
            ]
          }
        ],
        "price": 1245,
        "stock": [
          {
            "color": "Beige",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Large nylon shopper with rubberized logo",
        "brand": "Dolce & Gabbana",
        "description": "The brand’s iconic features adorn the logo. The large shopper is crafted from nylon and features the Dolce&Gabbana Milano logo.",
        "specification": "@Large shopper in nylon and calfskin with rubberized Dolce&Gabbana Milano logo: @Black @Concealed magnetic fastening @Calfskin top handles @Adjustable and detachable tape strap with calfskin details @Nylon lining, a zipped pocket and two flat pockets @Item comes with a branded dust bag @Measurements: H37 x W41 x D18 cm @Made in Italy",
        "categories": ["Bags", "Man"],
        "colors": ["Black"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Largenylonshopperwithrubberizedlogo_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Largenylonshopperwithrubberizedlogo_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Largenylonshopperwithrubberizedlogo_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Largenylonshopperwithrubberizedlogo_04.jpg"
            ]
          }
        ],
        "price": 1995,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Large printed canvas shopper",
        "brand": "Dolce & Gabbana",
        "description": "In the Roma collection, past and present meet to give rise to a vision and an innovative interpretation of our archives. Practical and spacious, the shopper is crafted in canvas with calfskin details and features a brand plate.",
        "specification": "@Large coin print canvas shopper: @Multi-colored @Branded tag in ruthenium-plated metal @Concealed magnetic fastening @Calfskin top handles @Fabric lining and zipped pocket @Item comes with a branded dust bag @Measurements: H34.5 x W42.5 x D14.5 cm @Made in Italy",
        "categories": ["Bags", "Man"],
        "colors": ["Brown"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Largeprintedcanvasshopper_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Largeprintedcanvasshopper_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Largeprintedcanvasshopper_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Largeprintedcanvasshopper_04.jpg"
            ]
          }
        ],
        "price": 1295,
        "stock": [
          {
            "color": "Brown",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Canvas shopper",
        "brand": "Dolce & Gabbana",
        "description": "The “Re-Edition” collection is an evocative journey back to the brand’s origins, where the past and present meet to give life to an innovative vision and interpretation of our archives",
        "specification": "@This canvas shopper features coated fabric details and the ruthenium-plated metal tag with logo: @Green @Tape top handles and calfskin details @Outer pockets with calfskin straps @Adjustable and detachable tape strap with calfskin details @Item comes with a branded dust bag @Measurements: H37 x 40.5 x D15.5 cm @Made in Italy",
        "categories": ["Bags", "Man"],
        "colors": ["Green"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Green",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Canvasshopper_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Canvasshopper_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Canvasshopper_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Canvasshopper_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Canvasshopper_05.jpg"
            ]
          }
        ],
        "price": 2145,
        "stock": [
          {
            "color": "Green",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Small cordura belt bag",
        "brand": "Dolce & Gabbana",
        "description": "The brand’s iconic features adorn the logo. Practical and spacious, this cordura belt bag features the all-over DG logo.",
        "specification": "@Small cordura belt bag featuring the all-over DG logo: @Beige @Branded tag in ruthenium-plated metal @Top fastening with double zipper and slider with logo @Flat front and back pocket with zippers and branded sliders @Adjustable tape with snap fastening @Fabric lining @Item comes with a branded dust bag @Measurements: H15 x W43 x D6 cm @Made in Italy",
        "categories": ["Bags", "Man"],
        "colors": ["Beige"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Beige",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Smallcordurabeltbag_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Smallcordurabeltbag_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Smallcordurabeltbag_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Smallcordurabeltbag_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Smallcordurabeltbag_05.jpg"
            ]
          }
        ],
        "price": 975,
        "stock": [
          {
            "color": "Beige",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Cordura backpack",
        "brand": "Dolce & Gabbana",
        "description": "The brand’s iconic features adorn the logo. Practical and spacious, this cordura backpack features the all-over DG logo.",
        "specification": "@Cordura backpack featuring the all-over DG logo: @Beige @Branded tag in ruthenium-plated metal @Top fastening with double zipper and slider with logo @Tape top handle with calfskin details @Front pocket with zipper featuring double branded slider and flat pocket @Side pockets with zipper featuring double branded sliders @Adjustable tape shoulder straps with calfskin details @Fabric lining, a laptop pocket, an inner zipped pocket and a flat pocket @Item comes with a branded dust bag @Measurements: H42 x W38 x D15 cm @Made in Italy",
        "categories": ["Bags", "Man"],
        "colors": ["Beige"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Beige",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Cordurabackpack_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Cordurabackpack_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Cordurabackpack_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Cordurabackpack_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Cordurabackpack_05.jpg"
            ]
          }
        ],
        "price": 2145,
        "stock": [
          {
            "color": "Beige",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Coated brown jacquard crossbody bag",
        "brand": "Dolce & Gabbana",
        "description": "Past and present meet to give rise to a vision and an innovative interpretation of our archives. Practical and versatile, this coated fabric crossbody bag features the all-over jacquard Dolce&Gabbana logo.",
        "specification": "@Coated fabric crossbody bag with the all-over jacquard Dolce&Gabbana logo: @Brown @Branded tag in ruthenium-plated metal @Top fastening with double zipper and slider with logo @Flat front pocket with zipper featuring branded slider @Adjustable and detachable tape strap with calfskin details @Fabric lining, a zipped pocket with branded slider and two flat pockets @Item comes with a branded dust bag @Measurements: H18 x W21 x D4.5 cm @Made in Italy",
        "categories": ["Bags", "Man"],
        "colors": ["Brown"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Coatedbrownjacquardcrossbodybag_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Coatedbrownjacquardcrossbodybag_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Coatedbrownjacquardcrossbodybag_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Coatedbrownjacquardcrossbodybag_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Coatedbrownjacquardcrossbodybag_05.jpg"
            ]
          }
        ],
        "price": 1175,
        "stock": [
          {
            "color": "Brown",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Coated jacquard briefcase",
        "brand": "Dolce & Gabbana",
        "description": "Past and present meet to give rise to a vision and an innovative interpretation of our archives. The new coated fabric briefcase features the all-over jacquard Dolce&Gabbana logo.",
        "specification": "@Coated fabric briefcase with the all-over jacquard Dolce&Gabbana logo: @Black @Branded tag in ruthenium-plated metal @Top fastening with double zipper and slider with logo @Calfskin top handles @Adjustable and detachable tape strap with calfskin details @Fabric lining with a zipped pocket with branded slider and two flat pockets @Item comes with a branded dust bag @Measurements: H29 x W36.5 x D6.5 cm @Made in Italy",
        "categories": ["Bags", "Man"],
        "colors": ["Black"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Coatedjacquardbriefcase_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Coatedjacquardbriefcase_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Coatedjacquardbriefcase_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Coatedjacquardbriefcase_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Coatedjacquardbriefcase_05.jpg"
            ]
          }
        ],
        "price": 1845,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Small coated jacquard crossbody bag",
        "brand": "Dolce & Gabbana",
        "description": "Past and present meet to give rise to a vision and an innovative interpretation of our archives. Practical and compact, the small coated fabric crossbody bag features the all-over jacquard Dolce&Gabbana logo.",
        "specification": "@Small coated fabric crossbody bag with the all-over jacquard Dolce&Gabbana logo: @Black @Branded tag in ruthenium-plated metal @Top fastening with zipper and slider with logo @Adjustable and detachable tape strap with calfskin details @Nylon lining and flat pocket @Item comes with a branded dust bag @Measurements: H17.5 x W10.5 x D5 cm @Made in Italy",
        "categories": ["Bags", "Man"],
        "colors": ["Black"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Smallcoatedjacquardcrossbodybag_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Smallcoatedjacquardcrossbodybag_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Smallcoatedjacquardcrossbodybag_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Smallcoatedjacquardcrossbodybag_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Smallcoatedjacquardcrossbodybag_05.jpg"
            ]
          }
        ],
        "price": 975,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Coated jacquard crossbody bag",
        "brand": "Dolce & Gabbana",
        "description": "Past and present meet to give rise to a vision and an innovative interpretation of our archives. Practical and versatile, this coated fabric crossbody bag features the all-over jacquard Dolce&Gabbana logo.",
        "specification": "@Coated fabric crossbody bag with the all-over jacquard Dolce&Gabbana logo: @Black @Branded tag in ruthenium-plated metal @Top fastening with double zipper and slider with logo @Flat front pocket with zipper featuring branded slider @Adjustable and detachable tape strap with calfskin details @Fabric lining, a zipped pocket with branded slider and two flat pockets @Item comes with a branded dust bag @Measurements: H18 x W21 x D4.5 cm @Made in Italy",
        "categories": ["Bags", "Man"],
        "colors": ["Black"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Coatedbrownjacquardcrossbodybag_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Coatedbrownjacquardcrossbodybag_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Coatedbrownjacquardcrossbodybag_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Coatedbrownjacquardcrossbodybag_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Coatedbrownjacquardcrossbodybag_05.jpg"
            ]
          }
        ],
        "price": 1175,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Small coated jacquard belt bag",
        "brand": "Dolce & Gabbana",
        "description": "Past and present meet to give rise to a vision and an innovative interpretation of our archives. Practical and compact, the coated fabric belt bag features the all-over jacquard Dolce&Gabbana logo.",
        "specification": "@Small coated fabric belt bag with the all-over jacquard Dolce&Gabbana logo: @Black @Branded tag in ruthenium-plated metal @Top fastening with double zipper and slider with logo @Flat front and back pocket with zippers and branded sliders @Adjustable tape with snap fastening @Fabric lining @Item comes with a branded dust bag @Measurements: H15 x W43 x D6 cm @Made in Italy",
        "categories": ["Bags", "Man"],
        "colors": ["Black"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Smallcoatedjacquardbeltbag_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Smallcoatedjacquardbeltbag_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Smallcoatedjacquardbeltbag_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Smallcoatedjacquardbeltbag_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_Smallcoatedjacquardbeltbag_05.jpg"
            ]
          }
        ],
        "price": 975,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Coated jacquard backpack",
        "brand": "Dolce & Gabbana",
        "description": "Past and present meet to give rise to a vision and an innovative interpretation of our archives. Practical and spacious, this coated fabric backpack features the all-over jacquard Dolce&Gabbana logo.",
        "specification": "@Coated fabric backpack with the all-over jacquard Dolce&Gabbana logo: @Black @Branded tag in ruthenium-plated metal @Double snap fastening with flap on top and drawstring @Front pocket and side pockets with snap fastening @Adjustable nylon shoulder straps with calfskin details @Fabric lining, a zipped pocket and two flat pockets @Item comes with a branded dust bag @Measurements: H42 x W29 x D18 cm @Made in Italy",
        "categories": ["Bags", "Man"],
        "colors": ["Black"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "Black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_CoatedJacquardBackPack_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_CoatedJacquardBackPack_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_CoatedJacquardBackPack_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_CoatedJacquardBackPack_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Man/Bags/Gucci_CoatedJacquardBackPack_05.jpg"
            ]
          }
        ],
        "price": 2745,
        "stock": [
          {
            "color": "Black",
            "stock": "100",
            "sold": 0
          }
        ]
      }
    ])
  }else{
    res.status(403).json({message: "Token not authorized"})
  }
})


// --------- Jimmy Choo ---------->
app.get("/jimmyChoo/man/:token", (req, res)=>{
  if(req.params.token === TOKEN){
    res.status(200).json([
      {
        "name":"Marlow Moccasin",
        "brand":"Jimmy Choo",
        "description":"Our Marlow moccasin shoes are a refined update to a classic, Italian-crafted in a soft calf leather. They're embellished with studs that are signature to our Diamond collection. Keep it casual or pair with tailored ensembles.",
        "specifications":"@Soft calf leather@Studded embellishment@Chunky sole@Jimmy Choo lettering" ,
        "categories":["Shoes","Man"],
        "colors": ["Brown"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Brown",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+1/MarlowMoccasin-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+1/MarlowMoccasin-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+1/MarlowMoccasin-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+1/MarlowMoccasin-mix.webp"]
            }       
        ],
        "price": 1195,
        "stock": [
            {
                "color":"Brown",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Elias Zip Boot",
        "brand":"Jimmy Choo",
        "description":"Crafted in luxe leather, our Elias boots are a wardrobe classic. Finished with a simple zip fastening, they're designed with a round toe and stacked heel. Pair with tailored looks for enduring sophistication.",
        "specifications":"@Box calf leather@Round toe@Zip fastening@Jimmy Choo logo" ,
        "categories":["Shoes","Man"],
        "colors": ["Black"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+2/EliasZipBoot-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+2/EliasZipBoot-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+2/EliasZipBoot-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+2/EliasZipBoot-mix.webp"]
            }       
        ],
        "price": 1295,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Thame BLCK",
        "brand":"Jimmy Choo",
        "description":"Thame in black calf leather is an elegant and classic style with a formal slipper silhouette. It features a leather lining and leather sole. Pair yours with tailoring for a sophisticated finish",
        "specifications":"@Soft shiny calf leather@Leather lined@Leather sole@Made in Italy" ,
        "categories":["Shoes","Man"],
        "colors": ["Black"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+3/Thame-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+3/Thame-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+3/Thame-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+3/Thame-mix.webp"]
            }       
        ],
        "price": 725,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Finnion Monkstrap",
        "brand":"Jimmy Choo",
        "description":"Classic yet contemporary, the Finnion double monk strap shoes are crafted in patent leather, embellished with studs evocative of our Diamond family. They feature two buckles, a round toe and a leather sole. Wear with fine tailoring to finish your formal looks to perfection.",
        "specifications":"@Patent leather@Studded embellishment@Buckle fastening@Round toe@Leather lining@Leather sole@Made in Italy" ,
        "categories":["Shoes","Man"],
        "colors": ["Black"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+4/FinnionMonkstrap-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+4/FinnionMonkstrap-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+4/FinnionMonkstrap-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+4/FinnionMonkstrap-mix.webp"]
            }       
        ],
        "price": 850,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Finnion Monkstrap G&P",
        "brand":"Jimmy Choo",
        "description":"Classic yet contemporary, the Finnion double monk strap shoes are Italian-crafted in umber velvet suede. They feature two gunmetal-tone buckles, a round toe and a leather sole. Wear with fine tailoring to finish your formal looks to perfection.",
        "specifications":"@Velvet suede@Buckle fastening@Round toe@Leather lining@Leather sole@Made in Italy" ,
        "categories":["Shoes","Man"],
        "colors": ["Green","Pink"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Green",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+5/Green/FinnionMonkstrap-front.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+5/Green/FinnionMonkstrap-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+5/Green/FinnionMonkstrap-back.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+5/Green/FinnionMonkstrap-ix.webp"]
            },
            {
                "color":"Pink",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+5/LightPink/FinnionMonkstrap-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+5/LightPink/FinnionMonkstrap-horizontal.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+5/LightPink/FinnionMonkstrap-back.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+5/LightPink/FinnionMonkstrap-mix.webp"]
            }       
        ],
        "price": 850,
        "stock": [
            {
                "color":"Green",
                "stock":100,
                "sold":0
            },
            {
                "color":"Pink",
                "stock":100,
                "sold":0
            }
            
        ]
    },
    {
        "name":"Marti Reverse",
        "brand":"Jimmy Choo",
        "description":"Our Marti Reverse loafers are crafted in a buffalo leather. Taking inspiration from our Diamond family, decorated with our signature multifaceted chain. Our classic design is complete with a low stacked heel, leather lining and a leather sole.",
        "specifications":"@Buffalo leather@Diamond family inspired chain@Tonal stitching@Leather lined interior@Leather sole@Stacked low heel@Made in Italy" ,
        "categories":["Shoes","Man"],
        "colors": ["Brown"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Brown",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+6/MartiReverse-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+6/MartiReverse-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+6/MartiReverse-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+6/MartiReverse-mix.webp"]
            }       
        ],
        "price": 825,
        "stock": [
            {
                "color":"Brown",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Marti Reverse TXT",
        "brand":"Jimmy Choo",
        "description":"Our Marti Reverse loafers are crafted in a denim with our iconic JC monogram motif. Taking inspiration from our Diamond family, decorated with our signature multifaceted chain. Our classic design is complete with a low stacked heel, leather lining and a leather sole.",
        "specifications":"@JC monogrammed denim@Diamond family inspired chain@Tonal stitching@Leather lined interior@Leather sole@Stacked low heel@Made in Italy" ,
        "categories":["Shoes","Man"],
        "colors": ["Skyblue"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Skyblue",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+7/MartiReverse-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+7/MartiReverse-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+7/MartiReverse-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+7/MartiReverse-mix.jpg"]
            }       
        ],
        "price": 825,
        "stock": [
            {
                "color":"Skyblue",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Marti Reverse BL",
        "brand":"Jimmy Choo",
        "description":"Our Marti Reverse loafers are Italian-crafted in a luxuriously soft velvet suede. Taking inspiration from our Diamond family, decorated with our signature multifaceted chain. Our classic design is complete with a low stacked heel, leather lining and a leather sole.",
        "specifications":"@Velvet suede@Diamond family inspired chain@Tonal stitching@Leather lined interior@Leather sole@Stacked low heel@Made in Italy" ,
        "categories":["Shoes","Man"],
        "colors": ["Blue"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Blue",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+8/MartiReverse-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+8/MartiReverse-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+8/MartiReverse-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+8/MartiReverse-mix.webp"]
            }       
        ],
        "price": 825,
        "stock": [
            {
                "color":"Blue",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Foxley/M",
        "brand":"Jimmy Choo",
        "description":"Our Foxley slip-on shoes are classic silhouette in black velvet and woven raffia. A modern take on smart dressing, they're finished with a tassel to elevate your formal looks.",
        "specifications":"@Velvet suede@Woven raffia@Tassel decoration@Leather lining@Leather sole@Made in Italy" ,
        "categories":["Shoes","Man"],
        "colors": ["Black"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+9/Foxley-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+9/Foxley-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+9/Foxley-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+9/Foxley-mix.webp"]
            }       
        ],
        "price": 995,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Foxley BLC",
        "brand":"Jimmy Choo",
        "description":"These FOXLEY loafers are finely crafted in Italy from black soft shiny calf leather. They come in a classic shape with tassel trims, and are ideal for lending a refined finish to myriad formal ensembles.",
        "specifications":"@Calf leather@Tassel detail@Leather lining@Leather sole@Made in Italy" ,
        "categories":["Shoes","Man"],
        "colors": ["Black"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+10/Foxley-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+10/Foxley-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+10/Foxley-mix.webp"]
            }       
        ],
        "price": 825,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Thame PRL",
        "brand":"Jimmy Choo",
        "description":"Thame in black velvet is an elegant and classic style with a formal slipper silhouette. Embellished with encrusted crystals it features a leather lining and leather sole. Pair yours with tailoring for a sophisticated finish.",
        "specifications":"@Velvet@Encrusted crystal embellishment@Leather lined@Leather sole@Made in Italy" ,
        "categories":["Shoes","Man"],
        "colors": ["Black"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+11/Thame-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+11/Thame-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+11/Thame-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+11/Thame-mix.webp"]
            }       
        ],
        "price": 4595,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Thame STD",
        "brand":"Jimmy Choo",
        "description":"Thame in black velvet is an elegant and classic style with a formal slipper silhouette. It features crystal embellishment with a leather lining and leather sole. Pair yours with tailoring for a sophisticated finish.",
        "specifications":"@Velvet@Crystal embellishment@Leather lined interior and sole@Low stacked heel@Made in Italy" ,
        "categories":["Shoes","Man"],
        "colors": ["Black"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+12/Thame-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+12/Thame-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+12/Thame-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+12/Thame-mix.webp"]
            }       
        ],
        "price": 995,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Thame GLTR",
        "brand":"Jimmy Choo",
        "description":"Thame in black coarse glitter fabric is an elegant and classic style with a formal slipper silhouette. It features a leather lining and leather sole. Pair yours with tailoring for a sophisticated finish.",
        "specifications":"@Coarse glitter fabric@Slipper silhouette@Leather lined@Leather sole@Made in Italy" ,
        "categories":["Shoes","Man"],
        "colors": ["Black"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+13/Thame-front.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+13/Thame-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+13/Thame-mix.webp"]
            }       
        ],
        "price": 595,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Foxley Old",
        "brand":"Jimmy Choo",
        "description":"Our FOXLEY slip-on shoes in black velvet instantly smarten any look. They are crafted in Italy and come complete with a tassel, creating a formal appearance.",
        "specifications":"@Velvet@Tassel decoration@Leather lining@Leather sole@Made in Italy" ,
        "categories":["Shoes","Man"],
        "colors": ["Black"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+14/Foxley-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+14/Thame-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+14/Thame-mix.jpg"]
            }       
        ],
        "price": 850,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Finnion Monkstrap Classic",
        "brand":"Jimmy Choo",
        "description":"Classic yet contemporary, our Finnion double monk strap shoes are crafted in soft calf leather, complemented by gunmetal studs that are emblematic of our signature Diamond family. They feature two buckles, a round toe and a leather sole. Wear with fine tailoring to finish your formal looks to perfection.",
        "specifications":"@Calf leather@Gunmetal studded embellishment@Buckle fastening@Round toe@Leather lining@Leather sole@Made in Italy" ,
        "categories":["Shoes","Man"],
        "colors": ["Black"],
        "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
        "images":[
            {
                "color":"Black",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+15/FinnionMonkStrap-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+15/FinnionMonkStrap-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+15/FinnionMonkStrap-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Shoes/Modelo+15/FinnionMonkStrap-mix.webp"]
            }       
        ],
        "price": 1295,
        "stock": [
            {
                "color":"Black",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
      "name":"Wilmer",
      "brand":"Jimmy Choo",
      "description":"A versatile backpack for your off-duty and weekend wardrobe, it's crafted in tactile nylon and features by our signature logo. It's designed with a laptop compartment and zipped pocket, perfect for all of your essentials.",
      "specifications":"@Nylon@Jimmy Choo London logo@Adjustable strap@Zipped pocket@Interior laptop compartment@Size: L 33 x H 44 x W 14 cm" ,
      "categories":["Bags","Man"],
      "colors": ["Black"],
      "sizes": ["Default"],
      "images":[
          {
              "color":"Black",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+1/Wilmer-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+1/Wilmer-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+1/Wilmer-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+1/Wilmer-back.webp"]
          }        
      ],
      "price": 1175,
      "stock": [
          {
              "color":"Black",
              "stock":100,
              "sold":0
          }
      ]
  },
  {
      "name":"Wilmer MNG",
      "brand":"Jimmy Choo",
      "description":"Distinctly Jimmy Choo, woven black and gold jacquard fabric is personalised with the repeated JC monogram in contrasting laminated thread. Designed to hold all your daily essentials, the pared-back silhouette of the WILMER backpack opens to reveal a capacious interior, laptop compartment and zipped pocket. Jimmy Choo luxury is echoed in the leather identification plaque.",
      "specifications":"@Soft shiny calf leather@100% polyester fabric@Adjustable padded straps@Oversized zipper pulls@Jimmy Choo logo plaque@Measures: L33 x H44 x W14cm@Made in Italy" ,
      "categories":["Bags","Man"],
      "colors": ["Green"],
      "sizes": ["Default"],
      "images":[
          {
              "color":"Green",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+2/Wilmer-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+2/Wilmer-horizontal.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+2/Wilmer-interior.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+2/Wilmer-back.webp"]
          }        
      ],
      "price": 1550,
      "stock": [
          {
              "color":"Green",
              "stock":100,
              "sold":0
          }
      ]
  },
  {
      "name":"Wilmer SKB",
      "brand":"Jimmy Choo",
      "description":"Wilmer is versatile backpack with a touch of signature brand detailing, crafted in JC monogrammed denim. Complete with a laptop compartment and zipped pocket for all your essentials.",
      "specifications":"@C monogrammed denim@Adjustable straps@Gunmetal hardware@Zipped pocket@Laptop compartment" ,
      "categories":["Bags","Man"],
      "colors": ["Skyblue"],
      "sizes": ["Default"],
      "images":[
          {
              "color":"Skyblue",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+3/Wilmer-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+3/Wilmer-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+3/Wilmer-interior.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+3/Wilmer-back.webp"]
          }        
      ],
      "price": 1450,
      "stock": [
          {
              "color":"Skyblue",
              "stock":100,
              "sold":0
          }
      ]
  },
  {
      "name":"Kimi Camera",
      "brand":"Jimmy Choo",
      "description":"Designed to hold your daily essentials, our Kimi Camera bag is crafted in textured leather, featuring our signature JC monogram. It features an adjustable and detachable strap and finished with a zip closure.",
      "specifications":"@Textured leather @JC monogram @Adjustable and detachable strap @Zip closure" ,
      "categories":["Bags","Man"],
      "colors": ["Darkgray"],
      "sizes": ["Default"],
      "images":[
          {
              "color":"Darkgray",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+4/KimiCamera-.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+4/KimiCamera-horizontal.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+4/KimiCamera-interior.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+4/KimiCamera-back.webp"]
          }        
      ],
      "price": 895,
      "stock": [
          {
              "color":"Darkgray",
              "stock":100,
              "sold":0
          }
      ]
  },
  {
      "name":"Pimlico/S N/S",
      "brand":"Jimmy Choo",
      "description":"Our Pimlico tote is a wardrobe classic in soft calf leather, given our signature touch with star studded embellishment. The N/S silhouette offers a a spacious interior, perfect for your essentials.",
      "specifications":"@Smooth calf leather @ Matte stars @ Top handle @ Interior zipped pocket @ Size: L37 x H35 x W13cm @ Made in Italy" ,
      "categories":["Bags","Man"],
      "colors": ["Black"],
      "sizes": ["Default"],
      "images":[
          {
              "color":"Black",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+5/Pimlico-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+5/Pimlico-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+5/Pimlico-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+5/Pimlico-back.webp"]
          }        
      ],
      "price": 2350,
      "stock": [
          {
              "color":"Black",
              "stock":100,
              "sold":0
          }
      ]
  },
  {
      "name":"Webb Top Handle S",
      "brand":"Jimmy Choo",
      "description":"Distinctly Jimmy Choo, Italian-crafted in ultraviolet calf leather. Roomy yet refined, our Webb top handle bag features a secure zip fastening, leather top handles and a detachable strap. The recognisable gunmetal JC emblem offers the final touch of distinction.",
      "specifications":"@Fine grainy calf leather @ JC emblem @ Zip fastening @ Double top handles @ Detachable leather strap @ Interior pocket @ Made in Italy @ By purchasing this product, you are supporting sustainable leather manufacturing through the Leather Working Group" ,
      "categories":["Bags","Man"],
      "colors": ["Blue"],
      "sizes": ["Default"],
      "images":[
          {
              "color":"Blue",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+6/WebbTopHandle-front.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+6/WebbTopHandle-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+6/WebbTopHandle-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+6/WebbTopHandle-back.jpg"]
          }        
      ],
      "price": 1495,
      "stock": [
          {
              "color":"Blue",
              "stock":100,
              "sold":0
          }
      ]
  },
  {
      "name":"Webb Top Handle MNG",
      "brand":"Jimmy Choo",
      "description":"Distinctly Jimmy Choo, woven black and gold jacquard fabric is personalised with the repeated JC monogram in contrasting laminated thread. Roomy yet refined, the WEBB Top Handle bag features a secure zip fastening, leather top handles and a detachable strap. The recognisable gold-tone JC emblem offers the final touch of distinction.",
      "specifications":"@Soft shiny calf leather @ 100% polyester @ Zip fastening @ Double top handles @ Detachable fabric strap @ JC emblem @ Interior pocket @ Size: L39.5 x H29 x W16.5cm @ Strap measures: 42cm @ Handle drop: 14cm @ Made in Italy" ,
      "categories":["Bags","Man"],
      "colors": ["Darkgreen"],
      "sizes": ["Default"],
      "images":[
          {
              "color":"Darkgreen",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+7/WebbTopHandle-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+7/WebbTopHandle-horizontal.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+7/WebbTopHandle-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+7/WebbTopHandle-back.jpg"]
          }        
      ],
      "price": 1825,
      "stock": [
          {
              "color":"Darkgreen",
              "stock":100,
              "sold":0
          }
      ]
  },
  {
      "name":"Kimi-N",
      "brand":"Jimmy Choo",
      "description":"A versatile hero, our Kimi-N bag is crafted in denim featuring our signature JC monogram. Our must-have accessory features one interior compartment for storing all essentials and is finished with a secure zip fastening. Wear on the shoulder or cross-body.",
      "specifications":"@JC monogrammed denim @ Detachable strap @ Zip fastening @ Zipped side pocket @ Phone compartment @ Size measures: L31.5 x H21 x W4 cm @ Strap measures: 55cm @ Made in Italy" ,
      "categories":["Bags","Man"],
      "colors": ["Skyblue"],
      "sizes": ["Default"],
      "images":[
          {
              "color":"Skyblue",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+8/KimiN-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+8/KimiN-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+8/KimiN-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+8/KimiN-back.jpg"]
          }        
      ],
      "price": 995,
      "stock": [
          {
              "color":"Skyblue",
              "stock":100,
              "sold":0
          }
      ]
  },
  {
      "name":"Finsley",
      "brand":"Jimmy Choo",
      "description":"Distinctly Jimmy Choo, nylon is personalised with the repeated JC monogram in our Finsley belt bag. Designed to hold all your daily essentials, it features a secure double zip closure and a adjustable fixed shoulder strap. Wear yours during off-duty days.",
      "specifications":"@JC embossed nylon @ Zip fastening @ Adjustable fixed shoulder strap" ,
      "categories":["Bags","Man"],
      "colors": ["Black"],
      "sizes": ["Default"],
      "images":[
          {
              "color":"Black",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+9/Finsley-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+9/Finsley-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+9/Finsley-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+9/Finsley-back.webp"]
          }        
      ],
      "price": 800,
      "stock": [
          {
              "color":"Black",
              "stock":100,
              "sold":0
          }
      ]
  },
  {
      "name":"ToteWebb BLCK",
      "brand":"Jimmy Choo",
      "description":"Black, recycled cotton, cotton, calfskin leather, logo plaque, top zip closure, main compartment, internal zip pockets, two round top handles, and adjustable/removable shoulder strap.",
      "specifications":"@Fabric 75% @Calf Leather 15% @Brass 10% @Recycled Cotton 47% @Cotton 38% @Polyester 11% @Acrylic 4%" ,
      "categories":["Bags","Man"],
      "colors": ["Black"],
      "sizes": ["Default"],
      "images":[
          {
              "color":"Black",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+10/ToteWebb-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+10/ToteWebb-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+10/ToteWebb-interior.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+10/ToteWebb-back.webp"]
          }        
      ],
      "price": 2390,
      "stock": [
          {
              "color":"Black",
              "stock":100,
              "sold":0
          }
      ]
  },
  {
      "name":"ToteWebb BLCK&GD",
      "brand":"Jimmy Choo",
      "description":"Star appliqués, a logo patch on the front, two long handles on the top and internal zipped pockets. Material: calfskin.",
      "specifications":"@Fabric 75% @Calf Leather 15% @Brass 10% @Recycled Cotton 47% @Cotton 38% @Polyester 11% @Acrylic 4%" ,
      "categories":["Bags","Man"],
      "colors": ["Black"],
      "sizes": ["Default"],
      "images":[
          {
              "color":"Black",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+11/Totte-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+11/Totte-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+11/Totte-interior.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+11/Totte-modelo1.webp"]
          }        
      ],
      "price": 3450,
      "stock": [
          {
              "color":"Black",
              "stock":100,
              "sold":0
          }
      ]
  },
  {
      "name":"Wilmer MN&G",
      "brand":"Jimmy Choo",
      "description":"A versatile backpack for your off-duty and weekend wardrobe, it's crafted in tactile nylon and features by our signature logo. It's designed with a laptop compartment and zipped pocket, perfect for all of your essentials.",
      "specifications":"@Nylon@Jimmy Choo London logo@Adjustable strap@Zipped pocket@Interior laptop compartment@Size: L 33 x H 44 x W 14 cm" ,
      "categories":["Bags","Man"],
      "colors": ["Darkgray"],
      "sizes": ["Default"],
      "images":[
          {
              "color":"Darkgray",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+12/Wilmer-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+12/Wilmer-interior.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+12/Wilmer-back.webp"]
          }        
      ],
      "price": 1550,
      "stock": [
          {
              "color":"Darkgray",
              "stock":100,
              "sold":0
          }
      ]
  },
  {
      "name":"Finsley Classic",
      "brand":"Jimmy Choo",
      "description":"Distinctly Jimmy Choo, nylon is personalised with the repeated JC monogram in our Finsley belt bag. Designed to hold all your daily essentials, it features a secure double zip closure and a adjustable fixed shoulder strap. Wear yours during off-duty days.",
      "specifications":"@JC embossed nylon @ Zip fastening @ Adjustable fixed shoulder strap" ,
      "categories":["Bags","Man"],
      "colors": ["Black"],
      "sizes": ["Default"],
      "images":[
          {
              "color":"Black",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+13/Onthego-.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+13/Onthego-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+13/Onthego-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+13/Onthego-back.webp"]
          }        
      ],
      "price": 800,
      "stock": [
          {
              "color":"Black",
              "stock":100,
              "sold":0
          }
      ]
  },
  {
      "name":"Dereck",
      "brand":"Jimmy Choo",
      "description":"A versatile hero, our Dereck bag is crafted in denim featuring our signature JC monogram. Our must-have accessory features one interior compartment for storing all essentials and is finished with a secure zip fastening. Wear on the shoulder or cross-body.",
      "specifications":"@Black @leather @star appliqué detail @silver-tone logo letters @top closure @interior logo patch @rectangular design." ,
      "categories":["Bags","Man"],
      "colors": ["Black"],
      "sizes": ["Default"],
      "images":[
          {
              "color":"Black",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+14/Dereck-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+14/Dereck-interior.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+14/Dereck-back.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+14/Dereck-modelo1.webp"]
          }        
      ],
      "price": 850,
      "stock": [
          {
              "color":"Black",
              "stock":100,
              "sold":0
          }
      ]
  },
  {
      "name":"Evan",
      "brand":"Jimmy Choo",
      "description":"Blue, cotton blend, denim, leather trim, jacquard, bucket style, drawstring closure, internal zipped pockets.",
      "specifications":"@Fabric 78% @Calfskin Leather 13% @Brass 9% @Recycled Cotton 47% @Cotton 38% @Polyester 11% @Acrylic 4%." ,
      "categories":["Bags","Man"],
      "colors": ["Skyblue"],
      "sizes": ["Default"],
      "images":[
          {
              "color":"Skyblue",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+15/Evan-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+15/Evan-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+15/Evan-interior.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Jimmy+Choo/Hombres/JC-Hombres/Bags/Modelo+15/Evan-back%7D.jpg"]
          }        
      ],
      "price": 2150,
      "stock": [
          {
              "color":"Skyblue",
              "stock":100,
              "sold":0
          }
      ]
  }
    ])
  }else{
    res.status(403).json({message: "Token not authorized"})
  }
})



module.exports = app;
