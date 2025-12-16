import React from 'react';
import { Card, CardContent, Box, Typography } from '@mui/material';

const cardStyles = {
  borderRadius: '12px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
  overflow: 'hidden',
};

const headerStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '16px 20px',
  borderBottom: '1px solid #f0f0f0',
};

const titleContainerStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: 1,
};

export default function DataTableCard({ title, titleIcon, headerActions, children }) {
  return (
    <Card sx={cardStyles}>
      {title && (
        <Box sx={headerStyles}>
          <Box sx={titleContainerStyles}>
            {titleIcon}
            <Typography variant="h6" component="h2" sx={{ fontWeight: 500, fontSize: '1rem' }}>
              {title}
            </Typography>
          </Box>
          {headerActions && <Box>{headerActions}</Box>}
        </Box>
      )}
      <CardContent sx={{ padding: 0, '&:last-child': { paddingBottom: 0 } }}>
        {children}
      </CardContent>
    </Card>
  );
}
