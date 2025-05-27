import { Box, Button, Modal, Paper, Stack, Typography } from '@mui/material';
import { DataGrid, GridRowParams, useGridApiRef } from '@mui/x-data-grid';
import SearchFilter from 'components/common/SearchFilter';
import CustomPagination from 'components/common/CustomPagination';
import { columns, rows } from 'data/vehicles/tables/fine';
import React from 'react';
import VehicleFine from 'components/sections/Vehicles/Info/fine.tsx';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const tableFuel = () => {
  const apiRef = useGridApiRef();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const handleRowClick = (params: GridRowParams) => {
    // Exemplo de navegação com ID
    navigate(`/vehicles/fine/${params.id}`);
  };

  return (
    <Paper
      sx={(theme) => ({
        p: theme.spacing(2, 2.5),
        width: 1,
      })}
      style={{ padding: '2rem', marginLeft: '2rem', boxShadow: 'none' }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
      >
        <Typography variant="h5" color="common.black">
          Abastecimento
        </Typography>

        <SearchFilter apiRef={apiRef} />

        <Button onClick={handleOpen}>
          <Typography variant="body2">Add New</Typography>
        </Button>
        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style}>
            <VehicleFine />
          </Box>
        </Modal>
      </Stack>

      <Box
        sx={{
          height: 330,
          width: 1,
          mt: 1.75,
        }}
      >
        <DataGrid
          apiRef={apiRef}
          columns={columns}
          rows={rows}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          onRowClick={handleRowClick}
          sx={{
            cursor: 'pointer',
            '& .MuiDataGrip-row:hover': {
              backgroundColor: '#f5f5f5',
            },
          }}
        />
      </Box>
      <CustomPagination apiRef={apiRef} />
    </Paper>
  );
};

export default tableFuel;
