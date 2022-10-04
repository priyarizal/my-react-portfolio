import React from 'react';
import Project from '../Project'
// import furever-yours from '../../assets/images/anglo-piano.jpg'
// import SoftwareCenter from '../../assets/images/onlyfarms.jpg'
// import DynamicCookbook from '../../assets/images/generation-ship-calc.jpg'



const projects = [
    {
        id: 1,
        title: "Furever-yours",
        description: "An application that utilizes Adopt-A-Pet's API that allows you to search for adoptable pets within their database.",
        // image: furever-yours,
        repo: "https://github.com/priyarizal/furever-yours",
        deployed: "https://furever-yours.herokuapp.com/"
    },
    {
        id: 2,
        title: "Software Center",
        description: "Software Center is a social network site for web developers where people can come together and collaborate on projects.",
        // image: SoftwareCenter,
        repo: "https://github.com/priyarizal/softwareCenter",
        deployed: "https://softwarecenter.herokuapp.com/login"
    },
    {
        id: 3,
        title: "Dynamic Cookbook",
        description: "Dynamic-Cookbook is a food resource designed to help users create delicious meals using the ingredients they already have in their pantry.",
        // image: DynamicCookbook,
        repo: "https://github.com/priyarizal/dynamic-cookbook",
        deployed: "https://priyarizal.github.io/dynamic-cookbook/"
    },
];

export default function Portfolio() {
    return (
        <>
            <div>
                <h1>Projects</h1>
                <p>
                    Here are some of the projects I've worked on
                </p>
            </div>
            {/* <ProjectList projects={projects} /> */}
            <div id="projectContainer">
                {projects.map(item => (
                    <Project project={item} />
                ))}
            </div>

        </>
    );
}
