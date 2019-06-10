<template>
  <div>
    <ly_header></ly_header>
    <ly_body></ly_body>
    <ly_footer></ly_footer>
  </div>
</template>


<script>
import header from "./layout/Header";
import body from "./layout/Body";
import footer from "./layout/Footer";
export default {
  name: "Joblead",
  components: {
    ly_header: header,
    ly_body: body,
    ly_footer: footer
  }
};
</script>

<style scoped>
</style>
