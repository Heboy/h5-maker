/**
 * Created by Soup Tang on 2016/4/10.
 */
import React from 'react';
//删除图标
module.exports = class RemovePoint extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="remove-point" onClick={this.props.onClick}
                 onMouseDown={this.props.onMouseDown}
                 onMouseUp={this.props.onMouseUp}><i className="iconfont icon-errorsign"></i></div>
        )
    }
};