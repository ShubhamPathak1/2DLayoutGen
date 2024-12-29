// // JavaScript to handle room count restrictions based on Aana value

// document.addEventListener("DOMContentLoaded", () => {
//     const aanaInput = document.getElementById("aanaInp");
//     const counters = {
//         Bedroom: { element: document.getElementById("countBed"), min: 0, max: 0 },
//         Bathroom: { element: document.getElementById("countBath"), min: 0, max: 0 },
//         Kitchen: { element: document.getElementById("countKitchen"), min: 1, max: 1 },
//         Living: { element: document.getElementById("countLiving"), min: 1, max: 1 },
//         Garage: { element: document.getElementById("countGarage"), min: 1, max: 1 },
//         Dining: { element: document.getElementById("countDining"), min: 0, max: 0 },
//     };

//     const updateRoomLimits = (aanaValue) => {
//         if (aanaValue < 5) {
//             counters.Bedroom.max = 2;
//             counters.Bathroom.max = 2;
//             counters.Dining.max = 0; // No dining room
//             counters.Garage.max = 1; // 
//         } else {
//             counters.Bedroom.max = 3;
//             counters.Bathroom.max = 2;
//             counters.Dining.max = 1; // Dining allowed
//             counters.Garage.max = 1; // Garage allowed
//         }
//         updateButtons();
//     };

//     const updateButtons = () => {
//         Object.entries(counters).forEach(([room, { element, min, max }]) => {
//             const count = parseInt(element.textContent, 10);
//             const decreaseButton = element.previousElementSibling;
//             const increaseButton = element.nextElementSibling;

//             // Enable/disable buttons based on count and min/max
//             decreaseButton.disabled = count <= min;
//             increaseButton.disabled = count >= max;
//         });
//     };

//     const handleButtonClick = (room, isIncrease) => {
//         const { element, min, max } = counters[room];
//         let count = parseInt(element.textContent, 10);

//         if (isIncrease && count < max) {
//             count++;
//         } else if (!isIncrease && count > min) {
//             count--;
//         }

//         element.textContent = count;
//         updateButtons();
//     };

//     // Attach event listeners to + and - buttons
//     document.querySelectorAll(".room").forEach((roomElement) => {
//         const roomName = roomElement.querySelector("span").textContent;
//         const decreaseButton = roomElement.querySelector(".decrease");
//         const increaseButton = roomElement.querySelector(".increase");

//         decreaseButton.addEventListener("click", () => handleButtonClick(roomName, false));
//         increaseButton.addEventListener("click", () => handleButtonClick(roomName, true));
//     });

//     // Update room limits whenever Aana value changes
//     aanaInput.addEventListener("change", (e) => {
//         const aanaValue = parseInt(e.target.value, 10);
//         updateRoomLimits(aanaValue);
//     });

//     // Initialize with the default Aana value
//     updateRoomLimits(parseInt(aanaInput.value, 10));
// });

