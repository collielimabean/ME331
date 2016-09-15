/**
 * William Jen
 * ME 331, section 305
 * Week 2, Lab 2 #2 via 3D objects
 */

MUG_RADIUS = 10;
MUG_THICKNESS = 1;
MUG_BOTTOM_THICKNESS = 1;
MUG_HEIGHT = 20;
HANDLE_RADIUS = 6;

g_hole = cylinder(MUG_RADIUS - MUG_THICKNESS, MUG_HEIGHT - MUG_BOTTOM_THICKNESS)
             .translateY(MUG_BOTTOM_THICKNESS);
g_mug = cylinder(MUG_RADIUS, MUG_HEIGHT).difference(g_hole);

g_handle = torus(HANDLE_RADIUS, HANDLE_RADIUS / 5, 16)
  .rotateY(90)
  .translateZ(MUG_RADIUS)
  .difference(g_hole);

g_mug.union(g_handle).rotateX(90).translateZ(MUG_HEIGHT / 2).display();
