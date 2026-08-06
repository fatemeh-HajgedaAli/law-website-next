// constants/patterns.js

export const PATTERNS = {
  dot: {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C27B0' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    backgroundSize: "60px 60px",
  },
  law: {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C27B0' fill-opacity='0.15'%3E%3Cpath d='M50 10l-5-5-5 5 5 5 5-5zm-30 0l-5-5-5 5 5 5 5-5zm20 50l-5-5-5 5 5 5 5-5zm-20 0l-5-5-5 5 5 5 5-5z'/%3E%3Ccircle cx='40' cy='40' r='3'/%3E%3Crect x='35' y='25' width='10' height='30' rx='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    backgroundSize: "80px 80px",
  },
  line: {
    backgroundImage: `
      repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(156, 39, 176, 0.05) 20px, rgba(156, 39, 176, 0.05) 21px),
      repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(156, 39, 176, 0.05) 20px, rgba(156, 39, 176, 0.05) 21px)
    `,
  },
};
