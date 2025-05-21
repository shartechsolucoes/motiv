import { Box, IconButton, Link, Paper, Stack, Typography } from '@mui/material';
import Image from 'components/base/Image';
import CirculationIcon from 'components/icons/car/Icon1';
import LoopIcon from 'components/icons/car/Icon2';
import SettingsIcon from 'components/icons/car/Icon3';
import ThunderIcon from 'components/icons/car/Icon4';
import { MenuList, MenuItem, ListItemText } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const NavCar = () => {
  const imageUrl = '/src/assets/car-1.webp';
  const recommendation = '10';
  const modelName = 'Kia cerato';
  const mileage = '23';
  const costPerHour = '213';
  const backgroundColor = '#e3ecf1';
  return (
    <>
      <Paper sx={{ bgcolor: backgroundColor }}>
        <Stack
          rowGap={1.375}
          component={Link}
          href="#!"
          sx={(theme) => ({
            p: theme.spacing(1.5, 3),
            color: 'common.black',
          })}
        >
          <Stack direction="row" alignItems="center" columnGap={1.25} ml={-0.5}>
            <IconButton aria-label="circulation-icon" sx={{ p: 0.5 }}>
              <CirculationIcon sx={{ color: 'grey.600' }} />
            </IconButton>
            <Typography variant="body1">{recommendation}% Vida Oleo</Typography>
          </Stack>

          <Image
            src={imageUrl}
            alt="car-image"
            sx={{
              width: 1,
              height: { xs: 106 },
              objectFit: { xs: 'contain' },
            }}
          />

          <Box>
            <Typography variant="h3" component="h2">
              {modelName}
            </Typography>

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              color="grey.600"
            >
              <Stack direction="row" alignItems="center" columnGap={1} ml={-0.5}>
                <IconButton aria-label="loop-icon" sx={{ p: 0.5 }}>
                  <LoopIcon fontSize="small" />
                </IconButton>
                <Typography variant="body2" component="span">
                  {mileage}KM
                </Typography>
                <IconButton aria-label="settings-icon" sx={{ p: 1 }}>
                  <SettingsIcon sx={{ fontSize: 'fontSize' }} />
                </IconButton>
                <IconButton aria-label="thunder-icon" sx={{ p: 1 }}>
                  <ThunderIcon sx={{ fontSize: 'fontSize' }} />
                </IconButton>
              </Stack>

              <Typography variant="body2" component="span">
                ${costPerHour}/h
              </Typography>
            </Stack>
          </Box>
        </Stack>
        <MenuList dense>
          <MenuItem component={RouterLink} to="../fuel">
            <ListItemText inset>Abastecimento</ListItemText>
          </MenuItem>
          <MenuItem component={RouterLink} to="../drivers">
            <ListItemText inset>Motoristas</ListItemText>
          </MenuItem>
          <MenuItem component={RouterLink} to="../documents">
            <ListItemText inset>Documentação</ListItemText>
          </MenuItem>
          <MenuItem component={RouterLink} to="../maintenance">
            <ListItemText inset>Revisão</ListItemText>
          </MenuItem>
          <MenuItem component={RouterLink} to="../inspections">
            <ListItemText inset>Vistorias</ListItemText>
          </MenuItem>
          <MenuItem component={RouterLink} to="../fines">
            <ListItemText inset>Multas</ListItemText>
          </MenuItem>
        </MenuList>
      </Paper>
    </>
  );
};

export default NavCar;
