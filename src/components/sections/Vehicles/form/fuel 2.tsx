import { useState } from 'react';
import { TextField, Button, Box, Typography, Paper, Select, MenuItem } from '@mui/material';

function VehicleForm() {
  const [vehicleData] = useState({
    name: '',
    year: '',
    value: '',
    date: '',
    status: '',
  });
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log('Cadastrado:', vehicleData);
    // Aqui você pode enviar os dados para uma API
  };

  // @ts-ignore
  return (
    <Paper elevation={3} style={{ padding: '2rem', margin: 'auto', boxShadow: 'none' }}>
      <Typography variant="h5" gutterBottom>
        Cadastro de documento
      </Typography>
      <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={2}>
        <TextField label="Estabelicimento" name="name" value={vehicleData.name} required />
        <Select name="produto" label="Produto">
          <MenuItem value={10}>Gasolina</MenuItem>
          <MenuItem value={20}>Etanol</MenuItem>
          <MenuItem value={20}>Diesel/Arla</MenuItem>
          <MenuItem value={20}></MenuItem>
        </Select>
        <TextField
          label="Quantidade"
          name="value"
          type="number"
          value={vehicleData.value}
          required
        />
        <TextField label="Custo" name="date" value={vehicleData.date} required />
        <TextField label="Hondometro Atual" name="date" value={vehicleData.date} required />
        <Button type="submit" variant="contained" color="primary">
          Cadastrar
        </Button>
      </Box>
    </Paper>
  );
}

export default VehicleForm;
