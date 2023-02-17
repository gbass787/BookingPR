<?php

class ProfileInfoContr extends ProfileInfo {

    private $userId;
    private $userUid;

    public function __construct($userId, $userUid) {
        $this->userId = $userId;
        $this->userUid = $userUid;
    }

    public function defaultProfileInfo() {
        $profileAbout = "Tell people about yourself!";
        $profileTitle = "This is " . $this->userUid;
        $profileText = "Welcome to my profile page!";
        $profileRegion = "Select Region!";
        $profileGenre = "Select Genre!";
        $profileType = "Select Type!";
        $this->setProfileInfo($profileAbout, $profileTitle, $profileText, $profileRegion, $profileGenre, $profileType,  $this->userId);
    }

    public function updateProfileInfo($about, $introTitle, $introText, $region, $genre, $type) {
        // Error handlers
        if($this->emptyInputCheck($about, $introTitle, $introText, $region, $genre, $type) == true) {
            header("location: ../profilesettings.php?error=emptyinput");
            exit();
        }

        // Update profile info
        $this->setNewProfileInfo($about, $introTitle, $introText, $region, $genre, $type, $this->userId);
    }
    
    private function emptyInputCheck($about, $introTitle, $introText, $region, $genre, $type) {
        $result;
        if(empty($about) || empty($introTitle) || empty($introText) || empty($region) || empty($genre) || empty($type)) {
            $result = true;
        }
        else {
            $result = false;
        }
        return $result;
    }

}