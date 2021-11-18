<template>
  <div class="fixed">
  <div class="container">

    <div class="row mt-5 mb-5">
      <h1 class="text-center">About me</h1>
    </div>

    <div class="row justify-content-center">
      <div class="col-md-4">
        <img class="mt-2" src="../assets/user-icon.jpg" />
      </div>
      <div class="col-md-4">
        <p class="mt-5">Tell the world a little bit about yourself!</p>
        <p>Perhaps a short elevator pitch next to your pic?</p>

        <div class="row align-items-center justify-content-center mt-4">
          <div class="col-3">
            <a href="#">
              <span class="fab fa-linkedin icon-link"></span>
            </a>
          </div>
          <div class="col-3">
            <a href="#">
              <span class="fab fa-github icon-link"></span>
            </a>
          </div>
        </div>

      </div>
    </div>

    <hr class="mt-5" />

    <div class="row justify-content-center mt-5 mb-5">
      <h2 class="text-center">Other Details</h2>
    </div>

    <div class="row justify-content-center">
      <div class="col-md-9">
      <p>Feel free to put some detailed info here: skills, work experience, education, resume, etc...</p>
      </div>
    </div>

  </div>
</div>
</template>

<style scoped>
img {
  border-radius: 50%;
  display: block;
  margin: auto;
  width: 200px;
}

.icon-link {
  font-size: 2rem;
  color: black;
}

.icon-link:hover {
  color: var(--orange);
}
</style>
