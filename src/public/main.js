let currentLinkName = ''; 

// Configurações Modal
function openModal(name, completeLink) {
    currentLinkName = name;
    document.getElementById('editName').value = name;
    document.getElementById('editCompleteLink').value = completeLink;
    document.getElementById('editModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('editModal').style.display = 'none'; 
}

// Requisições

// PUT
async function updateLink(event) {
    event.preventDefault();

    const newName = document.getElementById('editName').value;
    const completeLink = document.getElementById('editCompleteLink').value;

    try {
        const response = await fetch('/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: currentLinkName, 
                complete_link: completeLink,
                newname: newName
            }),
        });

        if (response.ok) {
            location.reload();
        } else {
            console.error('Erro ao atualizar o link:', response.status);
        }
    } catch (error) {
        console.error('Erro no fetch:', error);
    }
}

// DELETE (Deletar link)
async function deleteLink(name) {
    try {
        const response = await fetch('/', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name }), // Passa o nome para deletar
        });

        if (response.ok) {
            location.reload(); // Recarrega a página após a exclusão bem-sucedida
        } else {
            console.error('Erro ao deletar o link:', response.statusText);
        }
    } catch (error) {
        console.error('Erro no fetch:', error);
    }
}

// POST (Adicionar link)
async function addLink() {
    const name = document.getElementById('name').value; 
    const completeLink = document.getElementById('complete_link').value; 

    try {
        const response = await fetch('/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: name, complete_link: completeLink }), 
        });

        if (response.ok) {
            location.reload(); 
        } else {
            console.error('Erro ao adicionar o link:', response.statusText);
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
    }
}
