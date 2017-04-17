export default {
    // Ctx is the Vue instance passed as a parameter.
    getExample(ctx){
        console.log(ctx);
        var result = ctx.$http.get('/api/example');
        return result;
    }
}