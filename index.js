const slider = document.querySelector('.slider');
const sliderLine = document.querySelector('.slider__line');

const prev = document.querySelector('.btn-prev');
const next = document.querySelector('.btn-next');
let offset = 0;

const dots = document.querySelectorAll('.dot');

const data = [
    {alt: 'cat and dog', img: 'https://img.freepik.com/free-photo/cute-pet-collage-isolated_23-2150007407.jpg?size=626&ext=jpg&ga=GA1.1.1600965197.1699538031&semt=sph'},
    {alt: 'cat', img: 'https://img.freepik.com/premium-psd/a-cat-sitting-on-a-table-with-a-brown-transparent-background_540808-61.jpg?size=626&ext=jpg&ga=GA1.1.1600965197.1699538031&semt=sph'},
    {alt: 'cat', img: 'https://img.freepik.com/premium-psd/a-cat-with-yellow-eyes-sitting-on-a-yellow-background_410516-104721.jpg?size=626&ext=jpg&ga=GA1.1.1600965197.1699538031&semt=sph'},
    {alt: 'cat', img: 'https://img.freepik.com/premium-psd/a-cat-sits-on-a-box-with-an-orange-background_176841-29702.jpg?size=626&ext=jpg&ga=GA1.1.1600965197.1699538031&semt=sph'},
    {alt: 'cat', img: 'https://img.freepik.com/premium-psd/a-cat-with-blue-eyes-sits-on-a-white-transparent-background_540808-60.jpg?size=626&ext=jpg&ga=GA1.1.1600965197.1699538031&semt=sph'},
]

const render = (data, sliderLine) => {
    const dots = document.querySelector('.slider__dots');
    

    data.forEach((item, i) => {
        const slideItem = document.createElement('img');
        slideItem.classList = 'slider__item';
        slideItem.src = item.img;
        slideItem.alt = item.alt;

        sliderLine.appendChild(slideItem);
   
        if(i === 0){
            const dot = document.createElement('div');
            dot.classList.add('dot', 'active');
            dot.addEventListener('click', () => {
                offset = i * -slider.offsetWidth;
                sliderLine.style.left = offset + 'px';
                updateActiveDot();
            });
            dots.appendChild(dot);
        }else{
            const dot = document.createElement('div');
            dot.classList.add('dot');
            dot.addEventListener('click', () => {
                offset = i * -slider.offsetWidth;
                sliderLine.style.left = offset + 'px';
                updateActiveDot();
            });
            dots.appendChild(dot);
        }

    });

}

next.addEventListener('click', ()=> {
    offset += -slider.offsetWidth;
    if(offset <= -(slider.offsetWidth * data.length)){
        offset = 0;
    }
    sliderLine.style.left = offset + 'px';
    updateActiveDot();
});

prev.addEventListener('click', ()=> {
    offset += slider.offsetWidth;

    if(offset > 0){
        offset = -(slider.offsetWidth * (data.length - 1));   
    }
  
    sliderLine.style.left = offset + 'px'
    updateActiveDot();
});

function updateActiveDot(){
    const allDots = document.querySelectorAll('.dot');
        allDots.forEach((dot, index) => {
        console.log(dots[index]);
        allDots[index].classList.remove('active');
        if (index * -slider.offsetWidth === offset) {
            allDots[index].classList.add('active');
        }
    });
};

render(data, sliderLine);
updateActiveDot();





