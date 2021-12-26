const listItem = document.querySelector('.list-item');

const currentShow = document.querySelector('.show');
const currentScroll = document.querySelector('.scroll');
const currentRows = document.querySelector('.rows');

const isFade = document.querySelector('.fade');
const isInfinite = document.querySelector('.infinite');
const isDraggable = document.querySelector('.draggable');
const isPauseOnHover = document.querySelector('.pauseOnHover');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const playButton = document.querySelector('.play-button');
const pauseButton = document.querySelector('.pause-button');

const toggleDotsBtn = document.querySelector('.toggle-dots-button');
const changeDotsColorBtn = document.querySelector('.change-dots-color-button');
const toggleArrowsBtn = document.querySelector('.toggle-arrows-button');
const changeArrowsColorBtn = document.querySelector('.change-arrows-color-button');
const changeArrowsBtn = document.querySelector('.change-arrows-button');

const app = {
    init() {
        this.colors = [
            '#0d6efd', 
            '#6f42c1', 
            '#d63384', 
            '#dc3545', 
            '#fd7e14', 
            '#ffc107', 
            '#198754', 
            '#20c997', 
            '#6c757d', 
            '#343a40', 
            '#f8f9fa', 
            '#e9ecef', 
            '#dee2e6', 
            '#ced4da', 
            '#adb5bd', 
            '#6c757d', 
            '#495057', 
            '#343a40', 
            '#212529', 
            '#0d6efd', 
            '#6c757d', 
            '#198754', 
            '#0dcaf0', 
            '#ffc107', 
            '#dc3545', 
            '#f8f9fa', 
            '#212529', 
        ]

        this.arrows = [
            ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
            ['<i class="fas fa-angle-double-left"></i>', '<i class="fas fa-angle-double-right"></i>'],
            ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
            ['<i class="fas fa-caret-left"></i>', '<i class="fas fa-caret-right"></i>'],
            ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        ]

        this.slider = null
    },

    handleEvents() {
        prevButton.addEventListener('click', () => {
            this.slider.prev();
        })
        nextButton.addEventListener('click', () => {
            this.slider.next();
        })
        playButton.addEventListener('click', () => {
            this.slider.play();
        })
        pauseButton.addEventListener('click', () => {
            this.slider.pause();
        })

        const btns = [isFade, isDraggable, isInfinite, isPauseOnHover]
        const key = ['fade', 'draggable', 'infinite', 'pauseOnHover']
        btns.forEach((btn, index) => {
            btn.parentNode.addEventListener('click', () => {
                btn.innerHTML = !this.slider.getOption(key[index])
                this.slider.setOption({
                    [key[index]]: !this.slider.getOption(key[index]),
                })
            })
        })

        toggleDotsBtn.addEventListener('click', () => {
            this.slider.setOption({
                dots: !this.slider.getOption('dots'),
            })
        })

        changeDotsColorBtn.addEventListener('click', () => {
            this.slider.setOption({
                dotsColor: this.randomColor()
            })
        })

        toggleArrowsBtn.addEventListener('click', () => {
            this.slider.setOption({
                arrows: !this.slider.getOption('arrows'),
            })
        })

        changeArrowsColorBtn.addEventListener('click', () => {
            this.slider.setOption({
                arrowsColor: this.randomColor()
            })
        })

        changeArrowsBtn.addEventListener('click', () => {
            const random = Math.floor(Math.random() * this.arrows.length);
            this.slider.setOption({
                prevArrow: this.arrows[random][0],
                nextArrow: this.arrows[random][1],
            })
        })

        document.querySelectorAll('.slidesToScroll').forEach((btn, index) => {
            btn.addEventListener('click', () => {
                this.slider.setOption({
                    slidesToScroll: index + 1,
                });
                this.setUI();
            })
        });

        document.querySelectorAll('.slidesToShow').forEach((btn, index) => {
            btn.addEventListener('click', () => {
                this.slider.setOption({
                    slidesToShow: index + 1,
                });
                this.setUI();
            })
        });

        
        let timeout;
        window.addEventListener('resize', () => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                this.setUI();
            }, 1000)
            
        })
    },

    createSlider() {
        this.slider = createSlider(document.querySelector('.list-item'), {
            infinite: true,
            draggable: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            rows: 2,
            dots: true,
            dotsColor: 'blue',
            dotsClass: '   dots-container    fsdds gffdgdf    ',
            dotClass: 'dot-item fsdfs fdf',
            arrows: true,
            arrowsColor: 'blue',
            prevArrow: `<i class="fas fa-long-arrow-alt-left"></i>`,
            prevArrowClass: '123   fds  fsdf   ',
            nextArrow: `<i class="fas fa-long-arrow-alt-right"></i>`,
            nextArrowClass: 'qqq  ffds     ',
            fade: true,
            fadeSpeed: 1000,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: true,
            appendDots: document.querySelector('.dots-sideout'),
            appendArrows: document.querySelector('.arrows-sideout'),
            callback: function () {
                console.log('moved');
            },
            responsive: [{
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },{
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },  ]
        });
    },

    setUI() {
        currentRows.innerHTML = this.slider.getOption('rows');
        currentShow.innerHTML = this.slider.getOption('slidesToShow');
        currentScroll.innerHTML = this.slider.getOption('slidesToScroll');
        isFade.innerHTML = this.slider.getOption('fade');
        isInfinite.innerHTML = this.slider.getOption('infinite');
        isDraggable.innerHTML = this.slider.getOption('draggable');
        isPauseOnHover.innerHTML = this.slider.getOption('pauseOnHover');
    },

    render() {
        let html = '';
        for (let i = 0; i < this.colors.length; i++) {
            html += `<div class="item">
                        <a href="#!" class="link" style="--bg-color: ${this.colors[i]};">${i + 1}</a>
                    </div>`
        }
        document.querySelector('.list-item').innerHTML = html;
    },

    randomColor() {
        return this.colors[Math.floor(Math.random() * this.colors.length)]
    },

    start() {
        this.init();
        this.render();
        this.createSlider();
        this.setUI();
        this.handleEvents();
    },
}

app.start();