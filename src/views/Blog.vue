<template>
  <div class="blog">
    <v-card class="mx-auto mb-5" max-width="900">
      <a
        href="https://note.com/yilycle"
        target="_blank"
        rel="noopener noreferrer"
      >
        <v-img src="../assets/サファイヤの森.jpg" max-height="500px"></v-img>
      </a>
      <div class="note">
        <v-icon color="teal lighten-2" max-width="10vw">
          mdi-note
        </v-icon>
        <v-card-subtitle>
          noteでブログを書いています。
        </v-card-subtitle>
      </div>

      <v-card-actions>
        <v-btn
          href="https://note.com/yilycle"
          target="_blank"
          rel="noopener noreferrer"
          color="orange lighten-2"
          text
        >
          Explore
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            日々が喧騒。しみじみとした無常観。そんな世界の中で生きている。環境が変わるなら自分も変わらなくては。
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
    <v-card class="mx-auto" max-width="900">
      <a href="http://rintoharu.com/" target="_blank" rel="noopener noreferrer">
        <v-img src="../assets/top_image2.png" max-height="500px"></v-img>
      </a>
      <div class="note">
        <v-icon color="deep-orange lighten-2" max-width="10vw">
          mdi-flower-poppy
        </v-icon>
        <v-card-subtitle>
          2021年3月から"Rintoharu"をはじめました。
        </v-card-subtitle>
      </div>
      <v-spacer></v-spacer>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false,
  }),
}
</script>

<style>
.blog {
  margin-top: 30px;
}

.note {
  display: flex;
  justify-content: center;
}
</style>
