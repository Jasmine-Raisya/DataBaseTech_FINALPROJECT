document.addEventListener('DOMContentLoaded', () => {
    const page = window.location.pathname.split('/').pop().split('.').shift();
    switch (page) {
        case 'hotels':
            fetchData('hotels', 'hotelsTable');
            break;
        case 'guests':
            fetchData('guests', 'guestsTable');
            break;
        case 'rooms':
            fetchData('rooms', 'roomsTable');
            break;
        case 'room-details':
            fetchData('room-details', 'roomDetailsTable');
            break;
        case 'reservations':
            fetchData('reservations', 'reservationsTable');
            break;
        case 'payments':
            fetchData('payments', 'paymentsTable');
            break;
    }
});

function fetchData(endpoint, tableId) {
    fetch(`/${endpoint}`)
        .then(response => response.json())
        .then(data => populateTable(data, tableId))
        .catch(error => console.error('Error fetching data:', error));
}

function populateTable(data, tableId) {
    const tableBody = document.getElementById(tableId).querySelector('tbody');
    tableBody.innerHTML = '';
    data.forEach(item => {
        const row = document.createElement('tr');
        Object.values(item).forEach(value => {
            const cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        });
        tableBody.appendChild(row);
    });
}

