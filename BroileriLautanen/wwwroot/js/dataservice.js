var dataservice = {

    getObject: function (url, resultCallback) {
        $.ajax({
            url: url,
            method: "GET",
            headers: {
                "Accept": "application/json; charset=utf-8",
                "Content-Type": "application/json; charset=utf-8"
            }
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
            headers: {
                "Accept": "application/json; charset=utf-8",
                "Content-Type": "application/json; charset=utf-8"
            }
        })
        .done(function (data, textStatus, jqXHR) {
                resultCallback(textStatus);
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        });
    }

}