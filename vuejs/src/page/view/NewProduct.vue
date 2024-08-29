<template>
    <section class="featured">
        <h1 class="heading">New <span>Product</span></h1>
        <div class="row">
            <div class="image-container">
                <div class="small-image">
                    <img src="../assets/product1/1.jpg" alt="" class="featured-image-1">
                    <img src="../assets/product1/2.jpg" alt="" class="featured-image-1">
                    <img src="../assets/product1/3.jpg" alt="" class="featured-image-1">
                    <img src="../assets/product1/4.jpg" alt="" class="featured-image-1">
                </div>
                <div class="big-image">
                    <img src="../assets/product1/1.jpg" alt="" class="big-image-1">
                </div>
            </div>
            <div class="content">
                <h3>new nike airmac shoes</h3>
                <div class="stars">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Fugit officiis omnis quo laboriosam velit culpa ex illo, error enim nostrum?
                </p>
                <div class="price">$90 <span>$120</span></div>
                <a href="#" class="btn">add to cart</a>
            </div>
        </div>
    </section>
</template>

<style scoped>
.featured .heading {
    text-align: center;
    font-size: 3rem;
    padding: 10px;
    font-weight: bolder;
    text-transform: uppercase;
}
.featured .heading span {
    color: rgb(252, 118, 69);
}
.featured .row {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    border: .1rem solid rgba(0, 0, 0, .1);
    border-radius: .5rem;
    background: #f9f9f9;
    padding: 2rem;
    align-items: center;
    margin: 1.5rem 0;
}
.featured .row .content {
    flex: 1 1 40rem;
}
.featured .row .image-container {
    display: flex;
    gap: 1.5rem;
    align-items: center;
    flex: 1 1 50rem;
}
.featured .row .image-container .small-image {
    width: 20%;
}
.featured .row .image-container .big-image {
    width: 80%;
    padding: 1rem;
}
.featured .row .image-container .small-image img {
    width: 100%;
    padding: 1rem;
    border: .1rem solid rgba(0, 0, 0, .1);
    cursor: pointer;
}
.featured .row .image-container .small-image img:hover {
    background: #ccc;
}
.featured .row .image-container .big-image img {
    width: 100%;
}
.featured .row .image-container .big-image img:hover {
    transform: scale(1.05);
}
.featured .row .content h3 {
    font-size: 2.5rem;
    color: #000;
}
.featured .row .content .stars i {
    font-size: 1.7rem;
    color: orange;
    padding: .5rem 0;
}
.featured .row .content p {
    font-size: 1.5rem;
    color: #666;
    padding: 1rem 0;
}
.featured .row .content .price {
    font-size: 2.5rem;
    color: #000;
    font-weight: bolder;
}
.featured .row .content .price span {
    font-size: 1.5rem;
    color: orange;
    text-decoration: line-through;
}
</style>
