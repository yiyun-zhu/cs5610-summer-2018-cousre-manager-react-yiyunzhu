import React from 'react';
import LessonService from '../services/LessonService'

export default class LessonTabs
    extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId:'',
            moduleId:'',
            lesson: {title: ''},
            lessons: []
        }
        this.setModuleId = this.setModuleId.bind(this);
        this.setCourseId = this.setCourseId.bind(this);
        this.createLesson = this.createLesson.bind(this);
        this.titleChange = this.titleChange.bind(this);
        this.lessonService = LessonService.instance;
    }
    createLesson() {
        console.log(this.state.lesson);
        this.lessonService.createLesson
            (this.state.courseId, this.state.moduleId, this.state.lesson);
    }
    titleChange(event) {
        this.setState({lesson: {title: event.target.value}});
    }
    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }
    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }
    componentDidMount() {
        this.setModuleId
        (this.props.moduleId);
        this.setCourseId
        (this.props.courseId);
    }
    componentWillReceiveProps(newProps) {
        this.setModuleId
        (newProps.moduleId);
        this.setCourseId
        (newProps.courseId);
    }
    render() {
        return (
            <div>
                <h5>module: {this.state.moduleId}</h5>
                <input className="form-control"
                        placeholder="New Lesson"
                        onChange={this.titleChange}/>
                <button className="btn btn-primary btn-block"
                        onClick={this.createLesson}>Create</button>
            </div>
        )
    }
}