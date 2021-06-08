// mars rover photos from the 3 different rovers
let curiosity = "https://api.nasa.gov/mars-photos/api/v1/manifests/Curiosity/?api_key=RZGwSzKbOaZadLPNj2btegTPGivRWJI8IKnLnUsd"
let spirit = "https://api.nasa.gov/mars-photos/api/v1/manifests/spirit/?api_key=RZGwSzKbOaZadLPNj2btegTPGivRWJI8IKnLnUsd"
let opportunity = "https://api.nasa.gov/mars-photos/api/v1/manifests/opportunity/?api_key=RZGwSzKbOaZadLPNj2btegTPGivRWJI8IKnLnUsd"

// insight weather 
let insight = "https://api.nasa.gov/insight_weather/?api_key=" + "RZGwSzKbOaZadLPNj2btegTPGivRWJI8IKnLnUsd" + "&feedtype=json&ver=1.0"

fetch(curiosity).then(function (response) {
    if (response.ok) {
      response.json()
        .then(function (data) {
          console.log(data)
        });
    } else {
      alert("Error: " + response.statusText);
    }
  });

  fetch(spirit).then(function (response) {
    if (response.ok) {
      response.json()
        .then(function (data) {
          console.log(data)
        });
    } else {
      alert("Error: " + response.statusText);
    }
  });

  fetch(opportunity).then(function (response) {
    if (response.ok) {
      response.json()
        .then(function (data) {
          console.log(data)
        });
    } else {
      alert("Error: " + response.statusText);
    }
  });

  fetch(insight).then(function (response) {
    if (response.ok) {
      response.json()
        .then(function (data) {
          console.log(data)
        });
    } else {
      alert("Error: " + response.statusText);
    }
  });