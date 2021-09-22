require("dotenv").config();

module.exports = {
  apps: [
    {
      name: "Twitter-Favorite-Bot",
      script: "./app.js",
      restart_delay: process.env.RESTART_DELAY,
    },
  ],
};
