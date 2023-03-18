
import './App.css';
import { createBrowserRouter,createRoutesFromElements,Route, RouterProvider } from 'react-router-dom';
import UserForm from './Pages/UserForm';
import UserList from './Pages/UserList';
import Home from './Pages/Home';
import Layout from './Layouts/Layout';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path='/user-form' element={<UserForm />} />
      <Route path='/user-list' element={<UserList />} />
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
