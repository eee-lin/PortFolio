<template>
  <!-- <img
    class="circle-root"
    src="@/assets/export2.svg"
    alt="circle"
    :style="{
      transform: `translate(${x}px, ${y}px) scale(${scaleX}, ${scaleY}) rotate(${rotate}deg)`,
    }"
  /> -->
  <!-- <div v-bind:style="{ width: activeColor, fontSize: fontSize + 'px' }"> -->
  <div v-bind:style="styleObject">
    <!-- <span id="box1"></span> -->
    <img
      class="circle-root"
      src="@/assets/circle3.svg"
      alt="circle"
      :style="{
        transform: `translate(${x}px, ${y}px) scale(${scaleX}, ${scaleY})`,
      }"
    />
  </div>
</template>

<style lang="scss" scoped>
.circle-root {
  position: absolute; //絶対配置
  left: -100px;
  top: 100px;
  width: 70%;
  height: 70%;
  // transform: translate(400px, 100px); transformが効かない
  display: inline-block;
  animation: 10s linear infinite rotation1;
}

@keyframes rotation1 {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

<script>
export default {
  name: "circle1",
  data() {
    return {
      // styleObject: {
      //   width: "",
      //   height: "13px",
      //   transform: `translate(${x}px, ${y}px) scale(${scaleX}, ${scaleY})`,
      // },
    }
  },
  props: {
    x: { type: Number, default: 100 },
    y: { type: Number, default: 100 },
    scaleX: { type: Number, default: 1.0 },
    scaleY: { type: Number, default: 1.0 },
  },
  // methods: {
  //   someMethod() {
  //     if (this.active === false) {
  //       this.active = true
  //     } else {
  //       this.active = false
  //     }
  //   },
  // },
  // mounted: function() {
  //   this.updateMessageTimer = setInterval(this.someMethod, 2000)
  // },
}
</script>
