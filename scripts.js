// JavaScript para interatividade simples

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Previne o envio padrão do formulário
        
        // Simula um envio de formulário
        alert('Obrigado por se inscrever no Protocolo Mindset! Em breve entraremos em contato.');
        
        // Aqui você pode adicionar código para enviar o formulário via AJAX ou outra lógica
        form.reset(); // Limpa o formulário
    });
});
