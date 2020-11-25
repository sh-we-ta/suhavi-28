class Tree{
constructor(x,y,w,h){
var options={
    isStatic:true
}
this.body=Bodies.rectangle(x,y,w,h,options)
this.width=w;
this.height=h;
this.image=loadImage("tree.png")
World.add(world,this.body)


}
display(){
var pos=this.body.position;
push()
translate(pos.x,pos.y);
//fill("green");
imageMode(CENTER);
image(this.image,0,-this.height/2,this.width,this.height);
pop()
}
}




