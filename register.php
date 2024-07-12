<?php
require_once('db.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    // Insert user into database
    $query = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";
    $result = mysqli_query($conn, $query);

    if ($result) {
        header('Location: index.html'); // Redirect to login page after successful registration
        exit();
    } else {
        echo "Error: " . mysqli_error($conn);
    }
}

mysqli_close($conn);
?>
