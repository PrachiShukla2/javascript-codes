const view = document.querySelector("#view3");
// console.log(view);
const div = view.querySelector("div");
const h2 = div.querySelector("h2");
// The querySelector() method returns the first element that matches a CSS selector.
// To return all matches (not only the first), use the querySelectorAll() instead.

// Both querySelector() and querySelectorAll() throw a SYNTAX_ERR exception if the selector(s) is invalid.

// syntax : addEventListener(event ,function,usecapture)
const doSomething = () =>{
    alert("doing something");

};
h2.addEventListener("click",doSomething,false);
