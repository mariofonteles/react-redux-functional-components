import { Reducer } from 'redux';
import { DogActionTypes, DogActions } from '../actions/dogActions';

export interface IDogState {
    image: string;
    loading: boolean;
}

const initialBasicState: IDogState = {
    image: '',
    loading: false
};

export const basicReducer: Reducer<IDogState, DogActions> = (
    state = initialBasicState,
    action
  ) => {
    switch (action.type) {
      case DogActionTypes.RANDOM_DOG: {
        return {
          ...state,
          image: action.image
        };
      }
      case DogActionTypes.LOAD_DOG: {
        return {
          ...state,
          loading: action.loading
        };
      }
      default:
        return state;
    }
  };
