export enum ProjectCategory {
  APPS = "Apps",
  OPEN_SOURCE = "Open Source",
  ARCHITECTURE = "Architecture",
  ARTICLES = "Articles",
}

export interface ProjectData {
  title: string;
  summary: string;
  description: string;
  image: string;
  category: ProjectCategory;
  technologies: string[];
  link?: ProjectLink;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export enum Technology {
  REACT = "React",
  REACT_NATIVE = "React Native",
  TYPESCRIPT = "TypeScript",
}
