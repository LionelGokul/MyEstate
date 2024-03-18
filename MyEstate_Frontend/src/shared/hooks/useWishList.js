import { useAxios } from './useAxios';
import { useCallback, useContext } from 'react';
import { useStateValue } from '../DataLayer/Context';
import { ACTIONS } from '../DataLayer/reducer';
import AlertMessageContext from '../DataLayer/AlertMesageContext';

export const useWishList = () => {
  const { sendRequest } = useAxios();
  const { setMsg, setOpen, setSuccess } = useContext(AlertMessageContext);
  const [{ user }, dispatch] = useStateValue();

  const validateLogin = () => {
    if (user.email === undefined) {
      setMsg('Please login in before shortlisting.');
      setOpen(true);
      setSuccess(false);
      return false;
    }
    return true;
  };

  const addItem = useCallback(
    (property) => {
      if (validateLogin()) {
        sendRequest(
          'post',
          'wishlist',
          {
            propertyId: property.id,
            userId: user.id,
          },
          {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        )
          .then(() => {
            dispatch({
              type: ACTIONS.ADD_TO_WISHLIST,
              property: property,
            });
          })
          .catch((err) => {
            console.log('err', err);
          });
      }
    },
    [user],
  );

  const removeItem = useCallback(
    (property) => {
      if (validateLogin()) {
        sendRequest(
          'delete',
          'removewishlist',
          {
            propertyId: property.id,
            userId: user.id,
          },
          {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        )
          .then(() => {
            dispatch({
              type: ACTIONS.REMOVE_FROM_WISHLIST,
              propertyID: property.id,
            });
          })
          .catch((err) => {
            console.log('err', err);
          });
      }
    },
    [user],
  );

  return { addItem, removeItem };
};
