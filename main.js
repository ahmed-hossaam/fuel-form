// option fuel
const option1Checkbox = document.getElementById('option1');
const fuelOptionDiv = document.querySelector('.fuel-option');
const hiddenTextarea = document.querySelector('.hidden-textarea');
const nextButton = document.getElementById('nextButton');

let clickCount = 0; 
option1Checkbox.addEventListener('change', function() {
    if (this.checked) {
        fuelOptionDiv.classList.remove('hidden');
    } else {
        fuelOptionDiv.classList.add('hidden');
    }
});

nextButton.addEventListener('click', function(event) {
    clickCount++;
    if (clickCount === 1) {
        event.preventDefault(); 
        fuelOptionDiv.classList.add('hidden');
        hiddenTextarea.classList.remove('hidden');
    } else if (clickCount === 2) {
    }
});

// ---------------
const nextButtonPage1 = document.querySelector('.next');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');

const nextButtonPage2 = document.getElementById('nextButton');
const textarea = document.querySelector('.hidden-textarea');
const page3 = document.getElementById('page3');

let page2NextClicked = false;

nextButtonPage1.addEventListener('click', function (e) {
    e.preventDefault(); 
    page1.style.display = 'none';  
    page2.style.display = 'block'; 
});

nextButtonPage2.addEventListener('click', function (e) {
    e.preventDefault();  

    if (!page2NextClicked) {
        textarea.classList.remove('hidden');
        page2NextClicked = true;
    } else {
        page2.style.display = 'none'; 
        page3.style.display = 'block';
    }
});

const backButtonPage2 = document.querySelector('.back-page2');
backButtonPage2.addEventListener('click', function (e) {
    e.preventDefault();           
    page2.style.display = 'none'; 
    page1.style.display = 'block';
});

const backButtonPage3 = document.querySelector('.back-page3');
backButtonPage3.addEventListener('click', function (e) {
    e.preventDefault();           
    page3.style.display = 'none'; 
    page2.style.display = 'block';
});
/// location
let accuracyI = document.querySelector("#Accuracy");

let googleI = document.querySelector("#Google");

let speedI = document.querySelector("#Speed");

let longitudeI = document.querySelector("#Longitude");

let latitudeI = document.querySelector("#Latitude");

let buttonI = document.querySelector("#getLocation");

buttonI.addEventListener("click", () => {

    navigator.geolocation.getCurrentPosition(position => {

        let { latitude, longitude, accuracy, speed } = position.coords;

        accuracyI.value = `${accuracy} m`;

        longitudeI.value = longitude;

        latitudeI.value = latitude;

        speedI.value = `${speed | 0} m/s`;

        googleI.value = `https://google.com/maps?q=${latitude}, ${longitude}`;

    });

});


// Navbar


window.addEventListener("resize", () => {

    if (window.innerWidth >= 992) {

        if (toggled) {

            menuButton.click();

        }

    }

});

menuButton.addEventListener("click", () => {

    if (!toggled) {

        if (languageText.innerText == "AR") {

            menu.style.height = "252px";

        } else {

            menu.style.height = "272px";

        }

        toggled = true;

    } else {

        menu.style.height = "0px";

        toggled = false;

    }

});