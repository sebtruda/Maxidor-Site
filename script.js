function showTab(tabId) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    // Remove active class from all tab buttons
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });

    // Show the clicked tab content and mark the button as active
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}
