$(function() {
    
    /*Mark HTML identifier as variable*/
    var $results = $('#resultsWrapper');
    
    /*Get both todays date and date four months eariler*/
    var d = new Date();
    var strPreDate = d.getFullYear() + "-" + "0" + (d.getMonth()-1) + "-" + d.getDate();
    var strDate = d.getFullYear() + "-" + "0" + (d.getMonth()+1) + "-" + d.getDate();
    
    console.log(strPreDate + ' to ' + strDate);
    
    //Use of themoviedb.org API to display list of popular box office films which ar currently showing in cinemas.
    //Dynamically fetches data from API Link using valid API key. Necessary for relevant/latest content.
        
    $.ajax({
        type: 'GET',
        url: "https://api.themoviedb.org/3/movie/upcoming?api_key=1ef4d18ee3158d098e354a7f26370ca3&language=en-US&sort_by=vote_count.asce&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&region=US&vote_count.gte=210",
        dataType: "json", //specify the data type of API data object.
        success: function(data) {
                    $.each(data.results, function(i, result) {       //for each movie append the following         
                        $results.append('<div id="resultWrap"><img src="http://image.tmdb.org/t/p/original/'+result.poster_path+'"><div id="Content"<ul><li><b>' + result.original_title + '</b><li><b>' + result.release_date + '</b><li>' + result.overview + '<li>' + result.vote_count + ' likes </li><li>IMDb: ' + result.vote_average + '/10</li></div></div></div><hr>'); 
                    });
            $('head').append('<link rel="stylesheet" type="text/css" href="css/style.css">'); //refresh stylesheet after FOR loop is completed
            $('head').append('<link rel="stylesheet" media="screen and (min-width: 400px) and (max-width: 1300px)" href="css/mainMob.css" />')
        }
    })
});