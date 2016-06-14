/**
 * Created by Soup Tang on 2016/6/6.
 */
import React from 'react';
import ColorPicker from 'react-colorpicker';
import ClassName from 'classname';
import '../scss/ColorSelector.scss';

class ColorSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            color: this.props.color
        };
        this.prevColor = this.props.color;
        this.currentColor = this.props.color;
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state !== nextState) {
            return true;
        }
        this.currentColor = nextProps.color;
        return true;
    }

    setInlineStyle() {
        return {
            backgroundColor: this.currentColor,
            width: '100%',
            height: '100%',
            border: '1px solid #555'
        }
    }

    render() {
        if (this.state.show === false) {
            return (
                <div className={ClassName("color-selector",this.props.className)}>
                    <div className="current-color"
                         style={this.setInlineStyle()}
                         onClick={this.clickHandle.bind(this)}></div>
                </div>
            )
        }
        else {
            return (
                <div className={ClassName("color-selector","active",this.props.className)}>
                    <ColorPicker color={this.currentColor} onChange={this.changeColor.bind(this)}/>
                    <div className="btn-list">
                        <input type="button" value="确定" onClick={this.selectColor.bind(this)}/>
                        <input type="button" value="取消" onClick={this.cancelSelect.bind(this)}/>
                    </div>
                </div>
            )
        }
    }

    clickHandle() {
        this.setState({
            show: true
        })
    }

    selectColor() {
        this.prevColor = this.currentColor;
        this.setState({
            show: false,
            color: this.currentColor
        });
        if (this.props.onChange) {
            this.props.onChange(this.state.color);
        }
    }

    cancelSelect() {
        this.setState({
            show: false,
            color: this.prevColor
        })
    }

    changeColor(color) {
        this.currentColor = color.toHex();
        this.setState({
            color: color.toHex()
        });
    }
}

ColorPicker.propTypes = {
    onChange: React.PropTypes.func,
    color: React.PropTypes.string,
    className: React.PropTypes.string
}

module.exports = ColorSelector;