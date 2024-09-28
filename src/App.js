import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Common Routes/CommonRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className=''>
      <RouterProvider router={router}>

      </RouterProvider>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
