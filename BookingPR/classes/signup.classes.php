<?php

class Signup extends Dbh {

    protected function setUser($uid, $pwd, $email) {
        $stmt = $this->connect()->prepare('INSERT INTO users (users_uid, users_pwd, users_email) VALUES (?, ?, ?);');

        $hashedPwd = password_hash($pwd, PASSWORD_DEFAULT);

        try {
            $stmt->execute(array($uid, $hashedPwd, $email));
        } catch (PDOException $e) {
            $stmt = null;
            throw new Exception("Statement failed: " . $e->getMessage());
        }

        $stmt = null;
    }

    protected function checkUser($uid, $email) {
        $stmt = $this->connect()->prepare('SELECT users_uid FROM users WHERE users_uid = ? OR users_email = ?;');

        try {
            $stmt->execute(array($uid, $email));
        } catch (PDOException $e) {
            $stmt = null;
            throw new Exception("Statement failed: " . $e->getMessage());
        }

        if($stmt->rowCount() > 0) {
            return false;
        } else {
            return true;
        }
    }

    protected function getUserId($uid) {
        $stmt = $this->connect()->prepare('SELECT users_id FROM users WHERE users_uid = ?;');

        try {
            $stmt->execute(array($uid));
        } catch (PDOException $e) {
            $stmt = null;
            throw new Exception("Statement failed: " . $e->getMessage());
        }

        if($stmt->rowCount() == 0) {
            $stmt = null;
            throw new Exception("Profile not found.");
        }

        $profileData = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $profileData;
    }

}
