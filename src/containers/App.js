import React from 'react';
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';
import {widgetReducer} from '../reducers/widgetReducer';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            moduleId: '',
            lessonId:''
        };
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.setLessonId = this.setLessonId.bind(this);

    }
    setCourseId(courseId) {
        this.setState({courseId: courseId})
    }
    setModuleId(moduleId) {
        this.setState({moduleId: moduleId})
    }
    setLessonId(lessonId) {
        this.setState({lessonId: lessonId})
    }
    componentDidMount() {
        this.setCourseId(this.props.match.params.courseId);
        this.setModuleId(this.props.match.params.moduleId);
        this.setLessonId(this.props.match.params.lessonId);
    }
    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.match.params.courseId);
        this.setModuleId(newProps.match.params.moduleId);
        this.setLessonId(newProps.match.params.lessonId);
    }

    render() {
        return (
            <Provider store={store}>
                <WidgetListContainer lessonId={this.state.lessonId}/>
            </Provider>
        )
    }
}
export default App;