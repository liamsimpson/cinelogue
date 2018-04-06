$(function() {
    
    /*Mark HTML identifier as variable*/
    var $results = $('#movieObj');
    
    /*Get created JSON from PHP and format for JSON.*/
        
    $.ajax({
        type: 'GET',
        url: "getMovies.php",
        dataType: "json",  
    })
    
    .done(function(data) {
        $.each(data.movies, function(i,film){
            var newRow = "<div id='movie'><img style='position: absolute;' src='http://image.tmdb.org/t/p/w500/"+film.poster_path+"'><div id='Content' style='position:absolute; margin-left: -0px; margin-top: -0px;'><p><b>"+film.movieName+"</b></br>"+film.releaseYear+"</br></p></div></div>"
            
            $(newRow).appendTo($results); 
        })
        $('head').append('<link rel="stylesheet" type="text/css" href="../cinelogue/css/browse.css">');
        $('head').append('<link rel="stylesheet" media="screen and (min-width: 400px) and (max-width: 1300px)" href="css/browseMobile.css" />');
    })
    
    .fail(function() {
        alert('Sorry... No results could be obtained :/');
    });
});