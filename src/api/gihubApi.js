const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/anikettiwarime");
    return response.json();
};

export default githubInfoLoader;