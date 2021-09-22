require("dotenv").config();

const Twitter = require("twitter");
const T = new Twitter({
  consumer_key: process.env.API_KEY,
  consumer_secret: process.env.API_SECRET_KEY,
  access_token_key: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

const params = {
  q: "#gamedev",
  count: process.env.COUNT,
  result_type: "recent",
  lang: "en",
};

T.get("search/tweets", params, (err, data, response) => {
  if (err) {
    return console.log(err);
  }

  data.statuses.map((tweet) => {
    T.post("favorites/create", { id: tweet.id_str }, (err, response) => {
      if (err && err[0] && err[0].message && err[0].code !== 139) return console.log(err[0].message);
      if (err && err.message) return console.log(err.message);
    });
  });
});

const today = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
console.log(`RUNNING ON ${today}`);
