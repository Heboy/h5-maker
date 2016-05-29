/**
 * Created by Soup Tang on 2016/4/22.
 */
import Immutable from 'Immutable';
import Values from '../helper/Values';
import {Control} from '../helper/Entities';
import AppStore from '../helper/AppStore';


module.exports = function (state = [], action) {
    let control = Immutable.Map(state);
    control = control.set('preview', false);
    switch (action.type) {
        case Values.APP.INIT:
        case Values.ELEMENTS.ADD_IMAGE:
        case Values.ELEMENTS.ADD_TEXT:
            //创建的时候返回新Control
            control = Immutable.Map(new Control());
            return control;
        case Values.CONTROL.SET_ANIMATION:
            control = control.set('animation', action.animation).set('preview', true);
            return control;
        case Values.CONTROL.SET_DELAY:
            control = control.set('delay', action.delay).set('preview', true);
            return control;
        case Values.CONTROL.SET_DURATION:
            control = control.set('duration', action.duration).set('preview', true);
            return control;
        case Values.CONTROL.SET_ZINDEX:
            control = control.set('zIndex', action.zIndex);
            return control;
        case Values.CONTROL.SET_TEXT_ALIGN:
            control = control.set('textAlign', action.textAlign);
            return control;
        case Values.CONTROL.SET_TEXT_COLOR:
            control = control.set('fontColor', action.color);
            return control;
        case Values.CONTROL.SET_FONT_SIZE:
            control = control.set('fontSize', action.size);
            return control;
        default:
            return control;
    }
};