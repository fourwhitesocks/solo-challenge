<script lang="ts">
  import Title from '$lib/components/Title.svelte';
  //export let data;
  //this is showing  users destructured so you don't have to go data.users in the each block this from:  https://www.youtube.com/watch?v=EQy-AYhZIlE&ab_channel=Huntabyte 4:29 in!!

  //console.log(data);

  import { formatMe } from '$utils/FormatText';
</script>

{formatMe('Amy')}
<br />
<br />
<Title />

<br />
