import { useQuery } from "react-query";
import { api } from "../api";

type User = {
    id: string;
    name: string;
    avatar: string;
    bio: string;
};

type Project = {
    id: string;
    title: string;
    description: string;
    image_url: string;
    link_git: string;
    link_demo: string;
}

type GetProjectResponse = {
    totalCount: number;
    users: User[];
    projects: Project[];
}

export async function getProjects(): Promise<GetProjectResponse> {
    const { data, headers } = await api.get('/');

    const totalCount = Number(headers['x-total-count']);

    const users = data.users.map(user=> {
        return {
            id: user.id,
            name: user.name,
            avatar: user.avatar,
            bio: user.bio,
        }
    });

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
        users,
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