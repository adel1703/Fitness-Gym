import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`} style={{ textDecoration: 'none' }}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" style={{ width: '100%', height: 'auto' }} />
      <Stack direction="row"  spacing={1} >
        <Button className='ms-2 '
          sx={{
            color: '#fff',
            backgroundColor: '#ffa9a9',
            fontSize: '14px',
            borderRadius: '20px',
            textTransform: 'capitalize',
            padding: '6px 16px',
            marginLeft: '21px',
            '&:hover': {
              backgroundColor: '#ff8787',
            },
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            color: '#fff',
            backgroundColor: '#fcc757',
            fontSize: '14px',
            borderRadius: '20px',
            textTransform: 'capitalize',
            padding: '6px 16px',
            marginLeft: '21px',
            '&:hover': {
              backgroundColor: '#fcb737',
            },
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        sx={{
          ml: 2,
          color: '#000',
          fontWeight: 'bold',
          mt: 1,
          mb: 2,
          fontSize: '22px',
          textTransform: 'capitalize',
        }}
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
