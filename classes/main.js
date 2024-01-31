// classes
class pizza{
    // In a constructor function this does not have a value. It is a substitute for the new object. The value of this will become the new object when a new object is created.
    constructor(pizzaType){
        this.type =  pizzaType;
        this.size ="medium";
        this.crust ="original";
    }
    //  we can access any value by directly using get keyword it acts lyk a method
    get pizzaCrust(){
        return this.crust;
    }
    // by using set we can directly set the value of our set 
    set pizzaCrust(pizzaCrust){
        this.crust = pizzaCrust;
    }
    bake(){
        console.log(`baking ${this.size} ${this.crust } ${this.type} crust pizza`);
    }
}
const myPizza = new pizza("pastapizza");
// new keyword is used to construct a  object from a constructor function
myPizza.bake();