<?php

    $link = mysqli_connect('localhost', 'root', '20011997', 'cinelogue');
    if (!$link) {
        die('<p>Could not connect: ' . mysql_error() . '</p>');
    }
        
    $sql  = 'SELECT * FROM `movies` ORDER BY `movieID` ASC';
            
    

    $retval = mysqli_query( $link, $sql );

    $json_array = array();
        
    if(!$retval) {
        die('Could not get data: ' . mysql_error());
    }
            
    while($row = mysqli_fetch_array($retval, MYSQL_ASSOC)) {
                $json_array['movies'][] = $row;            
    }

    echo json_encode($json_array);
        
    
?>