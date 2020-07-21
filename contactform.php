<?php

if (isset($_POST['submit'])) {
	$phone = $_POST['phone'];
	$item = $_POST['item'];
	$subject = "ny bestilling";
	$mailFrom = "msg@msg.com"
		$mailTo = "contactme@notedog.co"
		$txt = "ny bestilling fra ".$name."\n".$item;

	mail($mailTo, $subject, $txt);
	header("Location : index.php?mailsend")
}
