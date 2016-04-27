/**
 * Created by Soup Tang on 2016/3/16.
 */
import React from 'react';
import ClassName from 'classname';
import Store from '../store/Store';
import Values from '../helper/Values';
import * as ElementsAction from '../actions/ElementsAction';
import '../scss/ToolBar.scss';

class ToolBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={ClassName('toolbar',this.props.className)}>
                <ul>
                    <li>
                    </li>
                    <li onClick={this.addElementHandle.bind(this,Values.ELEMENT.TYPE.TEXT)}>
                        <i className="glyphicon glyphicon-asterisk"></i>
                        文字
                    </li>
                    <li onClick={this.addElementHandle.bind(this,Values.ELEMENT.TYPE.IMAGE)}>
                        <i className="glyphicon glyphicon-asterisk"></i>
                        图片
                    </li>
                </ul>
            </div>
        )
    }

    addElementHandle(type, e) {
        switch (type){
            case Values.ELEMENT.TYPE.TEXT:
                Store.dispatch(ElementsAction.addText());
                break;
            case Values.ELEMENT.TYPE.IMAGE:
                let input = document.createElement('input');
                input.type = 'file';
                input.click();
                input.onchange = imageLoaderChange;
        }
    }
}

function imageLoaderChange(e){
    var reader = new FileReader();
    var file = e.target.files[0];
    var name = file.name;
    if (file) {
        var fileSize = ((file.size / 1024) / 1024).toFixed(4);//MB
        if (fileSize < .5) {
            reader.onload = function (upload) {
                Store.dispatch(ElementsAction.addImage(upload.target.result));
            };
        }
        else {
            alert('图片不得超过0.5MB');
        }
    }
    reader.readAsDataURL(file);
}

module.exports = ToolBar;