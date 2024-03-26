<template>
    <div class="wrapper">
        <div class="mainContainer">
            <div class="containerOne">
                <div class="profile">
                    <img src="../assets/zmm.jpg" alt="" class="pf">
                    <h3>Zaw Myat Min</h3>
                    <h4>Junior Web Developer</h4>
                </div>
                <div class="socialLink">
                    <div>
                        <div class="link">
                            <a href="https://github.com/zawmyatmin">
                                <img src="../logos/github.jpg" alt="" class="logo">
                                <h2>Github</h2>
                            </a>
                        </div>
                        <div class="link">
                            <a href="https://www.linkedin.com/in/zawmyatmin/">
                                <img src="../logos/linkedin.jpg" alt="" class="logo">
                                <h2>LinkedIn</h2>
                            </a>
                        </div>
                        <div class="link" >
                            <a href="https://twitter.com/zawmyatminn_">
                                <img src="../logos/x.jpg" alt="" class="logo">
                                <h2>Twitter(X)</h2>
                            </a>
                        </div>
                        <div class="link">
                            <a href="https://www.instagram.com/zaw_myat_minn/">
                                <img src="../logos/instagram.jpg" alt="" class="logo">
                                <h2>Instagram</h2>
                            </a>
                        </div>
                    </div>
                </div>


            </div>
            <div class="containerTwo">
                <div class="aboutMe">
                    <h1>About Me</h1>
                    <p>
                        Hi! I'm Zaw Myat Min, a junior web developer.
                        I make web applications using HTML, CSS, JS, Vue.js (for how they look),
                        and Java (Spring) (for what they do).
                        I store data in MySQL and make designs responsive with Bootstrap.
                        Let's work on something awesome together!
                    </p>
                </div>
                <h1>Technologies Studied</h1>
                <div class="studied">
                    <img src="../logos/java.jpg" alt="" class="logoStudied">
                    <img src="../logos/python.jpg" alt="" class="logoStudied">
                    <div>
                        <img src="../logos/javascript.jpg" alt="" class="logoStudied">
                        <img src="../logos/html.jpg" alt="" class="logoStudied">
                    </div>
                </div>
                <div class="studied">
                    <div>
                    <img src="../logos/css.jpg" alt="" class="logoStudied">
                    <img src="../logos/vue.jpg" alt="" class="logoStudied">
                    </div>
                    <img src="../logos/mysql.jpg" alt="" class="logoStudied">

                </div>
                <!-- <div class="footer">
                    <div class="projects">
                        <a href="#"> My Projects</a>
                    </div>
                    <div>
                        <a href="#">My Resume</a>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.wrapper{
    display: flex;
    flex-grow: 1;
    flex: auto;
}
.pf{
    margin: 20px;
    width: 50%;
    border-radius: 50%;
}
img {
    width: 30px;
}
.logo{
    width: 50px;
    height: 3rem;
    border-style: solid;
    border-radius: 30px;
    padding: 10px;
}
.logoStudied{
    width: 50px;
    height: 3rem;
    border-style: solid;
    border-radius: 30px;
    margin: 10px 5px;
    padding: 10px;
}
.mainContainer{
    display: flex;
    flex-direction: row;
    background-color: rgb(206 199 191);
}
.containerOne{
    margin: 20px;
    width: 40%;
    background-color: rgb(96, 111, 111);
    border-radius: 20px;
}
.containerTwo{
    margin: 2px;
    width: 60%;
    background-color:rgb(206 199 191);
    border-radius: 20px;
}
.link a{
    height: 3rem;
    text-decoration: none;
    color: lightgray;
}
p{
    padding: 10px;
    font-size: 15px;
    font-weight: 1000;
    color: rgb(109, 87, 87);
}
.footer{
    font-size: 15;
    font-style: oblique;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 10px;
    padding: 10px;
}
.socialLink{
    padding: 10px;
    display: flex;
    justify-content: center;
}
.profile{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
h4{
    text-align: center;
    padding: 2px;
    font-weight: 300;
    color:rgb(195, 205, 185);
}   
h3{
    text-align: center;
    color:rgb(171, 199, 222);
    padding: 2px;
    font-weight: 1000;
}
h2{
    font-size: 17px;
    border-radius: 50px;
    color: rgb(171, 199, 222);
}
h1{
    margin:10px 5px;
    display: flex;
    justify-content: center;
    color: rgb(109, 87, 87);
    padding: 10px;
    font-weight: 800;
    font-size: 20px;
}
.studied{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>