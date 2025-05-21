import { Paper } from '@mui/material';

// @ts-ignore
const VehicleFine = () => {
  return (
    <Paper elevation={3} style={{ padding: '2rem', marginLeft: '2rem', boxShadow: 'none' }}>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl overflow-hidden p-4">
        <h2 className="text-xl font-bold mb-2"></h2>
        <p className="text-gray-700 mb-1">
          <strong>Data: </strong>
        </p>
        <p className="text-gray-700 mb-1">
          <strong>Local da Infração: </strong>
        </p>
        <p className="text-gray-700 mb-1">
          <strong>Código da Infração: </strong>
        </p>
        <p className="text-gray-700 mb-1">
          <strong>Órgão Autuador: </strong>
        </p>
      </div>
    </Paper>
  );
};

export default VehicleFine;
