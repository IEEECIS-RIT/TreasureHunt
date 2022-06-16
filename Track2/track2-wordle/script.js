const _0x5bd519 = _0x5541;
(function (_0x323420, _0x58cf0e) {
  const _0x3e2570 = _0x5541,
    _0x52ea07 = _0x323420();
  while (!![]) {
    try {
      const _0x1c45d5 =
        (-parseInt(_0x3e2570(0x79)) / 0x1) *
          (-parseInt(_0x3e2570(0xaa)) / 0x2) +
        (-parseInt(_0x3e2570(0x86)) / 0x3) * (parseInt(_0x3e2570(0x73)) / 0x4) +
        (parseInt(_0x3e2570(0x7a)) / 0x5) * (parseInt(_0x3e2570(0x70)) / 0x6) +
        -parseInt(_0x3e2570(0x9e)) / 0x7 +
        parseInt(_0x3e2570(0x8c)) / 0x8 +
        (-parseInt(_0x3e2570(0x74)) / 0x9) * (parseInt(_0x3e2570(0x76)) / 0xa) +
        parseInt(_0x3e2570(0x89)) / 0xb;
      if (_0x1c45d5 === _0x58cf0e) break;
      else _0x52ea07["push"](_0x52ea07["shift"]());
    } catch (_0x2d4c21) {
      _0x52ea07["push"](_0x52ea07["shift"]());
    }
  }
})(_0x51d1, 0x9533a);
const WORD_LENGTH = 0x5,
  FLIP_ANIMATION_DURATION = 0x1,
  DANCE_ANIMATION_DURATION = 0x1,
  keyboard = document[_0x5bd519(0x87)](_0x5bd519(0x96)),
  alertContainer = document[_0x5bd519(0x87)]("[data-alert-container]"),
  guessGrid = document[_0x5bd519(0x87)](_0x5bd519(0xab)),
  offsetFromDate = new Date(0x7e6, 0x0, 0x1),
  msOffset = Date[_0x5bd519(0x99)]() - offsetFromDate,
  dayOffset = msOffset / 0x3e8 / 0x3c / 0x3c / 0x18,
  targetWord = _0x5bd519(0xa3);
startInteraction();
function startInteraction() {
  const _0x50e281 = _0x5bd519;
  document["addEventListener"](_0x50e281(0x7f), handleMouseClick),
    document[_0x50e281(0x91)](_0x50e281(0x9c), handleKeyPress);
}
function _0x5541(_0x1f3615, _0x350def) {
  const _0x51d1a2 = _0x51d1();
  return (
    (_0x5541 = function (_0x5541e3, _0x11b3b0) {
      _0x5541e3 = _0x5541e3 - 0x70;
      let _0x34be43 = _0x51d1a2[_0x5541e3];
      return _0x34be43;
    }),
    _0x5541(_0x1f3615, _0x350def)
  );
}
function stopInteraction() {
  const _0x2d25fc = _0x5bd519;
  document["removeEventListener"]("click", handleMouseClick),
    document["removeEventListener"](_0x2d25fc(0x9c), handleKeyPress);
}
function handleMouseClick(_0x2faf30) {
  const _0x53d4cb = _0x5bd519;
  console[_0x53d4cb(0xa8)](_0x2faf30[_0x53d4cb(0x7c)][_0x53d4cb(0x9f)]);
  if (_0x2faf30[_0x53d4cb(0x7c)]["matches"](_0x53d4cb(0x84))) {
    pressKey(_0x2faf30[_0x53d4cb(0x7c)]["dataset"]["key"]);
    return;
  }
  if (_0x2faf30["target"][_0x53d4cb(0x9f)]("[data-enter]")) {
    submitGuess();
    return;
  }
  if (_0x2faf30[_0x53d4cb(0x7c)][_0x53d4cb(0x9f)](_0x53d4cb(0x7d))) {
    deleteKey();
    return;
  }
}
function handleKeyPress(_0x1e2a48) {
  const _0x394beb = _0x5bd519;
  if (_0x1e2a48[_0x394beb(0xac)] === "Enter") {
    submitGuess();
    return;
  }
  if (
    _0x1e2a48[_0x394beb(0xac)] === _0x394beb(0x98) ||
    _0x1e2a48["key"] === "Delete"
  ) {
    deleteKey();
    return;
  }
  if (_0x1e2a48[_0x394beb(0xac)][_0x394beb(0x83)](/^[a-z]$/)) {
    pressKey(_0x1e2a48["key"]);
    return;
  }
}
function pressKey(_0x551bc9) {
  const _0x39ca61 = _0x5bd519,
    _0xe4c8d0 = getActiveTiles();
  if (_0xe4c8d0["length"] >= WORD_LENGTH) return;
  const _0x269dd8 = guessGrid["querySelector"](_0x39ca61(0x8b));
  (_0x269dd8[_0x39ca61(0xa9)][_0x39ca61(0x8f)] = _0x551bc9["toLowerCase"]()),
    (_0x269dd8[_0x39ca61(0x77)] = _0x551bc9),
    (_0x269dd8[_0x39ca61(0xa9)][_0x39ca61(0x9d)] = _0x39ca61(0xa5));
}
function _0x51d1() {
  const _0x18e16d = [
    "\x22i]",
    "animationend",
    "length",
    "[data-keyboard]",
    "div",
    "Backspace",
    "now",
    "add",
    "querySelectorAll",
    "keydown",
    "state",
    "1491644tpJegN",
    "matches",
    "createElement",
    "Yay\x20you\x20got\x20that\x20right!",
    "alert",
    "eight",
    "innerHTML",
    "active",
    "Not\x20enough\x20letters",
    ".heading",
    "log",
    "dataset",
    "1095254mRAcuw",
    "[data-guess-grid]",
    "key",
    "hide",
    "[data-state=\x22active\x22]",
    "correct",
    "924618NaQSdB",
    "transitionend",
    "flip",
    "3311780NEpYmn",
    "376677eacpmb",
    "remove",
    "70WdkpGA",
    "textContent",
    "forEach",
    "1RRLWhX",
    "10tQcYIn",
    "wrong-location",
    "target",
    "[data-delete]",
    "wrong",
    "click",
    "reduce",
    "prepend",
    "classList",
    "match",
    "[data-key]",
    "Oops!\x20You\x20didnt\x20get\x20the\x20word!\x20Try\x20again",
    "3YkYDYb",
    "querySelector",
    "dance",
    "4169022gttbKj",
    "includes",
    ":not([data-letter])",
    "5682424gdFQwI",
    ".res",
    "shake",
    "letter",
    "className",
    "addEventListener",
    "https://bit.ly/3QhSfnl",
  ];
  _0x51d1 = function () {
    return _0x18e16d;
  };
  return _0x51d1();
}
function deleteKey() {
  const _0x293446 = _0x5bd519,
    _0x4c0a2e = getActiveTiles(),
    _0x48f8d4 = _0x4c0a2e[_0x4c0a2e[_0x293446(0x95)] - 0x1];
  if (_0x48f8d4 == null) return;
  (_0x48f8d4["textContent"] = ""),
    delete _0x48f8d4[_0x293446(0xa9)][_0x293446(0x9d)],
    delete _0x48f8d4[_0x293446(0xa9)][_0x293446(0x8f)];
}
function submitGuess() {
  const _0x1beb36 = _0x5bd519,
    _0x3f8568 = [...getActiveTiles()];
  if (_0x3f8568[_0x1beb36(0x95)] !== WORD_LENGTH) {
    showAlert(_0x1beb36(0xa6)), shakeTiles(_0x3f8568);
    return;
  }
  const _0x19bce3 = _0x3f8568[_0x1beb36(0x80)]((_0x5acb9c, _0x493aef) => {
    const _0x32c960 = _0x1beb36;
    return _0x5acb9c + _0x493aef[_0x32c960(0xa9)][_0x32c960(0x8f)];
  }, "");
  if (!approvedWords[_0x1beb36(0x8a)](_0x19bce3)) {
    showAlert("Not\x20in\x20word\x20list"), shakeTiles(_0x3f8568);
    return;
  }
  stopInteraction(),
    _0x3f8568[_0x1beb36(0x78)]((..._0x57954b) =>
      flipTile(..._0x57954b, _0x19bce3)
    );
}
function flipTile(_0x3f859a, _0x3d4cb5, _0x4749c8, _0x13fd1a) {
  const _0x23ba76 = _0x5bd519,
    _0x48f9c1 = _0x3f859a["dataset"]["letter"],
    _0x515089 = keyboard[_0x23ba76(0x87)](
      "[data-key=\x22" + _0x48f9c1 + _0x23ba76(0x93)
    );
  setTimeout(() => {
    const _0x37e670 = _0x23ba76;
    _0x3f859a["classList"][_0x37e670(0x9a)](_0x37e670(0x72));
  }, (_0x3d4cb5 * FLIP_ANIMATION_DURATION) / 0x2),
    _0x3f859a[_0x23ba76(0x91)](
      _0x23ba76(0x71),
      () => {
        const _0x3b158b = _0x23ba76;
        _0x3f859a[_0x3b158b(0x82)][_0x3b158b(0x75)]("flip");
        if (targetWord[_0x3d4cb5] === _0x48f9c1)
          (_0x3f859a[_0x3b158b(0xa9)][_0x3b158b(0x9d)] = _0x3b158b(0xaf)),
            _0x515089[_0x3b158b(0x82)]["add"]("correct");
        else
          targetWord[_0x3b158b(0x8a)](_0x48f9c1)
            ? ((_0x3f859a[_0x3b158b(0xa9)][_0x3b158b(0x9d)] = _0x3b158b(0x7b)),
              _0x515089[_0x3b158b(0x82)][_0x3b158b(0x9a)]("wrong-location"))
            : ((_0x3f859a[_0x3b158b(0xa9)][_0x3b158b(0x9d)] = _0x3b158b(0x7e)),
              _0x515089[_0x3b158b(0x82)][_0x3b158b(0x9a)](_0x3b158b(0x7e)));
        _0x3d4cb5 === _0x4749c8["length"] - 0x1 &&
          _0x3f859a["addEventListener"](
            _0x3b158b(0x71),
            () => {
              startInteraction(), checkWinLose(_0x13fd1a, _0x4749c8);
            },
            { once: !![] }
          );
      },
      { once: !![] }
    );
}
function getActiveTiles() {
  const _0x52b697 = _0x5bd519;
  return guessGrid["querySelectorAll"](_0x52b697(0xae));
}
function setActiveTiles() {
  const _0x3dbf41 = _0x5bd519,
    _0x2bd178 = guessGrid[_0x3dbf41(0x9b)]("[data-letter]");
  for (
    let _0x2808f4 = 0x0;
    _0x2808f4 < _0x2bd178[_0x3dbf41(0x95)];
    _0x2808f4++
  ) {
    (_0x2bd178[_0x2808f4][_0x3dbf41(0x77)] = ""),
      delete _0x2bd178[_0x2808f4][_0x3dbf41(0xa9)]["state"],
      delete _0x2bd178[_0x2808f4][_0x3dbf41(0xa9)]["letter"];
  }
}
function showAlert(_0x468b17, _0xbd35ae = 0x3e8) {
  const _0x1c3154 = _0x5bd519,
    _0x969869 = document[_0x1c3154(0xa0)](_0x1c3154(0x97));
  (_0x969869[_0x1c3154(0x77)] = _0x468b17),
    _0x969869[_0x1c3154(0x82)]["add"](_0x1c3154(0xa2)),
    alertContainer[_0x1c3154(0x81)](_0x969869);
  if (_0xbd35ae == null) return;
  setTimeout(() => {
    const _0x18dc3b = _0x1c3154;
    _0x969869[_0x18dc3b(0x82)]["add"](_0x18dc3b(0xad)),
      _0x969869[_0x18dc3b(0x91)](_0x18dc3b(0x71), () => {
        const _0x527d0a = _0x18dc3b;
        _0x969869[_0x527d0a(0x75)]();
      });
  }, _0xbd35ae);
}
function shakeTiles(_0x5e6960) {
  const _0x310fdf = _0x5bd519;
  _0x5e6960[_0x310fdf(0x78)]((_0x2cd7b0) => {
    const _0x289182 = _0x310fdf;
    _0x2cd7b0[_0x289182(0x82)][_0x289182(0x9a)](_0x289182(0x8e)),
      _0x2cd7b0[_0x289182(0x91)](
        _0x289182(0x94),
        () => {
          const _0x3f90dc = _0x289182;
          _0x2cd7b0["classList"][_0x3f90dc(0x75)](_0x3f90dc(0x8e));
        },
        { once: !![] }
      );
  });
}
function checkWinLose(_0x4ea2a6, _0x18b6c4) {
  const _0x5d58ee = _0x5bd519;
  if (_0x4ea2a6 === targetWord) {
    (document[_0x5d58ee(0x87)](_0x5d58ee(0xa7))[_0x5d58ee(0xa4)] =
      _0x5d58ee(0x92)),
      (document[_0x5d58ee(0x87)](_0x5d58ee(0x8d))[_0x5d58ee(0x90)] +=
        "\x20fade"),
      (document[_0x5d58ee(0x87)](".res")[_0x5d58ee(0xa4)] =
        "<a\x20href=\x22https://volumemist.netlify.app/\x22><img\x20src=\x22https://i.imgflip.com/6j880n.jpg\x22\x20title=\x22https://volumemist.netlify.app/\x22/></a>"),
      showAlert(_0x5d58ee(0xa1), null),
      danceTiles(_0x18b6c4),
      stopInteraction();
    return;
  }
  const _0xf1ca06 = guessGrid[_0x5d58ee(0x9b)](":not([data-letter])");
  _0xf1ca06[_0x5d58ee(0x95)] === 0x0 &&
    (showAlert(_0x5d58ee(0x85), 0x7d0), setActiveTiles(), startInteraction());
}
function danceTiles(_0x1dc97f) {
  const _0x2c7a42 = _0x5bd519;
  _0x1dc97f[_0x2c7a42(0x78)]((_0x359336, _0x56c79b) => {
    setTimeout(() => {
      const _0x3ba829 = _0x5541;
      _0x359336[_0x3ba829(0x82)][_0x3ba829(0x9a)](_0x3ba829(0x88)),
        _0x359336["addEventListener"](
          _0x3ba829(0x94),
          () => {
            const _0x264ff7 = _0x3ba829;
            _0x359336[_0x264ff7(0x82)][_0x264ff7(0x75)](_0x264ff7(0x88));
          },
          { once: !![] }
        );
    }, (_0x56c79b * DANCE_ANIMATION_DURATION) / 0x5);
  });
}
