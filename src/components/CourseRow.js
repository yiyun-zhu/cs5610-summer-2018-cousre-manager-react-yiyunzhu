import React from 'react';

class CourseRow extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <tr>
                <td>course title</td>
                <td>owner</td>
                <td>00-00-00</td>
            </tr>
        );
    }
}

export default CourseRow;