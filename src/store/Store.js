/**
 * Created by Soup Tang on 2016/2/23.
 */
import {createStore,applyMiddleware} from 'redux';
import reducer from '../reducers/App';
import Values from '../helper/Values';
import AppStore from '../helper/AppStore';
import Immutable from 'Immutable';

const logger = store => next => action => {
    console.group(action.type);
    console.info('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    console.groupEnd(action.type);
    return result
};

/**
 * 在dispatch之后将elements赋给currentPage的elementss属性
 * @param store
 */
const appendPropsToPage = store => next => action => {
    //在渲染之前完成赋值
    let result = next(action);
    let pages = store.getState().pagesEntity.get('pages');
    let activeIndex = store.getState().pagesEntity.get('activeIndex');
    let page = pages.get(activeIndex);
    if (AppStore.shouldSetElementsInMiddleware(action)) {
        let elementsEntity = page.get('elementsEntity');
        let elementsActiveIndex = elementsEntity.get('activeIndex');
        let elements = elementsEntity.get('elements');
        store.getState().elementsEntity = elementsEntity;//用page.elements替换state中的elements
        store.getState().control = elements === undefined ? Immutable.Map() : elements.get(elementsActiveIndex).get('controlProps');//设置controlBar的值
    }
    else {
        page = page.set('elementsEntity', store.getState().elementsEntity);
        store.getState().pagesEntity = store.getState().pagesEntity.set('pages', pages.set(activeIndex, page));
    }
    return result;
};

const switchElement = store => next => action => {
    let result = next(action);
    let elementsEntity = store.getState().elementsEntity;
    let elements = elementsEntity.get('elements');
    let element = elements.get(elementsEntity.get('activeIndex'));
    if (action.type === Values.ELEMENT.ACTIVE) {
        if (element !== undefined) {
            store.getState().control = action.element.get('controlProps');
        }
    }
    else if (AppStore.shouldUpdateElementControlPropsInMiddleware(action)) {
        if (element !== undefined) {
            element = element.set('controlProps', store.getState().control);
            elements = elements.set(elementsEntity.get('activeIndex'), element);
            store.getState().elementsEntity = elementsEntity.set('elements', elements);
        }
    }
    return result;
};

const logCurrentElementProps = store => next => action => {
    let elements = store.getState().elements;
    let element = elements.get(0);
    if (element !== null) {
        console.group(action.type);
        for (var i in element) {
            if (typeof element[i] !== 'object' || element[i] === null) {
                console.log(`${i}:${element[i]}`)
            }
            else {
                console.log(i + '->');
                console.dir(element[i]);
            }
        }
        console.groupEnd(action.type);
    }
    return next(action);
};


let createStoreWithMiddleware = applyMiddleware(logger, switchElement, appendPropsToPage)(createStore);
module.exports = createStoreWithMiddleware(reducer);