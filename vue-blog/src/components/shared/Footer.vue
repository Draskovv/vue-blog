<template>
  <footer>
      <div id="footer">Blog footer?{{getYear}}</div>
  </footer>
</template>

<script>

export default {
  name: 'Footer',
  computed: {
    getYear() {
      return new Date().getFullYear();
    }
  }
}
</script>

<style>
footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color:white;
  text-align: center;
  border-top: 1px solid black;
}

#footer{
  height: 2em;
  color: white;
  background-color: rgb(69, 90, 100);
}
</style>
