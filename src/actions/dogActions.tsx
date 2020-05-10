import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { IDogState } from '../reducers/basicReducer';

export enum DogActionTypes {
    RANDOM_DOG = 'RANDOM_DOG',
    LOAD_DOG = 'LOAD_DOG'
}

export interface IRandomDogAction {
    type: DogActionTypes.RANDOM_DOG;
    image: string;
}

export interface ILoadDogAction {
    type: DogActionTypes.LOAD_DOG;
    loading: boolean;
}
export type DogActions = IRandomDogAction | ILoadDogAction;

/*<Promise<Return Type>, State Interface, Type of Param, Type of Action> */
export const RandomDogAction: ActionCreator<ThunkAction<Promise<any>, IDogState, null, IRandomDogAction>> = (dogBreed: string) => {
    return async (dispatch: Dispatch) => {
        try {
            // loadDogAction(true);
            console.log('entrou');
            debugger;
            let dog = await (await fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)).json()
            dispatch({image: dog.message, type: DogActionTypes.RANDOM_DOG });
            // dispatch({loading: false, type: DogActionTypes.LOAD_DOG});
            // loadDogAction(false);
        } catch (err) {
        console.error(err);
        }
    };
};

export const loadDogAction: ActionCreator<ThunkAction<any, IDogState, null, ILoadDogAction>> = (shouldLoad: boolean) => 
    (dispatch: Dispatch) => dispatch({type: DogActionTypes.LOAD_DOG, loading: shouldLoad})
