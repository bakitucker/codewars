// Write a class Block that creates a block (Duh..)

// Requirements
// The constructor should take an array as an argument, this will contain 3 integers of the form [width, length, height] from which the Block should be created.

// Define these methods:

// `getWidth()` return the width of the `Block`

// `getLength()` return the length of the `Block`

// `getHeight()` return the height of the `Block`

// `getVolume()` return the volume of the `Block`

// `getSurfaceArea()` return the surface area of the `Block`




class Block{

    constructor(data){
      this.w = data[0]
      this.l = data[1]
      this.h = data[2]
    }
    
   getWidth(){
     return this.w
   }
      
    getLength(){
     return this.l
   }
    getHeight(){
     return this.h
   }
      
    getVolume(){
     return this.w * this.h * this.l
   }
      
    getSurfaceArea(){
     return 2 * this.w * this.l + 2 * this.l * this.h + 2 * this.h * this.w
   }
  
  } 