import {connect} from 'react-redux';
import React from 'react';
import * as actions from "../actions";
import HeadingContainer from './heading'
import ParagraphContainer from './paragraph'
import ImageContainer from './image'
import LinkContainer from './link'

const List = () => (
    <h2>List</h2>
);

const Widget = ({widget, preview, deleteWidget, selectWidgetType, moveUp, moveDown}) => {
    let selectElement;
    return (
        <li className="list-group-item">
            <div hidden={preview}>
                {widget.id} {widget.widgetType}
                <div className="float-right">
                    <button className="btn-warning"
                            onClick={() => moveUp(widget)}>
                        <i className="fa fa-arrow-up"/></button>
                    <button className="btn-warning"
                            onClick={() => moveDown(widget)}>
                        <i className="fa fa-arrow-down"/></button>
                    <select value={widget.widgetType}
                            onChange={() =>
                            selectWidgetType(widget.id, selectElement.value)}
                        ref={node => selectElement = node}>
                        <option>Heading</option>
                        <option>Paragraph</option>
                        <option>List</option>
                        <option>Image</option>
                    </select>
                    <button className="btn-danger"
                            onClick={() => deleteWidget(widget.id)}>
                        <i className="fa fa-times"></i>
                    </button>
                </div>
            </div>
            <br/>
            <div>
                {widget.widgetType === 'Paragraph' && <ParagraphContainer widget={widget}/>}
                {widget.widgetType === 'Heading' && <HeadingContainer widget={widget}/>}
                {widget.widgetType === 'Image' && <ImageContainer widget={widget}/>}
                {widget.widgetType === 'List' && <List/>}
                {widget.widgetType === 'Link' && <LinkContainer widget={widget}/>}
            </div>
        </li>
    )
};
const dispatchToPropsMapperForWidget = (dispatch) => ({
    deleteWidget: (widgetId) =>
        actions.deleteWidget(dispatch, widgetId),
    selectWidgetType: (widgetId, widgetType) =>
        actions.selectWidgetType(dispatch, widgetId, widgetType),
    moveUp: (widget) => actions.moveUp(dispatch, widget),
    moveDown: (widget) => actions.moveDown(dispatch, widget)
});
const WidgetContainer = connect(state => ({
        preview: state.preview}),
    dispatchToPropsMapperForWidget)(Widget);
export default WidgetContainer;