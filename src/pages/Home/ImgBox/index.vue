<template>
      <div class="container">
      <!-- 商品信息 -->
      <div class="goods">
        <div class="imgBox">
          <!-- 商品图片以及放大镜 -->
          <magnifier
              style="margin-bottom: 10px"
              :width="370"
              :height="370"
              :imgsrc="myPic"
              :scale="3"
          />
        </div> 
      </div>
    </div>
</template>

<script>
import magnifier from "./components/magnifier_sks";
export default {
    data() {
      return {
        myPic: '../../Like/images/like_03.png'
      }
    },
    components: {
        magnifier
    }
}
</script>

<style  scoped>
.container {
    width: 1200px;
    margin: 0 auto;
    position: relative;
}
    .goods {
      display: flex;
      justify-content: space-between;
      background-color: white;
    }
      .imgBox {
        width: 430px;
        /* //height: 600px;
        // border: 1px solid black; */
        box-sizing: border-box;
        padding: 20px 0 0 20px;
      }
    

</style>