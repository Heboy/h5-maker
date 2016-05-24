/**
 * Created by Soup Tang on 2016/4/25.
 */

import React from 'react';
import ClassName from'classname';
import RemovePoint from'./RemovePoint';
import * as PagesAction from '../actions/PagesAction';
import Store from '../store/Store';
import AppStore from '../helper/AppStore';
import '../scss/PageList.scss';

class PageList extends React.Component {

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.pages !== nextProps.pages) {
            return true;
        }
        else if (this.props.activeIndex !== nextProps.activeIndex) {
            return true;
        }
        return false;
    }

    render() {
        var self = this;
        var pages = this.props.pages.map(function (page, index) {
            var className = '';
            if (self.props.activeIndex === index) {
                className = 'active';
            }
            return self.buildPage(index, page, className);
        });
        pages = pages.push(this.buildAddBtn());
        return (
            <div className={ClassName('page-bar', this.props.className)}>
                {pages}
            </div>
        )
    }

    buildPage(pageIndex, page, className) {
        return (
            <div key={AppStore.uniqueId()} className={ClassName('m_page',className)}
                 onClick={this.activePage.bind(this,page)}>
                <RemovePoint onMouseUp={this.deletePage.bind(this,page)}/>
                {pageIndex}
            </div>
        )
    }

    buildAddBtn() {
        return (
            <div key="add-btn" className="m_page add" onClick={this.addPage}>
                &#43;
            </div>
        )
    }

    addPage() {
        Store.dispatch(PagesAction.add());
    }

    deletePage(page, e) {
        var pages = this.props.pages;
        if (pages.size > 1) {
            Store.dispatch(PagesAction.doDelete(page));//执行删除
        }
    }

    activePage(page, e) {
        Store.dispatch(PagesAction.active(page));
    }
}

PageList.propTypes = {
    pages: React.PropTypes.object,
    activeIndex: React.PropTypes.number,
    className: React.PropTypes.string
};

module.exports = PageList;