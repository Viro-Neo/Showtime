<script lang="ts">
    import type { Project } from '$lib/types';
    import projects from './projects/projects.json';
    import { redirectTo } from '$lib/safeRedirection';

    const typedProjects: Project[] = projects;
</script>

<main>
    <section class="intro">
        <h1>Van Do PHAM</h1>
        <p>Hi, I'm Van Do PHAM, a passionate developer. Here are some of my projects:</p>
    </section>

    <section class="projects">
        <h2>Projects</h2>
        <ul>
            {#each typedProjects as project}
                <li>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <a href={project.github} target="_blank" on:click|preventDefault={() => redirectTo(project.github)}>View on GitHub</a>
                </li>
            {/each}
        </ul>
    </section>
</main>

<style>
    main {
        font-family: Arial, sans-serif;
        margin: 0 auto;
        max-width: 800px;
        padding: 20px;
    }
    .intro {
        text-align: center;
        margin-bottom: 40px;
    }
    .projects {
        margin-top: 20px;
    }
    .projects ul {
        list-style-type: none;
        padding: 0;
    }
    .projects li {
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 20px;
        margin-bottom: 20px;
        transition: box-shadow 0.3s;
    }
    .projects li:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .projects h3 {
        margin: 0 0 10px;
    }
    .projects p {
        margin: 0 0 10px;
    }
    .projects a {
        color: #007acc;
        text-decoration: none;
    }
    .projects a:hover {
        text-decoration: underline;
    }
</style>