class tree
{
    constructor(x,y,width,height)
    {



      this.x = x
      this.y = y 
      this.w = width
      this.h = height 

      var trunk
      var trunkImage

      trunkImage = loadImage("tree.png")

      trunk = createSprite(this.x,this.y,this.w,this.h)

      trunk.addImage("trunk",trunkImage)

      trunk.scale = 0.40
    }
    display()
        {
             
        }
}
