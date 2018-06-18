import React from 'react';
import {Link} from 'react-router-dom';

class ModuleListItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li className={this.props.class}
                onClick={() => {this.props.click(this.props.module.id)}}>
                <Link to={`/course/${this.props.courseId}/module/${this.props.module.id}`}>
                    {this.props.module.title}
                </Link>
                <span className="float-right" onClick={() => {
                    if(window.confirm('Delete this module?'))
                    {this.props.delete(this.props.module.id)}}}>
                    <i className="fa fa-times"></i>
                </span>
            </li>

        );
    }
}

export default ModuleListItem;