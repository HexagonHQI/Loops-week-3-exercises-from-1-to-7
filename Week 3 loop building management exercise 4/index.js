const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
      firstFloor: 3,
      secondFloor: 4,
      thirdFloor: 9,
      fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
      sarah: [3, 990],
      dan: [4, 1000],
      david: [1, 500],
    },
  };
  
  // Review About Objects
  
  // Number of floors in the string 
  console.log("Number of floors:", building.numberOfFloors);
  
  // Apartments on floors 1 and 3
  const floor1Apts = building.numberOfAptByFloor.firstFloor;
  const floor3Apts = building.numberOfAptByFloor.thirdFloor;
  const totalAptsFloors1and3 = floor1Apts + floor3Apts;
  console.log("Total apartments on floors 1 and 3:", totalAptsFloors1and3);
  
  // Second tenant's name and rooms
  const secondTenant = building.nameOfTenants[1];
  const secondTenantRooms = building.numberOfRoomsAndRent[secondTenant][0];
  console.log(`${secondTenant} (second tenant) has ${secondTenantRooms} rooms in their apartment.`);
  
  // Check and adjust rent
  const sarahRent = building.numberOfRoomsAndRent.sarah[1];
  const davidRent = building.numberOfRoomsAndRent.david[1];
  const danRent = building.numberOfRoomsAndRent.dan[1];
  
  if (sarahRent + davidRent > danRent) {
    console.log("Increasing Dan's rent...");
    building.numberOfRoomsAndRent.dan[1] = 1200; // Modify the rent value in the object
    console.log("Dan's new rent:", building.numberOfRoomsAndRent.dan[1]);
  } else {
    console.log("Dan's rent is already sufficient.");
  }
  