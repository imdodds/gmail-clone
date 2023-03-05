import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Mail from './components/Mail';
import EmailList from './components/EmailList';
import SendMail from './components/SendMail';
import Login from './components/Login';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import { auth } from './firebase';

function App() {

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        // the user is logged in
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photUrl: user.photoURL
        }))
      } else {
        // the user is logged out
      }
    })
  }, [])

  return (
    <Router>

      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className='app__body'>
            <Sidebar />

            <Routes>
              <Route path="/mail" element={<Mail />} />
              <Route path="/" element={<EmailList />} />
            </Routes>
          </div>

          {sendMessageIsOpen && <SendMail />}
        </div>
      )}

    </Router>
  );
}

export default App;
