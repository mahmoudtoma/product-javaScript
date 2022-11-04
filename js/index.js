




/* Sart Setting Box */
document.querySelector('.icon-box .fa-gear').onclick = function () {
    
    document.querySelector('.setting-box').classList.toggle('open');
} 
/* End Setting Box */


/* Start change Color */ 
var colorLI = document.querySelectorAll('.ul-color li');
    arr = [];

    // get Local Storage
    localColor = localStorage.getItem('color-option');

    if (localColor !== null) {
        document.documentElement.style.setProperty('--Maine-color', localColor);
    }
    

    for(var i = 0; i < colorLI.length; i++) {
        arr.push(colorLI[i].getAttribute('data-type'))

    colorLI[i].addEventListener('click', function() {
        document.documentElement.style.setProperty('--Maine-color', this.getAttribute('data-type'))

    // add the color in local storage
        localStorage.setItem('color-option', this.getAttribute('data-type'));   
    })
}
    // active Color Body
let activeColor = document.querySelectorAll('.ul-color li');
activeColor.forEach(Element => {
    Element.addEventListener('click', function () {
        activeColor.forEach(ele => ele.classList.remove('active'));
        Element.classList.add('active');        
    });
});


/* End change color */
/* Start Landing Image */

var landingPage = document.querySelector('.landing-page');
    arrLandingImge = ["image/img1.jpg", "image/img2.jpg", "image/img3.jpg", "image/img4.jpg", "image/img5.jpg"];

    let backgroundOption = true;
    let startSetInterval;

    function start() {

        if ( backgroundOption === true ) {

    startSetInterval = setInterval(() => {
                var randomImge = Math.floor(Math.random() * arrLandingImge.length);
        
                landingPage.style.backgroundImage = 'url("' + arrLandingImge[randomImge] + '")';
        
            },10000)
        }
    } 

    start()

/* End Landing Image */

/* Start Random Background */ 

    
let activeRandomBackground = document.querySelectorAll('.click-random span');
    
activeRandomBackground.forEach(Element => {
        Element.addEventListener('click', function () {
            
                // active Random Background
            activeRandomBackground.forEach(ele => ele.classList.remove('active'));
            this.classList.add('active'); 

                // start and clear interval
            if (Element.getAttribute('backgroundImge') === 'yes') {
                start()
                localStorage.setItem('background-option', true)
            } else {
                clearInterval(startSetInterval)
                localStorage.setItem('background-option', false)
            }

            });
});

let backgroundStorage = localStorage.getItem("background-option");

                if (backgroundStorage !== null) {

                    if (backgroundStorage === 'true') {

                        backgroundOption = true;

                    }  else {

                        backgroundOption = false;
                    
                    }
                }
    

/* End Random Background */
    
/* End change Color */

/* Start header Tow */
var myNotification = document.querySelector(".notifications-on");
    myNotifications = document.querySelector(".notifications");

function myNotificatione() {

    if (myNotification.style.visibility === "hidden") {
      myNotification.style.visibility = "visible";
      myNotifications.style.color = "var(--Maine-color)";
      document.querySelector(".Explore-on").style.visibility = "hidden";
    } else {
      myNotification.style.visibility = "hidden";
      myNotifications.style.color = "#000";

      
    }
  }

  var myExploreOn = document.querySelector(".Explore-on");
      myExplore = document.querySelector(".Explore")
  function myExploreOns() {

    if (myExploreOn.style.visibility === "hidden") {
        myExploreOn.style.visibility = "visible";
        myExplore.style.color = "var(--Maine-color)"
        document.querySelector(".notifications-on").style.visibility = "hidden";
        myNotifications.style.color = "#000";

    } else {
        myExploreOn.style.visibility = "hidden ";
        myExplore.style.color = "#000";


        
    }
  }
/* End header Tow */
/* Start ScrollTop */
var scrollTop = document.querySelector('.scroll-top .scro');

const btnVisibility = () => {
    if (window.scrollY > 600) {
        scrollTop.style.visibility = "visible";
    } else {
        scrollTop.style.visibility = "hidden";
    }
};

document.addEventListener("scroll", () => {
    btnVisibility();
});
scrollTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
/* End ScrollTop */
