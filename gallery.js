function openModal(title, inspiration, description) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalInspiration').innerText = inspiration;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('modal').style.display = 'block';
  }
  
  function closeModal() {
    document.getElementById('modal').style.display = 'none';
  }
  