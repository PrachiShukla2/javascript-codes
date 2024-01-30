// classes
class pizza{
    // In a constructor function this does not have a value. It is a substitute for the new object. The value of this will become the new object when a new object is created.
    constructor(){
        this.size ="medium";
        this.crust ="original";
    }
    bake(){
        console.log(`baking ${this.size} ${this.crust} crust pizza`);
    }
}
const pizza = new pizza();
// new keyword is used to construct a  object from a constructor function
pizza.bake();