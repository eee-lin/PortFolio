<template>
  <p class="resizeimage">
    <img class="witch-root" src="../assets/export.svg" alt="美味しいの魔法" />
  </p>
</template>

<style lang="scss">
.witch-root {
  position: absolute; //絶対配置
  left: 10%;
  top: 0;
  // transform: translate(10%, 0px); //座標を指定
  //CSSでアニメーションをするときにはできる限りtransformを使う
}
.resizeimage img {
  width: 50vw;
}
</style>
