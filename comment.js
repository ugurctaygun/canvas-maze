//Create mouse element with drag and drop function

World.add(world, MouseConstraint.create(engine, {
    mouse: Mouse.create(render.canvas)
}));


//Random Shapes and shape positions

for(let i=0; i<20; i++) {
    if(Math.random() > 0.5) {
        World.add(world,Bodies.rectangle(Math.random()*width,Math.random()* height,70,70 ));
    } else {
        World.add(world,Bodies.circle(Math.random()*width,Math.random()* height,35, {
            render: {
                fillStyle: 'orange'
            }
        } ));
    }   
};
