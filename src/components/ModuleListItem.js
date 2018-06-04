import React from 'react';
import {Link} from 'react-router-dom';

class ModuleListItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li className="list-group-item">
                {this.props.module.title}
                <button className="float-right" onClick={() =>
                    {this.props.delete(this.props.module.id)}}>
                    Delete</button>
            </li>
        );
    }
}

export default ModuleListItem;