bubbly({
    // colorStart: '#fff4e6',
    // colorStop: '#ffe9e4',
    // blur: 4,
    // compose: 'source-over',
    // bubbleFunc:() => `hsla(${Math.random() * 50}, 100%, 50%, .3)`
    colorStart: "#fff",
    colorStop: "#fff",
    blur: 1,
    bubbles: 20,
    compose: "source-over",
    shadowColor: "#fff",
    radiusFunc: () => Math.random() * 15,
    bubbleFunc: () => `hsla(${Math.random() * 360}, 100%, 50%, .5)`, // 色相,彩度,明度,透明度
  });