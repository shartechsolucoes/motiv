import { GridColDef } from '@mui/x-data-grid';

interface IReminderData {
  id: number;
  name: string;
  placa: string;
  notify: string;
  kilometer: string;
  due: string;
  overdue: string;
  status: string;
}

export const columns: GridColDef<(typeof rows)[number]>[] = [
  {
    field: 'name',
    headerName: 'Veiculo',
    flex: 1,
    minWidth: 200,
  },
  {
    field: 'placa',
    headerName: 'Placa',
    flex: 1,
    minWidth: 200,
  },
  {
    field: 'notify',
    headerName: 'Responsavel',
    flex: 1,
    minWidth: 150,
  },
  {
    field: 'kilometer',
    headerName: 'Km Atual',
    flex: 1,
    minWidth: 150,
  },
  {
    field: 'due',
    headerName: 'Troca de oleo',
    flex: 1,
    minWidth: 150,
    sortable: false,
  },
  {
    field: 'overdue',
    headerName: 'Revisão',
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
    name: 'Polo',
    placa: 'OLT-2I00',
    kilometer: '50001',
    due: '06/04/2022',
    overdue: '08/04/2022',
    notify: 'Edson Rodrigues',
    status: 'Rodando',
  },
  {
    id: 2,
    name: 'Voyage',
    placa: 'BBE-2A40',
    kilometer: '50002',
    due: '01/05/2025',
    overdue: '08/04/2024',
    notify: 'Milene Tomaz de Jesus',
    status: 'Manutenção',
  },
  {
    id: 3,
    name: 'Hilunx',
    placa: 'BAA-2320',
    kilometer: '50003',
    due: '01/05/2025',
    overdue: '08/04/2024',
    notify: 'Daniel Rodrigues Pinto',
    status: 'Rodando',
  },
  {
    id: 4,
    name: 'Duster',
    placa: 'CBA-2I20',
    kilometer: '50004',
    due: '10/03/2025',
    overdue: '09/05/2024',
    notify: 'Daniel Rodrigues Pinto',
    status: 'Rodando',
  },
  {
    id: 5,
    name: 'Polo',
    placa: 'OLT-2I00',
    kilometer: '50005',
    due: '06/04/2022',
    overdue: '08/04/2022',
    notify: 'Edson Rodrigues',
    status: 'Rodando',
  },
  {
    id: 6,
    name: 'Cruze',
    placa: 'BBE-2A40',
    kilometer: '50000',
    due: '01/05/2025',
    overdue: '08/04/2024',
    notify: 'Milene Tomaz de Jesus',
    status: 'Manutenção',
  },
  {
    id: 7,
    name: 'Hilunx',
    placa: 'BAA-2320',
    kilometer: '50006',
    due: '01/05/2025',
    overdue: '08/04/2024',
    notify: 'Daniel Rodrigues Pinto',
    status: 'Rodando',
  },
  {
    id: 8,
    name: 'Duster',
    placa: 'CBA-2I20',
    kilometer: '50007',
    due: '10/03/2025',
    overdue: '09/05/2024',
    notify: 'Daniel Rodrigues Pinto',
    status: 'Rodando',
  },
];
