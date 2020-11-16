<template>
  <div
    class="container"
    :style="{
      transform: `translate(${x}vw, ${y}vw) scale(${scaleX}, ${scaleY})`,
    }"
  >
    <div class="yellow-radius"></div>
  </div>
</template>

<script>
export default {
  props: {
    x: { type: Number, default: 100 },
    y: { type: Number, default: 100 },
    scaleX: { type: Number, default: 1.0 },
    scaleY: { type: Number, default: 1.0 },
  },
}
</script>

<style>
.yellow-radius {
  width: 18vw;
  height: 18vw;
  line-height: 200px;
  border: solid 4vw yellow;
  /* background-color: yellow; */
  border-radius: 50%;
  opacity: 0.2;
  /* border-radius: 30% 70% 35% 65% / 50% 50% 50% 50%; */
}
</style>
