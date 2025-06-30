<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['termos'])) {
        // Sanitização básica dos dados
        $nome = htmlspecialchars(trim($_POST['nome'] ?? ''));
        $telefone = htmlspecialchars(trim($_POST['telefone'] ?? ''));
        $email = htmlspecialchars(trim($_POST['email'] ?? ''));
        $mensagem = "Nome: $nome\nTelefone: $telefone\nEmail: $email";

        $destinatario = "atendimento@grupovico.com.br";
        $assunto = "Mensagem do site";

        // Cabeçalho "From" com validação simples
        $headers = "From: $email\r\nReply-To: $email\r\n";

        // if (mail($destinatario, $assunto, $mensagem, $headers)) {
        //     echo "Mensagem enviada com sucesso!";
        // } else {
        //     echo "Erro ao enviar a mensagem.";
        // }
        echo "Mensagem enviada";
    } else {
        echo "Você precisa aceitar os termos para enviar a mensagem.";
    }
} else {
    echo "Método inválido.";
}