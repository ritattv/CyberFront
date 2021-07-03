<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">{{ $t('signup') }}</div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{ error }}</div>
            <form action="#" @submit.prevent="submit">
              <div class="form-group row">
                <label for="lastname" class="col-md-4 col-form-label text-md-right">{{ $t('lastname') }}</label>
                <div class="col-md-6">
                  <input id="lastname" type="text" class="form-control" name="lastname" value v-model="form.player_lastname" />
                </div>
              </div>
              <div class="form-group row">
                <label for="firstname" class="col-md-4 col-form-label text-md-right">{{ $t('firstname') }}</label>
                <div class="col-md-6">
                  <input id="firstname" type="text" class="form-control" name="firstname" value v-model="form.player_firstname" />
                </div>
              </div>
              <div class="form-group row">
                <label for="birthdate" class="col-md-4 col-form-label text-md-right">{{ $t('birthdate') }}</label>
                <div class="col-md-6">
                  <input id="birthdate" type="text" class="form-control" name="birthdate" value v-model="form.player_birthdate" />
                </div>
              </div>
              <div class="form-group row">
                <label for="country" class="col-md-4 col-form-label text-md-right">{{ $t('country') }}</label>
                <div class="col-md-6">
                  <input id="country" type="text" class="form-control" name="country" value v-model="form.player_country" />
                </div>
              </div>
              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">{{ $t('email') }}</label>
                <div class="col-md-6">
                  <input id="email" type="email" class="form-control" name="email" value required v-model="form.player_login" />
                </div>
              </div>

              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">{{ $t('password') }}</label>

                <div class="col-md-6">
                  <input id="password" type="password" class="form-control" name="password" required v-model="form.player_password" />
                </div>
              </div>
              <div class="form-group row">
                <label for="teamid" class="col-md-4 col-form-label text-md-right">{{ $t('teamid') }}</label>
                <div class="col-md-6">
                  <input id="teamid" type="text" class="form-control" name="teamid" value required v-model="form.team_id" />
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">{{ $t('signup') }}</button>
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
import PlayerService from '@/api-services/player.service'
export default {
  name: 'Register',
  data() {
    return {
      form: {
        player_lastname: '',
        player_firstname: '',
        player_birthdate: '',
        player_country: '',
        player_login: '',
        player_password: '',
        team_id: ''
      },
      error: null
    }
  },
  methods: {
    submit() {
      firebase.auth().createUserWithEmailAndPassword(this.form.player_login, this.form.player_password)
      PlayerService.create(this.form)
        .then(() => {
          this.form = {
            player_lastname: '',
            player_firstname: '',
            player_birthdate: '',
            player_country: '',
            player_login: '',
            player_password: '',
            team_id: ''
          }
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
