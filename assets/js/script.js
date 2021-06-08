// mars rover photos from the 3 different rovers
let curiosity = "https://api.nasa.gov/mars-photos/api/v1/manifests/Curiosity/?api_key=RZGwSzKbOaZadLPNj2btegTPGivRWJI8IKnLnUsd"
let spirit = "https://api.nasa.gov/mars-photos/api/v1/manifests/spirit/?api_key=RZGwSzKbOaZadLPNj2btegTPGivRWJI8IKnLnUsd"
let opportunity = "https://api.nasa.gov/mars-photos/api/v1/manifests/opportunity/?api_key=RZGwSzKbOaZadLPNj2btegTPGivRWJI8IKnLnUsd"

// insight weather --- DOWN --- DO NOT USE THIS
let insight = "https://api.nasa.gov/insight_weather/?api_key=" + "RZGwSzKbOaZadLPNj2btegTPGivRWJI8IKnLnUsd" + "&feedtype=json&ver=1.0"
let insight2 = "https://mars.nasa.gov/rss/api/?feed=weather&category=insight&feedtype=json&ver=1.0"

// mars weather .. from Curiosity
// Mars Science Laboratory
let save = "https://mars.nasa.gov/rss/api/?feed=weather&category=msl&feedtype=json"

fetch(curiosity).then(function (response) {
    if (response.ok) {
      response.json()
        .then(function (data) {
          console.log("curiousity")
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
          console.log("spirit")
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
          console.log("opportunity")
          console.log(data)
        });
    } else {
      alert("Error: " + response.statusText);
    }
  });

  fetch(save).then(function (response) {
    if (response.ok) {
      console.log(response)
      response.json()
        .then(function (data) {
          console.log("save")
          console.log(data)
        });
    } else {
      alert("Error: " + response.statusText);
    }
  });