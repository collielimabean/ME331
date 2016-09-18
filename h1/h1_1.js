/**
 * William Jen
 * ME 331, Section 305
 * Homework 1, #1
 */

// start with base sketch, and extrude
arc = [0, 0, 0, -1.25, true];
base_pts = [
  [0, 0], [3, 0], [3.53, -0.75],
  [3.53, -1.75], [3, -2.5], [0, -2.5],
  arc
];

base_sketch = polyarc(base_pts);
g_base = extrudeShape(base_sketch, 1.5);

// make the hole
g_hole = cylinder(0.5, 1.5).rotateX(90).translate(0, -1.25, 0.75);

// prep the slanted face
g_rect = cube(2.03, 2.5, 1).translate(2.515, -1.25, 1);
slanted_pts = [[0, 0], [0, 1], [2.03, 0]]; 
g_slanted = extrudeShape(polygon(slanted_pts), 1);
g_slanted.rotateX(90).translate(1.5, -0.75, 0.5);

// bring it all together
g_base = g_base.difference(g_hole).difference(g_rect).union(g_slanted);
g_base.display();
g_base.info();