class Carousel {
  constructor(options = {}) {
    const defaults = {
      selectorContainer: '.carousel',
      selectorSlides: 'img[id^="carousel-"]',
    }
    Object.assign(this, defaults, options);

    this.container = document.querySelector(this.selectorContainer);
    this.slides = document.querySelectorAll(this.selectorSlides);

    this.currentIndex = 0;

    this.intervalId = setInterval(this.next.bind(this), 8000);
    addEventListener('resize', this.resize.bind(this));
  }

  next() {
    this.currentIndex++;
    if(this.currentIndex == this.slides.length) {
      this.currentIndex = 0;
    }
    this.container.scrollTo({
      left: this.currentIndex * this.container.offsetWidth,
      behavior: 'smooth'
    })
  }

  resize() {
    this.container.scrollTo({
      left: this.currentIndex * this.container.offsetWidth,
      behavior: 'auto'
    })
  }
}


const carousel = new Carousel();
