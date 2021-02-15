const fs = require("fs");

//Reading files
fs.readFile("./files/file1.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

//Writing Files
fs.writeFile("./files/file2.txt", "This is the file created by program", () => {
  console.log("File created successfully");
});

//Deleting files
if (fs.existsSync("./files/file3.txt")) {
  fs.unlink("./files/file3.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("File deleted successfully");
  });
}

//Directories
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Folder Created");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Folder removed");
  });
}
