<template>
            <section class="product" id="product">
            <h1 class="heading">latest <span>Products</span></h1>
            <div class="box-container">
                <div class="box">
                    <div class="icons">
                        <a href="#" class="fa fa-heart"></a>
                        <a href="#" class="fa fa-share"></a>
                        <a href="#" class="fa fa-eye"></a>
                    </div>
                    <div class="content">
                        <img src="../assets/product4/1.jpg" alt="">
                        <h3>Nike Shoes</h3>
                        <div class="price">$200 <span>$150</span></div>
                        <div class="stars">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                    </div>
                </div>
                <div class="box">
                    <div class="icons">
                        <a href="#" class="fa fa-heart"></a>
                        <a href="#" class="fa fa-share"></a>
                        <a href="#" class="fa fa-eye"></a>
                    </div>
                    <div class="content">
                        <img src="../assets/product4/2.jpg" alt="">
                        <h3>Nike Shoes</h3>
                        <div class="price">$200 <span>$150</span></div>
                        <div class="stars">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                    </div>
                </div>
                <div class="box">
                    <div class="icons">
                        <a href="#" class="fa fa-heart"></a>
                        <a href="#" class="fa fa-share"></a>
                        <a href="#" class="fa fa-eye"></a>
                    </div>
                    <div class="content">
                        <img src="../assets/product4/3.jpg" alt="">
                        <h3>Nike Shoes</h3>
                        <div class="price">$200 <span>$150</span></div>
                        <div class="stars">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                    </div>
                </div>
                <div class="box">
                    <div class="icons">
                        <a href="#" class="fa fa-heart"></a>
                        <a href="#" class="fa fa-share"></a>
                        <a href="#" class="fa fa-eye"></a>
                    </div>
                    <div class="content">
                        <img src="../assets/product4/5.jpg" alt="">
                        <h3>Nike Shoes</h3>
                        <div class="price">$200 <span>$150</span></div>
                        <div class="stars">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                    </div>
                </div>
                <div class="box">
                    <div class="icons">
                        <a href="#" class="fa fa-heart"></a>
                        <a href="#" class="fa fa-share"></a>
                        <a href="#" class="fa fa-eye"></a>
                    </div>
                    <div class="content">
                        <img src="../assets/product4/7.png" alt="">
                        <h3>Nike Shoes</h3>
                        <div class="price">$200 <span>$150</span></div>
                        <div class="stars">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                    </div>
                </div>
                <div class="box">
                    <div class="icons">
                        <a href="#" class="fa fa-heart"></a>
                        <a href="#" class="fa fa-share"></a>
                        <a href="#" class="fa fa-eye"></a>
                    </div>
                    <div class="content">
                        <img src="../assets/product4/8.png" alt="">
                        <h3>Nike Shoes</h3>
                        <div class="price">$200 <span>$150</span></div>
                        <div class="stars">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<style scoped>
.heading{
    text-align: center;
    font-size: 3rem;
    padding: 10px;
    font-weight: bolder;
    text-transform: uppercase;
}
.heading span{
    color: rgb(252, 118, 69);
}
    .product .box-container{
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
}
.product .box-container .box{
    border: .1rem solid rgba(0, 0, 0, .1);
    border-radius: .5rem;
    text-align: center;
    position: relative;
    overflow: hidden;
    background: #f5f5f5;
    flex: 1 1 30rem;
}
.product .box-container .content{
    padding: 1.5rem;
}
.product .box-container .box img{
    height: 20rem;
    transform: rotate(-35deg);
    margin: 8rem 2rem;
}
.product .box-container .box:hover img{
    transform: rotate(-35deg) scale(1.2);
}
.product .box-container .box .icons{
    display: flex;
    flex-flow: column;
    position: absolute;
    top: .5rem;
    left: 1rem;
}
.product .box-container .box .icons a{
    height: 4.5rem;
    width: 5rem;
    line-height: 4.5rem;
    font-size: 2rem;
    color: #000;
    border: .1rem solid #000;
    border-radius: .5rem;
    background: #fff;
    margin-top: .5rem;
}
.product .box-container .box .icons{
    display: flex;
    flex-flow: column;
    position: absolute;
    top: .5rem;
    left: -10rem;
}
.product .box-container .box:hover .icons{
    left: 1rem;
}
.product .box-container .box .icons a:hover{
    color: orangered;
    color: #fff;
}
.product .box-container .box .content h3{
    color: #000;
    font-size: 2.5rem;
}
.product .box-container .box .content .price{
    color: #000;
    font-size: 2.5rem;
    font-weight: bolder;
    padding: 1rem 0;
}
.product .box-container .box .content .price span{
    color: #000;
    font-size: 1.5rem;
    text-decoration: line-through;
}
.product .box-container .box .content .stars{
    padding-bottom: 1rem;
}
.product .box-container .box .content .stars i{
    font-size: 1.7rem;
    color: orangered;
    }
</style>