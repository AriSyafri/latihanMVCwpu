<?php 
    // session id tidak ada maka session start
    if (!session_id() ) session_start();

    require_once '../app/init.php';

    $app = new App;

?>