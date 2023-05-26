import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productdata: [],
  productEditdata: [],
  userInputs: {},
  loginCred: {},
  Editdata: {},
  editid: 5,
  edittag: 0,
  addproduct: [],
  wholeData: [],
  addvariantData: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    varaintdata: (state, action) => {
      state.addvariantData = action.payload;
    },
    addProductdata: (state, action) => {
      state.addproduct = action.payload;
    },
    wholeData: (state, action) => {
      state.wholeData = action.payload;
    },
    addUserCredentials: (state, action) => {
      state.userInputs = action.payload;
    },
    productData: (state, action) => {
      state.productdata = action.payload;
    },
    productEditData: (state, action) => {
      state.productEditdata = action.payload;
    },
    addLoginCredentails: (state, action) => {
      state.loginCred = action.payload;
    },
    editedData: (state, action) => {
      state.Editdata = action.payload;
    },
    editID: (state, action) => {
      state.editid = action.payload;
    },
    changeed: (state, action) => {
      state.edittag = action.payload + 1;
    },
  },
});

export const {
  varaintdata,
  wholeData,
  addProductdata,
  addUserCredentials,
  addLoginCredentails,
  editedData,
  editID,
  changeed,
  productData,
  productEditData,
} = counterSlice.actions;

export default counterSlice.reducer;
