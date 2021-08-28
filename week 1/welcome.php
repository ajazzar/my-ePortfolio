<?php
$fname = "Aaron";
$lname = "Jazzar";

session_start();
if(isset($_SESSION['fname'])){
    echo "<h1>Welcome ".$_SESSION['fname']."</h1>";
    echo "<br><a href = 'logout.php'><input type = button value = logout name = logout></a>";
}
else{
    if($_POST['fname']==$fname && $_POST['lname']==$lname){
        $_SESSION['fname'] = $fname;
        echo "<script>location.href='welcome.php'</script>";
    }
    else{
        echo "<script>alert('first name or last name incorrect!')</script>";
        echo "<script>location.href = 'login.php'</script>";
    }
}
?>
