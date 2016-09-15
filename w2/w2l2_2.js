/**
 * William Jen
 * ME 331 Section 305
 * W2L1, #2
 */

// left hole parameters
var LEFT_ROD_OUTER_RADIUS = 1.2;
var LEFT_ROD_THICKNESS = 0.2;

// right hole parameters
var RIGHT_ROD_OUTER_RADIUS = 0.55;
var RIGHT_ROD_THICKNESS = 0.1;

// middle section parameters
var BAR_LENGTH = 5;
var BAR_WIDTH = 0.8;
var ROD_THICKNESS = 0.8;

var UNION_OFFSET = 0.3;

// left cylinder
g_left_rod = cylinder(LEFT_ROD_OUTER_RADIUS, ROD_THICKNESS);
g_left_rod = g_left_rod.difference(cylinder(LEFT_ROD_OUTER_RADIUS - LEFT_ROD_THICKNESS, ROD_THICKNESS));

// right cylinder
g_right_rod = cylinder(RIGHT_ROD_OUTER_RADIUS, ROD_THICKNESS);
g_right_rod = g_right_rod.difference(cylinder(RIGHT_ROD_OUTER_RADIUS - RIGHT_ROD_THICKNESS, ROD_THICKNESS));

g_right_rod.translateX(-BAR_LENGTH);

// bar
g_bar = cube(BAR_LENGTH - LEFT_ROD_OUTER_RADIUS - RIGHT_ROD_OUTER_RADIUS + UNION_OFFSET, BAR_WIDTH, ROD_THICKNESS);
g_bar.translateX(-(BAR_LENGTH - LEFT_ROD_OUTER_RADIUS - RIGHT_ROD_OUTER_RADIUS) / 2-  LEFT_ROD_OUTER_RADIUS);

// union
g_wrench = g_left_rod.union(g_bar).union(g_right_rod);

// display
g_wrench.display();