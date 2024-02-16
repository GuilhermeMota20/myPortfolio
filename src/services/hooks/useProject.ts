import { createClient } from "../prismicio";

function getPageNumberFromLink(nextPageLink: any) {
  const regex = /page=(\d+)/;
  const match = nextPageLink.match(regex);

  if (match && match.length > 1) {
    return parseInt(match[1]);
  };

  return null;
};

export async function getProjects(nextPage = null) {
  const prismic = createClient({});

  const responseProject = await prismic.getByType('projects', {
    pageSize: 4,
    page: nextPage ? getPageNumberFromLink(nextPage) : 1,
    orderings: {
      field: "my.projects.is_new_project",
      direction: "desc"
    }
  });

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
        is_new_project: project.data.is_new_project,
        is_old_project: project.data.is_old_project,
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
    };
  });

  const projectsPagination = {
    next_page: responseProject?.next_page,
    results: resultsProject,
  };

  return {
    projectsPagination,
  };
};