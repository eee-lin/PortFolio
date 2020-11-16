<template>
  <div class="works">
    <v-container py-6 px-5>
      <v-row justify="center" align-content="center">
        <v-col cols="12" xs="7" sm="10" md="10" lg="10" offset-xl="1">
          <h1 class="pagetitle display-3 mt-8 mb-12">
            Works
          </h1>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="11" sm="6" align="center">
          <v-hover v-slot:default="{ hover }">
            <v-card max-width="530">
              <v-img src="../assets/profile.png" max-height="255">
                <v-expand-transition>
                  <v-card
                    v-if="hover"
                    height="100%"
                    width="100%"
                    class="d-flex transition-fast-in-fast-out v-card--reveal title white--text"
                    href="https://portfolio-4c466.web.app"
                    target="_blank"
                    rel="noopener"
                  >
                    Learn More
                    <v-icon small class="mx-2">
                      open_in_new
                    </v-icon>
                  </v-card>
                </v-expand-transition>
              </v-img>

              <v-card-title class="text-left">
                <h3 class="headline">
                  My Portfolio Site
                </h3>
              </v-card-title>
              <v-card-text class="text-left">
                <p class="mb-1">
                  現在閲覧されている，ポートフォリオサイトです。
                </p>
                <p class="mb-1">
                  Vue.jsで作成しました。UIフレームワークはVuetifyです。
                </p>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>

        <v-col cols="11" sm="6" align="center">
          <v-hover v-slot:default="{ hover }">
            <v-card max-width="530">
              <v-img src="../assets/ProfyWithTitle.jpg" max-height="255">
                <v-expand-transition>
                  <v-card
                    v-if="hover"
                    height="100%"
                    width="100%"
                    class="d-flex transition-fast-in-fast-out v-card--reveal title white--text"
                    href="https://apps.apple.com/jp/app/profy/id1519268737"
                    target="_blank"
                    rel="noopener"
                  >
                    Learn More
                    <v-icon small class="mx-2">
                      open_in_new
                    </v-icon>
                  </v-card>
                </v-expand-transition>
              </v-img>

              <v-card-title class="text-left">
                <h3 class="headline">
                  Profy
                </h3>
              </v-card-title>
              <v-card-text class="text-left">
                <p class="mb-1">
                  昔、学校で流行っていた「プロフィール帳」のアプリ版です。
                </p>
                <p class="mb-1">
                  お互いを深く知れば、その分交流が深まります。
                  Profyを用いて、素晴らしい人間関係を築き上げましょう。
                </p>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
    <v-container py-6 px-5>
      <v-row justify="center" align-content="center">
        <v-col cols="12" xs="7" sm="10" md="10" lg="10" offset-xl="1">
          <h1 class="pagetitle display-3 mt-8 mb-8">
            Skills
          </h1>
        </v-col>

        <v-col
          xs="12"
          sm="6"
          md="3"
          lg="3"
          v-for="skill in skills"
          :key="skill.title"
        >
          <template>
            <v-hover>
              <v-card
                slot-scope="{ hover }"
                class="text-xs-center ma-4"
                :class="`elevation-${hover ? 12 : 4}`"
                color="indigo"
              >
                <v-card-title>
                  <div class="mx-auto">
                    <v-progress-circular
                      :value="skill.value"
                      :color="skill.color"
                      :rotate="-90"
                      width="15"
                      size="100"
                    >
                      {{ skill.value }}
                    </v-progress-circular>
                  </div>
                </v-card-title>

                <v-card-actions>
                  <v-layout justify-space-around>
                    <div class="headline">
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                          <span
                            :color="skill.color"
                            :class="`${skill.color}--text`"
                            class="subtitle-1"
                            v-on="on"
                          >
                            <v-icon size="18">
                              {{ skill.icon }}
                            </v-icon>
                            {{ skill.title }}
                          </span>
                        </template>
                        <span>{{ skill.duration }}</span>
                      </v-tooltip>
                    </div>
                  </v-layout>
                </v-card-actions>
              </v-card>
            </v-hover>
          </template>
        </v-col>
      </v-row>

      <div class="text-center pb-6 px-5">
        <v-btn
          x-large
          color="purple lighten-2"
          rounded
          to="/"
          class="mx-4 my-2"
        >
          <v-icon class="mr-2">
            home
          </v-icon>
          back home
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          title: "Swift",
          value: 0,
          absoluteValue: 60,
          color: "white",
          icon: "fab fa-python",
          show: false,
          duration: "2 years",
        },
        {
          title: "Python",
          value: 0,
          absoluteValue: 50,
          color: "white",
          icon: "fab fa-python",
          show: false,
          duration: "2 years",
        },
        // 略
        {
          title: "Vue.js",
          value: 0,
          absoluteValue: 40,
          color: "white",
          icon: "",
          show: false,
          duration: "3 months",
        },
        {
          title: "JavaScript",
          value: 0,
          absoluteValue: 20,
          color: "white",
          icon: "",
          show: false,
          duration: "3 months",
        },
        {
          title: "Blender",
          value: 0,
          absoluteValue: 30,
          color: "white",
          icon: "",
          show: false,
          duration: "2 months",
        },
        {
          title: "HTML",
          value: 0,
          absoluteValue: 80,
          color: "white",
          icon: "",
          show: false,
          duration: "6 months",
        },
        {
          title: "CSS",
          value: 0,
          absoluteValue: 50,
          color: "white",
          icon: "",
          show: false,
          duration: "6 months",
        },
        {
          title: "C言語",
          value: 0,
          absoluteValue: 50,
          color: "white",
          icon: "",
          show: false,
          duration: "1 year",
        },
      ],
      interval: {},
      expand: false,
    }
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  mounted() {
    let timesRun = 0
    this.interval = setInterval(() => {
      if (timesRun === 10) {
        clearInterval(this.interval)
        return
      }
      timesRun += 1
      this.skills.forEach((skill) => {
        if (skill.absoluteValue !== skill.value) {
          skill.value += 10
        }
      })
    }, 300)
  },
}
</script>

<style lang="scss" scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  // opacity: 0.5;
  background-color: rgba(32, 32, 32, 0.4);
  position: absolute;
  width: 100%;
}
</style>
