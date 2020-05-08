import { Reducer } from 'redux';
import { BasicActionTypes, BasicActions } from '../actions/basicActions';

export interface IBasicState {
    property: any;
}

const initialBasicState: IBasicState = {
    property: null
};

export const basicReducer: Reducer<IBasicState, BasicActions> = (
    state = initialBasicState,
    action
  ) => {
    switch (action.type) {
      case BasicActionTypes.ANY: {
        return {
          ...state,
          property: action.property
        };
      }
      default:
        return state;
    }
  };
