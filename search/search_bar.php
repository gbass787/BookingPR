<!DOCTYPE html>
<html lang="en">
    <title> Booking PR</title>
    <link rel="stylesheet" hef="style.css">
</head>
<body>

    <form method="post">
        <label>Search</label>
        <input type="text" name="search">
        <input type="submit" name="submit">
    </form>
</body>
<div class="ProfileInfo">
    <?php
    #execute the query
    $sql = "SELECT * FROM profiles";
    $result = mysqli_query($connect, $sql); #count the number of rows in the data table
    $queryResults = mysqli_num_rows($result);

    #check profile is available
    if ($queryResults > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
                    $profiles_id=$row['profiles_id'];
                    $profiles_about=$row['profiles_about'];
                    $profiles_introtitle=$row['profiles_introtitle'];
                    $profiles_introtext=$row['profiles_introtext'];
                    $profiles_region=$row['profiles_region'];
                    $profiles_genere=$row['profiles_genre'];
                    $profiles_type=$row['profiles_type'];
        }
    }
    ?>
    </body>

</html>