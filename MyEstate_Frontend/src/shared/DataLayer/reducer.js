export const ACTIONS = {
  SET_FAVLIST: 'SET_FAVLIST',
  ADD_TO_WISHLIST: 'ADD_TO_WISHLIST',
  REMOVE_FROM_WISHLIST: 'REMOVE_FROM_WISHLIST',
  ADD_USER: 'ADD_USER',
  UPDATE_USER: 'UPDATE_USER',
  LOGIN_MODAL: 'LOGIN_MODAL',
  SIGNUP_MODAL: 'SIGNUP_MODAL',
  SEARCH: 'SEARCH_QUERY',
  SIGN_OUT: 'SIGN_OUT',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_WISHLIST: {
      const newFav = [...state.favList, action.property];
      localStorage.setItem('me_favList', JSON.stringify(newFav));
      return {
        ...state,
        favList: [...newFav],
      };
    }
    case ACTIONS.SET_FAVLIST: {
      return {
        ...state,
        favList: [...action.favList],
      };
    }
    case ACTIONS.UPDATE_USER: {
      localStorage.setItem('me_user', JSON.stringify(action.user));
      return {
        ...state,
        user: action.user,
      };
    }
    case ACTIONS.REMOVE_FROM_WISHLIST: {
      const newFav = state.favList.filter((val) => {
        if (val.id !== action.propertyID) {
          return true;
        }
      });
      localStorage.setItem('me_favList', JSON.stringify(newFav));
      return {
        ...state,
        favList: newFav === undefined ? [] : [...newFav],
      };
    }
    case ACTIONS.LOGIN_MODAL: {
      return {
        ...state,
        loginModalOpen: action.payload,
      };
    }
    case ACTIONS.SIGNUP_MODAL: {
      if (action.payload === true && state.loginModalOpen) {
        return {
          ...state,
          loginModalOpen: false,
          signUpModalOpen: action.payload,
        };
      }
      return {
        ...state,
        signUpModalOpen: action.payload,
      };
    }
    case ACTIONS.ADD_USER: {
      let expiryTime = new Date();
      // 30 minutes user session expiry time
      expiryTime.setMinutes(expiryTime.getMinutes() + 30);
      localStorage.setItem('me_exp', JSON.stringify(expiryTime));
      localStorage.setItem('me_user', JSON.stringify(action.user));
      localStorage.setItem('me_favList', JSON.stringify(action.favList));
      return {
        ...state,
        user: action.user,
        favList: [...action.favList],
      };
    }
    case ACTIONS.SEARCH: {
      return {
        ...state,
        query: action.query,
      };
    }
    case ACTIONS.SIGN_OUT: {
      localStorage.clear();
      return {
        ...state,
        user: {},
        favList: [],
      };
    }
    default:
      return state;
  }
};
export default reducer;
