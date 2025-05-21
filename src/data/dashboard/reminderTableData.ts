import { GridColDef } from '@mui/x-data-grid';

interface IReminderData {
  id: number;
  name: string;
  placa: string;
  due: string;
  overdue: string;
  notify: string;
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
    field: 'placa',
    headerName: 'Placa',
    flex: 1.5,
    minWidth: 200,
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
    field: 'notify',
    headerName: 'Responsavel',
    flex: 1,
    minWidth: 150,
  },
  {
    field: 'status',
    headerName: 'Status',
  },
];

export const rows: IReminderData[] = [
  {
    id: 1,
    name: 'Uno Vivace',
    placa: 'OLT-2I00',
    due: '06/04/2022',
    overdue: '08/04/2022',
    notify: 'Edson Rodrigues',
    status: 'Rodando',
  },
  {
    id: 2,
    name: 'Cruze',
    placa: 'BBE-2A40',
    due: '01/05/2025',
    overdue: '08/04/2024',
    notify: 'Milene Tomaz de Jesus',
    status: 'Manutenção',
  },
  {
    id: 3,
    name: 'Onix',
    placa: 'BAA-2320',
    due: '01/05/2025',
    overdue: '08/04/2024',
    notify: 'Daniel Rodrigues Pinto',
    status: 'Rodando',
  },
  {
    id: 4,
    name: 'Honda HRV',
    placa: 'CBA-2I20',
    due: '10/03/2025',
    overdue: '09/05/2024',
    notify: 'Daniel Rodrigues Pinto',
    status: 'Rodando',
  },
  {
    id: 5,
    name: 'Uno Vivace',
    placa: 'OLT-2I00',
    due: '06/04/2022',
    overdue: '08/04/2022',
    notify: 'Edson Rodrigues',
    status: 'Rodando',
  },
  {
    id: 6,
    name: 'Cruze',
    placa: 'BBE-2A40',
    due: '01/05/2025',
    overdue: '08/04/2024',
    notify: 'Milene Tomaz de Jesus',
    status: 'Manutenção',
  },
  {
    id: 7,
    name: 'Onix',
    placa: 'BAA-2320',
    due: '01/05/2025',
    overdue: '08/04/2024',
    notify: 'Daniel Rodrigues Pinto',
    status: 'Rodando',
  },
  {
    id: 8,
    name: 'Honda HRV',
    placa: 'CBA-2I20',
    due: '10/03/2025',
    overdue: '09/05/2024',
    notify: 'Daniel Rodrigues Pinto',
    status: 'Rodando',
  },
];
