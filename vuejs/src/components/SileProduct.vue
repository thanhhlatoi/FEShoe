<template>
        <section class="home" id="home">
            <div class="slide-container active">
                <div class="slide">
                    <div class="content">
                        <span>Nike Sport Shoes</span>
                        <h3>Nike Metcon Shoes</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit 
                            Sunt nam adipisci ipsa officiis Amet pariatur eaque soluta 
                            sit iure neque voluptate.
                        </p>
                        <a href="#" class="btn">add to card</a>
                    </div>
                    <div class="image">
                        <img src="../assets/slide/1.png" class="shoe">
                    </div>
                </div>
            </div>
            <div class="slide-container">
                <div class="slide">
                    <div class="content">
                        <span>Nike Sport Shoes</span>
                        <h3>Nike Metcon Shoes</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit 
                            Sunt nam adipisci ipsa officiis Amet pariatur eaque soluta 
                            sit iure neque voluptate.
                        </p>
                        <a href="#" class="btn">add to card</a>
                    </div>
                    <div class="image">
                        <img src="../assets/slide/1.png" class="shoe">
                    </div>
                </div>
            </div>
            <div class="slide-container">
                <div class="slide">
                    <div class="content">
                        <span>Nike Sport Shoes</span>
                        <h3>Nike Metcon Shoes</h3>
                        <!-- <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit 
                            Sunt nam adipisci ipsa officiis Amet pariatur eaque soluta 
                            sit iure neque voluptate.
                        </p> -->
                        <a href="#" class="btn">add to card</a>
                    </div>
                    <div class="image">
                        <img src="../assets/slide/1.png" class="shoe">
                    </div>
                </div>
            </div>
            <div class="slide-container">
                <div class="slide">
                    <div class="content">
                        <span>Nike Sport Shoes</span>
                        <h3>Nike Metcon Shoes</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit 
                            Sunt nam adipisci ipsa officiis Amet pariatur eaque soluta 
                            sit iure neque voluptate.
                        </p>
                        <a href="#" class="btn">add to card</a>
                    </div>
                    <div class="image">
                        <img src="../assets/slide/1.png" class="shoe">
                    </div>
                </div>
            </div>

            <div id="prev" class="fa fa-angle-left" onclick="prev();"></div>
            <div id="next" class="fa fa-angle-right" onclick="next();"></div>
        </section>
</template>

<script>
import { ref , onMounted } from 'vue';
export default {
  setup() {
    const slides = ref([]);
    const currentIndex = ref(0);

    const next = () => {
      currentIndex.value = (currentIndex.value + 1) % slides.value.length;
    };

    const prev = () => {
      currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length;
    };

    onMounted(() => {
      slides.value = Array.from(document.querySelectorAll('.slide-container'));
    });

    return {
      slides,
      currentIndex,
      next,
      prev
    };
  }
};
</script>


<style scoped>
section {
  padding: 2rem 9%;
}
.home {
  padding: 0;
  position: relative;
}
.home .slide-container .slide {
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 0 9%;
  padding-top: 9rem;
}
.home .slide-container .slide .content {
  flex: 1 1 40rem;
  animation: slideContent .3s linear 1s backwards;
}
@keyframes slideContent {
  0% {
    opacity: 0;
    transform: translateX(-10rem);
  }
}
.home .slide-container .slide .image {
  flex: 1 1 50rem;
  padding-bottom: 15rem;
  position: relative;
  z-index: 0;
}
.home .slide-container .slide .image .shoe {
  width: 100%;
  transform: rotate(-10deg);
  animation: shoe .3s linear;
}
@keyframes shoe {
  0% {
    transform: rotate(0deg) scale(.5);
  }
}
.home .slide-container .slide .content span {
  font-size: 2rem;
  color: orangered;
}
.home .slide-container .slide .content h3 {
  font-size: 5rem;
  color: #000;
}
.home .slide-container .slide .content p {
  font-size: 1.7rem;
  color: #666;
  padding: .5rem 0;
}
.btn {
  display: inline-block;
  margin-top: 1rem;
  border-radius: .5rem;
  border: .2rem solid #000;
  font-weight: bolder;
  font-size: 1.7rem;
  color: #000;
  cursor: pointer;
  background: #fff;
  padding: .8rem 3rem;
}

.home .slide-container {
  display: none;
}
.home .slide-container.active {
  display: block;
}
.home #prev, .home #next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  height: 5rem;
  width: 5rem;
  line-height: 5.5rem;
  font-size: 2rem;
  color: #000;
  border: .2rem solid #000;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
}
.home #prev:hover, .home #next:hover {
  color: #fff;
  background: orangered;
}
.home #prev {
  left: 3rem;
}
.home #next {
  right: 3rem;
}
</style>