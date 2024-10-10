<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
   // Sanitize inputs
   $name = htmlspecialchars(trim($_POST['name']));
   $email = htmlspecialchars(trim($_POST['email']));
   $subject = htmlspecialchars(trim($_POST['subject']));
   $message = htmlspecialchars(trim($_POST['message']));

   // Email details
   $to = 'jwcurtis94@gmail.com'; // Your email address
   $headers = "From: $email" . "\r\n" .
              "Reply-To: $email" . "\r\n" .
              "X-Mailer: PHP/" . phpversion();

   // Construct the email message
   $email_body = "You have received a new message from your website contact form.\n\n".
                 "Here are the details:\n".
                 "Name: $name\n".
                 "Email: $email\n".
                 "Subject: $subject\n".
                 "Message: \n$message";

   // Send the email
   if (mail($to, $subject, $email_body, $headers)) {
      // Success message (you can replace this with a redirect or thank you page)
      echo "Message sent successfully!";
   } else {
      // Failure message
      echo "Failed to send message. Please try again!";
   }
}

?>
