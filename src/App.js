import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Users from './Users';
import Home from './Home';

function App() {

  const users = [
    { id: 1, fullName: "Michael Ibinola" },
    { id: 2, fullName: "Oluwasetemi Ojo" },
  ]

  return (
    <div className="App">

      <Navigation />

      <Routes>
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='users' element={<Users users={users} />}>
          <Route path="userId" element={<Users />} />
        </Route>
        <Route path="*" element={<NoMatch />} />

      </Routes>

    </div >
  );
}

const NoMatch = () => {
  return (<p>There's nothing here: 404!</p>);
};


function Navigation() {
  return (
    <nav>
      <Link className="link" to='/home'>Home</Link>
      <Link className="link" to='/users'>Users</Link>
    </nav>
  )
}


export default App;
