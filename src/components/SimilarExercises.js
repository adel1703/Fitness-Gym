import React from 'react';
import { Typography, Box, Stack } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <Box sx={{ mt: { lg: '100px', xs: '20px' }, p: '20px' }}>
    <Typography sx={{ fontSize: { lg: '36px', xs: '24px' }, fontWeight: 700, color: '#000', mb: '20px' }}>
      Similar <span style={{ color: '#FFCC00', textTransform: 'capitalize' }}>Target Muscle</span> Exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative', mb: '40px' }}>
      {targetMuscleExercises.length !== 0 ? (
        <HorizontalScrollbar data={targetMuscleExercises} />
      ) : (
        <Loader />
      )}
    </Stack>
    <Typography sx={{ fontSize: { lg: '36px', xs: '24px' }, fontWeight: 700, color: '#000', mb: '20px' }}>
      Similar <span style={{ color: '#FFCC00', textTransform: 'capitalize' }}>Equipment</span> Exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {equipmentExercises.length !== 0 ? (
        <HorizontalScrollbar data={equipmentExercises} />
      ) : (
        <Loader />
      )}
    </Stack>
  </Box>
);

export default SimilarExercises;
