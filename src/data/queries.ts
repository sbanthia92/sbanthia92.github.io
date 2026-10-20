import { getCollection } from 'astro:content';

export const getProjects = async () =>
  (await getCollection('projects', (p) => !p.data.draft)).sort((a, b) => a.data.order - b.data.order);

export const getExperience = async () =>
  (await getCollection('experience', (e) => !e.data.draft)).sort((a, b) => b.data.start.localeCompare(a.data.start));

export const getPosts = async () =>
  (await getCollection('writing', (p) => !p.data.draft)).sort((a, b) => +b.data.date - +a.data.date);

export const fmtDate = (d: Date) => d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
