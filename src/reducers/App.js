/**
 * Created by Soup Tang on 2016/4/18.
 */
import {combineReducers} from 'redux';
import ElementsReducer from './ElementsReducer';
import ControlReducer from './ControlReducer';
import PagesReducer from './PagesReducer';

module.exports = combineReducers({
    elementsEntity: ElementsReducer,
    control: ControlReducer,
    pagesEntity: PagesReducer
});