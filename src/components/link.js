import React from "react";
import {connect} from "react-redux";
import * as actions from "../actions";

const Link = ({widget, preview}) => (
    <h2>Link</h2>
);

const stateToPropsMapper = (state) => ({
    preview: state.preview
});
const dispatchToPropsMapper = (dispatch) => ({
    imageUrlChanged: (widgetId, newUrl) =>
        actions.imageUrlChanged(dispatch, widgetId, newUrl),
    widgetNameChanged: (widgetId, newName) =>
        actions.widgetNameChanged(dispatch, widgetId, newName)
});
const LinkContainer = connect(stateToPropsMapper,
    dispatchToPropsMapper)(Link);

export default LinkContainer;