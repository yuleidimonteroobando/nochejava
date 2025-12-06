const input = document.getElementById('search-input');
input.addEventListener('keyup', filterTable);

function filterTable(event) {
  const filter = event.target.value.toLowerCase();
  const table = document.getElementById('data-table');
  const tr = table.getElementsByTagName('tr');

  for (let i = 1; i < tr.length; i++) {
    const td = tr[i].getElementsByTagName('td');
    let showRow = false;

    for (let j = 0; j < td.length; j++) {
      if (td[j].textContent.toLowerCase().includes(filter)) {
        showRow = true;
        break;
      }
    }
    tr[i].style.display = showRow ? '' : 'none';
  }
}
