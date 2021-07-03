<template>
  <b-container fluid>
    <div class="form-wrapper">
      <b-form @submit.prevent="createPlayer">
        <b-form-group
          :label-cols="2"
          breakpoint="md"
          horizontal
          :label="$t('lastname')"
          for="name">
          <b-col :md="5">
            <b-input
              id="name"
              v-model="formData.player_lastname"
              maxlength="60"
              required />
          </b-col>
        </b-form-group>
        <b-form-group
          :label-cols="2"
          breakpoint="md"
          horizontal
          :label="$t('firstname')"
          for="name">
          <b-col :md="5">
            <b-input
              id="name"
              v-model="formData.player_firstname"
              maxlength="60"
              required />
          </b-col>
        </b-form-group>
        <b-form-group
          :label-cols="2"
          breakpoint="md"
          horizontal
          :label="$t('birthdate')"
          for="birthdate">
          <b-col :md="5">
            <b-input
              id="birthdate"
              v-model="formData.player_birthdate"
              maxlength="60"
              required />
          </b-col>
        </b-form-group>
        <b-form-group
          :label-cols="2"
          breakpoint="md"
          horizontal
          :label="$t('country')"
          for="Country">
          <b-col :md="5">
            <b-input
              id="Country"
              v-model="formData.player_country"
              maxlength="100"
              required />
          </b-col>
        </b-form-group>
        <b-form-group
          :label-cols="2"
          breakpoint="md"
          horizontal
          :label="$t('email')"
          for="Login">
          <b-col :md="5">
            <b-input
              id="Login"
              v-model="formData.player_login"
              maxlength="100"
              required />
          </b-col>
        </b-form-group>
        <b-form-group
          :label-cols="2"
          breakpoint="md"
          horizontal
          :label="$t('password')"
          for="Password">
          <b-col :md="5">
            <b-input
              id="Password"
              type="password"
              v-model="formData.player_password"
              maxlength="100"
              required />
          </b-col>
        </b-form-group>
        <b-form-group
          :label-cols="2"
          breakpoint="md"
          horizontal
          :label="$t('teamid')"
          for="teamid">
          <b-col :md="5">
            <b-input
              id="teamid"
              v-model.number="formData.team_id"
              required />
          </b-col>
        </b-form-group>
        <br ><br >
        <b-col
          :md="5"
          offset="4">
          <b-button
            type="submit"
            variant="info">{{ $t('save') }}</b-button>
          <b-button
            :to="{ name: 'PlayerList' }"
            variant="danger">{{ $t('cancel') }}</b-button>
        </b-col>
      </b-form>
    </div>
    <b-modal
      ref="alertModal"
      :title="$t('success')"
      :ok-only="true"
      @ok="onAlertModalOkClick">
      <p class="my-4">{{ $t('update_success') }}</p>
    </b-modal>
  </b-container>
</template>
<style>
.form-wrapper {
  margin-top: 20px;
  min-height: 20px;
  padding: 19px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
}
</style>
<script>
import PlayerService from '@/api-services/player.service'
import firebase from 'firebase'
export default {
  name: 'PlayerCreate',
  data () {
    return {
      formData: {
        player_lastname: '',
        player_firstname: '',
        player_birthdate: '',
        player_country: '',
        player_login: '',
        player_password: '',
        team_id: ''
      },
      alertModalTitle: '',
      alertModalContent: '',
      isSuccessfully: false
    }
  },
  methods: {
    createPlayer () {
       firebase.auth().createUserWithEmailAndPassword(this.formData.player_login, this.formData.player_password)
      PlayerService.create(this.formData).then(() => {
        this.isSuccessfully = true
        this.alertModalTitle = 'Successfully'
        this.alertModalContent = 'Successfully created Account Player'
        this.$refs.alertModal.show()
        this.formData = {
          player_lastname: '',
        player_firstname: '',
        player_birthdate: '',
        player_country: '',
        player_login: '',
        player_password: '',
        team_id: ''
        }
      }).catch((error) => {
        this.isSuccessfully = false
        this.alertModalTitle = 'Error'
        this.alertModalContent = error.response.data
        this.$refs.alertModal.show()
      })
    }
  },
  onAlertModalOkClick () {
    if (this.isSuccessfully) {
      this.$router.push({ name: 'PlayerList' })
    }
  }
}
</script>
