
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        document.getElementById('adminPanel').style.display = 'block';
    }
});

function closeAdminPanel() {
    document.getElementById('adminPanel').style.display = 'none';
}

function updateBalances() {
    const syntheticVal = document.getElementById('syntheticInput').value;
    const financialVal = document.getElementById('financialInput').value;
    const demoVal = document.getElementById('demoInput').value;

    if (syntheticVal !== "") {
        document.querySelector('.balance[data-id="synthetic"]').innerText = parseFloat(syntheticVal).toFixed(2);
    }
    if (financialVal !== "") {
        document.querySelector('.balance[data-id="financial"]').innerText = parseFloat(financialVal).toFixed(2);
    }
    if (demoVal !== "") {
        document.querySelector('.balance[data-id="demo"]').innerText = parseFloat(demoVal).toFixed(2);
    }
}
