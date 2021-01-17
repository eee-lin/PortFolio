import firebase from "./firebase.js"

export const STORAGE = firebase.storage()

export const STORAGE_REF = STORAGE.ref()

/**
 * 指定したファイルのダウンロードurlを取得します
 * @param {*} childName
 */
export function findStorage(childName) {
  const downRef = STORAGE_REF.child(childName)
  downRef
    .getDownloadURL()
    .then((url) => {
      return url
    })
    .catch(function(error) {
      console.log(error)
      return error
    })
}

/**
 * 指定ディレクトリ内にあるファイルのダウンロードurlを取得します
 * @param {*} childName
 */
export async function findListStorage(childName) {
  var listRef = STORAGE_REF.child(childName)
  return listRef.listAll()
}

/**
 * 画像をアップロードします
 * @param inputFile ファイル
 * @param directory バケット名
 */
export function attachImage(inputFile, bucket) {
  const file = inputFile
  if (!file || !bucket) {
    return
  }

  const uploadTask = STORAGE_REF.child(`${bucket}${file.name}`).put(file)
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // 成功時の処理
      console.log(snapshot)
    },
    (error) => {
      // エラー
      console.log("err", error)
    },
    () => {
      uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
        // ファイルアップロードして使えるようになったときの処理
        console.log(downloadURL)
      })
    }
  )
}
