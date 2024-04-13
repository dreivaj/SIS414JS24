let items = [];

        function addItem() {
            const name = document.getElementById('name').value;
            const description = document.getElementById('description').value;
            const image = document.getElementById('image').files[0];

            if (name === '' || description === '' || !image) {
                alert('Por favor, completa todos los campos.');
                return;
            }

            const newItem = {
                id: Date.now(),
                name: name,
                description: description,
                image: URL.createObjectURL(image)
            };

            items.push(newItem);

            displayItems();

            document.getElementById('name').value = '';
            document.getElementById('description').value = '';
            document.getElementById('image').value = '';
        }

        function displayItems() {
            const itemList = document.getElementById('item-list');
            itemList.innerHTML = '';

            items.forEach(item => {
                const itemElement = `
                    <div class="list-group-item" id="${item.id}">
                        <img src="${item.image}" alt="${item.name}">
                        <div>
                            <h3>${item.name}</h3>
                            <p>${item.description}</p>
                        </div>
                        <div class="action-buttons">
                            <button class="edit" onclick="editItem(${item.id})">Editar</button>
                            <button class="delete" onclick="deleteItem(${item.id})">Eliminar</button>
                        </div>
                    </div>
                `;

                itemList.innerHTML += itemElement;
            });
        }

        function editItem(id) {
            const item = items.find(item => item.id === id);

            document.getElementById('name').value = item.name;
            document.getElementById('description').value = item.description;

            items = items.filter(item => item.id !== id);
            displayItems();
        }

        function deleteItem(id) {
            items = items.filter(item => item.id !== id);
            displayItems();
        }

        window.addEventListener('DOMContentLoaded', () => {
            displayItems();
        });