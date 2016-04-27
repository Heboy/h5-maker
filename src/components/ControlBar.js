/**
 * Created by Soup Tang on 2016/4/19.
 */

import React from 'react';
import ClassName from 'classname';
import Select from 'react-select';
import Store from '../store/Store';
import Values from '../helper/Values';
import * as ElementsAction from '../actions/ElementsAction';
import * as ControlAction from '../actions/ControlAction';
import '../../node_modules/react-select/dist/react-select.css';
import '../scss/ControlBar.scss';

class ControlBar extends React.Component {

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    render() {
        switch (this.props.type) {
            case Values.ELEMENT.TYPE.PAGE:
                return (
                    <div className={ClassName('control-bar', this.props.className)}>
                        <p>PAGE</p>
                    </div>
                );
            case Values.ELEMENT.TYPE.TEXT:
                return (
                    <div className={ClassName('control-bar', this.props.className)}>
                        {[this.animation(), this.animationDuration(), this.animationDelay(), this.fontTextAlign(), this.zIndex()]}
                    </div>
                );
            case Values.ELEMENT.TYPE.IMAGE:
                return (
                    <div className={ClassName('control-bar', this.props.className)}>
                        {[this.animation(), this.animationDuration(), this.animationDelay(), this.zIndex()]}
                    </div>
                );
            default:
                return (
                    <div className={ClassName('control-bar', this.props.className)}>
                        <p>{this.props.type}</p>
                    </div>
                )
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
            <div>字体大小</div>
        )
    }

    fontColor() {
        return (
            <div>字体颜色</div>
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
}

ControlBar.propTypes = {
    control: React.PropTypes.object,
    type: React.PropTypes.string,
    animation: React.PropTypes.string,
    delay: React.PropTypes.number,
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