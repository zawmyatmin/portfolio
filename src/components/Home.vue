<template>
  <div class="wrapper">
    <div class="mainContainer">
      <div class="containerOne">
        <div class="profile">
          <img :src="profile.image" alt="Profile Picture" class="pf" />
          <h3>{{ profile.name }}</h3>
          <h4>{{ profile.title }}</h4>
        </div>
        <div class="socialLink">
          <div>
            <div class="link" v-for="link in socialLinks" :key="link.name">
              <a :href="link.url" target="_blank">
                <img :src="link.logo" alt="" class="logo" />
                <h2>{{ link.name }}</h2>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="containerTwo">
        <div class="aboutMe">
          <h1>About Me</h1>
          <p>{{ aboutMe }}</p>
        </div>
        <h1>Technologies Studied</h1>
        <div class="studied">
          <img
            v-for="tech in studiedTechnologies"
            :key="tech.name"
            :src="tech.logo"
            :alt="tech.name"
            class="logoStudied"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import pfImage from "../assets/pf.jpg";
import githubLogo from "../logos/github.jpg";
import linkedinLogo from "../logos/linkedin.jpg";
import twitterLogo from "../logos/x.jpg";
import instagramLogo from "../logos/instagram.jpg";
import javaLogo from "../logos/java.jpg";
import pythonLogo from "../logos/python.jpg";
import javascriptLogo from "../logos/javascript.jpg";
import htmlLogo from "../logos/html.jpg";
import cssLogo from "../logos/css.jpg";
import vueLogo from "../logos/vue.jpg";
import mysqlLogo from "../logos/mysql.jpg";

export default {
  data() {
    return {
      profile: {
        name: "Zaw Myat Min",
        title: "Junior Web Developer",
        image: pfImage,
      },
      aboutMe:
        "Hey! I'm Zaw Myat Min, a junior web developer. I work with HTML, CSS, JS, Vue.js, Java (Spring), and MySQL to build web applications. I also make sure designs are responsive using Bootstrap. Let's collaborate on exciting projects and grow together in our skills!",
      socialLinks: [
        {
          name: "Github",
          url: "https://github.com/zawmyatmin",
          logo: githubLogo,
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/zawmyatmin/",
          logo: linkedinLogo,
        },
        {
          name: "Twitter(X)",
          url: "https://twitter.com/zawmyatminn_",
          logo: twitterLogo,
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/zaw_myat_minn/",
          logo: instagramLogo,
        },
      ],
      studiedTechnologies: [
        { name: "Java", logo: javaLogo },
        { name: "Python", logo: pythonLogo },
        { name: "JavaScript", logo: javascriptLogo },
        { name: "HTML", logo: htmlLogo },
        { name: "CSS", logo: cssLogo },
        { name: "Vue.js", logo: vueLogo },
        { name: "MySQL", logo: mysqlLogo },
      ],
    };
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-grow: 1;
  flex: auto;
}
.pf {
  margin: 20px;
  width: 50%;
  border-radius: 50%;
}
img {
  width: 30px;
}
.logo {
  width: 50px;
  height: 3rem;
  border-style: solid;
  border-radius: 30px;
  padding: 10px;
}
.logoStudied {
  width: 50px;
  height: 3rem;
  border-style: solid;
  border-radius: 30px;
  margin: 10px 5px;
  padding: 10px;
}
.mainContainer {
  display: flex;
  flex-direction: row;
  background-color: rgb(206 199 191);
}
.containerOne {
  margin: 20px;
  width: 40%;
  background-color: rgb(96, 111, 111);
  border-radius: 20px;
}
.containerTwo {
  margin: 2px;
  width: 60%;
  background-color: rgb(206 199 191);
  border-radius: 20px;
}
.link a {
  height: 3rem;
  text-decoration: none;
  color: lightgray;
}
p {
  text-align: justify;
  padding: 10px;
  font-size: 15px;
  font-weight: 1000;
  color: rgb(109, 87, 87);
}
.footer {
  font-size: 15;
  font-style: oblique;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px;
  padding: 10px;
}
.socialLink {
  padding: 10px;
  display: flex;
  justify-content: center;
}
.profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h4 {
  text-align: center;
  padding: 2px;
  font-weight: 300;
  color: rgb(195, 205, 185);
}
h3 {
  text-align: center;
  color: rgb(171, 199, 222);
  padding: 2px;
  font-weight: 1000;
}
h2 {
  font-size: 17px;
  border-radius: 50px;
  color: rgb(171, 199, 222);
}
h1 {
  margin: 10px 5px;
  display: flex;
  justify-content: center;
  color: rgb(109, 87, 87);
  padding: 10px;
  font-weight: 800;
  font-size: 20px;
}
.studied {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
