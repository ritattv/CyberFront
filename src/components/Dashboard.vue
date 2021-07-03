<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">{{ $t('dashboard') }}</div>
          <div class="card-body">
            <div v-if="user" class="alert alert-success" role="alert">{{$t('login_success')</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    // map this.user to this.$store.getters.user
    ...mapGetters({
      user: 'user'
    })
  }
}
</script>
<style scoped>
* {
  margin-top: 1px;
}
</style>
