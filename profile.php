<?php
    include_once "header.php";

    include "classes/dbh.classes.php";
    include "classes/profileinfo.classes.php";
    include "classes/profileinfo-view.classes.php";
    $profileInfo = new ProfileInfoView();
?>

<section class="profile">
    <div class="profile-bg">
        <div class="wrapper">
            <div class="profile-info">
              <div class="profile-info-img">
                <p>
                  <?php
                      echo $_SESSION["useruid"];
                  ?>
                </p>
                <div class="break"></div>
                <a href="profilesettings.php" class="follow-btn">PROFILE SETTINGS</a>
              </div>
              <div class="profile-info-about">
                <h3>ABOUT</h3>
                <p>
                  <?php
                    $profileInfo->fetchAbout($_SESSION["userid"]);
                  ?>
                </p>
              </div>
              <div class="profile-info-details">
                    <h3>DETAILS</h3>
                    <p><strong>Region:</strong> <?php echo $profileInfo->fetchRegion($_SESSION["userid"]); ?></p>
                    <p><strong>Music Genre:</strong> <?php echo $profileInfo->fetchGenre($_SESSION["userid"]); ?></p>
                    <p><strong>Type:</strong> <?php echo $profileInfo->fetchType($_SESSION["userid"]); ?></p>
                </div>
            </div>
            <div class="profile-content">
              <div class="profile-intro">
                <h3>
                  <?php
                      $profileInfo->fetchTitle($_SESSION["userid"]);
                  ?>
                </h3>
                <p>
                  <?php
                      $profileInfo->fetchText($_SESSION["userid"]);
                  ?>
                </p>
              </div>
            </div>
        </div>
    </div>
</section>
    
</body>
</html>
