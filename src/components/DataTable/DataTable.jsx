import React from 'react';
import { Box } from '@mui/material';
import DataTableCard from './DataTableCard';
import DataTableHeader from './DataTableHeader';
import DataTableBody from './DataTableBody';
import DataTableFooter from './DataTableFooter';
import { tableContainerStyles } from './styles/tableStyles';

export default function DataTable({ config }) {
  const {
    columns,
    data,
    title,
    titleIcon,
    headerActions,
    footer,
    alternateRowColors,
    showHeader,
  } = config;

  return (
    <DataTableCard
      title={title}
      titleIcon={titleIcon}
      headerActions={headerActions}
    >
      <Box component="table" sx={tableContainerStyles}>
        {showHeader && <DataTableHeader columns={columns} />}
        <DataTableBody
          columns={columns}
          data={data}
          alternateRowColors={alternateRowColors}
        />
        {footer && <DataTableFooter columns={columns} footer={footer} />}
      </Box>
    </DataTableCard>
  );
}
