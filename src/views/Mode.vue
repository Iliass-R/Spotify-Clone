<template>
    <div class="h-screen">
        <img src="../../eilish-purple-hair.svg">
        <div class="logo">
            <img src="../../spotify.svg">
        </div>
        <div class="group">
            <h1 class="title">
                Choose Mode
            </h1>
            <div class="boutonlune">
                <div class="lune">
                    <img src="../../lune.svg">
                </div>
            </div>
            <div class="boutonsoleil">
                <div class="soleil">
                    <img src="../../soleil.svg">
                </div>
            </div>
        </div>
        <div>
            <router-link class="btn-continue" to="/registerorsignup">
                <h2 class="continue">Continue</h2>
            </router-link>
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

.btn-continue {
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

.title {
    position: absolute;
    width: 143px;
    height: 30px;
    left: 124px;
    top: 438px;

    font-family: 'Satoshi';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 30px;
    /* identical to box height */

    text-transform: capitalize;

    color: #DADADA;
}

.boutonlune {
    position: absolute;
    width: 73px;
    height: 73px;
    left: 84px;
    top: 500px;
    border-radius: 100%;
    background: rgba(255, 255, 255, 0.01);
    backdrop-filter: blur(43.5px);
}

.lune {
    left: 19px;
    right: 19px;
    top: 19px;
    bottom: 19px;
    border-radius: 100%;
    height: 73px;
    width: 73px;
}

.boutonsoleil {

    border-radius: 100%;
    position: absolute;
    width: 73px;
    height: 73px;
    left: 228px;
    top: 499px;

    background: rgba(255, 255, 255, 0.01);
    backdrop-filter: blur(43.5px);
}

.soleil {
    left: 19px;
    right: 19px;
    top: 19px;
    bottom: 19px;
    height: 73px;
    width: 73px;
}

.continue {
    position: absolute;
    width: 118px;
    height: 30px;
    left: 105px;
    right: 106px;
    top: 31px;

    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
    /* identical to box height */

    text-transform: capitalize;

    color: #F6F6F6;
}
</style>