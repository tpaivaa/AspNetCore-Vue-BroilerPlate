// bundle.config.js 
module.exports = {
    bundle: {
        main: {
            scripts: [
                'wwwroot/js/index.js',
                'wwwroot/js/dataservice.js'
            ],
            styles: 'wwwroot/css/*.css'
        },
        vendor: {
            scripts: ['wwwroot/lib/jquery/dist/jquery.min.js',
            'wwwroot/lib/moment/min/moment.min.js',
            'wwwroot/lib/underscore/underscore.min.js',
            'wwwroot/lib/vue/dist/vue.js',
            'wwwroot/lib/vue-router/dist/vue-router.js']
        }
    }
};