/**
 * Created by nicholassaunderson on 13/07/2016.
 */
var fs = require("fs");
console.log("\n *START* \n");
var content = fs.readFileSync("views/dummy.json");
console.log("Output Content : \n"+ content);
console.log("\n *EXIT* \n");
