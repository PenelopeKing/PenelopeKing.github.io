<script>
  import Scroller from "./Scroller.svelte";
  let count, index, offset, progress;
  let width = 800;
  let height = 120;
</script>

<body>
  Hello
  </body>


<style>

  @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap');

  html {
    overflow-y: scroll;
  }

  * {
    font-family: "Nunito", sans-serif;
    box-sizing: border-box;
  }

  h1 {
    font-family: "Lexend";
  }

  .background {
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    position: relative;
    z-index: 10;
  }
  .foreground {
    width: 100%;
    padding: 0;
    margin: 0;
    height: auto;
    position: relative;
    z-index: 0;
    background-color: #ede9dd;
  }
  section {
    height: 95vh;
    /* color: white; */
    text-align: center;
    color: black;
    padding: 1em;
    margin: 0 0 2em 0;
    margin-top: 10px;
  }

</style>
