<template>
  <div>
      {{this.event.title}}
  </div>
</template>
<script>
export default {
  data() {
    return {
      event: {
        eventId: '',
        userId: '',
        title: '',
        content: '',
        eventImg: '',
        flag: '',
        hostId: '',
        createdTime: ''
      }
    }
  },
  mounted: function(){
    this.event = this.$route.query.event;
  }
}
</script>
<style>

</style>

