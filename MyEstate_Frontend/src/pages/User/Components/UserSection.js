import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

const UserSection = (props) => {
  return (
    <Link to={props.link}>
      <Paper className="cmn_block" elevation={3} key={props.title}>
        <span>{props.title}</span>
        {props.icon}
      </Paper>
    </Link>
  );
};

export default UserSection;
