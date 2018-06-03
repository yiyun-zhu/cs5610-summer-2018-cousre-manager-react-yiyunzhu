import React from 'react';
import CourseRow from '../components/CourseRow';
import CourseService from '../services/CourseService'

class CourseList extends React.Component {
    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.state = {courses: []};
    }

    componentDidMount() {
        this.courseService.findAllCourses()
            .then((courses) => {
                this.setState({courses: courses});
            });
    }
    renderCourseRow() {
        let rows = this.state.courses.map(function(course) {
            return <CourseRow course={course} key={course.id}/>
        });
        return rows;
    }
    render() {
        return (
            <div>
                <h2>Course List</h2>
                <table className="table">
                    <thead>
                        <tr><th>Title</th><th>Owned by</th><th>Last modified</th></tr>
                    </thead>
                    <tbody>
                        {this.renderCourseRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CourseList;