/**
 * Created by Soup Tang on 2016/4/25.
 */
import Immutable from 'Immutable';
import Values from '../helper/Values';
import {Page} from '../helper/Entities';
import AppStore from '../helper/AppStore';

module.exports = function (state = [], action) {
    let pages = Immutable.List(state);
    let page = pages.get(0);
    let index = null;

    switch (action.type) {
        case Values.APP.INIT:
            page = new Page();
            page.rid = AppStore.uniqueId();
            pages = pages.push(page).push(page);
            return pages;
        case Values.PAGES.ADD:
            page = new Page();
            page.rid = AppStore.uniqueId();
            pages = pages.push(page);
            return pages;
        case Values.PAGES.DELETE:
            index = pages.shift().indexOf(action.page);
            if (index > -1) {
                pages = pages.delete(index + 1);
            }
            return pages;
        case Values.PAGES.ACTIVE:
            pages = pages.set(0, action.page);
            return pages;
        default:
            return pages;
    }
};