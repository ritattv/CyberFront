<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">{{ $t('login') }}</div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{ error }}</div>
            <form action="#" @submit.prevent="submit">
              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">{{ $t('email') }}</label>

                <div class="col-md-6">
                  <input id="email" type="email" class="form-control" name="email" autocomplete="on" value required autofocus v-model="form.email" />
                </div>
              </div>

              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">{{ $t('password') }}</label>

                <div class="col-md-6">
                  <input id="password" type="password" class="form-control" name="password" autocomplete="on" required v-model="form.password" />
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <WithLoggerButton> {{ $t('signin') }}</WithLoggerButton>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import Button from "@/components/Button.vue";
import { withLoggerButton } from "@/components/WithLoggerButton.js";
const ButtonWithLogger = withLoggerButton(Button);

export default {
  components: {
    WithLoggerButton: ButtonWithLogger
  },
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      error: null
    }
  },
  methods: {
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        // eslint-disable-next-line no-unused-vars
        .then((data) => {
          this.$router.replace({ name: 'Home' })
        })
        .catch((err) => {
          this.error = err.message
        })
    }
  }
}
</script>
<style scoped>
* {
  margin-top: 1px;
}
</style>
