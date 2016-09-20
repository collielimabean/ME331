/**
 * William Jen
 * ME 331, Section 305
 * Week 3, L1, #5
 */

function human(smile)
{
  var body, head, rightLeg, leftLeg, hands, g;
  body = cube(1, 6, 2);
  head = sphere(1.5);
  
  if (smile)
  {
    var r_eye = cube(0.2, 0.4, 0.2).translate(0.75, 0.5, 1.15);
    var l_eye = cube(0.2, 0.4, 0.2).translate(-0.75, 0.5, 1.15);
    var mouth = torus(1, 0.4, 16).rotateX(45).translate(0, -0.5, 1.65);

    head = head.difference(mouth).union(r_eye).union(l_eye).rotateY(90);
  }
  
  head.translate(0, 4.25, 0);
  
  rightLeg = cube(1, 4, 1).rotateX(45).translate(0, -4, -2);
  leftLeg = cube(1, 4, 1).rotateX(-45).translate(0, -4, 2);
  hands = cube(1, 1, 8).translate(0, 2.5, 0);
  g = body.union(head).union(rightLeg).union(leftLeg).union(hands);
  
  return g.rotateX(90);
}

for (var col = 0; col < 5; col++)
{
    for (var row = 0; row < 5; row++)
    {
        var is_smiling = Math.random() > 0.5;
        human(is_smiling).translate(15 * row, 15 * col, 0).display();
    }
}
