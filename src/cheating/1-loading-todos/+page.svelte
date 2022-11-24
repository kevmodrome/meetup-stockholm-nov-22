<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>Todos</title>
</svelte:head>

<h1>Todos</h1>

<ul>
	{#each data.todos as { id, text, done }}
		<li>
			<span class:done>{text}</span>
		</li>
	{/each}
</ul>
