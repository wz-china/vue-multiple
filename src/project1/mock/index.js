const files = require.context('./modules', false, /\.js$/)

export default {
  install(){
    files.keys().forEach(key => {
      files(key).default()
    })

  }
}
