import React from "react";
import {connect} from "react-redux";
import * as actions from "../actions";

const List = ({widget, preview, listTypeChanged, listItemsChanged, widgetNameChanged}) => {
    let selectElem;
    let inputElem;
    let nameElem;
    let id = 0;
    return (
        <div>
            <div hidden={preview}>
                <div className="form-group row">
                    <textarea className="form-control"
                              placeholder="Enter one item per line"
                           value={widget.listItems}
                           onChange={() =>
                               listItemsChanged(widget.id, inputElem.value)}
                           ref={node => inputElem = node}/>
                </div>
                <div className="form-group row">
                    <select className="form-control"
                            value={widget.listType}
                            onChange={() =>
                                listTypeChanged(widget.id, selectElem.value)}
                            ref={node => selectElem = node}>
                        <option>Unordered List</option>
                        <option>Ordered List</option>
                    </select>
                </div>
                <div className="form-group row">
                    <input className="form-control"
                           placeholder="Widget name"
                           value={widget.name}
                           onChange={() =>
                               widgetNameChanged(widget.id, nameElem.value)}
                           ref={node => nameElem = node}/>
                </div>
            </div>
            <h3>Preview</h3>
            {widget.listType === 'Ordered List' && widget.listItems != null &&
                <ul>{widget.listItems.split('\n').map(listItem =>
                    (<li key={++id}>{listItem}</li>))}</ul>}
            {widget.listType === 'Unordered List' && widget.listItems != null &&
                <ol>{widget.listItems.split('\n').map(listItem =>
                    (<li key={++id}>{listItem}</li>))}</ol>}
        </div>
    )
};
const stateToPropsMapper = (state) => ({
    preview: state.preview
});
const dispatchToPropsMapper = (dispatch) => ({
    widgetNameChanged: (widgetId, newName) =>
        actions.widgetNameChanged(dispatch, widgetId, newName),
    listTypeChanged: (widgetId, listType) =>
        actions.listTypeChanged(dispatch, widgetId, listType),
    listItemsChanged: (widgetId, newItems) =>
        actions.listItemsChanged(dispatch, widgetId, newItems)
});
const ListContainer = connect(stateToPropsMapper,
    dispatchToPropsMapper)(List);

export default ListContainer;