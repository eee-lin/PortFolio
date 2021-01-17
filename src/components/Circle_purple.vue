<template>
  <div
    class="container"
    :style="{
      transform: `translate(${x}px, ${y}px) scale(${scaleX}, ${scaleY})`,
    }"
  >
    <div class="pink-radius"></div>
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
.pink-radius {
  width: 100px;
  height: 100px;
  line-height: 200px;
  background-color: rgb(250, 103, 194);
  border-radius: 50%;
  opacity: 0.2;
  /* border-radius: 30% 70% 35% 65% / 50% 50% 50% 50%; */
  color: #fff;
  text-align: center;
}
</style>
