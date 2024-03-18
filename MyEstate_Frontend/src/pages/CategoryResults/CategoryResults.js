import React, { useState, useEffect, useReducer, Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';
import { useAxios } from '../../shared/hooks/useAxios';
import CategoryResultList from './Components/CategoryResultList';
import {
  SearchResultsReducer,
  ACTIONS,
} from '../../shared/DataLayer/SearchResultsReducer';
import Grid from '@material-ui/core/Grid';
import Form from '../../shared/components/FormElements/Form';
import Loader from '../../shared/components/UIElements/Loader';

const CategoryResultsFilter = lazy(() =>
  import('./Components/CategoryResultsFilter'),
);

const CategoryResults = () => {
  const { sendRequest } = useAxios();
  const { propertytype } = useParams();
  const [price, setPrice] = useState([0, 100000]);

  const initialState = {
    initialData: [],
    filteredData: [],
  };
  const [state, dispatch] = useReducer(SearchResultsReducer, initialState);
  useEffect(() => {
    sendRequest('get', `properties/${propertytype}`)
      .then((res) => {
        dispatch({
          type: ACTIONS.SET_DATA,
          payload: res,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onSubmit = (data) => {
    dispatch({
      type: ACTIONS.FILTER,
      payload: {
        city: data.city || null,
        type: data.type || null,
        price: price,
        propType: data.property_type || null,
      },
    });
  };

  const onClear = () => {
    setPrice([0, 100000]);
    dispatch({
      type: ACTIONS.CLEAR_FILTER,
    });
  };
  return (
    <Suspense fallback={<Loader />}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ width: '95%', margin: 'auto', borderRadius: 5 }}
        spacing={2}
      >
        <Grid
          item
          xs
          style={{ width: '100%', margin: 'auto', borderRadius: 5 }}
        >
          <Form onSubmit={onSubmit}>
            <CategoryResultsFilter
              price={price}
              setPrice={setPrice}
              onClear={onClear}
            />
          </Form>
        </Grid>
        <Grid
          item
          xs
          style={{ width: '100%', margin: 'auto', borderRadius: 5 }}
        >
          <CategoryResultList propertyList={state.filteredData} />
        </Grid>
      </Grid>
    </Suspense>
  );
};

export default CategoryResults;
