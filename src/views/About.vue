<template>
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
      <h2 class="text-center">Background Info</h2>
    </div>

    <div class="row justify-content-center">
      <div class="col-sm-9">

        <span><strong>2014-2020: University of Windsor</strong></span>
        <ul>
          <li>Majored in Computer Science with an academic minor in German. During this period, I worked primarily with <strong>Java</strong> and <strong>C</strong>.</li>
          <li>Notable courses include: Algorithms, Data Structures, Database Management Systems, Systems Programming, and Artifical Intelligence.</li>
        </ul>

        <span><strong>2009-2013: Flight Academy / ERAU - Aeronautics</strong></span>
        <ul>
          <li>Successfully completed Pilot License (PPL/IR).</li>
          <li>Attended Embry-Riddle's Aeronautics Associate Program.</li>
        </ul>

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
</style>
