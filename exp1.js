var person = prompt("Please enter your name","");
if(person==null){
    txt = "you pressed cancel"
}
else if(person=""){
    txt = "Enter name";
}
else{
    txt = "hello" + person + "hai";
    
}
window.alert(txt);