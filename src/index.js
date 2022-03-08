import './less/index.less'

// Your code goes here!
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
})