class Stone{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2,
        }
        
        this.r=50;

        this.body=Bodies.circle(x,y,this.r/2,options)
        this.image=loadImage("stone.png")
        World.add(world,this.body)
    }
display(){
    var stonePos=this.body.position;
    push()
    translate (stonePos.x,stonePos.y)
    fill("purple")
    imageMode(RADIUS);
    image(this.image,0,0,this.r,this.r);
    pop ()

}









}