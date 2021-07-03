<template>
  <b-container fluid>
    <div class="form-wrapper">
      <b-form @submit.prevent="updatePlayer">
        <b-form-group :label-cols="2" breakpoint="md" horizontal :label="$t('lastname')" for="name">
          <b-col :md="5">
            <b-input id="name" v-model="formData.player_lastname" maxlength="60" required />
          </b-col>
        </b-form-group>
        <b-form-group :label-cols="2" breakpoint="md" horizontal :label="$t('firstname')" for="name">
          <b-col :md="5">
            <b-input id="name" v-model="formData.player_firstname" maxlength="60" required />
          </b-col>
        </b-form-group>
        <b-form-group :label-cols="2" breakpoint="md" horizontal :label="$t('birthdate')" for="name">
          <b-col :md="5">
            <b-input id="name" v-model="formData.player_birthdate" maxlength="60" required />
          </b-col>
        </b-form-group>
        <b-form-group :label-cols="2" breakpoint="md" horizontal :label="$t('country')" for="country">
          <b-col :md="5">
            <b-input id="country" v-model="formData.player_country" maxlength="100" required />
          </b-col>
        </b-form-group>
        <br /><br />
        <b-col :md="5" offset="4">
          <b-button type="submit" variant="info">{{ $t('save') }}</b-button>
          <b-button :to="{ name: 'PlayerList' }" variant="danger">{{ $t('cancel') }}</b-button>
        </b-col>
      </b-form>
    </div>
    <b-modal ref="alertModal" :title="$t('success')" :ok-only="true" @ok="onAlertModalOkClick">
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
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
}
</style>
<script>
import PlayerService from '@/api-services/player.service'
export default {
  name: 'PlayerUpdate',
  data() {
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
  created() {
    PlayerService.get(this.$router.currentRoute.params.id).then((response) => {
      this.formData.player_lastname = response.data.player_lastname
      this.formData.player_firstname = response.data.player_firstname
      this.formData.player_country = response.data.player_country
      this.formData.player_birthdate = response.data.player_birthdate
      this.formData.player_login = response.data.player_login
      this.formData.player_password = response.data.player_password
      this.formData.team_id = response.data.team_id
    })
  },
  methods: {
    updatePlayer() {
      PlayerService.update(this.$router.currentRoute.params.id, this.formData)
        .then(() => {
          this.isSuccessfully = true
          this.alertModalTitle = 'Successfully'
          this.alertModalContent = 'Successfully updated Account User'
          this.$refs.alertModal.show()
        })
        .catch((error) => {
          this.isSuccessfully = false
          this.alertModalTitle = 'Error'
          this.alertModalContent = error.response.data
          this.$refs.alertModal.show()
        })
    },
    onAlertModalOkClick() {
      if (this.isSuccessfully) {
        this.$router.push({ name: 'PlayerList' })
      }
    }
  }
}
</script>
<style scoped>
* {
  margin-top: 1px;
}
</style>
