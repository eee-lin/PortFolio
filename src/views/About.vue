<template>
  <div class="about">
    <h1>About me</h1>
    <v-container py-6 px-5>
      <v-row justify="center" align-content="center">
        <v-col xs="7" sm="10" md="11" lg="12" offset-xl="1">
          <!-- <h1 class="pagetitle display-3 font-weight-bold mt-8 mb-12">
            About me
          </h1> -->

          <v-card flat>
            <v-card-actions class="justify-center">
              <!-- circular user profile pictures -->
              <v-avatar
                color="grey"
                size="230"
                class="elevation-4 mt-n10 my-icon"
              >
                <v-img src="../assets/profile.png" />
              </v-avatar>
            </v-card-actions>

            <v-card-title primary-title>
              <div class="headline">
                <span class="display-1 font-weight-bold mb-1">{{
                  myname
                }}</span>
                <div>{{ jobs }}</div>
              </div>
            </v-card-title>
            <v-card-text>
              <p>{{ hobby }}</p>
              <p>{{ boyhood }}</p>
              <p>{{ undergraduatedays }}</p>
              <p>{{ graduatedays }}</p>
              <!-- <v-btn
                href="https://www.instagram.com/lin_lin_foody/?hl=ja"
                class="ma-2"
                color="indigo"
                dark
              > -->
              <v-container style="height: 100%">
                <v-row
                  align="center"
                  justify="space-around"
                  style="height: 100%"
                >
                  <template v-for="icon in icons">
                    <a
                      v-bind:key="icon.name"
                      :href="icon.href"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <v-icon :color="icon.color" size="100px" :key="icon.name">
                        {{ icon.name }}
                      </v-icon>
                    </a>
                  </template>
                </v-row>
              </v-container>
              <!-- </v-btn> -->
            </v-card-text>

            <div class="px-2">
              <v-card-title primary-title>
                <div class="headline">
                  Activity
                </div>
              </v-card-title>
              <!-- <v-card elevation-0 max-width="500" class="mx-auto"> -->
              <v-card-text class="headline">
                <v-list three-line>
                  <v-list-item-group>
                    <v-list-item
                      v-for="(activity, i) in activities"
                      :key="i"
                      :href="activity.href"
                    >
                      <v-list-item-avatar size="24" class="mt-8">
                        <v-icon class="indigo" v-text="activity.icon" />
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title v-text="activity.text" />
                        <v-list-item-subtitle v-text="activity.subtext" />
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-card-text>
              <!-- </v-card> -->
            </div>

            <div class="px-2">
              <v-card-title primary-title>
                <div class="headline">
                  <div>
                    Education
                  </div>
                </div>
              </v-card-title>

              <v-timeline class="px-2" :dense="dense">
                <v-timeline-item
                  v-for="(item, i) in items"
                  :key="i"
                  :color="item.color"
                  :icon="item.icon"
                  fill-dot
                  large
                >
                  <v-card :color="item.color" dark>
                    <v-card-title class="body-1">
                      {{ item.title }}
                    </v-card-title>
                    <v-card-text class="white text--primary pt-4">
                      <p class="title gray">
                        {{ item.text }}
                      </p>
                      <div class="gray font-weight-bold">
                        {{ item.major }}
                      </div>
                      <div class="mt-2">
                        <!-- <v-icon class="black--text text--lighten-4">
                          calendar_today
                        </v-icon> -->
                        <span class="black--text font-weight-bold">
                          {{ item.date }}</span
                        >
                      </div>
                      <div class="text-center">
                        <v-btn
                          :color="item.color"
                          class="mx-4"
                          :href="item.href"
                          target="_blank"
                          :style="item.bt_display"
                        >
                          <v-icon class="mr-1">
                            {{ item.bt_icon }}
                          </v-icon>
                          {{ item.bt_title }}
                        </v-btn>
                      </div>
                    </v-card-text>
                  </v-card>
                </v-timeline-item>
              </v-timeline>
            </div>
          </v-card>
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
            mdi-jellyfish
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
      myname: "Rinzo",
      jobs: "Student / Creator",
      hobby: "旅行、お酒、映画鑑賞、写真撮影、ノマドカフェを探す、漫画",
      boyhood: "食べるクリエイター",
      undergraduatedays: "グルメインスタグラマーです。",
      graduatedays: "",
      items: [
        {
          color: "red lighten-2",
          icon: "mdi-book-variant",
          title: "高校",
          text: "山手学院高等学校",
          major: "普通科",
          date: "2014年4月~2017年3月",
          startdate: "2014年4月",
          bt_display: "display:none",
        },
        {
          color: "purple lighten-2",
          icon: "mdi-book-variant",
          title: "大学",
          text: "慶應義塾大学",
          major: "理工学部生命情報学科",
          date: "2017年4月~2021年3月",
          startdate: "2017年4月",
          bt_display: "display:none",
        },
        {
          color: "green lighten-1",
          icon: "mdi-book-variant",
          title: "大学院",
          text: "東京大学大学院",
          major: "学際情報学府先端表現情報学コース",
          date: "2021年4月~2023年3月",
          startdate: "2021年4月",
          bt_display: "display:none",
        },
      ],
      icons: [
        {
          color: "pink lighten-1",
          name: "mdi-instagram",
          href: "https://www.instagram.com/lin_lin_foody/?hl=ja",
        },
        {
          color: "blue lighten-3",
          name: "mdi-twitter",
          href: "https://twitter.com/arima_rinzo",
        },
        {
          color: "blue darken-4",
          name: "mdi-facebook",
          href: "https://www.facebook.com/profile.php?id=100015936071529",
        },
        {
          color: "grey darken-3",
          name: "mdi-github",
          href: "https://github.com/eee-lin",
        },
        {
          color: "teal lighten-2",
          name: "mdi-note",
          href: "https://note.com/yilycle",
        },
      ],
      activities: [
        {
          text: "卓球部",
          subtext: "中学校生活を卓球に捧げた",
          href: "",
          icon: "",
        },
        {
          text: "写真部",
          subtext: "高校生でカメラに目覚める",
          href: "",
          icon: "",
        },
        {
          text: "少林寺拳法部",
          subtext: "黒帯",
          href: "",
          icon: "",
        },

        {
          text: "オックスフォード大学に短期留学",
          subtext:
            "2018年8月にオックスフォード大学リンカーンカレッジで演劇とディベートを学んだ",
          href: "",
          icon: "",
        },
        {
          text: "今度はスタンフォード大学に短期留学",
          subtext: "2019年2月にスタンフォード大学でデザインシンキングを学んだ",
          href: "",
          icon: "",
        },
        {
          text: "TEDxKeioUHiyoshi",
          subtext: "2019年10月にTEDx「UNFOLD」を開催",
          href: "https://www.ted.com/tedx/events/32080",
          icon: "",
        },
        {
          text: "GeekSalon",
          subtext: "2020年3月からiPhoneコースメンターとしてインターンを始める",
          href: "https://geek-salon.com/",
          icon: "",
        },
        {
          text: "AIコース立ち上げ",
          subtext: "2020年11月からGeekSalonでAIコースを新しく立ち上げる",
          href: "https://geek-salon.com/",
          icon: "",
        },
        {
          text: "CO.NECT ブロックチェーン学生起業家支援プログラム 5期生",
          subtext:
            "ブロックチェーンに関する起業を志す学生を支援する約4ヶ月半のプログラムの5期生として採択される",
          href: "https://www.blockchain.t.u-tokyo.ac.jp/",
          icon: "",
        },
      ],
      interval: {},
      expansionPanel: true,
    }
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  computed: {
    dense() {
      return this.$vuetify.breakpoint.smAndDown
    },
  },
}
</script>

<style>
.headline {
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
}

.gray {
  color: #424242;
}

.my-icon {
  transition: all 1s linear 0s;
  border-radius: 50%;
  cursor: pointer;
}

.my-icon:hover {
  transform: rotateY(360deg);
}
</style>
