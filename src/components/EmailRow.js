import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';

import '../styles/EmailRow.css';

function EmailRow({ id, title, subject, description, time }) {

  const navigate = useNavigate();

  return (
    <div className='emailRow'>
      
      <div onClick={() => navigate('/mail')} className='emailRow__options'>
        <Checkbox />
        <IconButton>
          <StarBorderIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>

      <h3 className='emailRow__title'>
        {title}
      </h3>

      <div className='emailRow__message'>
        <h4>{subject}{" "}
          <span className='emailRow__description'>-
            {description}
          </span>
        </h4>
      </div>

      <p className='emailRow__time'>
        {time}
      </p>
    </div>
  )
}

export default EmailRow
