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
        <p class="mt-5">My name is Moe Yagmour. I am an experienced IT professional currently searching for the next chapter of my learning journey.</p>
        <p>I'm the type of person who loves to plan, and loves to execute those plans even more.</p>

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
      <div class="col-md-9">
      <p>I have a broad and solid understanding of the following languages and technologies:</p>
      </div>
    </div>

    <div class="row justify-content-center">

      <div class="col-md-3">
        <p><strong>Web Languages & Frameworks</strong></p>
        <ul>
          <li>Javascript</li>
          <li>CSS/Sass</li>
          <li>Node.js</li>
          <li>Vue.js</li>
          <li>Bootstrap</li>
        </ul>
      </div>

      <div class="col-md-3">
        <p><strong>Programming Languages</strong></p>
        <ul>
          <li>Python</li>
          <li>C/C++</li>
          <li>Java</li>
        </ul>
      </div>

      <div class="col-md-3">
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
      <h2 class="text-center">Professional Experience</h2>
    </div>


    <div class="row justify-content-center">

      <div class="col-md-9">
        <strong>JAZ Aviation <span class="float-end">2019 - 2021</span></strong>
      </div>

      <div class="col-md-9">
      <li class="nobullet"><i>System Analyst</i></li>
      <ul>
        <li>Maintained local/cloud system infrastructures.</li>
        <li>Implemented scripts (Bash, Powershell, Python) to automate routine tasks across multiple systems.</li>
        <li>Worked with engineering teams to provide software support in a number of projects including:</li>
        <ul>
          <small><li>Aircraft fueling supply operations.</li></small>
          <small><li>Flight status data feeds and aviation analytics.</li></small>
        </ul>
        <li>Produced technical documentation on infrastructure, policies, and procedures.</li>
        <li>Assisted with front-end development and maintenance.</li>
      </ul>
      </div>

    </div>
    <hr class="mt-5">

    <div class="row justify-content-center mt-5 mb-5">
      <h2 class="text-center">Education</h2>
    </div>

    <div class="row justify-content-center">
      <div class="col-md-9">
        <strong>University of Windsor <span class="float-end">2014 - 2019</span></strong>
      </div>

      <div class="col-md-9">
        <li class="nobullet"><i>B.Sc.CS - Computer Science</i></li>
        <ul>
          <li>Minor in Modern Languages - German.</li>
        </ul>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-md-9">
        <strong>Flight Academy / ERAU <span class="float-end">2010 - 2013</span></strong>
      </div>

      <div class="col-md-9">
        <ul>
          <li>Successfully completed Pilot License (PPL/IR).</li>
          <li>Attend Embry-Riddle's Aeronautics Associate Program.</li>
        </ul>
      </div>
    </div>

<!--
    <div class="col-9">
      <div class="row">
        <div class="col-1 col-md-6"><strong>University of Windsor</strong></div>
        <div class="col-1 col-md-6 text-end"><strong>2014-2019</strong></div>
        <ul>
          <li>Minored in German.</li>
        </ul>

        <span><strong>2010-2013: Flight Academy / ERAU - Aeronautics</strong></span>
        <ul>
          <li>Successfully completed Pilot License (PPL/IR).</li>
          <li>Attended Embry-Riddle's Aeronautics Associate Program.</li>
        </ul>
      </div>
    </div>
-->

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
