const NextJsQuestions = [
 {
   question: "What does Next.js provide for server-side rendering (SSR)?",
   options: ["getStaticProps", "componentDidMount", "fetchData", "renderSSR"],
   correctAnswer: "getStaticProps",
 },
 {
   question: "Which lifecycle method is commonly used in Next.js for data fetching?",
   options: ["componentDidMount", "componentWillUnmount", "render", "useEffect"],
   correctAnswer: "useEffect",
 },
 {
   question: "What is the purpose of the file 'next.config.js' in a Next.js project?",
   options: ["Routing configuration", "Styling setup", "Environment variables", "Build configuration"],
   correctAnswer: "Build configuration",
 },
 {
   question: "How does Next.js support automatic code splitting for faster page loads?",
   options: ["Bundling all code in a single file", "Using the 'splitChunks' webpack feature", "Disabling code splitting", "Manually splitting code with comments"],
   correctAnswer: "Using the 'splitChunks' webpack feature",
 },
 {
   question: "What is the purpose of the '_app.js' file in Next.js?",
   options: ["Global styles and layouts", "API routes", "Server-side rendering logic", "Database connections"],
   correctAnswer: "Global styles and layouts",
 },
 {
   question: "Which hook is used for dynamic routing in Next.js?",
   options: ["useRouter", "useEffect", "useState", "useContext"],
   correctAnswer: "useRouter",
 },
 {
   question: "What is the significance of the 'public' directory in a Next.js project?",
   options: ["Storing server-side code", "Static assets like images and fonts", "Temporary build files", "CSS styling"],
   correctAnswer: "Static assets like images and fonts",
 },
 {
   question: "In Next.js, what does the 'getServerSideProps' function do?",
   options: ["Pre-render pages at build time", "Fetch data on each request", "Handle client-side navigation", "Define server-side routes"],
   correctAnswer: "Fetch data on each request",
 },
 {
   question: "Which command is used to start a Next.js development server?",
   options: ["npm start", "next start", "node server.js", "npm run dev"],
   correctAnswer: "npm run dev",
 },
 {
   question: "What is the purpose of the 'pages' directory in a Next.js project?",
   options: ["Storing CSS files", "Defining API routes", "Organizing React components", "Specifying routing structure"],
   correctAnswer: "Specifying routing structure",
 },
 {
   question: "Which React hook is commonly used for state management in a Next.js application?",
   options: ["useEffect", "useReducer", "useState", "useContext"],
   correctAnswer: "useState",
 },
 {
   question: "How can you create a dynamic route in Next.js?",
   options: ["Using the 'DynamicRoute' component", "Adding a folder with brackets [] in the 'pages' directory", "Setting up a proxy server", "Editing the webpack configuration"],
   correctAnswer: "Adding a folder with brackets [] in the 'pages' directory",
 },
 {
   question: "What is the purpose of the 'getStaticPaths' function in Next.js?",
   options: ["Generating static routes", "Handling dynamic data fetching", "Configuring server-side rendering", "Defining API routes"],
   correctAnswer: "Generating static routes",
 },
 {
   question: "Which feature in Next.js allows you to optimize images automatically?",
   options: ["Image optimization is not supported in Next.js", "Using the 'next/image' component", "Manually compressing images", "Disabling images"],
   correctAnswer: "Using the 'next/image' component",
 },
 {
   question: "What is the purpose of the 'pages/api' directory in Next.js?",
   options: ["Storing API documentation", "Defining client-side APIs", "Creating serverless functions", "Configuring API routes"],
   correctAnswer: "Creating serverless functions",
 },
 {
   question: "In Next.js, how can you fetch data on the server side during runtime?",
   options: ["Using 'getStaticProps'", "Using 'getServerSideProps'", "Using 'useEffect'", "Configuring 'getInitialProps'"],
   correctAnswer: "Using 'getServerSideProps'",
 },
 {
   question: "What is the purpose of the 'no-ssr' prop in Next.js?",
   options: ["Disabling server-side rendering for a specific component", "Enabling server-side rendering for a specific component", "Specifying the server-side rendering method", "Configuring the webpack dev server"],
   correctAnswer: "Disabling server-side rendering for a specific component",
 },
 {
   question: "How does Next.js handle CSS styling?",
   options: ["Inline styles only", "CSS-in-JS approach", "External stylesheets", "All of the above"],
   correctAnswer: "All of the above",
 },
 {
   question: "Which package is commonly used for client-side routing in Next.js?",
   options: ["react-router", "next-router", "vue-router", "react-navigation"],
   correctAnswer: "next-router",
 },
 {
   question: "What is the purpose of the 'getStaticProps' function in Next.js?",
   options: ["Fetch data at build time", "Fetch data on each request", "Fetch data during server-side rendering", "Fetch data on the client side"],
   correctAnswer: "Fetch data at build time",
 },
 {
   question: "Which configuration file is used to customize the webpack configuration in a Next.js project?",
   options: ["webpack.config.js", "next.config.js", "babel.config.js", "package.json"],
   correctAnswer: "next.config.js",
 },
 {
   question: "How can you implement environment variables in a Next.js project?",
   options: ["Hardcode them in the code", "Use a separate configuration file", "Use the 'process.env' object", "Only in the 'pages' directory"],
   correctAnswer: "Use the 'process.env' object",
 },
 {
   question: "Which method is used for data fetching in a Next.js component on the client side?",
   options: ["getStaticProps", "getServerSideProps", "useEffect", "fetch"],
   correctAnswer: "useEffect",
 },
 {
   question: "What does the 'fallback' property in 'getStaticPaths' do in Next.js?",
   options: ["Enables automatic page generation for paths not defined at build time", "Disables automatic page generation", "Specifies the fallback behavior for dynamic routes", "Defines the static paths for a page"],
   correctAnswer: "Enables automatic page generation for paths not defined at build time",
 },
 {
   question: "Which method is used for handling dynamic routes in Next.js?",
   options: ["getDynamicPaths", "getDynamicRoutes", "getServerSideProps", "getStaticPaths"],
   correctAnswer: "getStaticPaths",
 },
 {
   question: "What is the purpose of the 'Link' component in Next.js?",
   options: ["Styling", "Page navigation", "State management", "Animation"],
   correctAnswer: "Page navigation",
 },
 {
   question: "How can you deploy a Next.js app to Vercel?",
   options: ["npm deploy", "git push heroku master", "vercel deploy", "npm run build"],
   correctAnswer: "vercel deploy",
 },
];

export default NextJsQuestions;
