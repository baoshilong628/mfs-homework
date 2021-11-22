<template>
  <div>
    <a :href="href" @click.prevent="go">
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  name: "Vlink",
  props:["href"],
  methods:{
    go(){
      this.$emit("a",this.href)
      window.history.pushState(null,null,this.href)
    }
  }
}
</script>

<style scoped>

</style>
