<template>
  <div>
    <SearchJob></SearchJob>
    <JobList></JobList>
  </div>
</template>

<script>
import SearchJob from "@/views/Job/search.vue";
import JobList from "@/views/Job/list.vue";
export default {
  name: "home",
  data() {
    return {};
  },
  components: { JobList, SearchJob }
};
</script>
<style>
</style>
