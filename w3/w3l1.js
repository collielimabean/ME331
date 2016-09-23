/**
 * William Jen
 * ME 331, Section 305
 * W3, L1 #1
 */

holes = 6;

plate = cylinder(1, 0.25);

for (var i = 0; i < holes; i++)
{
  var rad = (2 * Math.PI / holes) * i;
  var hole = cylinder(0.1, 0.5).translate(0.8 * Math.sin(rad) , 0.125, 0.8 * Math.cos(rad));
  plate = plate.union(hole);
}

plate.display();
