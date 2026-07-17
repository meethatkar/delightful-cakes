import { productCatalog } from "@/data/products";

export const getHeroProducts = () =>
  productCatalog.filter((product) => product.tags.includes("hero"));

export const getBestSellers = () =>
  productCatalog.filter((product) => product.tags.includes("bestseller"));

export const getFeaturedProducts = () =>
  productCatalog.filter((product) => product.tags.includes("featured"));

export const getProductsByCategory = (category) =>
  productCatalog.filter((product) => product.category === category);

export const getGroupLayoutProducts = () =>
  productCatalog.filter((product) => product.layout === "group");