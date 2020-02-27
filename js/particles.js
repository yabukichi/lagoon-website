bubbly({
    colorStart: "#fff",
    colorStop: "#fff",
    blur: 1,
    bubbles: 13,
    compose: "source-over",
    shadowColor: "#fff",
    radiusFunc: () => Math.random() * 8,
    bubbleFunc: () => `hsla(${Math.random() * 360}, 100%, 50%, .5)`, // 色相,彩度,明度,透明度
  });