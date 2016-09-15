/**
 * William Jen
 * ME 331 Section 305
 * Week 2, Lab 1, #3
 */

// parameters
var PIN_LENGTH = 4;
var PIN_HEIGHT = 3;
var EDGE_RADIUS = PIN_HEIGHT / 2;
var EDGE_HOLE_RADIUS = 0.75;
var EDGE_VERT_HOLE_WIDTH = 0.75;
var EDGE_VERT_HOLE_START = 2;
var HANDLE_RADIUS = 0.5;
var HANDLE_LENGTH = 2;

// main body
g_cube = cube(PIN_LENGTH, PIN_HEIGHT, PIN_HEIGHT);
g_cube.translateX(PIN_LENGTH / 2);

// outer features - rounded edge and vertical subtraction
g_edge = cylinder(EDGE_RADIUS, PIN_HEIGHT);
g_edge.translateX(PIN_LENGTH);

g_edge_hole = cylinder(EDGE_HOLE_RADIUS, PIN_HEIGHT);
g_edge_hole.translateX(PIN_LENGTH);

g_edge_vert_hole = cube(PIN_LENGTH, EDGE_VERT_HOLE_WIDTH, PIN_LENGTH);
g_edge_vert_hole.translateX(EDGE_VERT_HOLE_START + PIN_LENGTH / 2);

// "handle" - the cylinder on the body
g_handle = cylinder(HANDLE_RADIUS, HANDLE_LENGTH);
g_handle.rotateZ(90);
g_handle.translateX(-HANDLE_LENGTH / 2);

// union
g_body = g_cube.union(g_edge)
               .difference(g_edge_hole)
               .difference(g_edge_vert_hole);

g_pin_joint = g_body.union(g_handle);

// display
g_pin_joint.display();
