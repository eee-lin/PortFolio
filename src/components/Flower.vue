<template>
  <div class="container">
    <kinesis-container>
      Here, you can put
      <kinesis-element :strength="20">
        美味しさの魔法
      </kinesis-element>
      <kinesis-element :strength="20">
        <div class="border-radius"></div>
      </kinesis-element>
    </kinesis-container>
    <!-- <kinesis-container :audio="audio">
      <kinesis-audio :audioIndex="10">
        <kinesis-element :strength="10" type="depth">
          <img
            class="circle-root"
            src="@/assets/circle3.svg"
            alt="circle"
            :style="{
              transform: `translate(${x}px, ${y}px) scale(${scaleX}, ${scaleY})`,
            }"
          />
        </kinesis-element>
      </kinesis-audio>
      ...いう
    </kinesis-container> -->
    <kinesis-container event="scroll">
      <!-- <kinesis-element
        tag="img"
        :transformOrigin="sunOrigin"
        :strength="100"
        type="rotate"
      /> -->
      <!-- <img class="move-root" src="../assets/circle2.svg" alt="円" /> -->
      <!-- <kinesis-element
        :transformOrigin="earthmoonOrigin"
        :strength="800"
        type="rotate"
      > -->
        <kinesis-element
          tag="img"
          :src="moon"
          :transformOrigin="moonOrigin"
          :strength="1200"
          type="rotate"
        />
        <img
          class="circle-root"
          src="@/assets/circle3.svg"
          alt="circle"
          :style="{
            transform: `translate(${x}px, ${y}px) scale(${scaleX}, ${scaleY})`,
          }"
        />
      </kinesis-element>
    </kinesis-container>
    <KinesisDistance :strength="50" :distance="100" />
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
.border-radius {
  width: 200px;
  height: 200px;
  line-height: 200px;
  background-color: yellow;
  border-radius: 50%;
  /* border-radius: 30% 70% 35% 65% / 50% 50% 50% 50%; */
  color: #fff;
  text-align: center;
}

svg {
  display: block;
}
polygon {
  fill: #41b883;
}
circle {
  fill: transparent;
  stroke: #35495e;
}
</style>
