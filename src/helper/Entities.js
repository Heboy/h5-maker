/**
 * Created by Soup Tang on 2016/4/18.
 */

import Immutable from 'Immutable';
import Values from './Values';

function Element() {
    return {
        preview: false,
        width: '0px',
        height: '0px',
        left: '0px',
        top: '0px',
        controlProps: Immutable.Map(new Control())//对control的引用
    }
}

function ImageElement() {
    return Object.assign(new Element(), {
        elementType: Values.ELEMENT.TYPE.IMAGE,
        width: '210px',
        height: 'auto',
        fileName: null,
        src: null
    })
}

function TextElement() {
    return Object.assign(new Element(), {
        elementType: Values.ELEMENT.TYPE.TEXT,
        width: 'auto',
        height: 'auto',
        value: '双击修改'
    })
}

function Page() {
    return {
        elementsEntity: Immutable.Map({
            elements: Immutable.List(),
            activeIndex: null
        }),//对elements的引用
        elementType: Values.ELEMENT.TYPE.PAGE,
        backgroundColor: null,
        backgroundImage: null
    }
}

function Control() {
    return {
        preview: false,//控制当前元素的预览，逻辑上不应该放在这，但是elements和pages都不是不可变的
        backgroundColor: 'white',
        backgroundImage: null,
        fontSize: 16,
        fontColor: '#000000',
        animation: Values.CONTROL.ANIMATION_OPTIONS[0].value,
        duration: Values.CONTROL.DURATION_OPTION[0].value,
        delay: Values.CONTROL.DELAY_OPTION[0].value
    }
}

module.exports = {
    Page: Page,
    Control: Control,
    TextElement: TextElement,
    ImageElement: ImageElement
};