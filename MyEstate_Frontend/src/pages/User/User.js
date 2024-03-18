import React, { useState, Suspense, lazy, useContext } from 'react';
import { useAxios } from '../../shared/hooks/useAxios';
import Form from '../../shared/components/FormElements/Form';
import Title from '../../shared/components/UIElements/Title';
import { useStateValue } from '../../shared/DataLayer/Context';
import { ACTIONS } from '../../shared/DataLayer/reducer';
import Loader from '../../shared/components/UIElements/Loader';
import AlertMessageContext from '../../shared/DataLayer/AlertMesageContext';

const UserSections = lazy(() => import('./Components/UserSections'));
const UserForm = lazy(() => import('./Components/UserForm'));

const User = (props) => {
  const alertContext = useContext(AlertMessageContext);
  const [{ user }, dispatch] = useStateValue();
  const [profilePic, setProfilePic] = useState(null);
  const { sendRequest } = useAxios();

  const initialValues = {
    name: user.name,
    email: user.email !== undefined ? user.email : '',
    mobile: user.mobile !== undefined ? user.mobile : '',
    password: user.password !== undefined ? user.password : '',
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('image', profilePic);
    formData.append('saveImage', profilePic === null ? false : true);
    formData.append('email', data.email);
    formData.append('mobile', data.mobile);
    formData.append('userId', user.id);
    formData.append('name', data.name);

    sendRequest('post', 'users/update', formData, {
      'content-type': 'multipart/form-data',
    })
      .then((user) => {
        dispatch({
          type: ACTIONS.UPDATE_USER,
          user: {
            name: user.name,
            id: user.id,
            imageUrl: user.profilePic,
            email: user.email,
            mobile: user.mobile,
          },
        });
        alertContext.setOpen(true);
        alertContext.setSuccess(true);
        alertContext.setMsg('Successfully updated user details');
        props.handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Suspense fallback={<Loader />}>
      <div className="cmn_section no_bg">
        <UserSections />
      </div>

      <div className="cmn_section">
        <Form initialValue={initialValues} onSubmit={onSubmit}>
          <Title title="Update Details" />
          <UserForm
            user={user}
            profilePic={profilePic}
            setProfilePic={setProfilePic}
          />
        </Form>
        <div className="margin_top"></div>
      </div>
    </Suspense>
  );
};

export default User;
