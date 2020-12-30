import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import { v4 as uuidv4 } from 'uuid';

function Rating({ rating }) {
  return (
    <div>
      {new Array(~~+rating).fill(1).map((n) => {
        return <StarIcon className='text-warning' key={uuidv4()} />;
      })}
      {new Array(5 - ~~+rating).fill(1).map((n) => {
        return <StarIcon style={{ color: '#ccc' }} key={uuidv4()} />;
      })}
    </div>
  );
}

export default Rating;
