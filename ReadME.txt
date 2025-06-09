<!-- Main Grid -->
    <div class="main">
      <div class="grid">
        <!-- Card 1: Welcome -->
        <div class="card">
          <h2>Welcome to My Dashboard</h2>
        </div>

        <!-- Card 2: Profile -->
        <div class="card">
          <img :src="user.photo" alt="Profile" class="profile-img" />
          <h3>{{ user.name }}</h3>
          <p>{{ user.bio }}</p>
        </div>

        <!-- Card 3: Project One -->
        <div class="card">
          <img :src="projects[0].image" alt="Project One" class="project-img" />
          <h3>{{ projects[0].title }}</h3>
          <p>{{ projects[0].description }}</p>
        </div>

        <!-- Card 4: Project Two -->
        <div class="card">
          <img :src="projects[1].image" alt="Project Two" class="project-img" />
          <h3>{{ projects[1].title }}</h3>
          <p>{{ projects[1].description }}</p>
        </div>
      </div>
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
  padding: 16px 24px;
  color: white;
}

.nav-brand {
  font-size: 1rem;
  font-weight: bold;
}

.nav-links {
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

Hi welcome to my portfolio

Login Credentials:

Username: admin
Password: 1234


It's a simple portfolio website that features, profile, my highlighted projects, a contact me page, and a creative page, where I coded a simple snake game.