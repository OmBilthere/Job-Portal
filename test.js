const bcrypt = require("bcrypt");

const password = "YourPassword123";

bcrypt.hash(password, 10, (err, hash) => {
  console.log(hash);
});