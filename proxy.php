<?php
  $url = $_GET['https://starlit-taffy-3ea5ac.netlify.app/'];
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  $data = curl_exec($ch);
  curl_close($ch);
  echo $data;
?>
