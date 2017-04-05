The set-puzzle is a game where you match 3 objects that have 4 different properties and every single property holds 3 different values.
The 4 properties and their values are:
property  /      Value
Number   /      1, 2, 3.
Color        /      Red, Blue, Green.
Shading   /      solid, stripped, outlined.
Shape      /      circle, square, triangle.

For the 3 objects to be a Set they need to have either the same or different property values in comparison to each other.
in a mathematical way, for 3 objects [A, B, and C] to be a set, all their properties values must fulfill this basic algebra rule when compared to each other [ A = B = C] or  [A ≠ B ≠ C]  
Which means:
[object1.property1.value  =  object2.property1.value  =  object3.property1.value ]
           ********  OR  *********
[object1.property1.value  ≠  object2.property1.value  ≠  object3.property1.value ]
You apply this rule to the 4 properties and if they all pass, then Congratulations you got a Set !!!!!!

For example:
object1 {
  color: "blue";
  number: 1;
  shape: "square";
  shading: "stripped";
}

object2 {
  color: "blue";
  number: 1;
  shape: "triangle";
  shading: "solid";
}
object3 {
  color: "blue";
  number: 3;
  shape: "circle";
  shading: "outlined";
}
So to check if these 3 objects are a Set, we will have to check their properties values in comparison to each other.
Let’s do that:
                  **** object1 color property is [blue] ******
                  **** object2 color property is [blue] ******
                  **** object3 color property is [blue] ******
So here we have the 3 color properties with 3 [equal] values in comparison to each other.  Therefore the color property passes, but we still have to check the rest of the properties.

Now let’s check the shape property:
                  **** object1 shape property is [square]  ******
                  **** object2 shape property is [triangle] ******
                  **** object3 shape property is [circle]    ******
Here we have 3 shape properties with 3 [different] values in comparison to each other, which still pass. Remember the simple rule: [For the 3 objects to be a Set they need to have either the same or different property values in comparison to each other.
]
*** You apply the same principle to the 2 other properties and if they fulfill the rule, *** Congratulations you have a Set!!! ***


Now let check another scenario where a property does not pass.
                **** object1 number property value is 1   ******
                **** object2 number property value is 1   ******
                **** object3 number property value is 3   ******
In this scenario we have the number property with 3 values, but these values partially equal each other’s, only 2 out of the 3 properties have the same value, and only 2 out of the 3 have different values.
When we put our result in a mathematical way we get this definition [A = B ≠ C] which doesn't fulfill our simple rule of [A = B = C  or  A ≠ B ≠ C]
