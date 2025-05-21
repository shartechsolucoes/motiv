import Calendar from 'components/icons/drawer/Calendar';
import Car from 'components/icons/drawer/Car';
import Comment from 'components/icons/drawer/Comment';
import Grid from 'components/icons/drawer/Grid';

import Settings from 'components/icons/drawer/Settings';
import SignOut from 'components/icons/drawer/SignOut';
import paths, { rootPaths } from 'routes/paths';
import { DrawerItem } from 'types/types';

export const drawerItems: DrawerItem[] = [
  {
    id: 1,
    icon: Grid,
    title: 'Dashboard',
    path: rootPaths.root,
    collapsible: false,
    active: true,
  },
  {
    id: 3,
    icon: Car,
    title: 'Veiculos',
    active: true,
    collapsible: true,
    subList: [
      { id: 4, title: 'Frota', path: paths.vehiclesList, active: true },
      { id: 5, title: 'Abastecimento', path: paths.vehiclesList, active: true },
      { id: 6, title: 'Manutenções', path: paths.vehiclesMaintenance, active: true },
      { id: 6, title: 'Responsavel', path: paths.vehiclesMaintenance, active: true },
    ],
  },
  {
    id: 7,
    icon: Car,
    title: 'Manutenções',
    active: true,
    collapsible: true,
    subList: [
      { id: 8, title: 'Oficinas', path: paths.vehiclesList, active: true },
      { id: 9, title: 'Preventivas', path: paths.vehiclesList, active: true },
      { id: 10, title: 'Corretivas', path: paths.vehiclesMaintenance, active: true },
      { id: 11, title: 'Orçamentos', path: paths.vehiclesMaintenance, active: true },
    ],
  },
  {
    id: 8,
    icon: Calendar,
    title: 'Calendario',
    path: 'rootPaths.calendar',
    active: true,
    collapsible: false,
  },
  {
    id: 9,
    icon: Comment,
    title: 'Mensagens',
    path: '#!',
    collapsible: false,
  },
  {
    id: 10,
    icon: Settings,
    title: 'Configurações',
    path: '#!',
    active: true,
    collapsible: false,
  },
  {
    id: 11,
    icon: Settings,
    title: 'Usuários',
    path: '#!',
    active: true,
    collapsible: false,
  },
  {
    id: 11,
    icon: SignOut,
    title: 'Log out',
    path: paths.login,
    active: true,
    collapsible: false,
  },
];
