export default {
    getExample(ctx){
        console.log(ctx);
        var result = ctx.$http.get('/api/example');
        return result;
    }
}