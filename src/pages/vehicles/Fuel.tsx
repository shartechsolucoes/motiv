import { Grid } from '@mui/material';
import NavCar from 'components/sections/Vehicles/car/NavCar';
import TableFuel from 'components/sections/Vehicles/tables/fuel';

const View = () => {
  return (
    <Grid container rowGap={3.75}>
      <Grid item xs={3}>
        <NavCar />
      </Grid>

      <Grid item xs={9}>
        <TableFuel />
      </Grid>
    </Grid>
  );
};

export default View;
