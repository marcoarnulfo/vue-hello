console.log("hello");

const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            imgAttributes:{
                class : 'img-fluid',
                src: 'https://picsum.photos/400/200'
            },
            margin: "m-5"
        }
    },
    methods: {
        changeImg() {
            console.log("ho premuto qui");
            this.imgAttributes.src = "https://picsum.photos/400/400"
            this.message = 'Ciao Vue!'
            this.margin = 'fst-italic m-5'
        }
    },
}).mount('#app')