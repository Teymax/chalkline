<template>
  <section class="featured-games">
    <div class="container">
      <h3 class="featured-games__title">
        Featured Games
      </h3>
    </div>
    <VueSlickCarousel v-bind="carouselSettings">
      <div
        v-for="item in slides"
        :key="item.id"
      >
        <div
          class="featured-games-carousel__item-wrapper"
          :style="
          `background: linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 78.62%), url(${item.img}) no-repeat center;
          background-size: cover;`
        "
        >
        </div>
      </div>
    </VueSlickCarousel>
  </section>
</template>

<script>
    import 'vue-slick-carousel/dist/vue-slick-carousel.css';
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
    import VueSlickCarousel from 'vue-slick-carousel';
    export default {
        name: "FeaturedGames",
        components: { VueSlickCarousel },
        data: () => ({
            carouselSettings: {
                "arrows": false,
                "dots": true,
                "infinite": true,
                "centerMode": true,
                "adaptiveHeight": true,
                "slidesToShow": 1,
                "slidesToScroll": 1,
                "variableWidth": true,
                "dotsClass": 'featured-games-carousel__dot-wrapper'
            },
            slides: [
                {
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8kUn13FMe8Kye9c5RR9Bfk-PCiNMgEKyxRw&usqp=CAU'
                },
                {
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8kUn13FMe8Kye9c5RR9Bfk-PCiNMgEKyxRw&usqp=CAU'
                },
                {
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8kUn13FMe8Kye9c5RR9Bfk-PCiNMgEKyxRw&usqp=CAU'
                },
                {
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8kUn13FMe8Kye9c5RR9Bfk-PCiNMgEKyxRw&usqp=CAU'
                },
                {
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8kUn13FMe8Kye9c5RR9Bfk-PCiNMgEKyxRw&usqp=CAU'
                },
            ],
        }),
        methods: {
        }
    }
</script>
