


var object1 = { color:"red", shape:"square", number:1, shading:"full"};
var object2 = { color:"green", shape:"circle", number:2, shading: "empty"};
var object3 = { color:"blue", shape:"triangle", number:3, shading: "shred"};
var object4 = { color:"red", shape:"square", number:1, shading: "shred"};
var object5 = { color:"blue", shape:"triangle", number:3, shading: "full"};
var object6 = { color:"red", shape:"square", number:2, shading: "empty"};
var object7 = { color:"green", shape:"circle", number:1, shading: "full"};


if ((object1.color == object2.color && object2.color == object3.color || object1.color != object2.color && object2.color != object3.color) &&
(object1.number == object2.number && object2.number == object3.number || object1.number != object2.number && object2.number != object3.number) &&
(object1.shape == object2.shape && object2.shape == object3.shape || object1.shape != object2.shape && object2.shape != object3.shape) &&
(object1.shading == object2.shading && object2.shading == object3.shading || object1.shading != object2.shading && object2.shading != object3.shading))
{
alert("yes its a SET");
}

else {
  alert("no its not a set");
}
