
// make a function to be used when onclick in button


function addtask(){
// grab the textbox by input name

let y=document.getElementById("newtask");
// get the text from inside
let text=y.value;
if(text=='')
    return;
// to create a new div 
let newdiv=document.createElement("div");
// create a remove and done button
let rem=document.createElement('img');
let don=document.createElement('img');
let par=document.createElement('p');

// make the button like the others
don.classList.add('done');
rem.classList.add('buttons');

// add the image 
don.setAttribute('src','./images/verified.png');
rem.setAttribute('src','./images/reject.png');

// add the action to the image
don.setAttribute('onclick','taskdone(this)');
rem.setAttribute('onclick','removetask(this)');

// change text inside div to input
newdiv.append(don);
newdiv.append(par);

//give the grid class
newdiv.classList.add('alldivs');
// grab the grid and append
document.getElementById("grid").append(newdiv);

par.innerHTML=text;
par.classList.add('insidetext');

// add the buttons
newdiv.append(rem);

let c=document.getElementById("grid").children.length;
let  p=document.getElementById("count");
p.innerHTML="Your remaining tasks are : " +c;

document.getElementById("newtask").value='';
}


function removetask(ele){
console.log(ele)
// remove the parent div closest to it
ele.parentElement.remove()

let c=document.getElementById("grid").children.length;
let  p=document.getElementById("count");
p.innerHTML="Your remaining tasks are : " +c;
}


function taskdone(element){
element.parentElement.style.textDecoration="line-through"
console.log(element.parentElement)


}



// const paragraphElement = document.getElementById("count");

//     paragraphElement.addEventListener("click", totalcount);
// console.log(document.getElementById("grid").children.length);





