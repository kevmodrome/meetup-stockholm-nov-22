<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>Todos</title>
</svelte:head>

<h1>Todos</h1>

<form method="POST" id="todos">
	<ul>
		{#each data.todos as { id, text, done }}
			<li>
				<span class:done>{text}</span>
			</li>
		{/each}
	</ul>
</form>
<form method="POST" action="?/create">
	<input id="text" name="text" />
	<button>Create</button>
</form>

<style>
	.done {
		text-decoration: line-through;
		color: lightgrey;
	}
</style>
