declare module "particles.vue3";

<template>
  <div class="title">
    <h1>Moe Yagmour</h1>
    <ul>
      <li>B.Sc. Computer Science</li>
      <li>Aspiring programmer</li>
      <li>Cool guy</li>
    </ul>
    <hr>
    <p class="msg">Welcome to my online portfolio. Have a look around!</p>
  </div>
  <Particles id="tsparticles"/>
    <Particles
      id="tsparticles"
      :options="{
        background: {
          color: {
            value: '#ffffff'
          }
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: 'canvas',
          events: {
            onClick: {
              enable: true,
              mode: 'push'
            },
            onHover: {
              enable: false,
              mode: 'repulse'
            },
            resize: true
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40
            },
            push: {
              quantity: 1
            },
            repulse: {
              distance: 200,
              duration: 0.4
            }
          }
        },
        particles: {
          color: {
            value: '#000000'
          },
          links: {
            color: '#000000',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
          },
          collisions: {
            enable: true
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 1,
            straight: false
          },
          number: {
            density: {
              enable: true,
              value_area: 800
            },
            value: 100
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: 'square'
          },
          size: {
            random: true,
            value: 5
          }
        },
        detectRetina: true
      }"
    />
</template>


<script>


export default {
}
</script>

<style scoped>
#tsparticles {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.title {
  top: 15px;
  left: 15%;
  position: fixed;
  background: #fff;
  padding: 0 12px 6px 12px;
  border: 1px dashed #000;
  max-width: 300px;
}

.msg {
  font-size: 0.9em;
}
</style>
