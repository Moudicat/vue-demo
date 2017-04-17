<template>
    <div id="app">
        <img src="./assets/logo.png">
        <h2>Vuex demo</h2>
        <p>{{ counter }}</p>
        <p>{{ this.$store.getters.halfCount }}</p>
        <button @click="clickHandle">increment</button>
        <button @click="asyncClick">async increment</button>
        <br />
        <p>{{ nowStr }}</p>
        <button @click="strClickHandle">payload test</button>
    </div>
</template>

<script>
  import Store from './vuex/store';

  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    computed: {
      counter() {
        return this.$store.state.count;
      },
      nowStr() {
        return this.$store.state.str;
      }
    },
    methods: {
      clickHandle() {
        Store.commit('increment');
        console.log('[Dbg.reddy:this.$store.state.count]:', this.$store.state.count);
      },
      strClickHandle() {
        Store.commit({
          type: 'update',
          str: 'test!'
        });
      },
      asyncClick() {
        Store.dispatch('incrementAsync');
      }
    }
  }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
