import React from 'react';
import CourseRow from '../components/CourseRow';
import CourseService from '../services/CourseService'

class CourseList extends React.Component {
    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.state = {
            // course: {},
            courses: []
        };
        this.titleChange = this.titleChange.bind(this);
        this.createCourse = this.createCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
    }
    componentDidMount() {
        this.findAllCourses();
    }
    findAllCourses() {
        this.courseService.findAllCourses()
            .then((courses) => {
                this.setState({courses: courses});
            });
    }
    titleChange(event) {
        this.setState({
            course: {title: event.target.value}
        });
    }
    createCourse() {
        console.log(this.state.course);
        this.courseService
            .createCourse(this.state.course)
            .then(() => {
                this.findAllCourses();
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
                        <tr>
                            <th>Title</th>
                            <th>Owned by</th>
                            <th>Last modified</th>
                            <th>&nbsp;</th></tr>
                        <tr>
                            <th><input className="form-control" id="titleFld" placeholder="CS101"
                                        onChange={this.titleChange}/></th>
                            <th>&nbsp;</th>
                            <th>&nbsp;</th>
                            <th><button className="btn btn-primary"
                                        onClick={this.createCourse}>Add</button></th>
                        </tr>
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