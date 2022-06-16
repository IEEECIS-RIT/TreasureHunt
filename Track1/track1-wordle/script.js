const _0x4e2c19 = _0x2f65;
(function (_0x260575, _0x2f07ca) {
  const _0x210e0a = _0x2f65,
    _0xfe9323 = _0x260575();
  while (!![]) {
    try {
      const _0x55d3d3 =
        parseInt(_0x210e0a(0xdf)) / 0x1 +
        (-parseInt(_0x210e0a(0x10f)) / 0x2) *
          (-parseInt(_0x210e0a(0xe0)) / 0x3) +
        parseInt(_0x210e0a(0x10a)) / 0x4 +
        -parseInt(_0x210e0a(0xd4)) / 0x5 +
        (-parseInt(_0x210e0a(0xd9)) / 0x6) *
          (parseInt(_0x210e0a(0x114)) / 0x7) +
        (parseInt(_0x210e0a(0x103)) / 0x8) * (parseInt(_0x210e0a(0xfa)) / 0x9) +
        -parseInt(_0x210e0a(0xec)) / 0xa;
      if (_0x55d3d3 === _0x2f07ca) break;
      else _0xfe9323["push"](_0xfe9323["shift"]());
    } catch (_0x1b629b) {
      _0xfe9323["push"](_0xfe9323["shift"]());
    }
  }
})(_0xfdfb, 0xc5b83);
const WORD_LENGTH = 0x5,
  FLIP_ANIMATION_DURATION = 0x1,
  DANCE_ANIMATION_DURATION = 0x1,
  keyboard = document[_0x4e2c19(0xed)](_0x4e2c19(0xfd)),
  alertContainer = document[_0x4e2c19(0xed)](_0x4e2c19(0xe5)),
  guessGrid = document[_0x4e2c19(0xed)](_0x4e2c19(0xeb)),
  offsetFromDate = new Date(0x7e6, 0x0, 0x1),
  msOffset = Date[_0x4e2c19(0xf7)]() - offsetFromDate,
  dayOffset = msOffset / 0x3e8 / 0x3c / 0x3c / 0x18,
  targetWord = "eight";
startInteraction();
function startInteraction() {
  const _0x2b80b4 = _0x4e2c19;
  document["addEventListener"]("click", handleMouseClick),
    document["addEventListener"](_0x2b80b4(0xfb), handleKeyPress);
}
function stopInteraction() {
  const _0x113475 = _0x4e2c19;
  document[_0x113475(0x112)]("click", handleMouseClick),
    document[_0x113475(0x112)](_0x113475(0xfb), handleKeyPress);
}
function handleMouseClick(_0x47005c) {
  const _0x4fe13e = _0x4e2c19;
  console[_0x4fe13e(0xf5)](_0x47005c[_0x4fe13e(0x111)][_0x4fe13e(0x106)]);
  if (_0x47005c[_0x4fe13e(0x111)][_0x4fe13e(0x106)]("[data-key]")) {
    pressKey(_0x47005c[_0x4fe13e(0x111)][_0x4fe13e(0x10e)][_0x4fe13e(0xf2)]);
    return;
  }
  if (_0x47005c[_0x4fe13e(0x111)]["matches"](_0x4fe13e(0xdb))) {
    submitGuess();
    return;
  }
  if (_0x47005c[_0x4fe13e(0x111)][_0x4fe13e(0x106)](_0x4fe13e(0xff))) {
    deleteKey();
    return;
  }
}
function handleKeyPress(_0xc6acdf) {
  const _0x4f01cd = _0x4e2c19;
  if (_0xc6acdf[_0x4f01cd(0xf2)] === _0x4f01cd(0xe4)) {
    submitGuess();
    return;
  }
  if (
    _0xc6acdf[_0x4f01cd(0xf2)] === _0x4f01cd(0x101) ||
    _0xc6acdf[_0x4f01cd(0xf2)] === _0x4f01cd(0xe8)
  ) {
    deleteKey();
    return;
  }
  if (_0xc6acdf[_0x4f01cd(0xf2)][_0x4f01cd(0x105)](/^[a-z]$/)) {
    pressKey(_0xc6acdf["key"]);
    return;
  }
}
function _0xfdfb() {
  const _0x382f7d = [
    "Backspace",
    "flip",
    "16TjGNQI",
    "[data-letter]",
    "match",
    "matches",
    "className",
    "forEach",
    "reduce",
    "5555396MqDBCu",
    "animationend",
    "addEventListener",
    "add",
    "dataset",
    "2642fZdsUo",
    "Not\x20in\x20word\x20list",
    "target",
    "removeEventListener",
    "classList",
    "415499GFZFAS",
    "7701570KumpnY",
    "length",
    "innerHTML",
    "\x22i]",
    "hide",
    "6vTauBQ",
    "Yay\x20you\x20got\x20that\x20right!",
    "[data-enter]",
    "textContent",
    "dance",
    "createElement",
    "523531ldOBjO",
    "141bHWwKB",
    ".res",
    "includes",
    "Oops!\x20You\x20didnt\x20get\x20the\x20word!\x20Try\x20again",
    "Enter",
    "[data-alert-container]",
    "https://bit.ly/3QhSfnl",
    "letter",
    "Delete",
    "[data-state=\x22active\x22]",
    "active",
    "[data-guess-grid]",
    "10431650YcJjIj",
    "querySelector",
    "div",
    "[data-key=\x22",
    "querySelectorAll",
    "state",
    "key",
    "toLowerCase",
    "transitionend",
    "log",
    "alert",
    "now",
    "shake",
    "Not\x20enough\x20letters",
    "6652026imUasv",
    "keydown",
    ":not([data-letter])",
    "[data-keyboard]",
    "remove",
    "[data-delete]",
    "<a\x20href=\x22https://farnear.netlify.app/\x22><img\x20src=\x22https://i.imgflip.com/6j880n.jpg\x22\x20title=\x22https://farnear.netlify.app/\x22/></a>",
  ];
  _0xfdfb = function () {
    return _0x382f7d;
  };
  return _0xfdfb();
}
function pressKey(_0x2ed47c) {
  const _0x5046f9 = _0x4e2c19,
    _0x1d50b6 = getActiveTiles();
  if (_0x1d50b6["length"] >= WORD_LENGTH) return;
  const _0x4777b2 = guessGrid["querySelector"](_0x5046f9(0xfc));
  (_0x4777b2[_0x5046f9(0x10e)][_0x5046f9(0xe7)] = _0x2ed47c[_0x5046f9(0xf3)]()),
    (_0x4777b2["textContent"] = _0x2ed47c),
    (_0x4777b2[_0x5046f9(0x10e)][_0x5046f9(0xf1)] = _0x5046f9(0xea));
}
function deleteKey() {
  const _0x151dfc = _0x4e2c19,
    _0x53ae72 = getActiveTiles(),
    _0x61bcab = _0x53ae72[_0x53ae72[_0x151dfc(0xd5)] - 0x1];
  if (_0x61bcab == null) return;
  (_0x61bcab[_0x151dfc(0xdc)] = ""),
    delete _0x61bcab[_0x151dfc(0x10e)][_0x151dfc(0xf1)],
    delete _0x61bcab[_0x151dfc(0x10e)][_0x151dfc(0xe7)];
}
function submitGuess() {
  const _0x46162a = _0x4e2c19,
    _0xf5804b = [...getActiveTiles()];
  if (_0xf5804b[_0x46162a(0xd5)] !== WORD_LENGTH) {
    showAlert(_0x46162a(0xf9)), shakeTiles(_0xf5804b);
    return;
  }
  const _0x1b8872 = _0xf5804b[_0x46162a(0x109)]((_0x50e560, _0x2dccde) => {
    const _0x36842a = _0x46162a;
    return _0x50e560 + _0x2dccde[_0x36842a(0x10e)][_0x36842a(0xe7)];
  }, "");
  if (!approvedWords[_0x46162a(0xe2)](_0x1b8872)) {
    showAlert(_0x46162a(0x110)), shakeTiles(_0xf5804b);
    return;
  }
  stopInteraction(),
    _0xf5804b["forEach"]((..._0x5baecd) => flipTile(..._0x5baecd, _0x1b8872));
}
function flipTile(_0x287737, _0x4ff154, _0x261588, _0x4ec4ac) {
  const _0x4e4f53 = _0x4e2c19,
    _0x7f42d2 = _0x287737[_0x4e4f53(0x10e)][_0x4e4f53(0xe7)],
    _0x47578b = keyboard[_0x4e4f53(0xed)](
      _0x4e4f53(0xef) + _0x7f42d2 + _0x4e4f53(0xd7)
    );
  setTimeout(() => {
    const _0x25d1a3 = _0x4e4f53;
    _0x287737[_0x25d1a3(0x113)][_0x25d1a3(0x10d)](_0x25d1a3(0x102));
  }, (_0x4ff154 * FLIP_ANIMATION_DURATION) / 0x2),
    _0x287737[_0x4e4f53(0x10c)](
      _0x4e4f53(0xf4),
      () => {
        const _0xdb6815 = _0x4e4f53;
        _0x287737[_0xdb6815(0x113)]["remove"](_0xdb6815(0x102));
        if (targetWord[_0x4ff154] === _0x7f42d2)
          (_0x287737[_0xdb6815(0x10e)][_0xdb6815(0xf1)] = "correct"),
            _0x47578b[_0xdb6815(0x113)][_0xdb6815(0x10d)]("correct");
        else
          targetWord[_0xdb6815(0xe2)](_0x7f42d2)
            ? ((_0x287737[_0xdb6815(0x10e)][_0xdb6815(0xf1)] =
                "wrong-location"),
              _0x47578b[_0xdb6815(0x113)][_0xdb6815(0x10d)]("wrong-location"))
            : ((_0x287737[_0xdb6815(0x10e)]["state"] = "wrong"),
              _0x47578b[_0xdb6815(0x113)][_0xdb6815(0x10d)]("wrong"));
        _0x4ff154 === _0x261588[_0xdb6815(0xd5)] - 0x1 &&
          _0x287737[_0xdb6815(0x10c)](
            _0xdb6815(0xf4),
            () => {
              startInteraction(), checkWinLose(_0x4ec4ac, _0x261588);
            },
            { once: !![] }
          );
      },
      { once: !![] }
    );
}
function _0x2f65(_0x22e466, _0x19483b) {
  const _0xfdfb3c = _0xfdfb();
  return (
    (_0x2f65 = function (_0x2f65e3, _0x27d274) {
      _0x2f65e3 = _0x2f65e3 - 0xd4;
      let _0x325c4e = _0xfdfb3c[_0x2f65e3];
      return _0x325c4e;
    }),
    _0x2f65(_0x22e466, _0x19483b)
  );
}
function getActiveTiles() {
  const _0x186eb1 = _0x4e2c19;
  return guessGrid[_0x186eb1(0xf0)](_0x186eb1(0xe9));
}
function setActiveTiles() {
  const _0x4b2079 = _0x4e2c19,
    _0x54588f = guessGrid[_0x4b2079(0xf0)](_0x4b2079(0x104));
  for (
    let _0x5200ee = 0x0;
    _0x5200ee < _0x54588f[_0x4b2079(0xd5)];
    _0x5200ee++
  ) {
    (_0x54588f[_0x5200ee][_0x4b2079(0xdc)] = ""),
      delete _0x54588f[_0x5200ee][_0x4b2079(0x10e)]["state"],
      delete _0x54588f[_0x5200ee][_0x4b2079(0x10e)]["letter"];
  }
}
function showAlert(_0x1a629d, _0x1c0f07 = 0x3e8) {
  const _0x3fe461 = _0x4e2c19,
    _0x391eaf = document[_0x3fe461(0xde)](_0x3fe461(0xee));
  (_0x391eaf["textContent"] = _0x1a629d),
    _0x391eaf[_0x3fe461(0x113)]["add"](_0x3fe461(0xf6)),
    alertContainer["prepend"](_0x391eaf);
  if (_0x1c0f07 == null) return;
  setTimeout(() => {
    const _0x1e87eb = _0x3fe461;
    _0x391eaf[_0x1e87eb(0x113)][_0x1e87eb(0x10d)](_0x1e87eb(0xd8)),
      _0x391eaf[_0x1e87eb(0x10c)](_0x1e87eb(0xf4), () => {
        const _0x261aed = _0x1e87eb;
        _0x391eaf[_0x261aed(0xfe)]();
      });
  }, _0x1c0f07);
}
function shakeTiles(_0x2f938f) {
  const _0x5f19c9 = _0x4e2c19;
  _0x2f938f[_0x5f19c9(0x108)]((_0x530cc2) => {
    const _0x21e4ad = _0x5f19c9;
    _0x530cc2[_0x21e4ad(0x113)][_0x21e4ad(0x10d)]("shake"),
      _0x530cc2["addEventListener"](
        "animationend",
        () => {
          const _0x59e3a7 = _0x21e4ad;
          _0x530cc2[_0x59e3a7(0x113)][_0x59e3a7(0xfe)](_0x59e3a7(0xf8));
        },
        { once: !![] }
      );
  });
}
function checkWinLose(_0x1ebffe, _0x2d09d0) {
  const _0x13fd5e = _0x4e2c19;
  if (_0x1ebffe === targetWord) {
    (document[_0x13fd5e(0xed)](".heading")[_0x13fd5e(0xd6)] = _0x13fd5e(0xe6)),
      (document["querySelector"](_0x13fd5e(0xe1))[_0x13fd5e(0x107)] +=
        "\x20fade"),
      (document["querySelector"](_0x13fd5e(0xe1))[_0x13fd5e(0xd6)] =
        _0x13fd5e(0x100)),
      showAlert(_0x13fd5e(0xda), null),
      danceTiles(_0x2d09d0),
      stopInteraction();
    return;
  }
  const _0x28b560 = guessGrid[_0x13fd5e(0xf0)](":not([data-letter])");
  _0x28b560[_0x13fd5e(0xd5)] === 0x0 &&
    (showAlert(_0x13fd5e(0xe3), 0x7d0), setActiveTiles(), startInteraction());
}
function danceTiles(_0x93e6f8) {
  _0x93e6f8["forEach"]((_0x48dfaa, _0xf20900) => {
    setTimeout(() => {
      const _0x3d6840 = _0x2f65;
      _0x48dfaa[_0x3d6840(0x113)][_0x3d6840(0x10d)]("dance"),
        _0x48dfaa[_0x3d6840(0x10c)](
          _0x3d6840(0x10b),
          () => {
            const _0x1e95c8 = _0x3d6840;
            _0x48dfaa["classList"][_0x1e95c8(0xfe)](_0x1e95c8(0xdd));
          },
          { once: !![] }
        );
    }, (_0xf20900 * DANCE_ANIMATION_DURATION) / 0x5);
  });
}
