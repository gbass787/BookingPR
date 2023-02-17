<?php

class ProfileInfo extends Dbh {

    protected function getProfileInfo($userId) {
        $stmt = $this->connect()->prepare('SELECT * FROM profiles WHERE users_id = ?;');

        if(!$stmt->execute(array($userId))) 
        {
            $stmt = null;
            header("location: profile.php?error=stmtfailed");
            exit();
        }

        if($stmt->rowCount() == 0)
        {
            $stmt = null;
            header("location: profile.php?error=profilenotfound");
            exit();
        }

        $profileData = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $profileData;
    }

    protected function setNewProfileInfo($profileAbout, $profileTitle, $profileText, $profileRegion, $profileGenre, $profileType, $userId) {
        $stmt = $this->connect()->prepare('UPDATE profiles SET profiles_about = ?, profiles_introtitle = ?, profiles_introtext = ?, profiles_region = ?, profiles_genre = ?, profiles_type = ? WHERE users_id = ?;');

        if(!$stmt->execute(array($profileAbout, $profileTitle, $profileText, $profileRegion, $profileGenre, $profileType, $userId))) 
        {
            $stmt = null;
            header("location: profile.php?error=stmtfailed");
            exit();
        }

        $stmt = null;
    }

    protected function setProfileInfo($profileAbout, $profileTitle, $profileText, $profileRegion, $profileGenre, $profileType, $userId) {
        $stmt = $this->connect()->prepare('INSERT INTO profiles (profiles_about, profiles_introtitle, profiles_introtext, profiles_region, profiles_genre, profiles_type, users_id) VALUES (?, ?, ?, ?, ?, ?, ?);');

        if(!$stmt->execute(array($profileAbout, $profileTitle, $profileText, $profileRegion, $profileGenre, $profileType, $userId))) 
        {
            $stmt = null;
            header("location: profile.php?error=stmtfailed");
            exit();
        }

        $stmt = null;
    }


}