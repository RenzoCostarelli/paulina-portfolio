import * as prismic from "@prismicio/client";

export const repositoryName = "paulina-portfolio";

export function linkResolver(doc: { type?: string; uid?: string | null }): string {
  if (doc.type === "obra" && doc.uid) return `/obras/${doc.uid}`;
  return "/";
}

export function createClient(config: prismic.ClientConfig = {}) {
  return prismic.createClient(repositoryName, config);
}
