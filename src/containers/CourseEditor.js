import React from 'react';
import ModuleList from './ModuleList'

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
            <h3>Course {this.state.courseId}</h3>
                <div className="row">
                    <div className="col-4">
                        <ModuleList courseId={this.state.courseId}/>
                    </div>
                <div className="col-8">
                   <h4>Lessons</h4>
                </div>
                </div>
            </div>
        );
    }
}

export default CourseEditor;