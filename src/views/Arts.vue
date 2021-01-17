<template>
  <div>
    <h1>Arts</h1>
    <v-container v-if="get">
      <v-row>
        <v-col
          v-for="(image, index) in images"
          :key="index"
          :index="index"
          class="d-flex child-flex"
          cols="4"
        >
          <v-card flat tile class="d-flex">
            <v-img
              :id="index"
              :src="image"
              aspect-ratio="1"
              :class="{ selected: isSelected(index) }"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { findListStorage } from "../firebase/storage"
export default {
  name: "storage",
  data() {
    return {
      // file1: null,
      bucketName: "test",
      get: false,
      images: [],
    }
  },

  async created() {
    try {
      // const storageRef = await storage.ref(`articles/${this.article.id}`)
      const res = await findListStorage(this.bucketName)
      res.items.forEach((itemRef) => {
        itemRef.getDownloadURL().then((url) => {
          this.images.push(url)
          this.get = true
          console.log("get", this.get)
        })
      })
    } catch (e) {
      this.error = true
      console.log(e)
      this.get = false
    } finally {
      // this.loading = false
    }
  },
  computed: {
    isSelected() {
      return (index) => this.selectedImage === index
    },
  },
}
</script>

<style></style>
