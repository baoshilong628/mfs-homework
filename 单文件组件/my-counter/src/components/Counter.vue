<template>
  <button @click="inc">
    {{ value }}
  </button>
</template>

<script>
export default {
  name: "Counter",
  data: function () {
    return {
      value:0
    }
  },
  methods:{
    inc(){
      this.value++
      this.$emit("inc")
    }
  }
}
</script>

<style scoped>

</style>
