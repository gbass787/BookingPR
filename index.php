<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, intial-scale=1.0">
    <title>BookingPR - Home</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<header>
  <nav>
    <div class="logo">Company Logo</div>
  </nav>
</header>

<main>
  <div class="search-container">
    <form action="search.php" method="get">
      <input type="text" name="query" placeholder="Search for Artists or Groups">
      <button type="submit">Search</button>
    </form>
  </div>

<section class="index-login">
  <div class="wrapper">
    <div class="index-login-signup">
      <h4>SIGN UP</h4>
      <p>Don't have an account yet? Sign up here!</p>
      <form action="includes/signup.inc.php" method="post">
        <input type="text" name="uid" placeholder="Username">
        <input type="password" name="pwd" placeholder="Password">
        <input type="password" name="pwdrepeat" placeholder="Repeat Password">
        <input type="text" name="email" placeholder="E-mail">
        <br>
        <button type="submit" name="submit">SIGN UP</button>
      </form>
    </div>
    <div class="index-login-login">
      <h4>LOGIN</h4>
      <p>Don't have an account yet? Sign up here!</p>
      <form action="includes/login.inc.php" method="post">
        <input type="text" name="uid" placeholder="Username">
        <input type="password" name="pwd" placeholder="Password">
        <br>
        <button type="submit" name="submit">LOGIN</button>  
      </form>
    </div>
  </div>
</section>
</main>

<footer>
  <p>Copyright &copy; 2023</p>
</footer>

</body>