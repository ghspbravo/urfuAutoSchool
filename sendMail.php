<?php

$name = $_POST["name"];
$eMail = $_POST["email"];
$pNumber = $_POST["phone"];

$to = "eug.kabanov@live.ru";
$subject = "Заявка автошколы (тест)";
$message = "
<html>
<head>
  <title>Новая заявка</title>
</head>
<body>
  <p>
    ФИО: " . $name . "<br>
    Почта: " . $eMail . "<br>
    Телефон: " . $pNumber . "<br>
  </p>
</body>
</html>
";
$headers = 'From: autoschool@urfu.ru';

mail($to, $subject, $message, $headers);

?>