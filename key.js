console.log("Loaded Key.js");
require('dotenv').config({ path: './.env' })


exports.spotify = {
    id: process.env.e2dfad717f3143ee8c6d07a86320b340,
    secret: process.env.c01c35cfbb8441c584ad00303a6ee2b0
};

exports.imdb = {
    key: process.env.c60b87b6f4e526b97c1a4c88c9cbd
}