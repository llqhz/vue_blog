<template>
  <section class="purple-section">
    <div class="wrapper">
          <div class="head-wrapper">
            <h2
                data-aos="fade-down"
                data-aos-delay="50"
                data-aos-offset="200"
                data-aos-duration="600"
            >有一个标题</h2>
            <div class="hr"
                data-aos="flip-left"
                data-aos-delay="250"
                data-aos-offset="200"
                data-aos-duration="600"
            ></div>
            <div class="sub-heading"
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-offset="200"
                data-aos-duration="600"
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
            </div>
        </div>
        <div class="card-group">
            <div class="card" v-for="(item) in [1,2,3,4,5,6]" :key='item'
                :data-aos="item%2?'fade-right':'fade-left'"
                :data-aos-delay="100*item"
                data-aos-offset="50"
                data-aos-duration="600"
            >
                <h2>标题</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam </p>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: "PurpleSection",
    props: {
        article: {
            type: Object,
            default: () => {
                return {
                    main: {
                        title: "有一个标题",
                        introduction: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    },
                    articles: [
                        {
                            title: "标题",
                            introduction: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                        },
                        {
                            title: "标题",
                            introduction: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                        }
                    ]
                }
            }
        } 
    },
}
</script>

<style >
.hr {
    width: 600px;
    margin: 30px auto;
    background:rgba(255, 255, 255, 0.134);;
    height: 2px;
    max-width: 92vw;
}

.purple-section {
    background: #262149;
    color: #fff;
}

.purple-section h2 {
    margin-top: 20px;
    margin-bottom: 20px;
}

.wrapper {
    max-width: 860px;
    margin: 0 auto;
    padding: 10px;
}

.purple-section .wrapper {
    max-width: 700px;
}

.purple-section .head-wrapper {

    text-align: center;
}

.purple-section .card-group {
    padding-top: 20px ;
}
.purple-section .card-group::after {
    content: '';
    display: block;
    clear: both;
}

.purple-section .card-group .card {
    float: left;
    width: 50%;
    min-height: 230px;
    padding: 10px 30px;
    box-sizing: border-box;
}

.card:nth-child(1) {
    background: rgba(0,0,0,0.09);
}
.card:nth-child(2) {
    background: rgba(0,0,0,0.13);
}
.card:nth-child(3) {
    background: rgba(0,0,0,0.17);
}
.card:nth-child(4) {
    background: rgba(0,0,0,0.21);
}
.card:nth-child(5) {
    background: rgba(0,0,0,0.25);
}
.card:nth-child(6) {
    background: rgba(0,0,0,0.29);
}
@media screen and (max-width: 660px){
    .purple-section .card-group .card {
        padding: 10px 10px;
        font-size: 0.8rem;
    }
    .purple-section .card-group .card h2 {
        font-size: 1.1rem;
    }

    body .sideBar {
        width: 250px;
    }
}

</style>
