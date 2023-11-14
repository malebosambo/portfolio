import { Octokit, App } from 'octokit';

export const octokit = new Octokit({ auth: env.process.GITHUB_TOKEN });
