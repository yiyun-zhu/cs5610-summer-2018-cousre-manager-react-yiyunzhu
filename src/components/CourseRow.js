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
                <td><button className="btn btn-danger"
                            onClick={() =>
                                {this.props.deleteFunction(this.props.course.id)}
                            }>Delete
                </button></td>
            </tr>
        );
    }
}

export default CourseRow;
// onClick={this.props.delete}