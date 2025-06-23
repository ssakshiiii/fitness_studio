function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}


/////////////////////////// Cursor////////////////////

const circleElement = document.querySelector('.circle');

const mouse = { x:0, y:0};
const previousMouse = {x:0, y:0}
const circle = { x:0, y:0};
let currentScale = 0;
let currentAngle = 0;


window.addEventListener('mousemove',(e)=>{
  mouse.x = e.x;
  mouse.y = e.y;
})

const speed=0.17;

const tick = () =>{
  circle.x += (mouse.x - circle.x)*speed;
  circle.y += (mouse.y - circle.y)*speed;

  const translateTransform = `translate(${circle.x}px, ${circle.y}px)`

//Squeeze
const deltaMouseX = mouse.x - previousMouse.x;
const deltaMouseY = mouse.y - previousMouse.y;
previousMouse.x = mouse.x;
previousMouse.y = mouse.y;

const mouseVelocity = Math.min(Math.sqrt(deltaMouseX**2 + deltaMouseY**2) *4, 150);

const scaleValue = (mouseVelocity / 150) *0.5;

currentScale += (scaleValue - currentScale) * speed;
const scaleTransform = `scale(${1 + currentScale}, ${1-currentScale})`;


//Rotate
const angle = Math.atan2(deltaMouseY, deltaMouseX) * 180/Math.PI ;

if(mouseVelocity > 20){
  currentAngle = angle;
}

const rotateTransform = `rotate(${currentAngle}deg)`;



//Apply all transformations
circleElement.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`
  window.requestAnimationFrame(tick);
}


tick();

function enlargeImage(element) {
  var img = element.querySelector('img');
  var newTab = window.open();
  setTimeout(function() {
    newTab.document.body.innerHTML = img.outerHTML;
    newTab.document.body.style.width = '500px'; // Adjust width as needed
    newTab.document.body.style.margin = '0 auto'; // Center the image
  }, 500);
  return false;
}

//blog
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("fitnessLink").addEventListener("click", (e) => {
        e.preventDefault();
        toggleInfo("hiddenContent", "initialContent");
    });

    document.getElementById("nextLink").addEventListener("click", (e) => {
        e.preventDefault();
        toggleInfo("initialContent", "hiddenContent");
    });

    function toggleInfo(showId, hideId) {
        const showElement = document.getElementById(showId);
        const hideElement = document.getElementById(hideId);

        showElement.classList.remove("hidden");

        // Hide the other element
        hideElement.classList.add("hidden");
    }
});





var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
  loader.style.display = "none";
})
