<template>
  <div style="display: flex;position: relative">
    <div
      :style="minImgBoxStyle"
      class="box"
      @mouseleave="mouseLeave"
      @mouseenter="mouseEnter"
      @mousemove="mousemove($event)"
    >
      <!--原始照片-小照片-->
      <img
        ref="minImg"
        :style="minImgStyle"
        src="../../Like/images/like_03.png"
        v-error-img
        fit="contain"
      >
      <!--探测块-->
      <div v-show="show" :style="areaMarkStyle" class="areaMark" />
    </div>
    <div v-show="show" :style="maxImgBoxStyle" class="box maxImgBox">
      <!--放大后的照片-->
      <img :style="maxImgStyle" :src="finalMaxIMGsrc" v-error-img fit="contain" >
    </div>
  </div>
</template>
<script>
export default {
  props: {
    imgUrl: String,
    imgsrc: String,
    maxIMGsrc: String,
    scale: {
      type: Number,
      default: 2
    },
    width: {
      type: Number,
      default: 420
    },
    height: {
      type: Number,
      default: 420
    }
  },
  data() {
    return {
      hrefurl: process.env.API_ROOT,
      show: false,
      finalMaxIMGsrc: '',
      imgBoxWidth: 420,
      imgBoxHeight: 420,
      areaWidth: 210,
      areaHeight: 210,
      areaMarkStyle: {},
      minImgBoxStyle: {
        cursor: 'move'
      },
      minImgStyle: {},
      maxImgBoxStyle: {},
      maxImgStyle: {
        position: 'absolute'
      }
    }
  },
  watch: {
    imgsrc() {
      this.init()
    },
    maxIMGsrc() {
      this.init()
    }
  },
  mounted() {
    this.init()
    console.log(this.imgsrc);
  },
  methods: {
    init() {
      console.log(this.imgsrc, '---imgsrc')
      this.imgBoxWidth = this.width
      this.imgBoxHeight = this.height
      this.$set(this.minImgStyle, 'width', this.imgBoxWidth + 'px')
      this.$set(this.minImgStyle, 'height', this.imgBoxHeight + 'px')
      this.$set(this.maxImgStyle, 'width', this.imgBoxWidth + 'px')
      this.$set(this.maxImgStyle, 'height', this.imgBoxHeight + 'px')
      this.$set(this.minImgBoxStyle, 'width', this.imgBoxWidth + 'px')
      this.$set(this.minImgBoxStyle, 'height', this.imgBoxHeight + 'px')
      this.$set(this.maxImgBoxStyle, 'width', this.imgBoxWidth + 'px')
      this.$set(this.maxImgBoxStyle, 'height', this.imgBoxHeight + 'px')
      this.$set(this.maxImgBoxStyle, 'left', this.imgBoxWidth + 'px')
      this.areaWidth = this.imgBoxWidth / this.scale
      this.areaHeight = this.imgBoxHeight / this.scale
      if(this.imgsrc&&String(this.imgsrc).indexOf('http')==-1){
        this.imgsrc=this.hrefurl+this.imgsrc
      }
      if (!this.maxIMGsrc) {
        this.finalMaxIMGsrc = this.imgsrc
      }
      this.$set(this.areaMarkStyle, 'width', this.areaWidth + 'px')
      this.$set(this.areaMarkStyle, 'height', this.areaHeight + 'px')
      this.$set(this.maxImgStyle, 'transform', 'scale(' + this.scale + ')')
    },
    mouseEnter() {
      this.show = true
    },
    mouseLeave() {
      this.show = false
    },
    mousemove(e) {
      // 获取文档顶端与屏幕顶部之间的距离
      // scrollTop指的是“元素中的内容”超出“元素上边界”的那部分的高度
      const documentScrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      // 获取鼠标相对于屏幕的坐标
      const mouseClientX = e.clientX
      const mouseClientY = e.clientY
      // 获取小照片相对于屏幕位置信息
      // getBoundingClientRect()用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置。
      const minImgPosition = this.$refs.minImg.getBoundingClientRect()
      const minImgX = minImgPosition.left
      const minImgY = minImgPosition.top
      // 计算出探测块相对于小图片的坐标
      let areaLeft = mouseClientX - minImgX - this.areaWidth / 2
      let areaTop = mouseClientY - minImgY - this.areaHeight / 2
      if (documentScrollTop > 0) {
        areaTop = documentScrollTop + areaTop
      }
      const minLeft = 0
      const maxLeft = this.imgBoxWidth - this.areaWidth
      const minTop = 0
      const maxTop = this.imgBoxHeight - this.areaHeight
      // 禁止探测块移出小图片
      if (areaLeft < minLeft) {
        areaLeft = minLeft
      }
      if (areaLeft > maxLeft) {
        areaLeft = maxLeft
      }
      if (areaTop < minTop) {
        areaTop = minTop
      }
      if (areaTop > maxTop) {
        areaTop = maxTop
      }
      // 更新探测块的坐标
      this.$set(this.areaMarkStyle, 'left', areaLeft + 'px')
      this.$set(this.areaMarkStyle, 'top', areaTop + 'px')
      // 更新放大后照片的坐标
      this.$set(
        this.maxImgStyle,
        'left',
        ((this.scale - 1) * this.imgBoxWidth) / 2 - areaLeft * this.scale + 'px'
      )
      this.$set(
        this.maxImgStyle,
        'top',
        ((this.scale - 1) * this.imgBoxHeight) / 2 - areaTop * this.scale + 'px'
      )
    }
  }
}
</script>
<style scoped>
.box {
  border: 1px solid darkgray;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}

.areaMark {
  position: absolute;
  /*background: url(../../.././assets/er.png);*/
  background: rgba(122, 167, 234, 0.4);
}
.maxImgBox {
  position: absolute;
  z-index: 999;
}
</style>
