<script>
    import { page } from '$app/stores';
    $: ({ status } = $page);
</script>

<h1>{status} {$page.error?.message}</h1>

<img alt="cat but {status}" src="https://http.cat/{status}" />
