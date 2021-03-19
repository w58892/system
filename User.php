<?php 

class User
{
  private $userID;
  private $email;


  public function login($email, $password ){
    $response = [];

    if ($email == "")
      $response['email'] = "empty";
    //else
     // $email = $email;

    if ($password  == "")
      $response['password'] = "empty";
    //else
     // $password = $password ;

    if (!empty($response))
      return ($response);

    global $db;
    $sth = $db->prepare('SELECT * FROM users WHERE email=:email limit 1');
    $sth->bindValue(':email', $email, PDO::PARAM_STR);
    $sth->execute();
    $user = $sth->fetch(PDO::FETCH_ASSOC);

    if ($user) {
      $hash = $user['password'];
      if (password_verify($password, $hash)) {
        $_SESSION['userID'] = $user['userID'];
        //$_SESSION['login'] = "true";
        if ($user['admin'] == 1) {
          $_SESSION['admin'] = $user['userID'];
        } 
//return "success";
        $response['success'] = "true";
          //return($response);
          return($response);
        } else {
          $response['password'] = "wrong";
          return($response);
        }
      } else {
        $response['email'] = "wrong";
        return($response);
      }
    }

    public function register($email, $password, $password2){
      $response = [];
        
      if ($email == "") {
        $response['email'] = "empty";
      } else
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $email = $email;
      } else {
        $response['email'] = "wrong";
      }
        
      if ($password == "")
        $response['password'] = "empty";
      else
        if (strlen($password) >= 8)
        $password = $password;
      else
        $response['password'] = "short";
        
      if ($password2 == "")
        $response['password2'] = "empty";
      else
        $password2 = $password2;
        
      if (!empty($response))
        return($response);
        
      if ($password2 != $password) {
        $response['passwords'] = "wrong";
        return($response);
      } 
      $hashPassword = password_hash($password, PASSWORD_DEFAULT);
      global $db;

      $sth = $db->prepare('SELECT * FROM users WHERE email=:email limit 1');
      $sth->bindValue(':email', $email, PDO::PARAM_STR);
      $sth->execute();
      $user = $sth->fetch(PDO::FETCH_ASSOC);
      if ($user) {
        $response['email'] = "exist";
        return($response);
      }
      
      $sth = $db->prepare('INSERT INTO users (email, password) VALUE (:email,:password)');
      $sth->bindValue(':email', $email, PDO::PARAM_STR);
      $sth->bindValue(':password', $hashPassword, PDO::PARAM_STR);
      $user = $sth->execute();
        
      if ($user == true) {
        
       return $this->login($email, $password );
        //$response['success'] = 'true';
        //return($response);
      }
    }

    public function getID(){
      return $this->userID;
    }

    public function getEmail(){
      return $this->email;
    }

    public function logout(){
      unset($_SESSION['userID']);
     // unset($_SESSION['login']);
      unset($_SESSION['admin']);
      $response['logout'] = "success";
      return($response);
    }

    




}
?>