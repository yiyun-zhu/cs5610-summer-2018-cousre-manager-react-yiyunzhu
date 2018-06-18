import {
    ADD_WIDGET,
    DELETE_WIDGET,
    FIND_ALL_WIDGETS,
    SAVE,
    HEADING_SIZE_CHANGED,
    SELECT_WIDGET_TYPE,
    HEADING_TEXT_CHANGED,
    PREVIEW,
    MOVE_UP,
    MOVE_DOWN,
    PARAGRAPH_TEXT_CHANGED,
    WIDGET_NAME_CHANGED,
    IMAGE_URL_CHANGED
} from "../constants";

export const moveUp = (dispatch, widget) => (
    dispatch({
        type: MOVE_UP,
        widget: widget
    })
);
export const moveDown = (dispatch, widget) => (
    dispatch({
        type: MOVE_DOWN,
        widget: widget
    })
);
export const findAllWidgets = (dispatch, lessonId) => {
    fetch('http://localhost:8080/api/lesson/'+lessonId+'/widget')
        .then(response => response.json())
        .then(widgets => dispatch({
            type: FIND_ALL_WIDGETS,
            widgets: widgets
        }))
};
export const addWidget = (dispatch) => (
    dispatch({type: ADD_WIDGET})
);
export const save = (dispatch, lessonId) => (
    dispatch({
        type: SAVE,
        lessonId: lessonId
    })
);
export const preview = (dispatch) => (
    dispatch({type: PREVIEW})
);
export const deleteWidget = (dispatch, widgetId) => (
    dispatch({
        type: DELETE_WIDGET,
        id: widgetId
    })
);
export const selectWidgetType = (dispatch, widgetId, widgetType) => (
    dispatch({
        type: SELECT_WIDGET_TYPE,
        id: widgetId,
        widgetType: widgetType
    })
);
export const headingSizeChanged = (dispatch, widgetId, newSize) => (
    dispatch({
        type: HEADING_SIZE_CHANGED,
        id: widgetId,
        size: newSize
    })
);
export const headingTextChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: HEADING_TEXT_CHANGED,
        id: widgetId,
        text: newText
    })
);
export const paragraphTextChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: PARAGRAPH_TEXT_CHANGED,
        id: widgetId,
        text: newText
    })
);
export const widgetNameChanged = (dispatch, widgetId, newName) => (
    dispatch({
        type: WIDGET_NAME_CHANGED,
        id: widgetId,
        name: newName
    })
);
export const imageUrlChanged = (dispatch, widgetId, newUrl) => (
    dispatch({
        type: IMAGE_URL_CHANGED,
        id: widgetId,
        url: newUrl
    })
);