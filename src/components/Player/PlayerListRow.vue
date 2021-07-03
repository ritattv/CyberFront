<template>
  <tr>
    <td>{{ player.player_lastname }}</td>
    <td>{{ player.player_firstname }}</td>
    <td>{{ player.player_birthdate }}</td>
    <td>{{ player.player_country }}</td>
    <!--<td>{{ player.player_login }}</td>-->
    <td>
      <b-button variant="success" @click="onUpdateClick">{{ $t('update') }}</b-button>
    </td>
    <td>
      <b-button variant="danger" @click="onDeleteClick">{{ $t('delete') }}</b-button>
    </td>
  </tr>
</template>
<script>
export default {
  name: 'PlayerListRow',
  props: ['player'],
  methods: {
    onUpdateClick() {
      this.$emit('update', this.player.player_id)
    },
    onDeleteClick() {
      this.$emit('delete', this.player.player_id)
    }
  }
}
</script>
<style scoped>
* {
  margin-top: 1px;
}
</style>
