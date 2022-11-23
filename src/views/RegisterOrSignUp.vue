<template>
    <div class="page">
        <div class="photo">
            <img src="../../billie2.svg">
        </div>
        <div class="wave1">
            <img src="../../wave.svg">
        </div>
        <div class="wave2">
            <img src="../../wave.svg">
        </div>
        <div class="logo1">
            <img src="../../spotify.svg">
        </div>
        <div class="left-arrow">
            <img src="../../Left.svg">
        </div>
        <div class="text">
            <h1 class="title">Enjoy Listening To Music</h1>
        </div>
        <div class="subtitle">
            <h2>Spotify is a proprietary Swedish audio streaming and media services provider</h2>
        </div>
        <div>
            <router-link class="btn" to="/">
                <h2 class="register">Register</h2>
            </router-link>
        </div>
        <div>
            <router-link class="btn2" to="/">
                <h2 class="signin">Sign In</h2>
            </router-link>
        </div>
    </div>
</template>

<script>

</script>

<style>
.page {
    background-color: #1C1B1B;
    width: 390px;
    height: 844px;
    overflow: hidden;
    position: fixed;
}

.photo {
    position: absolute;
    width: 332.07px;
    height: 453.73px;
    top: 451.3px;

}

.wave1 {
    top: 580px;
    position: absolute;
    left: 250px;
}

.wave2 {
    position: absolute;
    left: 60.05%;
    transform: matrix(0.75, -0.62, 0.71, 0.75, 0, 0);
    height: 300.74px;
    bottom: 700px
}

.logo1 {
    position: absolute;
    left: 20%;
    right: 19.74%;
    top: 20.73%;
    bottom: 70.85%;
}

.title {
    position: absolute;
    width: 295px;
    height: 35px;
    left: 48px;
    top: 301px;

    font-family: 'Satoshi';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 35px;
    text-transform: capitalize;

    color: #F2F2F2;
}

.subtitle {
    position: absolute;
    width: 306px;
    height: 46px;
    left: 34px;
    top: 357px;

    font-family: 'Satoshi';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 23px;
    text-align: center;

    color: #A0A0A0;

}

.btn {
    position: absolute;
    width: 147px;
    height: 73px;
    left: 30px;
    top: 433px;

    background: #42C83C;
    /* xzz */

    box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.04);
    border-radius: 30px;
}

.register {
    position: absolute;
    width: 73px;
    height: 26px;
    left: 39px;
    top: 23px;

    font-family: 'Satoshi';
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 26px;

    text-align: center;

    color: #FFFFFF;
}

.btn2 {
    position: absolute;
    width: 147px;
    height: 73px;
    left: 218px;
    top: 433px;

    box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.04);
    border-radius: 30px;
}

.signin {
    position: absolute;
    width: 73px;
    height: 26px;
    left: 39px;
    top: 23px;

    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 26px;

    text-align: center;

    color: #FFFFFF;

}

.left-arrow {
    position: absolute;
    width: 24px;
    height: 24px;
    left: 31px;
    top: 40px;
}
</style>