export const tableContainerStyles = {
  width: '100%',
  borderCollapse: 'collapse',
  tableLayout: 'auto',
};

export const headerRowStyles = {
  borderBottom: '1px solid #e0e0e0',
};

export const headerCellStyles = {
  padding: '16px 20px',
  fontWeight: 600,
  fontSize: '0.875rem',
  color: '#666',
};

export const bodyRowStyles = {
  borderBottom: '1px solid #f0f0f0',
  transition: 'background-color 0.15s ease',
  '&:hover': {
    backgroundColor: '#f8f9fa',
  },
  '&:last-child': {
    borderBottom: 'none',
  },
};

export const bodyCellStyles = {
  padding: '14px 20px',
  fontSize: '0.9rem',
  verticalAlign: 'middle',
};

export const footerRowStyles = {
  backgroundColor: '#f8f9fa',
  borderTop: '1px solid #e0e0e0',
};

export const footerCellStyles = {
  padding: '14px 20px',
  fontSize: '0.9rem',
};
