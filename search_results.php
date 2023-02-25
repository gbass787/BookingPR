<?php
    include_once "header.php";
    include "classes/dbh.classes.php";

     // Create a new instance of the Dbh class
     $db = new Dbh();

     // Call the connect() method to establish a database connection
     $conn = $db->getConnection();
?>

<section class="index-intro">
    <div class="index-intro-bg">
        <div class="wrapper">
            <h1>Search Results</h1>
        </div>
    </div>
</section>

<div class="wrapper">
    <?php
        if (isset($_GET['q'])) {
            $search = $_GET['q'];
            $stmt = $conn->prepare("SELECT * FROM profiles WHERE users_id LIKE ? OR profiles_region LIKE ? OR profiles_genre LIKE ? OR profiles_type LIKE ?");
            $stmt->execute(["%$search%", "%$search%", "%$search%", "%$search%"]);

            if ($stmt->rowCount() > 0) {
                while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                    echo "<div class='artist-box'>
                        <h3>".$row['users_id']."</h3>
                        <p>".$row['profiles_region']."</p>
                        <p>".$row['profiles_genre']."</p>
                        <p>".$row['profiles_type']."</p>
                        <a href='artist_profile.php?id=".$row['profiles_id']."'>View Profile</a>
                    </div>";
                }
            } else {
                echo "<p>No results found.</p>";
            }
        }
    ?>
</div>

