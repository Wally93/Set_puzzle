

/* check if its a set or not*/
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

  /* bind data to the cards */
$(document).ready(function(){
  $(".card1").data({ color:"red", shape:"squiggle", number:1, shading:"full"});
  $(".card2").data({ color:"green", shape:"squiggle", number:2, shading:"full"});
  $(".card3").data({ color:"green", shape:"diamond", number:1, shading:"full"});
  $(".card4").data({ color:"green", shape:"diamond", number:3, shading:"full"});
  $(".card5").data({ color:"green", shape:"oval", number:1, shading:"full"});
  $(".card6").data({ color:"red", shape:"oval", number:3, shading:"shred"});
  $(".card7").data({ color:"purple", shape:"oval", number:2, shading:"shred"});
  $(".card8").data({ color:"green", shape:"oval", number:1, shading:"shred"});
  $(".card9").data({ color:"purple", shape:"squiggle", number:3, shading:"empty"});
  $(".card10").data({ color:"green", shape:"squiggle", number:1, shading:"empty"});
  $(".card11").data({ color:"green", shape:"diamond", number:3, shading:"empty"});
  $(".card12").data({ color:"purple", shape:"diamond", number:1, shading:"empty"});

  $(".card3").click(function(){
      alert($(".card9").data("color"));
  });



  /* alert me when 3 checkboxes are checked */
  $("input[type=checkbox]").click(function CountCheckedBoxes(){
      if($("input[type=checkbox]:checked").length > 2){
      alert("3 cards are checked now!");
       }
       else {
      alert("3 cards not checked yet");
      }
      });
});

/* now I'm trying to bind every checkbox to its card, and then find a way to compare the 3 selected cards to each other*/
