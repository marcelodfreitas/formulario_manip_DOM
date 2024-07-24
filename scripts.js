document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('messageForm');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;

        const newMessage = {
            userId: 1, // Substitua pelo ID de usuário real
            title: title.value,
            description: description.value
        };

        try {
            await createNewMessage(newMessage);
            form.reset();

            // Direcionar o conteúdo para a página index.html
            window.location.href = 'index.html';
        } catch (error) {
            console.error('Erro ao cadastrar o recado:', error);
        }
    });
});

async function createNewMessage(message) {
    const response = await fetch('http://seu-servidor.com/api/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    });

    if (!response.ok) {
        throw new Error('Erro ao cadastrar o recado');
    }

    return response.json();
}
