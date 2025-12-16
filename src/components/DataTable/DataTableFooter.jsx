import React from 'react';
import { Box, Typography } from '@mui/material';
import { TextCell, BadgeCell } from './cells';
import { footerRowStyles, footerCellStyles } from './styles/tableStyles';

function renderFooterCell(column, footerData) {
  const value = footerData[column.field];

  if (column.render) {
    return column.render(value, footerData, -1);
  }

  switch (column.type) {
    case 'badge':
      return <BadgeCell value={value} getBadgeColor={column.getBadgeColor} />;
    case 'text':
    default:
      return <TextCell value={value} />;
  }
}

export default function DataTableFooter({ columns, footer }) {
  const { data: footerData, label } = footer;

  return (
    <Box component="tfoot">
      <Box component="tr" sx={footerRowStyles}>
        {columns.map((column, index) => (
          <Box
            key={`footer-${index}`}
            component="td"
            sx={{
              ...footerCellStyles,
              textAlign: column.align,
              ...column.sx,
            }}
          >
            {index === 0 && label ? (
              <Typography sx={{ fontWeight: 500 }}>{label}</Typography>
            ) : (
              renderFooterCell(column, footerData)
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
