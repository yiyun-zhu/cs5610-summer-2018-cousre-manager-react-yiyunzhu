import React from 'react';
import CourseList from './CourseList';
import CourseEditor from './CourseEditor';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

class CourseManager extends React.Component {
    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <h1>Course Manager</h1>
                    <Route path="/course/list"
                           component={CourseList}>
                    </Route>
                    <Route path="/course/:courseId/edit"
                            component={CourseEditor}>
                    </Route>
                </div>
            </Router>
        );
    }
}

export default CourseManager;