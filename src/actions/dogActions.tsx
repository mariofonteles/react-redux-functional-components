import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { IDogState } from '../reducers/basicReducer';

export enum DogActionTypes {
    RANDOM_DOG = 'RANDOM_DOG',
}

export interface IRandomDogAction {
    type: DogActionTypes.RANDOM_DOG;
    image: string;
}

export type DogActions = IRandomDogAction;

/*<Promise<Return Type>, State Interface, Type of Param, Type of Action> */
export const RandomDogAction: ActionCreator<ThunkAction<Promise<any>, IDogState, null, IRandomDogAction>> = () => {
    return async (dispatch: Dispatch) => {
        try {
            console.log('entrou');
            debugger;
            let dog = await (await fetch('https://dog.ceo/api/breed/pug/images/random')).json()
            dispatch({
            image: dog.message,
            type: DogActionTypes.RANDOM_DOG
            })
        } catch (err) {
        console.error(err);
        }
    };
};