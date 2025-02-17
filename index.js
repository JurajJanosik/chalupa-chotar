document.addEventListener("DOMContentLoaded", (event) => {

    // Efekt scrollovania pre sekciu #skivratna
    document.addEventListener('scroll', function () {
        const imageContainer = document.querySelector('#skivratna .image-container');
        const containerPosition = imageContainer.getBoundingClientRect().top; // Pozícia elementu
        const screenPosition = window.innerHeight / 1.5; // Výška okna pre aktiváciu

        if (containerPosition < screenPosition) {
            imageContainer.classList.add('scrolled'); // Pridá triedu
        } else {
            imageContainer.classList.remove('scrolled'); // Odstráni triedu (ak sa posunie späť hore)
        }
    });

    // Select the target element
    const targetElement = document.querySelector('#head-nav'); // Replace '.your-element' with your target element's selector

    // Add scroll event listener
    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            // Add the class when scrolled down
            targetElement.classList.add("scroll");
        } else {
            // Remove the class when at the top
            targetElement.classList.remove("scroll");
        }
    });

    const galleryImages = document.querySelectorAll('.gallery-img');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeModal = document.querySelector('.close');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    let currentIndex = 0;

    function showModal(index) {
        currentIndex = index;
        modalImage.src = galleryImages[currentIndex].src;
        modal.style.display = 'flex';
    }

    function closeModalFunction() {
        modal.style.display = 'none';
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        modalImage.src = galleryImages[currentIndex].src;
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        modalImage.src = galleryImages[currentIndex].src;
    }

    galleryImages.forEach((img, index) => {
        img.addEventListener('click', () => showModal(index));
    });

    closeModal.addEventListener('click', closeModalFunction);
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);

    document.addEventListener('keydown', (event) => {
        if (modal.style.display === 'flex') {
            if (event.key === 'ArrowRight') {
                showNextImage();
            } else if (event.key === 'ArrowLeft') {
                showPrevImage();
            } else if (event.key === 'Escape') {
                closeModalFunction();
            }
        }
    });

    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeBtn = document.querySelector('.close-btn');

    // Open menu
    hamburger.addEventListener('click', () => {
        mobileMenu.style.display = 'block';
    });

    // Close menu
    closeBtn.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
    });

    // Close menu on outside click
    window.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            mobileMenu.style.display = 'none';
        }
    });

    const links = document.querySelectorAll('.mobile-menu a');

    // Close menu when a link is clicked
    links.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.style.display = 'none';
        });
    });

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
        
    let today = new Date();
    let sections = document.querySelectorAll(".price-section");
    let container = document.getElementById("priceSections");
    let found = false;

    sections.forEach((section) => {
        let startDate = new Date(section.getAttribute("data-start"));
        let endDate = new Date(section.getAttribute("data-end"));

        if (today >= startDate && today <= endDate) {
            section.classList.add("current");
            container.scrollLeft = section.offsetLeft - container.offsetLeft;
            found = true;
        }
    });

    // Ak sa nenašla aktuálna sezóna, zobrazí prvú
    if (!found) {
        container.scrollLeft = 0;
    }

    let container2 = document.querySelector(".price-sections");

    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowRight") {
            container2.scrollBy({ left: 300, behavior: "smooth" });
        } else if (event.key === "ArrowLeft") {
            container2.scrollBy({ left: -300, behavior: "smooth" });
        }
    });

    const leftArrow = document.querySelector(".arrow-left");
    const rightArrow = document.querySelector(".arrow-right");

    function scrollLeft() {
        container2.scrollBy({ left: -300, behavior: "smooth" });
    }

    function scrollRight() {
        container2.scrollBy({ left: 300, behavior: "smooth" });
    }

    // Posúvanie kliknutím na šípky
    leftArrow.addEventListener("click", scrollLeft);
    rightArrow.addEventListener("click", scrollRight);

    // Posúvanie šípkami na klávesnici
    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowRight") {
            scrollRight();
        } else if (event.key === "ArrowLeft") {
            scrollLeft();
        }
    });
});


