// web storage api
// not part of the DOM - refers to window API
// available to js via the global variable :window
// we donot have to type window it is  implied.

const object ={
    name :"prachi",
    logName : function(){
        console.log(this.name);

    }
};
const array =["eat ","sleep","code"];
sessionStorage.setItem("mysessionStore", object);

// The sessionStorage object let you store key/value pairs in the browser.
// The sessionStorage object stores data for only one session.

// (The data is deleted when the browser is closed).
// The localStorage Object which stores data with no expiration date.

// (The data is not deleted when the browser is closed, and are available in future sessions).

// we can check the output on  inspect go  to  application then seesion and local storage 


// we can remove items from loacal storage too by using :-
localStorage.removeItem('myLocalStore');