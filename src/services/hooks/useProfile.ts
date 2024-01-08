import { createClient } from "../prismicio";

export async function getProfile() {
  const prismic = createClient({});

  const responseProfile = await prismic.getByType('profile');

  const resultsProfile = responseProfile.results.map(profile => {
    const imgBanner = String(profile.data.profile_banner.url);

    return {
      uid: profile.uid,
      data: {
        profile_banner: {
          url: imgBanner,
        },
        profile_avatar: {
          url: profile.data.profile_avatar.url,
        },
        profile_name: profile.data.profile_name,
        profile_work: profile.data.profile_work,
        profile_desntonibilidade: profile.data.profile_desntonibilidade,
        profile_download: {
          url: profile.data.profile_download.url,
        },
        profile_git: {
          url: profile.data.profile_git.url,
        },
        profile_linkedin: {
          url: profile.data.profile_linkedin.url,
        },
        profile_instagram: {
          url: profile.data.profile_instagram.url,
        },
      }
    }
  });

  return {
    resultsProfile,
  };
}