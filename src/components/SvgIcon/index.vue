<template>
  <svg :class="svgClass" aria-hidden="true" :width="svgWidth" :height="svgHeight">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    },
    size: {
      type: [String, Number],
      default: 20
    }
  },
  computed: {
    iconName () {
      return `#icon-${this.iconClass}`
    },
    svgClass () {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    },
    svgWidth () {
      if (this.size < 0 || isNaN(this.size)) {
        return 20
      }
      return this.size
    },
    svgHeight () {
      if (this.size < 0 || isNaN(this.size)) {
        return 20
      }
      return this.size
    }
  }
}
</script>

<style scoped>
.svg-icon {
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
