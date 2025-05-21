import { GridColDef } from '@mui/x-data-grid';

interface IReminderData {
  id: number;
  name: string;
  dateIni: string;
  dateEnd: string;
  status: string;
}

export const columns: GridColDef<(typeof rows)[number]>[] = [
  {
    field: 'name',
    headerName: 'Nome',
    flex: 1.5,
    minWidth: 200,
  },
  {
    field: 'dateIni',
    headerName: 'Locado',
    flex: 1.5,
    minWidth: 200,
  },
  {
    field: 'dateEnd',
    headerName: 'Entrega',
    flex: 1,
    minWidth: 150,
    sortable: false,
  },
  {
    field: 'status',
    headerName: 'Status',
  },
];

export const rows: IReminderData[] = [
  {
    id: 1,
    name: 'Edson Rodrigues',
    dateIni: '06/04/2022',
    dateEnd: '...',
    status: 'Em andamento',
  },
  {
    id: 2,
    name: 'Luciano Silva',
    dateIni: '01/04/2022',
    dateEnd: '06/04/2022',
    status: 'Finalizado',
  },
  {
    id: 3,
    name: 'Milene Tomaz',
    dateIni: '01/03/2022',
    dateEnd: '30/03/2022',
    status: 'Finalizado',
  },
];
