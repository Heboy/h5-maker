/**
 * Created by Soup Tang on 2016/3/16.
 */
import React from 'react';
import ClassName from 'classname';
import * as ElementsAction from '../actions/ElementsAction';
import Store from '../store/Store';
import '../scss/Text.scss';

class Text extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p className="text"
               onDoubleClick={this.editText.bind(this)}
               onBlur={this.saveText.bind(this)}
               style={this.setInlineStyle()}>{this.props.value}</p>
        )
    }

    setInlineStyle() {
        return {
            fontSize: this.props.fontSize,
            height: '100%',
            overflow: 'hidden'
        }
    }

    editText(e) {
        var target = e.target;
        target.contentEditable = true;
        target.focus();
    }

    saveText(e) {
        var content = e.target.textContent;
        if (content.length == 0) {
            content = '双击修改';
        }
        Store.dispatch(ElementsAction.updateValue(content));
    }

}

Text.defauleProps = {
    fontSize: 16
};

Text.propTypes = {
    fontSize: React.PropTypes.number
};

module.exports = Text;