// jquery wrapper
$(function(){

    var genericError = function(){
        debugger;
    };

    var getCustomersSuccess = function(customers){
        // console.table(customers);
        var html = [];
        $.each(customers, function(idx, customer){
            html.push(`<tr>
                <td>${customer.id}</td>
			    <td>${customer.name}</td>
			    <td>${customer.email}</td>
			    <td>${customer.phone}</td>
			    <td>${customer.country}</td>
		    </tr>`)
        }); 
        // console.log(html.join(""));
        $("table").append(html.join(""));
        $("tr").eq(1).slideUp(200);
        $("table").zebrado("green", "yellow").css("border", "1px solid black");
    };

    $.ajax({
        url:"http://www.mocky.io/v2/5c64a4d63300005500b9992b",
        method: "get",
        dataType: "jsonp",
        error: genericError,
        success: getCustomersSuccess
    });
});