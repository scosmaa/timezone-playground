var datetime = new Date(1994, 8, 26);
var moment_wrapper = moment(datetime);
var div = document.body.children[0];

console.log("--- TZ String datetime ---");
console.log(datetime.toString());
addChild(div, "TZ String datetime:", datetime.toString());

console.log("--- Iso String datetime ---");
console.log(datetime.toISOString());
addChild(div, "Iso String datetime:", datetime.toISOString());

console.log("--- moment string ---");
console.log(moment_wrapper.format());
addChild(div, "moment string:", moment_wrapper.format());

console.log("--- moment string using CET tz ---");
console.log(moment_wrapper.tz('CET').format());
addChild(div, "moment string using CET tz:", moment_wrapper.tz('CET').format());

function addChild(div, title, value) {
    var child = document.createElement("div");
    child.innerHTML = ["<b>", title, "</b>", value].join('');
    div.appendChild(child);
}