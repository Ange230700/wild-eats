function initMap() {
  const selector = document.getElementById("map");
  const center = { lat: 47.21133, lng: -1.547447 };
  const options = {
    center: center,
    zoom: 19,
  };

  const map = new google.maps.Map(selector, options);

  const imageWcs = "./../images/wcsiconmarker.png";
  new google.maps.Marker({
    position: center,
    map: map,
    icon: imageWcs,
    title: "Wild Code School",
  });

  const styles = {
    default: [],
    hide: [
      {
        featureType: "poi.business",
        elementType: "all",
        stylers: [{ visibility: "on" }],
      },

      {
        featureType: "poi.school",
        elementType: "all",
        stylers: [{ visibility: "on" }],
      },
    ],
  };

  map.setOptions({ styles: styles["hide"] });
}
