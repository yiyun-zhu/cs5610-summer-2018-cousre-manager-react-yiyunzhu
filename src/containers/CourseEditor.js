import React from 'react';
import ModuleList from './ModuleList';
import ModuleEditor from './ModuleEditor';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class CourseEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {courseId:''};
        this.selectCourse = this.selectCourse.bind(this);
    }
    componentDidMount() {
        this.selectCourse
            (this.props.match.params.courseId);
    }
    componentWillReceiveProps(newProps) {
        this.selectCourse
            (newProps.match.params.courseId);
    }
    selectCourse(courseId) {
        this.setState({courseId: courseId});
    }
    render() {
        return (
            <div>
                <h3>Course Editor {this.state.courseId}</h3>
                <ModuleList courseId={this.state.courseId}/>

            </div>
        );
    }
}

export default CourseEditor;