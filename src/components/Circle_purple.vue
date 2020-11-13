<template>
  <kinesis-container>
    <kinesis-element :strength="20">
      <img
        class="circle-root"
        src="@/assets/export2.svg"
        alt="circle"
        :style="{
          transform: `translate(${x}px, ${y}px) scale(${scaleX}, ${scaleY})`,
        }"
      />
    </kinesis-element>
  </kinesis-container>
</template>

<style lang="scss" scoped>
.circle-root {
  position: absolute; //絶対配置
  left: 0;
  top: 0;
}
</style>

<script>
export default {
  name: "circle1",
  props: {
    x: { type: Number, default: 100 },
    y: { type: Number, default: 100 },
    scaleX: { type: Number, default: 1.0 },
    scaleY: { type: Number, default: 1.0 },
  },
}
</script>
