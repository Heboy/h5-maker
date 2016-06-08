/**
 * Created by Soup Tang on 2016/4/18.
 */
import Values from './Values';

let id = 0;
module.exports = {
    uniqueId(){
        return id++;
    },

    /**
     *
     * @param element
     * @param rootElement
     * @param className
     * @returns {*}
     */
    findParentByClassName(element, rootElement, className){
        if (element == rootElement) {
            return undefined;
        }
        let result = element.classList.contains(className);
        if (result) {
            return element
        }
        return this.findParentByClassName(element.parentElement, rootElement, className);
    },

    /**
     * action生成器
     * @param type
     * @param argNames
     * @returns {Function}
     */
    makeActionCreator(type, ...argNames) {
        return function (...args) {
            let action = {type};
            argNames.forEach((arg, index) => {
                action[argNames[index]] = args[index]
            });
            return action
        }
    },

    /**
     * 是否j将control同步到element的controlProps
     * @param action
     * @returns {boolean}
     */
    shouldUpdateElementControlPropsInMiddleware(action){
        return action.type === Values.CONTROL.SET_ANIMATION ||
            action.type === Values.CONTROL.SET_DELAY ||
            action.type === Values.CONTROL.SET_DURATION ||
            action.type === Values.CONTROL.SET_TEXT_ALIGN ||
            action.type === Values.CONTROL.SET_ZINDEX ||
            action.type === Values.CONTROL.SET_TEXT_COLOR ||
            action.type === Values.CONTROL.SET_FONT_SIZE
    },

    /**
     * 是否将page的controlProps同步到control上
     * @param action
     * @returns {boolean}
     */
    switchPage(action){
        return action.type === Values.PAGES.ACTIVE
    },

    /**
     *
     * @param action
     * @returns {boolean}
     */
    shouldSetElementsControlPropsToControlInMiddleware(action){
        return action.type === Values.PAGES.ACTIVE ||
            action.type === Values.PAGES.DELETE ||
            action.type === Values.ELEMENT.ACTIVE
    }

};