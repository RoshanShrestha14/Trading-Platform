require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Importing Routes
const authRoute = require("./Routes/AuthRoute");
const HoldingsRoute = require("./Routes/HoldingsRoute");
const PositionRoute = require("./Routes/PositionRoute");
const OrdersRoute = require("./Routes/OrdersRoute");

const app = express();
const port = process.env.PORT || 3002;


async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB Database");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1); 
  }
}

connectDB();


app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());


const allowedOrigins = [
  "http://localhost:3000",    
  "http://localhost:3001",    
  process.env.CLIENT_URL,     
  process.env.DASHBOARD_URL,  
];
app.use(cors({
  origin: function (origin, callback) {
  
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
}));


app.get("/", (req, res) => {
  res.send("🚀 TradeStack Backend is Running!");
});

app.use("/", authRoute);
app.use("/holdings", HoldingsRoute);
app.use("/positions", PositionRoute);
app.use("/orders", OrdersRoute);



app.listen(port, "0.0.0.0", () => {
  console.log(`✅ Backend listening on port ${port}`);
});
