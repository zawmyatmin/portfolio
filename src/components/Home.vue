<template>
  <div style="display: flex; flex-grow: 1; flex: auto">
    <div
      style="
        display: flex;
        flex-direction: row;
        background-color: rgb(206 199 191);
      "
    >
      <div
        style="
          margin: 1.25rem;
          width: 12rem;
          height: 36rem;
          background-color: rgb(96, 111, 111);
          border-radius: 1.25rem;
        "
      >
        <div
          style="
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          "
        >
          <img
            :src="profile.image"
            alt="Profile Picture"
            style="margin: 1.25rem; width: 50%"
          />
          <h3 style="padding: 0 1rem 0 1rem; color: rgb(171, 199, 222)">
            {{ profile.name }}
          </h3>
          <h4
            style="
              padding: 0 1rem 0 1rem;
              color: rgb(195, 205, 185);
              font-weight: 300;
            "
          >
            {{ profile.title }}
          </h4>
        </div>
        <div style="padding: 1rem; display: flex; justify-content: center">
          <div>
            <h2
              style="font-size: 0.5rem; text-align: center; padding-top: 1rem"
            >
              Contact Me
            </h2>
            <div
              style="
                padding: 0 0.625rem 0.625rem 0.625rem;
                margin: 0.5rem 1.25rem 1.25rem 1.25rem;
                height: 3rem;
                text-decoration: none;
                color: lightgray;
              "
              v-for="link in socialLinks"
              :key="link.name"
            >
              <a
                :href="link.url"
                target="_blank"
                style="
                  font-size: 1rem;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  height: 3rem;
                  text-decoration: none;
                  color: hwb(0 83% 17%);
                "
              >
                <img
                  :src="link.logo"
                  alt=""
                  style="
                    width: 50px;
                    height: 3rem;
                    border-style: solid;
                    border-radius: 30px;
                    padding: 0.3125rem;
                  "
                />
                <h2 style="font-size: 0.75rem; color: rgb(171, 199, 222)">
                  {{ link.name }}
                </h2>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        style="
          margin: 0.125rem;
          width: 60%;
          background-color: rgb(206 199 191);
          border-radius: 1.25rem;
        "
      >
        <div>
          <h1
            style="
              margin: 50% 0 0 0;
              display: flex;
              justify-content: center;
              color: rgb(96, 111, 111);
              padding: 0.625rem;
              font-weight: 500;
              font-size: 0.8rem;
            "
          >
            Skills and Tools
          </h1>
          <div
            style="
              padding: 0.5rem;
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
            "
          >
            <v-avatar
              style="margin: 0.5rem"
              v-for="tech in studiedTechnologies"
              :key="tech.name"
              :image="tech.logo"
            ></v-avatar>
          </div>
          <div style="display: flex; justify-content: center; margin-top: 50px">
            <MyProjectDialog></MyProjectDialog>
          </div>
          <div style="display: flex; justify-content: right; margin-top: 50px">
            <AboutMeDialog :textDate="aboutMe"></AboutMeDialog>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import pfImage from "../assets/zmm_logo.jpg";
import gmailLogo from "../logos/gmail.jpg";
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
import springLogo from "../logos/spring.jpg";
import AboutMeDialog from "./about-me/AboutMeDialog.vue";
import MyProjectDialog from "./my-project/MyProjectDialog.vue";

export default {
  components: {
    AboutMeDialog,
    MyProjectDialog,
  },
  data() {
    return {
      profile: {
        name: "Zaw Myat Min",
        title: "Web Developer",
        image: pfImage,
      },
      aboutMe:
        "Hello! I am Zaw Myat Min, a web developer keen on building innovative and user-friendly web applications. My areas of expertise include HTML, CSS, JavaScript, Vue.js, Java (Spring), and MySQL. I relish opportunities that will enable me to hone my skills while working on challenging projects to create something pertinent. Let's work together to make something extraordinary!",
      socialLinks: [
        {
          name: "Instagram",
          url: "https://www.instagram.com/zaw_myat_minn/",
          logo: instagramLogo,
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/zawmyatmin/",
          logo: linkedinLogo,
        },
        {
          name: "X",
          url: "https://twitter.com/zawmyatminn_",
          logo: twitterLogo,
        },
        {
          name: "Gmail",
          url: "https://mail.google.com/mail/?view=cm&fs=1&to=zawmyatminn1@gmail.com&su=Contact&body=Hello,%20Zaw%20Myat%20Min!",
          logo: gmailLogo,
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
        { name: "Spring", logo: springLogo },
      ],
      onShow: false,
    };
  },
  methods: {
    onChange(onShow) {
      if (onShow != true) this.onShow = false;
      else this.onShow = true;
    },
  },
};
</script>
