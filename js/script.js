// ---------------------------------------------------------------------------------------------------------------------------------------






    // Wait for the DOM to be fully loaded
    document.addEventListener("DOMContentLoaded", function() {
        // Get the "Book A Visit" link
        var bookVisitLink = document.querySelector('a[href="#bookform"]');
        
        // Get the visit section
        var visitSection = document.getElementById('bookform');
        
        // Smooth scroll function
        function scrollTo(element) {
            window.scroll({
                behavior: 'smooth',
                left: 0,
                top: element.offsetTop
            });
        }
        
        // Add click event listener to the "Book A Visit" link
        bookVisitLink.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            
            // Scroll to the visit section
            scrollTo(visitSection);
        });
    });

// ----------------------------------------------------------------------------------------------------------------------------------------------------------



    // Wait for the DOM to be fully loaded
    document.addEventListener("DOMContentLoaded", function() {
        // Get the Contact Us link from the navbar
        var contactLink = document.querySelector('a[href="#contact"]');
        
        // Get the footer section
        var footerSection = document.querySelector('.footer');
        
        // Smooth scroll function
        function scrollTo(element) {
            window.scroll({
                behavior: 'smooth',
                left: 0,
                top: element.offsetTop
            });
        }
        
        // Add click event listener to the Contact Us link
        contactLink.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            
            // Scroll to the footer section
            scrollTo(footerSection);
        });
    });
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



