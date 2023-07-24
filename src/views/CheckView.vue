<template>
  <div>
    <div>Year</div>
    <el-checkbox-group v-model="checkList1" class="check">
      <el-checkbox label="复选框 A"></el-checkbox>
      <el-checkbox label="复选框 B"></el-checkbox>
      <el-checkbox label="复选框 C"></el-checkbox>
      <el-checkbox label="禁用" disabled></el-checkbox>
      <el-checkbox label="选中且禁用" disabled></el-checkbox>
    </el-checkbox-group>
    <div>date</div>
    <el-checkbox-group v-model="checkList2" class="check">
      <el-checkbox label="Q1"></el-checkbox>
      <el-checkbox label="Q2"></el-checkbox>
      <el-checkbox label="Q3"></el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checkList1: ['复选框 A'],
      checkList2: ['Q1']
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.check {
  /deep/ .el-checkbox {
    width: 100px;
    height: 32px;
    background: skyblue;
    color: black;
    text-align: center;
    line-height: 32px;
  }
  /deep/ .el-checkbox__input {
    display: none;
  }

  /deep/ .is-checked {
    background: green;
    color: #fff;
  }
}
</style>
