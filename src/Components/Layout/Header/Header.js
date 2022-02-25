import React from 'react'
import './Header.css'
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { IconButton } from '@mui/material';
import { useHistory } from 'react-router-dom';

export default function Header() {
  const history = useHistory();
  return (
    <div className="header">
      <div className="header_left">
        <IconButton onClick={() => history.push('/')}>
          <ArrowBackRoundedIcon />
        </IconButton>
      </div>
      <div className="header_right">
        
      </div>
    </div>
  );
}
