'use strict';
/**
 * Created by Soup Tang on 2016/4/18.
 */

import Immutable from 'immutable';
import Values from '../helper/Values';
import { TextElement, ImageElement } from '../helper/Entities';
import AppStore from '../helper/AppStore';

module.exports = function(state = {}, action) {
  let elementsEntity = Immutable.Map(state);
  let elements = elementsEntity.get('elements');
  let activeIndex = elementsEntity.get('activeIndex');
  let element = null;
  let index = null;

  switch (action.type) {

    case Values.APP.INIT:
      elementsEntity = elementsEntity.set('elements', Immutable.List()).set('activeIndex', null);
      return elementsEntity;

    case Values.ELEMENTS.ADD_TEXT:
      element = Immutable.Map(new TextElement()).set('rid', AppStore.uniqueId());
      elementsEntity = elementsEntity.set('elements', elements.push(element)).set('activeIndex', elements.size);
      return elementsEntity;

    case Values.ELEMENTS.ADD_IMAGE:
      element = Immutable.Map(new ImageElement()).set('rid', AppStore.uniqueId()).set('src', action.src);
      elementsEntity = elementsEntity.set('elements', elements.push(element)).set('activeIndex', elements.size);
      return elementsEntity;

    case Values.ELEMENTS.DELETE:
      if (activeIndex !== null) {
        elements = elements.delete(activeIndex);
        elementsEntity = elementsEntity.set('activeIndex', null).set('elements', elements);
      }
      return elementsEntity;

    case Values.ELEMENT.ACTIVE:
      index = elements.indexOf(action.element);
      if (index > -1) {
        elementsEntity = elementsEntity.set('activeIndex', index);
      }
      return elementsEntity;

    case Values.ELEMENT.RELEASE:
      if (activeIndex !== null) {
        elementsEntity = elementsEntity.set('activeIndex', index);
      }
      return elementsEntity;

    case Values.ELEMENTS.SAVE:
      //保存元素相关信息
      if (activeIndex !== null) {
        element = elements.get(activeIndex);
        element = element.set('width', action.width).set('height', action.height).set('left', action.left).set('top', action.top);
        elements = elements.set(activeIndex, element);
        elementsEntity = elementsEntity.set('elements', elements);
      }
      return elementsEntity;

    case Values.ELEMENTS.UPDATE_VALUE:
      if (activeIndex !== null) {
        element = elements.get(activeIndex).set('value', action.content);
        elements = elements.set(activeIndex, element);
        elementsEntity = elementsEntity.set('elements', elements);
      }
      return elementsEntity;

    case Values.CONTROL.SET_ZINDEX:
      //通过修改element在elements中的位置改变zIndex
      if (activeIndex !== null) {
        element = elements.get(activeIndex);
        elements = elements.delete(activeIndex).insert(action.zIndex, element);
        elementsEntity = elementsEntity.set('activeIndex', action.zIndex).set('elements', elements);
      }
      return elementsEntity;

    case Values.CONTROL.SET_TEXT_COLOR:
      if (activeIndex !== null) {
        element = elements.get(activeIndex).set('textColor', action.color);
        elements = elements.set(activeIndex, element);
        elementsEntity = elementsEntity.set('elements', elements);
      }
      return elementsEntity;

    case Values.CONTROL.SET_FONT_SIZE:
      if (activeIndex !== null) {
        element = elements.get(activeIndex).set('fontSize', action.size);
        elements = elements.set(activeIndex, element);
        elementsEntity = elementsEntity.set('elements', elements);
      }
      return elementsEntity;
    default:
      return elementsEntity;
  }
};

/**
 * 添加元素，将添加的元素设置为currentElement
 * @param elements
 * @param element
 * @returns {Number|*|List<*>|Stack<*>|Cursor}
 */
function addElement(elements, element) {
  //elements = elements.set(0, element);
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