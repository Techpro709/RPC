var rpc = require("discord-rpc")
var readline = require('readline-sync');

var details = readline.question("details? >/.");
var state = readline.question("state? >/.");
var large_image = readline.question("large_image? >/.");
var large_text = readline.question("large_text? >/.");
var small_image = readline.question("small_image? >/.");
var small_text = readline.question("small_text? >/.");
var Button1 = readline.question("Button1? >/.");
var Button1url = readline.question("Button1text? >/.");
var Button2 = readline.question("Button2? >/.");
var Button2url = readline.question("Button2text? >/.");



console.log("Hi " + name + ", nice to meet you.");

const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
state : state,
details : details, //description of the game
assets : {
large_image : large_image , //the large image
large_text : large_text , //text on the large image 
small_image : small_image , //the small image
small_text : small_text //text of the small image
},
buttons : [{label : Button1 , url : Button1url},{label : Button2,url : Button2url}]
} 
})
})
console.log("© 202 ProzT") 
client.login({ clientId : "923252919518781440" }).catch(console.error); //"https://discord.com/developers/applications" create an application and paste the client id in the ""
