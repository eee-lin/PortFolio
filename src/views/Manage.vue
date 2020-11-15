<template>
  <div class="container">
    <h1>Manager</h1>

    <v-col cols="12">
      <v-file-input
        v-model="file1"
        :state="Boolean(file1)"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
      ></v-file-input>
      <div class="button-container">
        <v-btn color="blue-grey" class="ma-2 white--text" @click="addImage()"
          >アップロード</v-btn
        >
      </div>
      <!-- <v-btn color="error" @click="deleteThumbnail">サムネイルを削除する</v-btn> -->
    </v-col>

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

    <!-- <div v-if="sampleImage">
      <img :src="sampleImage" />
    </div> -->
  </div>
</template>

<script>
import { attachImage, findStorage, findListStorage } from "../firebase/storage"

export default {
  name: "storage",
  data() {
    return {
      file1: null,
      bucketName: "test",
      fileName: null,
      get: false,
      images: [],
    }
  },
  methods: {
    /**
     * 指定した画像を取得します
     */
    findImage: async function() {
      if (!this.bucketName) {
        alert("バケット名を指定してください。")
        return
      }
      if (!this.fileName) {
        alert("ファイル名を指定してください。")
        return
      }
      const image = findStorage(this.bucketName + "/" + this.fileName)
      image
        .getDownloadURL()
        .then((url) => {
          this.sampleImage = url
          console.log(this.sampleImage)
        })
        .catch(function(error) {
          alert("画像ダウンロードURLの取得に失敗しました。")
          console.log(error)
        })
    },
    /**
     * 指定画像を追加します
     */
    addImage: function() {
      const file = this.file1
      if (!file) {
        alert("画像を選択してください")
        return
      }

      attachImage(file, "test/")
    },
  },

  async created() {
    try {
      // const storageRef = await storage.ref(`articles/${this.article.id}`)
      const res = await findListStorage(this.bucketName)
      res.items.forEach((itemRef) => {
        itemRef.getDownloadURL().then((url) => {
          this.images.push(url)
          this.get = true
          console.log("sample", this.get)
        })
      })
    } catch (e) {
      this.error = true
      console.log(e)
      this.sampleImage = false
    } finally {
      this.loading = false
    }
  },
  computed: {
    isSelected() {
      return (index) => this.selectedImage === index
    },
  },
}
</script>

<style media="screen">
.button {
  background-color: #8b52a1;
}

.manager {
  display: flex;
  min-height: 100vh;
  width: 100%;
  padding: 0;
  margin: 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

#uploader {
  -webkit-appearance: none;
  appearance: none;
  width: 50%;
  margin-bottom: 10px;
}
</style>
