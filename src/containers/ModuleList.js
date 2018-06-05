import React from 'react';
import ModuleService from '../services/ModuleService';
import ModuleListItem from '../components/ModuleListItem2';
import ModuleEditor from './ModuleEditor';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class ModuleList extends React.Component {
    constructor(props) {
        super(props);
        this.state =
            {courseId:'',
            module: {title: ''},
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
        console.log(moduleId);
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
    setCourseId(courseId) {
        this.setState({courseId: courseId})
    }
    componentDidMount() {
        this.setCourseId
        (this.props.courseId);
    }
    componentWillReceiveProps(newProps) {
        this.setCourseId
        (newProps.courseId);
        this.findAllModulesForCourse
        (newProps.courseId);
    }
    createModule() {
        console.log(this.state);
        this.moduleService
            .createModule
                (this.state.courseId, this.state.module)
            .then(() => {
                this.findAllModulesForCourse
                    (this.state.courseId)
            })
    }
    setModuleTitle(event) {
        this.setState({module: {title: event.target.value}})
    }
    renderModules() {
        let modules = this.state.modules.map((module) => {
            if (this.state.selectId === module.id) {
                return <ModuleListItem module={module} key={module.id}
                                       courseId={this.state.courseId}
                                       delete={this.deleteModule}
                                       click={this.selectModule}
                                        class={"list-group-item active"}/>
            } else {
                return <ModuleListItem module={module} key={module.id}
                                       courseId={this.state.courseId}
                                       delete={this.deleteModule}
                                       click={this.selectModule}
                                       class={"list-group-item"}/>
            }
        });
        return modules
    }
    render() {
        return (
            <Router>
                <div className="row">
                    <div className="col-4">
                        <h4>Module List {this.state.courseId}</h4>
                        <br/>
                        <input className="form-control"
                               placeholder="New Module"
                                value={this.state.module.title}
                                onChange={this.setModuleTitle}/>
                        <button className="btn btn-primary btn-block"
                                onClick={this.createModule}>
                            <i className="fa fa-plus"></i></button>
                        <ul className="list-group">
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