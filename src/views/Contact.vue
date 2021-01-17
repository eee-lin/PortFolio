<template>
  <v-container>
    <v-row justify="space-around">
      <v-card width="80%">
        <v-img
          height="200px"
          src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
        >
          <!-- <v-app-bar flat color="rgba(0, 0, 0, 0)">
            <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>

            <v-toolbar-title class="title white--text pl-0">
              Messages
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn color="white" icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-app-bar> -->

          <v-card-title class="white--text mt-8">
            <v-avatar size="56">
              <img alt="user" src="../assets/profile.png" />
            </v-avatar>
            <p class="ml-3">
              Rinzo
            </p>
          </v-card-title>
        </v-img>

        <v-card-text>
          <ul>
            <div class="font-weight-bold mb-2">
              Contact
            </div>
            <v-icon large color="teal darken-2">
              mdi-email
            </v-icon>
            <strong><span> arima.rinzo2020@gmail.com</span></strong>
            <div class="message mt-2">
              <v-avatar color="indigo" size="12">
                <!-- <span class="white--text headline">36</span> -->
              </v-avatar>
              <span> 気軽にご連絡ください。</span>
            </div>
          </ul>
          <!-- <v-timeline align-top dense>
            <v-timeline-item
              v-for="message in messages"
              :key="message.time"
              :color="message.color"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>{{ message.from }}</strong> {{ message.time }}
                </div>
                <div>{{ message.message }}</div>
              </div>
            </v-timeline-item>
          </v-timeline> -->
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    messages: [
      {
        from: "気軽にご連絡ください",
        message: ``,
        time: "",
        color: "deep-purple lighten-1",
      },
      //ずらり
    ],
  }),
}
</script>

<style></style>
