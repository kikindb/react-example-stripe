import { Outlet } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function Layout() {
  return (
    <main>
      <h1>Layout Text</h1>
      <Outlet />
    </main>
  );
}
