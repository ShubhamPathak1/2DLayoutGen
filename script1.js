// // const aanaSelect = document.getElementById("aanaInp");
// // const paisaSelect = document.getElementById("paisaInp");

// // const bedroomCount = document.getElementById("countBed");
// // const livingRoomCount = document.getElementById("countLiving");
// // const kitchenCount = document.getElementById("countKitchen");
// // const bathroomCount = document.getElementById("countBath");
// // const diningRoomCount = document.getElementById("countDining");

// // const bedroomDecrease = bedroomCount.parentNode.querySelector(".decrease");
// // const bedroomIncrease = bedroomCount.parentNode.querySelector(".increase");
// // const livingRoomIncrease = livingRoomCount.parentNode.querySelector(".increase");
// // const kitchenIncrease = kitchenCount.parentNode.querySelector(".increase");
// // const bathroomIncrease = bathroomCount.parentNode.querySelector(".increase");
// // const diningRoomIncrease = diningRoomCount.parentNode.querySelector(".increase");
// // const diningRoomDecrease = diningRoomCount.parentNode.querySelector(".decrease");

// // function updateButtons() {
// //   const aana = parseInt(aanaSelect.value);
// //   const bedroomValue = parseInt(bedroomCount.textContent);
// //   const livingValue = parseInt(livingRoomCount.textContent);
// //   const kitchenValue = parseInt(kitchenCount.textContent);
// //   const bathroomValue = parseInt(bathroomCount.textContent);
// //   const diningValue = parseInt(diningRoomCount.textContent);

// //   // Bedroom constraints
// //   bedroomIncrease.disabled = aana < 5 ? bedroomValue >= 2 : bedroomValue >= 3;
// //   bedroomDecrease.disabled = bedroomValue <= 2;

// //   // Living Room constraints
// //   livingRoomIncrease.disabled = livingValue >= 1;
// //   livingRoomCount.parentNode.querySelector(".decrease").disabled = livingValue <= 1;

// //   // Kitchen constraints
// //   kitchenIncrease.disabled = kitchenValue >= 1;
// //   kitchenCount.parentNode.querySelector(".decrease").disabled = kitchenValue <= 1;

// //   // Bathroom constraints
// //   bathroomIncrease.disabled = bathroomValue >= 2;
// //   bathroomCount.parentNode.querySelector(".decrease").disabled = bathroomValue <= 1;

// //   // Dining Room constraints
// //   diningRoomIncrease.disabled = !(aana >= 5) || diningValue >= 1;
// //   diningRoomDecrease.disabled = diningValue <= 0;
// // }

// // // Counter button logic
// // document.querySelectorAll(".counter").forEach((counter) => {
// //   const decreaseBtn = counter.querySelector(".decrease");
// //   const increaseBtn = counter.querySelector(".increase");
// //   const countSpan = counter.querySelector(".count");

// //   decreaseBtn.addEventListener("click", () => {
// //     let count = parseInt(countSpan.textContent);
// //     if (count > 0) {
// //       countSpan.textContent = count - 1;
// //       updateButtons();
// //     }
// //   });

// //   increaseBtn.addEventListener("click", () => {
// //     let count = parseInt(countSpan.textContent);
// //     countSpan.textContent = count + 1;
// //     updateButtons();
// //   });
// // });

// // // Update buttons when aana or paisa changes
// // aanaSelect.addEventListener("change", updateButtons);
// // paisaSelect.addEventListener("change", updateButtons);

// // // Initialize button states
// // updateButtons();

// // const generateButton = document.querySelector(".generate");

// // generateButton.addEventListener("click", () => {
// //   const aana = parseInt(aanaSelect.value);
// //   const paisa = parseInt(paisaSelect.value);

// //   const bedroomValue = parseInt(bedroomCount.textContent);
// //   const livingRoomValue = parseInt(livingRoomCount.textContent);
// //   const kitchenValue = parseInt(kitchenCount.textContent);
// //   const bathroomValue = parseInt(bathroomCount.textContent);
// //   const diningRoomValue = parseInt(diningRoomCount.textContent);

// //   // Output all the final values
// //   const finalValues = {
// //     aana: aana,
// //     paisa: paisa,
// //     bedrooms: bedroomValue,
// //     livingRooms: livingRoomValue,
// //     kitchens: kitchenValue,
// //     bathrooms: bathroomValue,
// //     diningRooms: diningRoomValue,
// //   };

// //   // Log the values to the console
// //   console.log("Final Values:", finalValues);

// // //   // You can use the finalValues object to perform other tasks, like sending data to a server or updating the UI.
// // //   alert(`Final Values:\nAana: ${aana}\nPaisa: ${paisa}\nBedrooms: ${bedroomValue}\nLiving Rooms: ${livingRoomValue}\nKitchens: ${kitchenValue}\nBathrooms: ${bathroomValue}\nDining Rooms: ${diningRoomValue}`);
// // });












// const aanaSelect = document.getElementById("aanaInp");
// const paisaSelect = document.getElementById("paisaInp");

// const bedroomCount = document.getElementById("countBed");
// const livingRoomCount = document.getElementById("countLiving");
// const kitchenCount = document.getElementById("countKitchen");
// const bathroomCount = document.getElementById("countBath");
// const diningRoomCount = document.getElementById("countDining");

// const bedroomIncrease = bedroomCount.nextElementSibling;
// const bedroomDecrease = bedroomCount.previousElementSibling;
// const livingIncrease = livingRoomCount.nextElementSibling;
// const livingDecrease = livingRoomCount.previousElementSibling;
// const kitchenIncrease = kitchenCount.nextElementSibling;
// const kitchenDecrease = kitchenCount.previousElementSibling;
// const bathroomIncrease = bathroomCount.nextElementSibling;
// const bathroomDecrease = bathroomCount.previousElementSibling;
// const diningIncrease = diningRoomCount.nextElementSibling;
// const diningDecrease = diningRoomCount.previousElementSibling;

// const generateButton = document.querySelector(".generate");

// // Function to enforce rules based on Aana
// function enforceRules() {
//   const aana = parseInt(aanaSelect.value);

//   // Dining Room: Only available for Aana >= 5
//   if (aana < 5) {
//     diningRoomCount.textContent = "0";
//     diningIncrease.disabled = true;
//     diningDecrease.disabled = true;
//   } else {
//     diningIncrease.disabled = false;
//     diningDecrease.disabled = false;
//   }

//   // Enforce maximum and minimum values for other rooms
//   bathroomCount.textContent = Math.min(parseInt(bathroomCount.textContent), 2); // Max 2 bathrooms
//   bedroomCount.textContent = Math.max(parseInt(bedroomCount.textContent), 2); // Min 2 bedrooms

//   if (aana < 5) {
//     // For Aana < 5
//     bedroomCount.textContent = Math.max(parseInt(bedroomCount.textContent), 2); // Min bedrooms = 2
//     livingRoomCount.textContent = "1"; // Fixed 1
//     kitchenCount.textContent = "1"; // Fixed 1
//     bathroomCount.textContent = Math.min(parseInt(bathroomCount.textContent), 2); // Max bathrooms = 2
//   } else {
//     // For Aana >= 5: Enforce valid combinations (2BHK2B, 2BHKBD, 2BHKB)
//     if (
//       parseInt(bedroomCount.textContent) === 2 &&
//       parseInt(kitchenCount.textContent) === 1 &&
//       parseInt(bathroomCount.textContent) === 2 &&
//       parseInt(diningRoomCount.textContent) === 0
//     ) {
//       // Valid: 2BHK2B
//     } else if (
//       parseInt(bedroomCount.textContent) === 2 &&
//       parseInt(kitchenCount.textContent) === 1 &&
//       parseInt(bathroomCount.textContent) === 1 &&
//       parseInt(diningRoomCount.textContent) === 1
//     ) {
//       // Valid: 2BHKBD
//     } else if (
//       parseInt(bedroomCount.textContent) === 2 &&
//       parseInt(kitchenCount.textContent) === 1 &&
//       parseInt(bathroomCount.textContent) === 1 &&
//       parseInt(diningRoomCount.textContent) === 0
//     ) {
//       // Valid: 2BHKB
//     } else {
//       // Reset to default 2BHK2B if invalid
//       bedroomCount.textContent = "2";
//       kitchenCount.textContent = "1";
//       bathroomCount.textContent = "2";
//       diningRoomCount.textContent = "0";
//     }
//   }

//   // Prevent any room count from being less than 1 (except dining room)
//   bedroomCount.textContent = Math.max(parseInt(bedroomCount.textContent), 2);
//   livingRoomCount.textContent = Math.max(parseInt(livingRoomCount.textContent), 1);
//   kitchenCount.textContent = Math.max(parseInt(kitchenCount.textContent), 1);
//   bathroomCount.textContent = Math.max(parseInt(bathroomCount.textContent), 1);
// }

// // Event listeners for Increase and Decrease buttons
// function addRoomListeners() {
//   // Bedroom
//   bedroomIncrease.addEventListener("click", () => {
//     if (parseInt(aanaSelect.value) >= 5 && parseInt(bedroomCount.textContent) < 3) {
//       bedroomCount.textContent = parseInt(bedroomCount.textContent) + 1;
//     }
//   });
//   bedroomDecrease.addEventListener("click", () => {
//     if (parseInt(bedroomCount.textContent) > 2) {
//       bedroomCount.textContent = parseInt(bedroomCount.textContent) - 1;
//     }
//   });

//   // Living Room
//   livingIncrease.addEventListener("click", () => {
//     livingRoomCount.textContent = "1"; // Always 1
//   });
//   livingDecrease.addEventListener("click", () => {
//     livingRoomCount.textContent = "1"; // Always 1
//   });

//   // Kitchen
//   kitchenIncrease.addEventListener("click", () => {
//     kitchenCount.textContent = "1"; // Always 1
//   });
//   kitchenDecrease.addEventListener("click", () => {
//     kitchenCount.textContent = "1"; // Always 1
//   });

//   // Bathroom
//   bathroomIncrease.addEventListener("click", () => {
//     if (parseInt(bathroomCount.textContent) < 2) {
//       bathroomCount.textContent = parseInt(bathroomCount.textContent) + 1;
//     }
//   });
//   bathroomDecrease.addEventListener("click", () => {
//     if (parseInt(bathroomCount.textContent) > 1) {
//       bathroomCount.textContent = parseInt(bathroomCount.textContent) - 1;
//     }
//   });

//   // Dining Room
//   diningIncrease.addEventListener("click", () => {
//     if (parseInt(aanaSelect.value) >= 5 && parseInt(diningRoomCount.textContent) < 1) {
//       diningRoomCount.textContent = "1";
//     }
//   });
//   diningDecrease.addEventListener("click", () => {
//     diningRoomCount.textContent = "0";
//   });
// }

// // Event listener for Generate button
// generateButton.addEventListener("click", () => {
//   const aana = parseInt(aanaSelect.value);
//   const paisa = parseInt(paisaSelect.value);

//   const finalValues = {
//     aana: aana,
//     paisa: paisa,
//     bedrooms: parseInt(bedroomCount.textContent),
//     livingRooms: parseInt(livingRoomCount.textContent),
//     kitchens: parseInt(kitchenCount.textContent),
//     bathrooms: parseInt(bathroomCount.textContent),
//     diningRooms: parseInt(diningRoomCount.textContent),
//   };

//   console.log("Final Values:", finalValues);
//   alert(`Final Values:\nAana: ${aana}\nPaisa: ${paisa}\nBedrooms: ${finalValues.bedrooms}\nLiving Rooms: ${finalValues.livingRooms}\nKitchens: ${finalValues.kitchens}\nBathrooms: ${finalValues.bathrooms}\nDining Rooms: ${finalValues.diningRooms}`);
// });

// // Initialize rules and listeners
// enforceRules();
// addRoomListeners();
// aanaSelect.addEventListener("change", enforceRules);


const aanaSelect = document.getElementById("aanaInp");
const paisaSelect = document.getElementById("paisaInp");

const bedroomCount = document.getElementById("countBed");
const livingRoomCount = document.getElementById("countLiving");
const kitchenCount = document.getElementById("countKitchen");
const bathroomCount = document.getElementById("countBath");
const diningRoomCount = document.getElementById("countDining");

const bedroomIncrease = bedroomCount.nextElementSibling;
const bedroomDecrease = bedroomCount.previousElementSibling;
const livingIncrease = livingRoomCount.nextElementSibling;
const livingDecrease = livingRoomCount.previousElementSibling;
const kitchenIncrease = kitchenCount.nextElementSibling;
const kitchenDecrease = kitchenCount.previousElementSibling;
const bathroomIncrease = bathroomCount.nextElementSibling;
const bathroomDecrease = bathroomCount.previousElementSibling;
const diningIncrease = diningRoomCount.nextElementSibling;
const diningDecrease = diningRoomCount.previousElementSibling;

const generateButton = document.querySelector(".generate");

// Function to enforce rules based on Aana
function enforceRules() {
  const aana = parseInt(aanaSelect.value);

  // Dining Room: Only available for Aana >= 5
  if (aana < 5) {
    diningRoomCount.textContent = "0";
    diningIncrease.disabled = true;
    diningDecrease.disabled = true;
  } else {
    diningIncrease.disabled = false;
    diningDecrease.disabled = false;
  }

  // Enforce valid configurations for Aana >= 5
  if (aana >= 5) {
    const bedrooms = parseInt(bedroomCount.textContent);
    const kitchens = parseInt(kitchenCount.textContent);
    const bathrooms = parseInt(bathroomCount.textContent);
    const diningRooms = parseInt(diningRoomCount.textContent);

    if (
      (bedrooms === 2 && kitchens === 1 && bathrooms === 2 && diningRooms === 0) || // 2BHK2B
      (bedrooms === 2 && kitchens === 1 && bathrooms === 1 && diningRooms === 1) || // 2BHKBD
      (bedrooms === 3 && kitchens === 1 && bathrooms === 1 && diningRooms === 0)    // 3BHKB
    ) {
      // Valid configurations; do nothing
    } else {
      // Reset to default valid configuration: 2BHK2B
      bedroomCount.textContent = "2";
      kitchenCount.textContent = "1";
      bathroomCount.textContent = "2";
      diningRoomCount.textContent = "0";
    }
  } else {
    // For Aana < 5
    bedroomCount.textContent = Math.max(parseInt(bedroomCount.textContent), 2); // Min bedrooms = 2
    livingRoomCount.textContent = "1"; // Fixed 1
    kitchenCount.textContent = "1"; // Fixed 1
    bathroomCount.textContent = Math.min(parseInt(bathroomCount.textContent), 2); // Max bathrooms = 2
  }

  // Prevent any room count from being less than 1 (except dining room)
  bedroomCount.textContent = Math.max(parseInt(bedroomCount.textContent), 2);
  livingRoomCount.textContent = Math.max(parseInt(livingRoomCount.textContent), 1);
  kitchenCount.textContent = Math.max(parseInt(kitchenCount.textContent), 1);
  bathroomCount.textContent = Math.max(parseInt(bathroomCount.textContent), 1);
}

// Event listeners for Increase and Decrease buttons
function addRoomListeners() {
  // Bedroom
  bedroomIncrease.addEventListener("click", () => {
    if (parseInt(bedroomCount.textContent) < 3) {
      bedroomCount.textContent = parseInt(bedroomCount.textContent) + 1;
    }
  });
  bedroomDecrease.addEventListener("click", () => {
    if (parseInt(bedroomCount.textContent) > 2) {
      bedroomCount.textContent = parseInt(bedroomCount.textContent) - 1;
    }
  });

  // Living Room
  livingIncrease.addEventListener("click", () => {
    livingRoomCount.textContent = "1"; // Always 1
  });
  livingDecrease.addEventListener("click", () => {
    livingRoomCount.textContent = "1"; // Always 1
  });

  // Kitchen
  kitchenIncrease.addEventListener("click", () => {
    kitchenCount.textContent = "1"; // Always 1
  });
  kitchenDecrease.addEventListener("click", () => {
    kitchenCount.textContent = "1"; // Always 1
  });

  // Bathroom
  bathroomIncrease.addEventListener("click", () => {
    if (parseInt(bathroomCount.textContent) < 2) {
      bathroomCount.textContent = parseInt(bathroomCount.textContent) + 1;
    }
  });
  bathroomDecrease.addEventListener("click", () => {
    if (parseInt(bathroomCount.textContent) > 1) {
      bathroomCount.textContent = parseInt(bathroomCount.textContent) - 1;
    }
  });

  // Dining Room
  diningIncrease.addEventListener("click", () => {
    if (parseInt(diningRoomCount.textContent) < 1) {
      diningRoomCount.textContent = "1";
    }
  });
  diningDecrease.addEventListener("click", () => {
    diningRoomCount.textContent = "0";
  });
}

// Event listener for Generate button
generateButton.addEventListener("click", () => {
  const aana = parseInt(aanaSelect.value);
  const paisa = parseInt(paisaSelect.value);

  const finalValues = {
    aana: aana,
    paisa: paisa,
    bedrooms: parseInt(bedroomCount.textContent),
    livingRooms: parseInt(livingRoomCount.textContent),
    kitchens: parseInt(kitchenCount.textContent),
    bathrooms: parseInt(bathroomCount.textContent),
    diningRooms: parseInt(diningRoomCount.textContent),
  };

  console.log("Final Values:", finalValues);
  alert(`Final Values:\nAana: ${aana}\nPaisa: ${paisa}\nBedrooms: ${finalValues.bedrooms}\nLiving Rooms: ${finalValues.livingRooms}\nKitchens: ${finalValues.kitchens}\nBathrooms: ${finalValues.bathrooms}\nDining Rooms: ${finalValues.diningRooms}`);
});

// Initialize rules and listeners
enforceRules();
addRoomListeners();
aanaSelect.addEventListener("change", enforceRules);
