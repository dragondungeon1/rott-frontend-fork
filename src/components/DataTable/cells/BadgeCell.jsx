import React from 'react';
import { Chip } from '@mui/material';

const defaultGetBadgeColor = (value) => {
  const numValue = parseFloat(value);
  if (isNaN(numValue)) return { bg: '#e0e0e0', text: '#333' };

  if (numValue >= 8.0) {
    return { bg: '#4caf50', text: '#fff' };
  } else if (numValue >= 5.5) {
    return { bg: '#ffb74d', text: '#fff' };
  } else {
    return { bg: '#ef5350', text: '#fff' };
  }
};

export default function BadgeCell({ value, getBadgeColor }) {
  const colorFn = getBadgeColor || defaultGetBadgeColor;
  const colors = colorFn(value);

  return (
    <Chip
      label={value}
      size="small"
      sx={{
        backgroundColor: colors.bg,
        color: colors.text,
        fontWeight: 600,
        fontSize: '0.8rem',
        height: '26px',
        minWidth: '42px',
        borderRadius: '13px',
      }}
    />
  );
}
