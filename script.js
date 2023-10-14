function calculateScore() {
    let checkboxes = document.querySelectorAll('#purityForm input[type="checkbox"]');
    let checkedCount = 0;

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) checkedCount++;
    });

    let score = checkboxes.length - checkedCount;

    let result = document.getElementById('result');
    result.textContent = `Your Purity Score: ${score}`;

    // Hide the form and show only the result
    document.getElementById('purityForm').style.display = 'none';
}
