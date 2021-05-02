// start your server here
const server = require("./api/server");

const PORT = process.env.PORT || 5900;

server.listen(PORT, () => {
  console.log(`\n== API running on port ${PORT} ==\n`);
});