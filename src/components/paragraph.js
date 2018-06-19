import React from "react";
import {connect} from "react-redux";
import * as actions from "../actions";

const Paragraph = ({widget, preview, paragraphTextChanged, widgetNameChanged}) => {
    let inputElem;
    let nameElem;
    return(
        <div>
            <div hidden={preview}>
                <div className="form-group row">
                    <textarea className="form-control"
                              placeholder="Paragraph text"
                              value={widget.text}
                              onChange={() =>
                                  paragraphTextChanged(widget.id, inputElem.value)}
                              ref={node => inputElem = node}/>
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
            {widget.text}
        </div>
    )
};
const stateToPropsMapper = (state) => ({
    preview: state.preview
});
const dispatchToPropsMapper = (dispatch) => ({
    paragraphTextChanged: (widgetId, newText) =>
        actions.paragraphTextChanged(dispatch, widgetId, newText),
    widgetNameChanged: (widgetId, newName) =>
        actions.widgetNameChanged(dispatch, widgetId, newName)
});
const ParagraphContainer = connect(stateToPropsMapper,
    dispatchToPropsMapper)(Paragraph);

export default ParagraphContainer;