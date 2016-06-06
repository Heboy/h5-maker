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
        require.ensure([], function () {
            let App = require('./App.js');
            ReactDom.render(<App/>,document.querySelector('#app'));
            loadingDom.classList.remove('block');
            ReactDom.unmountComponentAtNode(loadingDom);
        });
        //require.ensure([], function () {
        //    let ColorSelector = require('./ColorSelector');
        //    ReactDom.render(
        //        <ColorSelector color={'#000000'} onChange={function(color){console.log(color)}}/>,
        //        document.querySelector('#app')
        //    );
        //    loadingDom.classList.remove('block');
        //    ReactDom.unmountComponentAtNode(loadingDom);
        //})
    }

    render(){
        return(
            <Loading type='balls' color='#ffffff'/>
        )
    }
}

ReactDom.render(<Entry/>,loadingDom);