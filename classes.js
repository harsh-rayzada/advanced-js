/**
 * ES6 classes with super
 */

 class Car{
     constructor(make, model){
         this.make = make;
         this.model = model;
     }

     showCar(){
         console.log(`${this.make} made ${this.model}`);
     }
 }

 class CarYear extends Car{
     constructor(make, model, year){
         super(make, model); //calls parent's contructor and passes the data to it
         this.year = year;
     }

     showCar(){
         super.showCar();// calls parent's method
         console.log(`in ${this.year}`);
     }
 }

 let myCar = new CarYear('Bugatti', 'Veyron', 2005);
 myCar.showCar();