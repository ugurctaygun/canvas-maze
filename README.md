MATTER JS

Start by deconstructing needed modules from Matter, const= {Bodies} = Matter

Bodies module is for creating rigid body modules with methods, Bodies.rectangle();

World module is used for placing the objects created, World.add(world, Bodies.rectangle());

MouseConstarint module is used to create mouse interactions.

MISC.

Match.Random() returns a number between 0 and 1. Multiplying it with the canvas width will allow us to randomly
place our objects

