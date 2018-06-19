import React from "react";
import {connect} from "react-redux";
import * as actions from "../actions";

const Link = ({widget, preview, linkUrlChanged, linkTextChanged, widgetNameChanged}) => {
    let inputElem1;
    let inputElem2;
    let nameElem;
    return(
        <div>
            <div hidden={preview}>
                <div className="form-group row">
                    <input className="form-control"
                           placeholder="Link URL"
                           value={widget.href}
                           onChange={() =>
                               linkUrlChanged(widget.id, inputElem1.value)}
                           ref={node => inputElem1 = node}/>
                </div>
                <div className="form-group row">
                    <input className="form-control"
                           placeholder="Link text"
                           value={widget.text}
                           onChange={() =>
                               linkTextChanged(widget.id, inputElem2.value)}
                           ref={node => inputElem2 = node}/>
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
            {widget.href !== null && <a href={widget.href}>{widget.text}</a>}
        </div>
    )
};

const stateToPropsMapper = (state) => ({
    preview: state.preview
});
const dispatchToPropsMapper = (dispatch) => ({
    linkUrlChanged: (widgetId, newUrl) =>
        actions.linkUrlChanged(dispatch, widgetId, newUrl),
    linkTextChanged: (widgetId, newText) =>
        actions.linkTextChanged(dispatch, widgetId, newText),
    widgetNameChanged: (widgetId, newName) =>
        actions.widgetNameChanged(dispatch, widgetId, newName)
});
const LinkContainer = connect(stateToPropsMapper,
    dispatchToPropsMapper)(Link);

export default LinkContainer;