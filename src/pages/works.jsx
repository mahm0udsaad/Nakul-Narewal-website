import { useEffect } from "react";
import { ProjectCard } from "../components/typography";
import { Link } from "react-router-dom";
import { Footer, PageFooter } from "../components/footer";
import transition from "../utiles/transition";

const Works =()=>{
    const projects = [
        {
          title: 'Matrya Cafeteria',
          img: 'https://www.twosqft.com/wp-content/uploads/2023/08/Enscape_2021-09-09-13-15-18-1024x576.png',
          description: 'This is a rooftop cafe designed in Hotel Matrya, Patna. The design follows a bohemian vibe and attracts a young crowd.',
          info: [
            { 'Client ': 'Liquid Themes' },
            { 'Work ': 'Architecture' },
            { 'Date ': '2022' }
          ]
        },
        {
          title: 'Event Barn',
          img: 'https://www.twosqft.com/wp-content/uploads/2023/08/3-5-1-1024x576.jpg',
          description: 'This landscape and commercial project for a landscape contractor is one where the client wants to display his landscaping skills along with minting money out of organizing events. The banquet landscape has a formal French aesthetic.',
          info: [
            { 'Client ': 'Liquid Themes' },
            { 'Work ': 'Architecture' },
            { 'Date ': '2022' }
          ]
        },
        {
          title: 'Patna Golf Club',
          img: 'https://www.twosqft.com/wp-content/uploads/2023/08/Dallas-National-Golf-Clubhouse-Richard-Drummond-Davis-Architect-1-720x480.jpeg',
          description: 'The gazebo designed for the Patna golf club is a brilliant palette of industrial and earthy.',
          info: [
            { 'Client ': 'Liquid Themes' },
            { 'Work ': 'Architecture' },
            { 'Date ': '2022' }
          ]
        },
        {
          title: "Kay's Art Cafe",
          img: 'https://www.twosqft.com/wp-content/uploads/2023/08/Enscape_2021-10-22-13-50-33_Enscape-scene-16-1024x576.jpg',
          description: "This rooftop cafeteria was designed as a proposal for the twin tower with expansive views of the Gandhi Maidan, River Ganga, and Patna's most prominent buildings like the Biscomaun and the convention centre.",
          info: [
            { 'Client ': 'Liquid Themes' },
            { 'Work ': 'Architecture' },
            { 'Date ': '2022' }
          ]
        },
        {
          title: 'Trauma Center',
          img: 'https://www.twosqft.com/wp-content/uploads/2023/08/3-4-1-1024x576.jpg',
          description: 'This trauma centre in Hajipur was an adaptive reuse of an abandoned mall structure. It was replanned as a hospital and its interiors were given a sleek, crisp look.',
          info: [
            { 'Client ': 'Liquid Themes' },
            { 'Work ': 'Architecture' },
            { 'Date ': '2022' }
          ]
        },
        {
          title: 'Rambhawan Project',
          img: 'https://www.twosqft.com/wp-content/uploads/2023/08/2-3-1-1024x853.jpg',
          description: "The project calls for renovating the chieftaincy's private wing in the family palace. It tries to marry Indian and French royalty to materialize the space, customised to their specific needs.",
          info: [
            { 'Client ': 'Liquid Themes' },
            { 'Work ': 'Architecture' },
            { 'Date ': '2022' }
          ]
        }
      ];
    return (
      <>
        <section className="pt-36 overflow-hidden w-11/12 xl:w-5/6 mx-auto ">
            <div className="flex flex-col justify-between h-[40vh] title mb-10">
           <div className="top">
           <span className="rounded-full p-1 text-sm px-3 bg-black text-white font-semibold">OUR VISION</span>
            <br />
            <i className="text-6xl sm:text-8xl font-semibold">Recent</i>
            <h1 className="font-semibold text-6xl sm:text-8xl">Works</h1>
           </div>
        </div>
        <div className="flex w-full justify-between items-center text-gray-600">
          <div className="flex w-[30%] justify-around">
            <span>Filter by</span><span>All</span>Commercial<span>Residential</span>
          </div>
          <div>
            see more 
          </div>
        </div>
        <div className="grid sm:grid-cols-3">
        {projects.map((project, index) => (
            <Link key={index} to={`/works/${index}`}>
                <ProjectCard img={project.img} title={project.title} />
            </Link>
        ))}
        </div>
        <div className="flex justify-center"><button className="p-5 text-sm border">Load More</button></div>

        </section>
        <Footer />
      </>
    )
    }
    export default transition(Works) ;