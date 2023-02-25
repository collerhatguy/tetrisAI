const levelToMsScalling = [
  0.01667 / (60 / 1000),
  0.021017 / (60 / 1000),
  0.026977 / (60 / 1000),
  0.035256 / (60 / 1000),
  0.04693 / (60 / 1000),
  0.06361 / (60 / 1000),
  0.0879 / (60 / 1000),
  0.1236 / (60 / 1000),
  0.1775 / (60 / 1000),
  0.2598 / (60 / 1000),
  0.388 / (60 / 1000),
  0.59 / (60 / 1000),
  0.92 / (60 / 1000),
  1.46 / (60 / 1000),
  2.36 / (60 / 1000),
];
// g = block / frame
// frame = (1 / 60)s
// frame = (16.6666666667) ms
// block = 1
// g = 1 / 60t(s)
// 0.01667 = 1 / 60t
// t = 1 / .01667
// t = 59.9880023995 / 60
// 0.021017 = 1 / 60t
// t = 1 / 0.021017 / 60
// t = 47.5805300471 / 60
// t = .79
// t = 1000 / G / 60T
