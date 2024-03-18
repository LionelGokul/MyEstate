export const ACTIONS = {
  FILTER: 'FILTER_DATA',
  SET_DATA: 'SET_DATA',
  CLEAR_FILTER: 'CLEAR_FILTER',
};

export const SearchResultsReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FILTER: {
      let filteredData = state.initialData;
      const filter = action.payload;
      debugger;

      // city filter
      if (filter.city.length !== 0) {
        filteredData = filteredData.filter((val) =>
          filter.city.includes(val.city),
        );
      }

      // type filter
      if (filter.type.length !== 0) {
        if (filter.type.length !== 2 || filter.type.length !== 0) {
          if (filter.type[0] === 'rent') {
            filteredData = filteredData.filter(
              (val) => val.propertyRooms !== null,
            );
          } else {
            filteredData = filteredData.filter(
              (val) => val.propertyRooms === null,
            );
          }
        }
      }

      // type filter
      if (filter.price[0] !== 0 || filter.price[1] !== 100000) {
        if (filter.price[0] !== 0 && filter.price[1] !== 100000) {
          filteredData = filteredData.filter(
            (val) => val.price > filter.price[0] && val.price < filter.price[1],
          );
        } else if (filter.price[0] !== 0) {
          filteredData = filteredData.filter(
            (val) => val.price > filter.price[0],
          );
        } else {
          filteredData = filteredData.filter(
            (val) => val.price < filter.price[1],
          );
        }
      }

      // property type
      if (filter.propType && filter.propType.length !== 0) {
        filteredData = filteredData.filter((val) =>
          filter.propType.includes(val.propertyType),
        );
      }

      return {
        ...state,
        filteredData: filteredData,
      };
    }
    case ACTIONS.SET_DATA: {
      return {
        filteredData: action.payload,
        initialData: action.payload,
      };
    }

    case ACTIONS.CLEAR_FILTER: {
      return {
        ...state,
        filteredData: state.initialData,
      };
    }

    default:
      return { ...state };
  }
};
