/**
 * Created by Soup Tang on 2016/4/18.
 */
module.exports = {
    APP: {
        INIT: 'INIT_APP'
    },
    ELEMENTS: {
        ADD_TEXT: 'ADD_TEXT_ELEMENT',
        ADD_IMAGE: 'ADD_IMAGE_ELEMENT',
        DELETE: 'DELETE_ELEMENT',
        SAVE: 'SAVE_ELEMENT',
        UPDATE_VALUE: 'UPDATE_ELEMENT_VALUE'
    },
    ELEMENT: {
        TYPE: {
            PAGE: 'PAGE',
            IMAGE: 'IMAGE',
            TEXT: 'TEXT'
        },
        ACTIVE: 'ACTIVE_ELEMENT',
        RELEASE: 'RELEASE_ELEMENT'
    },
    CONTROL: {
        SET_ZINDEX: 'SET_ZINDEX',
        SET_ANIMATION: 'SET_ANIMATION',
        SET_DELAY: 'SET_DELAY',
        SET_DURATION: 'SET_DURATION',
        SET_TEXT_ALIGN: 'SET_TEXT_ALIGN',
        SET_TEXT_COLOR: 'SET_TEXT_COLOR',
        SET_BACKGROUND_COLOR:'SET_BACKGROUND_COLOR',
        ANIMATION_OPTIONS: [
            {
                label: '无',
                value: ''
            }, {
                label: '从上到下',
                value: 'moveFromTop'
            }, {
                label: '从左到右',
                value: 'moveFromLeft'
            }
        ],
        DURATION_OPTION: [
            {
                label: '0.6秒',
                value: '0.6s'
            }, {
                label: '0.9秒',
                value: '0.9s'
            }, {
                label: '1.2秒',
                value: '1.2s'
            }
        ],
        DELAY_OPTION: [
            {
                label: '0秒',
                value: '0s'
            }, {
                label: '0.5秒',
                value: '0.5s'
            }, {
                label: '1秒',
                value: '1s'
            }
        ],
        TEXT_ALIGN_OPTION: [
            {
                label: '左对齐',
                value: 'left'
            }, {
                label: '居中',
                value: 'center'
            }, {
                label: '右对齐',
                value: 'right'
            }
        ]
    },
    PAGES: {
        ADD: 'ADD_PAGE',
        DELETE: 'DELETE_PAGE',
        ACTIVE: 'ACTIVE_PAGE',
        ACTIVE_BY_INDEX: 'ACTIVE_BY_INDEX',
        SET_BACKGROUND_COLOR:'SET_BACKGROUND_COLOR',
        SAVE:'SAVE'
    }
};