<template>
  <div class="modal">
    <div class="msg-container">
      <div class="text">{{ msg }}</div>
      <el-button @click="handleClick" class="button">点我</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageBox',
  props: {
    msg: {
      type: String,
      default: '',
      required: true
    }
  },
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  .msg-container {
    width: 300px;
    height: 300px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .text {
      text-align: center;
      line-height: 200px;
    }
  }
}
</style>
