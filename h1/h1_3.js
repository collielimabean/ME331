/**
 * William Jen
 * ME 331, Section 305
 * Homework 1, #3
 */

function makeHole(length, width)
{
  var a = cube(length, width, 10).rotateZ(90);
  var b = cylinder(width / 2, 10).rotateX(90).translateY(length / 2);
  return a.union(b).rotateZ(-90).translate(length / 2, width / 2, 0);
}

/**
 * Approach:
 * Since this part is symmetrical, we can just create
 * a half of the part and mirror it over. We thus 
 * assign the top left as the origin, and then
 * continually subtracting out the holes at the
 * determined offsets.
 */
g1 = cube(40, 80, 10).translate(20, 40, 0);

for (i = 6, y_offset = 10; i < 10; i++, y_offset += 10 + i)
{
  var hole_length = 3 * i;
  var x_offset = (40 - hole_length) / 2;
  var hole = makeHole(hole_length, i).translate(x_offset , y_offset, 0);
  g1 = g1.difference(hole);
}

// mirror across x axis for final product
g1.union(g1.clone().mirrorX()).display();
