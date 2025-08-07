import {
  SET_CURRENT_SONG,
  SET_PLAYING,
  SET_VOLUME,
  SET_PROGRESS,
  SET_DURATION,
  SET_PLAYLIST,
  ADD_TO_QUEUE,
  REMOVE_FROM_QUEUE,
  CLEAR_QUEUE,
  SET_REPEAT,
  SET_SHUFFLE,
  NEXT_SONG,
  PREV_SONG
} from '../constants/playerConstants';

// Set current song
export const setCurrentSong = (song) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_SONG,
    payload: song
  });
};

// Set playing state
export const setPlaying = (isPlaying) => (dispatch) => {
  dispatch({
    type: SET_PLAYING,
    payload: isPlaying
  });
};

// Set volume
export const setVolume = (volume) => (dispatch) => {
  dispatch({
    type: SET_VOLUME,
    payload: volume
  });
};

// Set progress
export const setProgress = (progress) => (dispatch) => {
  dispatch({
    type: SET_PROGRESS,
    payload: progress
  });
};

// Set duration
export const setDuration = (duration) => (dispatch) => {
  dispatch({
    type: SET_DURATION,
    payload: duration
  });
};

// Set playlist
export const setPlaylist = (playlist) => (dispatch) => {
  dispatch({
    type: SET_PLAYLIST,
    payload: playlist
  });
};

// Add to queue
export const addToQueue = (song) => (dispatch) => {
  dispatch({
    type: ADD_TO_QUEUE,
    payload: song
  });
};

// Remove from queue
export const removeFromQueue = (index) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_QUEUE,
    payload: index
  });
};

// Clear queue
export const clearQueue = () => (dispatch) => {
  dispatch({
    type: CLEAR_QUEUE
  });
};

// Set repeat
export const setRepeat = (repeat) => (dispatch) => {
  dispatch({
    type: SET_REPEAT,
    payload: repeat
  });
};

// Set shuffle
export const setShuffle = (shuffle) => (dispatch) => {
  dispatch({
    type: SET_SHUFFLE,
    payload: shuffle
  });
};

// Next song
export const nextSong = () => (dispatch) => {
  dispatch({
    type: NEXT_SONG
  });
};

// Previous song
export const prevSong = () => (dispatch) => {
  dispatch({
    type: PREV_SONG
  });
};