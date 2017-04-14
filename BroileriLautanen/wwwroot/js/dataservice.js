var dataservice = {

    getObject: function (url, resultCallback) {
        $.ajax({
            url: url,
            method: "GET",
        })
        .done(function (result) {
            resultCallback(result);
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        });
    },
    postObject: function (url, payload, resultCallback) {
        $.ajax({
            url: url,
            data: payload,
            method: "POST",
        })
        .done(function (result) {
            resultCallback(result);
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        });
    }

}