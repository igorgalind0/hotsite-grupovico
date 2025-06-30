<?php
function sanitize($value)
{
    return htmlspecialchars(trim($value));
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nome = sanitize($_POST['nome'] ?? '');
    $email = sanitize($_POST['email'] ?? '');

    if (!$nome || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Nome ou e-mail inválido.");
    }

    $arquivo = "inscritos.txt";

    // Verificar se já está inscrito
    if (file_exists($arquivo)) {
        $linhas = file($arquivo, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($linhas as $linha) {
            list(, $emailSalvo) = explode(" | ", $linha);
            if (strtolower($emailSalvo) === strtolower($email)) {
                die("Este e-mail já está inscrito.");
            }
        }
    }

    // Salvar no arquivo
    $registro = "$nome | $email" . PHP_EOL;
    file_put_contents($arquivo, $registro, FILE_APPEND);

    // Enviar email de boas-vindas
    $assunto = "Bem-vindo à nossa newsletter!";
    $mensagem = "Olá $nome,\n\nObrigado por se inscrever na nossa newsletter!\nFique ligado nas novidades.\n\n— Equipe Quasar ✨";
    $cabecalhos = "From: atendimento@grupovico.com.br\r\nReply-To: atendimento@grupovico.com.br";

    // if (mail($email, $assunto, $mensagem, $cabecalhos)) {
    //     echo "Inscrição realizada com sucesso! Verifique seu e-mail.";
    // } else {
    //     echo "Erro ao enviar e-mail. Mas sua inscrição foi salva.";
    // }
    echo "Newsletter enviada";
} else {
    echo "Acesso inválido.";
}