<?php 
	session_start();
	function file_tree_dir(){
		$mode=$_SESSION['mode'];
		// $constraints=$_SESSION['file_tree_constraints'];
		// include "./controllers/file_tree.php";
		if(strlen($_SESSION['mode'])<3){
			var_dump(http_response_code(404));
			die();
		}
		$path=$_GET['path'];
		$root=$_SERVER['DOCUMENT_ROOT'];
		$dir=$url = rtrim($root.'/'.$path,"/")."/";
		$dir_tree=array(array(),array());
		if ($handle = opendir($dir)) {
		    while (false !== ($entry = readdir($handle))) {
		        if ($entry != "." && $entry != "..") {
		        	if(is_dir($dir.$entry)){
		        		array_push($dir_tree[0], $entry);
		        	}
		        	else{
		        		array_push($dir_tree[1], $entry);
		        	}
		        }
		    }
		    closedir($handle);
		}
		$data_to_send=json_encode($dir_tree);
		echo $data_to_send;
	}


	$func_to_perform = $_GET['data'];
	if($func_to_perform == 'file_tree_dir')
		file_tree_dir();

 ?>