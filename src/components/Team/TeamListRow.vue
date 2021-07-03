<template>
  <tr>
    <td>{{ team.team_name }}</td>
    <td>{{ team.team_country }}</td>
    <td>{{ team.game_id }}</td>
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
  name: 'TeamListRow',
  props: ['team'],
  methods: {
    onUpdateClick() {
      this.$emit('update', this.team.team_id)
    },
    onDeleteClick() {
      this.$emit('delete', this.team.team_id)
    }
  }
}
</script>
<style scoped>
* {
  margin-top: 1px;
}
</style>
