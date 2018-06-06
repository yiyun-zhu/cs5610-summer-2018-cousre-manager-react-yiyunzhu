const LESSON_API_URL =
    // 'http://localhost:8080/api/course/CID/module/MID/lesson';
    'https://glacial-beach-96186.herokuapp.com/api/course/CID/module/MID/lesson';

const LESSON_API_URL2 =
    // 'http://localhost:8080/api/lesson/LID';
    'https://glacial-beach-96186.herokuapp.com/api/lesson/LID';

let _singleton = Symbol();

class LessonService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new LessonService(_singleton);
        return this[_singleton]
    }
    deleteLesson(lessonId) {
        return fetch(LESSON_API_URL2.replace('LID', lessonId), {
            method: 'DELETE'
        });
    }
    findAllLessonsForModule(moduleId) {
        return fetch('https://glacial-beach-96186.herokuapp.com/api/module/MID/lesson'
                    .replace('MID', moduleId))
            .then(function(response) {
                return response.json();
            })
    }
    createLesson(courseId, moduleId, lesson) {
        return fetch(LESSON_API_URL.replace('MID', moduleId)
                                    .replace('CID', courseId), {
            body: JSON.stringify(lesson),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
    }
}

export default LessonService;