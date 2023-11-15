import { Octokit, App } from 'octokit';

export const octokit = new Octokit({ auth: env.process.GITHUB_TOKEN });

export const getDatabase = async () => {
  const response = await octokit.request('GET /orgs/{org}/repos', {
    org: 'malebosambo',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });

  const responseResults = response.data.map((repo) => {
    return {
      id: repo.id,
      name: repo.name
    }
  });

  console.log(responseResults);

  return responseResults;
}
