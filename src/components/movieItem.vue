<template> 
  <div id="single-movie" >
    
    <div class="container">
      <center>
        <div class="container row" style="margin-bottom: 3em">
          <div class="col-sm-2" v-for="image in images.slice(0, 5)" :key="image" style="margin: 0px auto">
            <img v-bind:src="'http://image.tmdb.org/t/p/w500/' + image.file_path" >              
          </div>
        </div>
        <div class="container row" style="margin-bottom: 3em">
          <div class="col-sm-7" style="float: right">
            <img v-bind:src="'http://image.tmdb.org/t/p/w500/' + movie.poster_path" style="width:25%, "/>
          </div>
          <div class="col-sm-5" style="text-align: left">
            <h1  style="margin-top:1em">{{movie.original_title}}</h1>
            <div class="row" v-for="g in genres" :key="g" style="display: inline-block">
              <div class="col-sm-3" >
                <p>{{g.name + "|"}} </p>
              </div>
            </div>
            <h6 style="color: #212529">{{movie.overview}}</h6>
          </div>
        </div>
      </center> 
    </div>

    <div class="container info" style="background-color: #grey, width: 500px">
      <center>
        
        <!-- <p>{{movie.genres[0].name}} | {{movie.genres[1].name}} | {{movie.genres[2].name}} | {{movie.genres[3].name}} </p> -->
      </center>
      <center>
        
          
      </center>
    </div>
      <article></article>
  </div>
</template>

<script>

export default {
    data () {
        return {
            id: this.$route.params.id,
            movie: [],
            images: {},
            genres: {}
            
        }
    },
    created() {
        this.$http.get('https://api.themoviedb.org/3/movie/'+this.id+'?api_key=9270421e43cc32ed6056cad8de3c2c67&append_to_response=images').then(function(data){
          
          console.log(data.body);
          this.movie = data.body;
          console.log("image below")
          console.log(data.body.images.backdrops);
          this.images = data.body.images.backdrops;
          this.genres = data.body.genres
          
        });

        // this.$http.get('https://api.themoviedb.org/3/movie/'+this.id+'?api_key=9270421e43cc32ed6056cad8de3c2c67&append_to_response=images').then(function(data){
        //     console.log(data.body.images.backdrops[0].file_path);
        //     this.images = data.body.images.backdrops[0].file_path
        // });
    }
}

</script>

<style>
* {
  box-sizing: border-box;
}

.column {
  float: left;
  width: 33.33%;
  padding: 5px;
}

/* Clearfix (clear floats) */
.row::after {
  content: "";
  clear: both;
  display: table;
}
.info{
  width: 650px
}
</style>