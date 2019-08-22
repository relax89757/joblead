<template>
  <div class="contain">
    <h2>{{message}}</h2>
  </div>
</template>


<script>
import { editCompanyStatus } from "@/request/account";
export default {
  name: "company",
  data() {
    return {
      company_id: "",
      message: ""
    };
  },
  created() {
    this.company_id = this.$route.params && this.$route.params.id;
    console.log(this.company_id);
    this.changeCompanyStatus();
  },
  methods: {
    changeCompanyStatus() {
      editCompanyStatus({
        company_id: this.company_id
      }).then(response => {
        if (response.success) {
          this.message = "您的公司验证通过";
        } else {
          this.message = response.msg;
        }
        Message({
          message: response.msg || "error",
          type: response.success ? "success" : "error",
          duration: 5 * 1000
        });
      });
    }
  }
};
</script>

<style scoped>
.contain {
  min-height: 600px;
}
h2{
  color:#000;
}
</style>
