<?php
function sanatizeFormPassword(){
	$username = strip_tags($inputText);
	return $inputText;
}

function sanatizeFormUsername($inputText) {
	$username = strip_tags($inputText);
	$username = str_replace(" ", "", $inputText);
	return $inputText;
}

function sanatizeFormString($inputText) {
	$inputText = strip_tags($firstName);
	$inputText = str_replace(" ", "", $inputText);
	$inputText = ucfirst(strtolower($inputText));
	return $inputText;
}

if(isset($_POST['loginButton'])) {
	//Login was Pressed;
}
if(isset($_POST['registerButton'])) {
	// Register wasPressed;


$username = sanatizeFormUsername($_POST['username']);
$firstName = sanatizeFormString($_POST['firstName']);
$lastName = sanatizeFormString($_POST['lastName']);
$email = sanatizeFormString($_POST['email']);
$email2 = sanatizeFormString($_POST['email2']);
$password = ssanatizeFormPassword($_POST['password']);
$password2 = sanatizeFormPassword($_POST['password2']);
}


?>
<html>
<head>
	<title>Welcome to Slotify</title>
</head>

<body>
	<div>	
		<form id="loginForm", action="register.php", method="POST" >

		<h2>Login to your Account</h2>
			<p>
				<label for="loginUsername"></label>
				<input id="loginUsername", name="loginUsername" type="text" placeholder="Bart Simpson" required>
			</p>

			<p>
				<label for="loginPassword"></label>
				<input id="loginPassword", name="loginPassword" type="password"  required>
			</p>	
			<button type="submit", name="loginButton">Login</button>

		</form>

		<form id="registerForm", action="register.php", method="POST" >

		<h2>Create your free account</h2>
			<p>
				<label for="username"></label>
				<input id="username", name="username" type="text" placeholder="Bart Simpson" required>
			</p>
			<p>
				<label for="firstName"></label>
				<input id="firstName", name="firstName" type="text" placeholder="Bart " required>
			</p>
			<p>
				<label for="lastName"></label>
				<input id="lastName", name="lastName" type="text" placeholder="Simpson" required>
			</p>
			<p>
				<label for="email"></label>
				<input id="email", name="email" type="email" placeholder="Bart@gmail.com" required>
			</p>
			<p>
				<label for="email2"></label>
				<input id="email2", name="email2" type="email" placeholder="Bart@gmail.com" required>
			</p>

			<p>
				<label for="password"></label>
				<input id="password", name="password" type="password" placeholder="your password" required>
			</p>	
			<p>
				<label for="password2"></label>
				<input id="password2", name="password2" type="password" placeholder="confirm your password" required>
			</p>	
			<button type="submit", name="registerButton">Register</button>

		</form>

 	</div>


</body>




</html>