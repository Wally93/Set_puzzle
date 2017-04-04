


var object1 = { color:"red", shape:"square", number:1, pattern:"full"};
var object2 = { color:"green", shape:"circle", number:2, pattern: "empty"};
var object3 = { color:"blue", shape:"triangle", number:3, pattern: "shred"};
var object4 = { color:"red", shape:"square", number:1, pattern: "shred"};
var object5 = { color:"blue", shape:"triangle", number:3, pattern: "full"};
var object6 = { color:"red", shape:"square", number:2, pattern: "empty"};
var object7 = { color:"green", shape:"circle", number:1, pattern: "full"};


if((object1.color == object2.color && object2.color == object3.color || object1.color != object2.color && object2.color != object3.color) &&
(object1.number == object2.number && object2.number == object3.number || object1.number != object2.number && object2.number != object3.number) &&
(object1.shape == object2.shape && object2.shape == object3.shape || object1.shape != object2.shape && object2.shape != object3.shape) &&
(object1.pattern == object2.pattern && object2.pattern == object3.pattern || object1.pattern != object2.pattern && object2.pattern != object3.pattern))
{
alert("yes its a SET");

}

else {
  alert("no its not a set");
}
