<template>
  <div class="signup">
    <v-text-field
      v-model="mailaddress"
      :rules="rules"
      label="メールアドレス"
      placeholder="abc@gmail.com"
      outlined
    />
    <v-text-field
      v-model="password"
      :rules="rules"
      label="パスワード"
      placeholder="パスワード"
      outlined
    />
    <v-btn color="purple" class="ma-2 white--text" @click="loginUser"
      >ログイン</v-btn
    >
  </div>
</template>

<script>
import firebase from "../firebase/firebase"
export default {
  data() {
    return {
      mailaddress: null,
      password: null,
    }
  },
  methods: {
    signUp: function() {
      console.log(firebase)
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.mailaddress, this.password)
        .then(
          // 成功時の処理
          alert("Success!")
        )
        .catch(
          // エラー時の処理
          console.log("false")
        )
    },
    loginUser() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.loginEmail, this.loginPassword)
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code
          var errorMessage = error.message
          console.log(errorCode)
          console.log(errorMessage)
        })
    },
  },
}
</script>
