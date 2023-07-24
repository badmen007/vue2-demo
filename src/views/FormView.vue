<template>
  <div>
    <el-input v-model="inputValue" placeholder="请输入内容"></el-input>
    <el-button @click="getContent">点击获取内容</el-button>
    <div>
      <div v-for="(item, index) in result" :key="index">
        <div v-html="item.q"></div>
        <div>{{ item.type }}</div>
        <div>{{ item.sa }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormView',
  components: {},
  data () {
    return {
      inputValue: '',
      htmlString: '',
      result: []
    }
  },
  methods: {
    getContent () {
      const wd = this.inputValue
      this.jsonp({
        url: 'https://www.baidu.com/sugrec',
        // url: 'http://localhost:3000/sugrec',
        data: {
          prod: 'pc',
          wd
        },
        jsonp: 'cb'
      }).then(res => {
        res.g.forEach(item => {
          const reg = new RegExp(wd, 'g')
          item.q = item.q.replace(reg, `<span style="color: red">${wd}</span>`)
        })
        this.result = res.g
      })
    },
    jsonp ({ url, jsonp, data }) {
      return new Promise(resolve => {
        // 1.准备一个全局的回调函数
        const callbackName = `jQuery_${Date.now()}`
        const script = document.createElement('script')
        // 2.将回调函数挂载到window上
        window[callbackName] = function (data) {
          resolve(data)
        }
        // 看看有没有问号
        let query = url.indexOf('?') === -1 ? '?' : '&'
        for (const key in data) {
          query += `${key}=${data[key]}&`
        }
        script.src = `${url}${query}${jsonp}=${callbackName}`
        document.body.appendChild(script)
      })
    }
  }
}
</script>

<style scoped></style>
