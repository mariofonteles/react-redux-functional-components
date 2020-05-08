import { Reducer } from 'redux';
import { DogActionTypes, DogActions } from '../actions/dogActions';

export interface IDogState {
    image: string;
}

const initialBasicState: IDogState = {
    image: '',
};

export const basicReducer: Reducer<IDogState, DogActions> = (
    state = initialBasicState,
    action
  ) => {
    debugger;
    switch (action.type) {
      case DogActionTypes.RANDOM_DOG: {
        return {
          ...state,
          image: action.image
        };
      }
      default:
        return state;
    }
  };
