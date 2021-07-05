<template>
  <div>
  <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>

import AddBlog from './components/addBlog.vue';
import homeView from './components/home.vue'
import listMovies from './components/listOfMovies.vue'
import header from './components/header.vue'


export default {
  components: {
    'add-blog': AddBlog,
    'home-view': homeView,
    'list-movies': listMovies,
    'app-header': header    
  },
  data () {
    return {
      
    }
  }
 
}
</script>
