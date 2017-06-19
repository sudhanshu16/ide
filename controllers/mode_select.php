<link href='https://fonts.googleapis.com/css?family=Open+Sans:300' rel='stylesheet' type='text/css'>
<style type="text/css">
	html{
		font-family: Open Sans;
		font-weight: 400;
		text-align: center;
	}
	h2{
		font-weight: 300;

	}
	a{
		background: #575D65;
		color:#fff;
		border:0;
		border-radius: 4px;
		padding:6px 10px;
		cursor: pointer;
		text-decoration: none;
		display: inline-block;
		margin:10px 30px;
		width:100px;
	}
	a:hover{
		opacity: 0.9;
	}
</style>
<?php 
	session_start();
	if(!isset($_GET['set_mode'])){
?>
<h2>Select Mode in which you want to operate.</h2>
<a href="?set_mode=Directory">Directory</a><a href="?set_mode=FTP">FTP</a>
<?php		
	}
	else{
		$_SESSION['mode']=$_GET['set_mode'];
?>
<h2>You have selected <b><?php echo $_GET['set_mode'] ?></b> as your operational mode. Close this prompt to work with this mode.</h2>
<?php
	}

 ?>
