import React from 'react';

class CourseRow extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <tr>
                <td>{this.props.course.title}</td>
                <td>owner</td>
                <td>{this.props.course.modified}</td>
                <td><button className="btn btn-danger"
                            onClick={() =>
                                {this.props.deleteFunction(this.props.course.id)}
                            }
                            >Delete
                </button></td>
            </tr>
        );
    }
}

export default CourseRow;
// onClick={this.props.delete}