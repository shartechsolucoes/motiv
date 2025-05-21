import { Grid } from '@mui/material';
import ReminderTable from 'components/sections/Vehicles/ReminderTable';
import Cars from 'components/sections/Vehicles/cars/Cars';
import { cars } from 'data/dashboard/cars';

const List = () => {
  return (
    <Grid container rowGap={3.75}>
      <Grid item xs={12}>
        <Cars cars={cars} />
      </Grid>

      <Grid item xs={12}>
        <ReminderTable />
      </Grid>
    </Grid>
  );
};

export default List;
