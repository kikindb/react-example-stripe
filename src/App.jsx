import RouterHandler from './routes/RouterHandler';
import { Helmet } from 'react-helmet';
function App() {
  return (
    <>
      <Helmet>
        <title>Options Page</title>
      </Helmet>
      <RouterHandler />
    </>
  );
}

export default App;
