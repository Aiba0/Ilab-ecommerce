const cardCounter = function() {
    const btns = document.querySelectorAll('.card-counter__btn')

btns.forEach(btn => {
    btn.addEventListener('click', function() {
        const direction = this.dataset.direct
        const input = this.parentElement.querySelector('.card-counter__value')
        const currentValue = +input.value;
        let newValue;
        
        if (direction === 'increase') {
            newValue = currentValue + 1;
        } else {
            newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
          }
          input.value = newValue;
    })
})
}
cardCounter();


let swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


