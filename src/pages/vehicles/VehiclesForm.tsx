import { Grid } from '@mui/material';
import VehicleForm from 'components/sections/Vehicles/form/Form';
import NavCar from 'components/sections/Vehicles/car/NavCar';

const Vehicles = () => {
  return (
    <Grid container rowGap={3.75}>
      <Grid item xs={3}>
        <NavCar />
      </Grid>

      <Grid item xs={9}>
        <VehicleForm />
      </Grid>
    </Grid>
  );
};

export default Vehicles;
