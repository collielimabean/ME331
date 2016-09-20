/**
 * William Jen
 * ME 331, Section 305
 * W3, L1 #2
 */

function bushing(height, d_i, d_o)
{
  var out = cylinder(d_o / 2, height);
  var inner = cylinder(d_i / 2, height);
  return out.difference(inner);
}

/* test code */
b1 = bushing(0.8,0.5,1);
b1.display();
b2 = bushing(0.4, 0.7, 1.1).translateY(2);
b2.display();
