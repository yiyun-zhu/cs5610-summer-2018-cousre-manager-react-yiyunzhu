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
    IMAGE_URL_CHANGED,
    LINK_URL_CHANGED,
    LINK_TEXT_CHANGED,
    LIST_TYPE_CHANGED,
    LIST_ITEMS_CHANGED
} from "../constants";

Array.prototype.move = function(from, to) {
    this.splice(to, 0, this.splice(from, 1)[0]);
};

export const widgetReducer = (state = {widgets: [], preview: false}, action) => {

    switch(action.type) {
        case LINK_URL_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.href = action.href;
                    }
                    return Object.assign({}, widget);
                })
            };
        case IMAGE_URL_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.src = action.src;
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
        case LIST_ITEMS_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.listItems = action.listItems;
                    }
                    return Object.assign({}, widget);
                })
            };
        case LINK_TEXT_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.text = action.text;
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
        case HEADING_TEXT_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.text = action.text;
                    }
                    return Object.assign({}, widget);
                })
            };
        case LIST_TYPE_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id) {
                        widget.listType = action.listType;
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
        case SELECT_WIDGET_TYPE:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.widgetType = action.widgetType;
                        if (widget.widgetType !== 'Heading') {
                            widget.size = null;
                        }
                        if (widget.widgetType !== 'List') {
                            widget.listType =null;
                        }
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
                    ...state.widgets, {
                        id: state.widgets.length+1,
                        widgetType: 'Heading',  // default
                        text: '',
                        name: '',
                        src: '',
                        href: '',
                        size: 1,   // default
                        listType: 'Unordered List',  // default
                    }
                ]
            };
        default:
            return state
    }
};