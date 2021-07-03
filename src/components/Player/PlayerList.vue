<template>
  <div>
    <b-row>
      <b-col md="2" offset-md="10">
        <router-link id="button" :to="{ name: 'PlayerCreate' }">{{$t("create_player")}}</router-link>
      </b-col>
    </b-row>
    <br />
    <b-row>
      <b-col md="12">
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>{{ $t('lastname') }}</th>
                <th>{{ $t('firstname') }}</th>
                <th>{{ $t('birthdate') }}</th>
                <th>{{ $t('country') }}</th>
                <th>{{ $t('update') }}</th>
                <th>{{ $t('delete') }}</th>
              </tr>
            </thead>
            <tbody>
              <player-list-row v-for="player in players" :key="player.player_id" :player="player" @update="updatePlayer" @delete="deletePlayer" />
            </tbody>
          </table>
        </div>
      </b-col>
    </b-row>
    <b-modal ref="deleteConfirmModal" :title="$t('delete_title')" :cancel-title="$t('cancel')" @ok="onDeleteConfirm" @hide="onDeleteModalHide">
      <p class="my-4">{{$t("player_deleteconfirm")}}?</p>
    </b-modal>
    <b-modal ref="alertModal" :title="$t('success')" :ok-only="true">
      <p class="my-4">{{ $t('delete_success') }}</p>
    </b-modal>
  </div>
</template>
<script>
import PlayerService from '@/api-services/player.service'
import PlayerListRow from '@/components/Player/PlayerListRow'
export default {
  name: 'PlayerList',
  components: {
    'player-list-row': PlayerListRow
  },
  data() {
    return {
      players: [],
      selectedTeamId: null,
      alertModalTitle: '',
      alertModalContent: ''
    }
  },
  created() {
    this.fetchPlayers()
  },
  methods: {
    updatePlayer(player_id) {
      this.$router.push({ name: 'PlayerUpdate', params: { id: player_id } })
    },
    deletePlayer(player_id) {
      this.selectedPlayerId = player_id
      this.$refs.deleteConfirmModal.show()
    },
    fetchPlayers() {
      PlayerService.getAll().then(response => {
        this.players = response.data
      })
    },
    onDeleteConfirm() {
      PlayerService.delete(this.selectedPlayerId)
        .then(() => {
          this.alertModalTitle = 'Successfully'
          this.alertModalContent = 'Successfully deleted Account User'
          this.$refs.alertModal.show()
          this.fetchPlayers()
        })
        .catch(error => {
          this.alertModalTitle = 'Error'
          this.alertModalContent = error.response.data
          this.$refs.alertModal.show()
        })
    },
    onDeleteModalHide() {
      this.selectedPlayerId = null
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
