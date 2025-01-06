<script lang="ts">
    import type { Project } from '$lib/types';
    import projects from './projects/projects.json';

    const typedProjects: Project[] = projects;
</script>

<h1>Homepage</h1>
<h2>Welcome to Showtime, Van-Do PHAM's personal portfolio</h2>
<h2>Projects</h2>
<ul>
    {#each typedProjects as project}
        <li>{project.name}: {project.description}</li>
    {/each}
</ul>

<style>
    h1 {
        padding-top: 5%;
        text-align: center;
        padding-bottom: 5%;
    }

    h2 {
        text-align: center;
        padding-bottom: 5%;
    }

    ul {
        list-style-type: none;
        padding: 0;
        text-align: center;
    }

    li {
        padding: 5px 0;
    }
</style>