<?php 
	function file_tree_dir(){
		$constraints=$_SESSION['file_tree_constraints'];
		
	}




	$func_to_perform = $_GET['data'];
	if($func_to_perform == 'file_tree_dir')
		file_tree_dir();

 ?>