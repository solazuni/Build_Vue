require('./bootstrap')

import StudentNameList from './components/StudentNameList'
import AddStudent from './components/AddStudent'

new Vue({
    el: '#app',
    components: { StudentNameList, AddStudent },
    data() {
        return {
            title: 'Student List',
        }
    },
    methods: {
        doAdd(name) {
            console.log(name);
        }
    }
})

window.alertify = require('alertifyjs');