<template>
  <div>redirect</div>
</template>
<script>
export default {
  mounted: function(){
    var news = this.$route.query.news;
    this.$router.push({path:'/home/newsDetail', query:{news: news}})
  }
}
</script>

