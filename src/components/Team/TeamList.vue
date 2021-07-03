<template>
  <div>
    <b-row>
      <b-col md="2" offset-md="10">
        <router-link id="button" :to="{ name: 'TeamCreate' }">{{ $t('create_team') }}</router-link>
      </b-col>
    </b-row>
    <br />
    <b-row>
      <b-col md="12">
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>{{ $t('team_name') }}</th>
                <th>{{ $t('team_country') }}</th>
                <th>{{ $t('game_id') }}</th>
                <th>{{ $t('update') }}</th>
                <th>{{ $t('delete') }}</th>
              </tr>
            </thead>
            <tbody>
              <team-list-row v-for="team in teams" :key="team.team_id" :team="team" @update="updateTeam" @delete="deleteTeam" />
            </tbody>
          </table>
        </div>
      </b-col>
    </b-row>
    <b-modal ref="deleteConfirmModal" :title="$t('delete_title')" :cancel-title="$t('cancel')" @ok="onDeleteConfirm" @hide="onDeleteModalHide">
      <p class="my-4">{{$t("team_deleteconfirm")}}</p>
    </b-modal>
    <b-modal ref="alertModal" :title="$t('success')" :ok-only="true">
      <p class="my-4">{{ $t('delete_success') }}</p>
    </b-modal>
  </div>
</template>
<script>
import TeamService from '@/api-services/team.service'
import TeamListRow from '@/components/Team/TeamListRow'
export default {
  name: 'TeamList',
  components: {
    'team-list-row': TeamListRow
  },
  data() {
    return {
      teams: [],
      selectedTeamId: null,
      alertModalTitle: '',
      alertModalContent: ''
    }
  },
  created() {
    this.fetchTeams()
  },
  methods: {
    updateTeam(team_id) {
      this.$router.push({ name: 'TeamUpdate', params: { id: team_id } })
    },
    deleteTeam(team_id) {
      this.selectedTeamId = team_id
      this.$refs.deleteConfirmModal.show()
    },
    fetchTeams() {
      TeamService.getAll().then(response => {
        this.teams = response.data
      })
    },
    onDeleteConfirm() {
      TeamService.delete(this.selectedTeamId)
        .then(() => {
          this.alertModalTitle = 'Successfully'
          this.alertModalContent = 'Successfully deleted Account Team'
          this.$refs.alertModal.show()
          this.fetchTeams()
        })
        .catch(error => {
          this.alertModalTitle = 'Error'
          this.alertModalContent = error.response.data
          this.$refs.alertModal.show()
        })
    },
    onDeleteModalHide() {
      this.selectedTeamId = null
    }
  }
}
</script>
<style scoped>
#button {
  font-weight:bold;
  display:inline-block;
  margin-left: -495%;
  position: absolute;
  font-size: 17px;
  color: rgb(10,150,10);
  text-align: center;
}
* {
  margin-top: 1px;
}

</style>
