import { Grid } from '@mui/material';
import Info from 'components/sections/Vehicles/Info/Info';
import NavCar from 'components/sections/Vehicles/car/NavCar';

const View = () => {
  const vehicleData = {
    model: 'Civic',
    brand: 'Honda',
    odometer: '99.999',
    year: 2021,
    color: 'Prata',
    plate: 'ABC-1234',
    reindeer: 'ABC-1234',
    chassis: '9BD111060T5002156',
    fuel: 'Gasolina/Alcool',
  };
  return (
    <Grid container rowGap={3.75}>
      <Grid item xs={3}>
        <NavCar />
      </Grid>

      <Grid item xs={9}>
        <Info vehicle={vehicleData} />
      </Grid>
    </Grid>
  );
};

export default View;
