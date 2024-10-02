// Enter your code below.
let div = document.querySelector('.javascript-resources');
let button = document.querySelector('#show-resources');

button.addEventListener("click", evenHandler);
function evenHandler() {
    div.classList.remove('d-none');
}


div.addEventListener("mouseover", (event)=> {
    
    console.log(event.target)
    event.target.classList.add("fw-bold")
    
})
div.addEventListener("mouseout", (event)=> {
    console.log(event.target)
  
    event.target.classList.remove("fw-bold")
})
div.addEventListener("click", (event)=> {
    console.log(event.target)
  
    event.target.classList.add("fst-italic")
})
