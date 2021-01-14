class Boy{


    constructor(x,y,width,height,world)
    {

        var options = {

         isStatic:true,
         restitution: 0,
         friction: 1

        }
   

       this.x = x
       this.y = y
       this.w = width
       this.h = height
     
       this.boy = Bodies.rectangle(this.x,this.y,this.w,this.h,options)
       World.add(world,this.boy)

       var boyIm

       boyIm = loadImage("boy.png")

       this.boy = createSprite(this.x,this.y,this.w,this.h)

       this.boy.addImage("boy",boyIm)

       this.boy.scale = 0.10



    }



    display()
    {
        
       this.boy.x = this.boy.position.x
       this.boy.y = this.boy.position.y

    }
}