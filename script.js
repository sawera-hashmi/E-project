document.addEventListener("DOMContentLoaded", () => {
    // 1. AOS Animation Initialize
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: true,
            offset: 120
        });
    }

    // 2. Dynamic Counter Logic
    const counters = document.querySelectorAll('.dynamic-counter');
    const speed = 60; 

    const startCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        const suffix = counter.getAttribute('data-suffix') || "";
        let count = 0;

        if (target === 0) {
            counter.innerText = target + suffix;
            return;
        }

        const increment = target / speed;

        const updateCount = () => {
            count += increment;
            if (count < target) {
                counter.innerText = Math.floor(count) + suffix;
                setTimeout(updateCount, 25);
            } else {
                counter.innerText = target + suffix;
            }
        };
        updateCount();
    };

    // Intersection Observer for Counters
    if (counters.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    startCounter(entry.target);
                    observer.unobserve(entry.target); 
                }
            });
        });

        counters.forEach(counter => observer.observe(counter));
    }
    
    console.log("Shrek Juices Script Loaded successfully!");
});


// For Menu Card

function confirmOrder() {

    let name = document.getElementById("juice").value;

    if(name === ""){
       
        return;
    }

    alert("🎉 Thank You " + name + "! Your Juice order has been placed successfully.");
    
   
}


