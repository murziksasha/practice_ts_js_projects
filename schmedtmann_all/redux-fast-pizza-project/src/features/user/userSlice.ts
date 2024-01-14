// interface Coordinates {
//   latitude: number;
//   longitude: number;
// }

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// interface Address {
//   locality?: string;
//   city?: string;
//   postcode?: string;
//   countryName?: string;
// }

// interface PositionData {
//   position: Coordinates;
//   address: string;
// }

// function getPosition(): Promise<GeolocationPosition> {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// }

// async function getAddress(position: Coordinates): Promise<Address> {
//   // Implement your getAddress function here
//   // Replace the following line with your actual implementation
//   return { locality: "Sample Locality", city: "Sample City", postcode: "12345", countryName: "Sample Country" };
// }

// async function fetchAddress(): Promise<PositionData> {
//   try {
//     // 1) We get the user's geolocation position
//     const positionObj = await getPosition();
//     const position: Coordinates = {
//       latitude: positionObj.coords.latitude,
//       longitude: positionObj.coords.longitude,
//     };

//     // 2) Then we use a reverse geocoding API to get a description of the user's address
//     const addressObj: Address = await getAddress(position);
//     const address: string = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

//     // 3) Then we return an object with the data that we are interested in
//     return { position, address };
//   } catch (error) {
//     // Handle errors here
//     console.error("Error fetching address:", error);
//     throw error;
//   }
// }


interface IInitialState {
    userName: string;
}

const initialState: IInitialState = {
    userName: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action: PayloadAction<string>) {
      state.userName = action.payload;
    },
  }
});

export const {updateName} = userSlice.actions;

export default userSlice.reducer;