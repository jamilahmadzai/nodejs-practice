const fs = require("fs");

const readStream = fs.createReadStream("./files/readStream.txt", {
  encoding: "utf8",
});
const writeStream = fs.createWriteStream("./files/writeStream.txt");

readStream.on("data", (chunk) => {
  console.log(" -------------------- new chunk ----------------------");
  console.log(chunk);
  writeStream.write("\nNEW CHUNK\n");
  writeStream.write(chunk);
});

//piping
readStream.pipe(writeStream);
