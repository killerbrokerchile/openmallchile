function gMapInitialize() {
    var gMapLatlng = new google.maps.LatLng(companyLat, companyLong);

    var gMapOptions = {
        center: new google.maps.LatLng(54.145921, -0.799813),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map"), gMapOptions);

    var marker = new google.maps.Marker({
        position: gMapLatlng,
        map: map,
        title: companyName
    });    

    var contentString = '<div id="content">'+
    '<h2>' + companyName + '</h2>'+
    '<div id="bodyContent">'+ companyAddress + '<BR/>' +
    '<b>TEL : ' + companyTel + ' FAX : ' + companyFax + '<BR/>' +
    'EMAIL : <a href="mailto:' + companyEmail +'">' + companyEmail + '</a></b>' +
    '</div></div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });

    infowindow.open(map,marker);
}