type TLevels = 'Junior' | 'Middle' | 'Senior' | 'Principle';

interface ILevelsResponse {
  levels: TLevels[];
}

interface IFormState {
  name: string;
  email: string;
  assignment_description: string;
  github_repo_url: string;
  candidate_level: TLevels;
}

export type { TLevels, ILevelsResponse, IFormState };
