function validateForm(){
    let x = document.forms["mayForm"]["faname"].value;
    if(x==""){
        alert("Name must be filled out");
        return false;
    }
}