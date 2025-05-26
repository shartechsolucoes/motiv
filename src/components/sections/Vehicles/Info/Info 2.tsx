import { Paper } from '@mui/material';

// @ts-ignore
const VehicleInfo = ({ vehicle }) => {
  return (
    <Paper elevation={3} style={{ padding: '2rem', marginLeft: '2rem', boxShadow: 'none' }}>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl overflow-hidden p-4">
        <h2 className="text-xl font-bold mb-2"></h2>
        <p className="text-gray-700 mb-1">
          <strong>Marca: {vehicle.brand}</strong>
        </p>
        <p className="text-gray-700 mb-1">
          <strong>Modelo: {vehicle.model}</strong>
        </p>
        <p className="text-gray-700 mb-1">
          <strong>Hodometro: {vehicle.odometer}</strong>
        </p>
        <p className="text-gray-700 mb-1">
          <strong>Ano: {vehicle.year}</strong>
        </p>
        <p className="text-gray-700 mb-1">
          <strong>Cor: {vehicle.color}</strong>
        </p>
        <p className="text-gray-700 mb-1">
          <strong>Placa: {vehicle.plate}</strong>
        </p>
        <p className="text-gray-700 mb-1">
          <strong>Renavam: {vehicle.reindeer}</strong>
        </p>
        <p className="text-gray-700 mb-1">
          <strong>Chassis: {vehicle.chassis}</strong>
        </p>
        <p className="text-gray-700 mb-1">
          <strong>Combustivel: {vehicle.fuel}</strong>
        </p>
      </div>
    </Paper>
  );
};

export default VehicleInfo;
