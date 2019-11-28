window.onload = (function(){
	 $("#dias").blur(function(){
		var dataAux = new Date();
		var dataInformada = new Date($('#dataInformada').val());
		console.log($('#dataInformada').val());
		console.log(dataInformada);

		dataAux.setTime(dataInformada.getTime() + $('#dias').val()*24*60*60*1000);

		console.log(dataAux);

		$('#dataResultado').val( ( (parseInt(dataAux.getDate(), 10) < 10)?('0' + dataAux.getDate()):(dataAux.getDate()) + "/" + (((parseInt(dataAux.getMonth(), 10) + 1)<10)?('0' + (parseInt(dataAux.getMonth()) + 1)):(parseInt(dataAux.getMonth()) + 1)) + "/" + dataAux.getFullYear()));
		console.log($('#dataResultado').value);
		
	 });

});
