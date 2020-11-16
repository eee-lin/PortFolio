<template>
  <div class="home">
    <kinesis-container>
      <div class="kinesis">
        <kinesis-element :strength="-20">
          <div class="radius green"></div
        ></kinesis-element>
        <kinesis-element :strength="10">
          <div class="radius blue"></div
        ></kinesis-element>
        <kinesis-element :strength="-10">
          <Flower
            :x="30"
            :y="0"
            :scale-x="0.8"
            :scale-y="0.8"
          ></Flower></kinesis-element
        ><kinesis-element :strength="20">
          <!-- <Move :x="100" :y="100" :scale-x="1.5" :scale-y="1.5" :rotate="45"></Move> -->
        </kinesis-element>
      </div>
      <div class="kinesis-under">
        <kinesis-element :strength="-10">
          <div class="circle"></div
        ></kinesis-element>
        <kinesis-element :strength="20">
          <div class="radius pink"></div
        ></kinesis-element>
      </div>
      <Witch></Witch>
      <div class="title">
        <kinesis-element :strength="-5" class="title-element">
          <span>R</span>
        </kinesis-element>
        <kinesis-element :strength="8" class="title-element">
          <span>I</span>
        </kinesis-element>
        <kinesis-element :strength="-15" class="title-element">
          <span>N</span>
        </kinesis-element>
        <kinesis-element :strength="15" class="title-element">
          <span>Z</span>
        </kinesis-element>
        <kinesis-element :strength="-20" class="title-element">
          <span>O</span>
        </kinesis-element>
      </div>
    </kinesis-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import Move from "@/components/Move.vue"
import Witch from "@/components/Witch.vue"
import Flower from "@/components/Flower.vue"
// import Circle1 from "@/components/Circle.vue"
// import Circle from "@/components/Circle_purple.vue"

export default {
  name: "Home",
  components: {
    Witch,
    // Move,
    Flower,
    // Circle1,
    // Circle,
  },
}
</script>

<style lang="scss" scoped>
/* メディアクエリブレークポイント */
$xs: 600;

$sp-max: calc($xs - 1) px;

/* スマホ */
@mixin display_sp {
  @media (max-width: $sp-max) {
    @content;
  }
}

.home {
  width: 100%;
}

.kinesis {
  display: flex;
  padding: 10px;
}

.kinesis-under {
  display: flex;
  padding: 10px;
  justify-content: space-between;
}

.title {
  position: absolute;
  right: 10vw;
  top: 20vw;
  display: flex;
  /* width: 50%; */
  text-align: center;
  margin-left: auto;
  max-width: 500px;
}

.radius {
  width: 200px;
  height: 200px;
  line-height: 200px;
  border-radius: 50%;
  opacity: 0.2;
  /* border-radius: 30% 70% 35% 65% / 50% 50% 50% 50%; */
  color: #fff;
  text-align: center;
}
.green {
  background-color: #41b883;
  width: 10vw;
  height: 10vw;
}

.blue {
  background-color: #3dabcc;
  width: 30vw;
  height: 30vw;
}

.title-element {
  display: inline;
  text-align: center;
  font-size: 8vw;
  padding: 1vw;
}

.title span {
  color: 000;
  font-family: Verdana, sans-serif;
}

.circle {
  display: inline-block;
  width: 15vw;
  height: 15vw;
  text-align: center;
  border-radius: 50%;
  border: solid 2vw rgb(119, 0, 255);
  opacity: 0.3;
}
.pink {
  background-color: rgb(250, 103, 194);
  width: 10vw;
  height: 10vw;
}

// スマホのときのみ縦にする(画像->タイトル)
.title {
  @include display_sp {
    position: none;
    right: none;
    top: none;
    display: block;
    /* width: 50%; */
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 600px;
  }
}

.resizeimage img {
  @include display_sp {
    width: 100vw;
  }
}

.witch-root {
  @include display_sp {
    position: none;
    left: none;
    top: none;
  }
}
</style>
