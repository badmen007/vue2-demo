<template>
  <div class="dialog" v-if="showSelf" :style="{'z-index': zIndex}">
    <div class="dialog-mark" @click.self="closeMyself" :style="{'z-index': zIndex+1}"></div>
    <transition name="dialog">
      <div class="dialog-content" :style="{'z-index': zIndex + 2}">
        <div class="dialog-header">{{title}}</div>
        <div class="dialog-body">
          <slot></slot>
        </div>
        <div class="dialog-footer">
          <div v-if="showCancel" class="btn btn-refuse" @click="cancel">{{cancelText}}</div>
          <div class="btn btn-confirm" @click="confirm">{{confirmText}}</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'global-dialog',
  props: {
    title: String,
    showCancel: {
      type: Boolean,
      default: false,
      required: false
    },
    cancelText: {
      type: String,
      default: '取消',
      required: false
    },
    confirmText: {
      type: String,
      default: '确定',
      required: false
    },
    show: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  data () {
    return {
      showSelf: false,
      zIndex: this.getZIndex(),
      bodyOverflow: ''
    }
  },
  methods: {
    cancel () {
      this.$emit('cancel', false)
    },
    confirm () {
      this.$emit('confirm', false)
    },
    closeMyself () {
      this.showSelf = false
      this.recoverScroll()
    },
    forbidenScroll () {
      this.bodyOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
    },
    recoverScroll () {
      document.body.style.overflow = this.bodyOverflow
    },
    getZIndex () {
      // let zIndex = 0
      // const doms = document.querySelectorAll('*')
      // doms.forEach(dom => {
      //   let z = dom.style.zIndex
      //   if (z) {
      //     z = parseInt(z)
      //     if (z > zIndex) {
      //       zIndex = z
      //     }
      //   }
      // })
      // return zIndex + 1
      let zIndexInit = 20190315
      return zIndexInit++
    }
  },
  watch: {
    show (val) {
      if (!val) {
        this.closeMyself()
        console.log(val, 'vla')
      } else {
        this.showSelf = val
        console.log(this.showSlef)
      }
    }
  },
  created () {
    this.showSelf = this.show
  },
  mounted () {
    this.forbidenScroll()
  }
}
</script>

<style lang="scss" scoped>
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;

  .dialog-mark {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.5;
  }

  .dialog-content {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    height: 200px;
    background: #fff;
    margin-left: -200px;
    margin-top: -100px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    z-index: 2323233;
    display: flex;
    flex-direction: column;

    .dialog-header {
      height: 40px;
      line-height: 40px;
      padding: 0 20px;
      font-size: 16px;
      font-weight: bold;
      border-bottom: 1px solid #eee;
    }

    .dialog-body {
      flex: 1;
      padding: 20px;
      font-size: 14px;
      line-height: 24px;
      overflow-x: hidden;
      overflow-y: scroll;
    }

    .dialog-footer {
      position: relative;
      display: flex;
      width: 100%;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: #ddd;
        transform: scaleY(0.5);
      }

      .btn {
        flex: 1;
        text-align: center;
        padding: 15px;
        font-size: 17px;

        &:nth-child(2) {
          position: relative;

          &::after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 1px;
            height: 100%;
            background: #ddd;
            transform: scaleX(0.5);
          }
        }
      }

      .btn-confirm {
        color: #43ac43;
      }
    }
  }
}</style>
