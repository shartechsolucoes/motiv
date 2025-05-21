import { GridColDef } from '@mui/x-data-grid';

interface IReminderData {
  id: number;
  name: string;
  maturity: string;
  year: string;
  value: string;
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
    field: 'year',
    headerName: 'Ano',
    flex: 1.5,
    minWidth: 200,
  },
  {
    field: 'value',
    headerName: 'Valor',
    flex: 1.5,
    minWidth: 200,
  },
  {
    field: 'maturity',
    headerName: 'Vencimento',
    flex: 1.5,
    minWidth: 200,
  },
  {
    field: 'status',
    headerName: 'Status',
  },
];

export const rows: IReminderData[] = [
  {
    id: 1,
    name: 'IPVA',
    year: '2025',
    value: 'R$657,00',
    maturity: '06/04/2025',
    status: 'Vencido',
  },
  {
    id: 2,
    name: 'Licenciamento',
    year: '2025',
    value: 'R$90,00',
    maturity: '01/08/2025',
    status: 'Pago',
  },
  {
    id: 3,
    name: 'Licenciamento',
    year: '2024',
    value: 'R$90,00',
    maturity: '06/09/2024',
    status: 'Pago',
  },
  {
    id: 4,
    name: 'IPVA',
    year: '2024',
    value: 'R$687,00',
    maturity: '06/05/2024',
    status: 'Pago',
  },
];
