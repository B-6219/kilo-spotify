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

const initialState = {
  currentSong: null,
  isPlaying: false,
  volume: 0.7,
  progress: 0,
  duration: 0,
  playlist: [],
  queue: [],
  repeat: false,
  shuffle: false
};

export default function playerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: action.payload
      };

    case SET_PLAYING:
      return {
        ...state,
        isPlaying: action.payload
      };

    case SET_VOLUME:
      return {
        ...state,
        volume: action.payload
      };

    case SET_PROGRESS:
      return {
        ...state,
        progress: action.payload
      };

    case SET_DURATION:
      return {
        ...state,
        duration: action.payload
      };

    case SET_PLAYLIST:
      return {
        ...state,
        playlist: action.payload
      };

    case ADD_TO_QUEUE:
      return {
        ...state,
        queue: [...state.queue, action.payload]
      };

    case REMOVE_FROM_QUEUE:
      return {
        ...state,
        queue: state.queue.filter((song, index) => index !== action.payload)
      };

    case CLEAR_QUEUE:
      return {
        ...state,
        queue: []
      };

    case SET_REPEAT:
      return {
        ...state,
        repeat: action.payload
      };

    case SET_SHUFFLE:
      return {
        ...state,
        shuffle: action.payload
      };

    case NEXT_SONG:
      // Logic for next song would be handled in the action creator
      return state;

    case PREV_SONG:
      // Logic for previous song would be handled in the action creator
      return state;

    default:
      return state;
  }
}