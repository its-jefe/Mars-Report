var whichSol


// Mars Science Laboratory
let weather = "https://mars.nasa.gov/rss/api/?feed=weather&category=msl&feedtype=json"

let weatherBtnEl = document.getElementById("weather-container")
weatherBtnEl.addEventListener("click", solClick);

// on button click function - passes name of rover clicked
function sendName(something) {
  let apiCall = "https://api.nasa.gov/mars-photos/api/v1/manifests/" + something + "/?api_key=RZGwSzKbOaZadLPNj2btegTPGivRWJI8IKnLnUsd"
  let splitCall = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + something + "/photos?sol=$&api_key=RZGwSzKbOaZadLPNj2btegTPGivRWJI8IKnLnUsd"
  let holder

  fetch(apiCall).then(function (response) {
    if (response.ok) {
      response.json()
        .then(function (data) {
          holder = data;
          newFunction(holder, splitCall)
        });
    } else {
      alert("Error: " + response.statusText);
    }
  });
}

function newFunction(holder, splitCall) {
  let photos = holder.photo_manifest.photos
  // finds the date of the weather!
  console.log(photos)

  if (whichSol) {
    for (var i = photos.length - 1; i >= 0; i--) {
      //matches which sol var
      if (photos[i].earth_date == whichSol) {
        displayPhotos(photos[i].sol, splitCall) 
      };
    };
  } else { 
    document.getElementById("myModal").style.display = "block";}
    let count = 0
    let timer = setInterval(function(){
      count ++
      if(count == 1) {
        document.getElementById("myModal").style.display = "none";
        clearInterval(timer)
      }
    },3000)
    
};

function displayPhotos (sol, splitCall) {
  var newCall = splitCall.split("$")[0] + sol + splitCall.split("$")[1]
  var photo1El = document.createElement("img")
  var photo2El = document.createElement("img")
  var photo3El = document.createElement("img")

  fetch(newCall).then(function (response){
    if (response.ok) {
      response.json()
      .then(function (data) {
        photo1El.src = (data.photos[Math.floor(Math.random()*data.photos.length)].img_src)
        photo2El.src = (data.photos[Math.floor(Math.random()*data.photos.length)].img_src)
        photo3El.src = (data.photos[Math.floor(Math.random()*data.photos.length)].img_src)
      }
    )}
  });
  
  var roverDivEl = document.querySelector(".rover-pics")
  roverDivEl.innerHTML = ""
  roverDivEl.appendChild(photo1El)
  roverDivEl.appendChild(photo2El)
  roverDivEl.appendChild(photo3El)  
}

  function solClick(event) {
    // get the language attribute from the clicked element
    whichSol = event.target.closest("button").getAttribute("data-date");
    // logs event
    console.log(whichSol)
    if (whichSol) {
    }
  }
  // get the weather!
fetch(weather).then(function (response) {
  if (response.ok) {
    response.json()
      .then(function (data) {
        for (var i = 4; i >= 0; i--) {
          let newDivEl = document.createElement("div");
          let dateDivEl = document.createElement("div");
          let photoDivEl = document.createElement("div")
          let tempDivEl = document.createElement("div");

          let date = (data.soles[i].terrestrial_date);
          let sol = "Sol: " + (data.soles[i].sol);
          let high = "High: " + (data.soles[i].max_temp * 9 / 5 + 32).toFixed(1) + " °F";
          let low = "Low: " + (data.soles[i].min_temp * 9 / 5 + 32).toFixed(1) + " °F";
          let atmosphere = "'./assets/images/" + (data.soles[i].atmo_opacity) + ".png'"; //sunny - cloudy - windy

          // setup the 3 elements of the individual weather panel buttons
          dateDivEl.innerHTML = "<div>" + date + "</div>" + "<div style='font-weight: 300'>" + sol + "</div>";
          photoDivEl.innerHTML = "<img src=" + atmosphere + " width='100' height='100' style='margin:auto'>";
          tempDivEl.innerHTML = "<div style='color:red'>" + high + "</div>" + "<div style='color:blue'>" + low + "</div>";
          // add all data to one div
          newDivEl.appendChild(dateDivEl);
          newDivEl.appendChild(photoDivEl);
          newDivEl.appendChild(tempDivEl);
          //append this div to the button so it can be easily grabbed with getAttribute later
          document.getElementById("sol" + (i + 1)).appendChild(newDivEl);
          //then append all of the data
          document.getElementById("sol" + (i + 1)).setAttribute('data-date', date);;
        }
      });
  } else {
    alert("Error: " + response.statusText);
  }

});


//closest() method 



