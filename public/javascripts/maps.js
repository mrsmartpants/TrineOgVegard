var initMaps=function(n){var e={lat:58.1894,lng:8.1006},t={lat:58.228283,lng:8.121387},o={lat:58.144552,lng:7.992945},i=new google.maps.Map(document.getElementById("gmap"),{center:e,zoom:11});if(n){var a={location:t,placeId:"ChIJc3II1cEGOEYRpV2tYBe4ZqE"},r={source:"Trine & Vegard",webUrl:"http://trineogvegard.com"},l=new google.maps.Marker({place:a,attribution:r,map:i,title:"Tveit kirke"}),p=new google.maps.InfoWindow({content:'<p><strong>Vielse: Tveit Kirke</strong</p><p>Kl. 13:00 <br/><a href="#church">Mer info</a></p>'});l.addListener("click",function(){p.open(i,l)})}var c={location:o,placeId:"ChIJxcj6KV4COEYRzKoygNAgmMI"},g=new google.maps.Marker({place:c,attribution:r,map:i,title:"Clarion Ernst Hotel"}),s=new google.maps.InfoWindow({content:'<p><strong>Fest: Clarion Ernst Hotel</strong></p><p><a href="#hotel">Mer info</a></p>'});g.addListener("click",function(){s.open(i,g)})},initBoth=function(){initMaps(!0)},initMap=function(){initMaps(!1)};
//# sourceMappingURL=maps/maps.js.map