/**
 * Created by Soup Tang on 2016/6/6.
 */
import React from 'react';
import ColorPicker from 'react-colorpicker';
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

    setInlineStyle() {
        return {
            backgroundColor: this.state.color,
            width: '100%',
            height: '20px'
        }
    }

    render() {
        if (this.state.show === false) {
            return (
                <div className="color-selector">
                    <div className="current-color"
                         style={this.setInlineStyle()}
                         onClick={this.clickHandle.bind(this)}></div>
                </div>
            )
        }
        else {
            return (
                <div className="color-selector active">
                    <ColorPicker color={this.state.color} onChange={this.changeColor.bind(this)}/>
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
            color: this.currentColor.toHex ? this.currentColor.toHex() : this.currentColor
        });
        if (this.props.onChange) {
            this.props.onChange(this.state.color);
        }
    }

    cancelSelect() {
        this.setState({
            show: false,
            color: this.prevColor.toHex ? this.prevColor.toHex() : this.prevColor
        })
    }

    changeColor(color) {
        this.currentColor = color;
        this.setState({
            color: color.toHex()
        });
    }
}

ColorSelector.defaultProps = {
    color: '#000000'
}

ColorPicker.propTypes = {
    onChange: React.PropTypes.func,
    color: React.PropTypes.string
}

module.exports = ColorSelector;