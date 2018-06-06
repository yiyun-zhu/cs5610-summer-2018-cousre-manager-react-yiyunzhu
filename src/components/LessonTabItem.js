import React from 'react';
import {Link} from 'react-router-dom';

export default class LessonTabItem
    extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <li className="nav-item"
                    onClick={() => {
                        this.props.click(this.props.lesson.id)}}>
                    <Link className={this.props.class}
                            to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lesson.id}`}>
                        {this.props.lesson.title}</Link>
                </li>
            </div>
        )
    }
}