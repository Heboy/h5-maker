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
        return false;
    }

    render() {
        var self = this;
        var pages = this.props.pages.map(function (page, index) {
            if (index > 0) {
                var className = '';
                if (page === self.props.currentPage) {
                    className = 'active';
                }
                return self.buildPage(index, page, className);
            }
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
        var pages = this.props.pages.shift();
        if (pages.size > 1) {
            Store.dispatch(PagesAction.doDelete(page));//执行删除
            //当删除的page是currentPage时
            if (page === this.props.currentPage) {
                var index = pages.indexOf(page);//删除一项
                var nextPage = null;
                window.nextPage = nextPage;
                if (index == 0) {
                    nextPage = pages.get(1);
                    Store.dispatch(PagesAction.active(nextPage));
                }
                else {
                    nextPage = pages.get(index - 1);
                    Store.dispatch(PagesAction.active(nextPage));
                }
            }
        }
    }

    activePage(page, e) {
        Store.dispatch(PagesAction.active(page));
    }
}

PageList.propTypes = {
    pages: React.PropTypes.object,
    currentPage: React.PropTypes.object,
    className: React.PropTypes.string
};

module.exports = PageList;