export const rootPaths = {
  root: '/',
  pagesRoot: 'pages',
  authRoot: 'authentication',
  errorRoot: 'error',
  vehicles: 'vehicles',
  calendar: 'calendar',
};

export default {
  login: `/${rootPaths.authRoot}/login`,
  signup: `/${rootPaths.authRoot}/sign-up`,
  vehiclesList: `/${rootPaths.vehicles}/list`,
  vehiclesForm: `/${rootPaths.vehicles}/form`,
  vehiclesMaintenance: `/${rootPaths.vehicles}/maintenance`,
  vehiclesView: `/${rootPaths.vehicles}/view`,
  vehiclesDrivers: `/${rootPaths.vehicles}/drivers`,
  vehiclesFuel: `/${rootPaths.vehicles}/fuel`,
  vehiclesDocuments: `/${rootPaths.vehicles}/documents`,
  vehiclesInspections: `/${rootPaths.vehicles}/inspections`,
  vehiclesFines: `/${rootPaths.vehicles}/fines`,
};
