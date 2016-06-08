/**
 * Created by Soup Tang on 2016/6/2.
 */
import React from 'react';
import ReactDom from 'react-dom';
import Loading from 'react-loading';

//入口提供浏览器检测与loading
let loadingDom = document.querySelector('#loading');
class Entry extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        require.ensure(['immutable'], function () {
            let App = require('./App.js');
            ReactDom.render(<App/>,document.querySelector('#app'));
            loadingDom.classList.remove('block');
            ReactDom.unmountComponentAtNode(loadingDom);
        });
    }

    render(){
        return(
            <Loading type='balls' color='#ffffff'/>
        )
    }
}

ReactDom.render(<Entry/>,loadingDom);