<script setup>
const user = {
  name: 'Your Name',
  bio: 'Passionate Web Developer & UI/UX Designer.',
  photo: 'https://via.placeholder.com/100',
  social: {
    github: 'https://github.com/yourprofile',
    linkedin: 'https://linkedin.com/in/yourprofile',
  }
}

const projects = [
  { title: 'Project One', image: 'https://via.placeholder.com/150', description: 'A cool project.' },
  { title: 'Project Two', image: 'https://via.placeholder.com/150', description: 'Another awesome work.' },
]
</script>

<template>
  <div class="layout">
    <!-- Top Navigation -->
    <nav class="navbar">
      <div class="nav-brand"> PORTFOLIO </div>
      <ul class="nav-links">
        <li><router-link to="/">Profile</router-link></li>
        <li><router-link to="/portfolio">Projects</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/creative">Creative</router-link></li>
      </ul>
    </nav>

    <!-- Router View Only -->
    <div class="router-outlet">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  padding: 16px 40px;
  color: white;
}

.nav-brand {
   font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: bold;
  margin-right: 10px;
}

.nav-links {
   font-family: 'Poppins', sans-serif;
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
  margin: 0;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

.nav-links a.router-link-active {
  border-bottom: 2px solid #fff;
}

.router-outlet {
  flex: 1;
  padding: 20px;
  background: #f3f4f6;
  overflow-y: auto;
}
</style>
