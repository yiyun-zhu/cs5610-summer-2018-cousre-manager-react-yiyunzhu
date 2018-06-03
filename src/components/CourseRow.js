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
            </tr>
        );
    }
}

export default CourseRow;