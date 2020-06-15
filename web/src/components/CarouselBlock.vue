<template>
  <div class="warp-block">
    <!-- <div v-for="item in carrouselImage">{{item}}</div> -->
<!--    <ul style="width: 300%;">
      <li>
        <img src="../assets/images/bookdisplaysmall.jpg" width="100%" />
        <div>FREE ULTIMATE GUIDE TO FREE EBOOKS</div>
        <P>Not sure what to read next? Expore our catalog of public domin books with our editors. Some real gems are hidden in our libary.</P>
        <a href="#">Read more</a>
      </li>
      <li>
        <img src="../assets/images/bookdisplaysmall.jpg" width="100%" />
        <div>FREE ULTIMATE GUIDE TO FREE EBOOKS</div>
        <P>Not sure what to read next? Expore our catalog of public domin books with our editors. Some real gems are hidden in our libary.</P>
        <a href="#">Read more</a>
      </li>
      <li>
        <img src="../assets/images/bookdisplaysmall.jpg" width="100%"/>
        <div>FREE ULTIMATE GUIDE TO FREE EBOOKS</div>
        <P>Not sure what to read next? Expore our catalog of public domin books with our editors. Some real gems are hidden in our libary.</P>
        <a href="#">Read more</a>
      </li>
    </ul>
    高亮dots
    <ul>
      <li><span>1</span></li>
      <li><span>2</span></li>
      <li><span>3</span></li>
    </ul> -->

      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item">
          <!-- <h3>{{ item }}</h3> -->
         <div class="wrap-block">
           <div class="block"><img src="../assets/images/bookdisplaysmall.jpg" /></div>
           <div class="text-block">
             <p style="font-size: 38px;font-weight: bold;">FREE ULTIMATE GUIDE TO FREE EBOOKS</p>
             <P style="font-size: 20px;font-weight: bold;">Not sure what to read next? Expore our catalog of public domin books with our editors. Some real gems are hidden in our libary.</P>
             <a href="#">Read more</a>
           </div>
         </div>
        </el-carousel-item>
      </el-carousel>
  </div>
</template>

<script>
  const warpBlock=require('../assets/images/bookdisplaysmall.jpg');
  export default {
    data() {
      return {
        carrouselImage: ['轮播1', '轮播2', '轮播3'],
        warpBlock:warpBlock
      }
    }
  }
</script>

<style scoped="scoped">
/* ul,li{
  padding: 0;
  margin: 0;
  list-style: none;
}

ul::after{
  display: block;
  height: 0;
  clear: both;
  content: "";
  visibility: hidden;
  overflow: hidden;
}
ul li{
  float: left;
  width: 33.29%;
  height: 260px;
  overflow: hidden;
  position: relative;
} */
.warp-block{
  width: 100%;
  overflow: hidden;
  position: relative;
}
.warp-block .block img{
  max-width: 100%;
  min-height: 300px;
  min-width:782px;
}
.text-block{
  position: absolute;
  top: 45px;
  left: 0;
text-align: center;
padding: 0 20%;
color: #fff;
}


  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
