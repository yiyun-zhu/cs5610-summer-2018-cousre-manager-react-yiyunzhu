import React from "react";
import WidgetContainer from '../components/widget';
import * as actions from "../actions";
import {connect} from "react-redux";


class WidgetList extends React.Component {
    constructor(props) {
        super(props);
        this.props.findAllWidgets(this.props.match.params.lessonId);
    }
    componentWillReceiveProps(newProps) {
        if(newProps.match.params.lessonId !== this.props.match.params.lessonId) {
            this.props.findAllWidgets(newProps.match.params.lessonId);
        }
    }
    render() {
        return (
            <div>
                <h3>Widget List ({this.props.widgets.length})</h3>
                {/*<div className="row">*/}
                <button hidden={this.props.previewMode}
                        onClick={() => this.props.save(this.props.match.params.lessonId)}>Save</button>
                <button onClick={this.props.preview}>Preview</button>
                {/*</div>*/}
                <ul className="list-group">
                    {this.props.widgets.map((widget) => (
                        <WidgetContainer widget={widget}  key={widget.id}/>
                    ))}
                </ul>
                <button onClick={this.props.addWidget}>Add Widget</button>
            </div>
        )
    }
}

const stateToPropertiesMapper = (state) => ({
    widgets: state.widgets,
    previewMode: state.preview
});
const dispatcherToPropsMapper = (dispatch) => ({
    findAllWidgets: (lessonId) => actions.findAllWidgets(dispatch, lessonId),
    addWidget: () => actions.addWidget(dispatch),
    save: (lessonId) => actions.save(dispatch, lessonId),
    preview: () => actions.preview(dispatch)
});

const WidgetListContainer = connect(
    stateToPropertiesMapper,
    dispatcherToPropsMapper)(WidgetList);
export default WidgetListContainer;