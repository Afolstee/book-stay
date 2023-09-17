document.getElementById('date-selector-button').addEventListener('click', function() {
    console.log('Button clicked'); // Add this line
    var dateInputs = document.querySelector('.date-selector .date-inputs');
    dateInputs.classList.toggle('active');
});