import Joi from 'joi';
import { IFormState } from '@/types/FormState.types';

export const formSchema = Joi.object<IFormState>({
  name: Joi.string().min(1).required().messages({
    'string.base': 'Name must be a string.',
    'string.empty': 'Name is required.',
    'any.required': 'Name is required.',
  }),

  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.email': 'Email must be a valid email address.',
      'string.empty': 'Email is required.',
      'any.required': 'Email is required.',
    }),

  assignment_description: Joi.string().min(18).required().messages({
    'string.base': 'Assignment description must be a string.',
    'string.empty': 'Assignment description is required.',
    'string.min': 'Assignment description must be at least 18 characters.',
    'any.required': 'Assignment description is required.',
  }),

  github_repo_url: Joi.string().uri().required().messages({
    'string.uri': 'GitHub repository URL must be a valid URL.',
    'string.empty': 'GitHub repository URL is required.',
    'any.required': 'GitHub repository URL is required.',
  }),

  candidate_level: Joi.string().valid('Junior', 'Middle', 'Senior', 'Principal').required().messages({
    'any.only': 'Candidate level must be one of Junior, Middle, Senior or Principal.',
    'any.required': 'Candidate level is required. ',
  }),
});
