import React from 'react'
import ModuleService from '../services/ModuleService'

class ModuleList extends React.Component {
    constructor(props) {
        super(props);
        this.state =
            {courseId:'',
            module: {title: ''}
        };
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleTitle = this.setModuleTitle.bind(this)
        this.createModule = this.createModule.bind(this);
        this.moduleService = ModuleService.instance;
    }
    createModule() {
        console.log(this.state);
        this.moduleService.createModule(
            this.state.courseId, this.state.module);

    }
    setModuleTitle(event) {
        this.setState({module: {title: event.target.value}})
    }
    setCourseId(courseId) {
        this.setState({courseId: courseId})
    }
    componentDidMount() {
        this.setCourseId
        (this.props.courseId)
    }
    componentWillReceiveProps(newProps) {
        this.setCourseId
        (newProps.courseId)
    }
    render() {
        return (
            <div>
                <h4>Module List {this.state.courseId}</h4>
                <input className="form-control"
                       placeholder="New Module"
                        value={this.state.module.title}
                        onChange={this.setModuleTitle}/>
                <button className="btn btn-primary btn-block"
                        onClick={this.createModule}>Create</button>
            </div>
        )
    }
}

export default ModuleList;