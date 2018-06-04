import React from 'react';
import LessonTabs from './LessonTabs2'

export default class ModuleEditor
    extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            moduleId: ''
        };
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
    }
    setCourseId(courseId) {
        this.setState({courseId: courseId})
    }
    setModuleId(moduleId) {
        this.setState({moduleId: moduleId})
    }
    componentDidMount() {
        this.setCourseId(this.props.match.params.courseId);
        this.setModuleId(this.props.match.params.moduleId);
    }
    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.match.params.courseId);
        this.setModuleId(newProps.match.params.moduleId);
    }
    render() {
        return (
            <div>
                <h2>Module Editor</h2>
                <h2>course: {this.state.courseId} module: {this.state.moduleId}</h2>
                <LessonTabs courseId={this.state.courseId} moduleId={this.state.moduleId}/>
            </div>
        )
    }
}
