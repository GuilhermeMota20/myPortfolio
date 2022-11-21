import { useQuery } from "react-query";
import { api } from "../api";

type Project = {
    id: string;
    title: string;
    description: string;
    image_url: string;
    link_git: string;
    link_demo: string;
}

type GetProjectResponse = {
    totalCount?: number;
    projects: Project[];
}

export async function getProjects(): Promise<GetProjectResponse> {
    const { data, headers } = await api.get('/');

    const totalCount = Number(headers['x-total-count']);

    const projects = data.projects.map(project => {
        return {
            id: project.id,
            title: project.title,
            description: project.description,
            image_url: project.image_url,
            link_git: project.link_git,
            link_demo: project.link_demo,
        }
    });

    return {
        projects,
        totalCount,
    };
}

// react query
export function useDBDev() {
    return useQuery(['/'], () => getProjects(), {
        staleTime: 1000 * 5, // 5 seconds
    });
}