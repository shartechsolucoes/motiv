import { useState } from 'react';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';

function VehicleForm() {
  const [vehicleData] = useState({
    marca: '',
    modelo: '',
    ano: '',
    placa: '',
    cor: '',
  });
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log('Veículo cadastrado:', vehicleData);
    // Aqui você pode enviar os dados para uma API
  };

  // @ts-ignore
  return (
    <Paper elevation={3} style={{ padding: '2rem', margin: 'auto', boxShadow: 'none' }}>
      <Typography variant="h5" gutterBottom>
        Cadastro de Veículo
      </Typography>
      <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={2}>
        <TextField label="Marca" name="marca" value={vehicleData.marca} required />
        <TextField label="Modelo" name="modelo" value={vehicleData.modelo} required />
        <TextField label="Ano" name="ano" type="number" value={vehicleData.ano} required />
        <TextField label="Placa" name="placa" value={vehicleData.placa} required />
        <TextField label="Cor" name="cor" value={vehicleData.cor} required />
        <Button type="submit" variant="contained" color="primary">
          Cadastrar Veículo
        </Button>
      </Box>
    </Paper>
  );
}

export default VehicleForm;
