/**
 * William Jen
 * ME 331, Section 305
 * Week 2, Lab 2, #4
 */


function genLegoMount()
{
  var lego_mount = cylinder(7/18, 0.5).rotateX(90);
  var text = textGeom("LEGO", 0.15, 0.05).translate(-0.25, -0.125, 0.25);
  
  return lego_mount.union(text).rotateZ(90);
}


g_base = cube(7, 4, 2.5).translateX(3.5);

for (var col = 0; col <= 1; col++)
{
  var y_offset = (col === 0) ? 1 : -1;
  for (var row = 0; row < 4; row++)
  {
      var x_offset = 7/18 * ((4 * row) + 3);
      var block = genLegoMount().translate(x_offset, y_offset, 1.5);
      g_base = g_base.union(block);
  }
}

g_base.display();
