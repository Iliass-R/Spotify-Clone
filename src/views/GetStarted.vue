<template>
    <div class="h-screen">
        <img src="../../billie.svg">
        <div class="logo">
            <img src="../../spotify.svg">
        </div>
        <h1 class="title">
            Enjoy Listening to Music
        </h1>
        <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis enim purus sed phasellus.
            Cursus ornare id
            scelerisque aliquam.</p>
        <div class="button">
            <button class="btn">Get Started</button>
        </div>
    </div>
</template>

<script setup>

</script>

<style>
.logo {
    position: absolute;
    left: 24.87%;
    right: 24.87%;
    top: 4.38%;
    bottom: 88.63%;
}

.title {
    position: absolute;
    width: 284px;
    height: 34px;
    left: 53px;
    top: 499px;

    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 34px;


    text-transform: capitalize;
    color: #DADADA;
}

.paragraph {
    position: absolute;
    width: 297px;
    height: 92px;
    left: 47px;
    top: 554px;

    font-family: 'Satoshi';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 23px;
    text-align: center;

    color: #797979;
}

.btn {
    position: absolute;
    width: 329px;
    height: 92px;
    left: 33px;
    top: 683px;

    background: #42C83C;
    border-radius: 30px;
    font-family: 'Satoshi';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 30px;
    /* identical to box height */

    text-transform: capitalize;

    color: #F6F6F6;
}
</style>