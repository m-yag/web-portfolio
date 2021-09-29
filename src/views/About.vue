<template>
  <div class="fixed">
  <div class="container">

    <div class="row mt-5 mb-5">
      <h1 class="text-center">About me</h1>
    </div>

    <div class="row justify-content-center">
      <div class="col-sm-4">
        <img src="../assets/me.jpg" />
      </div>
      <div class="col-sm-4">
        <p class="mt-5">My name is Moe Yagmour. I'm a recent CS graduate searching for the next chapter of my learning journey.</p>
        <p> I'm the type of person who loves to plan, and loves to execute those plans even more.</p>

        <div class="row align-items-center justify-content-center mt-4">
          <div class="col-3">
            <a href="https://linkedin.com/in/yagmour">
              <span class="fab fa-linkedin icon-link"></span>
            </a>
          </div>
          <div class="col-3">
            <a href="https://github.com/m-yag">
              <span class="fab fa-github icon-link"></span>
            </a>
          </div>
        </div>

      </div>
    </div>

    <hr class="mt-5" />

    <div class="row justify-content-center mt-5 mb-5">
      <h2 class="text-center">Portfolio of Expertise</h2>
    </div>

    <div class="row justify-content-center">
      <div class="col-sm-9">
      <p>I have a broad and solid understanding of the following languages and technologies:</p>
      </div>
    </div>

    <div class="row justify-content-center">

      <div class="col-sm-3">
        <p><strong>Web Languages & Frameworks</strong></p>
        <ul>
          <li>Javascript</li>
          <li>CSS/Sass</li>
          <li>Node.js</li>
          <li>Vue.js</li>
          <li>Bootstrap</li>
        </ul>
      </div>

      <div class="col-sm-3">
        <p><strong>Programming Languages</strong></p>
        <ul>
          <li>Python</li>
          <li>C/C++</li>
          <li>Java</li>
        </ul>
      </div>

      <div class="col-sm-3">
        <p><strong>Systems & CLI Tools</strong></p>
        <ul>
          <li>Linux</li>
          <li>Bash</li>
          <li>Git</li>
        </ul>
      </div>

    </div>

    <hr class="mt-5" />

    <div class="row justify-content-center mt-5 mb-5">
      <h2 class="text-center">Education</h2>
    </div>

    <div class="row justify-content-center">
      <div class="col-sm-9">

        <span><strong>2014-2020: University of Windsor</strong></span>
        <ul>
          <li>Majored in Computer Science with a 3.0 GPA.</li>
          <li>Minored in German.</li>          
          <li>Notable courses include: Algorithms (<strong>C</strong>), Data Structures(<strong>Java</strong>), Database Management Systems (<strong>SQL</strong>), Systems Programming (<strong>C</strong>), OOP (<strong>C++</strong>), and Artifical Intelligence.</li>
        </ul>

        <span><strong>2010-2013: Flight Academy / ERAU - Aeronautics</strong></span>
        <ul>
          <li>Successfully completed Pilot License (PPL/IR).</li>
          <li>Attended Embry-Riddle's Aeronautics Associate Program.</li>
        </ul>

      </div>
    </div>

  </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
img {
  border-radius: 50%;
  display: block;
  margin: auto;
  width: 200px;
}

.nobullet {
  list-style-type:none;
}

.icon-link {
  font-size: 2rem;
  color: black;
}

.icon-link:hover {
  color: var(--orange);
}
</style>
