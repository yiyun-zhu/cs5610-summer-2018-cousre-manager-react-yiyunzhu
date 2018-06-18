import React from 'react';
import {Link} from 'react-router-dom';

class CourseRow extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <tr>
                <td><Link to=
                          {`/course/${this.props.course.id}`}>
                        {this.props.course.title}</Link></td>
                <td>owner</td>
                <td>{this.props.course.modified}</td>
                <td>
                    <button className="btn btn-danger"
                            onClick={() => {
                                if(window.confirm('Delete this course?'))
                                {this.props.deleteFunction(this.props.course.id)}}}>
                        <i className="fa fa-times"></i>
                    </button>
                </td>
            </tr>
        );
    }
}

export default CourseRow;