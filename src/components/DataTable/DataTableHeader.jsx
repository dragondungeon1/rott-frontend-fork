import React from 'react';
import { Box } from '@mui/material';
import { headerRowStyles, headerCellStyles } from './styles/tableStyles';

export default function DataTableHeader({ columns }) {
  return (
    <Box component="thead">
      <Box component="tr" sx={headerRowStyles}>
        {columns.map((column, index) => (
          <Box
            key={`header-${index}`}
            component="th"
            sx={{
              ...headerCellStyles,
              textAlign: column.align,
              width: column.width,
              ...column.sx,
            }}
          >
            {column.header}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
