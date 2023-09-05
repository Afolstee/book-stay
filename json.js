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
document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('toggle-btn');
  const list1 = document.getElementById('collapsible-list');
  const list2 = document.getElementById('collapsible-list2');

  toggleBtn.addEventListener('click', function () {
      list1.classList.toggle('show');
      list2.classList.toggle('show');
  });
});
