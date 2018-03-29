<template>
  <div>host redirect</div>
</template>
<script>
export default {
  mounted: function(){
    var event = this.$route.query.event;
    this.$router.push({path:'/home/detail', query:{event: event}})
  }
}
</script>

