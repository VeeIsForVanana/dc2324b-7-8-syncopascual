<script>
    export let data;
</script>

<h1>GitHub Users</h1>


{#each data.users as { id, login }}
    <a href="/{login}">{id} - {login}</a><br>
{/each}
