<template>
  <div class="container">
    <div class="clear-float header-view-width m-l-r-20 m-center">
      <img class="f-l cursor" src="../assets/images/logo.svg" width="70px" height="70px" style="margin-top:15px" />
      <!-- discover -->
      <div class="f-l d_relative l-h-100 m-l-60 cursor">
        <span :class="showHeaderPop?'select-title-up':'select-title-down'" @click="togglePop">DISCOVER</span>
        <div class="header-pop clear-float" v-if="showHeaderPop">
          <div class="f-l l-h-0 w-400 p-30">
            <h1>{{discover.leftTitle}}</h1>
            <ul>
              <li class="f-l" v-for="item in discover.leftTxt">{{item}}</li>
            </ul>
          </div>
          <div class="f-r l-h-0 w-180 p-30">
            <h1>{{discover.rightTitle}}</h1>
            <ul>
              <li class="f-l" v-for="item in discover.rightTxt">{{item}}</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="f-l l-h-100 m-l-50">
        <el-input placeholder="Search by title,author or keyword" v-model="getValue" class="input-with-select w-120">
          <el-button slot="append" icon="el-icon-search" class="search-bg" @click="gotoSearch"></el-button>
        </el-input>
      </div>
      <div class="f-r l-h-100 f-color-w cursor" @click="gotoLogin">
        Log in
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        getValue: '',
        showHeaderPop: false,
        discover: {
          leftTitle: "Genres",
          leftTxt: ['Action & Adventure', 'Bios & History', 'Children‘s', 'Fantasy', 'Historical fiction', 'Horror',
            'Literary Fiction', 'Mystery & Thriller', 'Non-Fiction', 'Romance', 'Science Fiction', 'Young adult'
          ],
          rightTitle: 'Resource',
          rightTxt: ['Authors', 'Languages', 'Genres', 'Articles', 'Author Interviews', 'Discuss']
        }
      }
    },
    methods: {
      togglePop() {
        this.showHeaderPop = !this.showHeaderPop;
      },
      gotoSearch() {
        if (!this.getValue) {
          this.$message({
            showClose: true,
            message: '检查到您没输入任何内容！请输入内容重试！',
            type: 'warning'
          });
          return false;
        }
        console.log('正在查找' + this.getValue + '...')
      },
      gotoLogin() {
        this.$router.push('/Login');
      }
    }
  }
</script>

<style scoped="scoped">
  .container {
    width: 100%;
    background: linear-gradient(left, #FF7854 0%, #FF5079 100%);
  }

  .w-120 {
    width: 320px;
  }

  .header-view-width {
    max-width: 1200px;
    min-width: 700px;
  }

  .select-title-down,
  .select-title-up {
    color: #fff;
    font-size: 15px;
    font-family: 'centurygothicregular';
    position: relative;
  }

  .select-title-down::after {
    position: absolute;
    display: inline-block;
    content: "";
    bottom: 0;
    right: -15px;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 7px 5.5px 4px;
    border-color: #fff transparent transparent transparent;
  }

  .select-title-up::after {
    position: absolute;
    display: inline-block;
    content: "";
    bottom: 0;
    right: -15px;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 7px 5.5px;
    border-color: transparent transparent #fff transparent;
  }

  .search-bg {
    background: #17a288 !important;
    color: #fff !important;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .d_relative {
    position: relative;
  }

  .header-pop {
    content: "";
    position: absolute;
    top: 85%;
    left: 0;
    z-index: 1;
    width: 750px;
    height: 300px;
    box-shadow: 0 0 15px 0 #000;
    background-color: #fff;
    border-radius: 1px;
    overflow: hidden;
  }

  ul li {
    width: 200px;
    font-size: 18px;
    line-height: 34px;
  }

  ul li:hover {
    text-decoration: underline;
  }

  h1 {
    margin: 0;
  }

  .w-400 ul li {
    color: #9b9b9b;
  }

  .w-400 h1 {
    color: #616161 !important;
  }

  .w-180 ul li {
    color: #17a288;

  }

  .l-h-0 {
    line-height: normal;
  }

  .w-400 {
    width: 400px;
  }

  .w-180 {
    width: 180px;
    background: #e2f6f2;
  }

  .p-30 {
    padding: 30px;
  }
</style>
