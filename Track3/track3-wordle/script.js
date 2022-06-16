const _0x8cdc03 = _0x4e98;
(function (_0x40dddc, _0x5b9b23) {
  const _0xea63db = _0x4e98,
    _0x17e0c3 = _0x40dddc();
  while (!![]) {
    try {
      const _0x25312f =
        (parseInt(_0xea63db(0x1c0)) / 0x1) *
          (-parseInt(_0xea63db(0x1b1)) / 0x2) +
        (-parseInt(_0xea63db(0x1bb)) / 0x3) *
          (-parseInt(_0xea63db(0x1b3)) / 0x4) +
        (-parseInt(_0xea63db(0x1bd)) / 0x5) *
          (parseInt(_0xea63db(0x189)) / 0x6) +
        (parseInt(_0xea63db(0x1b8)) / 0x7) *
          (-parseInt(_0xea63db(0x1af)) / 0x8) +
        parseInt(_0xea63db(0x1ac)) / 0x9 +
        -parseInt(_0xea63db(0x1bc)) / 0xa +
        parseInt(_0xea63db(0x199)) / 0xb;
      if (_0x25312f === _0x5b9b23) break;
      else _0x17e0c3["push"](_0x17e0c3["shift"]());
    } catch (_0x1eb6e2) {
      _0x17e0c3["push"](_0x17e0c3["shift"]());
    }
  }
})(_0x133a, 0xc17df);
const WORD_LENGTH = 0x5,
  FLIP_ANIMATION_DURATION = 0x1,
  DANCE_ANIMATION_DURATION = 0x1,
  keyboard = document["querySelector"](_0x8cdc03(0x1b6)),
  alertContainer = document["querySelector"](_0x8cdc03(0x1a3)),
  guessGrid = document[_0x8cdc03(0x190)]("[data-guess-grid]"),
  offsetFromDate = new Date(0x7e6, 0x0, 0x1),
  msOffset = Date["now"]() - offsetFromDate,
  dayOffset = msOffset / 0x3e8 / 0x3c / 0x3c / 0x18,
  targetWord = "eight";
startInteraction();
function startInteraction() {
  const _0x1979e1 = _0x8cdc03;
  document["addEventListener"]("click", handleMouseClick),
    document[_0x1979e1(0x1ad)]("keydown", handleKeyPress);
}
function stopInteraction() {
  const _0x273851 = _0x8cdc03;
  document[_0x273851(0x1a0)]("click", handleMouseClick),
    document[_0x273851(0x1a0)](_0x273851(0x1a9), handleKeyPress);
}
function handleMouseClick(_0x2a89e5) {
  const _0x238e65 = _0x8cdc03;
  console["log"](_0x2a89e5["target"]["matches"]);
  if (_0x2a89e5[_0x238e65(0x1aa)][_0x238e65(0x1a2)](_0x238e65(0x19c))) {
    pressKey(_0x2a89e5[_0x238e65(0x1aa)][_0x238e65(0x19e)]["key"]);
    return;
  }
  if (_0x2a89e5["target"]["matches"]("[data-enter]")) {
    submitGuess();
    return;
  }
  if (_0x2a89e5["target"][_0x238e65(0x1a2)](_0x238e65(0x1a6))) {
    deleteKey();
    return;
  }
}
function _0x133a() {
  const _0x532578 = [
    ".res",
    "toLowerCase",
    "remove",
    "reduce",
    "Oops!\x20You\x20didnt\x20get\x20the\x20word!\x20Try\x20again",
    ":not([data-letter])",
    "Delete",
    "24947670AWHeJQ",
    "[data-state=\x22active\x22]",
    "animationend",
    "[data-key]",
    "length",
    "dataset",
    "transitionend",
    "removeEventListener",
    "textContent",
    "matches",
    "[data-alert-container]",
    "[data-key=\x22",
    "wrong",
    "[data-delete]",
    "hide",
    "wrong-location",
    "keydown",
    "target",
    "letter",
    "2894328hsMctH",
    "addEventListener",
    "classList",
    "7328792USZFnG",
    "<a\x20href=\x22https://friendlyhelicopter.netlify.app/\x22><img\x20src=\x22https://i.imgflip.com/6j880n.jpg\x22\x20title=\x22https://friendlyhelicopter.netlify.app/\x22/></a>",
    "2jyapkC",
    "\x20fade",
    "17984gCOjRu",
    "Not\x20enough\x20letters",
    "shake",
    "[data-keyboard]",
    "\x22i]",
    "7yfBMXR",
    "Backspace",
    "dance",
    "621HuHCQs",
    "10602580jogOHH",
    "709405wCKwtI",
    "querySelectorAll",
    "active",
    "325691yhIPSc",
    ".heading",
    "state",
    "correct",
    "div",
    "forEach",
    "18rULZlY",
    "prepend",
    "includes",
    "flip",
    "key",
    "add",
    "[data-letter]",
    "querySelector",
    "innerHTML",
  ];
  _0x133a = function () {
    return _0x532578;
  };
  return _0x133a();
}
function _0x4e98(_0x522e7f, _0x187fb1) {
  const _0x133a42 = _0x133a();
  return (
    (_0x4e98 = function (_0x4e9880, _0xefe4a2) {
      _0x4e9880 = _0x4e9880 - 0x186;
      let _0x3a4b6a = _0x133a42[_0x4e9880];
      return _0x3a4b6a;
    }),
    _0x4e98(_0x522e7f, _0x187fb1)
  );
}
function handleKeyPress(_0x5f3154) {
  const _0x1b41ff = _0x8cdc03;
  if (_0x5f3154[_0x1b41ff(0x18d)] === "Enter") {
    submitGuess();
    return;
  }
  if (
    _0x5f3154[_0x1b41ff(0x18d)] === _0x1b41ff(0x1b9) ||
    _0x5f3154[_0x1b41ff(0x18d)] === _0x1b41ff(0x198)
  ) {
    deleteKey();
    return;
  }
  if (_0x5f3154[_0x1b41ff(0x18d)]["match"](/^[a-z]$/)) {
    pressKey(_0x5f3154[_0x1b41ff(0x18d)]);
    return;
  }
}
function pressKey(_0x2369d7) {
  const _0x3a1e11 = _0x8cdc03,
    _0x365308 = getActiveTiles();
  if (_0x365308[_0x3a1e11(0x19d)] >= WORD_LENGTH) return;
  const _0x515bd3 = guessGrid[_0x3a1e11(0x190)](_0x3a1e11(0x197));
  (_0x515bd3[_0x3a1e11(0x19e)][_0x3a1e11(0x1ab)] =
    _0x2369d7[_0x3a1e11(0x193)]()),
    (_0x515bd3[_0x3a1e11(0x1a1)] = _0x2369d7),
    (_0x515bd3[_0x3a1e11(0x19e)][_0x3a1e11(0x1c2)] = _0x3a1e11(0x1bf));
}
function deleteKey() {
  const _0x1bec86 = _0x8cdc03,
    _0x2ea1a0 = getActiveTiles(),
    _0x1054b9 = _0x2ea1a0[_0x2ea1a0[_0x1bec86(0x19d)] - 0x1];
  if (_0x1054b9 == null) return;
  (_0x1054b9["textContent"] = ""),
    delete _0x1054b9["dataset"]["state"],
    delete _0x1054b9[_0x1bec86(0x19e)][_0x1bec86(0x1ab)];
}
function submitGuess() {
  const _0xb144f = _0x8cdc03,
    _0x43ecf4 = [...getActiveTiles()];
  if (_0x43ecf4[_0xb144f(0x19d)] !== WORD_LENGTH) {
    showAlert(_0xb144f(0x1b4)), shakeTiles(_0x43ecf4);
    return;
  }
  const _0x409522 = _0x43ecf4[_0xb144f(0x195)]((_0x201e3f, _0x528988) => {
    const _0x8c9ccd = _0xb144f;
    return _0x201e3f + _0x528988[_0x8c9ccd(0x19e)][_0x8c9ccd(0x1ab)];
  }, "");
  if (!approvedWords[_0xb144f(0x18b)](_0x409522)) {
    showAlert("Not\x20in\x20word\x20list"), shakeTiles(_0x43ecf4);
    return;
  }
  stopInteraction(),
    _0x43ecf4["forEach"]((..._0x302b88) => flipTile(..._0x302b88, _0x409522));
}
function flipTile(_0x34e3d1, _0x533ca8, _0x3c970d, _0x1694b6) {
  const _0x19ce9a = _0x8cdc03,
    _0x34dc97 = _0x34e3d1[_0x19ce9a(0x19e)][_0x19ce9a(0x1ab)],
    _0x341e98 = keyboard["querySelector"](
      _0x19ce9a(0x1a4) + _0x34dc97 + _0x19ce9a(0x1b7)
    );
  setTimeout(() => {
    const _0x2bf5d0 = _0x19ce9a;
    _0x34e3d1[_0x2bf5d0(0x1ae)][_0x2bf5d0(0x18e)](_0x2bf5d0(0x18c));
  }, (_0x533ca8 * FLIP_ANIMATION_DURATION) / 0x2),
    _0x34e3d1[_0x19ce9a(0x1ad)](
      "transitionend",
      () => {
        const _0x21cfa5 = _0x19ce9a;
        _0x34e3d1["classList"][_0x21cfa5(0x194)](_0x21cfa5(0x18c));
        if (targetWord[_0x533ca8] === _0x34dc97)
          (_0x34e3d1[_0x21cfa5(0x19e)][_0x21cfa5(0x1c2)] = "correct"),
            _0x341e98["classList"][_0x21cfa5(0x18e)](_0x21cfa5(0x186));
        else
          targetWord[_0x21cfa5(0x18b)](_0x34dc97)
            ? ((_0x34e3d1[_0x21cfa5(0x19e)][_0x21cfa5(0x1c2)] =
                _0x21cfa5(0x1a8)),
              _0x341e98[_0x21cfa5(0x1ae)]["add"](_0x21cfa5(0x1a8)))
            : ((_0x34e3d1[_0x21cfa5(0x19e)][_0x21cfa5(0x1c2)] =
                _0x21cfa5(0x1a5)),
              _0x341e98[_0x21cfa5(0x1ae)][_0x21cfa5(0x18e)](_0x21cfa5(0x1a5)));
        _0x533ca8 === _0x3c970d[_0x21cfa5(0x19d)] - 0x1 &&
          _0x34e3d1[_0x21cfa5(0x1ad)](
            "transitionend",
            () => {
              startInteraction(), checkWinLose(_0x1694b6, _0x3c970d);
            },
            { once: !![] }
          );
      },
      { once: !![] }
    );
}
function getActiveTiles() {
  const _0x151344 = _0x8cdc03;
  return guessGrid[_0x151344(0x1be)](_0x151344(0x19a));
}
function setActiveTiles() {
  const _0x467e20 = _0x8cdc03,
    _0x190afd = guessGrid["querySelectorAll"](_0x467e20(0x18f));
  for (
    let _0x968772 = 0x0;
    _0x968772 < _0x190afd[_0x467e20(0x19d)];
    _0x968772++
  ) {
    (_0x190afd[_0x968772][_0x467e20(0x1a1)] = ""),
      delete _0x190afd[_0x968772]["dataset"][_0x467e20(0x1c2)],
      delete _0x190afd[_0x968772][_0x467e20(0x19e)][_0x467e20(0x1ab)];
  }
}
function showAlert(_0x3ef8cf, _0x43ea30 = 0x3e8) {
  const _0x1a84ed = _0x8cdc03,
    _0x10ea97 = document["createElement"](_0x1a84ed(0x187));
  (_0x10ea97[_0x1a84ed(0x1a1)] = _0x3ef8cf),
    _0x10ea97[_0x1a84ed(0x1ae)][_0x1a84ed(0x18e)]("alert"),
    alertContainer[_0x1a84ed(0x18a)](_0x10ea97);
  if (_0x43ea30 == null) return;
  setTimeout(() => {
    const _0x133bfc = _0x1a84ed;
    _0x10ea97[_0x133bfc(0x1ae)]["add"](_0x133bfc(0x1a7)),
      _0x10ea97["addEventListener"](_0x133bfc(0x19f), () => {
        _0x10ea97["remove"]();
      });
  }, _0x43ea30);
}
function shakeTiles(_0x1b5777) {
  const _0x49cce = _0x8cdc03;
  _0x1b5777[_0x49cce(0x188)]((_0x176881) => {
    const _0x405f29 = _0x49cce;
    _0x176881["classList"][_0x405f29(0x18e)](_0x405f29(0x1b5)),
      _0x176881["addEventListener"](
        _0x405f29(0x19b),
        () => {
          const _0x2d0797 = _0x405f29;
          _0x176881[_0x2d0797(0x1ae)]["remove"](_0x2d0797(0x1b5));
        },
        { once: !![] }
      );
  });
}
function checkWinLose(_0x1618ab, _0x3b6080) {
  const _0x2c3b5a = _0x8cdc03;
  if (_0x1618ab === targetWord) {
    (document["querySelector"](_0x2c3b5a(0x1c1))[_0x2c3b5a(0x191)] =
      "https://bit.ly/3QhSfnl"),
      (document[_0x2c3b5a(0x190)](".res")["className"] += _0x2c3b5a(0x1b2)),
      (document[_0x2c3b5a(0x190)](_0x2c3b5a(0x192))["innerHTML"] =
        _0x2c3b5a(0x1b0)),
      showAlert("Yay\x20you\x20got\x20that\x20right!", null),
      danceTiles(_0x3b6080),
      stopInteraction();
    return;
  }
  const _0x5521e9 = guessGrid[_0x2c3b5a(0x1be)](_0x2c3b5a(0x197));
  _0x5521e9[_0x2c3b5a(0x19d)] === 0x0 &&
    (showAlert(_0x2c3b5a(0x196), 0x7d0), setActiveTiles(), startInteraction());
}
function danceTiles(_0x40cdd0) {
  const _0x4d3548 = _0x8cdc03;
  _0x40cdd0[_0x4d3548(0x188)]((_0x53f31b, _0x4d6854) => {
    setTimeout(() => {
      const _0x580231 = _0x4e98;
      _0x53f31b[_0x580231(0x1ae)][_0x580231(0x18e)](_0x580231(0x1ba)),
        _0x53f31b["addEventListener"](
          _0x580231(0x19b),
          () => {
            const _0x432c61 = _0x580231;
            _0x53f31b[_0x432c61(0x1ae)][_0x432c61(0x194)](_0x432c61(0x1ba));
          },
          { once: !![] }
        );
    }, (_0x4d6854 * DANCE_ANIMATION_DURATION) / 0x5);
  });
}
