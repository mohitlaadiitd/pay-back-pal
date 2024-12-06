import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './auth/AuthConfig';
import Login from './components/auth/Login';
import PrivateRoute from './components/auth/PrivateRoute';

const InitialSessionState = {
  isLoggedIn: false,
};

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute />} >
              <Route path="/" element={<h1>Home</h1>} />
            </Route>
          </Routes>
        </AuthProvider>
      </Router>

    </div>
  );
}

export default App;
