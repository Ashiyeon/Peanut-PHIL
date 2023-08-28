$(function() {

    $.ajax({
        type: "GET",
        url: cors + "https://8f8bf4c5-f0f3-4ea7-8bd5-b7f96ada0d95.mock.pstmn.io/getMemos",
        dataType: 'json',
        success: res => {
            console.log(res)

        }
    });
});