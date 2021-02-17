class Dustbin1
{
    constructor(x,y)
    {
        var options={
            isStatic:true
        }

        this.body = Bodies.rectangle(x,y,200,20,options);
        this.width = 200;
        this.height = 200;
        this.image = loadImage("dustbin.png");
        World.add(world,this.body);
      }
    
    display()
    {
      var pos = this.body.position;
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.width, this.height);
    }
}