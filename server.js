const express = require("express");
const cors = require("cors");
const db = require("./app/models");

const app = express();
const corsOptions = {
  origin: "*",
};

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));

// register cors middleware
app.use(cors(corsOptions));
app.use(express.json());

// routes
require("./app/routes/StudentRoute")(app);

// db
db.mongoose
  .connect(db.url)
  .then(() => {
    console.log("database connected");
  })
  .catch((e) => {
    console.log(e);
    process.exit();
  });
