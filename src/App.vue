<template>
  <div>
  <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>

import AddBlog from './components/addBlog.vue';
import showTasks from './components/showTasks.vue'
import listMovies from './components/listOfMovies.vue'
import header from './components/header.vue'


export default {
  components: {
    'add-blog': AddBlog,
    'show-tasks': showTasks,
    'list-movies': listMovies,
    'app-header': header    
  },
  data () {
    return {
      
    }
  }
 
}
</script>
