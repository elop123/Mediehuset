import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Mainlayout } from './layout/Mainlayout';
import { Home } from './pages/Home';
import { Tickets } from './pages/Tickets';
import { Login } from './pages/Login';
import { Program } from './pages/Program';
import { Events } from './pages/Events';
import { Camps } from './pages/Camps';
import { Info } from './pages/Info';
import { NewsDetails } from './pages/NewsDetails';
import { CampDetails } from './pages/CampDetails';
import { LineUp } from './pages/LineUp';
import { UserProvider } from './context/useContext';




function App() {
  return (
    <UserProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
        <Route index element={<Home/>} />
        <Route path="/events" element={<Events/>}/>
        <Route path="/events/lineup" element={<LineUp />} />
        <Route path="/events/program" element={<Program/>}/>
        <Route path="/events/:id" element={<NewsDetails/>}/>
        <Route path="/tickets" element={<Tickets/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/camps" element={<Camps/>}/>
        <Route path="/camps/:id" element={<CampDetails/>}/>
        <Route path="/info" element={<Info/>}/>
        </Route>
      </Routes>
    </Router>
    </UserProvider>
    

  );
}

export default App;
