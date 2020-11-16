<template>
  <!-- <div class="border-radius"></div> -->
  <!-- <svg viewbox="0 0 300 300" width="300" height="300">
  <line x1=100 y1=100 x2=200 y2=200 stroke="black"></line>
  </svg> -->
  <svg viewbox="0 0 300 300" width="300" height="300">
    <circle r="50" cx="150" cy="150" :class="{ active: active }"></circle>
    <!-- @mouseenter="active = !active" -->
  </svg>
</template>

<script>
export default {
  name: "Move",
  props: {
    x: { type: Number, default: 100 },
    y: { type: Number, default: 100 },
    scaleX: { type: Number, default: 1.0 },
    scaleY: { type: Number, default: 1.0 },
  },
  data() {
    return {
      active: false,
    }
  },

  methods: {
    someMethod() {
      if (this.active === false) {
        this.active = true
      } else {
        this.active = false
      }
    },
  },
  mounted: function() {
    this.updateMessageTimer = setInterval(this.someMethod, 2000)
  },
}
</script>

<style lang="scss" scoped>
.objects {
  position: absolute;
  left: 0;
  top: 0;
}

circle {
  fill: #333;
  transition: all 0.4s cubic-bezier(0.96, 0.04, 0.04, 0.96);
  stroke: rgb(119, 0, 255);
  stroke-width: 1px;
  opacity: 0.5;
}
.active {
  fill: white;
  stroke-width: 50px;
}
</style>
