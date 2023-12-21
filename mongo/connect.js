const mongoose = require("mongoose");

require("dotenv").config();

async function main() {
  await mongoose.connect(process.env.MONGODB_CONNECT);

  console.log("Connected");
}

main().catch((err) => console.log(err));
