/**
 * William Jen
 * ME 331 Section 305
 * Week 2, Lab 1 #4
 * Fillet
 */

g = cube(70, 70, 25).translate(35, 35, -12.5);
g1 = cube(70, 70, 25).rotateX(90).translate(35, -12.5, 10);
g2 = g.union(g1);


g3 = cylinder(10, 70).rotateZ(90).translate(35, 10, 10);
g4 = cube(10, 10, 70).rotateY(90).translate(35, 5, 5);
g5 = g4.difference(g3);

g2.union(g5).display();
