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
        "Hello! I'm Zaw Myat Min, a junior web developer with an increasing passion for creating web applications. My main focus is on technologies like HTML, CSS, JavaScript, Vue.js, Java (Spring), and MySQL. Getting a chance to improve my skill set and work on projects that give me growth as a developer is what excites me the most. Let us make something great happen together!",
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
