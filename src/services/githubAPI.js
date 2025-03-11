export async function fetchOrgRepos() {
  const topic = 'showcase',
    response = await fetch(
      `https://api.github.com/search/repositories?q=topic:${topic}+org:hennasoftware`
    );

  const data = await response.json();

  return data.items;
}
