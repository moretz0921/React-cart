const SET_USER = 'SET_USER';
const CLEAR_USER = 'CLEAR_USER';

export const setUser = (user: any) => ({ type: SET_USER, currentUser: user });
export const clearUser = () => ({ type: CLEAR_USER });

const initialState = {
  currentUser: null,
  isLoading: true,
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USER:
      return {
        currentUser: action.currentUser,
        isLoading: false,
      };
    case CLEAR_USER:
      return {
        currentUser: null,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
