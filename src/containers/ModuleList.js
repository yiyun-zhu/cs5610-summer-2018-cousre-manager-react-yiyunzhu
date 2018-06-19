import React from 'react';
import ModuleService from '../services/ModuleService';
import ModuleListItem from '../components/ModuleListItem2';
import ModuleEditor from './ModuleEditor';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class ModuleList extends React.Component {
    constructor(props) {
        super(props);
        // console.log('constructor');
        // console.log(props);
        this.state =
            {courseId:'',
            module: {title: 'New Model'},
            modules: [],
            selectId:''
        };
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleTitle = this.setModuleTitle.bind(this);
        this.createModule = this.createModule.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
        this.moduleService = ModuleService.instance;
        this.selectModule = this.selectModule.bind(this);
    }
    selectModule(moduleId) {
        this.setState({selectId: moduleId});
    }
    deleteModule(moduleId) {
        // console.log(moduleId);
        this.moduleService.deleteModule(moduleId)
            .then(() => {
                this.findAllModulesForCourse
                (this.state.courseId)
            })
    }
    findAllModulesForCourse(courseId) {
        this.moduleService
            .findAllModulesForCourse(courseId)
            .then((modules) => {
                this.setState({modules: modules})
            })
    }
    createModule() {
        console.log(this.state.module);
        this.moduleService
            .createModule
                (this.state.courseId, this.state.module)
            .then(() => {
                this.findAllModulesForCourse
                    (this.state.courseId)
            })
    }
    setModuleTitle(event) {
        this.setState({
            module: {title: event.target.value}
        })
    }
    setCourseId(courseId) {
        this.setState({courseId: courseId})
    }
    componentDidMount() {
        this.setCourseId(this.props.courseId);
        // console.log(this.props);
        // console.log(this.state.courseId);
        // this.findAllModulesForCourse(this.props.courseId);
    }
    componentWillReceiveProps(newProps) {
        // console.log(this.state.courseId);
        this.setCourseId(newProps.courseId);
        // console.log(newProps);
        // console.log(this.state.courseId);
        this.findAllModulesForCourse(newProps.courseId);
    }
    renderModules() {
        let modules = this.state.modules.map((module) => {
            return <ModuleListItem module={module} key={module.id}
                                    courseId={this.state.courseId}
                                    delete={this.deleteModule} click={this.selectModule}
                                   back={this.state.selectId}
                                    class={this.state.selectId === module.id ?
                                    'list-group-item list-group-item-info':
                                    'list-group-item list-group-item-light'}/>
        });
        return modules;
    }
    render() {
        return (
            <Router>
                <div className="row">
                    <div className="col-4">
                        <h4 className="text-warning">Module List</h4>
                        <input className="form-control"
                               placeholder="New Module"
                                onChange={this.setModuleTitle}/>
                        <button className="btn btn-info btn-block"
                                onClick={this.createModule}>
                            <i className="fa fa-plus"></i></button>
                        <ul className="list-group list-group-flush">
                            {this.renderModules()}</ul>
                    </div>
                    <div className="col-8">
                        <Route path="/course/:courseId/module/:moduleId"
                               component={ModuleEditor}>
                        </Route>
                    </div>
                </div>
            </Router>
        )
    }
}

export default ModuleList;