// Example of adding component to SPA. Now this can be used as <example-component></example-component>
Vue.component('example-component', {
    props:['example', 'example2'],
    template: '<h2> Boilerplate for {{example}} + {{example2}} </h2>'
});

// Define more components for routes.
var Route1 = { template: '<div>Route {{ $route.params.id }}</div>' };
var Route2 = { template: '<div>Route {{ $route.params.id }}</div>' };

// Define routes with id parameters.
var routes = [
    { path: '/foo/:id', component: Route1 },
    { path: '/bar/:id', component: Route2 }
];

// Initialize router.
var router = new VueRouter({
    routes:routes
});

// Initialize our SPA.
var ExampleApp = new Vue({
    el: '#ExampleApp',
    data: {
        header: 'Sane Software'
    },
    created: function () {
        console.log("Vue instance has been created");
    },
    router:router
});


