const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const categoryRoute = require("./routes/categories");
const postRoute = require("./routes/posts");
const multer = require("multer");

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

  const storage =  multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"images");
    },filename:(req,file,cb)=>{
        cb(null,"hellp.jpg");
    },
  });

  const upload = multer({storage:storage});
    app.post("/api/upload",upload.single("file"),(req,res)=>{
        res.status(200).json("file has been uploaded");
    });
  
app.use("/api/auth", authRoute);
app.use("/api/users",userRoute);
app.use("/api/categories",categoryRoute);
app.use("/api/posts",postRoute);


app.listen("5000", () => {
  console.log("Backend is running.");
});