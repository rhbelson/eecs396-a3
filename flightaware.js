function getInFlightInfo(flightIdent){
    $.post("http://wifly.aqualab.cs.northwestern.edu/php/get_inflightinfo.php",
            {
                ident: flightIdent
            },
            function(data, status){
            	console.log(data);
            });
}


window.addEventListener('load', function() {
    getInFlightInfo("UA2000");
})
