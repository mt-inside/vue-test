var app = new Vue({
    el: "#app",
    data: {
        message: "Hello, World!"
    }
})
var app2 = new Vue({
    el: "#app2",
    data: {
        message: "Page was loaded on " + new Date().toLocaleString()
    }
})
var app3 = new Vue({
    el: "#app3",
    data: {
        seen: true,
        todos: [
            { text: 'Learn Node' },
            { text: 'Fuck Web Dev' },
        ]
    },
    methods: {
        showhide: function () {
            this.seen = !this.seen;
        }
    }
})
var app4 = new Vue({
    el: '#app4',
    data: {
        message: 'Default vaule'
    }
})

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})
var app5 = new Vue({
    el: "#app5",
    data: {
        todos: [
            { text: 'Learn Node' },
            { text: 'Fuck Web Dev' },
        ]
    },
})
