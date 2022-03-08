import './less/index.less'

// Your code goes here!
document.addEventListener('load',window.alert("Welcome to my maximally-invasive site full of pop-ups and minimal functionality!"));
const navAnchors = document.querySelectorAll("nav a");

navAnchors.forEach(val => {
    val.style.alignSelf = 'center';
    val.addEventListener('mouseover',(event) => event.target.style.fontSize = '2.5rem');
    val.addEventListener('mouseout',(event) => event.target.style.fontSize = '2rem');
    } );
const firstHeader = document.querySelector("h1");
firstHeader.addEventListener('mouseover', (event) => event.target.innerHTML = `<span style='color:red'>F</span><span style='color:orange'>u</span><span style='color:yellow'>n</span> <span style='color:green'>B</span><span style='color:blue'>u</span><span style='color:purple'>s</span>`);
firstHeader.addEventListener('mouseout', (event) => event.target.innerHTML = `Fun Bus`);
const signupButtons = document.querySelectorAll(".btn");
signupButtons.forEach(val => {
    val.addEventListener('click', (event) => {
        event.target.innerText = 'No more availability!';
        event.target.style.backgroundColor = 'red';
        event.target.addEventListener('mouseout', (event) => event.target.style.color = 'white');
        event.target.addEventListener('mouseover', (event) => event.target.style.color = 'black');
        
    } )
} )
// {Array.from(document.querySelectorAll("h1,h2,h3,h4,h5,h6,h7,p,a,button")).forEach(val => {
//     val = val.innerHTML.split("").map(val => `<span>${val}</span>`).join(""); } )}
// // console.log(allLetters);
document.addEventListener('keydown',(event) => {
    const textArray = Array.from(document.querySelectorAll("h1,h2,h3,h4,h5,h6,h7,p,a,button"));
    textArray.forEach(val => {
    val.innerHTML = val.innerHTML.split("").map( val => val === event.key && event.key !== "r" && event.key !== 'e' && event.key !== 'd' && event.key !== "c" && event.key !== "o" && event.key !== "l"  ? `<span style='color:red'>${event.key}</span>` : val).join("");
    } );  
}) 

// document.addEventListener('keyup',event => {
//     document.querySelectorAll("span").forEach( val => val.outerHTML = event.key); 
// });