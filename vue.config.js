const fs = require("fs");

module.exports = {
  //runtimeCompiler: true,
  devServer: {
      disableHostCheck: true,
    https: {
      key: fs.readFileSync("./certs/localhost-key.pem"),
      cert: fs.readFileSync("./certs/localhost.pem")
    }
  }
}
