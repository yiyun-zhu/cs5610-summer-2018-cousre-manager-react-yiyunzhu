import React from 'react';
import {Link} from 'react-router-dom';

class ModuleListItem extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     id: 0,
        //     className: 'list-group-item list-group-item-info',
        //
        // }
        // this.select = this.select.bind(this);
    }
    // select() {
    //     console.log(this.state.is);
    //     this.setState({id: 10});
    //     this.setState({className: 'list-group-item list-group-item-danger'});
    //     console.log(this.state.is);
    // }
    render() {
        return (
            <li className={this.props.class}>
                <Link to={`/course/${this.props.courseId}/module/${this.props.module.id}/edit`}
                      onClick={() => {this.props.click(this.props.module.id)}}>
                    {/*onClick={this.select}>*/}
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