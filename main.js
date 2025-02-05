// // option fuel
// const option1Checkbox = document.getElementById('option1');
// const fuelOptionDiv = document.querySelector('.fuel-option');
// const hiddenTextarea = document.querySelector('.hidden-textarea');
// const nextButton = document.getElementById('nextButton');

// let clickCount = 0; 
// option1Checkbox.addEventListener('change', function() {
//     if (this.checked) {
//         fuelOptionDiv.classList.remove('hidden');
//     } else {
//         fuelOptionDiv.classList.add('hidden');
//     }
// });

// nextButton.addEventListener('click', function(event) {
//     clickCount++;
//     if (clickCount === 1) {
//         event.preventDefault(); 
//         fuelOptionDiv.classList.add('hidden');
//         hiddenTextarea.classList.remove('hidden');
//     } else if (clickCount === 2) {
//     }
// });

// // ---------------
// const nextButtonPage1 = document.querySelector('.next');
// const page1 = document.getElementById('page1');
// const page2 = document.getElementById('page2');

// const nextButtonPage2 = document.getElementById('nextButton');
// const textarea = document.querySelector('.hidden-textarea');
// const page3 = document.getElementById('page3');

// let page2NextClicked = false;

// nextButtonPage1.addEventListener('click', function (e) {
//     e.preventDefault(); 
//     page1.style.display = 'none';  
//     page2.style.display = 'block'; 
// });

// nextButtonPage2.addEventListener('click', function (e) {
//     e.preventDefault();  

//     if (!page2NextClicked) {
//         textarea.classList.remove('hidden');
//         page2NextClicked = true;
//     } else {
//         page2.style.display = 'none'; 
//         page3.style.display = 'block';
//     }
// });

// const backButtonPage2 = document.querySelector('.back-page2');
// backButtonPage2.addEventListener('click', function (e) {
//     e.preventDefault();           
//     page2.style.display = 'none'; 
//     page1.style.display = 'block';
// });

// const backButtonPage3 = document.querySelector('.back-page3');
// backButtonPage3.addEventListener('click', function (e) {
//     e.preventDefault();           
//     page3.style.display = 'none'; 
//     page2.style.display = 'block';
// });

// /// location
// let accuracyI = document.querySelector("#Accuracy");

// let googleI = document.querySelector("#Google");

// let speedI = document.querySelector("#Speed");

// let longitudeI = document.querySelector("#Longitude");

// let latitudeI = document.querySelector("#Latitude");

// let buttonI = document.querySelector("#getLocation");

// let inputs= document.querySelectorAll(".form-control")

// buttonI.addEventListener("click", () => {

//     navigator.geolocation.getCurrentPosition(position => {

//         let { latitude, longitude, accuracy, speed } = position.coords;

//         accuracyI.value = `${accuracy} m`;

//         longitudeI.value = longitude;

//         latitudeI.value = latitude;

//         speedI.value = `${speed | 0} m/s`;

//         inputs.forEach(map=>{
//             map.style.backgroundColor="white"
//         })
//         googleI.value = `https://google.com/maps?q=${latitude}, ${longitude}`;


//     });

// });


// // Navbar


// window.addEventListener("resize", () => {

//     if (window.innerWidth >= 992) {

//         if (toggled) {

//             menuButton.click();

//         }

//     }

// });

// menuButton.addEventListener("click", () => {

//     if (!toggled) {

//         if (languageText.innerText == "AR") {

//             menu.style.height = "252px";

//         } else {

//             menu.style.height = "272px";

//         }

//         toggled = true;

//     } else {

//         menu.style.height = "0px";

//         toggled = false;

//     }

// });


// // validation

// Page 1 to Page 2 Navigation
const nextButtonPage1 = document.querySelector('.next'); // Button in Page 1
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');

// Function to check if fields are valid
function validatePage1() {
    const name = document.getElementById('name');
    const phone = document.getElementById('phone');
    const carType = document.getElementById('type');
    const carModel = document.getElementById('model');

    let isValid = true;

    // Validate Name
    if (name.value) {
        name.style.backgroundColor = "white"; // If valid, set to white
    } else {
        isValid = false;
    }

    // Validate Phone
    if (phone.value) {
        phone.style.backgroundColor = "white"; // If valid, set to white
    } else {
        isValid = false;
    }

    // Validate Car Type
    if (carType.value) {
        carType.style.backgroundColor = "white"; // If valid, set to white
    } else {
        isValid = false;
    }

    // Validate Car Model
    if (carModel.value) {
        carModel.style.backgroundColor = "white"; // If valid, set to white
    } else {
        isValid = false;
    }

    return isValid;
}

nextButtonPage1.addEventListener('click', function (e) {
    e.preventDefault();

    if (validatePage1()) {
        // If all fields are valid, proceed to Page 2
        page1.style.display = 'none';
        page2.style.display = 'block';
    } else {
        alert("Please fill in all the fields correctly.");
    }
});

// Page 2 to Page 3 Navigation
const nextButtonPage2 = document.getElementById('nextButton');
const fuelOptionDiv = document.querySelector('.fuel-option');
const hiddenTextarea = document.querySelector('.hidden-textarea');
const page3 = document.getElementById('page3');
let page2NextClicked = false;

nextButtonPage2.addEventListener('click', function (e) {
    e.preventDefault();

    // Check if at least one service is selected
    const selectedServices = document.querySelectorAll('input[name="options"]:checked');
    if (selectedServices.length === 0) {
        alert("Please select at least one service.");
        return;
    }

    // If "Fuel" service is selected, check if fuel type is chosen
    if (document.getElementById('option1').checked) {
        const selectedFuel = document.querySelector('input[name="fuel"]:checked');
        if (!selectedFuel) {
            alert("Please select a fuel type.");
            return;
        }
    }

    // Show the comments textarea if it hasn't been shown already
    if (!page2NextClicked) {
        hiddenTextarea.classList.remove('hidden');
        page2NextClicked = true;
    } else {
        // If everything is valid, go to Page 3
        page2.style.display = 'none';
        page3.style.display = 'block';
    }
});

// Back Button in Page 2
const backButtonPage2 = document.querySelector('.back-page2');
backButtonPage2.addEventListener('click', function (e) {
    e.preventDefault();
    page2.style.display = 'none';
    page1.style.display = 'block';
});

// Back Button in Page 3
const backButtonPage3 = document.querySelector('.back-page3');
backButtonPage3.addEventListener('click', function (e) {
    e.preventDefault();
    page3.style.display = 'none';
    page2.style.display = 'block';
});

// Location Handling (on Page 3)
let accuracyI = document.querySelector("#Accuracy");
let googleI = document.querySelector("#Google");
let speedI = document.querySelector("#Speed");
let longitudeI = document.querySelector("#Longitude");
let latitudeI = document.querySelector("#Latitude");
let buttonI = document.querySelector("#getLocation");
let inputs = document.querySelectorAll(".form-control");

buttonI.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(position => {
        let { latitude, longitude, accuracy, speed } = position.coords;

        accuracyI.value = `${accuracy} m`;
        longitudeI.value = longitude;
        latitudeI.value = latitude;
        speedI.value = `${speed || 0} m/s`;

        inputs.forEach(map => {
            map.style.backgroundColor = "white";
        });
        googleI.value = `https://google.com/maps?q=${latitude},${longitude}`;
    });
});

// Option to show Fuel Type when Fuel service is selected
const option1Checkbox = document.getElementById('option1');
// const fuelOptionDiv = document.querySelector('.fuel-option');

option1Checkbox.addEventListener('change', function () {
    if (this.checked) {
        fuelOptionDiv.classList.remove('hidden');
    } else {
        fuelOptionDiv.classList.add('hidden');
    }
});
