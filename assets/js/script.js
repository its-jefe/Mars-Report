// mars rover photos from the 3 different rovers
let curiosity = "https://api.nasa.gov/mars-photos/api/v1/manifests/Curiosity/?api_key=RZGwSzKbOaZadLPNj2btegTPGivRWJI8IKnLnUsd"
let spirit = "https://api.nasa.gov/mars-photos/api/v1/manifests/spirit/?api_key=RZGwSzKbOaZadLPNj2btegTPGivRWJI8IKnLnUsd"
let opportunity = "https://api.nasa.gov/mars-photos/api/v1/manifests/opportunity/?api_key=RZGwSzKbOaZadLPNj2btegTPGivRWJI8IKnLnUsd"

// mars weather .. from Curiosity
// Mars Science Laboratory
let weather = "https://mars.nasa.gov/rss/api/?feed=weather&category=msl&feedtype=json"

function sendName(something) {
  let apiCall = "https://api.nasa.gov/mars-photos/api/v1/manifests/" + something + "/?api_key=RZGwSzKbOaZadLPNj2btegTPGivRWJI8IKnLnUsd"
  let holder

  fetch(apiCall).then(function (response) {
    if (response.ok) {
      response.json()
        .then(function (data) {
          holder = data;
          newFunction(holder)
        });
    } else {
      alert("Error: " + response.statusText);
    }
  });
}

function newFunction(holder) {
  console.log(holder);
}

fetch(weather).then(function (response) {
  if (response.ok) {
    response.json()
      .then(function (data) {
        console.log("save")
        console.log(data)
        for (var i = 4; i >= 0; i--) {
          let newDivEl = document.createElement("div");
          let dateDivEl = document.createElement("div");
          let photoDivEl = document.createElement("div")
          let tempDivEl = document.createElement("div");

          let date = (data.soles[i].terrestrial_date);
          let sol = "Sol: " + (data.soles[i].sol)
          let high = "High: " + (data.soles[i].max_temp);
          let low = "Low: " + (data.soles[i].min_temp);
          let atmosphere = "'./assets/images/" + (data.soles[i].atmo_opacity) + ".png'"; //sunny - cloudy - windy
          console.log(atmosphere)

          dateDivEl.innerHTML = "<div>" + date + "</div>" + "<div style='font-weight: 300'>" + sol + "</div>";
          photoDivEl.innerHTML = "<img src=" + atmosphere + " width='100' height='100' style='margin:auto'>";
          tempDivEl.innerHTML = "<div style='color:red'>" + high + "</div>" + "<div style='color:blue'>" + low + "</div>";
          newDivEl.appendChild(dateDivEl);
          newDivEl.appendChild(photoDivEl);
          newDivEl.appendChild(tempDivEl);
          newDivEl.classList.add('items-stretch');
          document.getElementById("sol" + (i + 1)).appendChild(newDivEl);
        }
      });
  } else {
    alert("Error: " + response.statusText);
  }

});