"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// "use strick";
//////1//5ci tapsiriqla biryerde isdiyir!!!
var run = 0;
var button = document.querySelector(".button");
var bar = document.querySelector(".bar");
var color = parseFloat(getComputedStyle(document.querySelector(".color")).width);
button.addEventListener("click", function () {
  document.querySelector(".text").classList.add("textnon");
  var stop = 1;

  var a = function a() {
    bar.addEventListener("click", function () {
      clearInterval(aa);
      stop = 0;
      color = 0;
      document.querySelector(".color").style.width = color + "%";
      document.querySelector(".text").classList.add("textnon");
    });

    bar.onmouseover = function () {
      clearInterval(aa);
      document.querySelector(".text").classList.remove("textnon");
    };

    var aa = setInterval(function () {
      if (color === 100) {
        clearInterval(aa);
        document.querySelector(".bar").classList.add("non");
        document.querySelector(".button").classList.add("non");
        setTimeout(function () {
          document.querySelector(".bar").classList.add("non2");
        }, 2000);
        setTimeout(function () {
          document.querySelector(".sms").classList.add("smsyes");
        }, 2000);
      } else {
        if (tst == 1) {
          color += 5;

          _toConsumableArray(document.querySelectorAll(".inputsent")).forEach(function (li) {
            li.value = "";
          });

          _toConsumableArray(document.querySelectorAll(".red")).forEach(function (li) {
            li.classList.remove("red");
          });

          document.querySelector(".color").style.width = color + "%";
        } else {
          clearInterval(aa);
        }
      }
    }, 1000);
  };

  a();

  bar.onmouseout = function () {
    if (stop == 1) {
      a();
      document.querySelector(".text").classList.add("textnon");
    }
  };
}); ///////////////////////2

_toConsumableArray(document.querySelectorAll(".imglist .img")).forEach(function (li) {
  li.addEventListener("click", function () {
    document.querySelector(".slider").classList.add("yes");
    document.querySelector(".left ").classList.add("yes");
    document.querySelector(".right ").classList.add("yes");
    document.querySelector(".close ").classList.add("yes");
    document.querySelector(".active").classList.remove("active");
    this.classList.add("active");
    document.querySelector(".slider .img2").src = this.src;
  });
});

document.querySelector(".right").addEventListener("click", function () {
  if (document.querySelector(".active").nextElementSibling) {
    document.querySelector(".slider .img2").src = document.querySelector(".active").nextElementSibling.src;
    document.querySelector(".active").nextElementSibling.classList.add("active");
    document.querySelector(".active").classList.remove("active");
  } else {
    document.querySelector(".slider .img2").src = document.querySelector(".imglist").firstElementChild.src;
    document.querySelector(".imglist").firstElementChild.classList.add("active");
    document.querySelector(".imglist").lastElementChild.classList.remove("active");
  }
});
document.querySelector(".left").addEventListener("click", function () {
  if (document.querySelector(".active").previousElementSibling) {
    document.querySelector(".slider .img2").src = document.querySelector(".active").previousElementSibling.src;
    document.querySelector(".active").previousElementSibling.classList.add("active");
    document.querySelector(".active").nextElementSibling.classList.remove("active");
  } else {
    document.querySelector(".slider .img2").src = document.querySelector(".imglist").lastElementChild.src;
    document.querySelector(".imglist").lastElementChild.classList.add("active");
    document.querySelector(".imglist").firstElementChild.classList.remove("active");
  }

  ;
});
document.querySelector(".close").addEventListener("click", function () {
  _toConsumableArray(document.querySelectorAll(".yes")).forEach(function (li) {
    li.classList.remove("yes");
  });
}); /////////////////////////3

var tst = 0; //color un duzgunimput gozdemesi ucun

var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,99}$/;
button.addEventListener("click", function () {
  _toConsumableArray(document.querySelectorAll(".inputsent")).forEach(function (li) {
    me = li.value.trim();

    if (me == "") {
      run = 0;
      tst = 0;
      li.classList.add("red");
      setTimeout(function () {
        li.classList.remove("red");
      }, 2000); // [...document.querySelectorAll(".box")].forEach(li=>{li.classList.add("yes")})
      // document.querySelector(".box2").classList.add("yes")
    } else {
      if (run == 1) {
        tst = 1;

        _toConsumableArray(document.querySelectorAll(".box")).forEach(function (li) {
          li.classList.remove("yes");
        });

        document.querySelector(".box2").classList.remove("yes");
      }
    }
  });
});
var name = document.querySelector('.name');
var surname = document.querySelector('.Surname');
var email = document.querySelector('.Email');
var password = document.querySelector('.Password');

name.onkeyup = function () {
  var inputmessega = name.value.trim();
  setTimeout(function () {
    if (_toConsumableArray(inputmessega).length == 0) {
      setTimeout(function () {
        document.getElementById("errorname").classList.remove("yes");
        run = 1;
        ;
      }, 6000);
    }

    if (_toConsumableArray(inputmessega).length < 3) {
      document.getElementById("errorname").classList.add("yes");
      run = 0;
    } else {
      document.getElementById("errorname").classList.remove("yes");
      run = 1;
    }

    ;
  }, 2000);
};

surname.onkeyup = function () {
  var inputmessega = surname.value.trim();
  setTimeout(function () {
    if (_toConsumableArray(inputmessega).length == 0) {
      setTimeout(function () {
        document.getElementById("errorSurname").classList.remove("yes");
        run = 1;
        ;
      }, 6000);
    }

    if (_toConsumableArray(inputmessega).length < 3) {
      document.getElementById("errorSurname").classList.add("yes");
      run = 0;
    } else {
      document.getElementById("errorSurname").classList.remove("yes");
      run = 1;
    }

    ;
  }, 2000);
};

email.onkeyup = function () {
  var inputmessega = email.value.trim();
  setTimeout(function () {
    if (_toConsumableArray(inputmessega).length == 0) {
      setTimeout(function () {
        document.getElementById("errorEmail").classList.remove("yes");
        run = 1;
        ;
      }, 6000);
    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputmessega)) {
      document.getElementById("errorEmail").classList.remove("yes");
      run = 1;
    } else {
      document.getElementById("errorEmail").classList.add("yes");
      run = 0;
    }

    ;
  }, 1000);
};

password.onkeyup = function () {
  var inputmessega = password.value.trim();
  setTimeout(function () {
    if (_toConsumableArray(inputmessega).length == 0) {
      setTimeout(function () {
        document.getElementById("errorPassword").classList.remove("yes");
        run = 1;
        ;
      }, 6000);
    }

    if (inputmessega.match(passw)) {
      document.getElementById("errorPassword").classList.remove("yes");
      run = 1;
    } else {
      document.getElementById("errorPassword").classList.add("yes");
      run = 0;
    }

    ;
  }, 1000);
};