declare module '*.svg?inline' {
  const content: any
  export default content
}

declare module '*.svg' {
  const content: any
  export default content
}

declare module '*.jpg';

declare module "*.png" {
  const value: any;
  export default value;
}