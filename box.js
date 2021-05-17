class box{
    constructor(x,y,width,height){
        var options={
            "isStatic":false,
            "restitution":0.8,
            "friction":1.0,
            "density":20,
            
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){

        push();
        rectMode(CENTER);
        fill("red");
        stroke("black");
        strokeWeight(1);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }
}