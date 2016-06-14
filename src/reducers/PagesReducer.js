/**
 * Created by Soup Tang on 2016/4/25.
 */
import Values from '../helper/Values';
import Immutable from 'immutable';
import {Page} from '../helper/Entities';
import AppStore from '../helper/AppStore';

module.exports = function (state = {}, action) {
    let pagesEntity = Immutable.Map(state);
    let pages = pagesEntity.get('pages');
    let activeIndex = pagesEntity.get('activeIndex');
    let page = null;
    let index = null;

    switch (action.type) {
        case Values.APP.INIT:
            pages = Immutable.List();
            page = Immutable.Map(new Page()).set('rid', AppStore.uniqueId());
            pages = pages.push(page);
            pagesEntity = pagesEntity.set('pages', pages).set('activeIndex', 0);
            return pagesEntity;
        case Values.PAGES.ADD:
            page = Immutable.Map(new Page()).set('rid', AppStore.uniqueId());
            pages = pages.push(page);
            pagesEntity = pagesEntity.set('pages', pages);
            return pagesEntity;
        case Values.PAGES.DELETE:
            index = pages.indexOf(action.page);
            if (index > -1) {
                pages = pages.delete(index);
                //当前页码大于等于删除页码
                if (activeIndex >= index && activeIndex > 0) {
                    pagesEntity = pagesEntity.set('activeIndex', pagesEntity.get('activeIndex') - 1);
                }
                //当前页码小于删除页码,activeIndex不变
                pagesEntity = pagesEntity.set('pages', pages);
            }
            return pagesEntity;
        case Values.PAGES.ACTIVE:
            index = pages.indexOf(action.page);
            if (index > -1) {
                pagesEntity = pagesEntity.set('activeIndex', index);
            }
            return pagesEntity;
        case Values.PAGES.SET_BACKGROUND_COLOR:
            page = pages.get(activeIndex);
            if (page !== undefined) {
                page = page.set('backgroundColor', action.color);
                pages = pages.set(activeIndex, page);
                pagesEntity = pagesEntity.set('pages', pages);
            }
            return pagesEntity;
        default:
            return pagesEntity;
    }
};