<template>
  <div class="home">
    <Circle1 :x="700" :y="100" :scale-x="0.5" :scale-y="0.5"></Circle1>
    <!-- <Circle2 :x="300" :y="-300" :scale-x="0.2" :scale-y="0.2"></Circle2> -->
    <MoveObjects :x="800" :y="100" :scale-x="1.0" :scale-y="1.0"></MoveObjects>
    <!-- <Move :x="100" :y="100" :scale-x="1.5" :scale-y="1.5" :rotate="45"></Move> -->
    <Witch></Witch>
    <!-- <Flower :x="-400" :y="-300" :scale-x="0.5" :scale-y="0.5"></Flower> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import Move from "@/components/Move.vue"
import Witch from "@/components/Witch.vue"
// import Flower from "@/components/Flower.vue"
import MoveObjects from "@/components/MoveObjects.vue"
import Circle1 from "@/components/Circle.vue"
// import Circle2 from "@/components/Circle_purple.vue"

export default {
  name: "Home",
  components: {
    Witch,
    // Move,
    // Flower,
    MoveObjects,
    Circle1,
    // Circle2,
  },
}
</script>
