


export default {
  plugins: {
    "@tailwindcss/postcss": {
      content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        // Add more paths here where your Tailwind classes are used, e.g., for src/
        "./src/**/*.{js,ts,jsx,tsx,mdx}", // Ensure your src folder is included
      ],
      theme: {
        extend: {
          fontFamily: {
            sans: ["var(--font-geist-sans)"],
          },
          colors: {
            // These will be added by shadcn/ui init based on your chosen base color
            // e.g., 'background': 'hsl(var(--background))',
            // 'foreground': 'hsl(var(--foreground))',
            // ... and so on for primary, secondary, accent, etc.
          },
        },
      },
      // You might also find `plugins: []` added here if Shadcn uses specific Tailwind plugins
    },
  },
};
