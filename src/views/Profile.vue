<script setup>
import profileImg from '@/assets/pogi.jpg'; // Adjust path if needed

const user = {
  name: 'Your Name',
  bio: 'Passionate Web Developer & UI/UX Designer.',
  photo: profileImg,
  facebook: '  https://www.facebook.com/idrizjoaquin.mitiam/',
  linkedin: 'www.linkedin.com/in/idriz-mitiam-271946219',
  github: 'https://github.com/Idrizzzz',
};

const projects = [
  { title: 'Project One', image: 'https://via.placeholder.com/150', description: 'A cool project.' },
  { title: 'Project Two', image: 'https://via.placeholder.com/150', description: 'Another awesome work.' },
];
</script>


<template>
  <div class="main1">
    <div class="grid">
      <!-- Card 1: Welcome -->
      <div class="card1">
        <h1>Hi I'm Idriz! 👋</h1>
      </div>

      <!-- Card 2: Profile with Social Links -->
      <div class="card3">
      
        <div class="social-links">
          <a :href="user.facebook" target="_blank" aria-label="Facebook">
            <i class="fab fa-facebook"></i>
          </a>
          <a :href="user.linkedin" target="_blank" aria-label="LinkedIn">
            <i class="fab fa-linkedin"></i>
          </a>
          <a :href="user.github" target="_blank" aria-label="GitHub">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>

      <!-- Card 3: More About Me -->
      <div class="card2">
        <h3>More About Me</h3>
          <div class="underline"></div>
        <p>
          I'm currently studying for my Bachelor's Degree at PUP
          (Polytechnic University of the Philippines). I taken the course of Computer Engineering.
        </p>
      </div>

      <!-- Card 4: Project Two -->
      <div class="card">
       
        <h3>Promote Your Brand</h3>
        <div class="underline2"></div>
        <p>
          A website is like a blank canvas for you to fill in your 
creativity or values.
Make a story more on showing than telling!
        </p>
      </div>

 <div class="card4">
  <div class="pin-emoji">📌</div>
  <img :src="user.photo" alt="Profile" class="profile-img" />
  <h3>Skills</h3>
  <div class="underline3"></div>
  <ul class="skills-list">
    <li><i class="fab fa-react"></i> ReactJS <i class="fab fa-php"></i> PHP Laravel</li>
    <li>
      <i class="fab fa-figma"></i> Figma
      <span style="margin-left: 16px;"></span>
      <i class="fas fa-pencil-ruler"></i><span style="margin-left: 3px;"> Adobe XD</span>
    </li>
  </ul>
</div>


    </div>
  </div>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.main1 {
  flex: 1;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 900px;
}

.card {
 background-color: #8A00C4;
  border-radius: 12px;
  padding: 50px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
   position: relative;
right: 300px;
 
}
.card4 {
  position: relative;
  background-color: white;
  padding: 50px;
  text-align: center;
  box-shadow: 0 12px 18px rgba(0, 0, 0, 0.25); /* bottom shadow */
  border-radius: 12px;
  left: 850px;
  top: -592.5px;
  height: 575px;
}

.pin-emoji {
  position: absolute;
  top: -35px;
  right: -40px;
  font-size: 64px;
  transform: rotate(15deg); /* Adjust angle if needed */
  z-index: 10;
}

.card3{
  background-color: white;
  border-radius: 12px;
  padding: 50px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
   position: relative;
right: 300px;
 
}
.card2 {
    background-color: #005249;
  border-radius: 12px;
  padding: 50px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-height: 350px;
  min-width: 448px;
  display: flex;
  flex-direction: column;
  
  


}

.card1 {
  background-color: white;
  border-radius: 12px;
  padding: 50px;
  font-weight: 600; 
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-size: 2.5rem;
  border: 3px solid black;
  height: 200px;
}
.card1,
.card2 {
  margin-left: 0;        /* reset if any */
  transform: translateX(-400px);
}
.card1 h1 {
  margin-top: 15px;
  margin-right: -24px;
}
.card2 h3 {

  text-align: left;
  font-size: x-large;
  color: white;
  
}

.card2 p{
margin-top: 20px;
  text-align: left;
  font-size: large;
  color: white;
  line-height: 1.5;
  
}
.card4 h3 {

  text-align: left;
  font-size: x-large;
  color: black;
  
}

.card4 p {
margin-top: 30px;
  text-align: left;
  font-size: large;
  color: white;
  line-height: 1.5;
  
}
.card h3 {

  text-align: left;
  font-size: x-large;
  color: white;
  
}

.card p{
margin-top: 30px;
  text-align: left;
  font-size: large;
  color: white;
  line-height: 1.5;
  
}
.profile-img,
.project-img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 10px;

  display: block;
  margin-left: auto;
  margin-right: auto;
}

.social-links {
  margin-top: 10px;
}

.social-links a {
  margin: 0 10px;
  font-size: 3rem;
  color: #333;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #0077b5; /* Customize per platform if desired */
}
.underline {
  width: 180px;
  height: 4px;
  background-color: yellow;
  margin: 10px 0 20px;
  border-radius: 2px;
}
.underline2 {
  width: 240px;
  height: 4px;
  background-color: #151517;
  margin: 10px 0 20px;
  border-radius: 2px;
}
.underline3 {
  width: 250px;
  height: 4px;
  background-color: #151517;
  margin: 10px 0 20px;
  border-radius: 2px;
}
.skills-list {
  list-style: none;
  padding: 0;
  margin-top: 20px;
  text-align: left;
}

.skills-list li {
  font-size: 1.1rem;
  margin: 12px 0;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #333;
  font-weight: bold;
}

.skills-list i {
  font-size: 1.4rem;
  color: black;
}


</style>
