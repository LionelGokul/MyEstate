import React, { useState, useRef, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import CustomTextField from '../../../shared/components/FormElements/CustomTextField';
import { TextField } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { FiEdit } from 'react-icons/fi';
import Badge from '@material-ui/core/Badge';
import FormSubmitSection from '../../../shared/components/FormElements/FormSubmitSection';

let saveImage = false;
const UserForm = (props) => {
  const [preview, setPreview] = useState(null);

  const inputFileRef = useRef(null);

  const profilePicUpload = () => {
    inputFileRef.current.click();
  };

  const onFilechange = (e) => {
    saveImage = true;
    /*Selected files data can be collected here.*/
    if (
      e.target.files[0].type === 'image/jpeg' ||
      e.target.files[0].type === 'image/png'
    )
      props.setProfilePic(e.target.files[0]);
    else {
      alert('upload only images with jpeg and png file types');
    }
  };

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!props.profilePic) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(props.profilePic);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [props.profilePic]);

  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center">
        <input
          type="file"
          ref={inputFileRef}
          onChange={onFilechange}
          style={{ display: 'none' }}
          accept="image/x-png,image/jpeg"
        />
        <Grid item xs={12} sm={1}>
          <Badge
            overlap="circle"
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            badgeContent={
              <FiEdit
                className="user_img_upld_btn btn"
                onClick={profilePicUpload}
              />
            }
          >
            <Avatar
              alt={props.user.name}
              src={props.profilePic === null ? props.user.imageUrl : preview}
              className="avatar_large"
            />
          </Badge>
        </Grid>
        <Grid item xs={12} sm={4}>
          <CustomTextField
            id="name"
            name="name"
            label="Name"
            defaultValue=""
            rules={{ required: true }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={4}>
          <CustomTextField
            id="email"
            name="email"
            label="Email"
            defaultValue=""
            rules={{
              required: true,
              pattern: { value: /^\S+@\S+$/i, message: 'please check email' },
            }}
          />
        </Grid>
        <Grid item xs={4} sm={1}>
          <TextField defaultValue="+91" disabled label="Country Code" />
        </Grid>
        <Grid item xs={8} sm={3}>
          <CustomTextField
            id="mobile"
            name="mobile"
            label="Phone Number"
            defaultValue=""
            rules={{
              required: true,
              pattern: {
                value: /^\d{10}/i,
                message: 'please check phone number',
              },
            }}
          />
        </Grid>
      </Grid>
      <div className="margin_top">
        <Grid container direction="row">
          <Grid item xs></Grid>
          <Grid item xs>
            <FormSubmitSection onCancel={() => {}} />
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      </div>
      <div className="margin_top"></div>
    </>
  );
};

export default React.memo(UserForm);
