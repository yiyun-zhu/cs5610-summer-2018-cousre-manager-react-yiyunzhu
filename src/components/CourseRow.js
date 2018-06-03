import React from 'react';

class CourseRow extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <tr>
                <td>{this.props.course.title}</td>
                <td>{this.props.course.owner}</td>
                <td>{this.props.course.lastModified}</td>
            </tr>
        );
    }
}

export default CourseRow;