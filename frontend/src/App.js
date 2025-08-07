import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

// Components
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Player from './components/layout/Player';

// Pages
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Profile from './pages/Profile';
import Artist from './pages/Artist';
import Album from './pages/Album';
import Playlist from './pages/Playlist';
import Search from './pages/Search';
import LikedSongs from './pages/LikedSongs';

// Styles
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col min-h-screen bg-black text-white">
          <Header />
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1 p-4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/artist/:id" element={<Artist />} />
                <Route path="/album/:id" element={<Album />} />
                <Route path="/playlist/:id" element={<Playlist />} />
                <Route path="/search" element={<Search />} />
                <Route path="/collection/tracks" element={<LikedSongs />} />
              </Routes>
            </main>
          </div>
          <Player />
        </div>
      </Router>
    </Provider>
  );
}

export default App;