/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Logic/GameLogic/GameLogic.ts":
/*!**************************************!*\
  !*** ./Logic/GameLogic/GameLogic.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../redux/store */ "./redux/store.ts");
/* harmony import */ var _assets_images_animals_pack_png_1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/animals-pack/png/1.png */ "./assets/images/animals-pack/png/1.png");
/* harmony import */ var _assets_images_animals_pack_png_2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/animals-pack/png/2.png */ "./assets/images/animals-pack/png/2.png");
/* harmony import */ var _assets_images_animals_pack_png_3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/animals-pack/png/3.png */ "./assets/images/animals-pack/png/3.png");
/* harmony import */ var _assets_images_animals_pack_png_4_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/animals-pack/png/4.png */ "./assets/images/animals-pack/png/4.png");
/* harmony import */ var _assets_images_animals_pack_png_5_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/animals-pack/png/5.png */ "./assets/images/animals-pack/png/5.png");
/* harmony import */ var _assets_images_animals_pack_png_6_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/images/animals-pack/png/6.png */ "./assets/images/animals-pack/png/6.png");
/* harmony import */ var _assets_images_animals_pack_png_7_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/images/animals-pack/png/7.png */ "./assets/images/animals-pack/png/7.png");
/* harmony import */ var _assets_images_animals_pack_png_8_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/images/animals-pack/png/8.png */ "./assets/images/animals-pack/png/8.png");
/* harmony import */ var _assets_images_animals_pack_png_9_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/images/animals-pack/png/9.png */ "./assets/images/animals-pack/png/9.png");
/* harmony import */ var _assets_images_animals_pack_png_10_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/images/animals-pack/png/10.png */ "./assets/images/animals-pack/png/10.png");
/* harmony import */ var _assets_images_animals_pack_png_11_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/images/animals-pack/png/11.png */ "./assets/images/animals-pack/png/11.png");
/* harmony import */ var _assets_images_animals_pack_png_12_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/images/animals-pack/png/12.png */ "./assets/images/animals-pack/png/12.png");
/* harmony import */ var _assets_images_animals_pack_png_13_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../assets/images/animals-pack/png/13.png */ "./assets/images/animals-pack/png/13.png");
/* harmony import */ var _assets_images_animals_pack_png_14_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../assets/images/animals-pack/png/14.png */ "./assets/images/animals-pack/png/14.png");
/* harmony import */ var _assets_images_animals_pack_png_15_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../assets/images/animals-pack/png/15.png */ "./assets/images/animals-pack/png/15.png");
/* harmony import */ var _assets_images_animals_pack_png_16_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../assets/images/animals-pack/png/16.png */ "./assets/images/animals-pack/png/16.png");
/* harmony import */ var _assets_images_animals_pack_png_17_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../assets/images/animals-pack/png/17.png */ "./assets/images/animals-pack/png/17.png");
/* harmony import */ var _assets_images_animals_pack_png_18_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../assets/images/animals-pack/png/18.png */ "./assets/images/animals-pack/png/18.png");
/* harmony import */ var _assets_images_programming_pack_program1_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../assets/images/programming-pack/program1.png */ "./assets/images/programming-pack/program1.png");
/* harmony import */ var _assets_images_programming_pack_program2_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../assets/images/programming-pack/program2.png */ "./assets/images/programming-pack/program2.png");
/* harmony import */ var _assets_images_programming_pack_program3_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../assets/images/programming-pack/program3.png */ "./assets/images/programming-pack/program3.png");
/* harmony import */ var _assets_images_programming_pack_program4_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../assets/images/programming-pack/program4.png */ "./assets/images/programming-pack/program4.png");
/* harmony import */ var _assets_images_programming_pack_program5_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../assets/images/programming-pack/program5.png */ "./assets/images/programming-pack/program5.png");
/* harmony import */ var _assets_images_programming_pack_program6_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../assets/images/programming-pack/program6.png */ "./assets/images/programming-pack/program6.png");
/* harmony import */ var _assets_images_programming_pack_program7_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../assets/images/programming-pack/program7.png */ "./assets/images/programming-pack/program7.png");
/* harmony import */ var _assets_images_programming_pack_program8_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../assets/images/programming-pack/program8.png */ "./assets/images/programming-pack/program8.png");
/* harmony import */ var _assets_images_programming_pack_program9_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../assets/images/programming-pack/program9.png */ "./assets/images/programming-pack/program9.png");
/* harmony import */ var _assets_images_programming_pack_program10_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../assets/images/programming-pack/program10.png */ "./assets/images/programming-pack/program10.png");
/* harmony import */ var _assets_images_programming_pack_program11_png__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../assets/images/programming-pack/program11.png */ "./assets/images/programming-pack/program11.png");
/* harmony import */ var _assets_images_programming_pack_program12_png__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../assets/images/programming-pack/program12.png */ "./assets/images/programming-pack/program12.png");
/* harmony import */ var _assets_images_programming_pack_program13_png__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../assets/images/programming-pack/program13.png */ "./assets/images/programming-pack/program13.png");
/* harmony import */ var _assets_images_programming_pack_program14_png__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../assets/images/programming-pack/program14.png */ "./assets/images/programming-pack/program14.png");
/* harmony import */ var _assets_images_programming_pack_program15_png__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../assets/images/programming-pack/program15.png */ "./assets/images/programming-pack/program15.png");
/* harmony import */ var _assets_images_programming_pack_program16_png__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../assets/images/programming-pack/program16.png */ "./assets/images/programming-pack/program16.png");
/* harmony import */ var _assets_images_programming_pack_program17_png__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../assets/images/programming-pack/program17.png */ "./assets/images/programming-pack/program17.png");
/* harmony import */ var _assets_images_programming_pack_program18_png__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../assets/images/programming-pack/program18.png */ "./assets/images/programming-pack/program18.png");





































var cardsAnimalsImages8 = [_assets_images_animals_pack_png_1_png__WEBPACK_IMPORTED_MODULE_1__.default, _assets_images_animals_pack_png_2_png__WEBPACK_IMPORTED_MODULE_2__.default, _assets_images_animals_pack_png_3_png__WEBPACK_IMPORTED_MODULE_3__.default, _assets_images_animals_pack_png_4_png__WEBPACK_IMPORTED_MODULE_4__.default, _assets_images_animals_pack_png_5_png__WEBPACK_IMPORTED_MODULE_5__.default, _assets_images_animals_pack_png_6_png__WEBPACK_IMPORTED_MODULE_6__.default, _assets_images_animals_pack_png_7_png__WEBPACK_IMPORTED_MODULE_7__.default, _assets_images_animals_pack_png_8_png__WEBPACK_IMPORTED_MODULE_8__.default];
var cardsAnimalsImages18 = [_assets_images_animals_pack_png_1_png__WEBPACK_IMPORTED_MODULE_1__.default, _assets_images_animals_pack_png_2_png__WEBPACK_IMPORTED_MODULE_2__.default, _assets_images_animals_pack_png_3_png__WEBPACK_IMPORTED_MODULE_3__.default, _assets_images_animals_pack_png_4_png__WEBPACK_IMPORTED_MODULE_4__.default, _assets_images_animals_pack_png_5_png__WEBPACK_IMPORTED_MODULE_5__.default, _assets_images_animals_pack_png_6_png__WEBPACK_IMPORTED_MODULE_6__.default, _assets_images_animals_pack_png_7_png__WEBPACK_IMPORTED_MODULE_7__.default, _assets_images_animals_pack_png_8_png__WEBPACK_IMPORTED_MODULE_8__.default, _assets_images_animals_pack_png_9_png__WEBPACK_IMPORTED_MODULE_9__.default, _assets_images_animals_pack_png_10_png__WEBPACK_IMPORTED_MODULE_10__.default, _assets_images_animals_pack_png_11_png__WEBPACK_IMPORTED_MODULE_11__.default, _assets_images_animals_pack_png_12_png__WEBPACK_IMPORTED_MODULE_12__.default, _assets_images_animals_pack_png_13_png__WEBPACK_IMPORTED_MODULE_13__.default, _assets_images_animals_pack_png_14_png__WEBPACK_IMPORTED_MODULE_14__.default, _assets_images_animals_pack_png_15_png__WEBPACK_IMPORTED_MODULE_15__.default, _assets_images_animals_pack_png_16_png__WEBPACK_IMPORTED_MODULE_16__.default, _assets_images_animals_pack_png_17_png__WEBPACK_IMPORTED_MODULE_17__.default, _assets_images_animals_pack_png_18_png__WEBPACK_IMPORTED_MODULE_18__.default];
var cardsProgrammingImages8 = [_assets_images_programming_pack_program1_png__WEBPACK_IMPORTED_MODULE_19__.default, _assets_images_programming_pack_program2_png__WEBPACK_IMPORTED_MODULE_20__.default, _assets_images_programming_pack_program3_png__WEBPACK_IMPORTED_MODULE_21__.default, _assets_images_programming_pack_program4_png__WEBPACK_IMPORTED_MODULE_22__.default, _assets_images_programming_pack_program5_png__WEBPACK_IMPORTED_MODULE_23__.default, _assets_images_programming_pack_program6_png__WEBPACK_IMPORTED_MODULE_24__.default, _assets_images_programming_pack_program7_png__WEBPACK_IMPORTED_MODULE_25__.default, _assets_images_programming_pack_program8_png__WEBPACK_IMPORTED_MODULE_26__.default];
var cardsProgrammingImages18 = [_assets_images_programming_pack_program1_png__WEBPACK_IMPORTED_MODULE_19__.default, _assets_images_programming_pack_program2_png__WEBPACK_IMPORTED_MODULE_20__.default, _assets_images_programming_pack_program3_png__WEBPACK_IMPORTED_MODULE_21__.default, _assets_images_programming_pack_program4_png__WEBPACK_IMPORTED_MODULE_22__.default, _assets_images_programming_pack_program5_png__WEBPACK_IMPORTED_MODULE_23__.default, _assets_images_programming_pack_program6_png__WEBPACK_IMPORTED_MODULE_24__.default, _assets_images_programming_pack_program7_png__WEBPACK_IMPORTED_MODULE_25__.default, _assets_images_programming_pack_program8_png__WEBPACK_IMPORTED_MODULE_26__.default, _assets_images_programming_pack_program9_png__WEBPACK_IMPORTED_MODULE_27__.default, _assets_images_programming_pack_program10_png__WEBPACK_IMPORTED_MODULE_28__.default, _assets_images_programming_pack_program11_png__WEBPACK_IMPORTED_MODULE_29__.default, _assets_images_programming_pack_program12_png__WEBPACK_IMPORTED_MODULE_30__.default, _assets_images_programming_pack_program13_png__WEBPACK_IMPORTED_MODULE_31__.default, _assets_images_programming_pack_program14_png__WEBPACK_IMPORTED_MODULE_32__.default, _assets_images_programming_pack_program15_png__WEBPACK_IMPORTED_MODULE_33__.default, _assets_images_programming_pack_program16_png__WEBPACK_IMPORTED_MODULE_34__.default, _assets_images_programming_pack_program17_png__WEBPACK_IMPORTED_MODULE_35__.default, _assets_images_programming_pack_program18_png__WEBPACK_IMPORTED_MODULE_36__.default];

function addToStateWhatGameFinished() {
  _redux_store__WEBPACK_IMPORTED_MODULE_0__.default.state.isGameStarted = false;
}

function goToScorePage() {
  window.location.hash = '#/score';
}

function addPlayerPointsToState(playerPoints) {
  _redux_store__WEBPACK_IMPORTED_MODULE_0__.default.state.newUser.score = playerPoints;
}

function hideWinPopupAndHisCover(winPopup, coverWInPopup) {
  document.body.classList.remove('notScrollable');
  winPopup.classList.remove('appear');
  coverWInPopup.classList.remove('appear');
}

function showWinPopupAndHisCover(winPopup, coverWInPopup) {
  document.body.classList.add('notScrollable');
  winPopup.classList.add('appear');
  coverWInPopup.classList.add('appear');
}

function addTextInWinPopup(time, playerPoints) {
  var seconds = time % 60;
  var minutes = Math.floor(time / 60);
  var winPopupText = document.querySelector('.win-popup__text');
  winPopupText.innerHTML = "Congratulations! You successfully found all matches \n    on ".concat(minutes, ".").concat(seconds, " minutes. Your points: ").concat(playerPoints);
}

function addCongratulationText(playerPoints, gameTime) {
  var cover = document.querySelector('.game__win-popup-cover');
  var winPopup = document.querySelector('.win-popup');
  var winPopupButton = document.querySelector('.win-popup__btn');
  addTextInWinPopup(gameTime, playerPoints);
  showWinPopupAndHisCover(winPopup, cover);
  cover.addEventListener('click', function () {
    hideWinPopupAndHisCover(winPopup, cover);
  });
  winPopupButton.addEventListener('click', function () {
    hideWinPopupAndHisCover(winPopup, cover);
    addToStateWhatGameFinished();
    goToScorePage();
  });
}

function countPlayerPoints() {
  var gameTime = _redux_store__WEBPACK_IMPORTED_MODULE_0__.default.state.gamePage.timeInSeconds;
  var numberOfAllComparisons = _redux_store__WEBPACK_IMPORTED_MODULE_0__.default.state.gamePage.numberOfAllComparisons;
  var numberOfWrongComparisons = _redux_store__WEBPACK_IMPORTED_MODULE_0__.default.state.gamePage.numberOfWrongComparisons;
  var playerPoints = (numberOfAllComparisons - numberOfWrongComparisons) * 100 - gameTime * 10;

  if (playerPoints < 0) {
    playerPoints = 0;
  }

  return playerPoints;
}

function finishGame(timerId) {
  clearInterval(timerId);
  var playerPoints = countPlayerPoints();
  var gameTime = _redux_store__WEBPACK_IMPORTED_MODULE_0__.default.state.gamePage.timeInSeconds;
  addCongratulationText(playerPoints, gameTime);
  addPlayerPointsToState(playerPoints);
}

function timer() {
  var passedTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var seconds = 0;
  var minutes = 0;
  var timeInSeconds = passedTime;
  var minutesField = document.querySelector('.game__minutes');
  var secondsField = document.querySelector('.game__seconds');
  var timerId = setInterval(function () {
    timeInSeconds++;
    seconds = timeInSeconds % 60;
    minutes = Math.floor(timeInSeconds / 60);
    minutesField.innerHTML = minutes < 10 ? "0".concat(String(minutes)) : String(minutes);
    secondsField.innerHTML = seconds < 10 ? "0".concat(String(seconds)) : String(seconds);
    _redux_store__WEBPACK_IMPORTED_MODULE_0__.default.state.gamePage.timeInSeconds = timeInSeconds;
  }, 1000);
  return timerId;
}

function isAllCardsGuessed(cards) {
  var whichElementsGuessed = [];
  cards.forEach(function (card) {
    whichElementsGuessed.push(card.classList.contains('guessed'));
  });

  if (whichElementsGuessed.every(function (elem) {
    return elem;
  })) {
    return true;
  }

  return false;
}

function startPartOfGuessing(timerIdOfMemorizingPart) {
  clearInterval(timerIdOfMemorizingPart);
  var cards = document.querySelectorAll('.game__card');
  cards.forEach(function (card) {
    return card.classList.remove('flipped');
  });
  var timerIdOfGuessingPart = timer();
  var buttonStop = document.querySelector('.header__btn_stop');
  buttonStop.addEventListener('click', function () {
    var coverOverCardsField = document.querySelector('.game__cards-cover');

    if (buttonStop.classList.contains('stopped')) {
      timerIdOfGuessingPart = timer(_redux_store__WEBPACK_IMPORTED_MODULE_0__.default.state.gamePage.timeInSeconds);
      buttonStop.classList.remove('stopped');
      coverOverCardsField.classList.remove('appear');
      buttonStop.innerHTML = 'Stop game';
    } else {
      buttonStop.classList.add('stopped');
      clearInterval(timerIdOfGuessingPart);
      coverOverCardsField.classList.add('appear');
      buttonStop.innerHTML = 'Resume game';
    }
  });
  cards.forEach(function (card) {
    return card.addEventListener('click', function () {
      var cardFlipped;
      cards.forEach(function (c) {
        if (c.classList.contains('flipped') && !c.classList.contains('guessed')) {
          cardFlipped = c;
        }
      });
      card.classList.add('flipped');

      if (cardFlipped) {
        if (!(card.id === cardFlipped.id)) {
          var cardFlippedImg = cardFlipped.querySelector('.game__back-pic');
          var cardFlippedImgUrl = cardFlippedImg.src;
          var cardCurrentImg = card.querySelector('.game__back-pic');
          var cardCurrentImgUrl = cardCurrentImg.src;
          var coverCardCurrent = card.querySelector('.game__cover');
          var coverCardFlipped = cardFlipped.querySelector('.game__cover');

          if (cardFlippedImgUrl === cardCurrentImgUrl) {
            _redux_store__WEBPACK_IMPORTED_MODULE_0__.default.state.gamePage.numberOfAllComparisons++;
            coverCardCurrent.classList.add('game__cover_correct');
            coverCardFlipped.classList.add('game__cover_correct');
            card.classList.add('guessed');
            cardFlipped.classList.add('guessed');

            if (isAllCardsGuessed(cards)) {
              setTimeout(function () {
                return finishGame(timerIdOfGuessingPart);
              }, 400);
            }
          } else {
            _redux_store__WEBPACK_IMPORTED_MODULE_0__.default.state.gamePage.numberOfAllComparisons++;
            _redux_store__WEBPACK_IMPORTED_MODULE_0__.default.state.gamePage.numberOfWrongComparisons++;
            coverCardCurrent.classList.add('game__cover_wrong');
            coverCardFlipped.classList.add('game__cover_wrong');
            setTimeout(function () {
              card.classList.remove('flipped');
              cardFlipped.classList.remove('flipped');
              coverCardCurrent.classList.remove('game__cover_wrong');
              coverCardFlipped.classList.remove('game__cover_wrong');
            }, 600);
          }
        }
      }
    });
  });
}

function changeCardsFieldStylesAccordingToLevel() {
  var cardsField = document.querySelector('.game__cards');

  if (_redux_store__WEBPACK_IMPORTED_MODULE_0__.default.state.gamePage.difficult === 'beginner') {
    cardsField.classList.add('game__cards_beginner-level');
  } else if (_redux_store__WEBPACK_IMPORTED_MODULE_0__.default.state.gamePage.difficult === 'medium') {
    cardsField.classList.add('game__cards_medium-level');
  }
}

var GameLogic = function GameLogic() {
  var timeOfMemorizingPartInMilliseconds = 30000;
  changeCardsFieldStylesAccordingToLevel();

  if (_redux_store__WEBPACK_IMPORTED_MODULE_0__.default.state.isGameStarted) {
    var cards = document.querySelectorAll('.game__card');
    var cardsImages8;
    var cardsImages18;

    if (_redux_store__WEBPACK_IMPORTED_MODULE_0__.default.state.gamePage.cardsType === 'animals') {
      cardsImages8 = cardsAnimalsImages8;
      cardsImages18 = cardsAnimalsImages18;
    } else if (_redux_store__WEBPACK_IMPORTED_MODULE_0__.default.state.gamePage.cardsType === 'programming') {
      cardsImages8 = cardsProgrammingImages8;
      cardsImages18 = cardsProgrammingImages18;
    }

    var cardsImages16 = cardsImages8.concat(cardsImages8);
    var cardsImages36 = cardsImages18.concat(cardsImages18);
    cards.forEach(function (card) {
      var cardsImages = _redux_store__WEBPACK_IMPORTED_MODULE_0__.default.state.gamePage.difficult === 'beginner' ? cardsImages16 : cardsImages36;
      var randomNumber = Math.floor(Math.random() * cardsImages.length);
      var cardImg = card.querySelector('.game__back-pic');
      cardImg.src = cardsImages[randomNumber];
      cardsImages.splice(randomNumber, 1);
    });
    var timerIdOfMemorizingPart = timer();
    cards.forEach(function (card) {
      return card.classList.add('flipped');
    });
    setTimeout(function () {
      return startPartOfGuessing(timerIdOfMemorizingPart);
    }, timeOfMemorizingPartInMilliseconds);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (GameLogic);

/***/ }),

/***/ "./Logic/HeaderLogic/HeaderLogic.ts":
/*!******************************************!*\
  !*** ./Logic/HeaderLogic/HeaderLogic.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../redux/store */ "./redux/store.ts");


function showWinPopupAndHisCover(popup, popupCover) {
  document.body.classList.add('notScrollable');
  popup.classList.add('appear');
  popupCover.classList.add('appear');
}

var HeaderLogic = function HeaderLogic() {
  var buttonRegistration = document.querySelector('.header__btn_register');
  var buttonStartGame = document.querySelector('.header__btn_start');
  var cover = document.querySelector('.rules__cover');
  var formOfRegistration = document.querySelector('.popup');

  if (buttonRegistration) {
    buttonRegistration.addEventListener('click', function () {
      showWinPopupAndHisCover(formOfRegistration, cover);
    });
  }

  if (buttonStartGame) {
    buttonStartGame.addEventListener('click', function () {
      _redux_store__WEBPACK_IMPORTED_MODULE_0__.default.state.isGameStarted = true;
      window.location.hash = '#/game';
      _redux_store__WEBPACK_IMPORTED_MODULE_0__.default.callSubscriber();
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderLogic);

/***/ }),

/***/ "./Logic/PopupLogic/PopupLogic.ts":
/*!****************************************!*\
  !*** ./Logic/PopupLogic/PopupLogic.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../redux/store */ "./redux/store.ts");


function hideWinPopupAndHisCover(popup, popupCover) {
  document.body.classList.remove('notScrollable');
  popup.classList.remove('appear');
  popupCover.classList.remove('appear');
}

function clearInputs(nameField, surnameField, emailField) {
  nameField.value = '';
  surnameField.value = '';
  emailField.value = '';
}

function clearInputsRectangle() {
  var allInputsRectangles = document.querySelectorAll('.popup__stroke-rect');
  allInputsRectangles.forEach(function (inputRectangle) {
    inputRectangle.classList.remove('popup__stroke-rect_active');
  });
}

function validate(field) {
  var value = field.value || '';
  var rectOfValidation = field.closest('.popup__stroke-form').nextElementSibling.children[0];

  if (field.type === 'email' && value.trim() && value.length <= 30 && field.validity.valid || field.type !== 'email' && value.trim() && value.length <= 30 && field.validity.valid && value.split('').every(function (symbol) {
    return /^(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDEC0-\uDEEB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])$/i.test(symbol);
  })) {
    rectOfValidation.classList.add('popup__stroke-rect_active');
  } else {
    rectOfValidation.classList.remove('popup__stroke-rect_active');
  }
}

function addUser(nameField, surnameField, emailField) {
  var imgOfUser = document.querySelector('.popup__avatar-pic');
  var user = {
    name: nameField.value,
    surname: surnameField.value,
    email: emailField.value,
    imgUrl: imgOfUser ? imgOfUser.src : ''
  };
  _redux_store__WEBPACK_IMPORTED_MODULE_0__.default.addUserToDataBase(user);
  _redux_store__WEBPACK_IMPORTED_MODULE_0__.default.state.newUser = user;
  _redux_store__WEBPACK_IMPORTED_MODULE_0__.default.state.isUserRegistered = true;
  _redux_store__WEBPACK_IMPORTED_MODULE_0__.default.callSubscriber();
}

var PopupLogic = function PopupLogic() {
  var buttonAddingUser = document.querySelector('.popup__btn-add');
  var buttonCancelForm = document.querySelector('.popup__btn-cancel');
  var cover = document.querySelector('.rules__cover');
  var formOfRegistration = document.querySelector('.popup');
  var nameField = document.querySelector('.popup__name');
  var surnameField = document.querySelector('.popup__surname');
  var emailField = document.querySelector('.popup__email');
  cover.addEventListener('click', function () {
    hideWinPopupAndHisCover(formOfRegistration, cover);
  });
  buttonAddingUser.addEventListener('click', function () {
    var isInputsValid;

    if (nameField.validity.valid && surnameField.validity.valid && emailField.validity.valid) {
      addUser(nameField, surnameField, emailField);
      hideWinPopupAndHisCover(formOfRegistration, cover);
      clearInputs(nameField, surnameField, emailField);
      clearInputsRectangle();
      isInputsValid = true;
    } else {
      alert('Not at all');
      isInputsValid = false;
    }

    return isInputsValid;
  });
  buttonCancelForm.addEventListener('click', function () {
    hideWinPopupAndHisCover(formOfRegistration, cover);
    clearInputs(nameField, surnameField, emailField);
    clearInputsRectangle();
  });
  nameField.addEventListener('input', function (event) {
    validate(event.target);
  });
  surnameField.addEventListener('input', function (event) {
    validate(event.target);
  });
  emailField.addEventListener('input', function (event) {
    validate(event.target);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PopupLogic);

/***/ }),

/***/ "./Logic/SettingsLogic/CardTypesSettingsLogic/CardTypesSettingsLogic.ts":
/*!******************************************************************************!*\
  !*** ./Logic/SettingsLogic/CardTypesSettingsLogic/CardTypesSettingsLogic.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../redux/store */ "./redux/store.ts");


var CardTypesSettingsLogic = function CardTypesSettingsLogic() {
  var cardsTypeSettings = document.querySelector('.cardsType');
  var cardsTypeSettingsBlockList = cardsTypeSettings.querySelector('.settings__types');
  var cardsTypeSettingsTypes = cardsTypeSettings.querySelectorAll('.settings__type');
  cardsTypeSettings.addEventListener('click', function () {
    cardsTypeSettingsBlockList.classList.add('appear');
  });
  cardsTypeSettingsTypes.forEach(function (type) {
    type.addEventListener('click', function () {
      if (type.classList.contains('settings__type_animals')) {
        _redux_store__WEBPACK_IMPORTED_MODULE_0__.default.state.gamePage.cardsType = 'animals';
      } else if (type.classList.contains('settings__type_programming')) {
        _redux_store__WEBPACK_IMPORTED_MODULE_0__.default.state.gamePage.cardsType = 'programming';
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (CardTypesSettingsLogic);

/***/ }),

/***/ "./Logic/SettingsLogic/DifficultSettingsLogic/DifficultSettingsLogic.ts":
/*!******************************************************************************!*\
  !*** ./Logic/SettingsLogic/DifficultSettingsLogic/DifficultSettingsLogic.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../redux/store */ "./redux/store.ts");


var DifficultSettingsLogic = function DifficultSettingsLogic() {
  var difficultSettings = document.querySelector('.difficult');
  var difficultSettingsBlockList = difficultSettings.querySelector('.settings__types');
  var difficultSettingsTypes = difficultSettings.querySelectorAll('.settings__type');
  difficultSettings.addEventListener('click', function () {
    difficultSettingsBlockList.classList.add('appear');
  });
  difficultSettingsTypes.forEach(function (type) {
    type.addEventListener('click', function () {
      if (type.classList.contains('settings__type_beginner')) {
        _redux_store__WEBPACK_IMPORTED_MODULE_0__.default.state.gamePage.difficult = 'beginner';
      } else if (type.classList.contains('settings__type_medium')) {
        _redux_store__WEBPACK_IMPORTED_MODULE_0__.default.state.gamePage.difficult = 'medium';
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (DifficultSettingsLogic);

/***/ }),

/***/ "./Logic/SettingsLogic/SettingsLogic.ts":
/*!**********************************************!*\
  !*** ./Logic/SettingsLogic/SettingsLogic.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DifficultSettingsLogic_DifficultSettingsLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DifficultSettingsLogic/DifficultSettingsLogic */ "./Logic/SettingsLogic/DifficultSettingsLogic/DifficultSettingsLogic.ts");
/* harmony import */ var _CardTypesSettingsLogic_CardTypesSettingsLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardTypesSettingsLogic/CardTypesSettingsLogic */ "./Logic/SettingsLogic/CardTypesSettingsLogic/CardTypesSettingsLogic.ts");



var SettingsLogic = function SettingsLogic() {
  (0,_DifficultSettingsLogic_DifficultSettingsLogic__WEBPACK_IMPORTED_MODULE_0__.default)();
  (0,_CardTypesSettingsLogic_CardTypesSettingsLogic__WEBPACK_IMPORTED_MODULE_1__.default)();
};

/* harmony default export */ __webpack_exports__["default"] = (SettingsLogic);

/***/ }),

/***/ "./app.ts":
/*!****************!*\
  !*** ./app.ts ***!
  \****************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Header/Header */ "./components/Header/Header.ts");
/* harmony import */ var _components_Popup_Popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Popup/Popup */ "./components/Popup/Popup.ts");
/* harmony import */ var _components_Router_Router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Router/Router */ "./components/Router/Router.ts");




var App = function App(props) {
  return "\n  ".concat((0,_components_Header_Header__WEBPACK_IMPORTED_MODULE_0__.default)({
    state: props.state
  }), "\n  <main>\n  ").concat((0,_components_Popup_Popup__WEBPACK_IMPORTED_MODULE_1__.default)(), "\n    ").concat((0,_components_Router_Router__WEBPACK_IMPORTED_MODULE_2__.default)({
    path: props.path,
    state: props.state
  }), "\n  </main>\n  ");
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./components/Game/Card/Card.ts":
/*!**************************************!*\
  !*** ./components/Game/Card/Card.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Card_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card.scss */ "./components/Game/Card/Card.scss");
 // import animalImg from "../../../assets/images/animals-pack/png/001-elephant.png";

var Card = function Card(props) {
  return "\n    <li class=\"game__card-container\">\n      <div class=\"game__card\" id=\"".concat(props.id, "\">\n        <div class=\"game__front\"></div>\n        <div class=\"game__back\"><img src=\"\" class=\"game__back-pic\"/></div>\n        <div class=\"game__cover\"></div>\n      </div>\n    </li>\n  ");
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/Game/Game.ts":
/*!*********************************!*\
  !*** ./components/Game/Game.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Card_Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card/Card */ "./components/Game/Card/Card.ts");
/* harmony import */ var _Game_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game.scss */ "./components/Game/Game.scss");
/* harmony import */ var _Timer_Timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Timer/Timer */ "./components/Game/Timer/Timer.ts");
/* harmony import */ var _WinPopup_WinPopup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WinPopup/WinPopup */ "./components/Game/WinPopup/WinPopup.ts");





var Games = function Games(props) {
  var gameDifficult = props.state.gamePage.difficult;
  var cardsCount = gameDifficult === 'beginner' ? 16 : 36;
  var cards = '';

  for (var i = 0; i < cardsCount; i++) {
    cards += (0,_Card_Card__WEBPACK_IMPORTED_MODULE_0__.default)({
      id: i
    });
  }

  return "\n    <div class=\"container\">\n      <section class=\"game\">\n        ".concat((0,_Timer_Timer__WEBPACK_IMPORTED_MODULE_2__.default)(), "\n        <div class=\"game__cards-container\">\n          <ul class=\"game__cards\">\n          ").concat(cards, "\n          </ul>\n          <div class=\"game__cards-cover\"></div>\n        </div>\n        <div class=\"game__win-popup-cover\"></div>\n        ").concat((0,_WinPopup_WinPopup__WEBPACK_IMPORTED_MODULE_3__.default)(), "\n      </section>\n    </div>\n  ");
};

/* harmony default export */ __webpack_exports__["default"] = (Games);

/***/ }),

/***/ "./components/Game/Timer/Timer.ts":
/*!****************************************!*\
  !*** ./components/Game/Timer/Timer.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Timer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Timer.scss */ "./components/Game/Timer/Timer.scss");


var Timer = function Timer() {
  return "\n    <div class=\"game__timer\">\n      <div class=\"game__time\">\n        <span class=\"game__minutes\">00</span>:<span class=\"game__seconds\"\n          >00</span\n        >\n      </div>\n    </div>\n  ";
};

/* harmony default export */ __webpack_exports__["default"] = (Timer);

/***/ }),

/***/ "./components/Game/WinPopup/WinPopup.ts":
/*!**********************************************!*\
  !*** ./components/Game/WinPopup/WinPopup.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WinPopup_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WinPopup.scss */ "./components/Game/WinPopup/WinPopup.scss");


var WinPopup = function WinPopup() {
  return "\n    <div class=\"game__win-popup win-popup\">\n      <p class=\"win-popup__text\">\n        Congratulations! You successfully found all matches on 1.21 minutes.\n      </p>\n      <button class=\"win-popup__btn\">OK</button>\n    </div>\n  ";
};

/* harmony default export */ __webpack_exports__["default"] = (WinPopup);

/***/ }),

/***/ "./components/Header/Header.ts":
/*!*************************************!*\
  !*** ./components/Header/Header.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navbar_Navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar/Navbar */ "./components/Header/Navbar/Navbar.ts");
/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.scss */ "./components/Header/Header.scss");
/* harmony import */ var _assets_images_avatar_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/avatar.png */ "./assets/images/avatar.png");




var Header = function Header(props) {
  var headerButtonClass;
  var headerButtonText;
  var blockWithUserImg;

  if (props.state.isUserRegistered) {
    headerButtonClass = 'header__btn_start';
    headerButtonText = 'Start game';
    blockWithUserImg = "<img src=\"".concat(_assets_images_avatar_png__WEBPACK_IMPORTED_MODULE_2__.default, "\" class=\"header__img-avatar\"/>");
  } else {
    headerButtonClass = 'header__btn_register';
    headerButtonText = 'register new player';
    blockWithUserImg = '';
  }

  if (props.state.isGameStarted) {
    headerButtonClass = 'header__btn_stop';
    headerButtonText = 'Stop game';
    blockWithUserImg = "<img src=\"".concat(_assets_images_avatar_png__WEBPACK_IMPORTED_MODULE_2__.default, "\" class=\"header__img-avatar\"/>");
  }

  return "\n    <header class=\"header\">\n      <div class=\"header__container\">\n        <div class=\"header__logo\">\n          <div class=\"header__logo-part\">match</div>\n          <div class=\"header__logo-part\">match</div>\n        </div>\n        ".concat((0,_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_0__.default)(), "\n        <div class=\"header__btn-and-user-icon\">\n          <button class=\"header__btn ").concat(headerButtonClass, "\">\n          ").concat(headerButtonText, "\n          </button>\n          ").concat(blockWithUserImg, "\n        </div>\n      </div>\n    </header>\n  ");
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Header/Navbar/Navbar.ts":
/*!********************************************!*\
  !*** ./components/Header/Navbar/Navbar.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navbar_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.scss */ "./components/Header/Navbar/Navbar.scss");
/* harmony import */ var _assets_images_question_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/images/question-icon.png */ "./assets/images/question-icon.png");
/* harmony import */ var _assets_images_star_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/images/star-icon.png */ "./assets/images/star-icon.png");
/* harmony import */ var _assets_images_setting_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/images/setting-icon.png */ "./assets/images/setting-icon.png");





var Navbar = function Navbar() {
  return "<nav class=\"header__nav\">\n            <ul class=\"header__items\">\n              <li class=\"header__item header__item_selected\">\n                <a href=\"#/\" class=\"header__item-link\">\n                  <div class=\"header__item-body\">\n                    <div class=\"header__circle\">\n                      <img\n                        src=".concat(_assets_images_question_icon_png__WEBPACK_IMPORTED_MODULE_1__.default, "\n                        alt=\"About game\"\n                        class=\"header__pic\"\n                      />\n                    </div>\n                    <div class=\"header__item-phrase\">About Game</div>\n                  </div>\n                </a>\n              </li>\n              <li class=\"header__item\">\n                <a href=\"#/score\" class=\"header__item-link\">\n                  <div class=\"header__item-body\">\n                    <div class=\"header__circle\">\n                      <img\n                        src=").concat(_assets_images_star_icon_png__WEBPACK_IMPORTED_MODULE_2__.default, "\n                        alt=\"Best score\"\n                        class=\"header__pic\"\n                      />\n                    </div>\n                    <div class=\"header__item-phrase\">Best Score</div>\n                  </div>\n                </a>\n              </li>\n              <li class=\"header__item\">\n                <a href=\"#/settings\" class=\"header__item-link\">\n                  <div class=\"header__item-body\">\n                    <div class=\"header__circle\">\n                      <img\n                        src=").concat(_assets_images_setting_icon_png__WEBPACK_IMPORTED_MODULE_3__.default, "\n                        alt=\"Setting\"\n                        class=\"header__pic\"\n                      />\n                    </div>\n                    <div class=\"header__item-phrase\">Game Settings</div>\n                  </div>\n                </a>\n              </li>\n            </ul>\n          </nav>");
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/Popup/Popup.ts":
/*!***********************************!*\
  !*** ./components/Popup/Popup.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Popup_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.scss */ "./components/Popup/Popup.scss");
/* harmony import */ var _assets_images_avatar_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/avatar.png */ "./assets/images/avatar.png");



var Popup = function Popup() {
  return "\n          <div>\n            <div action=\"\" class=\"rules__popup-registration popup\">\n              <h3 class=\"popup__title\">Registry new Player</h3>\n              <div class=\"popup__body\">\n                <div class=\"popup__settings\">\n                  <form action=\"\" class=\"popup__form\">\n                    <div class=\"popup__stroke\">\n                      <div class=\"popup__stroke-form\">\n                        <label for=\"popup__name\" class=\"popup__label\"\n                          >First Name</label\n                        >\n                        <br />\n                        <input\n                          type=\"text\"\n                          class=\"popup__name\"\n                          id=\"popup__name\"\n                          placeholder=\"Jessie\"\n                          required\n                        />\n                      </div>\n                      <div class=\"popup__stroke-circle\">\n                        <div class=\"popup__stroke-rect\"></div>\n                      </div>\n                    </div>\n                    <div class=\"popup__stroke\">\n                      <div class=\"popup__stroke-form\">\n                        <label for=\"popup__surname\" class=\"popup__label\"\n                          >Last Name</label\n                        >\n                        <br />\n                        <input\n                          type=\"text\"\n                          class=\"popup__surname\"\n                          id=\"popup__surname\"\n                          placeholder=\"Doe\"\n                          required\n                        />\n                      </div>\n                      <div class=\"popup__stroke-circle\">\n                        <div class=\"popup__stroke-rect\"></div>\n                      </div>\n                    </div>\n  \n                    <div class=\"popup__stroke\">\n                      <div class=\"popup__stroke-form\">\n                        <label for=\"popup__email\" class=\"popup__label\"\n                          >E-mail</label\n                        >\n                        <br />\n                        <input\n                          type=\"email\"\n                          class=\"popup__email\"\n                          id=\"popup__email\"\n                          placeholder=\"Jessie.Doe@gmail.com\"\n                          required\n                        />\n                      </div>\n                      <div class=\"popup__stroke-circle\">\n                        <div class=\"popup__stroke-rect\"></div>\n                      </div>\n                    </div>\n                  </form>\n                  <div class=\"popup__avatar\">\n                    <img\n                      src=".concat(_assets_images_avatar_png__WEBPACK_IMPORTED_MODULE_1__.default, "\n                      alt=\"Avatar\"\n                      class=\"popup__avatar-pic\"\n                    />\n                  </div>\n                </div>\n                <div class=\"popup__buttons\">\n                  <button class=\"popup__btn-add\">Add user</button>\n                  <button class=\"popup__btn-cancel\">cancel</button>\n                </div>\n              </div>\n            </div>\n            <div class=\"rules__cover\"></div>\n          </div>\n  ");
};

/* harmony default export */ __webpack_exports__["default"] = (Popup);

/***/ }),

/***/ "./components/Router/Router.ts":
/*!*************************************!*\
  !*** ./components/Router/Router.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Rules_Rules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Rules/Rules */ "./components/Rules/Rules.ts");
/* harmony import */ var _Game_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Game/Game */ "./components/Game/Game.ts");
/* harmony import */ var _ScoreTable_ScoreTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ScoreTable/ScoreTable */ "./components/ScoreTable/ScoreTable.ts");
/* harmony import */ var _Settings_Settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Settings/Settings */ "./components/Settings/Settings.ts");





var Router = function Router(props) {
  var routes = [{
    path: '/',
    component: _Rules_Rules__WEBPACK_IMPORTED_MODULE_0__.default
  }, {
    path: '/score',
    component: _ScoreTable_ScoreTable__WEBPACK_IMPORTED_MODULE_2__.default
  }, {
    path: '/settings',
    component: _Settings_Settings__WEBPACK_IMPORTED_MODULE_3__.default
  }, {
    path: '/game',
    component: _Game_Game__WEBPACK_IMPORTED_MODULE_1__.default
  }];
  var path = props.path;

  var findComponentByPath = function findComponentByPath(path, routes) {
    return routes.find(function (route) {
      return route.path.match(new RegExp("^\\".concat(path, "$"), 'gm'));
    }) || undefined;
  };

  var _findComponentByPath = findComponentByPath(path, routes),
      component = _findComponentByPath.component;

  return component({
    state: props.state
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Router);

/***/ }),

/***/ "./components/Rules/Rules.ts":
/*!***********************************!*\
  !*** ./components/Rules/Rules.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Rules_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rules.scss */ "./components/Rules/Rules.scss");
/* harmony import */ var _assets_images_cards_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/cards.jpg */ "./assets/images/cards.jpg");
/* harmony import */ var _assets_images_button_setting_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/button-setting.jpg */ "./assets/images/button-setting.jpg");
/* harmony import */ var _assets_images_form_for_registration_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/form-for-registration.jpg */ "./assets/images/form-for-registration.jpg");





var Rules = function Rules() {
  return "\n        <div class=\"container\">\n          <section class=\"rules\">\n            <h2 class=\"rules__title\">How to play?</h2>\n            <div class=\"rules__body\">\n              <ul class=\"rules__windows\">\n                <li class=\"rules__window\">\n                  <div class=\"rules__window-circle\">\n                    <div class=\"rules__window-number\">1</div>\n                  </div>\n                  <p class=\"rules__window-text\">Register new player in game</p>\n                </li>\n                <li class=\"rules__window\">\n                  <div class=\"rules__window-circle\">\n                    <div class=\"rules__window-number\">2</div>\n                  </div>\n                  <p class=\"rules__window-text\">Configure your game settings</p>\n                </li>\n                <li class=\"rules__window\">\n                  <div class=\"rules__window-circle\">\n                    <div class=\"rules__window-number\">3</div>\n                  </div>\n                  <p class=\"rules__window-text\">\n                    Start you new game! Remember card positions and match it\n                    before times up.\n                  </p>\n                </li>\n              </ul>\n              <div class=\"rules__imgs-examples\">\n                <img\n                  src=".concat(_assets_images_form_for_registration_jpg__WEBPACK_IMPORTED_MODULE_3__.default, "\n                  alt=\"Form for registration\"\n                  class=\"rules__img-example\"\n                />\n                <img\n                  src=").concat(_assets_images_button_setting_jpg__WEBPACK_IMPORTED_MODULE_2__.default, "\n                  alt=\"A setting button\"\n                  class=\"rules__img-example\"\n                />\n                <img\n                  src=").concat(_assets_images_cards_jpg__WEBPACK_IMPORTED_MODULE_1__.default, "\n                  alt=\"An example of cards\"\n                  class=\"rules__img-example\"\n                />\n              </div>\n            </div>\n          </section>\n        </div>\n  ");
};

/* harmony default export */ __webpack_exports__["default"] = (Rules);

/***/ }),

/***/ "./components/ScoreTable/ScorePlayer/ScorePlayer.ts":
/*!**********************************************************!*\
  !*** ./components/ScoreTable/ScorePlayer/ScorePlayer.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ScorePlayer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScorePlayer.scss */ "./components/ScoreTable/ScorePlayer/ScorePlayer.scss");


var ScorePlayer = function ScorePlayer(props) {
  return "\n    <li class=\"score__player\">\n      <img\n        src=\"".concat(props.user.imgUrl, "\"\n        alt=\"").concat(props.user.name, "\"\n        class=\"score__player-pic\"\n      />\n      <div class=\"score__player-info\">\n        <div class=\"score__player-name\">").concat(props.user.name, " ").concat(props.user.surname, "</div>\n        <div class=\"score__player-email\">").concat(props.user.email, "</div>\n      </div>\n      <div class=\"score__player-result\">\n        Score: <span class=\"score__player-count\">").concat(props.user.score, "</span>\n      </div>\n    </li>\n  ");
};

/* harmony default export */ __webpack_exports__["default"] = (ScorePlayer);

/***/ }),

/***/ "./components/ScoreTable/ScoreTable.ts":
/*!*********************************************!*\
  !*** ./components/ScoreTable/ScoreTable.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ScorePlayer_ScorePlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScorePlayer/ScorePlayer */ "./components/ScoreTable/ScorePlayer/ScorePlayer.ts");
/* harmony import */ var _ScoreTable_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScoreTable.scss */ "./components/ScoreTable/ScoreTable.scss");



var ScoreTable = function ScoreTable(props) {
  var player = props.state.newUser.score ? (0,_ScorePlayer_ScorePlayer__WEBPACK_IMPORTED_MODULE_0__.default)({
    user: props.state.newUser
  }) : '';
  return "\n      <div class=\"container\">\n        <section class=\"score\">\n          <h2 class=\"score__title\">Best players</h2>\n          <ul class=\"score__players\">\n            ".concat(player, "\n          </ul>\n        </section>\n      </div>\n  ");
};

/* harmony default export */ __webpack_exports__["default"] = (ScoreTable);

/***/ }),

/***/ "./components/Settings/Parameter/Parameter.ts":
/*!****************************************************!*\
  !*** ./components/Settings/Parameter/Parameter.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Parameter_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Parameter.scss */ "./components/Settings/Parameter/Parameter.scss");


var Parameter = function Parameter(props) {
  var firstTypeClass;
  var secondTypeClass;
  var firstTypeText;
  var secondTypeText;

  if (props.type === 'cardsType') {
    firstTypeClass = 'settings__type_animals';
    secondTypeClass = 'settings__type_programming';
    firstTypeText = 'Animals';
    secondTypeText = 'Programming';
  } else if (props.type === 'difficult') {
    firstTypeClass = 'settings__type_beginner';
    secondTypeClass = 'settings__type_medium';
    firstTypeText = 'Beginner';
    secondTypeText = 'Medium';
  }

  return "\n    <div class=\"settings__item ".concat(props.type, "\">\n      <div class=\"settings__item-container\">\n        <div class=\"setting__name\">").concat(props.name, "</div>\n        <div class=\"setting__hint\">").concat(props.hint, "</div>\n      </div>\n      <ul class=\"settings__types\">\n        <li class=\"settings__type ").concat(firstTypeClass, "\">").concat(firstTypeText, "</li>\n        <li class=\"settings__type ").concat(secondTypeClass, "\">").concat(secondTypeText, "</li>\n      </ul>\n    </div>\n  ");
};

/* harmony default export */ __webpack_exports__["default"] = (Parameter);

/***/ }),

/***/ "./components/Settings/Settings.ts":
/*!*****************************************!*\
  !*** ./components/Settings/Settings.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Settings_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.scss */ "./components/Settings/Settings.scss");
/* harmony import */ var _Parameter_Parameter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Parameter/Parameter */ "./components/Settings/Parameter/Parameter.ts");



var Settings = function Settings() {
  return "\n  <div class=\"container\">\n    <section class=\"settings\">\n  ".concat((0,_Parameter_Parameter__WEBPACK_IMPORTED_MODULE_1__.default)({
    name: 'Game cards',
    hint: 'select game cards type',
    type: 'cardsType'
  }), "\n  ").concat((0,_Parameter_Parameter__WEBPACK_IMPORTED_MODULE_1__.default)({
    name: 'Difficulty',
    hint: 'select game type',
    type: 'difficult'
  }), "\n    </section>\n  </div>\n  ");
};

/* harmony default export */ __webpack_exports__["default"] = (Settings);

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./app.ts");
/* harmony import */ var _Logic_GameLogic_GameLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logic/GameLogic/GameLogic */ "./Logic/GameLogic/GameLogic.ts");
/* harmony import */ var _Logic_HeaderLogic_HeaderLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Logic/HeaderLogic/HeaderLogic */ "./Logic/HeaderLogic/HeaderLogic.ts");
/* harmony import */ var _Logic_PopupLogic_PopupLogic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logic/PopupLogic/PopupLogic */ "./Logic/PopupLogic/PopupLogic.ts");
/* harmony import */ var _Logic_SettingsLogic_SettingsLogic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Logic/SettingsLogic/SettingsLogic */ "./Logic/SettingsLogic/SettingsLogic.ts");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./redux/store */ "./redux/store.ts");
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sass/style.scss */ "./sass/style.scss");








window.onload = function () {
  function renderAll() {
    var currentPath = window.location.hash.slice(1).toLowerCase() || '/';
    document.body.innerHTML = (0,_app__WEBPACK_IMPORTED_MODULE_0__.default)({
      state: _redux_store__WEBPACK_IMPORTED_MODULE_5__.default.state,
      path: currentPath
    });
    (0,_Logic_HeaderLogic_HeaderLogic__WEBPACK_IMPORTED_MODULE_2__.default)();
    (0,_Logic_PopupLogic_PopupLogic__WEBPACK_IMPORTED_MODULE_3__.default)();

    if (currentPath === '/game') {
      (0,_Logic_GameLogic_GameLogic__WEBPACK_IMPORTED_MODULE_1__.default)();
    } else if (currentPath === '/settings') {
      (0,_Logic_SettingsLogic_SettingsLogic__WEBPACK_IMPORTED_MODULE_4__.default)();
    }
  }

  renderAll();
  _redux_store__WEBPACK_IMPORTED_MODULE_5__.default.subscribe(renderAll);
  window.addEventListener('hashchange', function () {
    return renderAll();
  });
};

/***/ }),

/***/ "./redux/database.ts":
/*!***************************!*\
  !*** ./redux/database.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addUserToDataBase": function() { return /* binding */ addUserToDataBase; }
/* harmony export */ });
var db;
var dbReq = indexedDB.open('imyzhuk', 1);

dbReq.onupgradeneeded = function (event) {
  db = event.target.result;
  db.createObjectStore('users', {
    autoIncrement: true
  });
};

dbReq.onsuccess = function (event) {
  db = event.target.result;
};

function addUserToDataBase(user) {
  var tx = db.transaction(['users'], 'readwrite');
  var store = tx.objectStore('users');
  store.add(user);
}

/***/ }),

/***/ "./redux/store.ts":
/*!************************!*\
  !*** ./redux/store.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./database */ "./redux/database.ts");

var store = {
  state: {
    isUserRegistered: false,
    isGameStarted: false,
    newUser: {},
    gamePage: {
      timeInSeconds: 0,
      numberOfAllComparisons: 0,
      numberOfWrongComparisons: 0,
      playerPoints: 0,
      difficult: 'beginner',
      cardsType: 'animals'
    }
  },
  addUserToDataBase: _database__WEBPACK_IMPORTED_MODULE_0__.addUserToDataBase,
  callSubscriber: function callSubscriber() {},
  subscribe: function subscribe(observer) {
    this.callSubscriber = observer;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./assets/images/animals-pack/png/1.png":
/*!**********************************************!*\
  !*** ./assets/images/animals-pack/png/1.png ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a28b3f86ca69292b134930260431a0f7.png");

/***/ }),

/***/ "./assets/images/animals-pack/png/10.png":
/*!***********************************************!*\
  !*** ./assets/images/animals-pack/png/10.png ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4583a3996c7ec431003887ca0df31f1a.png");

/***/ }),

/***/ "./assets/images/animals-pack/png/11.png":
/*!***********************************************!*\
  !*** ./assets/images/animals-pack/png/11.png ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e30a84c48556dc9ed5c821883fc17244.png");

/***/ }),

/***/ "./assets/images/animals-pack/png/12.png":
/*!***********************************************!*\
  !*** ./assets/images/animals-pack/png/12.png ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d1d286a1d7e7937bb87a5b6e8458fda8.png");

/***/ }),

/***/ "./assets/images/animals-pack/png/13.png":
/*!***********************************************!*\
  !*** ./assets/images/animals-pack/png/13.png ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1dade13dc18f0b0543301f1d9a5e8a68.png");

/***/ }),

/***/ "./assets/images/animals-pack/png/14.png":
/*!***********************************************!*\
  !*** ./assets/images/animals-pack/png/14.png ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a8baf91db9d4ce47231ef65b899d37da.png");

/***/ }),

/***/ "./assets/images/animals-pack/png/15.png":
/*!***********************************************!*\
  !*** ./assets/images/animals-pack/png/15.png ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f9bb1a46d2f7e8e639201f8f9ee60b21.png");

/***/ }),

/***/ "./assets/images/animals-pack/png/16.png":
/*!***********************************************!*\
  !*** ./assets/images/animals-pack/png/16.png ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "99bc12694300e4a960e0509297043d64.png");

/***/ }),

/***/ "./assets/images/animals-pack/png/17.png":
/*!***********************************************!*\
  !*** ./assets/images/animals-pack/png/17.png ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "742ef68b2fe04115cc5cad3f5a1d6729.png");

/***/ }),

/***/ "./assets/images/animals-pack/png/18.png":
/*!***********************************************!*\
  !*** ./assets/images/animals-pack/png/18.png ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b782b54b70ded1c8a6270da321324890.png");

/***/ }),

/***/ "./assets/images/animals-pack/png/2.png":
/*!**********************************************!*\
  !*** ./assets/images/animals-pack/png/2.png ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5c2bc39167535a45fac29455a52267f4.png");

/***/ }),

/***/ "./assets/images/animals-pack/png/3.png":
/*!**********************************************!*\
  !*** ./assets/images/animals-pack/png/3.png ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c896be0e339c3bfc1fc202d500e7026d.png");

/***/ }),

/***/ "./assets/images/animals-pack/png/4.png":
/*!**********************************************!*\
  !*** ./assets/images/animals-pack/png/4.png ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "284ef226e38c45e2f7e1905342402ed2.png");

/***/ }),

/***/ "./assets/images/animals-pack/png/5.png":
/*!**********************************************!*\
  !*** ./assets/images/animals-pack/png/5.png ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fc0e1774de7e88516b0476c8afcda38e.png");

/***/ }),

/***/ "./assets/images/animals-pack/png/6.png":
/*!**********************************************!*\
  !*** ./assets/images/animals-pack/png/6.png ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4915cc0ca6eef1f610c4cf9680a4c2f0.png");

/***/ }),

/***/ "./assets/images/animals-pack/png/7.png":
/*!**********************************************!*\
  !*** ./assets/images/animals-pack/png/7.png ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "494bba52950e10951b5da4e1387187bf.png");

/***/ }),

/***/ "./assets/images/animals-pack/png/8.png":
/*!**********************************************!*\
  !*** ./assets/images/animals-pack/png/8.png ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "47fccc1f132d83ef1d10af7c4f9fbca0.png");

/***/ }),

/***/ "./assets/images/animals-pack/png/9.png":
/*!**********************************************!*\
  !*** ./assets/images/animals-pack/png/9.png ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0638095c74bf7a93767d5f7235068c1b.png");

/***/ }),

/***/ "./assets/images/avatar.png":
/*!**********************************!*\
  !*** ./assets/images/avatar.png ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fe8ecf8e85b895fce41d7e8ebdaca3b5.png");

/***/ }),

/***/ "./assets/images/button-setting.jpg":
/*!******************************************!*\
  !*** ./assets/images/button-setting.jpg ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "82930defea07fd4e8ba839fd7e96f549.jpg");

/***/ }),

/***/ "./assets/images/cards.jpg":
/*!*********************************!*\
  !*** ./assets/images/cards.jpg ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e6e9cb11ce2aaabc4c29f68994a525e8.jpg");

/***/ }),

/***/ "./assets/images/form-for-registration.jpg":
/*!*************************************************!*\
  !*** ./assets/images/form-for-registration.jpg ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e14adaf366e3cb31e16b7008d032974b.jpg");

/***/ }),

/***/ "./assets/images/programming-pack/program1.png":
/*!*****************************************************!*\
  !*** ./assets/images/programming-pack/program1.png ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ad3a7e46b2e3eb6e9dbe7efaab097dfe.png");

/***/ }),

/***/ "./assets/images/programming-pack/program10.png":
/*!******************************************************!*\
  !*** ./assets/images/programming-pack/program10.png ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a6eabcec545425fe0652a962232bfe7b.png");

/***/ }),

/***/ "./assets/images/programming-pack/program11.png":
/*!******************************************************!*\
  !*** ./assets/images/programming-pack/program11.png ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "81e3437bd749b422059a4d46f7a29076.png");

/***/ }),

/***/ "./assets/images/programming-pack/program12.png":
/*!******************************************************!*\
  !*** ./assets/images/programming-pack/program12.png ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "df5818de1becdf46f98cb109c2ecaf61.png");

/***/ }),

/***/ "./assets/images/programming-pack/program13.png":
/*!******************************************************!*\
  !*** ./assets/images/programming-pack/program13.png ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3d37d3f261e25c2d03e637f2bbab05b9.png");

/***/ }),

/***/ "./assets/images/programming-pack/program14.png":
/*!******************************************************!*\
  !*** ./assets/images/programming-pack/program14.png ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c60a19b208e27f2324d0fedd753245f2.png");

/***/ }),

/***/ "./assets/images/programming-pack/program15.png":
/*!******************************************************!*\
  !*** ./assets/images/programming-pack/program15.png ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "bb8e280109483b50911ef916608b5854.png");

/***/ }),

/***/ "./assets/images/programming-pack/program16.png":
/*!******************************************************!*\
  !*** ./assets/images/programming-pack/program16.png ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0759694fcc3f676aaa0a45f490d4ba7f.png");

/***/ }),

/***/ "./assets/images/programming-pack/program17.png":
/*!******************************************************!*\
  !*** ./assets/images/programming-pack/program17.png ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3a32845ce96f9bc19e5f3da7badb758f.png");

/***/ }),

/***/ "./assets/images/programming-pack/program18.png":
/*!******************************************************!*\
  !*** ./assets/images/programming-pack/program18.png ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b7e3a440e40c15548eb236cb6f5a35df.png");

/***/ }),

/***/ "./assets/images/programming-pack/program2.png":
/*!*****************************************************!*\
  !*** ./assets/images/programming-pack/program2.png ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d03e893bdb14b33d885d1da3dfde3905.png");

/***/ }),

/***/ "./assets/images/programming-pack/program3.png":
/*!*****************************************************!*\
  !*** ./assets/images/programming-pack/program3.png ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c6faa70d6c53509d61e37cd50b94f937.png");

/***/ }),

/***/ "./assets/images/programming-pack/program4.png":
/*!*****************************************************!*\
  !*** ./assets/images/programming-pack/program4.png ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "28b2f8004dc763a2ee8a644cce639b50.png");

/***/ }),

/***/ "./assets/images/programming-pack/program5.png":
/*!*****************************************************!*\
  !*** ./assets/images/programming-pack/program5.png ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d0c5dda4335f879d252b7ecb63912a7e.png");

/***/ }),

/***/ "./assets/images/programming-pack/program6.png":
/*!*****************************************************!*\
  !*** ./assets/images/programming-pack/program6.png ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8755a95eba04807cd720423dae5ca526.png");

/***/ }),

/***/ "./assets/images/programming-pack/program7.png":
/*!*****************************************************!*\
  !*** ./assets/images/programming-pack/program7.png ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ede314f6ef512a5d10ca77947884ca1e.png");

/***/ }),

/***/ "./assets/images/programming-pack/program8.png":
/*!*****************************************************!*\
  !*** ./assets/images/programming-pack/program8.png ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e70bf153791000e0804d5af9b2ddf4a3.png");

/***/ }),

/***/ "./assets/images/programming-pack/program9.png":
/*!*****************************************************!*\
  !*** ./assets/images/programming-pack/program9.png ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "86d6e1db2cf9f1afdf42d23540798fc0.png");

/***/ }),

/***/ "./assets/images/question-icon.png":
/*!*****************************************!*\
  !*** ./assets/images/question-icon.png ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2af8c2bcd6d27f2c2537731b970a739d.png");

/***/ }),

/***/ "./assets/images/setting-icon.png":
/*!****************************************!*\
  !*** ./assets/images/setting-icon.png ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3d432c43d3286fb9f605ab360fb35b93.png");

/***/ }),

/***/ "./assets/images/star-icon.png":
/*!*************************************!*\
  !*** ./assets/images/star-icon.png ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2a32c34c02cc3d3be0903eee5aa2fef7.png");

/***/ }),

/***/ "./components/Game/Card/Card.scss":
/*!****************************************!*\
  !*** ./components/Game/Card/Card.scss ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/Game/Game.scss":
/*!***********************************!*\
  !*** ./components/Game/Game.scss ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/Game/Timer/Timer.scss":
/*!******************************************!*\
  !*** ./components/Game/Timer/Timer.scss ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/Game/WinPopup/WinPopup.scss":
/*!************************************************!*\
  !*** ./components/Game/WinPopup/WinPopup.scss ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/Header/Header.scss":
/*!***************************************!*\
  !*** ./components/Header/Header.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/Header/Navbar/Navbar.scss":
/*!**********************************************!*\
  !*** ./components/Header/Navbar/Navbar.scss ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/Popup/Popup.scss":
/*!*************************************!*\
  !*** ./components/Popup/Popup.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/Rules/Rules.scss":
/*!*************************************!*\
  !*** ./components/Rules/Rules.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/ScoreTable/ScorePlayer/ScorePlayer.scss":
/*!************************************************************!*\
  !*** ./components/ScoreTable/ScorePlayer/ScorePlayer.scss ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/ScoreTable/ScoreTable.scss":
/*!***********************************************!*\
  !*** ./components/ScoreTable/ScoreTable.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/Settings/Parameter/Parameter.scss":
/*!******************************************************!*\
  !*** ./components/Settings/Parameter/Parameter.scss ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./components/Settings/Settings.scss":
/*!*******************************************!*\
  !*** ./components/Settings/Settings.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./sass/style.scss":
/*!*************************!*\
  !*** ./sass/style.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js"], function() { return __webpack_require__("../node_modules/@babel/polyfill/lib/index.js"); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js"], function() { return __webpack_require__("./index.ts"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.bundle.js.map