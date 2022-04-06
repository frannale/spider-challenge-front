import { SET_FLAG_JWT } from "../types/index.js";

const userReducer = (state, action) => {
  switch (action.type) {
    case SET_FLAG_JWT:
      return {
        JWT_Flag: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
