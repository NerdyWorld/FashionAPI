require("dotenv").config();
const TOKEN = process.env.TOKEN;

const express = require("express");
const app = express();
const logger = require("morgan");
const cors = require("cors");




app.use(cors())
app.use(logger("dev"))



app.get("/lv/women/:token", (req, res)=>{
  if(req.params.token === TOKEN){
    res.status(200).json([
        {
          "name":"OnTheGo MM",
          "brand":"Louis Vuitton",
          "description":"The OnTheGo MM bag is crafted in coated canvas with an oversized Monogram motif on a cream background. The piece is embellished and lined with an intricate Monogram floral print inspired by traditional Portuguese tiles. This spacious and versatile model features short and long handles that allow it to be carried in multiple ways.",
          "specifications":"@Monogram Coated Canvas @Textile lining @Metal pieces finished in gold. @D-ring to secure belongings @Inside flat zip pocket @Inside with double pocket" ,
          "categories":["Bags", "Women"],
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
          "categories":["Bags", "Women"],
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
          "categories":["Bags", "Women"],
          "colors": ["Brown"],
          "sizes": ["PM","GM","MM"],
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
          "categories":["Bags", "Women"],
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
          "categories":["Bags", "Women"],
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
          "categories":["Bags", "Women"],
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
          "categories":["Bags", "Women"],
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
                  "color":"Rose",
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
          "categories":["Bags", "Women"],
          "colors": ["Brown"],
          "sizes": ["MM","BB"],
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
          "categories":["Bags", "Women"],
          "colors": ["Brown"],
          "sizes": ["MM","PM"],
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
          "categories":["Bags", "Women"],
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
          "categories":["Bags", "Women"],
          "colors": ["Blue"],
          "sizes": ["MM"],
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
          "categories":["Bags", "Women"],
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
          "categories":["Bags", "Women"],
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
          "categories":["Bags", "Women"],
          "colors": ["Brown"],
          "sizes": ["PM","MM"],
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
          "categories":["Bags", "Women"],
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
          "categories":["Sneakers", "Women"],
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
                  "color":"Azul",
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
          "categories":["Sneakers", "Women"],
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
          "categories":["Sneakers", "Women"],
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
          "categories":["Sneakers", "Women"],
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
          "categories":["Sneakers", "Women"],
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
          "categories":["Sneakers", "Women"],
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
          "categories":["Sneakers", "Women"],
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
          "categories":["Sneakers", "Women"],
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
          "categories":["Sneakers", "Women"],
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
          "categories":["Sneakers", "Women"],
          "colors": ["Brown"],
          "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
          "images":[
              {
                  "color":"Brown",
                  "images": ["","","","",""]
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
          "categories":["Sneakers", "Women"],
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
          "categories":["Sneakers", "Women"],
          "colors": ["Gray"],
          "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
          "images":[
              {
                  "color":"Gray",
                  "images": ["","","","",""]
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
          "categories":["Sneakers", "Women"],
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
          "categories":["Sneakers", "Women"],
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
          "categories":["Sneakers", "Women"],
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
        "brand":"LV",
        "description":"The Madeleine pump, made of shiny Monogram Canvas, is a classic Louis Vuitton design. This piece features a round toe and a wide, chunky heel, which gives it a vintage touch. The upper is enhanced with an elegant oversize LV Circle embellishment in gold-colored metal. ",
        "specifications":"Glossy Monogram Canvas, Leather sole, 7.5cm heel " ,
        "categories":["Heels"],
        "colors": ["Brown " ],
        "sizes": ["35","35.5","36","36.5", "37", "37.5", "38", "38.5", "39", "39,5","40", "40,5", "41"],
        "images":[
            {
                "color":"Brown",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/1/1.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/1/2.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/1/3.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/1/4.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/1/5.png"]
            }
            
        ],
        "price": 1000 ,
        "stock": [
            {
                "color":"Brown ",
                "stock":100,
                "sold":0
            }            
        ]
        },
        {
            "name":"Shake slingback court shoe",
            "brand":"LV",
            "description":"This version of the Shake slingback pump is crafted in Louis Vuitton's iconic Epi patent leather. This model stands out for its modern lines and high, wide, V-shaped heel. The design is completed with an oversize LV initials decoration in the same tone on the instep and an elastic strap at the back for easy adjustment.",
            "specifications":"Pink colour, Epi Leather Patent, Lining made of lambskin, Elastic strap, Leather sole,8,5cm heel, LV logo accesories",
            "categories":["Heels"],
            "colors": ["Pink"],
            "sizes": ["35","35.5","36","36.5", "37", "37.5", "38", "38.5", "39", "39,5","40", "40,5", "41"],
            "images":[
                {
                    "color":"Pink",
                    "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/2/1.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/2/2.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/2/3.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/2/4.png"]
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
            "brand":"LV",
            "description":"The Cherie court shoe updates a classic Louis Vuitton design with its feminine slingback design. The piece combines Monogram Canvas with black patent leather and shows off a thin strap that is adjusted with a small golden buckle. Its leather sole shows off a rubber insert to provide greater resistance.",
            "specifications":"Canvas Monogram in patent leather and patent calfskin, Black, Leather sole, 6.5 cm heel, Made in Italy" ,
            "categories":["Heels"],
            "colors": ["Black " ],
            "sizes": ["35","35.5","36","36.5", "37", "37.5", "38", "38.5", "39", "39,5","40", "40,5", "41"],
            "images":[
                {
                    "color":"Black",
                    "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/3/1.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/3/2.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/3/3.png ","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/3/4.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/3/5.png"]
                }       
            ],
            "price":1050  ,
            "stock": [
                {
                    "color":"Black ",
                    "stock":100,
                    "sold":0
                }
            ]
        },
        {
            "name":"Archlight slingback court shoe ",
            "brand":"LV",
            "description":"The Archlight slingback court shoe features a combination of soft lambskin and shiny patent leather that creates an eye-catching colour-block design. The model features sporty details, such as mesh inserts, House motifs and a wavy rubber sole, inspired by the iconic LV Archlight sneakers. The piece is completed with a velcro strap at the back and a high stiletto heel.  ",
            "specifications":"Black/white colour,  Lambskin and patent leather,  Velcro adjustable strap,  flexible rubber sole,  9cm heel, LV Circle Logo,  Louis Vuitton signature on the strap, The article has been made in Italy " ,
            "categories":["Heels"],
            "colors": ["White " ],
            "sizes": ["35","35.5","36","36.5", "37", "37.5", "38", "38.5", "39", "39,5","40", "40,5", "41"],
            "images":[
                {
                    "color":"White",
                    "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/4/1.png ",  "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/4/2.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/4/3.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/4/4.png ", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/4/5.png"]
                }       
            ],
            "price": 1220 ,
            "stock": [
                {
                    "color":"White ",
                    "stock":100,
                    "sold":0
                }
            ]
        },
        {
            "name":"Blossom flat ballerina ",
            "brand":"LV",
            "description":"The Blossom flat ballerina is made of shiny patent leather. This shoe features a feminine point-toe design with an oversized bow inspired by the Louis Vuitton archives. The piece shows off a stud and a metallic heel embellished with the initials LV.",
            "specifications":"Main part: patent leather,    Leather sole, LV initials logo stud, LV initials embellishment on the heel, The item is made in Italy " ,
            "categories":["Heels"],
            "colors": ["Black" ],
            "sizes": ["35","35.5","36","36.5", "37", "37.5", "38", "38.5", "39", "39,5","40", "40,5", "41"],
            "images":[
                {
                    "color":"Black",
                    "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/5/1.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/5/2.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/5/3.png","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/5/4.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/5/5.png"]
                }       
            ],
            "price":1200 ,
            "stock": [
                {
                    "color":"Black ",
                    "stock":100,
                    "sold":0
                }
            ]
        },
        {
            "name":"Blossom slingback court shoe",
            "brand":"LV",
            "description":"This elegant Blossom court shoe in goatskin suede features a slingback design. The model features an adjustable strap at the back, made of the Maison's emblematic natural leather, which is enhanced with a gold-coloured stud engraved with the Louis Vuitton signature. The piece is completed with a heel that matches the instep, inspired by the Monogram flower with rounded edges.",
            "specifications":"Goatskin suede,Strap made of natural leather,Leather sole,7.5cm heel,Louis Vuitton signature engraved on the strap, Stud with embossed Louis Vuitton signature,Monogram Flower Heel,The article has been made in Italy" ,
            "categories":["Heels"],
            "colors": ["Red" ],
            "sizes": ["35","35.5","36","36.5", "37", "37.5", "38", "38.5", "39", "39,5","40", "40,5", "41"],
            "images":[
                {
                    "color":"Red",
                    "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/6/1.png ", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/6/2.png ", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/6/3.png ", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/6/4.png"]
                }       
            ],
            "price":1200  ,
            "stock": [
                {
                    "color":"Red ",
                    "stock":100,
                    "sold":0
                }
            ]
        },
        {
            "name":"Shake slingback court shoe",
            "brand":"LV",
            "description":"The Shake slingback court shoe is crafted in soft lambskin and features a high, chunky, V-shaped heel. In this edition, the heel is decorated with the Malletage crisscross pattern, inspired by the lining of Louis Vuitton trunks. The elegant design is completed by a chunky gold LV initials embellishment on the front.",
            "specifications":"Main part: lambskin, elastic bracelet,Leather sole, 8.5 cm heel, LV logo accessory, Iconic malletage motif on the heel, The item is made in Italy " ,
            "categories":["Heels"],
            "colors": ["Black"],
            "sizes": ["35","35.5","36","36.5", "37", "37.5", "38", "38.5", "39", "39,5","40", "40,5", "41"],
            "images":[
                {
                    "color":"Black",
                    "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/7/1.png ", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/7/2.png ", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/7/3.png ", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/7/4.png ", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/7/5.png" ]
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
            "brand":"LV",
            "description":"The Sparkle slingback court shoe is made of smooth calf leather and is characterized by its exquisite details. The model sports a chain with the engraved Monogram motif inspired by the Coussin bag. The design features an elegant mid-heel with a metal insert bearing the LV initials and is finished with a pointed toe and a leather sole.",
            "specifications":"Calfskin, elastic band, Sole made of leather, 6.5 cm high heel, Embossed Monogram Chain, LV initials embellishment on the heel, The item is made in Italy",
            "categories":["Heels"],
            "colors": ["Black"],
            "sizes": ["35","35.5","36","36.5", "37", "37.5", "38", "38.5", "39", "39,5","40", "40,5", "41"],
            "images":[
                {
                    "color":"Black",
                    "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/8/1.png ", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/8/2.png ", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/8/3.png ", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/8/4.png ", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/8/5.png"]
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
            "brand":"LV",
            "description":"The Shake slingback court shoe is reinterpreted this season in Epi patent leather that combines a shiny finish with the grain of Louis Vuitton's iconic leather. This striking model stands out for its high, wide, V-shaped heel. The design is completed with a thick embellishment of LV initials in a matching color on the instep.",
            "specifications":"Patent leather Epi calfskin, Lining made of lambskin , elastic strap , Leather sole , 9.5cm heel , LV logo accessory, The item is made in Italy ",
            "categories":["Heels"],
            "colors": ["Black " ],
            "sizes": ["35","35.5","36","36.5", "37", "37.5", "38", "38.5", "39", "39,5","40", "40,5", "41"],
            "images":[
                {
                    "color":"Black ",
                    "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/9/1.png ", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/9/2.png ", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/9/3.png ", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/9/4.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/9/5.png" ]
                }       
            ],
            "price": 1250 ,
            "stock": [
                {
                    "color":"Black ",
                    "stock":100,
                    "sold":0
                }
            ]
        },
        {
            "name":"Sparkle court shoe",
            "brand":"LV",
            "description":"Crafted in soft lambskin, the Sparkle court shoe features clean lines. This elegant model stands out for its pointed toe and its striking flared high heel. The design is completed with a gold-coloured metal insert embellished with the engraved initials LV. ",
            "specifications":"lamb skin, Sole made of leather , 9.5cm heel , LV initials embellishment on the heel , The item is made in Italy" ,
            "categories":["Heels"],
            "colors": ["Pink" ],
            "sizes": ["35","35.5","36","36.5", "37", "37.5", "38", "38.5", "39", "39,5","40", "40,5", "41"],
            "images":[
                {
                    "color":"Pink",
                    "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/10/1.png " ,"https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/10/2.png " ,"https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/10/3.png " ,"https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/10/4.png ", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/10/5.png" ]
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
            "brand":"LV",
            "description":"The Sparkle slingback court shoe is elegantly crafted in supple calf leather. The model stands out for its pointed toe and its feminine flared heel. The piece is enhanced with silver-tone hardware, Louis Vuitton signature on the elastic strap and an engraved LV Circle logo on the heel. ",
            "specifications":"Calfskin, elastic back strap , leather sole , 9.5cm heel , Louis Vuitton signature on strap ,LV Circle logo on heel, The article has been made in Italy " ,
            "categories":["Heels"],
            "colors": ["Pink" ],
            "sizes": ["35","35.5","36","36.5", "37", "37.5", "38", "38.5", "39", "39,5","40", "40,5", "41"],
            "images":[
                {
                    "color":"Pink",
                    "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/11/1.png ", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/11/2.png ", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/11/3.png ", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/11/4.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/11/5.png" ]
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
            "brand":"LV",
            "description":"Crafted in glossy calfskin, the Star Trail court shoe is the season's reinterpretation of one of Louis Vuitton's most distinctive styles. This feminine design features a strap with a buckle decorated with gold studs in the shape of a Monogram. The model features a high heel and a grooved rubber sole, which are characteristic elements of the Star Trail line.",
            "specifications":"shiny calfskin, Grooved rubber sole , 9.5cm heel , Engraved Monogram Studs, Buckle engraved with the Louis Vuitton hallmark , Shiny Monogram Canvas Clip , Article made in Italy" ,
            "categories":["Heels"],
            "colors": ["Black"],
            "sizes": ["35","35.5","36","36.5", "37", "37.5", "38", "38.5", "39", "39,5","40", "40,5", "41"],
            "images":[
                {
                    "color":"Black",
                    "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/12/1.png ", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/12/2.png ", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/12/3.png ", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/12/4.png ", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/12/5.png"]
                }       
            ],
            "price": 1410 ,
            "stock": [
                {
                    "color":"Black ",
                    "stock":100,
                    "sold":0
                }
            ]
        },
        {
            "name":"Urban Twist court shoe",
            "brand":"LV",
            "description":"The Urban Twist court shoe is a renewed and elegant version of the classic Tennis. It's made of smooth calfskin and it shows off a striking silver metallic toecap. The emblematic engraved LV Circle logo gives the piece the distinctive Louis Vuitton touch. ",
            "specifications":"Calfskin, leather sole , 10.5cm heel , Article made in Italy" ,
            "categories":["Heels"],
            "colors": ["Blush" ],
            "sizes": ["35","35.5","36","36.5", "37", "37.5", "38", "38.5", "39", "39,5","40", "40,5", "41"],
            "images":[
                {
                    "color":"Blush",
                    "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/13/1.png ", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/13/2.png ", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/13/3.png ", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/13/4.png ", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/13/5.png" ]
                }       
            ],
            "price": 1100 ,
            "stock": [
                {
                    "color":"Blush",
                    "stock":100,
                    "sold":0
                }
            ]
        },
        {
            "name":"Mansion slingback court shoe",
            "brand":"LV",
            "description":"The Mansion slingback court shoe, made of smooth calfskin, shows off a feminine design thanks to its details such as the high heel and pointed toe. On the instep is a dainty gold-tone anklet with an LV Circle pendant. This shoe is completed with an adjustable back strap and a cushioned insole for added comfort.",
            "specifications":"Calfskin, leather sole , 9cm heel , LV Circle Logo , The article has been made in Italy" ,
            "categories":["Heels"],
            "colors": ["Black " ],
            "sizes": ["35","35.5","36","36.5", "37", "37.5", "38", "38.5", "39", "39,5","40", "40,5", "41"],
            "images":[
                {
                    "color":"Black ",
                    "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/14/1.png ", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/14/2.png ", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/14/3.png ", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/14/4.png ", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/14/5.png" ]
                }       
            ],
            "price": 1270 ,
            "stock": [
                {
                    "color":"Black ",
                    "stock":100,
                    "sold":0
                }
            ]
        },
        {
            "name":"Brown Monogram Canvas Lock It Sandals Size  ",
            "brand":"LV",
            "description":"Crafted in soft lambskin, the Sparkle court shoe features clean lines. This elegant model stands out for its pointed toe and its striking flared high heel. The design is completed with a gold-coloured metal insert embellished with the engraved initials LV. ",
            "specifications":"Canvas exterior, Insole Leather, Leather sole, Item made in Italy " ,
            "categories":["Heels"],
            "colors": ["Brown"],
            "sizes": ["35","35.5","36","36.5", "37", "37.5", "38", "38.5", "39", "39,5","40", "40,5", "41"],
            "images":[
                {
                    "color":"Brown ",
                    "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/15/1.png ", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/15/2.png ", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/15/3.png ", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Heels/15/4.png "]
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
          "name":"LV Stellar Bracelet",
          "brand":"LV",
          "description":"The LV Stellar bracelet demonstrates the innovative design that can be seen across the Spring-Summer 2023 fashion jewelry collection. The centerpiece is an LV Circle presented in a three-dimensional effect that creates a sense of movement. An adjustable chain complete with a small charm completes this polished metal piece. ",
          "specifications":"length: 8.7 in/22 cm adjustable, 5.9 in/15 cm, LV Circle, Metal with gold-color finish, Clasp closure" ,
          "categories":["Accesories", "Women"],
          "colors": ["Gold" ],
          "sizes": ["one size"],
          "images":[
              {
                  "color":"Gold",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/1/1.png ", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/1/2.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/1/3.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/1/4.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/1/5.png"]
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
          "name":"LV Twiggy Bracelet ",
          "brand":"LV",
          "description":"Sharp angles give this version of the LV Twiggy bracelet a contemporary edge. The focal point of the design is an interpretation of the House's pointed Monogram Flower, which recalls the tri-flower buckle of the coordinating LV Twiggy belt. Two discreet LV Circle charms complement the bracelet's delicate chain.",
          "specifications":"Length: 6.1 in/15.5 cm adjustable, 8.5 in/21.5 cm, Metal with gold-color finish, Monogram Flower, LV Circle charms, Clasp closure",
          "categories":["Accesories", "Women"],
          "colors": ["Gold"],
          "sizes": ["one size"],
          "images":[
              {
                  "color":"Gold",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/2/1.png ", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/2/2.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/2/3.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/2/4.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/2/5.png"]
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
          "brand":"LV",
          "description":"Characterized by iconic Monogram canvas and gold-color metal trunk studs, the LV Circle reversible bracelet pays homage to Louis Vuitton's history. Smooth and refined calf leather, along with a metallic clasp, creates a polished look. An LV Circle engraved on the front adds a final House hallmark to this design.",
          "specifications":"sizes: S = ~7 in/17 cm, M ~7.5 in/19 cm, Metal with gold-color finish, Black calf leather recto side, Monogram canvas verso side, LV Circle, " ,
          "categories":["Accesories", "Women"],
          "colors": ["Black" ],
          "sizes": ["one size"],
          "images":[
              {
                  "color":"Black",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/3/1.png ", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/3/2.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/3/3.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/3/4.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/3/5.png"]
              }       
          ],
          "price": 560 ,
          "stock": [
              {
                  "color":"Black ",
                  "stock":100,
                  "sold":0
              }
          ]
      }, 
      {
          "name":"Pillow Nanogram Bracelet",
          "brand":"LV",
          "description":"The Pillow Nanogram bracelet features the Nanogram pattern carefully engraved into the finished metal. With a rigid bangle style, this piece of jewelry opens and closes using a hinged fastening. The elevated item takes inspiration from the Coussin handbag and its puffy texture, which is embossed with the House's Monogram pattern.",
          "specifications":"Sizes: S, M, Metal with silver-color finish, Nanogram pattern, Louis Vuitton signature engraving",
          "categories":["Accesories", "Women"],
          "colors": ["Silver" ],
          "sizes": ["one size"],
          "images":[
              {
                  "color":"Silver",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/4/1.png ", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/4/2.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/4/3.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/4/4.png"]
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
          "brand":"LV",
          "description":"The LV Clic It Fun and Sun bracelet features two strands of supple, braided leather. This accessory has a functional clasp that displays the LV Initials, as well as Monogram Flower accents that secure the braiding.",
          "specifications":"Sizes: 6.7 inches/17 cm, 7.5 inches/19 cm, Pink/Cream, Leather, Gold-color hardware, LV Circle on clasp, Monogram Flower motif",
          "categories":["Accesories", "Women"],
          "colors": ["Pink " ],
          "sizes": ["one size"],
          "images":[
              {
                  "color":"Pink",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/5/1.png ", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/5/2.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/5/3.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/5/4.png"]
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
          "brand":"LV",
          "description":"The oversized LV Uptown bucket hat is styled in an on-trend, ultra-contemporary material: blue denim. A giant Monogram Flower in natural cowhide adds a distinctive House touch, heightened by refined details like an all-silk lining and leather piping on the brim. A comfortable, user-friendly hat, and a fun way to wear the Monogram signature.",
          "specifications":"Denim Blue, 100% cotton, 100% silk lining, Natural cowhide piping, Embroidered natural cowhide Monogram Flower patch" ,
          "categories":["Accesories", "Women"],
          "colors": ["Denim Blue"],
          "sizes": ["one size"],
          "images":[
              {
                  "color":"Denim Blue",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/6/1.png ", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/6/2.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/6/3.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/6/4.png"]
              }       
          ],
          "price": 920 ,
          "stock": [
              {
                  "color":"Denim Blue",
                  "stock":100,
                  "sold":0
              }
          ]
      }, 
      {
          "name":"Dailygram Bucket Hat",
          "brand":"LV",
          "description":"Stylish and versatile, the reversible Dailygram bucket hat is sure to become an everyday essential. One side features a tone-on-tone XXL Monogram jacquard weave for a contemporary signature look. Turned inside out, it reveals a gold embroidered Louis Vuitton signature for a more classic feminine effect. Natural cowhide piping adds a luxurious finishing touch.",
          "specifications":"100% cotton, Reversible, Monogram jacquard weave, Natural cowhide piping, Embroidered Louis Vuitton signature, Metal eyelets" ,
          "categories":["Accesories", "Women"],
          "colors": ["Black " ],
          "sizes": ["one size"],
          "images":[
              {
                  "color":"Black ",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/7/1.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/7/2.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/7/3.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/7/4.png"]
              }       
          ],
          "price": 740 ,
          "stock": [
              {
                  "color":"Black ",
                  "stock":100,
                  "sold":0
              }
          ]
      }, 
      {
          "name":"LV x YK Reversible Infinity Dots Bucket Hat",
          "brand":"LV",
          "description":"Part of the Louis Vuitton x Yayoi Kusama collection, the LV x YK reversible Infinity Dots bucket hat offers two stylish options in one. One side is printed with the Japanese artist's iconic dots motif for an eye-catching look, while the other comes in a tonal Monogram jacquard weave for a more understated effect. This versatile piece in pure cotton is finished with refined leather piping.",
          "specifications":"100% cotton, Printed dots recto side, Monogram jacquard weave verso side, Leather piping, Leather tag with rivet, Clean by specialist only",
          "categories":["Accesories", "Women"],
          "colors": ["Black / fuschia " ],
          "sizes": ["one size"],
          "images":[
              {
                  "color":"Black / fuschia",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/8/1.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/8/2.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/8/3.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/8/4.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/8/5.jpg"]
              }       
          ],
          "price": 760,
          "stock": [
              {
                  "color":"Black / fuschia ",
                  "stock":100,
                  "sold":0
              }
          ]
      }, 
      {
          "name":"Oceanview Hat",
          "brand":"LV",
          "description":"With its broad openwork brim and dome-shaped crown, the Oceanview summer hat emanates fresh sophistication. In keeping with the House’s expert know-how and stringent quality standards, each one is hand-woven in Ecuador from carefully selected natural palm fibers, then finished in Italy. For the final touch, an embroidered textile band adds an elegant signature.",
          "specifications":"Natural color, Natural palm fiber, Cotton trim, Textile band with embroidered LV Circle and Monogram Flower motifs, Textile logo on top",
          "categories":["Accesories", "Women"],
          "colors": ["White" ],
          "sizes": ["one size"],
          "images":[
              {
                  "color":"White",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/9/1.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/9/2.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/9/3.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/9/4.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/9/5.png"]
              }       
          ],
          "price": 880 ,
          "stock": [
              {
                  "color":"White ",
                  "stock":100,
                  "sold":0
              }
          ]
      }, 
      {
          "name":"LV x YK Infinity Dots Beanie",
          "brand":"LV",
          "description":"The LV x YK Infinity Dots beanie comes in pure cashmere for exceptional warmth and softness. Part of the Louis Vuitton x Yayoi Kusama collection, it is signed with an LV Initials accessory decorated with the Japanese artist's iconic recurring dots. At once practical and fashionable, this cozy hat will add a touch of color and creativity to any silhouette.",
          "specifications":"100% cashmere, LV Initials signature with dots, Dry clean only" ,
          "categories":["Accesories", "Women"],
          "colors": ["Yellow / black"],
          "sizes": ["one size"],
          "images":[
              {
                  "color":"Yellow / black",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/10/1.png ", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/10/2.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/10/3.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/10/4.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/10/5.png"]
              }       
          ],
          "price":575  ,
          "stock": [
              {
                  "color":"Yellow / black ",
                  "stock":100,
                  "sold":0
              }
          ]
      }, 
      {
          "name":"LV Croisiere Hat",
          "brand":"LV",
          "description":"the LV Croisière hat is a standout in the House’s summer offerings: an openwork crochet bucket hat painstakingly embroidered with Monogram Flowers. Crafted in fine cotton, it keeps the head cool and adds a sophisticated touch to a summer outfit. And it’s a fun way to sport the Louis Vuitton signature.",
          "specifications":"Unique Size, LV Logo on the top, 100% cotton, Fully embroidered Monogram Flowers" ,
          "categories":["Accesories", "Women"],
          "colors": ["Blue /white" ],
          "sizes": ["one size"],
          "images":[
              {
                  "color":"Blue /white",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/11/1.png ", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/11/2.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/11/3.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/11/4.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/11/5.png"]
              }       
          ],
          "price": 1590,
          "stock": [
              {
                  "color":"Blue /white ",
                  "stock":100,
                  "sold":0
              }
          ]
      }, 
      {
          "name":" ",
          "brand":"LV",
          "description":"  ",
          "specifications":", , , , , " ,
          "categories":["Accesories", "Women"],
          "colors": [" " ],
          "sizes": ["one size"],
          "images":[
              {
                  "color":"",
                  "images": [" ", "", "", ""]
              }       
          ],
          "price":  ,
          "stock": [
              {
                  "color":" ",
                  "stock":100,
                  "sold":0
              }
          ]
      }, 
      {
          "name":"Beachview Visor",
          "brand":"LV",
          "description":"The Beachview Visor offers sophisticated protection from the summer sun. It is styled in raffia-look fabric adorned with Monogram Flowers, plus natural cowhide piping around the brim for a refined crafted touch. Cool and comfortable worn by itself, it can be combined with a silk bandeau slipped through the cowhide loops for a more sophisticated effect.",
          "specifications":"52% viscose, 48% cotton, One size, Natural cowhide piping, Natural cowhide loops, Louis Vuitton signature on the headband, Monogram Flowers on the brim, Elastic band in the back" ,
          "categories":["Accesories", "Women"],
          "colors": ["Brown" ],
          "sizes": ["one size"],
          "images":[
              {
                  "color":"Brown",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/12/1.png ", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/12/2.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/12/3.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/12/4.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/12/5.jpg"]
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
          "brand":"LV",
          "description":"The LV Day cap elevates a casual look with superb craftsmanship. An embroidered Monogram Diamond with bouclette detailing makes for an eye-catching centerpiece, while Monogram jacquard adds a layer of richness. The youthful hat is composed of mixed materials, including breathable cotton and smooth leather.",
          "specifications":"Ecru White, 100% cotton, Silk lining, Lambskin, Monogram jacquard, Embroidered patch, Dry clean only" ,
          "categories":["Accesories", "Women"],
          "colors": ["Ecru" ],
          "sizes": ["one size"],
          "images":[
              {
                  "color":"Ecru",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/13/1.png ", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/13/2.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/13/3.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/13/4.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/13/5.png"]
              }       
          ],
          "price": 690 ,
          "stock": [
              {
                  "color":"Ecru",
                  "stock":100,
                  "sold":0
              }
          ]
      }, 
      {
          "name":"Tambour Street Diver, Quartz, 39.5mm, Steel & Rose Gold",
          "brand":"LV",
          "description":"The Gold Lagoon edition of the Tambour Street Diver Watch brings the precious touch of 18-karat pink gold to this sporty, feminine dive watch. The glossy white-lacquered dial features luminescent indexes and golden polished hands. Set on a modern white rubber strap, this casual yet sophisticated piece is the ideal complement to any off-duty outfit.",
          "specifications":"High precision quartz movement, Functions: hours, minutes, seconds" ,
          "categories":["Accesories", "Women"],
          "colors": ["Silver / pink"],
          "sizes": ["one size"],
          "images":[
              {
                  "color":"Silver / pink",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/14/1.png ", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/14/2.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/14/3.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/14/4.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/14/5.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/14/6.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/14/7.png"]
              }       
          ],
          "price": 1200 ,
          "stock": [
              {
                  "color":"Silver / pink",
                  "stock":100,
                  "sold":0
              }
          ]
      },  
      {
          "name":"Tambour Street Diver, Quartz, 39.5mm, Steel",
          "brand":"LV",
          "description":"This Pacific White model brings a feminine touch to the versatile Tambour Street Diver range. Casual and sporty, it combines traditional dive watch functions with the colourful, creative and unconventional style unique to Louis Vuitton. Its bright colours, contrasting finish and luminescent indexes will add a modern twist to any outfit.",
          "specifications":"High precision quartz movement, Functions: hours, minutes, seconds" ,
          "categories":["Accesories", "Women"],
          "colors": ["Silver " ],
          "sizes": ["one size"],
          "images":[
              {
                  "color":"Silver",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/15/1.png ", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/15/2.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/15/3.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/15/4.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/15/5.png", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/accesories/15/6.png"]
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
})

app.get("/lv/man/:token", (req, res)=>{
  if(req.params.token === TOKEN){
    res.status(200).json([
        {
          "name":"Tenis LV Trainer PW",
          "brand":"Louis Vuitton",
          "description":"This monochromatic version of the LV Trainer sneakers, inspired by vintage basketball footwear, is crafted in grained and smooth calf leather. This cult model has been designed by artistic director Virgil Abloh and features the distinctive Louis Vuitton handwritten signature engraved on the side. The #54 logo on the back refers to 1854, the year of the Maison's foundation.",
          "specifications":"@White color. @Grained calf leather. @7 hours of stitching for one pair. @Rubber outsole. @LV Initials on the tongue and side. @Louis Vuitton script signature on the side. @#54 signature on the back. @Monogram Flowers on the outsole. @Made in Italy." ,
          "categories":["Sneakers", "Man"],
          "colors": ["White"],
          "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
          "images":[
              {
                  "color":"White",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+1/LVTrainer-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+1/LVTrainer-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+1/LVTrainer-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+1/LVTrainer-modelo1.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+1/LVTrainer-modelo2.webp"]
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
          "name":"LV Trainer LV x YK",
          "brand":"Louis Vuitton",
          "description":"The LV Trainer LV x YK sneakers are a special edition created for the Louis Vuitton x Yayoi Kusama collection. The piece, crafted in calf leather, features the iconic Infinity Dots motif by the avant-garde Japanese artist. This iconic design by Virgil Abloh showcases the collaboration logo embossed on the back.",
          "specifications":"@Red color @Main part: calfskin leather. @Seven hours of assembly required for each pair. @Rubber sole. @LV initials engraved on the side and tongue. @Louis Vuitton x Yayoi Kusama 2023 emblem on the back. Monogram Flowers ornament on the sole. The item has been @Made in Italy" ,
          "categories":["Sneakers", "Man"],
          "colors": ["Red"],
          "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
          "images":[
              {
                  "color":"Red",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+2/LVTrainerYK-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+2/LVTrainerYK-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+2/LVTrainerYK-brand.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+2/LVTrainerYK-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+2/LVTrainerYK-Modelo1.webp"]
              }        
          ],
          "price": 1560,
          "stock": [
              {
                  "color":"Red",
                  "stock":100,
                  "sold":0
              }
          ]
      },
      {
          "name":"LV Trainer GRN",
          "brand":"Louis Vuitton",
          "description":"This vibrant version of the LV Trainer sneaker is crafted in Monogram denim and features an adjustable Velcro strap over the laces. This iconic design by Virgil Abloh takes inspiration from vintage basketball footwear. The model is enhanced with numerous signature details, including three Monogram flowers on the strap and sole, as well as an oversized Monogram flower on the side.",
          "specifications":"@Green color. @Denim Monogram. @Adjustable strap made of Velcro. @Seven hours of assembly required for each pair. @Rubber sole. @Vuitton emblem on the tongue. @Monogram Flower on the side. @Handwritten Louis Vuitton emblem on the side. @Monogram Flowers on the sole and strap. @The item has been @Made in Italy." ,
          "categories":["Sneakers", "Man"],
          "colors": ["Green"],
          "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
          "images":[
              {
                  "color":"Green",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+3/LVTrainerYK-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+3/LVTrainerYK-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+3/LVTrainerYK-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+3/LVTrainerYK-suela.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+3/LVTrainerYK-zoom.webp"]
              }        
          ],
          "price": 1560,
          "stock": [
              {
                  "color":"Green",
                  "stock":100,
                  "sold":0
              }
          ]
      },
      {
          "name":"LV Trainer BCKT",
          "brand":"Louis Vuitton",
          "description":"The LV Trainer sneakers are reinterpreted this season with a design crafted in Monogram denim and grained calf leather featuring embossed Monogram motifs. The piece evokes the style of vintage basketball footwear and showcases striking contrasting tones. This iconic model is elevated with exquisite embroidered details that require seven hours of work for each pair.",
          "specifications":"@Black and blue color. @Denim Monogram and @grained calfskin with engraved Monogram motif. @Seven hours of assembly required for each pair. @Rubber sole. @LV initials engraved on the tongue, back, and side. @Vuitton emblem on the side. Monogram Flowers ornament on the sole. The item has been @Made in Italy." ,
          "categories":["Sneakers", "Man"],
          "colors": ["Blue","Black"],
          "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
          "images":[
              {
                  "color":"Blue",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+4/Azul/LVTrainer-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+4/Azul/LVTrainer-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+4/Azul/LVTrainer-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+4/Azul/LVTrainer-suela.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+4/Azul/LVTrainer-modelo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+4/Azul/LVTrainer-modelo.mp4"]
              },
              {
                  "color":"Black",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+4/Negro/LVTrainer-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+4/Negro/LVTrainer-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+4/Negro/LVTrainer-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+4/Negro/LVTrainer-suela.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+4/Negro/LVTrainer-zoom.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+4/Negro/LVTrainerTrainer.mp4"]
              }         
          ],
          "price": 1440,
          "stock": [
              {
                  "color":"Blue",
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
          "name":"LV Trainer Eclipse",
          "brand":"Louis Vuitton",
          "description":"The LV Trainer sneaker, created by Louis Vuitton's artistic director Virgil Abloh, is reinterpreted in Monogram Eclipse canvas and Monogram Reverse canvas. This cult design is inspired by basketball models and features an intricate upper that requires seven hours of assembly. It's completed with a contrasting white rubber sole adorned with Monogram Flowers.",
          "specifications":"@Gris Eclipse and black colors. @Monogram Canvas. @Seven hours of assembly required for each pair. @Rubber sole. @LV Initials logo on the tongue and side. Monogram Flowers on the sole." ,
          "categories":["Sneakers", "Man"],
          "colors": ["Black"],
          "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
          "images":[
              {
                  "color":"Black",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+5/LVTrainer-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+5/LVTrainer-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+5/LVTrainer-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+5/LVTrainer-suela.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+5/LVTrainer-modelo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+5/LVTrainerVideo.mp4"]
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
          "name":"LV Trainer Denim",
          "brand":"Louis Vuitton",
          "description":"The LV Trainer sneakers are crafted in textile featuring the iconic Monogram motif, a central element of this season's men's collection. The model showcases an upper that demands over seven hours of craftsmanship, adorned with details such as a handwritten Louis Vuitton signature on the side and a two-tone rubber sole decorated with Monogram Flowers. This iconic footwear draws inspiration from basketball style and is designed by the Maison's artistic director, Virgil Abloh.",
          "specifications":"@Black color. @Textile with embossed Monogram motif. @Seven hours of assembly required for each pair. @Rubber sole. @LV initials on the tongue and side. @Handwritten Louis Vuitton emblem on the side. @Monogram Flowers on the sole. @The item has been @Made in Italy." ,
          "categories":["Sneakers", "Man"],
          "colors": ["Black"],
          "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
          "images":[
              {
                  "color":"Black",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+6/LVTrainer-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+6/LVTrainer-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+6/LVTrainer-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+6/LVTrainer-suela.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+6/LVTrainer-modelo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+6/LVTrainerVideo.mp4"]
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
          "name":"LV Luxembourg",
          "brand":"Louis Vuitton",
          "description":"The Luxembourg sneakers combine the classic Monogram Canvas with a white rubber sole. This model with a clean design features Monogram flowers embossed in low relief on the sole.",
          "specifications":"@Canvas Monogram. @Café color. @Monogram Flowers engraved in bas-relief on the sole. @Rubber sole. @Item made in Italy." ,
          "categories":["Sneakers", "Man"],
          "colors": ["Brown"],
          "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
          "images":[
              {
                  "color":"Brown",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+7/Luxemburg-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+7/Luxemburg-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+7/Luxemburg-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+7/Luxemburg-zoom.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+7/Luxemburg-modelo.webp"]
              }        
          ],
          "price": 1020,
          "stock": [
              {
                  "color":"Brown",
                  "stock":100,
                  "sold":0
              }
          ]
      },
      {
          "name":"LV Rivoli",
          "brand":"Louis Vuitton",
          "description":"The Rivoli High-Top Sneakers boast a distinctive high-cut design and are crafted in three different versions of the iconic Monogram Canvas. The piece is finished with the signature Louis Vuitton logo embossed in gold on the tongue and a functional Velcro strap that can be worn on either the front or back of the footwear.",
          "specifications":"@Canvas Monogram. @Louis Vuitton emblem on the Velcro strap. @Rubber sole. @Item made in Italy." ,
          "categories":["Sneakers", "Man"],
          "colors": ["Black"],
          "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
          "images":[
              {
                  "color":"Black",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+8/Rivoli-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+8/Rivoli-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+8/Rivoli-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+8/Rivoli-modelo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+8/Rivoli-modelo2.webp"]
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
          "name":"LV Run Away",
          "brand":"Louis Vuitton",
          "description":"The Run Away sneakers, inspired by classic running shoe models, are one of Louis Vuitton's most iconic styles. This version is crafted in iridescent fabric featuring the Monogram motif, and it includes a calf leather trim. Its lightweight and highly comfortable design is distinguished by a technical rubber sole with meticulously hand-finished details.",
          "specifications":"@Black color. @Iridescent fabric and calfskin leather. @Hand-finished technical rubber sole. @LV logo on the tongue and Louis Vuitton emblem on the back." ,
          "categories":["Sneakers", "Man"],
          "colors": ["Black"],
          "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
          "images":[
              {
                  "color":"Black",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+9/RunAway-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+9/RunAway-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+9/RunAway-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+9/RunAway-modelo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+9/RunAway-zoom.webp"]
              }        
          ],
          "price": 1200,
          "stock": [
              {
                  "color":"Black",
                  "stock":100,
                  "sold":0
              }
          ]
      },
      {
          "name":"LV Run Away GRY",
          "brand":"Louis Vuitton",
          "description":"This season's Run Away sneakers are crafted in a combination of mesh and calf leather suede. This iconic design, inspired by running shoe models, features an ultra-light micro sole adorned with Monogram Flowers. The side of the piece incorporates an LV Initials logo with a comet-like trail.",
          "specifications":"@Black color. @Mesh and calfskin suede. @Micro sole. @LV Initials logo on the side. @Louis Vuitton emblem on the tongue and back. @Monogram Flowers on the sole." ,
          "categories":["Sneakers", "Man"],
          "colors": ["Black"],
          "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
          "images":[
              {
                  "color":"Black",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+10/RunAway-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+10/RunAway-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+10/RunAway-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+10/RunAway-brand.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+10/RunAway-modelo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+10/RunAway-modelo2.webp"]
              }        
          ],
          "price": 1460,
          "stock": [
              {
                  "color":"Black",
                  "stock":100,
                  "sold":0
              }
          ]
      },
      {
          "name":"LV Charlie",
          "brand":"Louis Vuitton",
          "description":"The Charlie sneakers are Louis Vuitton's first eco-friendly model. 90% of this unisex design is crafted from sustainable raw materials: the upper features a blend of recycled and bio-based materials, while the sole is made from renewable-source bioplastic. The oversized LV initials are displayed on the side, and the rear boasts a nylon trim with a Monogram motif, also incorporating the LV upcycled logo on the tongue.",
          "specifications":"@Café cacao color. @Blend of sustainable recycled and bio-based materials. @Nylon edging with Monogram motif. @Bioplastic sole made from renewable sources. @LV initials engraved on the side. @Supercycled LV logo engraved on the tongue. @Louis and Vuitton emblems engraved on the tongue. @LV emblem engraved on the sole. Monogram motif engraved beneath the sole. @Item made in Italy." ,
          "categories":["Sneakers", "Man"],
          "colors": ["White"],
          "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
          "images":[
              {
                  "color":"White",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+11/Charlie-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+11/Charlie-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+11/Charlie-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+11/Charlie-brand.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+11/Charlie-modelo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+11/Charliemodelo2.webp"]
              }        
          ],
          "price": 1300,
          "stock": [
              {
                  "color":"White",
                  "stock":100,
                  "sold":0
              }
          ]
      },
      {
          "name":"Mocasín LV Driver",
          "brand":"Louis Vuitton",
          "description":"The LV Driver moccasin, crafted in grained Monogram calf leather, is the first driving shoe created by Virgil Abloh. The model features a tubular construction for flexibility and lightness, with a hand-stitched upper using traditional techniques. The design is elevated with colorful details, such as rubber pads on the sole and LV initials on the lace tips.",
          "specifications":"@Ebene color. @Grained Monogram calfskin leather. @Hand-stitched upper (one hour per pair). @Tubular construction. @Large rubber-studded sole. @LV initials engraved on lace tips. Monogram motif engraved beneath the sole. @Item made in Italy." ,
          "categories":["Sneakers", "Man"],
          "colors": ["Brown","Black"],
          "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
          "images":[
              {
                  "color":"Brown",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+12/Ebene/MocasinDriver-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+12/Ebene/MocasinDriver-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+12/Ebene/MocasinDriver-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+12/Ebene/MocasinDriver-brand.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+12/Ebene/MocasinDriver-modelo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+12/Ebene/MocasinDriver-modelo2.webp"]
              },
              {
                  "color":"Black",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+12/Eclipste/MocasinDriver-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+12/Eclipste/MocasinDriver-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+12/Eclipste/MocasinDriver-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+12/Eclipste/MocasinDriver-brand.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+12/Eclipste/MocasinDriver-modelo.webp"]
              }        
          ],
          "price": 1050,
          "stock": [
              {
                  "color":"Brown",
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
          "name":"Mocasin LV Major",
          "brand":"Louis Vuitton",
          "description":"The Major moccasin is a classic style from Louis Vuitton. Updated with the iconic Damier pattern in Graphite gray, its design is enhanced with shiny calf leather details and a metallic silver LV initials ornament. Its leather and rubber sole is both durable and slip-resistant.",
          "specifications":"@Canvas Damier. @Gris Graphite color. @Moccasin construction. @LV Initials ornament. @Sole with small rubber studs." ,
          "categories":["Sneakers", "Man"],
          "colors": ["Gray"],
          "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
          "images":[
              {
                  "color":"Gray",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+13/MocasinMajor-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+13/MocasinMajor-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+13/MocasinMajor-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+13/MocasinMajor-brand.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+13/MocasinMajor-modelo.webp"]
              }        
          ],
          "price": 2100,
          "stock": [
              {
                  "color":"Gray",
                  "stock":100,
                  "sold":0
              }
          ]
      },
      {
          "name":"LV Skate",
          "brand":"Louis Vuitton",
          "description":"This exceptional version of the LV Skate sneakers combines Monogram denim fabric, sparkling Swarovski™ crystals, and technical mesh. The model features a padded top edge and a tongue adorned with an LV Since 1854 logo, referencing Louis Vuitton's founding year. The design embraces a 90s-inspired style and is completed with dual laces and a two-tone rubber sole.",
          "specifications":"@Black color. @Swarovski™ crystals and Monogram denim. @Double laces. @Rubber sole. @LV since 54 logo engraved on the tongue and back. Monogram Flowers on the side and sole. @Item made in Italy." ,
          "categories":["Sneakers", "Man"],
          "colors": ["Black"],
          "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
          "images":[
              {
                  "color":"Black",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+14/LVSkate-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+14/LVSkate-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+14/LVSkate-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+14/LVSkate-modelo.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+14/LVSkate-modelo2.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+14/LVSkate.mp4"]
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
          "name":"Rivoli BCKT",
          "brand":"Louis Vuitton",
          "description":"This season's version of the Rivoli sneakers, one of Louis Vuitton's iconic styles, combines two types of Monogram Canvas: Eclipse and Reverse. This design features an adjustable Velcro strap that can be worn forwards or backwards. It's completed with black leather trim, a white rubber sole, and silver LV initials on the tongue.",
          "specifications":"@Eclipse color. @Monogram Canvas and @Monogram Reverse Canvas. @Rubber sole. @Louis Vuitton emblem on the strap. @LV initials on the tongue. @Item made in Italy." ,
          "categories":["Sneakers", "Man"],
          "colors": ["Black"],
          "sizes": ["8","8.5","9","9.5","10","10.5","11","11.5","12","12.5","13"],
          "images":[
              {
                  "color":"Black",
                  "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+15/LVRivoliYK-front.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+15/LVRivoliYK-back.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+15/LVRivoliYK-horizontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+15/LVRivoliYK-modelo1.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/LV/Sneakers/Modelo+15/LVRivoliYK-modelo2.webp"]
              }        
          ],
          "price": 1200,
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

app.get("/fendi/women/:token", (req, res)=>{
  if(req.params.token === TOKEN){
    res.status(200).json([
      {
        "name": "O’Lock Loafers",
        "brand": "Fendi",
        "description": "Loafer with exposed stitching on the upper and decorated toe with Fendi O'Lock detail. Manufactured in black nubuck. Gray and black jacquard FF fabric bandana. Tone-on-tone enamelled metal accessory. Embossed rubber sole. Made in Italy",
        "specification": "65% cotton, 35% polyester, 100% calf leather; interior: 100% calfskin",
        "categories": ["Sneakers", "Women"],
        "colors": ["black"],
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
            "color": "black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockLoafer_color3_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockLoafer_color3_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockLoafer_color3_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockLoafer_color3_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockLoafer_color3_05.avif"
            ]
          }
        ],
        "price": "$930.00",
        "stock": [
          {
            "color": "black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "O’Lock Loafers",
        "brand": "Fendi",
        "description": "Loafer with exposed stitching on the upper and decorated toe with Fendi O'Lock detail. Made of black leather with jacquard fabric application with the FF logo. Metallic accessories with gold finish. Made in Italy",
        "specification": "65% polyamide, 35% cotton, 55% cotton, 45% polyamide; lining: 100% resin, 100% calfskin; interior: 100% calfskin",
        "categories": ["Sneakers", "Women"],
        "colors": ["black"],
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
            "color": "black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockLoafer_color1_01.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockLoafer_color1_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockLoafer_color1_03.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockLoafer_color1_04.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockLoafer_color1_05.avif"
            ]
          }
        ],
        "price": "$930.00",
        "stock": [
          {
            "color": "black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "O’Lock Loafers",
        "brand": "Fendi",
        "description": "Loafers with visible stitched shoe apron and upper decorated with Fendi O’Lock detail. Made of blue denim with jacquard FF motif on the shoe apron. Blue leather profiles. Palladium-finish metal accessories. Made in Italy",
        "specification": "65% Cotton, 35% Polyester, 100% Calfskin, interior: 100% Calfskin",
        "categories": ["Sneakers", "Women"],
        "colors": ["blue"],
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
            "color": "blue",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockLoafer_color2_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockLoafer_color2_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockLoafer_color2_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockLoafer_color2_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockLoafer_color2_05.jpg"
            ]
          }
        ],
        "price": "$930.00",
        "stock": [
          {
            "color": "blue",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "O’Lock Driving Loafers",
        "brand": "Fendi",
        "description": "Driver model moccasin. Flexible non-slip rubber sole. Manufactured in black leather. Finished in Fendi Shadow leather with a tone-on-tone textured striped FF motif. Fendi O'Lock buckle in black enamelled metal. Made in Italy",
        "specification": "100%calfleather, inside:100%calfleather",
        "categories": ["Sneakers", "Women"],
        "colors": ["black"],
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
            "color": "black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockDrivingLoafer_color1_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockDrivingLoafer_color1_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockDrivingLoafer_color1_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockDrivingLoafer_color1_04.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockDrivingLoafer_color1_05.avif"
            ]
          }
        ],
        "price": "$870.00",
        "stock": [
          {
            "color": "black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "O’Lock Driving Loafers",
        "brand": "Fendi",
        "description": "Driver model moccasin. Flexible non-slip rubber sole. Made of brown alligator with tone-on-tone smooth leather details. Finished with a gold-finish metal Fendi O'Lock buckle. Made in Italy",
        "specification": "100% alligator skin; 100% calfskin; interior: 100% calfskin",
        "categories": ["Sneakers", "Women"],
        "colors": ["brown"],
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
            "color": "brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockDrivingLoafer_color3_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockDrivingLoafer_color3_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockDrivingLoafer_color3_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockDrivingLoafer_color3_04.avif",
              ""
            ]
          }
        ],
        "price": "$870.00",
        "stock": [
          {
            "color": "brown",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "O’Lock Driving Loafers",
        "brand": "Fendi",
        "description": "Driving loafers. Flexible pebble soles. Made of beige nubuck leather with a tone-on-tone Fendi Shadow nubuck saddle strap with a textured stripe FF motif. Embellished with a Fendi O’Lock buckle in black enameled metal. Made in Italy",
        "specification": "100% Calfskin, interior: 100% Calfskin",
        "categories": ["Sneakers", "Women"],
        "colors": ["brown"],
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
            "color": "brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockDrivingLoafer_color2_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockDrivingLoafer_color2_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockDrivingLoafer_color2_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockDrivingLoafer_color2_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_O'LockDrivingLoafer_color2_05.jpg"
            ]
          }
        ],
        "price": "$870.00",
        "stock": [
          {
            "color": "brown",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "FF Squared moccasin",
        "brand": "Fendi",
        "description": "Moccasin with FF Squared motif. Made of beige leather. Leather sole. Metallic accessories with palladium finish. Made in Italy",
        "specification": "100% calfskin; interior: 100% calfskin",
        "categories": ["Sneakers", "Women"],
        "colors": ["beige"],
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
            "color": "beige",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_FFSquared_color1_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_FFSquared_color1_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_FFSquared_color1_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_FFSquared_color1_04.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_FFSquared_color1_05.webp"
            ]
          }
        ],
        "price": "$770.00",
        "stock": [
          {
            "color": "beige",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "FF Squared moccasin",
        "brand": "Fendi",
        "description": "Driver model moccasin. Flexible non-slip rubber sole. Made of blue leather. It features a matching ribbon with a palladium-finish metal FF Squared detail. Made in Italy",
        "specification": "100% calfskin; interior: 100% calfskin",
        "categories": ["Sneakers", "Women"],
        "colors": ["blue"],
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
            "color": "blue",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_FFSquared_color2_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_FFSquared_color2_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_FFSquared_color2_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_FFSquared_color2_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_FFSquared_color2_05.jpg"
            ]
          }
        ],
        "price": "$770.00",
        "stock": [
          {
            "color": "blue",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Match",
        "brand": "Fendi",
        "description": "Compact Fendi Match sneaker with vintage label on the tongue. Customized with the FF pattern stitched on the side and the Fendi lettering embossed on the sole. Made of suede and leather in white tones. Finished with a shaft and tone-on-tone terry cloth laces. Rubber box sole covered with beige protectors. Made in Italy",
        "specification": "100% calfskin; internal part: 69% polyester, 28% polyamide, 3% elastane",
        "categories": ["Sneakers", "Women"],
        "colors": ["white"],
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
            "color": "white",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Match_color1_01.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Match_color1_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Match_color1_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Match_color1_04.jpg"
            ]
          }
        ],
        "price": "$770.00",
        "stock": [
          {
            "color": "white",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Match",
        "brand": "Fendi",
        "description": "Compact Fendi Match sneaker with vintage label on the tongue. Customized with the FF pattern stitched on the side and the Fendi lettering embossed on the sole. Made of black suede with white leather details. Finished with shaft and black terry laces. Rubber box sole lined with brown protectors. The model includes a second pair of white terry cloth laces. Made in Italy",
        "specification": "100% calfskin; internal part: 69% polyester, 28% polyamide, 3% elastane",
        "categories": ["Sneakers", "Women"],
        "colors": ["black"],
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
            "color": "black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Match_color2_01.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Match_color2_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Match_color2_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Match_color2_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Match_color2_05.avif"
            ]
          }
        ],
        "price": "$810.00",
        "stock": [
          {
            "color": "black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Match",
        "brand": "Fendi",
        "description": "Fendi Match lace-up sneaker. Made of dark gray suede with white and gray leather details. Rubber sole with the Fendi inscription on one side. Made in Italy",
        "specification": "100% calfskin; inner: 69% polyester, 28% polyamide, 3% elastane",
        "categories": ["Sneakers", "Women"],
        "colors": ["grey"],
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
            "color": "grey",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Match_color3_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Match_color3_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Match_color3_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Match_color3_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Match_color3_05.jpg"
            ]
          }
        ],
        "price": "$790.00",
        "stock": [
          {
            "color": "grey",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Sport Shoe",
        "brand": "Fendi",
        "description": "Fendi Match lace-up sneaker. Made of dark brown alligator with black nylon details. Model finished with bead embroidery. Rubber sole with the Fendi inscription on one side. Made in Italy",
        "specification": "100% alligator skin, 72% viscose, 28% silk; embroidery 1: 100% glass, 100% urea, 100% polyester, 100% calfskin, inside: 69% polyester, 28% polyamide, 3% elastane",
        "categories": ["Sneakers", "Women"],
        "colors": ["black"],
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
            "color": "black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Deportivas_color1_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Deportivas_color1_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Deportivas_color1_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Deportivas_color1_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Deportivas_color1_05.avif"
            ]
          }
        ],
        "price": "$790.00",
        "stock": [
          {
            "color": "black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Domino",
        "brand": "Fendi",
        "description": "Compact, light design Fendi Domino sneakers. Made of regenerated nylon with a blue FF Flash jacquard motif. Rubber cupsole with embossed FF motif on the toe. Made in Italy",
        "specification": "100%polyester, inside:100%cotton",
        "categories": ["Sneakers", "Women"],
        "colors": ["blue"],
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
            "color": "blue",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Domino_color3_01.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Domino_color3_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Domino_color3_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Domino_color3_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Domino_color3_05.jpg"
            ]
          }
        ],
        "price": "$650.00",
        "stock": [
          {
            "color": "blue",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Domino",
        "brand": "Fendi",
        "description": "Fendi Domino sneaker with a compact and lightweight design. Made of fabric with a jacquard FF motif. Rubber box sole with embossed FF motif on the toe. Made in Italy",
        "specification": "100% calfskin; inner: 69% polyester, 28% polyamide, 3% elastane",
        "categories": ["Sneakers", "Women"],
        "colors": ["brown", "grey"],
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
            "color": "brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Domino_color1_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Domino_color1_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Domino_color1_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Domino_color1_04.avif"
            ]
          },
          {
            "color": "grey",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Domino_color2_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Domino_color2_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Domino_color2_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Domino_color2_04.jpg"
            ]
          }
        ],
        "price": "$750.00",
        "stock": [
          {
            "color": "brown",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "grey",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Domino Boots",
        "brand": "Fendi",
        "description": "Fendi Domino sneaker with a compact and lightweight design. Made of fabric with a jacquard FF motif. Rubber box sole with embossed FF motif on the toe. Made in Italy",
        "specification": "100% calfskin; inner: 69% polyester, 28% polyamide, 3% elastane",
        "categories": ["Sneakers", "Women"],
        "colors": ["brown", "grey"],
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
            "color": "brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_DominoBotita_color1_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_DominoBotita_color1_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_DominoBotita_color1_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_DominoBotita_color1_04.jpg"
            ]
          },
          {
            "color": "grey",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_DominoBotita_color2_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_DominoBotita_color2_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_DominoBotita_color2_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_DominoBotita_color2_04.jpg"
            ]
          }
        ],
        "price": "$750.00",
        "stock": [
          {
            "color": "brown",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "grey",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Faster Trainer",
        "brand": "Fendi",
        "description": "Running-style sneaker with embossed FF motif on the sides. Wavy sole with FF on the toe. Made of nubuck with tone-on-tone leather details. Made in Italy",
        "specification": "100% calfskin, 100% polyester, 100% cotton, 65% polyamide, 35% cotton; inner part: 100% polyamide, 100% polyester",
        "categories": ["Sneakers", "Women"],
        "colors": ["white", "red", "black"],
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
            "color": "white",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_FasterTrainer_color1_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_FasterTrainer_color1_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_FasterTrainer_color1_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_FasterTrainer_color1_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_FasterTrainer_color1_05.jpg"
            ]
          },
          {
            "color": "red",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_FasterTrainer_color3_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_FasterTrainer_color3_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_FasterTrainer_color3_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_FasterTrainer_color3_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_FasterTrainer_color3_05.jpg"
            ]
          },
          {
            "color": "black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_FasterTrainer_color2_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_FasterTrainer_color2_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_FasterTrainer_color2_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_FasterTrainer_color2_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_FasterTrainer_color2_05.jpg"
            ]
          }
        ],
        "price": "$800.00",
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
        "name": "Flow",
        "brand": "Fendi",
        "description": "Slip-on sneaker with elastic bands, side zip and wavy sole with grooved F. Embossed Fendi Flow lettering on the heels. Tongue with FF motif. EVA rubber sole. Made in Italy",
        "specification": "100 % poliéster, 100 % piel de becerro, 80 % poliamida, 20 % elastano; parte interna: 100 % poliéster",
        "categories": ["Sneakers", "Women"],
        "colors": ["white", "blue", "black"],
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
            "color": "white",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Flow_color3_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Flow_color3_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Flow_color3_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Flow_color3_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Flow_color3_05.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Flow_color3_06.jpg"
            ]
          },
          {
            "color": "blue",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Flow_color2_01.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Flow_color2_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Flow_color2_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Flow_color2_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Flow_color2_05.jpg"
            ]
          },
          {
            "color": "black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Flow_color1_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Flow_color1_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Flow_color1_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Flow_color1_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Flow_color1_05.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Flow_color1_06.jpg"
            ]
          }
        ],
        "price": "$870.00",
        "stock": [
          {
            "color": "white",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "blue",
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
        "name": "Force",
        "brand": "Fendi",
        "description": "Fendi Force lace-up sneaker. Manufactured in black leather. Details of FF jacquard fabric in shades of gray and black and collar finished in LYCRA®. Made in Italy",
        "specification": "100% calf leather, 80% polyamide, 20% elastane, 65% polyamide, 35% cotton; inner: 65% polyamide; 35% cotton, 100% calfskin",
        "categories": ["Sneakers", "Women"],
        "colors": ["black", "brown"],
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
            "color": "black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_ForceCordones_color1_01.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_ForceCordones_color1_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_ForceCordones_color1_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_ForceCordones_color1_04.avif"
            ]
          },
          {
            "color": "brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_ForceCordones_color2_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_ForceCordones_color2_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_ForceCordones_color2_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_ForceCordones_color2_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_ForceCordones_color2_05.jpg"
            ]
          }
        ],
        "price": "$950.00",
        "stock": [
          {
            "color": "black",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "brown",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Force",
        "brand": "Fendi",
        "description": "Fendi Force lace-up ankle boot. Made of black leather with FF jacquard fabric details in gray and black tones. Inner side zipper for easy putting on. It has a lightweight rubber sole with embossed FF detail on the heel. Made in Italy",
        "specification": "100% calf leather, 65% polyamide, 35% cotton, 95% polyester, 5% polyurethane; interior: 100% calfskin",
        "categories": ["Sneakers", "Women"],
        "colors": ["black"],
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
            "color": "black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_ForceBotas_color1_01.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_ForceBotas_color1_02.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_ForceBotas_color1_03.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_ForceBotas_color1_04.avif"
            ]
          }
        ],
        "price": "$950.00",
        "stock": [
          {
            "color": "black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Force",
        "brand": "Fendi",
        "description": "Fendi Force après ski style boot with adjustable lace. Made of waterproof fabric with jacquard FF motif in black and gray tones and black leather. Featuring a fleece lining and a lightweight rubber sole with an embossed FF detail to the toe. Made in Italy",
        "specification": "100% calfskin; 65% polyester, 35% cotton; coating: 100% polyurethane; 88% polyamide, 12% elastane; inner: 100% polyamide; 100% polyester",
        "categories": ["Sneakers", "Women"],
        "colors": ["black"],
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
            "color": "black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_ForceBotas_color3_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_ForceBotas_color3_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_ForceBotas_color3_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_ForceBotas_color3_04.jpg"
            ]
          }
        ],
        "price": "$880.00",
        "stock": [
          {
            "color": "black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Force",
        "brand": "Fendi",
        "description": "Fendi Force Loafers. Made of black leather. Fabric detail with gray and black FF motif on the toe box. Lightweight rubber sole with debossed FF detailing on the toe and heel. Made in Italy",
        "specification": "100% calf leather, 65% polyester, 35% cotton, inside: 100% lamb leather",
        "categories": ["Sneakers", "Women"],
        "colors": ["black"],
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
            "color": "black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Force_color1_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Force_color1_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Force_color1_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Force_color1_04.jpg"
            ]
          }
        ],
        "price": "$940.00",
        "stock": [
          {
            "color": "black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Force",
        "brand": "Fendi",
        "description": "Fendi Force lace-up ankle boots. Made of black suede. Tonal sheepskin details and interior. The zipper is on the inside for more comfortable wearing. Lightweight rubber sole with FF detailing at the toe. Made in italy",
        "specification": "100% Pure Calfskin, 100% Pure Sheep Fur, Inside: 100% Pure Sheep Fur, 100% Pure Calfskin",
        "categories": ["Sneakers", "Women"],
        "colors": ["brown"],
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
            "color": "brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_ForceBotas_color2_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_ForceBotas_color2_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_ForceBotas_color2_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_ForceBotas_color2_04.jpg"
            ]
          }
        ],
        "price": "$1080.00",
        "stock": [
          {
            "color": "brown",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Force",
        "brand": "Fendi",
        "description": "Fendi Force lace-up sneakers. Made of brown FF Vertigo jacquard fabric. Embellished with Lycra® piping and matching rubber eyelets. Light rubber sole with embossed FF detail on the toe. Made in Italy",
        "specification": "65%polyester, 35%cotton, material2:100%calfleather, material3:80%polyamide, 20%elastane, inside:100%polyamide, inside:100%polyester",
        "categories": ["Sneakers", "Women"],
        "colors": ["brown"],
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
            "color": "brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_ForceBotitas_color1_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_ForceBotitas_color1_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_ForceBotitas_color1_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_ForceBotitas_color1_04.avif"
            ]
          }
        ],
        "price": "$880.00",
        "stock": [
          {
            "color": "brown",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Frame",
        "brand": "Fendi",
        "description": "Moccasin with a hand-stitched upper and toe cap decorated with the FF Baguette motif. It presents a rubber sole with an F detail engraved on one of its sides. Made in Italy",
        "specification": "100% calfskin; interior: 100% calfskin",
        "categories": ["Sneakers", "Women"],
        "colors": ["black", "#bf8a3d"],
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
            "color": "black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Frame_color1_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Frame_color1_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Frame_color1_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Frame_color1_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Frame_color1_05.jpg"
            ]
          },
          {
            "color": "#bf8a3d",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Frame_color2_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Frame_color2_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Frame_color2_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Frame_color2_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_Frame_color2_05.jpg"
            ]
          }
        ],
        "price": "$970.00",
        "stock": [
          {
            "color": "black",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "#bf8a3d",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Frame lace-up",
        "brand": "Fendi",
        "description": "Shoe with the upper part sewn by hand and with lace closure. It presents a rubber sole with an F detail engraved on one of its sides. Made in Italy",
        "specification": "100% calfskin; interior: 100% calfskin",
        "categories": ["Sneakers", "Women"],
        "colors": ["black", "brown"],
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
            "color": "black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_FrameCordones_color3_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_FrameCordones_color3_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_FrameCordones_color3_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_FrameCordones_color3_04.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_FrameCordones_color3_05.avif"
            ]
          },
          {
            "color": "brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_FrameCordones_color2_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_FrameCordones_color2_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_FrameCordones_color2_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_FrameCordones_color2_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_FrameCordones_color2_05.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Sneakers/fendi_zapato_FrameCordones_color2_06.avif"
            ]
          }
        ],
        "price": "$970.00",
        "stock": [
          {
            "color": "black",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "brown",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Baguette Bag",
        "brand": "Fendi",
        "description": "Iconic medium-sized Baguette bag, made with an all-over embroidery of dove gray metallic sequins in different shapes and sizes. Decorated with FF closure. It has a front flap, leather details, tone-on-tone bead embroidery and a magnetic closure. It features an interior compartment lined in silk with a zippered pocket and metallic accessories with a gold finish. It can be carried by hand, on the shoulder or across the body thanks to the removable handle and shoulder strap. Made in Italy",
        "specification": "@Height: 15 cm @Depth: 6 cm @Width : 27cm",
        "categories": ["bags", "Women", "underarm"],
        "colors": ["silver"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "silver",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_baguette_color4_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_baguette_color4_02.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_baguette_color4_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_baguette_color4_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_baguette_color4_05.avif"
            ]
          }
        ],
        "price": "$5100.00",
        "stock": [
          {
            "color": "silver",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Baguette Bag",
        "brand": "Fendi",
        "description": "Iconic medium-sized Baguette bag, made in natural-colored canvas with the FF motif embroidered in relief in multicolor thread. Model finished in dove gray leather and decorated with an FF clasp. It features a front flap, magnetic button closure, an interior compartment with a zip pocket and metal accessories with a vintage gold finish. It can be carried by hand, on the shoulder or across the body thanks to the removable handle and shoulder strap. Made in Italy",
        "specification": "@Height: 15 cm @Depth: 6 cm @Width : 27cm",
        "categories": ["bags", "Women", "underarm"],
        "colors": ["white"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "white",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_baguette_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_baguette_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_baguette_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_baguette_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_baguette_05.avif"
            ]
          }
        ],
        "price": "$5100.00",
        "stock": [
          {
            "color": "white",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Baguette Bag",
        "brand": "Fendi",
        "description": "Iconic medium-sized Baguette bag, made of jacquard fabric with FF motif in brown tones, decorated with FF closure and finished with black embroidered trims. It features a front flap, magnetic button closure, an unlined interior compartment with a zippered pocket and gold-finish metal accessories. It can be carried by hand, on the shoulder or across the body thanks to the handle and the shoulder strap with the Fendi Label motif, both of which are removable. Made in Italy",
        "specification": "@Height: 15 cm @Depth: 6 cm @Width : 27cm @Weight : 0.6kg @Strap length (min.) : 90 cm @Leash length (max.) : 90 cm @Shoulder strap drop: 41 cm",
        "categories": ["bags", "Women", "underarm"],
        "colors": ["brown"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_baguette_color3_01.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_baguette_color2_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_baguette_color2_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_baguette_color2_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_baguette_color2_05.jpg"
            ]
          }
        ],
        "price": "$5100.00",
        "stock": [
          {
            "color": "brown",
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
        "categories": ["bags", "Women", "underarm"],
        "colors": ["brown"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_C'mon_color1_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_C'mon_color1_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_C'mon_color1_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_C'mon_color1_04.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_C'mon_color1_05.jpg"
            ]
          }
        ],
        "price": "$1250.00",
        "stock": [
          {
            "color": "brown",
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
        "categories": ["bags", "Women", "underarm"],
        "colors": ["white"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "white",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_C'mon_color3_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_C'mon_color3_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_C'mon_color3_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_C'mon_color3_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_C'mon_color3_05.avif"
            ]
          }
        ],
        "price": "$2490.00",
        "stock": [
          {
            "color": "white",
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
        "categories": ["bags", "Women", "underarm"],
        "colors": ["grey"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "grey",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_C'mon_color2_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_C'mon_color2_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_C'mon_color2_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_C'mon_color2_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_C'mon_color2_05.jpg"
            ]
          }
        ],
        "price": "$2490.00",
        "stock": [
          {
            "color": "grey",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Baguette Bag",
        "brand": "Fendi",
        "description": "Fendi celebrates 25 years of the Baguette bag with 25 re-editions of the famous “under-the-arm” bag’s most iconic archived styles. The Baguette #12 is inspired by the “sequin embroidery” Baguette from the Fall/Winter 1999-2000 collection. The bag is entirely embroidered by hand with 9,200 square sequins and around 3,000 micro-beads for a pink color-block effect. Finished with red elaphe details. Decorated with an FF clasp and featuring a front flap, magnetic clasp, internal compartment with zipper pocket, a “Baguette Fendi Re-Edition” plate and palladium-finish metalware. The bag can be carried by hand, or worn either on the shoulder or cross-body thanks to the elaphe shoulder strap and handle, both detachable. Made in Italy",
        "specification": "@Height: 15 cm @Depth: 6 cm @Width : 27cm",
        "categories": ["bags", "Women", "underarm"],
        "colors": ["pink"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "pink",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_baguette_color2_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_baguette_color2_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_baguette_color2_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_baguette_color2_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_baguette_color2_05.jpg"
            ]
          }
        ],
        "price": "$5100.00",
        "stock": [
          {
            "color": "pink",
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
        "categories": ["bags", "Women", "underarm"],
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
        "price": "$2500.00",
        "stock": [
          {
            "color": "#746e50",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      
      {
        "name": "Peekaboo Mini Bag Leather",
        "brand": "Fendi",
        "description": "Iconic Peekaboo ISeeU bag in an ideal compact size. Made of fabric with a jacquard FF motif fully embroidered with transparent sequins with a shiny effect. Decorated with the unmistakable twist lock on both sides. It has tone-on-tone lined interiors, two compartments divided by a rigid partition, an interior pocket and gold-finish metal accessories. It can be carried by hand or across the body using the handle and the adjustable and removable shoulder strap. Made in Italy",
        "specification": "@Height: 15.5cm @Depth: 11cm @Width : 20cm",
        "categories": ["bags", "Women", "underarm"],
        "colors": ["brown"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_PeekabooMini_color1_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_PeekabooMini_color1_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_PeekabooMini_color1_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_PeekabooMini_color1_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_PeekabooMini_color1_05.jpg"
            ]
          }
        ],
        "price": "$2500.00",
        "stock": [
          {
            "color": "brown",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Peekaboo Medium Bag Camellia Leather",
        "brand": "Fendi",
        "description": "Iconic medium-sized Peekaboo ISeeU bag, made of camellia leather and exquisitely embellished with a floral motif embroidered in white thread. Decorated with the unmistakable twist lock on both sides. It has interiors lined with soft tone-on-tone nappa leather visible from the outside, two compartments divided by a rigid partition, a removable and customizable interior bag, and gold-finish metal accessories. It can be carried by hand or on the shoulder using the handle and the adjustable and removable shoulder strap. Made in Italy",
        "specification": "@Height: 25.5cm @Depth: 13cm @Width : 33.5cm",
        "categories": ["bags", "Women", "underarm"],
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
        "price": "$5800.00",
        "stock": [
          {
            "color": "#fffce7",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Peekaboo Medium Bag Jacquard",
        "brand": "Fendi",
        "description": "Iconic medium-size Peekaboo ISeeU bag, made of fabric with a jacquard FF motif completely embroidered with transparent sequins with a shiny effect. Decorated with the unmistakable twist lock on both sides. It has tone-on-tone lined interiors visible from the outside, two compartments divided by a rigid partition, a removable and customizable interior pocket, and gold-finish metal accessories. It can be carried by hand or on the shoulder using the handle and the adjustable and removable shoulder strap. Made in Italy",
        "specification": "@Height: 25.5cm @Depth: 13cm @Width : 33.5cm",
        "categories": ["bags", "Women", "underarm"],
        "colors": ["brown"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_PeekabooMedium_color1_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_PeekabooMedium_color1_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_PeekabooMedium_color1_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_PeekabooMedium_color1_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_PeekabooMedium_color1_05.jpg"
            ]
          }
        ],
        "price": "$5800.00",
        "stock": [
          {
            "color": "brown jacquard",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Peekaboo Medium Bag Cuoio",
        "brand": "Fendi",
        "description": "Iconic medium size Peekaboo ISeeU bag, made of brown Cuoio Romano leather and finished with large tone-on-tone handmade stitching. Decorated with the unmistakable twist lock on both sides. It has lined interiors visible from the outside with the Selleria leather seal, two compartments divided by a rigid partition, a removable and customizable interior pocket, and palladium-finish metal accessories. It can be carried by hand or on the shoulder using the handle and the adjustable and removable shoulder strap. Made in Italy",
        "specification": "@Height: 25.5cm @Depth: 13cm @Width : 33.5cm",
        "categories": ["bags", "Women", "underarm"],
        "colors": ["brown"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_PeekabooMedium_color3_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_PeekabooMedium_color3_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_PeekabooMedium_color3_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_PeekabooMedium_color3_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_PeekabooMedium_color3_05.jpg"
            ]
          }
        ],
        "price": "$5800.00",
        "stock": [
          {
            "color": "brown",
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
        "categories": ["bags", "Women", "underarm"],
        "colors": ["brown"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_KanU_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_KanU_02.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_KanU_03.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_KanU_04.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_KanU_05.avif"
            ]
          }
        ],
        "price": "$2500.00",
        "stock": [
          {
            "color": "brown",
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
        "categories": ["bags", "Women", "underarm"],
        "colors": ["brown", "white", "pink"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymini_color1_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymini_color1_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymini_color1_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymini_color1_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymini_color1_05.jpg"
            ]
          },
          {
            "color": "white",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymini_color2_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymini_color2_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymini_color2_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymini_color2_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymini_color2_05.jpg"
            ]
          },
          {
            "color": "pink",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymini_color3_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymini_color3_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymini_color3_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymini_color3_04.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymini_color3_05.avif"
            ]
          }
        ],
        "price": "$1950.00",
        "stock": [
          {
            "color": "brown",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "white",
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
        "name": "By the Way Medium",
        "brand": "Fendi",
        "description": "Iconic medium-sized Boston By The Way bag, made of leather with hot-stamped “FENDI ROMA” and fastened with a zip. It has a spacious lined interior, an interior zip pocket and palladium-finish metal accessories. It can be carried by hand thanks to the handles, on the shoulder or across the body thanks to the adjustable and removable shoulder strap. Made in Italy",
        "specification": "@Height : 15cm @Depth : 13cm @Width : 27cm; @Weight : 0.6kg @Strap length (min.) : 97 cm @Leash length (max.) : 115 cm @Shoulder strap drop: 48 cm",
        "categories": ["bags", "Women"],
        "colors": ["brown", "white", "pink"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymediano_color3_01.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymediano_color3_02.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymediano_color3_03.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymediano_color3_04.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymediano_color3_05.webp"
            ]
          },
          {
            "color": "white",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymediano_color1_01.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymediano_color1_02.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymediano_color1_03.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymediano_color1_04.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymediano_color1_05.avif"
            ]
          },
          {
            "color": "beige",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymediano_color2_01.webp",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymediano_color2_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymediano_color2_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymediano_color2_04.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_bythewaymediano_color2_05.avif"
            ]
          }
        ],
        "price": "$2150.00",
        "stock": [
          {
            "color": "brown",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "white",
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
        "name": "Mon Tresor Bag",
        "brand": "Fendi",
        "description": "Small Mon Tresor bucket bag, made of fabric with FF motif. Lined interior and metal accessories with a gold finish. The bag has two removable shoulder straps, one long and one short, to be worn on the shoulder or across the body. Made in Italy",
        "specification": "@Height : 18cm @Depth : 10cm @Width : 12cm",
        "categories": ["bags", "Women"],
        "colors": ["brown", "white", "#fffce7"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_MonTresor_color1_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_MonTresor_color1_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_MonTresor_color1_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_MonTresor_color1_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_MonTresor_color1_05.avif"
            ]
          },
          {
            "color": "white",
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
        "price": "$1950.00",
        "stock": [
          {
            "color": "brown",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "white",
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
        "categories": ["bags", "Women", "underarm"],
        "colors": ["brown", "pink", "#fffce7"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_firstsmall_color2_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_firstsmall_color2_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_firstsmall_color2_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_firstsmall_color2_04.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_firstsmall_color2_05.avif"
            ]
          },
          {
            "color": "pink",
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
        "price": "$4400.00",
        "stock": [
          {
            "color": "brown",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "pink",
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
        "categories": ["bags", "Women", "underarm"],
        "colors": ["brown", "pink", "black"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_fendigraphymini_color2_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_fendigraphymini_color2_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_fendigraphymini_color2_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_fendigraphymini_color2_04.avif"
            ]
          },
          {
            "color": "pink",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_fendigraphymini_color3_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_fendigraphymini_color3_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_fendigraphymini_color3_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_fendigraphymini_color3_04.avif"
            ]
          },
          {
            "color": "black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_fendigraphymini_color1_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_fendigraphymini_color1_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_fendigraphymini_color1_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_fendigraphymini_color1_04.avif"
            ]
          }
        ],
        "price": "$4400.00",
        "stock": [
          {
            "color": "brown",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "pink",
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
        "name": "Fendigraphy Medium Bag",
        "brand": "Fendi",
        "description": "Medium size hobo bag made of leather and decorated with the FENDI inscription in vintage palladium metal visible when worn under the arm. It features a zip fastener, an interior compartment lined in fabric and metal accessories with a palladium finish. It can be carried under the arm or across the body thanks to the adjustable and removable strap, and the hooks that allow a shoulder strap to be incorporated. Made in Italy",
        "specification": "@Height : 30cm @Depth : 11cm @Width : 36cm @Weight: 0.99kg @Shoulder strap drop: 29 cm",
        "categories": ["bags", "Women", "underarm"],
        "colors": ["brown", "white", "black"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "brown",
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
            "color": "white",
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
            "color": "black",
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
        "price": "$4400.00",
        "stock": [
          {
            "color": "brown",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "white",
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
        "name": "Mini Sunshine Shopper Bag",
        "brand": "Fendi",
        "description": "Mini size Sunshine shopper bag. Presents FENDI ROMA inscription applied to leather. It has a lined interior compartment, leather trims and metal accessories with a gold finish. It can be carried by hand or on the shoulder thanks to the two handles and the slim, adjustable and removable shoulder strap. Made in Italy",
        "specification": "@Height : 18cm @Depth : 6.5cm @Width : 13cm",
        "categories": ["bags", "Women", "underarm"],
        "colors": ["brown", "white", "black"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_SunshineShopper_color1_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_SunshineShopper_color1_02.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_SunshineShopper_color1_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_SunshineShopper_color1_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_SunshineShopper_color1_05.avif"
            ]
          },
          {
            "color": "white",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_SunshineShopper_color2_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_SunshineShopper_color2_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_SunshineShopper_color2_03.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_SunshineShopper_color2_04.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_SunshineShopper_color2_05.avif"
            ]
          }
        ],
        "price": "$1750.00",
        "stock": [
          {
            "color": "brown",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "white",
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
        "categories": ["bags", "Women"],
        "colors": ["brown", "#746e50", "black"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "brown",
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
            "color": "black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_sunshine_color2_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_sunshine_color3_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_sunshine_color3_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_sunshine_color3_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Bags/fendi_cartera_sunshine_color3_05.jpg"
            ]
          }
        ],
        "price": "$3190.00",
        "stock": [
          {
            "color": "brown",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "#746e50",
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
        "name": "FF Belt",
        "brand": "Fendi",
        "description": "Thin belt with loop and FF cufflink closure. Made of tobacco-colored leather with embossed mini FF motif. Metal accessories with vintage gold finish. Made in Italy",
        "specification": "100% calfskin; internal part: 100% calfskin",
        "categories": ["accesories", "belt"],
        "colors": ["brown"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/accesories_cinturon_FF_marron_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/accesories_cinturon_FF_marron_02.avif"
            ]
          }
        ],
        "price": "$370.00",
        "stock": [
          {
            "color": "brown",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Shawl",
        "brand": "Fendi",
        "description": "Wide, square shawl crafted in a soft blend of wool and silk. The timeless FF print features some of the brand's most iconic accessories. The Baguette and the Peekaboo are found inside the small arches that decorate the edge of the graphic pattern. Finished with hand frayed edges. Made in Italy",
        "specification": "90% modal, 10% cashmere",
        "categories": ["accesories", "shawl"],
        "colors": ["brown"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/accesories_chal_marron1_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/accesories_chal_marron1_02.avif"
            ]
          }
        ],
        "price": "$570.00",
        "stock": [
          {
            "color": "brown",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Shawl",
        "brand": "Fendi",
        "description": "Large shawl made of a soft wool and silk blend in brown. The luxurious jacquard weave reproduces the FF and Fendi Mirror logos with a 3D effect, allowing it to be worn in various ways. Suitable for all seasons. Made in Italy",
        "specification": "52% silk, 48% fleece wool",
        "categories": ["accesories", "shawl"],
        "colors": ["brown"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/accesories_chal_marron2_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/accesories_chal_marron2_02.avif"
            ]
          }
        ],
        "price": "$570.00",
        "stock": [
          {
            "color": "brown",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Charm porta Airpods Pro FF Diamonds",
        "brand": "Fendi",
        "description": "Airpods® Pro case with clip and personalized ring. Presents diagonal FF closure with magnetic button. Leather construction with embossed mini FF motif. Metallic accessories with gold finish. Made in Italy",
        "specification": "Measurements: @Height : 5 cm @Depth : 3 cm @Width : 7 cm",
        "categories": ["accesories", "airpods holder"],
        "colors": ["brown", "black", "pink"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/accesories_CharmportaAirpodsProFFDiamonds_marron1_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/accesories_CharmportaAirpodsProFFDiamonds_marron1_02.avif"
            ]
          },
          {
            "color": "black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/accesories_CharmportaAirpodsProFFDiamonds_negro_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/accesories_CharmportaAirpodsProFFDiamonds_negro_02.avif"
            ]
          },
          {
            "color": "pink",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/accesories_CharmportaAirpodsProFFDiamonds_rosa_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/accesories_CharmportaAirpodsProFFDiamonds_rosa_02.avif"
            ]
          }
        ],
        "price": "$420.00",
        "stock": [
          {
            "color": "brown",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "black",
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
        "name": "Hair Bands",
        "brand": "Fendi",
        "description": "Two silk covered hair bands. One features a graphic print with the brand's iconic motifs in shades of beige and brown. The other is embellished with FF pattern. Made in Italy",
        "specification": "100 % silk",
        "categories": ["accesories", "hair bands", "bands"],
        "colors": ["brown"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/accesories_goma_marronoscuroyclaro.avif"
            ]
          }
        ],
        "price": "$230.00",
        "stock": [
          {
            "color": "brown",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Wrappy",
        "brand": "Fendi",
        "description": "Wrappy reversible design. To wear around the neck, knotted on the wrist or to add a touch of color to bags. Silk making. One of its sides is decorated with a print made up of iconic elements of the brand in brown tones and the other presents a beige FF graphic pattern. Made in Italy",
        "specification": "100% silk",
        "categories": ["accesories", "hair bands", "bands"],
        "colors": ["brown"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/accesories_wrappy_marronclaro_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/accesories_wrappy_marronclaro_02.avif"
            ]
          }
        ],
        "price": "$170.00",
        "stock": [
          {
            "color": "brown",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "ForEver Ring",
        "brand": "Fendi",
        "description": "Wide band ring with two thin circles that can also be used as a bandana ring. Made of metal with a gold finish. Decorated with the FF motif enameled in black tones. Made in Italy",
        "specification": "100% brass",
        "categories": ["accesories", "ring"],
        "colors": ["gold"],
        "sizes": ["S", "M", "L"],
        "images": [
          {
            "color": "gold",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/fendi_ring_gold_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/fendi_ring_gold_02.avif"
            ]
          }
        ],
        "price": "$270.00",
        "stock": [
          {
            "color": "gold",
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
        "categories": ["accesories", "ring"],
        "colors": ["gold"],
        "sizes": ["S", "M", "L"],
        "images": [
          {
            "color": "gold",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/fendi_ring2_gold_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/fendi_ring2_gold_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/fendi_ring2_gold_03.avif"
            ]
          }
        ],
        "price": "$290.00",
        "stock": [
          {
            "color": "gold",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Fendigraphy",
        "brand": "Fendi",
        "description": "Letter D-shaped case in stainless steel with a shiny gold PVD coating. Crown with engraved FF logo. Champagne sunray dial, gold-colored indices and radial-cut gold-colored hands. 25mm rectangular link bracelet in gold PVD-coated stainless steel with tone-on-tone Fendi logo lettering. folding buckle",
        "specification": "100% stainless steel with yellow IP",
        "categories": ["accesories", "hair bands", "bands"],
        "colors": ["gold"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "gold",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/fendi_watch_gold_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/fendi_watch_gold_02.jpg"
            ]
          }
        ],
        "price": "$1300.00",
        "stock": [
          {
            "color": "gold",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Forever Necklace",
        "brand": "Fendi",
        "description": "Fine chain necklace with intertwined FF pendants. Made of metal with a gold finish. Made in Italy",
        "specification": "100% bronze",
        "categories": ["accesories", "watch"],
        "colors": ["gold"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "gold",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/fendi_necklace_gold_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/fendi_necklace_gold_02.jpg"
            ]
          }
        ],
        "price": "$380.00",
        "stock": [
          {
            "color": "gold",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "F Is Fendi Necklace",
        "brand": "Fendi",
        "description": "Chain necklace with ornaments in the F is Fendi logo shape. Small clip fastening and logo nameplate. Made of metal. Made in Italy",
        "specification": "100% Bronze, 100% Zircon",
        "categories": ["accesories", "watch"],
        "colors": ["gold","silver","pink"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "gold",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/fendi_FIsFendi_gold_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/fendi_FIsFendi_gold_02.avif"
            ]
          },
          {
            "color": "silver",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/fendi_FIsFendi_silver_01.avif"
            ]
          },
          {
            "color": "pink",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/fendi_necklace_gold_01.avif"
            ]
          }
        ],
        "price": "$430.00",
        "stock": [
          {
            "color": "gold",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "silver",
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
        "name": "Hard case for mobile phone",
        "brand": "Fendi",
        "description": "iPhone® 14 case with ring. Made of leather with embossed FF motif. Metallic accessories with gold finish. Made in Italy",
        "specification": "Medidas: @Height : 14.5 cm @Depth : 1.5 cm @Width : 7.5 cm",
        "categories": ["accesories", "Hard case", "case"],
        "colors": ["brown", "black", "pink"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "brown",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/accesories_funda_marron_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/accesories_funda_marron_02.avif"
            ]
          },
          {
            "color": "black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/accesories_funda_negro_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/accesories_funda_negro_02.avif"
            ]
          },
          {
            "color": "pink",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/accesories_funda_rosa_01.avif",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Inaki/Accesories/accesories_funda_rosa_02.avif"
            ]
          }
        ],
        "price": "$630.00",
        "stock": [
          {
            "color": "brown",
            "stock": "100",
            "sold": 0
          },
          {
            "color": "black",
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
        "name": "Delfina Brown fabric high-heeled sandals",
        "brand": "Fendi",
        "description": "Delfina round-toe sandals with an ankle strap. Made of FF jacquard fabric. Details in brown leather. Heel with cut-out detail and gold-colored metal FF motif. Made in Italy",
        "specification": "@Composition: 65% polyamide, 35% cotton, 100% calf leather, inside: 100% goat leather, @Heel height : 95 mm", 
        "categories": ["heels", "Women"],
        "colors": ["brown"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "brown",
            "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Delfina+Brown+fabric+high-heeled+sandals+atras.jpeg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Delfina+Brown+fabric+high-heeled+sandals+frontal.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Delfina+Brown+fabric+high-heeled+sandals+lateral.avif"]
          }
        ],
        "price": "$1050.00",
        "stock": [
          {
            "color": "brown",
            "stock": "100",
            "sold": 0
          }
        ]
      },
    {
      "name": "Delfina Black fabric high-heeled sandals",
      "brand": "Fendi",
      "description": "Delfina round-toe sandals with an ankle strap. Made of black karung. Heel with cut-out detail and gold-colored metal FF motif. Made in Italy",
      "specification": "100% Karung snake leather, interior: 100% Goatskin, @Heel height : 95 mm", 
      "categories": ["heels", "Women"],
      "colors": ["black"],
      "sizes": ["Default"],
      "images": [
        {
          "color": "black",
          "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Delfina+Black+leather+high-heeled+pumps+atras.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Delfina+Black+leather+high-heeled+pumps+lateral.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Delfina+Black+leather+high-heeled+pumps+Superior.avif"]
        }
      ],
      "price": "$1250.00",
      "stock": [
        {
          "color": "black",
          "stock": "100",
          "sold": 0
         }
        ]
      },
    {
      "name": "Delfina Black leather high-heeled pumps",
      "brand": "Fendi",
      "description": "Round-toe Delfina pumps. Strap closure. Made of black leather. Heel with cut-out detail and gold-colored metal FF motif. Made in Italy",
      "specification": "100% calf leather, interior: 100% goat leather, @Heel height : 105 mm", 
      "categories": ["heels", "Women"],
      "colors": ["black"],
      "sizes": ["Default"],
      "images": [
        {
          "color": "black",
          "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Delfina+Black+fabric+high-heeled+sandals+atras.jpeg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Delfina+Black+fabric+high-heeled+sandals+lado.jpeg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Delfina+Black+fabric+high-heeled+sandals+lateral.avif"]
        }
      ],
      "price": "$1190.00",
      "stock": [
        {
          "color": "black",
          "stock": "100",
          "sold": 0
         }
        ]
      },
    {
      "name": "Delfina Black fabric high-heeled sandals",
      "brand": "Fendi",
      "description": "Delfina round-toe sandals with an ankle strap. Made of black karung. Heel with cut-out detail and gold-colored metal FF motif. Made in Italy",
      "specification": "100% Karung snake leather, interior: 100% Goatskin, @Heel height : 95 mm", 
      "categories": ["heels", "Women"],
      "colors": ["black"],
      "sizes": ["Default"],
      "images": [
        {
          "color": "black",
          "images": ["", "", ""]
        }
      ],
      "price": "$1250.00",
      "stock": [
        {
          "color": "black",
          "stock": "100",
          "sold": 0
         }
        ]
      },
    {
        "name": "Delfina Black leather biker boots",
        "brand": "Fendi",
        "description": "Delfina biker boots with a round toe, laces, straps and a side zipper on the inside. Lug sole in rubber. Made of black leather with tone-on-tone fabric details. Gold-finish metalware. Made in Italy",
        "specification": "100% Calfskin, interior: 100% Lambskin, @Heel height : 50 mm",
        "categories": ["heels", "Women"],
        "colors": ["black"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "black",
            "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Delfina+Black+leather+biker+boots+atras.jpeg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Delfina+Black+leather+biker+boots+frontal+lateral.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Delfina+Black+leather+biker+boots+lateral.avif"]
          }
        ],
        "price": "$1590.00",
        "stock": [
          {
            "color": "black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
    {
        "name": "Rockoko Black leather biker boots with stretch fabric",
        "brand": "Fendi",
        "description": "Rockoko combat boots with stretch fabric inserts. Non-slip rubber sole. Made of black calfskin. The sock-like high top is trimmed with the FF motif and contrasting sporty stripes. Made in Italy",
        "specification": "100% calf leather, 87% polyamide, 13% elastane, inside: 100% calf leather, @Heel height : 30 mm",
        "categories": ["heels", "Women"],
        "colors": ["black"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "black",
            "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Rockoko+Black+leather+biker+boots+with+stretch+fabric+atras.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Rockoko+Black+leather+biker+boots+with+stretch+fabric+frontal.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Rockoko+Black+leather+biker+boots+with+stretch+fabric+lateral.avif"]
          }
        ],
        "price": "$1050.00",
        "stock": [
          {
            "color": "black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
    {
      "name": "Fendi First Black leather high-heeled sandals",
      "brand": "Fendi",
      "description": "Fendi First sandals with wide band and strap. Made of black leather. Diagonal F-shaped sculpted heel in gold-colored metal. Made in Italy",
      "specification": "100% calf leather, inside: 100% lamb leather, @Heel height : 95 mm",
      "categories": ["heels", "Women"],
      "colors": ["black"],
      "sizes": ["Default"],
      "images": [
        {
          "color": "black",
          "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Fendi+First+Black+leather+high-heeled+sandals+atras.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Fendi+First+Black+leather+high-heeled+sandals+lateral.avif","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Fendi+First+Black+leather+high-heeled+sandals+superior.webp"]
        }
      ],
      "price": "$1450.00",
      "stock": [
        {
          "color": "black",
          "stock": "100",
          "sold": 0
         }
        ]
      },
    {
      "name": "Colibrì Black mesh high-heeled slingbacks",
      "brand": "Fendi",
      "description": "Colibrì slingbacks with pointed toe and elastic ribbons that wrap around the foot. The sole is embellished with rubber inserts. Made of micro mesh with an FF motif. Finished with amber-colored sequin embroidery. The padded cushion and hiking shoe tab add a sporty touch. Gold-enameled heel. Made in Italy",
      "specification": "100% polyester, 100% polyurethane, lining: 100% polyamide, @Heel height : 85 mm",
      "categories": ["heels", "Women"],
      "colors": ["black"],
      "sizes": ["Default"],
      "images": [
        {
          "color": "black",
          "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Colibr%C3%AC+Black+mesh+high-heeled+slingbacks+atras.avif","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Colibr%C3%AC+Black+mesh+high-heeled+slingbacks+lateral.avif","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Colibr%C3%AC+Black+mesh+high-heeled+slingbacks+superior.avif"]
        }
      ],
      "price": "$1150.00",
      "stock": [
        {
          "color": "black",
          "stock": "100",
          "sold": 0
         }
        ]
      },
    {
      "name": "Domino White FF fabric low-tops",
      "brand": "Fendi",
      "description": "Domino sneakers with rubber cupsoles. Made of jacquard fabric with FF motif in ivory white. Trimmed with tone on tone grosgrain ribbon. The white sole with contrasting bottom features a combination of embossed textures, the FF pattern superimposed on the toe and the Fendi Roma logo on the heel. Extra white laces. Made in Italy",
      "specification": "65% Polyamide, 35% Cotton, 55% Cotton, 45% Polyamide, coating: 100% Resin, interior: 100% Cotton, @Heel height : 20 mm",
      "categories": ["heels", "Women"],
      "colors": ["white"],
      "sizes": ["Default"],
      "images": [
        {
          "color": "white",
          "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Domino+White+FF+fabric+low-tops+atras.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Domino+White+FF+fabric+low-tops+lateral.avif","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Domino+White+FF+fabric+low-tops+superior.webp"]
        }
      ],
      "price": "$695.00",
      "stock": [
        {
          "color": "white",
          "stock": "100",
          "sold": 0
         }
        ]
      },
    {
      "name": "Fendi Flow White suede low tops",
      "brand": "Fendi",
      "description": "Slip-on sneakers with elastic laces, side zipper and corrugated sole with engraved F. Fendi Flow lettering embossed on the heels. Made of white suede with tech fabric inserts. Embellished with Lycra® details with FF motif. Lightweight white rubber soles with pale pink diagonal F detail. Made in Italy",
      "specification": "100% calf leather, 100% polyester, inside: 100% polyester, @Heel height : 30 mm",
      "categories": ["heels", "Women"],
      "colors": ["white"],
      "sizes": ["Default"],
      "images": [
        {
          "color": "white",
          "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Fendi+Flow+White+suede+low+tops+atras.avif","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Fendi+Flow+White+suede+low+tops+lateral.avif","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Fendi+Flow+White+suede+low+tops+superior.avif"]
        }
      ],
      "price": "$995.00",
      "stock": [
        {
          "color": "white",
          "stock": "100",
          "sold": 0
         }
        ]
      },
    {
      "name": "Fendi Match Low tops in black suede",
      "brand": "Fendi",
      "description": "Fendi Match compact design sneakers with vintage label on tongue. Branded with FF pattern sewn on the side and embossed Fendi lettering on the sole. Made of black suede with white leather details. Embellished with black terry collar and laces. Covered rubber cupsole with brown bumper. The style includes a second pair of white terry laces. Made in Italy",
      "specification": "100% Calfskin, 100% Calfskin (suede), inside: 69% Polyester, 28% Polyamide, 3% Elastane, 100% Calfskin, @Heel height : 20 mm",
      "categories": ["heels", "Women"],
      "colors": ["white"],
      "sizes": ["Default"],
      "images": [
        {
          "color": "white",
          "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Fendi+Match+Low+tops+in+black+suede+atras.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Fendi+Match+Low+tops+in+black+suede+lateral.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Fendi+Match+Low+tops+in+black+suede+superior.webp"]
        }
      ],
      "price": "$930.00",
      "stock": [
        {
          "color": "white",
          "stock": "100",
          "sold": 0
         }
        ]
      },
    {
      "name": "Baguette Beige nappa leather sandals",
      "brand": "Fendi",
      "description": "Baguette sandals with lightly padded bands and crisscrossed strap on the ankle and arch. Made of beige nappa leather. Heel with FF Baguette motif in golden metal. Made in Italy",
      "specification": "100% Lambskin, interior: 100% Goatskin, @Heel height : 0 mm",
      "categories": ["heels", "Women"],
      "colors": ["beige"],
      "sizes": ["Default"],
      "images": [
        {
          "color": "beige",
          "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Baguette+Beige+nappa+leather+sandals+atras.avif","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Baguette+Beige+nappa+leather+sandals+frontal.avif","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Baguette+Beige+nappa+leather+sandals+lateral.avif"]
        }
      ],
      "price": "$1190.00",
      "stock": [
        {
          "color": "beige",
          "stock": "100",
          "sold": 0
         }
        ]
      },
    {
      "name": "Colibrì High-heeled slingbacks with embroidery",
      "brand": "Fendi",
      "description": "Streamlined and feminine Colibrì slingbacks with elastic ribbons that wrap around the foot. The sole is embellished with rubber inserts. Made of micromesh with FF Vertigo embroidery with multicolor beads. The padded cushion and hiking shoe tab add a sporty touch. Heel with FF Baguette motif in golden metal. Made in Italy",
      "specification": "100% Cotton, interior: 100% Goatskin, @Heel height : 85 mm",
      "categories": ["heels", "Women"],
      "colors": ["blue"],
      "sizes": ["Default"],
      "images": [
        {
          "color": "blue",
          "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Colibr%C3%AC+High-heeled+slingbacks+with+embroidery+atras.avif","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Colibr%C3%AC+High-heeled+slingbacks+with+embroidery+frontal.jpeg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Colibr%C3%AC+High-heeled+slingbacks+with+embroidery+lateral.avif"]
        }
      ],
      "price": "$1050.00",
      "stock": [
        {
          "color": "blue",
          "stock": "100",
          "sold": 0
         }
        ]
      },
    {
      "name": "Fashion Show Beige nappa leather slides",
      "brand": "Fendi",
      "description": "Platform slides with wide band presented during the Spring/Summer 2023 fashion show. Made of light beige nappa leather. Rubber platform sole with embossed oversized FF pattern. Made in Italy",
      "specification": "100% Lambskin, interior: 100% Lambskin, @Heel height : 140 mm",
      "categories": ["heels", "Women"],
      "colors": ["beige"],
      "sizes": ["Default"],
      "images": [
        {
          "color": "beige",
          "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Fashion+Show+Beige+nappa+leather+slides+atras.avif","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Fashion+Show+Beige+nappa+leather+slides+frontal.avif","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Fashion+Show+Beige+nappa+leather+slides+superior.avif"]
        }
      ],
      "price": "$995.00",
      "stock": [
        {
          "color": "beige",
          "stock": "100",
          "sold": 0
         }
        ]
      },
    {
      "name": "Sneakers Black fabric sneakers",
      "brand": "Fendi",
      "description": "Rockoko sneakers with two-toned running shoe sole. The micro-perforated fabric means it has a flexible and lightweight fit. Made of black stretch yarn. Embellished with FF inlay. Velcro closure with black rubber tag and FENDI lettering. Made in Italy",
      "specification": "87% polyamide, 13% elastane, 100% calf leather, 100% pvc, @Heel height : 35 mm",
      "categories": ["heels", "Women"],
      "colors": ["black"],
      "sizes": ["Default"],
      "images": [
        {
          "color": "black",
          "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Sneakers+Black+fabric+sneakers+atras.avif","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Sneakers+Black+fabric+sneakers+frontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Sneakers+Black+fabric+sneakers+lateral.avif"]
        }
      ],
      "price": "$895.00",
      "stock": [
        {
          "color": "black",
          "stock": "100",
          "sold": 0
         }
        ]
      },
    {
      "name": "Colibrì Lite High-heeled blue FF chenille slingbacks",
      "brand": "Fendi",
      "description": "Streamlined and feminine Colibrì Lite slingbacks with narrow elastic ribbons that wrap around the foot. The sole is embellished with rubber inserts. Made of chenille with blue and black FF jacquard motif. The padded cushion and hiking shoe tab add a sporty touch. Black enameled heel. Made in Italy",
      "specification": "64% viscose, 20% polyester, 16% cotton, 72% viscose, 28% silk, inside: 52% viscose, 28% cotton, 20% polyester, @Heel height : 85 mm",
      "categories": ["heels", "Women"],
      "colors": ["blue"],
      "sizes": ["Default"],
      "images": [
        {
          "color": "blue",
          "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Colibr%C3%AC+Lite+High-heeled+blue+FF+chenille+slingbacks+atras.avif","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Colibr%C3%AC+Lite+High-heeled+blue+FF+chenille+slingbacks+frontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Heels/Colibr%C3%AC+Lite+High-heeled+blue+FF+chenille+slingbacks+lateral.avif"]
        }
      ],
      "price": "$995.00",
      "stock": [
        {
          "color": "blue",
          "stock": "100",
          "sold": 0
         }
        ]
      },
    {
        "name": "Baguette Black acetate sunglasses",
        "brand": "Fendi",
        "description": "Oversized oval Baguette eyeglasses in black acetate. Temples with cut-out Baguette logo and gold-colored metal trim. Gray lenses. Made in Italy",
        "specification": "100% acetate",
        "categories": ["sunglasses", "Women"],
        "care": "Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always keep your eyeglasses in their case",
        "colors": ["black"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "black",
            "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Baguette+Black+acetate+sunglasses+atras.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Baguette+Black+acetate+sunglasses+frontal.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Baguette+Black+acetate+sunglasses+lateral.jpeg"]
          }
        ],
        "price": "$450.00",
        "stock": [
          {
            "color": "black",
            "stock": "100",
            "sold": 0
          }
        ]
      },
    {
      "name": "Fendi O’Lock Black acetate sunglasses",
      "brand": "Fendi",
      "description": "Square O’Lock glasses in black acetate. Temples with tone-on-tone metal O’Lock and blue lenses. Made in Italy",
      "specification": "100% acetate",
      "categories": ["sunglasses", "Women"],
      "care": "Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.",
      "colors": ["black"],
      "sizes": ["Default"],
      "images": [
        {
          "color": "black",
          "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+O%E2%80%99Lock+Black+acetate+sunglasses+atras.avif","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+O%E2%80%99Lock+Black+acetate+sunglasses+frontal.avif","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+O%E2%80%99Lock+Black+acetate+sunglasses+lateral.avif"]
        }
      ],
      "price": "$460.00",
      "stock": [
        {
          "color": "black",
          "stock": "100",
          "sold": 0
         }
        ]
      },
    {
      "name": "Fendi Roma Beige acetate sunglasses",
      "brand": "Fendi",
      "description": "Oversize, square Fendi Roma sunglasses made of transparent beige acetate. Temples with visible metal core with laser etched FF. Gold finish Fendi Roma logo on the sides. Brown lenses. Made in Italy",
      "specification": "59% acetate, 41% viscose",
      "categories": ["sunglasses", "Women"],
      "care": "Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
      "colors": ["beige"],
      "sizes": ["Default"],
      "images": [
        {
          "color": "beige",
          "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+Roma+Beige+acetate+sunglasses+frontal.avif","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+Roma+Beige+acetate+sunglasses+lado.jpeg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+Roma+Beige+acetate+sunglasses+lateral.jpeg"]
        }
      ],
      "price": "$380.00",
      "stock": [
        {
          "color": "beige",
          "stock": "100",
          "sold": 0
         }
        ]
      },
    {
      "name": "Baguette Gold-colored metal sunglasses",
      "brand": "Fendi",
      "description": "Oversize, square Fendi Roma sunglasses made of transparent beige acetate. Temples with visible metal core with laser etched FF. Gold finish Fendi Roma logo on the sides. Brown lenses. Made in Italy",
      "specification": "100% acetate",
      "categories": ["sunglasses", "Women"],
      "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always keep your eyeglasses in their case.After use, always place the eyeglasses back in their case.",
      "colors": ["gold"],
      "sizes": ["Default"],
      "images": [
        {
          "color": "gold",
          "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Baguette+Gold-colored+metal+sunglasses+frontal.avif","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Baguette+Gold-colored+metal+sunglasses+lado.avif","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Baguette+Gold-colored+metal+sunglasses+lateral.avif"]
        }
      ],
      "price": "$460.00",
      "stock": [
        {
          "color": "gold",
          "stock": "100",
          "sold": 0
         }
        ]
      },
    {
      "name": "Fendigraphy Blue gradient shield sunglasses",
      "brand": "Fendi",
      "description": "Rectangular Fendigraphy shield eyeglasses inspired by the Hobo bag. Temples with in-line gold-colored metal Fendi maxi lettering. Blue gradient lenses and adjustable nose pads. Made in Italy",
      "specification": "100% plastic, 100% metal",
      "categories": ["sunglasses", "Women"],
      "care": "Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always keep your eyeglasses in their case.",
      "colors": ["blue"],
      "sizes": ["Default"],
      "images": [
        {
          "color": "blue",
          "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendigraphy+Blue+gradient+shield+sunglasses+frontal.avif","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendigraphy+Blue+gradient+shield+sunglasses+lado.avif","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendigraphy+Blue+gradient+shield+sunglasses+lateral.avif"]
        }
      ],
      "price": "$490.00",
      "stock": [
        {
          "color": "blue",
          "stock": "100",
          "sold": 0
         }
        ]
      },
    {
      "name": "Fendi Roma Black acetate sunglasses",
      "brand": "Fendi",
      "description": "Rectangular Fendi Roma sunglasses in black acetate. Temples with visible metal core with laser etched FF. Gold finish Fendi Roma logo on the sides. Gray lenses. Made in Italy",
      "specification": "59% acetate, 41% viscose",
      "categories": ["sunglasses", "Women"],
      "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
      "colors": ["black"],
      "sizes": ["Default"],
      "images": [
        {
          "color": "black",
          "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+Roma+Black+acetate+sunglasses+frontal.avif","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+Roma+Black+acetate+sunglasses+lado.avif","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+Roma+Black+acetate+sunglasses+lateral.avif"]
        }
      ],
      "price": "$380.00",
      "stock": [
        {
          "color": "black",
          "stock": "100",
          "sold": 0
         }
        ]
      },
    {
      "name": "Fendi First Black acetate sunglasses",
      "brand": "Fendi",
      "description": "Square Fendi First eyeglasses in black acetate. Temples with oversize diagonal F motif in gold-colored metal. Blue gradient lenses. Made in Italy",
      "specification": "100% acetate",
      "categories": ["sunglasses", "Women"],
      "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
      "colors": ["black"],
      "sizes": ["Default"],
      "images": [
        {
          "color": "black",
          "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+First+Black+acetate+sunglasses+frontal.avif","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+First+Black+acetate+sunglasses+lado.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+First+Black+acetate+sunglasses+lateral.avif"]
        }
      ],
      "price": "$450.00",
      "stock": [
        {
          "color": "black",
          "stock": "100",
          "sold": 0
         }
        ]
      },
    {
      "name": "Fendi First Black acetate sunglasses",
      "brand": "Fendi",
      "description": "Square Fendi First eyeglasses in black acetate. Temples with oversize diagonal F motif in gold-colored metal. Blue gradient lenses. Made in Italy",
      "specification": "100% acetate",
      "categories": ["sunglasses", "Women"],
      "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
      "colors": ["black"],
      "sizes": ["Default"],
      "images": [
        {
          "color": "black",
          "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+First+Black+acetate+sunglasses+frontal.avif","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+First+Black+acetate+sunglasses+lado.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+First+Black+acetate+sunglasses+lateral.avif"]
        }
      ],
      "price": "$450.00",
      "stock": [
        {
          "color": "black",
          "stock": "100",
          "sold": 0
         }
        ]
      },
    {
      "name": "Fendi First Shield sunglasses with gray gradient lenses",
      "brand": "Fendi",
      "description": "Fendi First shield sunglasses with palladium-color metal temples and gray gradient lenses with micro F in crystals. Adjustable nose pads. Made in Italy",
      "specification": "100% Metal",
      "categories": ["sunglasses", "Women"],
      "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
      "colors": ["black"],
      "sizes": ["Default"],
      "images": [
        {
          "color": "black",
          "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+First+Shield+sunglasses+with+gray+gradient+lenses+frontal.avif","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+First+Shield+sunglasses+with+gray+gradient+lenses+lado.avif","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+First+Shield+sunglasses+with+gray+gradient+lenses+lateral.avif"]
        }
      ],
      "price": "$520.00",
      "stock": [
        {
          "color": "black",
          "stock": "100",
          "sold": 0
         }
        ]
      },
    {
      "name": "Fendi First Gold metal sunglasses with gradient lenses",
      "brand": "Fendi",
      "description": "Oversized square Fendi First eyewear in gold-colored metal. Gray gradient lenses embellished with micro F in crystals. Adjustable nose pads. Made in Italy",
      "specification": "100% Metal",
      "categories": ["sunglasses", "Women"],
      "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
      "colors": ["gold"],
      "sizes": ["Default"],
      "images": [
        {
          "color": "gold",
          "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+First+Gold+metal+sunglasses+with+gradient+lenses+frontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+First+Gold+metal+sunglasses+with+gradient+lenses+lado.avif","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+First+Gold+metal+sunglasses+with+gradient+lenses+lateral.webp"]
        }
      ],
      "price": "$520.00",
      "stock": [
        {
          "color": "gold",
          "stock": "100",
          "sold": 0
         }
        ]
      },
    {
      "name": "O’Lock Sunglasses in transparent caramel acetate",
      "brand": "Fendi",
      "description": "Square O’Lock eyeglasses in transparent caramel acetate. Temples with gold-colored metal O’Lock and light brown gradient lenses. Made in Italy",
      "specification": "100% Plastic, 100% Metal",
      "categories": ["sunglasses", "Women"],
      "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
      "colors": ["brown"],
      "sizes": ["Default"],
      "images": [
        {
          "color": "brown",
          "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/O%E2%80%99Lock+Sunglasses+in+transparent+caramel+acetate+frontal.avif","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/O%E2%80%99Lock+Sunglasses+in+transparent+caramel+acetate+lado.avif","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/O%E2%80%99Lock+Sunglasses+in+transparent+caramel+acetate+lateral.jpeg"]
        }
      ],
      "price": "$460.00",
      "stock": [
        {
          "color": "brown",
          "stock": "100",
          "sold": 0
         }
        ]
      },
    {
      "name": "Fendi First Fashion Show sunglasses",
      "brand": "Fendi",
      "description": "Presented at the Fall-Winter 22 fashion show, these oval-shaped gold-tone metal sunglasses are inspired by the atmosphere of the 2000s. In keeping with the new Fendi First Fashion Jewelry line, designed by Delfina Delettrez Fendi, they are decorated with a crystal micro F design. Green lenses. Adjustable nose pads. Made in Italy",
      "specification": "100% Metal",
      "categories": ["sunglasses", "Women"],
      "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
      "colors": ["green"],
      "sizes": ["Default"],
      "images": [
        {
          "color": "green",
          "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+First+Fashion+Show+sunglasses+frontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+First+Fashion+Show+sunglasses+lado.avif","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+First+Fashion+Show+sunglasses+lateral.webp"]
        }
      ],
      "price": "$520.00",
      "stock": [
        {
          "color": "green",
          "stock": "100",
          "sold": 0
         }
        ]
      },
    {
      "name": "Fendi First Fashion Show sunglasses",
      "brand": "Fendi",
      "description": "Presented at the Fall-Winter 22 fashion show, these oval-shaped gold-tone metal sunglasses are inspired by the atmosphere of the 2000s. In keeping with the new Fendi First Fashion Jewelry line, designed by Delfina Delettrez Fendi, they are decorated with a crystal micro F design. Green lenses. Adjustable nose pads. Made in Italy",
      "specification": "100% Metal",
      "categories": ["sunglasses", "Women"],
      "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
      "colors": ["green"],
      "sizes": ["Default"],
      "images": [
        {
          "color": "green",
          "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+First+Fashion+Show+sunglasses+frontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+First+Fashion+Show+sunglasses+lado.avif","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+First+Fashion+Show+sunglasses+lateral.webp"]
        }
      ],
      "price": "$520.00",
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
      "specification": "100% acetate",
      "categories": ["sunglasses", "Women"],
      "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
      "colors": ["mint"],
      "sizes": ["Default"],
      "images": [
        {
          "color": "mint",
          "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+First+Mint+green+acetate+sunglasses+frontal.jpeg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+First+Mint+green+acetate+sunglasses+lado.jpeg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+First+Mint+green+acetate+sunglasses+lateral.jpeg"]
        }
      ],
      "price": "$450.00",
      "stock": [
        {
          "color": "mint",
          "stock": "100",
          "sold": 0
         }
        ]
      },
    {
      "name": "Fendigraphy Transparent pink acetate sunglasses",
      "brand": "Fendi",
      "description": "Oversized round Fendigraphy eyewear in transparent pink acetate, inspired by the Hobo bag. Temples with in-line gold-colored metal Fendi maxi lettering. Brown gradient lenses. Made in Italy",
      "specification": "100% acetate",
      "categories": ["sunglasses", "Women"],
      "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
      "colors": ["pink"],
      "sizes": ["Default"],
      "images": [
        {
          "color": "pink",
          "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendigraphy+Transparent+pink+acetate+sunglasses+frontal.jpeg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendigraphy+Transparent+pink+acetate+sunglasses+lado.avif","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendigraphy+Transparent+pink+acetate+sunglasses+lateral.avif"]
        }
      ],
      "price": "$490.00",
      "stock": [
        {
          "color": "pink",
          "stock": "100",
          "sold": 0
         }
        ]
      },
    {
      "name": "Baguette Gray Havana FF acetate sunglasses",
      "brand": "Fendi",
      "description": "Square Baguette eyewear in gray Havana acetate with FF logo. Gray gradient lenses and gold-color metal temples with Baguette logo. Made in Italy",
      "specification": "100% Metal, 100% Plastic Trim",
      "categories": ["sunglasses", "Women"],
      "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
      "colors": ["gray"],
      "sizes": ["Default"],
      "images": [
        {
          "color": "gray",
          "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Baguette+Gray+Havana+FF+acetate+sunglasses+frontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Baguette+Gray+Havana+FF+acetate+sunglasses+lado.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Baguette+Gray+Havana+FF+acetate+sunglasses+lateral.avif"]
        }
      ],
      "price": "$400.00",
      "stock": [
        {
          "color": "gray",
          "stock": "100",
          "sold": 0
         }
        ]
      },
    {
      "name": ": Fendi O’Lock Havana acetate sunglasses",
      "brand": "Fendi",
      "description": "Square O’Lock glasses in Havana acetate. Temples with gold-colored metal O’Lock and brown gradient lenses. Made in Italy",
      "specification": "100% acetate",
      "categories": ["sunglasses", "Women"],
      "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
      "colors": ["black"],
      "sizes": ["Default"],
      "images": [
        {
          "color": "black",
          "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+O%E2%80%99Lock+Havana+acetate+sunglasses+frontal.jpeg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+O%E2%80%99Lock+Havana+acetate+sunglasses+lado.avif","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Sunglasses/Fendi+O%E2%80%99Lock+Havana+acetate+sunglasses+lateral.jpeg"]
        }
      ],
      "price": "$460.00",
      "stock": [
        {
          "color": "black",
          "stock": "100",
          "sold": 0
         }
        ]
      },
    {
        "name": "FF Belt Brown leather belt",
        "brand": "Fendi",
        "description": "Thin belt with loop and FF stud buckle. Made of tobacco-colored leather with an embossed mini FF print. Metal accessories in a vintage-gold finish. Made in Italy",
        "specification": "100% calfskin, inside: 100% calfskin @Width : 2 cm",
        "categories": ["belt", "accesories", "Women"],
        "colors": ["brown"],
        "sizes": ["Default"],
        "images": [
          {
            "color": "brown",
            "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Accesories/FF+Belt+Brown+leather+belt+frontal.avif", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Accesories/FF+Belt+Brown+leather+belt+lateral.avif"]
          }
        ],
        "price": "$470.00",
        "stock": [
          {
            "color": "brown",
            "stock": "100",
            "sold": 0
          }
        ]
      },
    {
      "name": "Fendigraphy belt Beige leather belt",
      "brand": "Fendi",
      "description": "Belt with loop and stud buckle. Made of beige leather and embellished with metal Fendi lettering. Metal accessories in a vintage-gold finish. Made in Italy",
      "specification": "100% calf leather, interior: 100% calf leather @Width : 3 cm",
      "categories": ["belt", "accesories", "Women"],
      "colors": ["beige"],
      "sizes": ["Default"],
      "images": [
        {
          "color": "beige",
          "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Accesories/Fendigraphy+belt+Beige+leather+belt+beige.avif","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Accesories/Fendigraphy+belt+Beige+leather+belt+lado.avif"]
        }
      ],
      "price": "$850.00",
      "stock": [
        {
          "color": "beige",
          "stock": "100",
          "sold": 0
         }
        ]
      },
    {
      "name": "F Is Fendi 28 mm - Round watch with F is Fendi logo",
      "brand": "Fendi",
      "description": "28 mm round shiny and satin-finish gold-colored stainless steel case with tone-on-tone stainless steel F insert. Off-center gold sunray dial with glossy FF print, gold indices and hands. Tone-on-tone stainless steel bracelet, 11.95/10 mm, with engraved FF motif and folding buckle.",
      "specification": "100% Stainless steel IP yellow",
      "categories": ["watch", "accesories", "Women"],
      "colors": ["gold"],
      "sizes": ["Default"],
      "images": [
        {
          "color": "gold",
          "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Accesories/F+Is+Fendi+28+mm+-+Round+watch+with+F+is+Fendi+logo+frontal.avif","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Accesories/F+Is+Fendi+28+mm+-+Round+watch+with+F+is+Fendi+logo+lateral.avif"]
        }
      ],
      "price": "$1350.00",
      "stock": [
        {
          "color": "gold",
          "stock": "100",
          "sold": 0
         }
        ]
      },
    {
      "name": "O’Lock Vertical 14.80 x 21.30 mm - Oval watch with FF logo",
      "brand": "Fendi",
      "description": "Gold-colored oval stainless steel case, 14.80 x 28.30 mm, Fendi O’Lock bevel with 33 inset diamonds in two different sizes, totaling around 0.10 carats. Crown set with one diamond, around 0.02 carats. Dark green enameled sunray dial, indicators with inset diamonds at 12 o’clock and 6 o’clock, totaling around 0.01 carats, gold-colored minute and second hands with radius cut. Two-toned stainless steel double-wrap bracelet, 4.80 mm, with contrasting satin-effect links and folding buckle.",
      "specification": "100% stainless steel, 100% diamonds (36 stones ~0.13 carats)",
      "categories": ["watch", "accesories", "Women"],
      "colors": ["gold"],
      "sizes": ["Default"],
      "images": [
        {
          "color": "gold",
          "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Accesories/O%E2%80%99Lock+Vertical+14.80+x+21.30+mm+-+Oval+watch+with+FF+logo+Frontal.avif","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Accesories/O%E2%80%99Lock+Vertical+14.80+x+21.30+mm+-+Oval+watch+with+FF+logo+lateral.avif"]
        }
      ],
      "price": "$2850.00",
      "stock": [
        {
          "color": "gold",
          "stock": "100",
          "sold": 0
         }
        ]
      },
    {
      "name": "Forever Fendi 19 mm – Bracelet watch with FF logo",
      "brand": "Fendi",
      "description": "Rose gold-colored polished and brushed stainless steel case, bezel set with 64 diamonds, approximately 0.14 carats, crown set with one diamond, approximately 0.02 carats. Genuine malachite dial, rose gold-colored indices and hands. Rose gold-colored satin-finish stainless steel bracelet, with polished central links with FF logo and folding buckle.",
      "specification": "100% stainless steel, 100% diamonds (65 stones ~0.16 carats), 100% stone",
      "categories": ["watch", "accesories", "Women"],
      "colors": ["gold"],
      "sizes": ["Default"],
      "images": [
        {
          "color": "gold",
          "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Accesories/Forever+Fendi+19+mm+%E2%80%93+Bracelet+watch+with+FF+logo+Frontal.avif","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Accesories/Forever+Fendi+19+mm+%E2%80%93+Bracelet+watch+with+FF+logo+lado.jpeg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/Accesories/Forever+Fendi+19+mm+%E2%80%93+Bracelet+watch+with+FF+logo+lateral.jpeg"]
        }
      ],
      "price": "$2590.00",
      "stock": [
        {
          "color": "gold",
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

app.get("/dolce/women/:token", (req, res)=>{
  if(req.params.token === TOKEN){
    res.status(200).json([
      {
        "name": "DG Logo Bag shoulder bag in calfskin",
        "brand": "Dolce & Gabbana",
        "description": "Iconic codes are reinterpreted in a modern key to create a new vision of the brand's DNA. Characterized by a refined design with geometric lines, this shoulder bag pays homage to the logo. Made entirely of calfskin, it stands out with the quilted DG logo with a three-dimensional effect and includes an adjustable and removable strap.",
        "specification": "@Cierre de solapa con doble imán oculto @Forro de alcántara, bolsillo con cremallera y compartimento con tira con botón a presión @Artículo con bolsa protectora con logotipo @Medidas: 16 x 20 x 5,5 cm @Hecho en Italia @Composición externa: 100 % Piel de becerro",
        "categories": ["bags", "Women", "underarm"],
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
        "price": "$1195.00",
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
        "categories": ["bags", "Women", "underarm"],
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
        "price": "$1445.00",
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
        "categories": ["bags", "Women", "underarm"],
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
        "price": "$1195.00",
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
        "categories": ["bags", "Women", "underarm"],
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
        "price": "$1745.00",
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
        "categories": ["bags", "Women", "underarm"],
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
        "price": "$1495.00",
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
        "categories": ["bags", "Women", "underarm"],
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
        "price": "$1945.00",
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
        "categories": ["bags", "Women", "underarm"],
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
        "price": "$2795.00",
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
        "name": "Devotion baguette bag in quilted nappa leather",
        "brand": "Dolce & Gabbana",
        "description": "The Devotion line is enriched with new models. Made entirely of quilted nappa leather, this new baguette bag is characterized by a removable strap that allows it to be carried in the hand and is embellished with the exclusive jewel-like heart clasp with an aged gold finish.",
        "specification": "@Front flap with jewel-like heart with logo made of metallic alloy and pearls set @Concealed press-stud closure @Removable chain strap with nappa insert @Nappa lining with pocket with Devotion zip puller @Item with protective bag with logo @Measures: 12 x 28 x 5 cm @Made in Italy @External composition: 100% Lambskin @Internal composition: 97% Lambskin 3% Viscose",
        "categories": ["bags", "Women", "underarm"],
        "colors": ["white", "black", "red"],
        "sizes": ["default"],
        "images": [
          {
            "color": "white",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_Devotion_blanco_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_Devotion_blanco_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_Devotion_blanco_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_Devotion_blanco_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_Devotion_blanco_05.jpg"
            ]
          },
          {
            "color": "black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_Devotion_negro_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_Devotion_negro_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_Devotion_negro_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_Devotion_negro_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_Devotion_negro_05.jpg"
            ]
          },
          {
            "color": "red",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_Devotion_rojo_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_Devotion_rojo_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_Devotion_rojo_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_Devotion_rojo_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_Devotion_rojo_05.jpg"
            ]
          }
        ],
        "price": "$2795.00",
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
        "name": "Small Devotion bag in plain velvet",
        "brand": "Dolce & Gabbana",
        "description": "Small bag, from the Devotion line, with a handle on the top, made of precious calfskin and characterized by a heart-shaped clasp, made of a jewel, as well as a strap inspired by haute jewelery work.",
        "specification": "@Top handle and removable strap @Front flap with bejeweled heart and logo, handcrafted using metal casting and pearl inserts @Hidden magnet closure and personalized heart @Internal structure in calfskin with pocket flat @Protective bag and packaging with logo included with the item @Measures. 19 x 13 x 4.5 cm @Made in Italy @External composition:100% Lamb @Internal composition:100% Calf",
        "categories": ["bags", "Women", "underarm"],
        "colors": ["white", "black", "red"],
        "sizes": ["default"],
        "images": [
          {
            "color": "white",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_DevotionChico_blanco_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_DevotionChico_blanco_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_DevotionChico_blanco_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_DevotionChico_blanco_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_DevotionChico_blanco_05.jpg"
            ]
          },
          {
            "color": "black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_DevotionChico_negro_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_DevotionChico_negro_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_DevotionChico_negro_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_DevotionChico_negro_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_DevotionChico_negro_05.jpg"
            ]
          },
          {
            "color": "red",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_DevotionChico_rojo_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_DevotionChico_rojo_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_DevotionChico_rojo_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_DevotionChico_rojo_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_DevotionChico_rojo_05.jpg"
            ]
          }
        ],
        "price": "$1775.00",
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
        "name": "Rose-shaped resin Dolce Box bag",
        "brand": "Dolce & Gabbana",
        "description": "A symbol of femininity, the rose is transformed into this Dolce Box bag, which represents the brand's craftsmanship, love and attention to detail. Made of hand-painted resin, it features a top handle and an adjustable and removable strap in calfskin with an iguana motif.",
        "specification": "@Snap button closure @Top handle and adjustable and removable strap in calfskin with iguana motif @Nappa lining @Item with special packaging @Sizes. 21 x 22 x 13.5 cm @Made in Italy @External composition: 85% Polylactic acid 15% Calfskin @Internal composition: 100% Lambskin",
        "categories": ["bags", "Women", "underarm"],
        "colors": ["white", "black", "red"],
        "sizes": ["default"],
        "images": [
          {
            "color": "white",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_resinDolceBoxRose_blanco_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_resinDolceBoxRose_blanco_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_resinDolceBoxRose_blanco_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_resinDolceBoxRose_blanco_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_resinDolceBoxRose_blanco_05.jpg"
            ]
          },
          {
            "color": "black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_resinDolceBoxRose_negro_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_resinDolceBoxRose_negro_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_resinDolceBoxRose_negro_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_resinDolceBoxRose_negro_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_resinDolceBoxRose_negro_05.jpg"
            ]
          },
          {
            "color": "red",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_resinDolceBoxRose_rojo_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_resinDolceBoxRose_rojo_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_resinDolceBoxRose_rojo_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_resinDolceBoxRose_rojo_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_resinDolceBoxRose_rojo_05.jpg"
            ]
          }
        ],
        "price": "$7345.00",
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
        "name": "Resin Dolce Box bag with rhinestones",
        "brand": "Dolce & Gabbana",
        "description": "An icon of the brand, the Dolce Box bag represents the brand's craftsmanship, love and attention to detail. Precious and elegant, it is made of galvanized resin with a quilted effect and embellished with a rhinestone application. It features a top handle and an adjustable and removable strap in mirror-effect calfskin.",
        "specification": "@Closing with metal padlock and enameled flower @Top handle and adjustable and removable strap in mirror-effect calfskin @Calfskin lining and inside pocket with hidden magnetic closure @Item with special packaging @Sizes. 14.5 x 19 x 7 cm @Made in Italy @External composition: 65% Resin 15% Calfskin 8% Crystal 8% Polylactic acid 4% Zamak @Internal composition: 100% Calfskin",
        "categories": ["bags", "Women", "underarm"],
        "colors": ["white", "black", "gold"],
        "sizes": ["default"],
        "images": [
          {
            "color": "white",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_resinDolceBox_blanco_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_resinDolceBox_blanco_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_resinDolceBox_blanco_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_resinDolceBox_blanco_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_resinDolceBox_blanco_05.jpg"
            ]
          },
          {
            "color": "black",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_resinDolceBox_negro_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_resinDolceBox_negro_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_resinDolceBox_negro_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_resinDolceBox_negro_04.jpg"
            ]
          },
          {
            "color": "gold",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_resinDolceBox_gold_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_resinDolceBox_gold_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_resinDolceBox_gold_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_resinDolceBox_gold_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_resinDolceBox_gold_05.jpg"
            ]
          }
        ],
        "price": "$7795.00",
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
            "color": "gold",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Dolce Box handbag",
        "brand": "Dolce & Gabbana",
        "description": "The new collection is inspired by the ancient ceramics of Caltagirone, where shades of white and fuchsia are combined in a tribute to Sicilian majolica and craftsmanship, and reinterprets them in a modern key. This iconic Dolce Box bag made of resin is characterized by the entirely hand-painted Maiolica motif.",
        "specification": "@Fuchsia @Closing with palladium-plated metal padlock and enameled flower @Top handle and adjustable and removable strap in shiny calfskin @Calfskin lining and inside pocket with hidden magnetic closure @Item with special packaging @Measurements: A14, 5 x L19 x D7 cm @Made in Italy @External composition: 85% Polylactic acid 15% Calfskin @Internal composition: 100% Calfskin",
        "categories": ["bags", "Women"],
        "colors": ["fuchsia"],
        "sizes": ["default"],
        "images": [
          {
            "color": "fuchsia",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_DolceBox_fucsia_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_DolceBox_fucsia_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_DolceBox_fucsia_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_DolceBox_fucsia_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_DolceBox_fucsia_05.jpg"
            ]
          }
        ],
        "price": "$7995.00",
        "stock": [
          {
            "color": "fuchsia",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name": "Dolce Box bag in calfskin with 90's print",
        "brand": "Dolce & Gabbana",
        "description": "As an icon of the brand, the Dolce Box bag embodies the house's craftsmanship, love and attention to detail. Delicate and romantic, it is made of calfskin, with details in laminated calfskin and round studs on the upper part",
        "specification": "@Closing with light gold galvanized padlock and enameled flower @Handle on the top and removable adjustable strap in laminated calfskin with galvanized vintage brass hooks @Calf lining and internal pocket with hidden magnet closure @Metal supports on the base @Article with special packaging @Measurements: 19 x 14.5 x 7 cm @Made in Italy @External composition: 100% Calfskin",
        "categories": ["bags", "Women"],
        "colors": ["white"],
        "sizes": ["default"],
        "images": [
          {
            "color": "white",
            "images": [
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_DolceBox90_blanco_01.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_DolceBox90_blanco_02.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_DolceBox90_blanco_03.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_DolceBox90_blanco_04.jpg",
              "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/I%C3%B1aki/Bags/Dolce%26Gabbana_cartera_DolceBox90_blanco_05.jpg"
            ]
          }
        ],
        "price": "$4845.00",
        "stock": [
          {
            "color": "white",
            "stock": "100",
            "sold": 0
          }
        ]
      },
      {
        "name":"Lace slingbacks",
        "brand":"Dolce & Gabbana",
        "description":"Iconic and timeless, these lace Lollo slingbacks feature gros-grain piping and the DG logo appliqué on the heel.",
        "specifications":"90-mm heel with DG logo, Kidskin insole with branded label, Branded leather sole, Item comes with a branded dust bag, Made in Italy" ,
        "categories":["Heels", "Women"],
        "colors": ["Black" ],
        "sizes": ["35, 35.5, 36, 36.5. 37, 37.5, 38, 38.5, 39, 39.5, 40, 40.5. 41"],
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
        "specifications":"105-mm heel with DG logo and rhinestones, Kidskin insole with branded label, Branded leather sole, Item comes with a branded dust bag, Made in Italy" ,
        "categories":["Heels", "Women"],
        "colors": ["Black"],
        "sizes": ["35, 35.5, 36, 36.5. 37, 37.5, 38, 38.5, 39, 39.5, 40, 40.5. 41"],
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
        "specifications":"60-mm heel, Foiled kidskin insole with branded label, Branded leather sole, Item comes with a branded dust bag, Made in Italy" ,
        "categories":["Heels", "Women"],
        "colors": ["Pink" ],
        "sizes": ["35, 35.5, 36, 36.5. 37, 37.5, 38, 38.5, 39, 39.5, 40, 40.5. 41"],
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
        "specifications":"105-mm heel with DG logo, Printed kidskin insole with branded label, Logo-print leather sole, Item comes with a branded dust bag, Made in Italy" ,
        "categories":["Heels", "Women"],
        "colors": ["Animal print" ],
        "sizes": ["35, 35.5, 36, 36.5. 37, 37.5, 38, 38.5, 39, 39.5, 40, 40.5. 41"],
        "images":[
            {
                "color":"Animal print",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/4/1.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/4/2.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/4/3.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/4/4.jpg"]
            }       
        ],
        "price":1175 ,
        "stock": [
            {
                "color":"Animal print",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"KIM DOLCE&GABBANA Polished calfskin pumps",
        "brand":"Dolce & Gabbana",
        "description":"The fusion and alchemy between the history and creativity of D&G’s designers and the contemporary vision of Kim Kardashian, style and beauty icon, lie at the heart of the new Runway collection.",
        "specifications":"Polished calfskin upper, 90-mm heel, Kidskin insole with branded label, Branded leather sole, Made in Italy",
        "categories":["Heels", "Women"],
        "colors": ["Cream" ],
        "sizes": ["35, 35.5, 36, 36.5. 37, 37.5, 38, 38.5, 39, 39.5, 40, 40.5. 41"],
        "images":[
            {
                "color":"Cream",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/5/1.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/5/2.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/5/3.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/5/4.jpg"]
            }       
        ],
        "price":793 ,
        "stock": [
            {
                "color":"Cream",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Polished calfskin Mary Janes",
        "brand":"Dolce & Gabbana",
        "description":"These new Jackie Mary Janes come in polished calfskin with the metal DG logo cut-out. ",
        "specifications":"90-mm heel, Kidskin insole with branded label, Branded leather sole, Item comes with a branded dust bag, Made in Italy" ,
        "categories":["Heels", "Women"],
        "colors": ["Black" ],
        "sizes": ["35, 35.5, 36, 36.5. 37, 37.5, 38, 38.5, 39, 39.5, 40, 40.5. 41"],
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
        "specifications":"90-mm heel, Kidskin insole with branded label, Branded leather sole, Item comes with a branded dust bag, Made in Italy" ,
        "categories":["Heels", "Women"],
        "colors": ["Black" ],
        "sizes": ["35, 35.5, 36, 36.5. 37, 37.5, 38, 38.5, 39, 39.5, 40, 40.5. 41"],
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
        "specifications":"90-mm heel, Kidskin insole with branded label, Branded leather sole, Item comes with a branded dust bag, Made in Italy" ,
        "categories":["Heels", "Women"],
        "colors": ["Brown" ],
        "sizes": ["35, 35.5, 36, 36.5. 37, 37.5, 38, 38.5, 39, 39.5, 40, 40.5. 41"],
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
        "specifications":" 60-mm heel with DG logo, Printed kidskin insole with branded label, Logo-print leather sole, Item comes with a branded dust bag , Made in Italy" ,
        "categories":["Heels", "Women"],
        "colors": ["Brown" ],
        "sizes": ["35, 35.5, 36, 36.5. 37, 37.5, 38, 38.5, 39, 39.5, 40, 40.5. 41"],
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
        "specifications":"Fusible rhinestones on the satin upper, 105-mm heel, Foiled kidskin insole with branded label, Foiled leather sole with logo, Made in Italy" ,
        "categories":["Heels", "Women"],
        "colors": ["Grey" ],
        "sizes": ["35, 35.5, 36, 36.5. 37, 37.5, 38, 38.5, 39, 39.5, 40, 40.5. 41"],
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
        "specifications":" Mesh upper, 60-mm heel Calfskin toe, Kidskin insole with branded label, Branded leather sole, Made in Italy" ,
        "categories":["Heels", "Women"],
        "colors": ["Black"],
        "sizes": ["35, 35.5, 36, 36.5. 37, 37.5, 38, 38.5, 39, 39.5, 40, 40.5. 41"],
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
        "specifications":"Patchwork denim upper, 60-mm heel,  Kidskin insole with branded label, Branded leather sole, Made in Italy" ,
        "categories":["Heels", "Women"],
        "colors": ["Blue" ],
        "sizes": ["35, 35.5, 36, 36.5. 37, 37.5, 38, 38.5, 39, 39.5, 40, 40.5. 41"],
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
        "specifications":"Printed fabric upper, 60-mm heel, Kidskin insole with branded label, Branded leather sole , Made in Italy" ,
        "categories":["Heels", "Women"],
        "colors": ["White / red" ],
        "sizes": ["35, 35.5, 36, 36.5. 37, 37.5, 38, 38.5, 39, 39.5, 40, 40.5. 41"],
        "images":[
            {
                "color":"White / red",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/13/1.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/13/2.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/13/3.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/13/4.jpg"]
            }       
        ],
        "price": 895 ,
        "stock": [
            {
                "color":"White / red",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Zebra-print polished calfskin slingbacks",
        "brand":"Dolce & Gabbana",
        "description":"The black and white of the new Zebra Collection are the stars of a new communicative mode where innovation and tradition come together to create bold sophisticated contrast.",
        "specifications":"105-mm heel with palladium-plated DG logo, Kidskin insole with branded label, Branded leather sole, Item comes with themed packaging, Made in Italy" ,
        "categories":["Heels", "Women"],
        "colors": ["Animal print"],
        "sizes": ["35, 35.5, 36, 36.5. 37, 37.5, 38, 38.5, 39, 39.5, 40, 40.5. 41"],
        "images":[
            {
                "color":"Animal print",
                "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/14/1.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/14/2.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/14/3.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Heels/14/4.jpg"]
            }       
        ],
        "price": 995 ,
        "stock": [
            {
                "color":"Animal print",
                "stock":100,
                "sold":0
            }
        ]
    },
    {
        "name":"Pump in Taormina lace with crystals",
        "brand":"Dolce & Gabbana",
        "description":"The Rainbow Lace collection is a special range of footwear and accessories in a wide array of colored lace, inspired by the thousand hues and facets of the rainbow.",
        "specifications":"90 mm heel covered in Taormina lace, Swarovski crystals on the toe, Leather insole with satin piping and logo label, Logoed leather sole, Exclusive lace-patterned packaging with matching branded satin dust bag, Made in Italy" ,
        "categories":["Heels", "Women"],
        "colors": ["White" ],
        "sizes": ["35, 35.5, 36, 36.5. 37, 37.5, 38, 38.5, 39, 39.5, 40, 40.5. 41"],
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
      "specifications":"Clasp fastening, Nickel-free and hypoallergenic materials, Engraved logo, Made in Italy" ,
      "categories":["Accesories", "Women"],
      "colors": ["Gold" ],
      "sizes": ["one size"],
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
      "specifications":"Clasp fastening, Nickel-free and hypoallergenic materials, Engraved logo, Made in Italy" ,
      "categories":["Accesories", "Women"],
      "colors": ["Gold"],
      "sizes": ["one size"],
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
      "specifications":" Creole fastening with pin, Nickel-free and hypoallergenic materials, Engraved logo, Made in Italy" ,
      "categories":["Accesories", "Women"],
      "colors": ["Gold" ],
      "sizes": ["one size"],
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
      "specifications":"Nickel-free and hypoallergenic materials, Engraved logo, Made in Italy" ,
      "categories":["Accesories", "Women"],
      "colors": ["Gold"],
      "sizes": ["one size"],
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
      "specifications":" Made in Italy" ,
      "categories":["Accesories", "Women"],
      "colors": ["Gold" ],
      "sizes": ["one size"],
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
      "specifications":"Lined, Rigid peak, Logo tag, Gros-grain sweatband on the interior, Made in Italy" ,
      "categories":["Accesories", "Women"],
      "colors": ["White" ],
      "sizes": ["one size"],
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
      "description":"Against a striking white base, evoking the dazzling sunlight shining on houses facing the sea, the ‘calligraphic-naturalistic’ decoration – here in deep fuchsia – adorning Majolica pottery from Caltagirone is the inspiration for the FW 23-24 collection.",
      "specifications":"Multi-colored, Lined, Gros-grain sweatband on the interior , Made in Italy" ,
      "categories":["Accesories", "Women"],
      "colors": ["White /Pink" ],
      "sizes": ["one size"],
      "images":[
          {
              "color":"White /Pink",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/7/1.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/7/2.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/7/3.webp"]
          }       
      ],
      "price":485 ,
      "stock": [
          {
              "color":"White /Pink",
              "stock":100,
              "sold":0
          }
      ]
  },{
      "name":"Baseball cap with Majolica print",
      "brand":"Dolce & Gabbana",
      "description":"The two-tone effect takes us on a journey of discovery into iconic and authentic shapes and styles made all the more special by unique, non-repeating placed patterns that celebrate original craftsmanship, lightness and femininity.",
      "specifications":"Lined,Adjustable buckle, Rigid peak, Gros-grain sweatband on the interior, Made in Italy" ,
      "categories":["Accesories", "Women"],
      "colors": ["White /Pink" ],
      "sizes": ["one size"],
      "images":[
          {
              "color":"White /Pink",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/8/1.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/8/2.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/8/3.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/8/4.jpg"]
          }       
      ],
      "price":485 ,
      "stock": [
          {
              "color":"White /Pink",
              "stock":100,
              "sold":0
          }
      ]
  },{
      "name":"Baseball cap with Majolica-print scarf Multicolor",
      "brand":"Dolce & Gabbana",
      "description":"",
      "specifications":"Lined, Adjustable buckle, Rigid peak, Gros-grain sweatband on the interior , Made in Italy" ,
      "categories":["Accesories", "Women"],
      "colors": ["Multicolor" ],
      "sizes": ["one size"],
      "images":[
          {
              "color":"Multicolor",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/9/1.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/9/2.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/9/3.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/9/4.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/9/5.jpg"]
          }       
      ],
      "price":975 ,
      "stock": [
          {
              "color":"Multicolor",
              "stock":100,
              "sold":0
          }
      ]
  },
  {
      "name":"Carretto-print baseball cap",
      "brand":"Dolce & Gabbana",
      "description":"Since the very beginning, the style of the Sicilian Carretto carts has been an indelible part of Dolce&Gabbana. The amazement that these marvelous, beautiful works of art inspire when you first see them led our designers to put a fresh spin on the vision behind them.",
      "specifications":"Lined, Adjustable buckle, Rigid peak, Gros-grain sweatband on the interior, Made in Italy" ,
      "categories":["Accesories", "Women"],
      "colors": ["Azure" ],
      "sizes": ["one size"],
      "images":[
          {
              "color":"Azure",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/10/1.webp", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/10/2.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/10/3.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/10/4.jpg"]
          }       
      ],
      "price":485 ,
      "stock": [
          {
              "color":"Azure",
              "stock":100,
              "sold":0
          }
      ]
  },{
      "name":"Nylon baseball cap with DG graffiti print",
      "brand":"Dolce & Gabbana",
      "description":"The black and white graffiti print is the star of this cap that will add some modern, contemporary allure to your looks.",
      "specifications":", Made in Italy" ,
      "categories":["Accesories", "Women"],
      "colors": ["Multicolor" ],
      "sizes": ["one size"],
      "images":[
          {
              "color":"Multicolor",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/11/1.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/11/2.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/11/3.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/11/4.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/11/5.jpg"]
          }       
      ],
      "price":415 ,
      "stock": [
          {
              "color":"Multicolor",
              "stock":100,
              "sold":0
          }
      ]
  },{
      "name":"Sofia steel watch with colorless diamonds",
      "brand":"Dolce & Gabbana",
      "description":"Sofia steel watch with colorless diamonds",
      "specifications":"Material. 316L steel, Size. 24 x 24 mm, Glass. “sapphire” glass with geometrical facets, Bottom clasp. with four side screws and safety closure, Crown. 316L steel set with 1 rose cut black diamond , Made in Italy" ,
      "categories":["Accesories", "Women"],
      "colors": ["Black" ],
      "sizes": ["one size"],
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
      "specifications":"Indication of hours and minutes, Material: 18k rose gold, sapphire crystal, Water resistance, Made in Italy" ,
      "categories":["Accesories", "Women"],
      "colors": ["Multicolor" ],
      "sizes": ["one size"],
      "images":[
          {
              "color":"Multicolor",
              "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/13/1.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/13/2.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/13/3.jpg", "https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Dolce%26Gabbana/Dario/Accesories/accesories/13/4.jpg"]
          }       
      ],
      "price": 2645,
      "stock": [
          {
              "color":"Multicolor",
              "stock":100,
              "sold":0
          }
      ]
  },{
      "name":"Gold watch with silk strap",
      "brand":"Dolce & Gabbana",
      "description":"Watch from the SOFIA line with 100% pure blue silk satin strap.",
      "specifications":"Indication of hours and minutes, Material: 18k rose gold, sapphire crystal, Water resistance, Made in Italy" ,
      "categories":["Accesories", "Women"],
      "colors": ["Gold" ],
      "sizes": ["one size"],
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
      "specifications":"Functions. hour and minute hands, Dial. satin-finished black enamel dial with rose gold DG logo - Hands, Made in Italy" ,
      "categories":["Accesories", "Women"],
      "colors": ["Black" ],
      "sizes": ["one size"],
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
  {
    "name": "Re-Edition sunglasses ",
    "brand": "Dolce & Gabbana",
    "description": "New colours for the RE-EDITION family: a modern touch to the lively look of Carretto. Made in Italy",
    "specification": "Blue opaline acetate temples @Blue gradient silver mirror lenses @100% UV protection",
    "categories": ["sunglasses", "Women"],
    "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
    "colors": ["blue"],
    "sizes": ["Default"],
    "images": [
      {
        "color": "blue",
        "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Re-Edition+sunglasses+Frontal.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Re-Edition+sunglasses+Lado.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Re-Edition+sunglasses+Lateral.jpg"]
      }
    ],
    "price": "$345.00",
    "stock": [
      {
        "color": "blue",
        "stock": "100",
        "sold": 0
       }
      ]
    },
  {
    "name": "DG Elastic Sunglasses",
    "brand": "Dolce & Gabbana",
    "description": "The new DG ELASTIC family features a geometric design and square profiles. The temples are wide and embellished with a print that recalls the iconic Dolce&Gabbana elastic logo. Made in Italy",
    "specification": "Black nylon fiber frame @Black nylon fiber temples @Dark grey lenses @100% UV protection ",
    "categories": ["sunglasses", "Women"],
    "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
    "colors": ["black"],
    "sizes": ["Default"],
    "images": [
      {
        "color": "black",
        "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/DG+Elastic+Sunglasses+frontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/DG+Elastic+Sunglasses+Lado.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/DG+Elastic+Sunglasses+Lateral.webp"]
      }
    ],
    "price": "$315.00",
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
    "specification": "Maiolica fucsia acetate frame @Maiolica fucsia acetate temples @Pink lenses @100% UV protection",
    "categories": ["sunglasses", "Women"],
    "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
    "colors": ["pink"],
    "sizes": ["Default"],
    "images": [
      {
        "color": "pink",
        "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Maiolica+Sunglasses+Frontal.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Maiolica+Sunglasses+Lado.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Maiolica+Sunglasses+Lateral.jpg"]
      }
    ],
    "price": "$345.00",
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
    "specification": "Black acetate frame @Black acetate temples @Dark grey lenses @100% UV protection",
    "categories": ["sunglasses", "Women"],
    "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
    "colors": ["black"],
    "sizes": ["Default"],
    "images": [
      {
        "color": "black",
        "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/DG+Crossed+Sunglasses+Frontal.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/DG+Crossed+Sunglasses+Lado.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/DG+Crossed+Sunglasses+Lateral.jpg"]
      }
    ],
    "price": "$315.00",
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
    "specification": "White acetate frame @White acetate temples @Clear mirror silver lenses @100% UV protection",
    "categories": ["sunglasses", "Women"],
    "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
    "colors": ["white"],
    "sizes": ["Default"],
    "images": [
      {
        "color": "white",
        "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/DG+Barocco+Sunglasses+Frontal.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/DG+Barocco+Sunglasses+Lado.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/DG+Barocco+Sunglasses+Lateral.jpg"]
      }
    ],
    "price": "$410.00",
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
    "specification": "Black metal frame @Black metal temples @Dark grey lenses @100% UV protection",
    "categories": ["sunglasses", "Women"],
    "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
    "colors": ["black"],
    "sizes": ["Default"],
    "images": [
      {
        "color": "black",
        "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/DG+Light+Sunglasses+Frontal.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/DG+Light+Sunglasses+Lado.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/DG+Light+Sunglasses+Lateral.jpg"]
      }
    ],
    "price": "$345.00",
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
    "specification": "Blue on Blue Maiolica frame @Blue on Blue Maiolica acetate temples @Light blue lenses @100% UV protection",
    "categories": ["sunglasses", "Women"],
    "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
    "colors": ["blue"],
    "sizes": ["Default"],
    "images": [
      {
        "color": "blue",
        "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/New+Print+Sunglasses+Frontal.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/New+Print+Sunglasses+Lado.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/New+Print+Sunglasses+Lateral.jpg"]
      }
    ],
    "price": "$345.00",
    "stock": [
      {
        "color": "blue",
        "stock": "100",
        "sold": 0
       }
      ]
    },
  {
    "name": "Half Print Sunglasses",
    "brand": "Dolce & Gabbana",
    "description": "The evolution of the iconic Print Family:the distinctive brand pattern now plays with different colours for a unique look. Made in Italy",
    "specification": "Havana on carretto acetate frame @Gold metal temples @Brown lenses @100% UV protection",
    "categories": ["sunglasses", "Women"],
    "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
    "colors": ["brown"],
    "sizes": ["Default"],
    "images": [
      {
        "color": "brown",
        "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Half+Print+Sunglasses+Frontal.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Half+Print+Sunglasses+Lado.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Half+Print+Sunglasses+Lateral.jpg"]
      }
    ],
    "price": "$370.00",
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
    "specification": "Black acetate frame @Black acetate temple @Dark grey lenses @100% UV protection",
    "categories": ["sunglasses", "Women"],
    "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
    "colors": ["black"],
    "sizes": ["Default"],
    "images": [
      {
        "color": "black",
        "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/DNA+sunglasses+Frontal.webp","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/DNA+sunglasses+Lado.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/DNA+sunglasses+Lateral.jpg"]
      }
    ],
    "price": "$315.00",
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
    "specification": "Black acetate frame @Black acetate temples @Dark grey lenses @100% UV protection",
    "categories": ["sunglasses", "Women"],
    "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
    "colors": ["black"],
    "sizes": ["Default"],
    "images": [
      {
        "color": "black",
        "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Re-Edition+Dna+Sunglasses+Frontal.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Re-Edition+Dna+Sunglasses+Lado.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Re-Edition+Dna+Sunglasses+Lateral.jpg"]
      }
    ],
    "price": "$345.00",
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
    "specification": "Red acetate frame @Red acetate temples @Dark grey lenses @100% UV protection",
    "categories": ["sunglasses", "Women"],
    "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
    "colors": ["red"],
    "sizes": ["Default"],
    "images": [
      {
        "color": "red",
        "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Happy+Gardensunglasses+Frontal.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Happy+Gardensunglasses+Lado.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Happy+Gardensunglasses+Lateral.jpg"]
      }
    ],
    "price": "$825.00",
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
    "specification": "Silver metal frame with crystals @Silver metal temples with crystals @Smoke lenses @100% UV protection",
    "categories": ["sunglasses", "Women"],
    "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
    "colors": ["white"],
    "sizes": ["Default"],
    "images": [
      {
        "color": "white",
        "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Narrow+sunglasses+Frontal.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Narrow+sunglasses+Lado.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Narrow+sunglasses+Lateral.jpg"]
      }
    ],
    "price": "$1420.00",
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
    "specification": "Metallic grey acetate frame @Metallic grey acetate temples @Light grey mirror silver lenses @100% UV protection",
    "categories": ["sunglasses", "Women"],
    "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
    "colors": ["gray"],
    "sizes": ["Default"],
    "images": [
      {
        "color": "gray",
        "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Narrow+sunglasses+Frontal.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Narrow+sunglasses+Lado.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Narrow+sunglasses+Lateral.jpg"]
      }
    ],
    "price": "$1420.00",
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
    "specification": "Black shiny nylon fiber frame @Black elastic temples with white logo @Smoke lenses mirrorred silver with DG crossed @100% UV protection ",
    "categories": ["sunglasses", "Women"],
    "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
    "colors": ["black"],
    "sizes": ["Default"],
    "images": [
      {
        "color": "black",
        "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Flowers+sunglasses+Frontal.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Flowers+sunglasses+Lado.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Flowers+sunglasses+Lateral.jpg"]
      }
    ],
    "price": "$755.00",
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
    "specification": "Black&zebra print acetate frame @Black&zebra print acetate temples @Light grey gradient black lenses @100% UV protectionMeasurements",
    "categories": ["sunglasses", "Women"],
    "care": "Wash your eyeglasses every day with warm water and a pH-neutral soap.Do not use alcohol, aggressive chemical products or disinfectant wipes and do not dry them with paper or other cloths that could scratch them or leave streaks.Dry with a clean microfiber cloth.After use, always place the eyeglasses back in their case.",
    "colors": ["black"],
    "sizes": ["Default"],
    "images": [
      {
        "color": "black",
        "images": ["https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Zebra+sunglasses+Frontal.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Zebra+sunglasses+Lado.jpg","https://nerdy-my-ecommerce.s3.us-east-2.amazonaws.com/Fendi/Diego/SunglassesDolce/Zebra+sunglasses+Lateral.jpg"]
      }
    ],
    "price": "$575.00",
    "stock": [
      {
        "color": "black",
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

app.get("/jimmy/women/:token", (req, res)=>{
  if(req.params.token === TOKEN){
    res.status(200).json([
        {
          "name":"Diamond Top Handle",
          "brand":"Jimmy Choo",
          "description":"Timeless in luxe leather, our Diamond top handle bag is complemented by distinct hardware, signature to the collection. With a top handle and detachable shoulder strap, it's a versatile style that can be worn endlessly.",
          "specifications":"@Box calf leather. @'Diamond' hardware. @Top handle. @Detachable crossbody strap. @Foldover button closure. @Bag measures: L 22cm W 9cm H 16cm. @Made in Italy." ,
          "categories":["Bags", "Women"],
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
          "categories":["Bags", "Women"],
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
          "categories":["Bags", "Women"],
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
          "categories":["Bags", "Women"],
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
          "categories":["Bags", "Women"],
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
          "categories":["Bags", "Women"],
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
          "categories":["Bags", "Women"],
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
          "categories":["Bags", "Women"],
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
          "categories":["Bags", "Women"],
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
          "categories":["Bags", "Women"],
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
          "categories":["Bags", "Women"],
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
          "categories":["Bags", "Women"],
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
          "categories":["Bags", "Women"],
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
          "categories":["Bags", "Women"],
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
          "categories":["Bags", "Women"],
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
        "name":"Diamond Chain Necklace",
        "brand":"Jimmy Choo",
        "description":"Our Diamond chain necklace is elegant in its simplicity, crafted in gold-finish metal, taking signatures from our Diamond collection with a geometric design. Pair with off-duty ensembles for effortless charm.",
        "specifications":"@Nickel-free brass with gold metal finishing. @Diamond Collection inspired design. @Chain length: 43cm. @Comes in a Jimmy Choo pouch and box. @Made in Italy. @Due to its handcrafted nature, every style is unique and there may be small differences between the pieces." ,
        "categories":["Accesories", "Women","Chain Necklace"],
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
          "categories":["Accesories", "Women","Earring"],
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
          "categories":["Accesories", "Women","Earring"],
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
          "categories":["Accesories", "Women","Bracelet"],
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
          "categories":["Accesories", "Women","Ring"],
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
          "categories":["Accesories", "Women","Earring"],
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
          "categories":["Accesories", "Women","Belt"],
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
          "categories":["Accesories", "Women","Belt"],
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
          "categories":["Accesories", "Women","Wallet"],
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
          "categories":["Accesories", "Women","Wallet"],
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
          "categories":["Accesories", "Women","Card Holder"],
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
          "categories":["Accesories", "Women","Bag Strap"],
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
          "categories":["Accesories", "Women","Balaclava"],
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
          "categories":["Accesories", "Women","Bucket Hat"],
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
          "categories":["Accesories", "Women","Cap"],
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
      }
    ])
  }else{
    res.status(403).json({message: "Token not authorized"});
  }
})


module.exports = app;
