import React from 'react';
import LessonService from '../services/LessonService';
import LessonTabItem from '../components/LessonTabItem'

export default class LessonTabs
    extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId:'',
            moduleId:'',
            lesson: {title: ''},
            lessons: [],
            selectedId:''
        };
        this.setModuleId = this.setModuleId.bind(this);
        this.setCourseId = this.setCourseId.bind(this);
        this.createLesson = this.createLesson.bind(this);
        this.titleChange = this.titleChange.bind(this);
        this.lessonService = LessonService.instance;
        this.selectLesson = this.selectLesson.bind(this);
        this.deleteLesson = this.deleteLesson.bind(this);
    }
    deleteLesson() {
        console.log(this.state.selectedId);
        this.lessonService.deleteLesson(this.state.selectedId)
            .then(() => {
                this.findAllLessonsForModule
                (this.state.moduleId)
            })
    }
    selectLesson(lessonId) {
        this.setState({selectedId: lessonId});
    }
    findAllLessonsForModule(moduleId) {
        this.lessonService.findAllLessonsForModule(moduleId)
            .then((lessons) => {
                this.setState({lessons: lessons})
            });
    }
    createLesson() {
        console.log(this.state.lesson);
        this.lessonService.createLesson
            (this.state.courseId,
                this.state.moduleId,
                this.state.lesson)
            .then(() => {
                this.findAllLessonsForModule
                (this.state.moduleId)
            });
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
        this.findAllLessonsForModule(newProps.moduleId);
    }
    renderLessonTabs() {
        let lessons = this.state.lessons.map((lesson) => {
            if (this.state.selectedId === lesson.id) {
                return <LessonTabItem lesson={lesson} key={lesson.id}
                                      click={this.selectLesson}
                                        class="nav-link active"/>
            } else {
                return <LessonTabItem lesson={lesson} key={lesson.id}
                                      click={this.selectLesson}
                                      class="nav-link"/>
            }

        });
        return (
            lessons
        );
    }
    render() {
        return (
            <div>
                <h5>module: {this.state.moduleId}</h5>
                <div className="row">
                    <div className="col-8">
                        <input className="form-control"
                               placeholder="New Lesson"
                               onChange={this.titleChange}/>
                    </div>
                    <div className="col-4">
                        <span className={"btn btn-primary"} onClick={this.createLesson}>
                        <i className="fa fa-plus"></i></span>
                    </div>
                </div>
                <ul className="nav nav-tabs">
                    {this.renderLessonTabs()}
                    <li className="nav-item">
                        <button className="btn btn-primary"
                                onClick={this.deleteLesson}>
                        <i className="fa fa-times"></i></button>
                    </li>
                </ul>
            </div>
        )
    }
}