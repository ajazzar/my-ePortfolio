<!DOCTYPE html>
<html>
<head>
<style type = "text/css">
table {
    margin-top: 150px;
    border: 1px solid;
    background-color: #eee;
}
td {
    border: 0px;
    padding: 10px;
}
th {
    border-bottom: 1px;
    background-color: #ddd;
}
</style>

</head>
<body>
<form action = "welcome.php" method = "post">
<table align = "center">
<tr>
<th colspan = "2"><h2 align = "center">Login</h2></th>
</tr>
<td>First Name:(only "Aaron" works)</td>
<td><input type ="text" name = "fname"></td>
<tr>
<td>Last Name:(only "Jazzar" works)</td>
<td><input type ="text" name = "lname"></td>
</tr>
<tr>
<td align = "right" colspan ="2"><input type="submit" name = "login" value = "login"></td>
</tr>
</table>
</form>
</body>
</html>