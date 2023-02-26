<?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
    include_once "header.php";

    include "classes/dbh.classes.php";
    include "classes/profileinfo.classes.php";
    include "classes/profileinfo-view.classes.php";
    $profileInfo = new ProfileInfoView();

    // Get the artist profile ID from the URL
    $profileID = isset($_GET['id']) ? $_GET['id'] : null;

    // Fetch the artist profile information
    $profile = $profileInfo->fetchProfile($profileID);
?>

<section class="profile">
    <div class="profile-bg">
        <div class="wrapper">
            <div class="profile-info">
              <div class="profile-info-img">
                <p><?php echo $profile['users_uid']; ?></p>
              </div>
              <div class="profile-info-about">
                <h3>ABOUT</h3>
                <p><?php echo $profile['profiles_about']; ?></p>
              </div>
              <div class="profile-info-details">
                    <h3>DETAILS</h3>
                    <p><strong>Region:</strong> <?php echo $profile['profiles_region']; ?></p>
                    <p><strong>Music Genre:</strong> <?php echo $profile['profiles_genre']; ?></p>
                    <p><strong>Type:</strong> <?php echo $profile['profiles_type']; ?></p>
                </div>
            </div>
            <div class="profile-content">
              <div class="profile-intro">
                <h3><?php echo $profile['profiles_introtitle']; ?></h3>
                <p><?php echo $profile['profiles_introtext']; ?></p>
              </div>
            </div>
        </div>
    </div>
</section>

</body>
</html>
