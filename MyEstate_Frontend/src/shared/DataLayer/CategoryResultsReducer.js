export const ACTIONS = {
  FILTER: 'FILTER_DATA',
};

export const SearchResultsReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FILTER: {
      let filteredData = state.initialData;
      const filter = action.payload;

      // city filter
      if (filter.city.length !== 0) {
        filteredData = filteredData.filter((val) =>
          filter.city.includes(val.address.city),
        );
      }

      // type filter
      if (filter.type.length !== 0) {
        if (filter.type.length !== 2 || filter.type.length !== 0) {
          if (filter.type[0] === 'rent') {
            filteredData = filteredData.filter((val) => val.rooms !== null);
          } else {
            filteredData = filteredData.filter((val) => val.rooms === null);
          }
        }
      }

      // type filter
      if (filter.price !== null) {
        filteredData = filteredData.filter(
          (val) =>
            val.details.price > filter.price[0] &&
            val.details.price < filter.price[1],
        );
      }

      // property type
      if (filter.propType.length !== 0) {
        filteredData = filteredData.filter((val) =>
          filter.propType.includes(val.type),
        );
      }

      return {
        ...state,
        filteredData: filteredData,
      };
    }
    default:
      return { ...state };
  }
};
