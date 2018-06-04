const MODULE_API_URL =
    'http://localhost:8080/api/course/CID/module';

let _singleton = Symbol();

class ModuleService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new ModuleService(_singleton);
        return this[_singleton]
    }
    // findAllCourses() {
    //     return fetch(COURSE_API_URL)
    //         .then(function(response){
    //             return response.json();
    //         });
    // }
    createModule(courseId, module){
        return fetch(MODULE_API_URL.replace('CID', courseId), {
            body: JSON.stringify(module),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(function(response) {
            return response.json();
        })
    }
    // deleteCourse(courseId) {
    //     return fetch(COURSE_API_URL + '/' + courseId, {
    //         method: 'DELETE'
    //     });
    // }
}
export default ModuleService;