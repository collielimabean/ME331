/*
 * ME 331 Week 1 Lab 1
 * Section 305
 * Name: William Jen
 */

function create_ear()
{
    g_stalk = cylinder(1.5, 4).rotateX(90);
    g_bulb = sphere(2);
    g_bulb.translateZ(3);
    return g_bulb.union(g_stalk).translateZ(4.5);
}

// build main bug body
g_head = cylinder(10, 5).rotateX(90);
g_body = g_head.clone();
g_tail = g_head.clone();

g_body.translateY(15);
g_tail.translateY(30);

// build eyes and adjust head model
g_left_eye = cylinder(1, 4).rotateX(90);
g_right_eye = g_left_eye.clone();

g_left_eye.translate(-4, -4, 0.5);
g_right_eye.translate(4, -4, 0.5);

g_head = g_head.difference(g_left_eye);
g_head = g_head.difference(g_right_eye);

// build ears and adjust head model
g_left_ear = create_ear();
g_right_ear = create_ear();

g_left_ear.translateX(-6);
g_right_ear.translateX(6);

g_head = g_head.union(g_left_ear).union(g_right_ear);

// union the entire bug as a model
g_bug_body = g_head.union(g_body).union(g_tail);

// display the bug
g_bug_body.display('yellow');
