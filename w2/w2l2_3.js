/**
 * William Jen
 * ME 331, Section 305
 * Week 2, Lab 2
 */

e1 = cube(0.25,0.25,10);
e1 = e1.union(e1.clone().translate(1.25,0,0));

// note: I was lucky that there were 10 rungs
for (var i = 0; i < 10; i++)
{
  // implicit in the translate is i * unit distance - initial
  e2 = cube(1.7,0.1,0.1).translate(0.625,0.175,i-4.5);
  e1 = e1.union(e2);
}

e1.display();
