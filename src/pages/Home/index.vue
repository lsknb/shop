<template>
  <div>
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Rank/>
    <Like/>
    <Floor v-for="floor in floorList" :key="floor.id" :list="floor"></Floor>
    <Brand/>
    <!-- <magnifier/> -->
    <!-- <Love/> -->
  </div>
</template>

<script>
import ListContainer from "@/pages/Home/ListContainer/index.vue";
import Recommend from "@/pages/Home/Recommend/index.vue";
import Rank from "@/pages/Home/Rank/index.vue";
import Like from "@/pages/Home/Like/index.vue";
import Floor from "@/pages/Home/Floor/index.vue";
import Brand from "@/pages/Home/Brand/index.vue";
import Love from "@/pages/love/index.vue";
import magnifier from "@/pages/Home/ImgBox/index.vue";
import { mapState } from 'vuex';
export default {
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
    magnifier,
    Love
  },
  mounted(){
    this.$store.dispatch("getFloorList")
  },
  computed:{
    ...mapState({
      floorList:state=>state.home.floorList
    })
  }
};
</script>

<style>
</style>