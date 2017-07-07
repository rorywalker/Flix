

(function(){

  var fs = new FlixService()  

  new Vue({
    el: '#vue-flix',
    data: function(){
      return {
        category: 'actor',
        query: '',
        movies: [],
        watchlist: [],                                           
        details: {}
      }
    },
    methods:{
      search: function(){
        if(this.category == 'title'){
          fs.getFlix(this.category, this.query, this.setDetails)
          return
        }
        fs.getFlix(this.category, this.query, this.setMovies)
      },
      setMovies: function(movies){
        this.movies = movies
      },
      addToWatchlist: function(movie) {
        this.watchlist.push(this.details)
        this.details = {}      
        },
      removeFromWatchlist: function(movie) {       
          for (var index = 0; index < this.watchlist.length; index++) {
              if (this.watchlist[index] == movie) {
                  this.watchlist.splice(index, 1)
                  this.details = {}
                  this.query = ''
                  this.category = ''
                  this.movies = ''
              }
          }
      },
      reset: function(){
        this.query = ''
        this.category = ''
        this.movies = []
      },
      setDetails: function(movie){
        this.details = movie
      },
      clearDetails: function(){
        this.details = {}
      }
    }
  })

}())
