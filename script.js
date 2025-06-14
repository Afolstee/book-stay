        window.addEventListener('load', function() {
            const loading = document.getElementById('loading');
            setTimeout(() => {
                loading.classList.add('hidden');
            }, 1000);
        });

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // FAQ toggle function
        function toggleFaq(button) {
            const answer = button.nextElementSibling;
            const icon = button.querySelector('span');
            
            // Close all other FAQs
            document.querySelectorAll('.faq-answer').forEach(faq => {
                if (faq !== answer) {
                    faq.classList.remove('active');
                    faq.previousElementSibling.querySelector('span').textContent = '+';
                }
            });
            
            // Toggle current FAQ
            answer.classList.toggle('active');
            icon.textContent = answer.classList.contains('active') ? '−' : '+';
        }

        // Set default dates
        document.addEventListener('DOMContentLoaded', function() {
            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);
            
            const checkinInput = document.getElementById('checkin');
            const checkoutInput = document.getElementById('checkout');
            
            checkinInput.value = today.toISOString().split('T')[0];
            checkoutInput.value = tomorrow.toISOString().split('T')[0];
            
            // Update checkout date when checkin changes
            checkinInput.addEventListener('change', function() {
                const checkinDate = new Date(this.value);
                const minCheckout = new Date(checkinDate);
                minCheckout.setDate(minCheckout.getDate() + 1);
                
                checkoutInput.min = minCheckout.toISOString().split('T')[0];
                if (checkoutInput.value <= this.value) {
                    checkoutInput.value = minCheckout.toISOString().split('T')[0];
                }
            });
        });

        // Form submission
        document.querySelector('.search-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const location = document.getElementById('location').value;
            const checkin = document.getElementById('checkin').value;
            const checkout = document.getElementById('checkout').value;
            const guests = document.getElementById('guests').value;
            
            if (!location) {
                alert('Please enter a destination');
                return;
            }
            
            // Simulate search results
            alert(`Searching for hotels in ${location} for ${guests} guest(s) from ${checkin} to ${checkout}`);
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Card hover effects
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });