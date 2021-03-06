function initMap() {
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 11,
            center: {lat: 53.3498, lng: -6.2603}
        });

        const labels = "123456";

        const markers = locations.map((location,i) => {
            return new google.maps.Marker({
                position: location,
                label: labels[i % labels.length],
            });
        });

        new MarkerClusterer(map, markers, {
        imagePath:"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",});
        }
         const locations = [
            { lat: 53.3559, lng: -6.3298 },
            { lat: 53.3351, lng: -6.2610 },
            { lat: 53.2694, lng: -6.1056 },
            { lat: 53.2519, lng: -6.3303 },
            { lat: 53.3396, lng: -6.2604 },
            { lat: 53.2153, lng: -6.1049 }
        ];
   