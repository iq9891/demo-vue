<style lang="sass?outputStyle=expanded">
 $color:green;
 div {background:$color;}
</style>

<template lang="ejs">
<div>
  <h1> {{msg}}</h1>
  <comp-a></comp-a>
  <comp-b></comp-b>
  <comp-c></comp-c>
  </div>
</template>

<script>
import CompA from './components/a.vue'
import CompB from './components/b.vue'
import CompC from './components/c.vue'

export default {
  data () {
    return {
      msg: 'Hello from Babel!'
    }
  },
  components: {
    CompA,
    CompB,
    CompC
  }
}
</script>
