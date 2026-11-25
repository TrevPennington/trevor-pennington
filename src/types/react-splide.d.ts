// @splidejs/react-splide ships types that its package.json "exports" map hides
// from the bundler resolver, so re-expose them for the type checker only.
declare module "@splidejs/react-splide" {
  type Types = typeof import("../../node_modules/@splidejs/react-splide/dist/types/index");
  export const Splide: Types["Splide"];
  export const SplideSlide: Types["SplideSlide"];
}
