import React from "react";
import {connect} from "react-redux";
import * as actions from "../actions";

const Image = ({widget, preview, imageUrlChanged, widgetNameChanged}) => {
    let inputElem;
    let nameElem;
    return(
        <div>
            <div hidden={preview}>
                <div className="form-group row">
                    <input className="form-control"
                           placeholder="Image URL"
                          value={widget.src}
                          onChange={() =>
                              imageUrlChanged(widget.id, inputElem.value)}
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
            {widget.src !== null && <img src={widget.src}/>}
        </div>
    )
};

const stateToPropsMapper = (state) => ({
    preview: state.preview
});
const dispatchToPropsMapper = (dispatch) => ({
    imageUrlChanged: (widgetId, newUrl) =>
        actions.imageUrlChanged(dispatch, widgetId, newUrl),
    widgetNameChanged: (widgetId, newName) =>
        actions.widgetNameChanged(dispatch, widgetId, newName)
});
const ImageContainer = connect(stateToPropsMapper,
    dispatchToPropsMapper)(Image);

export default ImageContainer;