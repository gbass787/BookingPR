##connect to the database
<?php
include "profile.php";
include "header.php";
include "search.php"
    #file of gerardo data base
    ?>
 #get the search keyword
<form action="profile.php" method="_POST"> 
    <input type="text" name="search" placeholder="Search">
    <button type="submit" name="submit-search"></button>
</form>

<div class="SearchDb">
    <?php
    #get the search word
    if (isset($_POST['submit-search'])) {
        $search=mysqli_real_escape_string($search, $_POST['search']);//sql query to get the profiles in the search 
        $sql = "SELECT * FROM profiles WHERE profile_id LIKE '%$search%' OR profiles_about LIKE '%$search%' OR profiles_introtitle LIKE '%$search%'
            OR profiles_introtext LIKE '%$search%' OR profiles_region LIKE '%$search%' OR profiles_genre LIKE '%$search%' OR profiles_type
             LIKE '%$search%' OR u_socialmedia LIKE '%$search%'";

    $result = mysqli_query($connect, $sql); #execute the query
    $queryResults = mysqli_num_rows($result);#count the number of rows in the data table

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
}
                    ?>
                    <div class="ProfileArtist" #fake profile grabbing from msqladmi
                    <form action="" method="post>
                    <div class "Dbh">
                            <h2> name="profile_id"><b> Juan del Pueblo</b></h2>
                            <h4>"profiles_about"</h4>
                            <p>".$row['profiles_introtitle']."</p>
                            <p>".$row['profiles_introtext']."</p>
                            <p>".$row['profiles_region']."</p>
                            <p>".$row['profiles_genre']."</p>
                            <p>".$row['profiles_type']."</p>
                            </div>
                            </form>
                        </div>
                    ?>
    ?>
</div>