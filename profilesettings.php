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
            <div class="profile-settings">
              <h3>PROFILE SETTINGS</h3>
              <p>Change your about section here!</p>
              <form action="includes/profileinfo.inc.php" method="post">
                  <textarea name="about" rows="10" cols="30" placeholder="Profile about section..." value=""><?php $profileInfo->fetchAbout($_SESSION["userid"]); ?></textarea>
                  <br><br>
                  <p>Change your profile page intro here!</p>
                  <br>
                  <input type="text" name="introtitle" placeholder="Profile title..." value="<?php $profileInfo->fetchTitle($_SESSION["userid"]); ?>">
                  <textarea name="introtext" rows="10" cols="30" placeholder="Profile introduction..."><?php $profileInfo->fetchText($_SESSION["userid"]); ?></textarea>
                  <br><br>
                    <label for="region">Region:</label>
                    <select name="region" id="region">
                        <option value="West">West</option>
                        <option value="Metro">Metro</option>
                        <option value="North">North</option>
                        <option value="South">South</option>
                        <option value="Central">Central</option>
                        <option value="East">East</option>
                    </select>
                    <br><br>
                    <label for="genre">Music Genre:</label>
                    <select name="genre" id="genre">
                        <option value="Rock">Rock</option>
                        <option value="Pop">Pop</option>
                        <option value="Hip Hop">Hip Hop</option>
                        <option value="R&B">R&B</option>
                        <option value="Country">Country</option>
                    </select>
                    <br><br>
                    <label for="type">Type:</label>
                    <select name="type" id="type">
                        <option value="Band">Band</option>
                        <option value="Solo Artist">Solo Artist</option>
                    </select>
                    <br><br>
                  <button type="submit" name="submit">SAVE</button>
              </form>
            </div>
        </div>
    </div>
</section>
    
</body>
</html>