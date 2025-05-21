import { Grid } from '@mui/material';
import NavCar from 'components/sections/Vehicles/car/NavCar';
import TableDrivers from 'components/sections/Vehicles/tables/drivers';

const View = () => {
  return (
    <Grid container rowGap={3.75}>
      <Grid item xs={3}>
        <NavCar />
      </Grid>

      <Grid item xs={9}>
        <TableDrivers />
      </Grid>
    </Grid>
  );
};

export default View;
