<template>
  <div>
    <show-tasks></show-tasks>
  </div>
</template>

<script>

import AddBlog from './components/addBlog.vue';
import showTasks from './components/showTasks.vue'


export default {
  components: {
    'add-blog': AddBlog,
    'show-tasks': showTasks
    
  },
  data () {
    return {
      
    }
  }
 
}
</script>
