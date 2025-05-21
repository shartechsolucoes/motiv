import { GridColDef } from '@mui/x-data-grid';

interface IReminderData {
  date: string;
  id: number;
  station: string;
  cost: string;
  costLiter: string;
  liters: string;
  type: string;
  KM: string;
  average: string;
  odometer: string;
  address: string;
  city: string;
}

export const columns: GridColDef<(typeof rows)[number]>[] = [
  {
    field: 'date',
    headerName: 'Data',
    flex: 1,
    minWidth: 100,
  },
  {
    field: 'station',
    headerName: 'Multas',
    flex: 1.5,
    minWidth: 120,
  },
  {
    field: 'cost',
    headerName: 'Custo',
    flex: 1.5,
    minWidth: 70,
  },
  {
    field: 'costLiter',
    headerName: 'Val Unit',
    flex: 1.5,
    minWidth: 70,
  },
  {
    field: 'liters',
    headerName: 'Litros',
    flex: 1,
    minWidth: 50,
    sortable: false,
  },
  {
    field: 'odometer',
    headerName: 'Hodometro',
    flex: 1,
    minWidth: 100,
    sortable: false,
  },
  {
    field: 'type',
    headerName: 'Combustivel',
    flex: 1,
    minWidth: 100,
    sortable: false,
  },
  {
    field: 'average',
    headerName: 'Media',
    flex: 1,
    minWidth: 100,
    sortable: false,
  },
  {
    field: 'KM',
    headerName: 'KM Rodados',
    flex: 1,
    minWidth: 100,
    sortable: false,
  },
  {
    field: 'address',
    headerName: 'Endereço',
    flex: 1,
    minWidth: 200,
    sortable: false,
  },
  {
    field: 'city',
    headerName: 'Cidade/UF',
    flex: 1,
    minWidth: 100,
    sortable: false,
  },
];

export const rows: IReminderData[] = [
  {
    id: 1,
    station: 'Ipiranga Derosso',
    cost: 'R$320,00',
    costLiter: 'R$6,99',
    date: '06/04/2022',
    liters: '40L',
    type: 'Gasolina',
    KM: '480(Est)',
    average: '12(est)',
    odometer: '99.445',
    address: 'Arnaldo Gusi 44',
    city: 'Curitiba/PR',
  },
  {
    id: 2,
    station: 'Petrobras',
    cost: 'R$300,00',
    costLiter: 'R$6,89',
    date: '12/03/2022',
    liters: '39L',
    type: 'Gasolina',
    KM: '300',
    average: '12',
    odometer: '99.445',
    address: 'Arnaldo Gusi 44',
    city: 'Curitiba/PR',
  },
  {
    id: 3,
    station: 'Petrobras BR',
    cost: 'R$263,60',
    costLiter: 'R$6,59',
    date: '01/03/2022',
    liters: '40L',
    type: 'Gasolina',
    KM: '300',
    average: '12',
    odometer: '99.445',
    address: 'Arnaldo Gusi 44',
    city: 'Curitiba/PR',
  },
];
