import axios from 'axios';

// Create an axios instance
const API = axios.create({
  baseURL: '/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add a request interceptor to include the token in headers
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle errors
API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth endpoints
export const authAPI = {
  login: (data) => API.post('/auth/login', data),
  register: (data) => API.post('/auth/register', data),
  logout: () => API.get('/auth/logout'),
  getMe: () => API.get('/auth/me')
};

// Artist endpoints
export const artistAPI = {
  getArtists: () => API.get('/artists'),
  getArtist: (id) => API.get(`/artists/${id}`),
  createArtist: (data) => API.post('/artists', data),
  updateArtist: (id, data) => API.put(`/artists/${id}`, data),
  deleteArtist: (id) => API.delete(`/artists/${id}`)
};

// Album endpoints
export const albumAPI = {
  getAlbums: () => API.get('/albums'),
  getAlbum: (id) => API.get(`/albums/${id}`),
  createAlbum: (data) => API.post('/albums', data),
  updateAlbum: (id, data) => API.put(`/albums/${id}`, data),
  deleteAlbum: (id) => API.delete(`/albums/${id}`)
};

// Song endpoints
export const songAPI = {
  getSongs: () => API.get('/songs'),
  getSong: (id) => API.get(`/songs/${id}`),
  createSong: (data) => API.post('/songs', data),
  updateSong: (id, data) => API.put(`/songs/${id}`, data),
  deleteSong: (id) => API.delete(`/songs/${id}`),
  streamSong: (id) => API.get(`/songs/${id}/stream`, { responseType: 'blob' })
};

// Playlist endpoints
export const playlistAPI = {
  getPlaylists: () => API.get('/playlists'),
  getPlaylist: (id) => API.get(`/playlists/${id}`),
  createPlaylist: (data) => API.post('/playlists', data),
  updatePlaylist: (id, data) => API.put(`/playlists/${id}`, data),
  deletePlaylist: (id) => API.delete(`/playlists/${id}`),
  addSong: (id, songId) => API.post(`/playlists/${id}/songs/${songId}`),
  removeSong: (id, songId) => API.delete(`/playlists/${id}/songs/${songId}`)
};

// Search endpoints