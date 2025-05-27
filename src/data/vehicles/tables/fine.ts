import { GridColDef } from '@mui/x-data-grid';

interface IReminderData {
  id: number;
  date: string;
  station: string;
  cost: string;
  address: string;
  city: string;
  conductor: string;
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
    headerName: 'Multa',
    flex: 1,
    minWidth: 180,
  },
  {
    field: 'conductor',
    headerName: 'Condutor',
    flex: 1,
    minWidth: 200,
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
    field: 'cost',
    headerName: 'Custo',
    flex: 1,
    minWidth: 120,
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
    date: '06/04/2022',
    station: 'Vol. Superior 20%',
    conductor: 'Edson',
    cost: 'R$198,00',
    address: 'Arnaldo Gusi 44',
    city: 'Curitiba/PR',
  },
];
