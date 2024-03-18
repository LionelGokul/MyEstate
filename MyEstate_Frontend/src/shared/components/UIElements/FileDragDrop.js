import React, { useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import { RiCloseCircleFill } from 'react-icons/ri';

const FileDragDrop = (props) => {
  const inputRef = useRef(null);

  const validateFile = (file) => {
    if (props.acceptedFiles.indexOf(file.type) === -1) {
      return false;
    }
    return true;
  };

  const rempoveFile = (index) => {
    const temp = props.files;
    temp.splice(index, 1);
    props.setFiles([...temp]);
  };

  const fileClick = (e) => {
    inputRef.current.click();
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };

  const dragLeave = (e) => {
    e.preventDefault();
  };

  const log = () => {
    if (inputRef.current.files[0]) {
      if (validateFile(inputRef.current.files[0])) {
        props.setFiles([...props.files, inputRef.current.files[0]]);
      } else {
        alert('sorry this filetype is not a image');
      }
    }
  };

  const fileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length) {
      for (let i = 0; i < files.length; i++) {
        if (validateFile(files[i])) {
          props.setFiles([...props.files, files[i]]);
          // add to an array so we can display the name of file
        } else {
          alert('sorry this filetype is not a image');
        }
      }
    }
  };

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className="file_upload_section"
    >
      <input type="file" multiple style={{ display: 'none' }} />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        onClick={() => fileClick()}
      >
        <Grid item xs={12}>
          <div
            onDragOver={(e) => dragOver(e)}
            onDragEnter={(e) => dragEnter(e)}
            onDragLeave={(e) => dragLeave(e)}
            className="cmn_drop_container"
            onDrop={(e) => fileDrop(e)}
          >
            Drag and Drop Or Click to Upload Files Here
            <input
              ref={inputRef}
              type="file"
              multiple
              style={{ display: 'none' }}
              onInputCapture={() => {
                log();
              }}
              accept="image/x-png,image/jpeg"
            />
          </div>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <div>
          {props.files?.map((val, index) => {
            return (
              <Grid item xs={12} key={val.name}>
                <div className="selected_files">
                  <span className="selected_file_names">{val.name}</span>
                  <div className="file_closeIcon">
                    <RiCloseCircleFill
                      onClick={() => {
                        rempoveFile(index);
                      }}
                    />
                  </div>
                </div>
              </Grid>
            );
          })}
        </div>
      </Grid>
    </Grid>
  );
};

export default FileDragDrop;
