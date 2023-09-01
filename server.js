require("dotenv").config();
const PORT = process.env.PORT || 3003;
const app = require("./app");


app.listen(PORT, ()=>{
  console.log(`Server running on PORT ${PORT}`);
})

