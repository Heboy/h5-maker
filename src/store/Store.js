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
const switchPageList = store => next => action => {
    //在渲染之前完成赋值
    let elements = null;
    if (action.type === Values.PAGES.ACTIVE) {
        store.getState().elements = action.page.elements;//用page.elements替换state中的elements
        elements = action.page.elements;
        store.getState().control = elements.get(0) === null ? Immutable.Map() : elements.get(0).controlProps;//设置controlBar的值
        return next(action);
    }
    let result = next(action);
    elements = store.getState().elements;
    let page = store.getState().pages.get(0);
    if (page !== null) {
        page.elements = elements;
    }
    return result;
};

const switchElement = store => next => action => {
    let result = next(action);
    let element = store.getState().elements.get(0);

    if (action.type === Values.ELEMENT.ACTIVE) {
        if (element !== null) {
            store.getState().control = action.element.controlProps;
        }
    }
    else if (AppStore.shouldUpdateElementControlPropsInMiddleware(action)) {
        if (element !== null) {
            element.controlProps = store.getState().control;
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


let createStoreWithMiddleware = applyMiddleware(switchElement, switchPageList)(createStore);
module.exports = createStoreWithMiddleware(reducer);