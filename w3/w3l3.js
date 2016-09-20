/**
 * William Jen
 * ME 331, Section 305
 * W3, L1 #3
 */

function cb(d1, d2, d, t)
{
    var hole = cylinder(d2, d).translateY(-d / 2);
    var thru = cylinder(d1, t).translateY(-t / 2);
    return hole.union(thru).rotateX(90);
}

plate = cube(10, 10, 2);
hole1 = cb(0.8, 1, 0.2, 2).translateZ(1);
hole2 = cb(0.3, 0.8, 0.5, 2).translate(2, 0, 1);
hole3 = cb(0.4, 1, 0.5, 2).translate(0, -3, 1);

plate = plate
  .difference(hole1)
  .difference(hole2)
  .difference(hole3);

plate.rotateX(-90).display();
