const app = new Vue ({
    el: '#containerVue',
    data: {
        counter: 0,
        imgs: [
            'image1.jpg',
            'image2.jpg',
            'image3.jpg',
            'image4.jpg'
        ],
        hover: false,
    },
    methods: {
        prev: function () {
            if(this.counter == 0) {
                this.counter = this.imgs.length -1;
            } else {
                this.counter -= 1;
            }
        },
        next: function () {
            if (this.counter == this.imgs.length - 1) {
                this.counter = 0
            } else {
                this.counter += 1;
            }
        },
        autoPlay: function () {
            if(this.counter < this.imgs.length -1) {
                this.counter += 1;
            } else {
                this.counter = 0;
            }
        }
    },
    created() {
        if (this.hover == false) {
            const runningTime = setInterval(this.autoPlay, 3000);
        } else {
            clearInterval(this.runningTime);
        }
    } 
});