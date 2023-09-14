import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Common Routes/CommonRoutes';

function App() {
  return (
    <div className=''>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
