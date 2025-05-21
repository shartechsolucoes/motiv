import { Grid } from '@mui/material';
import NavCar from 'components/sections/Vehicles/car/NavCar';
import TableDocuments from 'components/sections/Vehicles/tables/documents';

const Document = () => {
  return (
    <Grid container rowGap={3.75}>
      <Grid item xs={3}>
        <NavCar />
      </Grid>

      <Grid item xs={9}>
        <TableDocuments />
      </Grid>
    </Grid>
  );
};

export default Document;
