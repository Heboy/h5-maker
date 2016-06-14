/**
 * Created by Soup Tang on 2016/2/23.
 */
import {createStore,applyMiddleware} from 'redux';
import reducer from '../reducers/App';
import Values from '../helper/Values';
import AppStore from '../helper/AppStore';

const logger = store => next => action => {
    console.group(action.type);
    console.info('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    console.groupEnd(action.type);
    return result
};

const mixReducers = store => next => action => {
    let result = next(action);

    let pagesEntity = store.getState().pagesEntity;
    let pages = store.getState().pagesEntity.get('pages');
    let pageActiveIndex = store.getState().pagesEntity.get('activeIndex');
    let page = pages.get(pageActiveIndex);
    let elementsEntity = store.getState().elementsEntity;
    let elements = elementsEntity.get('elements');
    let elementsActiveIndex = elementsEntity.get('activeIndex');
    let element = elements.get(elementsActiveIndex);
    let control = store.getState().control;

    if (!AppStore.switchPage(action)) {
        if (elementsActiveIndex !== null) {
            if (AppStore.shouldUpdateElementControlPropsInMiddleware(action)) {
                element = element.set('controlProps', control);
                elements = elements.set(elementsActiveIndex, element);
                store.getState().elementsEntity = elementsEntity = elementsEntity.set('elements', elements);

            }
            else if (AppStore.shouldSetElementsControlPropsToControlInMiddleware(action)) {
                store.getState().control = element.get('controlProps');
            }
        }
        else {
            store.getState().control = control.set('backgroundColor', page.get('backgroundColor')).set('backgroundImage', page.get('backgroundImage'));
        }
        store.getState().pagesEntity = pagesEntity.set('pages', pages.set(pageActiveIndex, page.set('elementsEntity', elementsEntity)))
    }
    if (AppStore.switchPage(action)) {
        elementsEntity = pagesEntity.get('pages').get(pageActiveIndex).get('elementsEntity');
        elements = elementsEntity.get('elements');
        elementsActiveIndex = elementsEntity.get('activeIndex');
        element = elements.get(elementsActiveIndex);

        if (elementsActiveIndex !== null) {
            store.getState().control = element.get('controlProps');
        }
        else {
            store.getState().control = control.set('backgroundColor', page.get('backgroundColor')).set('backgroundImage', page.get('backgroundImage'));
        }
        store.getState().elementsEntity = page.get('elementsEntity');
    }
    return result;
};


let createStoreWithMiddleware = applyMiddleware(logger, mixReducers)(createStore);
module.exports = createStoreWithMiddleware(reducer);