export default {
    // Ctx is the Vue instance passed as a parameter.
    getExample(ctx){
        var result = ctx.$http.get('/api/example');
        return result;
    },
    postExample(ctx) {
        var payload = {
            "name": "Santero",
            "age": 26,
            "bankBalance": 1.32423235
        };
        var postResult = ctx.$http.post('/api/example', payload);
        return postResult;
    }
}