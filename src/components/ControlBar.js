/**
 * Created by Soup Tang on 2016/4/19.
 */

import React from 'react';
import ClassName from 'classname';
import Select from 'react-select';
import ColorPicker from 'color-picker';
import 'color-picker/lib/ColorPicker.css';
import Store from '../store/Store';
import Values from '../helper/Values';
import * as ElementsAction from '../actions/ElementsAction';
import * as ControlAction from '../actions/ControlAction';
import * as PagesAction from '../actions/PagesAction';
import '../../node_modules/react-select/dist/react-select.css';
import '../scss/ControlBar.scss';

class ControlBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.type !== nextProps.type) {
            this.setState({
                index: 0
            });
            return true;
        }
    }

    render() {
        switch (this.props.type) {
            case Values.ELEMENT.TYPE.PAGE:
                return this.buildTab(['样式'], [this.backgroundColor()]);
            case Values.ELEMENT.TYPE.TEXT:
                return this.buildTab(['样式', '动画'], [[this.fontTextAlign(), this.zIndex(), this.fontSize(), this.fontColor()],
                    [this.animation(), this.animationDuration(), this.animationDelay()]]);
            case Values.ELEMENT.TYPE.IMAGE:
                return this.buildTab(['样式', '动画'], [[this.zIndex()],
                    [this.animation(), this.animationDuration(), this.animationDelay()]]);
            default:
                return this.buildTab(['样式'], [this.props.type]);
        }
    }

    buildTab(tabHeadArr, tabBodyArr) {
        let self = this;
        tabHeadArr = tabHeadArr.map(function (head, index) {
            return (
                <li>
                    <span className={ClassName('title',{show:self.state.index==index})}
                          key={index}
                          data-index={index}>
                        {head}
                    </span>
                </li>)
        });
        tabBodyArr = tabBodyArr.map(function (body, index) {
            return (
                <div className={ClassName('tab-main', {show: self.state.index == index})}>
                    {body}
                </div>
            )
        });
        return (
            <div className={ClassName('control-bar', this.props.className)}>
                <ul className="tab-head" onClick={this.switchTab.bind(this)}>
                    {tabHeadArr}
                </ul>
                <div className="tab-body">
                    {tabBodyArr}
                </div>
            </div>
        )
    }

    switchTab(e) {
        let target = e.target;
        if (target.dataset.index) {
            this.setState({
                index: parseInt(target.dataset.index)
            });
        }
    }

    /**
     * 动画选项
     * @returns {XML}
     */
    animation() {
        return (
            <div key="control-bar-animation">
                <p>动画效果：</p>
                <Select name="animation" clearable={false} value={this.props.animation}
                        options={Values.CONTROL.ANIMATION_OPTIONS}
                        onChange={this.chooseAnimation}/>
            </div>
        )
    }

    /**
     * zIndex选项
     * @returns {XML}
     */
    zIndex() {
        let options = [];
        if (this.props.zIndex !== -1 && this.props.maxZIndex > 0) {
            for (let i = 0; i < this.props.maxZIndex; i++) {
                options.push({value: i, label: i});
            }
            return (
                <div key="control-bar-z-index">
                    <p>层级关系：</p>
                    <Select name="zIndex" clearable={false} value={this.props.zIndex} options={options}
                            onChange={this.chooseZIndex}/>
                </div>
            )
        }
        return (
            <p>Hello ZIndex</p>
        )
    }

    /**
     * 缓动持续时长
     * @returns {XML}
     */
    animationDelay() {
        return (
            <div key="control-bar-delay">
                <p>动画延迟：</p>
                <Select name="delay" clearable={false} value={this.props.delay}
                        options={Values.CONTROL.DELAY_OPTION}
                        onChange={this.chooseDelay}/>
            </div>
        )
    }

    animationDuration() {
        return (
            <div key="control-bar-duration">
                <p>动画持续时长：</p>
                <Select name="duration" clearable={false} value={this.props.duration}
                        options={Values.CONTROL.DURATION_OPTION}
                        onChange={this.chooseDuration}/>
            </div>
        )
    }

    fontTextAlign() {
        return (
            <div key="control-bar-text-align">
                <p>对齐：</p>
                <Select name="textAlign" clearable={false} value={this.props.textAlign}
                        options={Values.CONTROL.TEXT_ALIGN_OPTION}
                        onChange={this.chooseTextAlign}/>
            </div>
        )
    }

    fontSize() {
        return (
            <div key="control-bar-duration">
                <p>字体大小：</p>
                <Select name="duration" clearable={false} value={this.props.fontSize}
                        options={Values.CONTROL.FONT_SIZE_OPTION}
                        onChange={this.chooseFontSize}/>
            </div>
        )
    }

    fontColor() {
        return (
            <div key="control-bar-text-color">
                <p>字体颜色：</p>
                <ColorPicker width={'100%'} height={20} onChange={this.chooseColor}/>
            </div>
        )
    }

    backgroundColor() {
        return (
            <div key="control-bar-text-color">
                <p>背景颜色：</p>
                <ColorPicker width={'100%'} height={20} onChange={this.chooseBackgroundColor}/>
            </div>
        )
    }

    chooseAnimation(target) {
        Store.dispatch(ControlAction.setAnimation(target.value));
    }

    chooseZIndex(target) {
        Store.dispatch(ControlAction.setZIndex(target.value));
    }

    chooseDelay(target) {
        Store.dispatch(ControlAction.setDelay(target.value));
    }

    chooseDuration(target) {
        Store.dispatch(ControlAction.setDuration(target.value));
    }

    chooseTextAlign(target) {
        Store.dispatch(ControlAction.setTextAlign(target.value));
    }

    chooseColor(color) {
        Store.dispatch(ControlAction.setTextColor(color));
    }

    chooseBackgroundColor(color) {
        Store.dispatch(PagesAction.setBackgroundColor(color));
    }

    chooseFontSize(target) {
        Store.dispatch(PagesAction.setFontSize(target.value));
    }
}

ControlBar.propTypes = {
    control: React.PropTypes.object,
    type: React.PropTypes.string,
    animation: React.PropTypes.string,
    delay: React.PropTypes.string,
    fontSize: React.PropTypes.number,
    fontColor: React.PropTypes.string,
    textAlign: React.PropTypes.string,
    zIndex: React.PropTypes.number,
    maxZIndex: React.PropTypes.number,
    backgroundImage: React.PropTypes.string,
    backgroundColor: React.PropTypes.string
};

ControlBar.defaultProps = {
    animation: Values.CONTROL.ANIMATION_OPTIONS[0].value,
    delay: Values.CONTROL.DELAY_OPTION[0].value,
    duration: Values.CONTROL.DURATION_OPTION[0].value,
    textAlign: Values.CONTROL.TEXT_ALIGN_OPTION[0].value
};

module.exports = ControlBar;