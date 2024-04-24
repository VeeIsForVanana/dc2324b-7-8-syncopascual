<script>
    export let data;
</script>

<h1>{data.user.login}</h1>
<h3>
    {#if data.history != undefined}
        {#each data.history.split(',') as visited, i}
            <a href='/{visited}'>{visited}</a>
            {#if i+1 != data.history.split(',').length && visited != ''}
            &nbsp; >> &nbsp;
            {/if}
        {/each}
    {/if}
</h3>

<form method='POST' action='?/delete'>
    <button>Clear history</button>
</form>

<img src={data.user.avatar} alt='Avatar'/>