/**
 * William Jen
 * ME 331, Section 305
 * W3, L1 #4
 */

function tree(n, x, y)
{
    var g1 = cylinder(1, 10);
    for (var i = 1; i < n + 1; i++)
    {
        var g2 = cone(10 - i, 0.1, 10).translate(0, 5 * i, 0);
        g1 = g1.union(g2);
      
        if (i % 2 === 0)
          g2.clone().rotateX(90).translate(x, y, 0).display("red");
        else
          g2.clone().rotateX(90).translate(x, y, 0).display("green");
          
    }

    return g1.rotateX(90).translate(x, y, 0);
}

NUM_TREES = 15;
MAX_HEIGHT = 10;
MAX_X = 50;
MAX_Y = 50;

for (i = 0; i < NUM_TREES; i++)
{
  var tree_height = Math.trunc(Math.random() * MAX_HEIGHT);
  
  // truncate may force height to zero. If so, force to size 1.
  tree_height = (tree_height === 0) ? 1 : tree_height;
  
  var x_pos = Math.trunc(Math.random() * MAX_X);
  var y_pos = Math.trunc(Math.random() * MAX_Y);

  tree(tree_height, x_pos, y_pos).display();
}

