// jquery wrapper
$(function(){
    console.log("start....");

    // ações
    var onlyNumbers = function(e){
        // console.log(e.target.value);
        this.value = this.value.replace(/\D/g, "");
    };

    var validateEntry = function(e){
        // console.log(this.value);
        var cep = this.value;
        if(cep.length < 8){
            $(this).addClass("error").focus();
        } else {
            $(this).removeClass("error");
            getAddress(cep);
        }
    };

    var getAddress = function(cep){
        var endpoint = `https://viacep.com.br/ws/${cep}/json`;

        $.ajax({
            url: endpoint,
            method: "get",
            dataType: "json",
            error: genericError,
            success: getAddressSuccess
        });
    };

    var genericError = function(){
        $("#msg").empty();
        $("<a>").text("Serviço Indisponível!").addClass("error").appendTo("#msg");
    };

    var getAddressSuccess = function(address){
        // console.log(address);
        $("#logradouro").val(address.logradouro);
        $("#bairro").val(address.bairro);
        $("#cidade").val(address.localidade);
        $("#estado").val(address.uf);
    }

    // eventos
    $("#cep")
        .on("input", onlyNumbers)
        .on("focusout", validateEntry);
});