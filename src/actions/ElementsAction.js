/**
 * Created by Soup Tang on 2016/4/18.
 */
import Values from '../helper/Values';
import AppStore from '../helper/AppStore';

export const init = AppStore.makeActionCreator(Values.APP.INIT);
export const active = AppStore.makeActionCreator(Values.ELEMENT.ACTIVE, 'element');
export const release = AppStore.makeActionCreator(Values.ELEMENT.RELEASE);
export const addText = AppStore.makeActionCreator(Values.ELEMENTS.ADD_TEXT);
export const addImage = AppStore.makeActionCreator(Values.ELEMENTS.ADD_IMAGE, 'src');
export const doDelete = AppStore.makeActionCreator(Values.ELEMENTS.DELETE);
export const save = AppStore.makeActionCreator(Values.ELEMENTS.SAVE, 'width', 'height', 'left', 'top');
export const updateValue = AppStore.makeActionCreator(Values.ELEMENTS.UPDATE_VALUE, 'content');
