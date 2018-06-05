import React from 'react';

export default class LessonTabItem
    extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <li className="nav-item">
                    <a className={this.props.class} href="#"
                       onClick={() => {
                           this.props.click(this.props.lesson.id)
                       }}>
                   {this.props.lesson.title}</a>
                </li>
            </div>
        )
    }
}