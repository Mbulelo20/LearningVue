<template> 
    <div id="single-movie">
        <div class="row">
            <img v-bind:src="'http://image.tmdb.org/t/p/w500/' + movie.backdrop_path">
        </div>
        <h1>{{movie.original_title}}</h1>
        <div class="row" style="margin-bottom: 5em, grid-gap: 5em">
        
      </div>
        <article></article>
    </div>
</template>

<script>

export default {
    data () {
        return {
            id: this.$route.params.id,
            movie: []
        }
    },
    created() {
        this.$http.get('https://api.themoviedb.org/3/movie/'+this.id+'?api_key=9270421e43cc32ed6056cad8de3c2c67').then(function(data){
            console.log(data.body);
            this.movie = data.body;
        });
    }
}

</script>

<style>
* {
  box-sizing: border-box;
}

.column {
  float: left;
  width: 50%;
  padding: 5px;
}

/* Clearfix (clear floats) */
.row::after {
  content: "";
  clear: both;
  display: table;
}
</style>