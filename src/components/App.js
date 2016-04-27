/**
 * Created by Soup Tang on 2016/1/22.
 */
import React from 'react';
import ReactDom from 'react-dom';
import Immutable from 'Immutable';
import Page from './Page';
import PageList from './PageList';
import ToolBar from './ToolBar';
import ControlBar from './ControlBar';
import Store from '../store/Store';
import * as ElementsAction from '../actions/ElementsAction';
import '../scss/App.scss';

const App = React.createClass({

    getInitialState(){
        return {
            pages: Immutable.List(),
            elements: Immutable.List(),
            control: Immutable.Map()
        };
    },

    componentWillMount(){
        if (true) {
            //创建初始化
            Store.dispatch(ElementsAction.init());
            this.setState(Store.getState());
        }
        else {
            //更新初始化
        }
    },

    //初始化的时候设置对store的侦听
    componentDidMount(){
        window.addEventListener('keydown', function (e) {
            switch (e.keyCode) {
                case 46://删除
                    Store.dispatch(ElementsAction.delete());
                    break;
                default:
                    console.log(e.keyCode)
            }
        });
        Store.subscribe(this.onStateChange);
    },

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.elements !== nextState.elements) {
            return true;
        }
        else if (this.state.control !== nextState.control) {
            return true;
        }
        else if (this.state.pages !== nextState.pages) {
            return true;
        }
        return false;
    },

    render(){
        let {control,pages,elements} = this.state;
        let currentPage = pages.get(0);
        let currentElement = elements.get(0);

        return (
            <div>
                <PageList pages={pages} currentPage={currentPage}/>
                <div className="main">
                    <ToolBar/>
                    <div className="stage">
                        <Page elements={elements} currentElement={currentElement} preview={control.get('preview')}/>
                        <ControlBar type={currentElement?currentElement.elementType:'PAGE'}
                                    delay={control.get('delay')}
                                    duration={control.get('duration')}
                                    animation={control.get('animation')}
                                    fontSize={control.get('fontSize')}
                                    fontColor={control.get('fontColor')}
                                    textAlign={control.get('textAlign')}
                                    zIndex={elements.shift().indexOf(currentElement)}
                                    maxZIndex={elements.shift().size}/>
                    </div>
                </div>
            </div>
        )
    },

    onStateChange(){
        this.setState(Store.getState())
    },

    setPage(){
        var page = Store.getState().pages.current;
        return (
            <Page>
                {this.setElement()}
            </Page>
        )
    },

    setControlBar(){
        var control = Store.getState().control;
        return (
            <ControlBar open={control.open} animation={control.animation}
                        zIndex={control.zIndex}
                        maxZIndex={Store.getState().elements.length}
                        animationOptions={control.animationOptions}/>
        )
    },

    setElement(){
        return Store.getState().elements.map(function (element, index, thisArray) {
            var result = AppStore.findObjectPropInArray(element.rid, 'rid', thisArray);
            if (!result) {
                result.rid = AppStore.uniqueId();
            }
            var className = ClassName(element.controlBarProps.animation, element.isActive ? 'active' : '');
            switch (element.elementType) {
                case GlobalValues.Static.TYPE.IMAGE:
                    return (
                        <Element rid={element.rid}
                                 key={element.rid}
                                 className={className}
                                 width={element.width}
                                 height={element.height}
                                 left={element.left}
                                 top={element.top}
                                 zIndex={element.zIndex}
                                 elementType={element.elementType}
                                 controlBarProps={element.controlBarProps}>
                            <image className="full" draggable="false" src={element.src}/>
                        </Element>
                    );
                case GlobalValues.Static.TYPE.TEXT:
                    return (
                        <Element rid={result.rid} key={result.rid}
                                 className={className}
                                 width={element.width}
                                 height={element.height}
                                 left={element.left}
                                 top={element.top}
                                 zIndex={element.zIndex}
                                 elementType={element.elementType}
                                 controlBarProps={element.controlBarProps}>
                            <Text rid={result.rid} width={element.width} height={element.height}
                                  value={element.value}/>
                        </Element>
                    )
            }
            return undefined;
        });
    }
});

ReactDom.render(
    <App/>,
    document.getElementById('app')
);