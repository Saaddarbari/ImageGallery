var typed = new Typed('#element', {
    strings: ['Cars','Bikes','Watch','Mobile'],
    typeSpeed: 50,
  });

  document.addEventListener('DOMContentLoaded', function() {
    const carLink = document.querySelector('a[href="#car"]');
    const car = document.getElementById('cars');
    // const projectsLink = document.querySelector('a[href="#projects"]');
    // const projectsSection = document.getElementById('projects');
    // const contactLink = document.querySelector('a[href="#contact"]');
    // const contactSection = document.getElementById('contact');


    aboutLink.addEventListener('click', function(event) {
        event.preventDefault();
        car.classList.add('show');
        car.scrollIntoView({ behavior: 'smooth' });
    });

    // projectsLink.addEventListener('click', function(event) {
    //     event.preventDefault();
    //     projectsSection.classList.add('show');
    //     projectsSection.scrollIntoView({ behavior: 'smooth' });
    // });

    // contactLink.addEventListener('click', function(event) {
    //     event.preventDefault();
    //     contactSection.classList.add('show');
    //     contactSection.scrollIntoView({ behavior: 'smooth' });
    // });
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the images and insert them inside the modal - use their "alt" text as a caption
var images = document.getElementsByClassName("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

for (var i = 0; i < images.length; i++) {
    images[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
