$(function() {
    
    /*Mark HTML identifier as variable*/
    var $results = $('#resultsWrapper');
    
    /*Using AJAX HttpRequest GET Method to extract and display dynamic JSON content in HTML*/
    /*Content being parsed consists of database entries from mySQL.*/
    $.ajax({
        type: 'GET',
        url: "getTopRated.php",
        dataType: "json",
    })
    
    /*$.each acts as FOR Loop through JSON content, reducing repetitive code.*/
    /*Loop iterates on each row of the database query result.*/
    /*HTML formatted response is appended into HTML file using div identifier.*/
    
    .done(function(data) {
        console.log(data);
        $.each(data.movies, function(i,film){
            var newRow =
                "<div id='resultWrap'><img style='margin-top:20px; width:260px;'src='http://image.tmdb.org/t/p/original/"+film.poster_path+"'><div id='Content'>"+"<ul>"+"<li><b>"+film.movieName+"</b></li>"+"<li><b>"+film.releaseYear+"</b></li>"+"</br><li>IMDB: "+film.movieRating+"/10"+"</li>"+"<li>"+film.genreName+"</li>"+"<li>Starring: "+film.actorName+"</li>"+"<li>"+film.overview+"</li></ul>"+"</div></div><hr>";
            
            $(newRow).appendTo($results);
        });
        
        /*Refreshes CSS StyleSheet allowing it to style dynamic AJAX content*/
        $('head').append('<link rel="stylesheet" type="text/css" href="../cinelogue/css/style.css">');
        $('head').append('<link rel="stylesheet" media="screen and (min-width: 400px) and (max-width: 1300px)" href="css/mainMob.css" />');
    })
    
    .fail(function() {
        alert('Sorry... No results could be obtained :/');
    });        
});