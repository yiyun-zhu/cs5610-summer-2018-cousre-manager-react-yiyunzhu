import React from "react";
import {connect} from "react-redux";
import * as actions from "../actions";

const Heading = ({widget, preview, headingSizeChanged, headingTextChanged, widgetNameChanged}) => {
    let selectElem;
    let inputElem;
    let nameElem;
    return (
        <div>
            <div hidden={preview}>
                {/*<h2>Heading {widget.size}</h2>*/}
                <div className="form-group row">
                    <input className="form-control"
                        value={widget.text}
                           onChange={() =>
                               headingTextChanged(widget.id, inputElem.value)}
                           ref={node => inputElem = node}/>
                </div>
                <div className="form-group row">
                    <select className="form-control"
                        value={widget.size}
                            onChange={() =>
                                headingSizeChanged(widget.id, selectElem.value)}
                            ref={node => selectElem = node}>
                        <option value='1'>Heading 1</option>
                        <option value='2'>Heading 2</option>
                        <option value='3'>Heading 3</option>
                    </select>
                </div>
                <div className="form-group row">
                    <input className="form-control"
                           value={widget.name}
                           onChange={() =>
                               widgetNameChanged(widget.id, nameElem.value)}
                           ref={node => nameElem = node}/>
                </div>
            </div>
            <h3>Preview</h3>
            {widget.size == 1 && <h1>{widget.text}</h1>}
            {widget.size == 2 && <h2>{widget.text}</h2>}
            {widget.size == 3 && <h3>{widget.text}</h3>}
        </div>
    )
};
const stateToPropsMapper = (state) => ({
    preview: state.preview
});
const dispatchToPropsMapper = (dispatch) => ({
    widgetNameChanged: (widgetId, newName) =>
        actions.widgetNameChanged(dispatch, widgetId, newName),
    headingSizeChanged: (widgetId, newSize) =>
        actions.headingSizeChanged(dispatch, widgetId, newSize),
    headingTextChanged: (widgetId, newText) =>
        actions.headingTextChanged(dispatch, widgetId, newText)
});
const HeadingContainer = connect(stateToPropsMapper,
    dispatchToPropsMapper)(Heading);

export default HeadingContainer;