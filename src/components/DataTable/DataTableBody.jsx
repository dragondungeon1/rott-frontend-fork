import React from 'react';
import { Box } from '@mui/material';
import { TextCell, BadgeCell } from './cells';
import { bodyRowStyles, bodyCellStyles } from './styles/tableStyles';

function renderCell(column, row, rowIndex) {
  const value = row[column.field];

  if (column.render) {
    return column.render(value, row, rowIndex);
  }

  switch (column.type) {
    case 'badge':
      return <BadgeCell value={value} getBadgeColor={column.getBadgeColor} />;
    case 'text':
    default:
      return <TextCell value={value} />;
  }
}

export default function DataTableBody({ columns, data, alternateRowColors }) {
  return (
    <Box component="tbody">
      {data.map((row, rowIndex) => (
        <Box
          key={`row-${rowIndex}`}
          component="tr"
          sx={{
            ...bodyRowStyles,
            backgroundColor:
              alternateRowColors && rowIndex % 2 === 1 ? '#fafafa' : 'white',
          }}
        >
          {columns.map((column, colIndex) => (
            <Box
              key={`cell-${rowIndex}-${colIndex}`}
              component="td"
              sx={{
                ...bodyCellStyles,
                textAlign: column.align,
                ...column.sx,
              }}
            >
              {renderCell(column, row, rowIndex)}
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
}
