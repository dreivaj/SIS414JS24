const table = document.getElementById('data-table');
const modal = document.getElementById('modal');
const dataForm = document.getElementById('data-form');
const tbody = table.getElementsByTagName('tbody')[0];
const imageModal = document.getElementById('image-modal');
const imagePreview = document.getElementById('image-preview');

let data = [];

function displayData() {
    tbody.innerHTML = ''; 

    data.forEach((item, index) => {
        const row = tbody.insertRow();
        const cellIndex = row.insertCell();
        cellIndex.textContent = index + 1; 

        const cells = [item.name, item.data];
        cells.forEach(cellData => {
            const cell = row.insertCell();
            cell.textContent = cellData;
        });

        const cellActions = row.insertCell();
        const viewButton = `<button onclick="viewImage('${item.image}')">VER IMAGEN</button>`;
        const editButton = `<button onclick="openModal('edit', ${item.id})">EDITAR</button>`;
        const deleteButton = `<button onclick="deleteData(${item.id})">ELIMINAR</button>`;
        cellActions.innerHTML = viewButton + ' ' + editButton + ' ' + deleteButton;
    });
}

function openModal(mode, itemId = null) {
    modal.classList.remove('hidden');

    if (mode === 'add') {
        dataForm.reset(); 
        document.getElementById('id').value = ''; 
    } else if (mode === 'edit' && itemId) {
        const item = data.find(item => item.id === itemId);
        if (item) {
            document.getElementById('id').value = item.id;
            document.getElementById('name').value = item.name;
            document.getElementById('data').value = item.data;
        }
    }
}

function closeModal() {
    modal.classList.add('hidden');
}

function viewImage(imagePath) {
    imagePreview.src = `images/${imagePath}`;
    imageModal.classList.remove('hidden');
}

function closeImageModal() {
    imageModal.classList.add('hidden');
}

function generateUniqueId() {

    return Math.floor(Math.random() * 100000); 
}

function saveData() {
    const id = parseInt(document.getElementById('id').value);
    const name = document.getElementById('name').value;
    const dataValue = document.getElementById('data').value;
    const image = document.getElementById('image').files[0]; 

    if (!name || !dataValue) {
        alert('INTRODUZCA NOMBRE Y DESCRIPCION.');
        return;
    }

    if (id) {
        const itemIndex = data.findIndex(item => item.id === id);
        if (itemIndex !== -1) {
            data[itemIndex] = { id, name, data: dataValue, image: image ? image.name : data[itemIndex].image };
        }
    } else {
        const newItem = {
            id: generateUniqueId(),
            name,
            data: dataValue,
            image: image ? image.name : '',
        };
        data.push(newItem);
    }

    displayData();
    closeModal();
}

function deleteData(itemId) {
    const confirmed = confirm('SEGURO QUE QUIERES BORRARLO?');
    if (confirmed) {
        const itemIndex = data.findIndex(item => item.id === itemId);
        if (itemIndex !== -1) {
            data.splice(itemIndex, 1);
            displayData();
        }
    }
}

displayData();
