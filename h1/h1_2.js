/**
 * William Jen
 * ME 331, Section 305
 * Homework 1, #2
 */

t = 0.2;

pts = [
	[0, 0], [t, 0], [t, (t - 1) / 2],
	[3 - t, (t - 1) / 2], [3 - t, 0],
	[3, 0], [3, -1], [3 - t, -1],
	[3 - t, -(1 + t) / 2], [t, -(1 + t) / 2],
	[t, -1], [0, -1]
];

extrudeShape(polygon(pts), 5).rotateZ(90).display();
