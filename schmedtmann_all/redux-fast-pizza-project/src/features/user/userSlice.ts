
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../rootReducer";
import { getAddress } from "../../services/apiGeocoding";


interface Coordinates {
  latitude: number;
  longitude: number;
}


interface Address {
  locality?: string;
  city?: string;
  postcode?: string;
  countryName?: string;
}

interface PositionData {
  position: Coordinates;
  address: string;
}

function getPosition(): Promise<GeolocationPosition> {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}


async function fetchCurrentAddress(): Promise<PositionData> {
  try {
    // 1) We get the user's geolocation position
    const positionObj = await getPosition();
    const position: Coordinates = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    // 2) Then we use a reverse geocoding API to get a description of the user's address
    const addressObj: Address = await getAddress(position);
    const address: string = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    // 3) Then we return an object with the data that we are interested in
    //Payload of the fulfielled state
    return { position, address };
  } catch (error) {
    // Handle errors here
    console.error("Error fetching address:", error);
    throw error;
  }
}

  // Create Async Thunk for giving async action creation to reducer
export const fetchAddress = createAsyncThunk('user/fetchAddress', fetchCurrentAddress);


interface IInitialState {
    userName: string;
    status: 'idle' | 'loading' | 'error';
    position: Coordinates;
    address: string;
    error?: string | undefined;
}

const initialState: IInitialState = {
    userName: '',
    status: 'idle',
    position: {
      latitude: 0,
      longitude: 0
    },
    address: '',
    error: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action: PayloadAction<string>) {
      state.userName = action.payload;
    },
  },
  extraReducers: (builder) => builder.addCase(fetchAddress.pending, (state, action) => {state.status = 'loading'})
  .addCase(fetchAddress.fulfilled, (state, action) => {
    state.position = action.payload.position;
    state.address = action.payload.address;
    state.status = 'idle';
  })
  .addCase(fetchAddress.rejected, (state, action) => {
    state.status = 'error';
    state.error = action.error.message;
  })

});

export const {updateName} = userSlice.actions;

export default userSlice.reducer;

export const getUserName = (state: RootState) => state.user.userName;
