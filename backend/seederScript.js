//  seeder helps to import the data in databae easily so recommended
// add to package.json in scripts=>"data:import": "node {folder}/seederScript.js"

require("dotenv").config();

const productData = require("./data/product");
const connectDB = require("./config/db");
const Product = require("./models/Product");

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});

    await Product.insertMany(productData);

    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData();
