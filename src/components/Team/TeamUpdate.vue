<template>
  <b-container fluid>
    <div class="form-wrapper">
      <b-form @submit.prevent="updateTeam">
        <b-form-group :label-cols="2" breakpoint="md" horizontal :label="$t('team_name')" for="name">
          <b-col :md="5">
            <b-input id="name" v-model="formData.team_name" maxlength="60" required />
          </b-col>
        </b-form-group>
        <b-form-group :label-cols="2" breakpoint="md" horizontal :label="$t('team_country')" for="country">
          <b-col :md="5">
            <b-input id="country" v-model="formData.team_country" maxlength="100" required />
          </b-col>
        </b-form-group>
        <b-form-group :label-cols="2" breakpoint="md" horizontal :label="$t('game_id')" for="game id">
          <b-col :md="5">
            <b-input id="gameId" v-model.number="formData.game_id" maxlength="12" required />
          </b-col>
        </b-form-group>
        <br /><br />
        <b-col :md="5" offset="4">
          <b-button type="submit" variant="info">{{ $t('save') }}</b-button>
          <b-button :to="{ name: 'TeamList' }" variant="danger">{{ $t('cancel') }}</b-button>
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
import TeamService from '@/api-services/team.service'
export default {
  name: 'TeamUpdate',
  data() {
    return {
      formData: {
        team_name: '',
        team_country: '',
        game_id: ''
      },
      alertModalTitle: '',
      alertModalContent: '',
      isSuccessfully: false
    }
  },
  created() {
    TeamService.get(this.$router.currentRoute.params.id).then(response => {
      this.formData.team_name = response.data.team_name
      this.formData.team_country = response.data.team_country
      this.formData.game_id = response.data.game_id
    })
  },
  methods: {
    updateTeam() {
      TeamService.update(this.$router.currentRoute.params.id, this.formData)
        .then(() => {
          this.isSuccessfully = true
          this.alertModalTitle = 'Successfully'
          this.alertModalContent = 'Successfully updated Account Team'
          this.$refs.alertModal.show()
        })
        .catch(error => {
          this.isSuccessfully = false
          this.alertModalTitle = 'Error'
          this.alertModalContent = error.response.data
          this.$refs.alertModal.show()
        })
    },
    onAlertModalOkClick() {
      if (this.isSuccessfully) {
        this.$router.push({ name: 'TeamList' })
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
