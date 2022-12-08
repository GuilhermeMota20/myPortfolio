export interface Project {
    uid: string;
    data: {
        banner: {
            url: string;
        };
        title: string;
        repo_git: {
            url: string;
        };
        demo_site: {
            url: string;
        };
        buy_project: {
            url: unknown;
        };
    };
}
export interface ProjectsPagination {
    next_page: string;
    results: Project[];
}
export interface ProjectsProps {
    projectsPagination: ProjectsPagination;
}

export interface Profile {
    uid: string;
    data: {
        profile_banner: {
            url: string;
        };
        profile_avatar: {
            url: string;
        };
        profile_name: string;
        profile_work: string;
        profile_desntonibilidade: string;
        profile_git: {
            url: string;
        };
        profile_linkedin: {
            url: string;
        };
    }
}
export interface ProfileResult {
    results: Profile[];
}
export interface ProfileProps {
    resultsProfile: ProfileResult;
}