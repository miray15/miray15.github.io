let likeCount = 389;

updateLikeCount();

// Function to handle like button click
function likeButtonClick() {
  likeCount++;
  updateLikeCount();
}

// Function to update the like count on the page
function updateLikeCount() {
  document.getElementById("like-count").textContent = likeCount;
}

// Utility function for formatting number as currency
function formatCurrency(num) {
  var sign, integer, placesTilFirstSep;
  sign = num < 0 ? "-" : "";
  num = Math.abs(+num || 0);
  integer = parseInt(num, 10) + "";
  placesTilFirstSep = integer.length > 3 ? integer.length % 3 : 0;
  return sign + "\u00A3" + (placesTilFirstSep ? integer.substr(0, placesTilFirstSep) + "," : "") + integer.substr(placesTilFirstSep).replace(/(\d{3})(?=\d)/g, "$1,") + "." + Math.abs(num - integer).toFixed(2).slice(2)
}

// fundraising thermometer 



// Utility function for formatting number as currency
function formatCurrency(num) {
  var sign, integer, placesTilFirstSep;
  sign = num < 0 ? "-" : "";
  num = Math.abs(+num || 0);
  integer = parseInt(num, 10) + "";
  placesTilFirstSep = integer.length > 3 ? integer.length % 3 : 0;
  return sign + "\u00A3" + (placesTilFirstSep ? integer.substr(0, placesTilFirstSep) + "," : "") + integer.substr(placesTilFirstSep).replace(/(\d{3})(?=\d)/g, "$1,") + "." + Math.abs(num - integer).toFixed(2).slice(2)
}
// Utility function for parsing number from currency
function parseFromCurrency(curr) {
  curr = curr.replace(/\s/g, "");
  if(isNaN(curr.charAt(0)))
    curr  = curr.slice(1);
  return parseFloat(curr.replace(/,/g, ""));
}

// Main functionality
function thermometer(goal, current, animate) {
  if(goal && !current){
    current = goal;
    goal = undefined;
  }
  var $thermo = $("#thermometer"),
      $goal = $(".goal", $thermo),
      $progress = $(".progress", $thermo),
      $fill = $(".fill", $progress),
      $amount = $progress.find(".amount"),
      percentage;
  goal = goal || parseFromCurrency($goal.text()),
  current = current || parseFromCurrency($amount.text()),
  percentage = Math.min(Math.round(current / goal * 1000) / 10, 100);
  $goal.text(formatCurrency(goal));
  if($amount.text() == current) {
    $amount.text(formatCurrency(0))
  }
  if(animate !== false) {
    $fill.animate({
      height: percentage + "%"
    }, {
      duration: 1200
    });
    $amount.animate({
      bottom: percentage - (13 / 338) * 100 + "%"
    }, {
      duration: 1200
    });
    var amountDisplayed = {
      amountNum: parseFromCurrency($amount.text())
    };
    $(amountDisplayed).animate({
      amountNum: current
    }, {
      duration: 1200,
      easing: "swing",
      step: function () {
        $amount.text(formatCurrency(this.amountNum))
      },
      complete: function () {
        if(current < goal) {
          $amount.text(formatCurrency(current))
        } else {
          $amount.text(formatCurrency(current) + "!!");
          $amount.css({
            color: "#FF6600",
            "text-shadow": "0 0 10px #FF9933"
          });
          new Audio("http://soundbible.com/mp3/Kids%20Cheering-SoundBible.com-681813822.mp3").play()
        }
      }
    })
  } else {
    $fill.css({
      height: percentage + "%"
    });
    $amount.css({
      bottom: percentage + "%"
    })
  }
}

$(document).ready(function () {
  thermometer();
  
  // Just to test our animation, lets have it change randomly each time we click
  $(window).click(function () {
    if($(".progress").find(".amount").is(":animated")) {
      return
    } else {
      var random = Math.random() * parseFromCurrency($("#thermometer .goal").text());
      thermometer(random)
    }
  })
});

// end of thermometer 