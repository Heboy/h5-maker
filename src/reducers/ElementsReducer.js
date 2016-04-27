/**
 * Created by Soup Tang on 2016/4/18.
 */

import Immutable from 'Immutable';
import Values from '../helper/Values';
import {TextElement,ImageElement} from '../helper/Entities';
import AppStore from '../helper/AppStore';

//elements[0]存放currentElement

module.exports = function (state = [], action) {
    let elements = Immutable.List(state);
    let element = elements.get(0);//currentElement
    let index = null;

    switch (action.type) {
        case Values.APP.INIT:
            elements = elements.set(0, null);
            return elements;

        case Values.ELEMENTS.ADD_TEXT:
            element = new TextElement();
            return addElement(elements, element);

        case Values.ELEMENTS.ADD_IMAGE:
            element = new ImageElement();
            element.src = action.src;
            return addElement(elements, element);

        case Values.ELEMENTS.DELETE:
            //仅active的元素能被删除
            index = AppStore.getRealIndex(elements, element);
            if (index > -1) {
                elements = elements.delete(index + 1);
            }
            return elements;

        case Values.ELEMENT.ACTIVE:
            elements = elements.set(0, action.element);
            return elements;

        case Values.ELEMENT.RELEASE:
            if(element){
                elements = elements.set(0, null);
            }
            return elements;

        case Values.ELEMENTS.SAVE:
            //保存元素相关信息
            element = Object.assign(element, {
                width: action.width,
                height: action.height,
                left: action.left,
                top: action.top
            });
            elements = elements.set(0, element);
            return elements;

        case Values.ELEMENTS.UPDATE_VALUE:
            element.value = action.content;
            elements = elements.set(0, element);
            return elements;

        case Values.CONTROL.SET_ZINDEX:
            //通过修改element在elements中的位置改变zIndex
            elements = elements.shift();
            index = elements.indexOf(element);
            elements = elements.delete(index);
            elements = elements.insert(action.zIndex, element);
            elements = elements.unshift(element);
            return elements;

        default:
            return elements;
    }
};

/**
 * 添加元素，将添加的元素设置为currentElement
 * @param elements
 * @param element
 * @returns {Number|*|List<*>|Stack<*>|Cursor}
 */
function addElement(elements, element) {
    let currentElement = elements.get(0);
    elements = elements.set(0, element);
    return elements.push(element);
}
/**
 * 设置element.controlProp中的属性
 * @param element
 * @param propName
 * @param value
 * @returns {List<T>|Map<K, V>|__Cursor.Cursor|*}
 */
function setControlProp(element, propName, value) {
    element.controlProps[propName] = value;
    return element;
}