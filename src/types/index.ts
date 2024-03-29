export interface Project {
  uid: string;
  data: {
    banner: {
      url: string;
    };
    title: string;
    skills: {
      name_skills: string;
    }[];
    is_new_project: boolean;
    is_old_project: boolean;
    repo_git: {
      url: string;
    };
    demo_site: {
      url: string;
    };
    buy_project?: {
      url: string | undefined;
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
    profile_banner?: {
      url: string | undefined;
    };
    profile_avatar: {
      url: string;
    };
    profile_name: string;
    profile_work: string;
    profile_desntonibilidade: string;
    profile_download: {
      url: string;
    }
    profile_git: {
      url: string;
    };
    profile_linkedin: {
      url: string;
    };
    profile_instagram: {
      url: string;
    }
  }
}
export interface ProfileProps {
  resultsProfile: Profile[];
}