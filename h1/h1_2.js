/**
 * William Jen
 * ME 331, Section 305
 * Homework 1, #2
 */

t = 0.2;

g1 = cube(t, 1, 5).rotateZ(90);
g2 = g1.clone().translate(0.5, 3 - t / 2, 2.5);
g3 = cube(t, 3 - 2 * t, 5).translate(0.5, 1.5, 2.5);

g1.translate(0.5, t / 2, 2.5);
g1.union(g2).union(g3).display();
