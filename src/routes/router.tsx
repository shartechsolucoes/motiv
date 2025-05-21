import { Outlet, createBrowserRouter } from 'react-router-dom';
import paths, { rootPaths } from './paths';
import { Suspense, lazy } from 'react';
import Progress from 'components/loading/Progress';
import LinearLoader from 'components/loading/LinearLoader';

const App = lazy(() => import('App'));
const MainLayout = lazy(() => import('layouts/main-layout'));
const AuthLayout = lazy(() => import('layouts/auth-layout'));
const Dashboard = lazy(() => import('pages/dashboard/Dashboard'));
const Login = lazy(() => import('pages/authentication/Login'));
const Signup = lazy(() => import('pages/authentication/Signup'));
const ErrorPage = lazy(() => import('pages/errors/ErrorPage'));
const VehicleList = lazy(() => import('pages/vehicles/List.tsx'));
const VehicleForm = lazy(() => import('pages/vehicles/VehiclesForm'));
const VehicleMaintenance = lazy(() => import('pages/vehicles/Maintence'));
const VehicleView = lazy(() => import('pages/vehicles/View'));
const VehicleDrivers = lazy(() => import('pages/vehicles/Drivers'));
const VehicleFuel = lazy(() => import('pages/vehicles/Fuel'));
const VehicleDocuments = lazy(() => import('pages/vehicles/Document'));
const VehicleInspections = lazy(() => import('pages/vehicles/Inspections'));
const VehicleFines = lazy(() => import('pages/vehicles/Fine'));

export const routes = [
  {
    element: (
      <Suspense fallback={<Progress />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: rootPaths.root,
        element: (
          <MainLayout>
            <Suspense fallback={<LinearLoader />}>
              <Outlet />
            </Suspense>
          </MainLayout>
        ),
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            index: true,
            element: <VehicleList />,
          },
          {
            index: true,
            element: <VehicleList />,
          },
        ],
      },

      {
        path: rootPaths.authRoot,
        element: <AuthLayout />,
        children: [
          {
            path: paths.login,
            element: <Login />,
          },
          {
            path: paths.signup,
            element: <Signup />,
          },
        ],
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
      {
        path: rootPaths.vehicles,
        children: [
          {
            path: paths.vehiclesList,
            element: (
              <MainLayout>
                <Suspense fallback={<LinearLoader />}>
                  <VehicleList />
                </Suspense>
              </MainLayout>
            ),
          },
          {
            path: paths.vehiclesView,
            element: (
              <MainLayout>
                <Suspense fallback={<LinearLoader />}>
                  <VehicleView />
                </Suspense>
              </MainLayout>
            ),
          },
          {
            path: paths.vehiclesForm,
            element: (
              <MainLayout>
                <Suspense fallback={<LinearLoader />}>
                  <VehicleForm />
                </Suspense>
              </MainLayout>
            ),
          },
          {
            path: paths.vehiclesDrivers,
            element: (
              <MainLayout>
                <Suspense fallback={<LinearLoader />}>
                  <VehicleDrivers />
                </Suspense>
              </MainLayout>
            ),
          },
          {
            path: paths.vehiclesFuel,
            element: (
              <MainLayout>
                <Suspense fallback={<LinearLoader />}>
                  <VehicleFuel />
                </Suspense>
              </MainLayout>
            ),
          },
          {
            path: paths.vehiclesMaintenance,
            element: (
              <MainLayout>
                <Suspense fallback={<LinearLoader />}>
                  <VehicleMaintenance />
                </Suspense>
              </MainLayout>
            ),
          },
          {
            path: paths.vehiclesDocuments,
            element: (
              <MainLayout>
                <Suspense fallback={<LinearLoader />}>
                  <VehicleDocuments />
                </Suspense>
              </MainLayout>
            ),
          },
          {
            path: paths.vehiclesInspections,
            element: (
              <MainLayout>
                <Suspense fallback={<LinearLoader />}>
                  <VehicleInspections />
                </Suspense>
              </MainLayout>
            ),
          },
          {
            path: paths.vehiclesFines,
            element: (
              <MainLayout>
                <Suspense fallback={<LinearLoader />}>
                  <VehicleFines />
                </Suspense>
              </MainLayout>
            ),
          },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
