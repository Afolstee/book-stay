// Get references to the button and the list
const button = document.getElementById('collapse-btn');
const list = document.getElementById( 'collapsible-list');

// Function to toggle the list visibility
function toggleList() {
    if (list.style.display === 'none') {
        list.style.display = 'block'; // Show the list
    } else {
        list.style.display = 'none'; // Hide the list
    }
}

// Attach an event listener to the button to toggle the list when clicked
button.addEventListener('click', toggleList);
//button.addEventListener('mouseover', toggleList);
//button.addEventListener('mouseout', toggleList);



// window.onscroll = function() { myFunction() };

//     var stickyContainer = document.getElementById("stickyContainer");
//     var sticky = stickyContainer.offsetTop;

//     function myFunction() {
//       if (window.pageYOffset >= sticky) {
//         stickyContainer.classList.add("sticky");
//       } else {
//         stickyContainer.classList.remove("sticky");
//       }
//     }
    // JavaScript to toggle the mobile menu
// JavaScript to toggle the mobile menu
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const checkinDate = document.getElementById('checkin').value;
    const checkoutDate = document.getElementById('checkout').value;
    alert(`You selected Check-In Date: ${checkinDate} and Check-Out Date: ${checkoutDate}`);
  });
