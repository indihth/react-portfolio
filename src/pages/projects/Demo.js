// import { useParams, useNavigate } from "react-router-dom";
// import { useState, useEffect, lazy, Suspense } from "react";
// import axios from 'axios'

// // import projectsJSON from "../../assets/data/projects.json";

// const Demo = () => {
//   const [project, setProject] = useState();
//   const { slug } = useParams();

//   const navigate = useNavigate();

//   // If project has no demo, redirect to project page
//   useEffect(() => {
//     axios.get("https://india-portfolio-default-rtdb.europe-west1.firebasedatabase.app/.json")
//     .then(response => {
//        // Find will return the first match - filter will return all matches in an array
//     let proj = response.data.find((project) => project.slug === slug);

//     if (!proj) {
//       // If projects doesn't exist, redirect
//       navigate("/projects");
//     } else if (!proj.demo) {
//       // If no demo, redirect back to project
//       navigate(`/projects/${slug}`);
//     }

//     // Storing returned project
//     setProject(proj);
//     })
//     .catch(e => {
//       console.error(e)
//     })
//     // Loop through all projects and return when slug matches slug from useParams

   
//   }, []);

//   if (!project) return <h1>Project doesn't exist!</h1>

// // Imports the demo component dynamically, according to slug
//   // const App = lazy(() => import(`./demos/${slug}/App`));

//   return (
//     // Fallback will display something until x can be displayed
//     <Suspense fallback={<p>Loading...</p>}>
//       <App />
//     </Suspense>
//   );
// };

// export default Demo;
