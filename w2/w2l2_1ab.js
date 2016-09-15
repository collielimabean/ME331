/**
 * William Jen
 * W2L2, #1ab
 */

MAX_HEIGHT = 10;
MAX_WIDTH = 2 * MAX_HEIGHT;
THICKNESS = 2;
ROUNDED_RADIUS = 3;
USE_ROUNDED_CORNER = false;


s = start2DGeom(0, 0);

if (USE_ROUNDED_CORNER)
{
  s.addLine(0, MAX_HEIGHT - ROUNDED_RADIUS);
  s.addArc(ROUNDED_RADIUS, MAX_HEIGHT, ROUNDED_RADIUS, MAX_HEIGHT - ROUNDED_RADIUS, true);
}
else
{
  s.addLine(0, MAX_HEIGHT);
}

s.addLine(MAX_WIDTH / 2, MAX_HEIGHT);
s.addLine(13 * MAX_WIDTH / 20, MAX_HEIGHT / 2);
s.addLine(MAX_WIDTH, MAX_HEIGHT / 2);
s.addLine(3 * MAX_WIDTH / 4, 0);

extrudeShape(s, THICKNESS).rotateY(90).rotateX(90).display();
