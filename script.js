function archiveAssessment() {
    // Simulate archiving the assessment
    document.getElementById('archive-status').textContent = "Assessment has been archived.";
    console.log("Assessment archived");
}

function confirmDeletion() {
    const confirmationText = document.getElementById('delete-confirmation').value;
    const assessmentTitle = "Assessment Title"; // Replace with actual assessment title

    if (confirmationText === assessmentTitle) {
        alert('Assessment deleted successfully.');
        console.log("Assessment deleted");
    } else {
        alert('Confirmation text does not match. Deletion canceled.');
    }
}

function restoreAssessment() {
    // Simulate restoring the assessment
    document.getElementById('restore-status').textContent = "Assessment has been restored.";
    console.log("Assessment restored");
}

function exportData() {
    alert('Assessment data exported successfully.');
    console.log("Assessment data exported");
}

