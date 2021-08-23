class Slingshot{
    constructor(bodyA, pointB){ //string ,thread 
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
        this.sling = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.sling);

    }
    fly(){
        this.sling.bodyA =null; //polygon
    }
    display(){
        if(this.sling.bodyA){
        var posA = this.sling.bodyA.position;
        var pointB = this.pointB;
        
        strokeWeight(4);
        stroke("turquoise");
        line(posA.x, posA.y, pointB.x, pointB.y);
        }
        }
    
}