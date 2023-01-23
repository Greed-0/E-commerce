<?php
$Kayit = [];
function Kayitlanma (){
    $Gelenmail = $_REQUEST["email"];
    $Sifre = $_REQUEST["password"];

    echo "<pre>";
    print_r($Gelenmail . " " . $Sifre);
    echo "</pre>";
}
Kayitlanma();

?>