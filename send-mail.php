<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // simple anti-bot honeypot field
    $honeypot = trim($_POST['website'] ?? '');
    if ($honeypot !== '') {
        // probable bot, silently ignore
        header('Location: index.html?error=1');
        exit;
    }

    $name    = htmlspecialchars(trim($_POST['name'] ?? ''));
    $email   = htmlspecialchars(trim($_POST['email'] ?? ''));
    $message = htmlspecialchars(trim($_POST['message'] ?? ''));

    if ($name && $email && $message && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $to      = 'cherpinb@gmail.com';
        $subject = "Portfolio - Message de $name";
        $body    = "De : $name <$email>\n\n$message";
        $headers = "From: noreply@batdev.fr\r\nReply-To: $email";

        mail($to, $subject, $body, $headers);
        header('Location: index.html?sent=1');
    } else {
        header('Location: index.html?error=1');
    }
    exit;
}