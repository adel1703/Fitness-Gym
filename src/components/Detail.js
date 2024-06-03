import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack gap="40px" sx={{ flexDirection: { lg: 'row', xs: 'column' }, p: '20px', alignItems: 'center' }}>
      <img 
        src={gifUrl} 
        alt={name} 
        loading="lazy" 
        className="detail-image" 
        style={{ borderRadius: '10px', maxWidth: '550px', height: 'auto' }} 
      />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' }, maxWidth: '600px' }}>
        <Typography sx={{ fontSize: { lg: '48px', xs: '28px' }, fontWeight: 700, textTransform: 'capitalize' }} color="#000">
          {name}
        </Typography>
        <Typography sx={{ fontSize: { lg: '20px', xs: '16px' }, color: '#4F4C4C', lineHeight: 1.5 }}>
          Exercises keep you strong. <span style={{ textTransform: 'capitalize' }}>{name}</span> is one of the best exercises to target your {target}. It will help you improve your mood and gain energy.
        </Typography>
        {extraDetail.map((item, index) => (
          <Stack key={index} direction="row" gap="24px" alignItems="center">
            <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '80px', height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src={item.icon} alt={item.name} style={{ width: '40px', height: '40px' }} />
            </Button>
            <Typography textTransform="capitalize" sx={{ fontSize: { lg: '24px', xs: '18px' }, fontWeight: 500 }}>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
