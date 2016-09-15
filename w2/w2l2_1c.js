/**
 * William Jen
 * ME 331, section 305
 * Week 2, Lab 2 #1c
 */

s = start2DGeom(0, 45);
s.addLine(-25, 45);
s.addLine(-25, -25);
s.addLine(70, -25);
s.addLine(70, 0);

// no fillet
//s.addLine(0, 0);

// fillet with radius 2
s.addLine(5, 0);
s.addArc(0, 5, 5, 5, true);

extrudeShape(s, 70).rotateY(90).rotateX(90).display();
