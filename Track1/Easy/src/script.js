const _0x40fd13 = _0x3658;
(function (_0x4228e5, _0x4722dd) {
  const _0x469e49 = _0x3658,
    _0x50a0ab = _0x4228e5();
  while (!![]) {
    try {
      const _0xa2c689 =
        (-parseInt(_0x469e49(0xf8)) / 0x1) *
          (-parseInt(_0x469e49(0x104)) / 0x2) +
        (-parseInt(_0x469e49(0x111)) / 0x3) *
          (parseInt(_0x469e49(0xf5)) / 0x4) +
        parseInt(_0x469e49(0x10f)) / 0x5 +
        (-parseInt(_0x469e49(0xff)) / 0x6) *
          (-parseInt(_0x469e49(0xf6)) / 0x7) +
        parseInt(_0x469e49(0x101)) / 0x8 +
        parseInt(_0x469e49(0x109)) / 0x9 +
        (parseInt(_0x469e49(0x103)) / 0xa) *
          (-parseInt(_0x469e49(0x105)) / 0xb);
      if (_0xa2c689 === _0x4722dd) break;
      else _0x50a0ab["push"](_0x50a0ab["shift"]());
    } catch (_0x136a09) {
      _0x50a0ab["push"](_0x50a0ab["shift"]());
    }
  }
})(_0x13d2, 0x3ef1b);
import "./style.css";
function _0x13d2() {
  const _0x4ede29 = [
    "3155958IQLGxx",
    "guessButton",
    "Lower",
    "querySelector",
    "keyCode",
    "#guessButton",
    "2546480MwCadz",
    "onbeforeunload",
    "9dctUVY",
    "215480jrQbUG",
    "28RkWjmU",
    "onload",
    "267827YXFhBw",
    "preventDefault",
    "display",
    "click",
    "Higher",
    "none",
    "value",
    "427506GIatig",
    "numInput",
    "1783120WKNLLs",
    "addEventListener",
    "9730grpXax",
    "2XShesg",
    "13750TTDOgE",
    "onkeydown",
    "shorturl.at/tAJK6",
    "getElementById",
  ];
  _0x13d2 = function () {
    return _0x4ede29;
  };
  return _0x13d2();
}
(window[_0x40fd13(0x110)] = function () {
  return "All\x20progress\x20will\x20be\x20lost\x20if\x20you\x20leave!";
}),
  (window[_0x40fd13(0xf7)] = function () {
    const _0x558958 = _0x40fd13;
    document[_0x558958(0x106)] = function (_0x5ca259) {
      const _0x4674da = _0x558958;
      return (_0x5ca259["which"] || _0x5ca259[_0x4674da(0x10d)]) != 0x74;
    };
  });
function _0x3658(_0x581f57, _0x1c0b18) {
  const _0x13d28d = _0x13d2();
  return (
    (_0x3658 = function (_0x365817, _0x36ab68) {
      _0x365817 = _0x365817 - 0xf5;
      let _0x560260 = _0x13d28d[_0x365817];
      return _0x560260;
    }),
    _0x3658(_0x581f57, _0x1c0b18)
  );
}
let counter = 0x0,
  db,
  name;
var input = document["getElementById"]("numInput");
input[_0x40fd13(0x102)]("keyup", function (_0x3f914e) {
  const _0x517918 = _0x40fd13;
  _0x3f914e["keyCode"] === 0xd &&
    (_0x3f914e[_0x517918(0xf9)](),
    document[_0x517918(0x108)](_0x517918(0x10a))[_0x517918(0xfb)]());
});
const getInput = () => {
    const _0x1de911 = _0x40fd13;
    counter++, (document[_0x1de911(0x108)]("counter")["innerHTML"] = counter);
    let _0x42e838 = 0x0;
    _0x42e838 = document[_0x1de911(0x108)](_0x1de911(0x100))[_0x1de911(0xfe)];
    if (_0x42e838 > 0x312) console["log"](_0x1de911(0x10b));
    else {
      if (_0x42e838 < 0x312) console["log"](_0x1de911(0xfc));
      else
        _0x42e838 == 0x312 &&
          ((document["getElementById"]("theGuessing")["style"][
            _0x1de911(0xfa)
          ] = _0x1de911(0xfd)),
          console["log"](_0x1de911(0x107)));
    }
    document[_0x1de911(0x108)]("numInput")["value"] = "";
  },
  inputBtn = document[_0x40fd13(0x10c)](_0x40fd13(0x10e));
inputBtn["addEventListener"]("click", getInput);
