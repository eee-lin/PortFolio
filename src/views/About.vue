<template>
  <div class="about">
    <h1>This is an about page</h1>
    <v-container py-6 px-5>
      <v-row justify="center" align-content="center">
        <v-col xs="7" sm="10" md="11" lg="12" offset-xl="1">
          <h1 class="pagetitle display-3 font-weight-bold mt-8 mb-12">
            About me
          </h1>

          <v-card>
            <v-card-actions class="justify-center">
              <v-avatar
                color="grey"
                size="230"
                class="elevation-4 mt-n10 my-icon"
              >
                <v-img src="../assets/profile.png" />
              </v-avatar>
            </v-card-actions>

            <v-card-title primary-title>
              <div>
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
            </v-card-text>

            <div class="px-2">
              <v-card-title primary-title>
                <div class="headline">
                  Activity
                </div>
              </v-card-title>

              <v-card-text>
                <v-list dark two-line>
                  <v-list-item-group>
                    <v-list-item
                      v-for="(activity, i) in activities"
                      :key="i"
                      :href="activity.href"
                    >
                      <v-list-item-avatar>
                        <v-icon class="teal" v-text="activity.icon" />
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title v-text="activity.text" />
                        <v-list-item-subtitle v-text="activity.subtext" />
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-card-text>
            </div>

            <div class="px-2">
              <v-card-title primary-title>
                <div>
                  <div class="headline">
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
                        <v-icon class="black--text text--lighten-4">
                          calendar_today
                        </v-icon>
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
        <v-btn x-large color="grey darken-3" rounded to="/" class="mx-4 my-2">
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
      myname: "Takuya Sawada",
      jobs:
        "Research area: Estimating TCP Congestion Control Algorithms / Traffic Analytics",
      hobby: "略",
      boyhood: "略",
      undergraduatedays: "略",
      graduatedays: "略",
      items: [
        {
          color: "teal darken-2",
          icon: "fa-school",
          title: "略",
          text: "略",
          major: "",
          date: "略",
          startdate: "略",
          bt_display: "display:none",
        },
        // 以下略
      ],
      activities: [
        {
          text: "LOCAL 学生部",
          subtext: "北海道を中心に技術に関心がある学生の集まり",
          href: "http://students.local.or.jp/",
          icon: "group",
        },
        // 以下略
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
