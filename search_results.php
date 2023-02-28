<?php
    include_once "header.php";
    include_once "classes/dbh.classes.php";

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
            $stmt = $conn->prepare("SELECT p.*, u.users_uid FROM profiles p JOIN users u ON p.users_id = u.users_id WHERE p.users_id LIKE ? OR p.profiles_region LIKE ? OR p.profiles_genre LIKE ? OR p.profiles_type LIKE ?");
            $stmt->execute(["%$search%", "%$search%", "%$search%", "%$search%"]);

            if ($stmt->rowCount() > 0) {
                while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                    echo "<div class='artist-box'>
                        <h3>".$row['users_uid']."</h3>
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


