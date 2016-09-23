/**
 * William Jen
 * ME 331, Section 305
 * Lab Assignment 1
 */

s = 1;
t = 0.05 * s;
d = 1.5 * s - t;
l = 20 * s - t;
w = 8 * s - t;
spacing = 2 * s;
hole_size = 4 * s + t;

g_base = cube(w, l, d).translate(w / 2, l / 2, d / 2);

g_circle_hole = cylinder(hole_size / 2, 2 * d).rotateX(90).translate(w / 2, spacing + hole_size / 2, d);
g_square_hole = cube(hole_size, hole_size, 2 * d).translate(w / 2, spacing * 2 + hole_size * 1.5, d);

tri_offset = 3 * spacing + 2 * hole_size;
tri_pt = [
  [spacing + hole_size, tri_offset],
  [spacing, tri_offset + hole_size / 2],
  [spacing + hole_size, tri_offset + hole_size]
];

tri_sketch = polygon(tri_pt);
g_tri = extrudeShape(tri_sketch, 2 * d);

g_base = g_base
  .union(g_circle_hole)
  .union(g_square_hole)
  .union(g_tri);

g_base.display();
