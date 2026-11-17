let checklistLoadedFromStorage = false;

function renderChecklist() {
    const container = id('checklist-container');
    container.innerHTML = '';

    // A leitura do localStorage acontece apenas na primeira renderização.
    // Nas chamadas seguintes, checklistItems (em memória) já é a fonte da verdade.
    if (!checklistLoadedFromStorage) {
        const saved = localStorage.getItem('selva_checklist');
        if (saved) {
            try { checklistItems = JSON.parse(saved); } catch (e) {}
        }
        checklistLoadedFromStorage = true;
    }

    checklistItems.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = `checklist-item ${item.completed ? 'completed' : ''}`;
        div.innerHTML = `
            <label>
                <input type="checkbox" ${item.completed ? 'checked' : ''} onchange="toggleChecklist(${index})">
                <span>${item.text}</span>
            </label>
            <button class="delete-btn" onclick="deleteChecklistItem(${index})">&times;</button>
        `;
        container.appendChild(div);
    });

    localStorage.setItem('selva_checklist', JSON.stringify(checklistItems));
}

function toggleChecklist(index) {
    checklistItems[index].completed = !checklistItems[index].completed;
    renderChecklist();
}

function addChecklistItem() {
    const input = id('checklist-new-item');
    if (input.value.trim() !== '') {
        checklistItems.push({ id: Date.now(), text: input.value.trim(), completed: false });
        input.value = '';
        renderChecklist();
    }
}

function deleteChecklistItem(index) {
    checklistItems.splice(index, 1);
    renderChecklist();
}

function resetChecklist() {
    localStorage.removeItem('selva_checklist');
    checklistItems = [
        { id: 1, text: 'Repelente biodegradável', completed: true },
        { id: 2, text: 'Protetor solar resistente à água', completed: true },
        { id: 3, text: 'Roupas leves de manga longa', completed: false }
    ];
    renderChecklist();
}
