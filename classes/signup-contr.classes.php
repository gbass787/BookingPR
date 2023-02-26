<?php

class SignupContr extends Signup {

    private $uid;
    private $email;
    private $pwd;

    public function __construct($uid, $email, $pwd) {
        $this->uid = $uid;
        $this->email = $email;
        $this->pwd = $pwd;
    }

    public function signupUser() {
        try {
            $userExists = $this->checkUser($this->uid, $this->email);
        } catch (Exception $e) {
            header("location: ../index.php?error=" . $e->getMessage());
            exit();
        }

        if($userExists) {
            try {
                $this->setUser($this->uid, $this->pwd, $this->email);
            } catch (Exception $e) {
                header("location: ../index.php?error=" . $e->getMessage());
                exit();
            }

            header("location: ../index.php?signup=success");
            exit();
        } else {
            header("location: ../index.php?error=usertaken");
            exit();
        }
    }

    public function uidTakenCheck() {
        try {
            $userExists = $this->checkUser($this->uid, $this->email);
        } catch (Exception $e) {
            header("location: ../signup.php?error=" . $e->getMessage());
            exit();
        }

        if($userExists) {
            header("location: ../signup.php?signup=uidavailable");
            exit();
        } else {
            header("location: ../signup.php?error=usertaken");
            exit();
        }
    }

}
