import React from 'react';
import { Typography } from '@mui/material';

export default function TextCell({ value }) {
  return (
    <Typography variant="body2" component="span">
      {value ?? '-'}
    </Typography>
  );
}
