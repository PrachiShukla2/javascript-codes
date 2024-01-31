// classes
// class pizza{
//     // In a constructor function this does not have a value. It is a substitute for the new object. The value of this will become the new object when a new object is created.
//     constructor(pizzaType){
//         this.type =  pizzaType;
//         this.size ="medium";
//         this.crust ="original";
//     }
//     //  we can access any value by directly using get keyword it acts lyk a method
//     get pizzaCrust(){
//         return this.crust;
//     }
//     // by using set we can directly set the value of our set 
//     set pizzaCrust(pizzaCrust){
//         this.crust = pizzaCrust;
//     }
//     bake(){
//         console.log(`baking ${this.size} ${this.crust } ${this.type} crust pizza`);
//     }
// }
// const myPizza = new pizza("pastapizza");
// // new keyword is used to construct a  object from a constructor function
// myPizza.bake();


//  introduction to child classes
// basic pizza class



// // child classes
// class specialPizza extends pizza{
//   constructor(pizzaSize){
//     super(pizzaSize);
//         this.type = "the workspace";

//     }
//     slice(){
//         console.log(`our ${this.type} ${this.size} pizza has 8 slices`);
//     }
// }
//     const mySpecial = new specialPizza("medium");
//     mySpecial.slice();
 

// factory function i s a function  that returns an object.
// is useful because when we have complex logic and we have to create multiple objects again and again taht have the same logic  we can write the logic once in a function and use that function as a factory to create our objects .it is same as the  real world factory  producing products
// function pizzaFactory(pizzaSize){
//     const crust = "original";
//     const size = pizzaSize;
//     return{
//         bake :()=>console.log(`baking a ${size} ${crust} crust pizza`)
//     };
// }
// const myPizza = pizzaFactory("small");
// myPizza.bake();
// The main aim to use factory function in JavaScript is to create objects without using the new keyword.


class pizza{
    // public field
    crust = "original";
    // private field
    #sauce ="spicy";
    #size;
    // both private and public field must be decalared above the constructor
    constructor(pizzaSize){
        this.#size =pizzaSize;
       

    }
    getCrust(){
        return this.crust;
    }
    setCrust(pizzaCrust){
        this.crust=pizzaCrust;
    }
    showSauce(){
        console.log(`here is mine ${this.crust} ${this.#sauce} sauce ${this.#size} pizza`);
    }
}
const myPizza = new pizza("large");
myPizza.showSauce();
// public fields allow us to access it through dot location 
// private fields allow us to  location only using # 
// In JavaScript, we can make a field private by prefixing it with # (hash) or _ (underscore). This makes the property private and accessible only within the class where it’
// we can not directly call it on object but we can call through methods.
