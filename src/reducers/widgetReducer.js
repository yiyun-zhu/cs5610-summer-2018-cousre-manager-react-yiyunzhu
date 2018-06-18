import {
    ADD_WIDGET,
    DELETE_WIDGET,
    FIND_ALL_WIDGETS,
    HEADING_SIZE_CHANGED,
    SAVE,
    SELECT_WIDGET_TYPE,
    HEADING_TEXT_CHANGED,
    PREVIEW,
    MOVE_UP,
    MOVE_DOWN,
    PARAGRAPH_TEXT_CHANGED,
    WIDGET_NAME_CHANGED,
    IMAGE_URL_CHANGED
} from "../constants";

Array.prototype.move = function(from, to) {
    this.splice(to, 0, this.splice(from, 1)[0]);
};

export const widgetReducer = (state = {widgets: [], preview: false}, action) => {

    switch(action.type) {
        case IMAGE_URL_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.url = action.url;
                    }
                    return Object.assign({}, widget);
                })
            };
        case WIDGET_NAME_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.name = action.name;
                    }
                    return Object.assign({}, widget);
                })
            };
        case PARAGRAPH_TEXT_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.text = action.text;
                    }
                    return Object.assign({}, widget);
                })
            };
        case MOVE_DOWN:
            let index1 = state.widgets.indexOf(action.widget);
            state.widgets.move(index1, index1+1);
            return {widgets: state.widgets.splice(0)};
        case MOVE_UP:
            let index2 = state.widgets.indexOf(action.widget);
            state.widgets.move(index2, index2-1);
            return {widgets: state.widgets.splice(0)};
        case PREVIEW:
            return {
                widgets: state.widgets,
                preview: !state.preview
            };
        case HEADING_TEXT_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.text = action.text;
                    }
                    return Object.assign({}, widget);
                })
            };
        case HEADING_SIZE_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.size = action.size;
                    }
                    return Object.assign({}, widget);
                })
            };
        case SELECT_WIDGET_TYPE:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.widgetType = action.widgetType
                    }
                    return Object.assign({}, widget);
                })
            };
        case SAVE:
            fetch('http://localhost:8080/api/lesson/'+action.lessonId+'/widget/save', {
                method: 'post',
                body: JSON.stringify(state.widgets),
                headers: {
                    'content-type': 'application/json'
                }
            });
            return state;
        case FIND_ALL_WIDGETS:
            let newState = Object.assign({}, state);
            newState.widgets = action.widgets;
            return newState;
        case DELETE_WIDGET:
            return {
                widgets: state.widgets.filter(widget => (
                    widget.id !== action.id
                ))
            };
        case ADD_WIDGET:
            return {
                widgets: [
                    ...state.widgets,
                    {id: state.widgets.length+1,
                        text: 'New Next',
                        widgetType: 'Paragraph',
                        name: 'New Widget'
                    }
                ]
            };
        default:
            return state
    }
};