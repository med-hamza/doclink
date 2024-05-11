import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Body from './Components/body/Body';
import List from './pages/List';
import Doctordetails from './pages/Doctordetails';
import SearchD from './pages/SearchD';
import './styles/Calendar.css'
import Book from './pages/Book';
import ConfirmBook from './Components/shedule/ConfirmBook';
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Body />} />
          <Route path='/list-doctor' element={<List />} />
          <Route path='/list-doctor/:id' element={<Doctordetails />} />
          <Route path='/search' element={<SearchD />} />
          <Route path='/appointment/:id' element={<Book />} />
          <Route path='/appointment/confirm/:id' element={<ConfirmBook />} />
        </Route>
        <Route path="*" element={<h1>Page not found!</h1>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
