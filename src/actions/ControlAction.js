/**
 * Created by Soup Tang on 2016/4/26.
 */
import Values from '../helper/Values';
import AppStore from '../helper/AppStore';

export const setZIndex = AppStore.makeActionCreator(Values.CONTROL.SET_ZINDEX, 'zIndex');
export const setAnimation = AppStore.makeActionCreator(Values.CONTROL.SET_ANIMATION, 'animation');
export const setDelay = AppStore.makeActionCreator(Values.CONTROL.SET_DELAY, 'delay');
export const setDuration = AppStore.makeActionCreator(Values.CONTROL.SET_DURATION, 'duration');
export const setTextAlign = AppStore.makeActionCreator(Values.CONTROL.SET_TEXT_ALIGN, 'textAlign');