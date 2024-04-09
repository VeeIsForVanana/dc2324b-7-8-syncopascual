<script>
    import { page } from '$app/stores';
    $: ({ status, error } = $page);
</script>

<h1>{status}</h1>
{#if error !== null}
    <h2>{error.message}</h2>
{/if}
<img alt="cat but {status}" src="https://http.cat/{status}" />
