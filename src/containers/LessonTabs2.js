import React from 'react';
import LessonService from '../services/LessonService';
import LessonTabItem from '../components/LessonTabItem';
import LessonEditor from './LessonEditor';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import WidgetListContainer from './widgetList';

export default class LessonTabs
    extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId:'',
            moduleId:'',
            lesson: {title: 'New Lesson'},
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
        // console.log("delete");
        // console.log(this.state.selectedId);
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
        // console.log(this.state.lesson);
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
        this.setState({
            lesson: {title: event.target.value}});
        // console.log(this.state.selectedId);
    }
    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }
    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }
    componentDidMount() {
        this.setModuleId(this.props.moduleId);
        this.setCourseId(this.props.courseId);
    }
    componentWillReceiveProps(newProps) {
        this.setModuleId(newProps.moduleId);
        this.setCourseId(newProps.courseId);
        this.findAllLessonsForModule(newProps.moduleId);
    }
    renderLessonTabs() {
        let lessons = this.state.lessons.map((lesson) => {
            return <LessonTabItem lesson={lesson} key={lesson.id}
                                  courseId={this.state.courseId}
                                  moduleId={this.state.moduleId}
                                  click={this.selectLesson}
                                  class={this.state.selectedId===lesson.id?
                                      "nav-link active":"nav-link"}/>
        });
        return lessons;
    }
    render() {
        return (
            <Router>
                <div>
                    <h4 className="text-warning">Lessons</h4>
                    <div className="row">
                        <div className="col-8">
                            <input className="form-control"
                                   placeholder="New Lesson"
                                   onChange={this.titleChange}/>
                        </div>
                        <div className="col-4">
                            <button className="btn btn-block btn-info"
                                    onClick={this.createLesson}>
                            <i className="fa fa-plus"></i></button>
                        </div>
                    </div>
                    <br/>
                    <ul className="nav nav-tabs">
                        {this.renderLessonTabs()}
                        <li className="nav-item">
                            <button className="btn btn-info"
                                    onClick={() => {
                                        if(window.confirm('Delete this lesson?'))
                                        {this.deleteLesson()}}}>
                            <i className="fa fa-times"></i></button>
                        </li>
                    </ul>
                    <br/>
                    <div>
                        <Route path="/course/:courseId/module/:moduleId/lesson/:lessonId"
                                component={WidgetListContainer}>
                        </Route>
                    </div>
                </div>
            </Router>
        )
    }
}