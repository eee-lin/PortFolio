<template>
  <img
    class="move-root"
    src="../assets/circle2.svg"
    alt="円"
    :style="{
      transform: `translate(${x}px, ${y}px) scale(${scaleX}, ${scaleY}) rotate(${rotate}deg)`,
    }"
  />
</template>

<style lang="scss" scoped>
.move-root {
  position: absolute; //絶対配置
  left: 0;
  top: 0;
  //transform: translate(100px, 100px); //座標を指定
  //CSSでアニメーションをするときにはできる限りtransformを使う
}
</style>

<script>
export default {
  name: "Move",
  props: {
    x: { type: Number, default: 100 },
    y: { type: Number, default: 100 },
    scaleX: { type: Number, default: 1.0 },
    scaleY: { type: Number, default: 1.0 },
    rotate: { type: Number, default: 0 },
  },
}
</script>
