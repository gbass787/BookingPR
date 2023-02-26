<?php

class ProfileInfoView extends ProfileInfo {

    protected $conn;

    public function __construct() {
        $this->conn = (new Dbh)->getConnection();
    }

    public function fetchAbout($userId) {
        $profileInfo = $this->getProfileInfo($userId);

        echo $profileInfo["profiles_about"] ?? "";
    }

    public function fetchTitle($userId) {
        $profileInfo = $this->getProfileInfo($userId);

        echo $profileInfo["profiles_introtitle"] ?? "";
    }

    public function fetchText($userId) {
        $profileInfo = $this->getProfileInfo($userId);

        echo $profileInfo["profiles_introtext"] ?? "";
    }

    public function fetchRegion($userId) {
        $profileInfo = $this->getProfileInfo($userId);

        echo $profileInfo["profiles_region"] ?? "";
    }

    public function fetchGenre($userId) {
        $profileInfo = $this->getProfileInfo($userId);

        echo $profileInfo["profiles_genre"] ?? "";
    }

    public function fetchType($userId) {
        $profileInfo = $this->getProfileInfo($userId);

        echo $profileInfo["profiles_type"] ?? "";
    }

    public function fetchProfile($profileID) {
        $stmt = $this->conn->prepare("SELECT * FROM profiles JOIN users ON profiles.users_id = users.users_id WHERE profiles_id = ?");
        $stmt->execute([$profileID]);
        $profile = $stmt->fetch(PDO::FETCH_ASSOC);
        
        return $profile;
    }
    
}
