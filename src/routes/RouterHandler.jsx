import { Route, Routes, Link } from 'react-router-dom';
import loadable from '@loadable/component';
import Layout from '../ui/Layout';
const OptionsRoute = loadable(() => import('./OptionsRoute/OptionsRoute'));

export default function RouterHandler() {
  return (
    <Routes>
      <Route
        path='/'
        exact
        element={<Link to='/options'>Go to Options</Link>}
      />
      <Route path='/options' element={<Layout />}>
        <Route index element={<OptionsRoute />} />
      </Route>
    </Routes>
  );
}
