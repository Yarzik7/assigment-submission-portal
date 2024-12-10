type TLevels = 'Junior' | 'Middle' | 'Senior' | 'Principle';

interface ILevels {
  levels: TLevels[];
}

interface IFormState {
  name: string;
  email: string;
  assignment_description: string;
  github_repo_url: string;
  candidate_level: TLevels;
}

export type { TLevels, ILevels, IFormState };
