import React from 'react';
import Grid from '@material-ui/core/Grid';
import FileDragDrop from '../../../shared/components/UIElements/FileDragDrop';

const PropertyImages = (props) => {
  return (
    <>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className="file_upload_section"
      >
        <FileDragDrop
          setFiles={props.setFiles}
          files={props.files}
          defaultFiles={props.images}
          acceptedFiles={['image/jpeg', 'image/png']}
        />
      </Grid>
    </>
  );
};

export default PropertyImages;
