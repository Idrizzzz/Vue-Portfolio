<script setup>
import project1 from '@/assets/project.png'  // first image
import project2 from '@/assets/project2.png' // second image

const projects = [
  {
    title: 'Project One',
    image: project1,  // use first imported image
    description: 'A cool project.',
  },
  {
    title: 'Project Two',
    image: project2,  // use second imported image here
    description: 'Another awesome work.',
  },
]
</script>


<template>
  <div class="portfolio-page container mt-5 ">
 
    <div id="projectCarousel" class="carousel slide" data-bs-ride="carousel">
      <!-- Indicators -->
      <div class="carousel-indicators">
        <button
          v-for="(project, i) in projects"
          :key="i"
          type="button"
          data-bs-target="#projectCarousel"
          :data-bs-slide-to="i"
          :class="{ active: i === 0 }"
          :aria-current="i === 0 ? 'true' : null"
          :aria-label="`Slide ${i + 1}`"
        ></button>
      </div>

      <!-- Slides -->
      <div class="carousel-inner">
        <div
          v-for="(project, i) in projects"
          :key="i"
          :class="['carousel-item', { active: i === 0 }]"
        >
          <div class="d-flex justify-content-center">
            <img :src="project.image" class="d-block rounded" alt="Project image" />
          </div>
        </div>
      </div>

      <!-- Controls -->
      <button class="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.carousel-inner {
  text-align: center;
}

.carousel-indicators [data-bs-target] {
  background-color: #000;
}

#projectCarousel {
    
  margin-top: -200px;
  max-width: 1000px;
  margin: 0 auto; /* center horizontally */
}
myheading {
     font-family: 'Poppins', sans-serif;
}

</style>
