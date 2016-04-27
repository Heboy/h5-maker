/**
 * Created by Soup Tang on 2016/4/18.
 */
import React from 'react';
import ClassName from 'classname';
import AppStore from '../helper/AppStore';
import Store from '../store/Store';
import * as ElementsAction from '../actions/ElementsAction';
import Element from './Element';
import Text from './Text';
import Values from '../helper/Values';
import '../scss/Page.scss';

class Page extends React.Component {

    constructor(props) {
        super(props);
        //内不属性，用来实现移动与缩放
        this.currentElementDom = null;
        this.tmpClientX = null;//element上一次点击位置
        this.tmpClientY = null;
        this.tmpOffsetLeft = null;//element上一次相对父元素的位置
        this.tmpOffsetTop = null;
        this.tmpWidth = null;//element上一次的宽度
        this.tmpHeight = null;
        this.scale = null;//element长宽比,
        this.readyMove = false;
        this.readyResize = false;
        this.resizeType = false;
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.elements !== nextProps.elements) {
            //重新渲染会阻止move或resize
            return true;
        }
        if (this.props.currentElement !== nextProps._currentElement) {
            return true;
        }
        return false;
    }

    render() {
        let self = this;
        let elements = this.props.elements.map(function (element, index) {
            if (index > 0) {
                let className = '';
                let preview = false;
                if (element === self.props.currentElement) {
                    className = 'active';
                    preview = self.props.preview;
                }
                return self.buildElementByType(element, className, preview);
            }
        });
        return (
            <div onMouseMove={this.mouseMoveHandle.bind(this)} onMouseUp={this.mouseUpHandle.bind(this)}
                 onMouseDown={this.mouseDownHandle.bind(this)} className={ClassName('page', this.props.className)}>
                {elements}
            </div>
        )
    }

    buildElementByType(element, className,preview) {
        let self = this;
        let key = AppStore.uniqueId();
        switch (element.elementType) {
            case Values.ELEMENT.TYPE.IMAGE:
                return (
                    <Element element={element}
                             key={key}
                             preview={preview}
                             className={className}
                             onMouseUp={self.activeElement.bind(this)}
                             prepareResize={self.prepareResize.bind(self)}>
                        <img className="full" draggable="false" src={element.src}/>
                    </Element>
                );
            case Values.ELEMENT.TYPE.TEXT:
                return (
                    <Element element={element}
                             key={key}
                             preview={preview}
                             className={className}
                             onMouseUp={self.activeElement.bind(this)}
                             prepareResize={self.prepareResize.bind(self)}>
                        <Text value={element.value}/>
                    </Element>
                );
            default:
                console.log(element.elementType);
                return null;
        }
    }

    /**
     * 点击resize btn
     * @param type
     * @param e
     */
    prepareResize(type, e) {
        let element = AppStore.findParentByClassName(e.target, 'element', 'element');
        if (element) {
            this.currentElementDom = element;
            this.readyResize = true;
            this.resizeType = type;
            this.readyMove = false;
            this.tmpClientX = e.clientX;
            this.tmpClientY = e.clientY;
            this.tmpOffsetLeft = element.offsetLeft;
            this.tmpOffsetTop = element.offsetTop;
            this.tmpWidth = parseInt(element.clientWidth);
            this.tmpHeight = parseInt(element.clientHeight);
            this.scale = this.tmpWidth / this.tmpHeight;
        }
        e.stopPropagation();
    }

    mouseDownHandle(e) {
        let element = AppStore.findParentByClassName(e.target, e.currentTarget, 'element');
        if (element) {
            //移除非当前元素的active样式
            let activeElements = document.querySelectorAll('.element.active');
            for (let i = 0; i < activeElements.length; i++) {
                if (element !== activeElements[i]) {
                    activeElements[i].classList.remove('active');
                }
            }
            this.currentElementDom = element;
            this.readyMove = true;
            this.readyResize = false;
            this.tmpClientX = e.clientX;
            this.tmpClientY = e.clientY;
            this.tmpOffsetLeft = element.offsetLeft;
            this.tmpOffsetTop = element.offsetTop;
            this.tmpWidth = parseInt(element.clientWidth);
            this.tmpHeight = parseInt(element.clientHeight);
            this.scale = this.tmpWidth / this.tmpHeight;
        }
    }

    activeElement(element, e) {
        Store.dispatch(ElementsAction.active(element));
    }

    mouseUpHandle(e) {
        //停止拖拽或移动
        if (this.currentElementDom) {
            Store.dispatch(ElementsAction.save(this.currentElementDom.style.width, this.currentElementDom.style.height, this.currentElementDom.style.left, this.currentElementDom.style.top));
        }
        //释放当前元素
        else {
            Store.dispatch(ElementsAction.release());
        }
        this.currentElementDom = null;
        this.readyMove = false;
        this.readyResize = false;
    }

    mouseMoveHandle(e) {
        if (this.currentElementDom) {
            if (this.readyMove === true && this.readyResize === false) {
                let newLeft = e.clientX - this.tmpClientX + this.tmpOffsetLeft;
                let newTop = e.clientY - this.tmpClientY + this.tmpOffsetTop;
                this.currentElementDom.style.left = newLeft + 'px';
                this.currentElementDom.style.top = newTop + 'px';
            }
            if (this.readyResize === true && this.readyMove === false) {
                let newWidth = e.clientX - this.tmpClientX + this.tmpWidth;
                let newHeight = e.clientY - this.tmpClientY + this.tmpHeight;
                switch (this.resizeType) {
                    case 'x':
                        this.currentElementDom.style.width = newWidth + 'px';
                        break;
                    case 'y':
                        this.currentElementDom.style.height = newHeight + 'px';
                        break;
                    case 'scale':
                        this.currentElementDom.style.width = newWidth + 'px';
                        this.currentElementDom.style.height = newWidth / this.scale + 'px';
                        break;
                    default:
                        break;
                }
            }
        }
    }

}

Page.defaultProps = {
    elements: []
};

module.exports = Page;