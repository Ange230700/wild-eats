function initMap() {
  const selector = document.getElementById("map");
  const center = { lat: 47.211385, lng: -1.547551 };
  const options = {
    center: center,
    zoom: 19,
  };

  const map = new google.maps.Map(selector, options);

  const marker = new google.maps.Marker({
    position: center,
    map: map,
    title: 'Wild Code School',
  });


  const styles = {
    default: [],
    hide: [
    //   {
    //     featureType: "all",
    //     elementType: "all",
    //     stylers: [{ visibility: "off" }],
    //   },

      {
        featureType: "poi.business",
        elementType: "all",
        stylers: [{ visibility: "on" }],
      },



      
    //   {
    //     featureType: "transit",
    //     elementType: "labels.icon",
    //     stylers: [{ visibility: "off" }],
    //   },
    ],
  };

  map.setOptions({ styles: styles["hide"] });


}