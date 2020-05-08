import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { IBasicState } from '../reducers/basicReducer';

export enum BasicActionTypes {
    ANY = 'ANY',
}

export interface IBasicAnyAction {
    type: BasicActionTypes.ANY;
    property: any;
}

export type BasicActions = IBasicAnyAction;

/*<Promise<Return Type>, State Interface, Type of Param, Type of Action> */
export const basicAction: ActionCreator<ThunkAction<Promise<any>, IBasicState, null, IBasicAnyAction>> = () => {
    return async (dispatch: Dispatch) => {
        try {
            // Your logic here
            dispatch({
            property: null,
            type: BasicActionTypes.ANY
            })
        } catch (err) {
        console.error(err);
        }
    };
};