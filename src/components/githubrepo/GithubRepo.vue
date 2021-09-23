<template>
  <div class="container mt-5">
    <div class="row">

      <div class="col-sm-6">
        <nav>
          <span class="fas fa-terminal"></span> <strong>Clone:</strong>
          <div class="nav justify-content-start" id="nav-tab" role="tablist">
            <router-link to="#" class="routerlink active" id="nav-https-tab" data-bs-toggle="tab" data-bs-target="#nav-https" type="button" role="tab" aria-controls="nav-https" aria-selected="true"><strong>HTTPS</strong></router-link>
            <router-link to="#" class="routerlink" id="nav-cli-tab" data-bs-toggle="tab" data-bs-target="#nav-cli" type="button" role="tab" aria-controls="nav-cli" aria-selected="false"><strong>Github CLI</strong></router-link>
          </div>
        </nav>

        <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="nav-https" role="tabpanel" aria-labelledby="nav-https-tab">
            <input style="width: 300px" type="text" :value="httpsCloneUrl" readonly="readonly">
            <button class="routerlink clone" style="margin-left: 2px" v-clipboard="httpsCloneUrl"><span class="far fa-clone"></span></button>
          </div>
          <div class="tab-pane fade" id="nav-cli" role="tabpanel" aria-labelledby="nav-cli-tab">
            <input style="width: 300px" type="text" :value="githubCloneCmd" readonly="readonly">
            <button class="routerlink clone" style="margin-left: 2px" v-clipboard="githubCloneCmd"><span class="far fa-clone"></span></button>
          </div>
        </div>
      </div>

      <div class="col-sm-6 text-end">
        <p><span class="fab fa-github"></span> <span class="md"><a href="#">{{owner}}/{{repo}}</a></span></p>
        <p class="stats">Last commit: <span>{{calcCommitDate()}}</span></p>
        <p>{{numberOfCommits}} commits</p>
      </div>

    </div>

    <div class="row">
      <span class="file"><span class="far fa-file"></span> README.md</span>
      <Markdown class="md file" :html="true" :linkify="true" :abbr="true" :source="readmeRaw" />
    </div>

  </div>
</template>

<script>
import Markdown from 'vue3-markdown-it'

export default {
  props: {
    repo: {
      type: String,
      required: true
    },
    owner: {
      type: String,
      required: true
    }
  },
  data(props) {
    return {
      readmeUrl: `https://raw.githubusercontent.com/${props.owner}/${props.repo}/master/README.md`,
      httpsCloneUrl: `https://github.com/${props.owner}/${props.repo}.git`,
      githubCloneCmd: `gh repo clone ${props.owner}/${props.repo}`,
      repoCommitUrl: `https://api.github.com/repos/${props.owner}/${props.repo}/commits`,
      readmeRaw: '',
      numberOfCommits: [],
      lastCommit: []
    }
  },
  methods: {
    calcCommitDate() {
      var date = new Date()
      date = date - this.lastCommit
      if(date > 86400e3) {
        date = Math.floor(date / 86400e3)
        date > 1 ? date += ' days ago' : date = ' yesterday'
      }
      else if(date > 3600e3) {
        date = Math.floor(date / 3600e3) + ' hours ago'
      }
      else if(date > 60e3) {
        date = Math.floor(date / 60e3) + ' minutes ago'
      }
      else {
        date = Math.floor(date / 1e3) + ' seconds ago'
      }
      return date
    }
  },
  mounted() {
    fetch(this.repoCommitUrl, {
      headers: {
        Authorization: `token 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`
      }
    })
      .then(res => res.json())
      .then(data => 
        this.lastCommit = new Date(data[0].commit.author.date))
      .catch(err => console.log(err.message)),
    fetch(this.repoCommitUrl, {
      headers: {
        Authorization: `token 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`
      }
    })
      .then(res => res.json())
      .then(data => this.numberOfCommits = data.length)
      .catch(err => console.log(err.message))
    fetch(this.readmeUrl, {
      headers: {
      }
    })
      .then(res => res.text())
      .then(data => this.readmeRaw = data)
      .catch(err => console.log(err.message))
  },
  components: {Markdown}
}
</script>
<style scoped>
.clone {
  background: none;
  border: none;
}

.stats {
  margin-bottom: 0;
}

.routerlink {
  margin-right: 17px;
  font-weigth: bold;
  text-decoration: none;
  color: black;
}

.routerlink:hover {
  color: var(--orange);
  font-weight: bold;
}

.routerlink.active {
  color: var(--orange);
  font-weight: bold;
}

.file {
  border-top: 1px solid var(--btn-light);
  border-right: 1px solid var(--btn-light);
  border-left: 1px solid var(--btn-light);
  border-bottom: 1px solid var(--btn-light);
}
</style>
