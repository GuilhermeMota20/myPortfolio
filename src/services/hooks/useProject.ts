import { createClient } from "../prismicio";

export async function getProjects() {
    const prismic = createClient({});

    const responseProject = await prismic.getByType('projects', { pageSize: 3 });

    const resultsProject = responseProject.results.map(project => {

        const buyProject = String(project.data.buy_project.url);

        return {
            uid: project.uid,
            data: {
                banner: {
                    url: project.data.banner.url,
                },
                title: project.data.title,
                skills: project.data.skills.map((skill) => {
                    return {
                        name_skills: skill.name_skills,
                    };
                }),
                repo_git: {
                    url: project.data.repo_git.url,
                },
                demo_site: {
                    url: project.data.demo_site.url,
                },
                buy_project: {
                    url: buyProject,
                },
            }
        }
    });

    const projectsPagination = {
        next_page: responseProject.next_page,
        results: resultsProject,
    };

    return {
        projectsPagination,
    };
}