import Summary from "./Summary";
import db from './index.js';
import { useCallback, useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";

function About({profile, resume}){

    const title = 'text-loose font-bold text-lg text-gray-700'
    const footer = 'text-loose font-normal text-xs text-gray-400'
    const body = 'text-loose font-normal text-base py-1 mb-2 text-gray-600'

    const [state, setState] = useState([]);
     
         
   const getData=useCallback(async () => {
       const querySnapshot= await getDocs(collection(db, "about"));
       setState(querySnapshot.docs.map(doc => doc.data()))
   },[])
   
   useEffect(() => {
       getData()
   },[getData])

    return <>
        <div className="About">
            <Summary title="Paul Isac" snippet="I'm a UX/UI designer with five years' experience." />
        </div>
        <div className="max-w-screen-sm m-auto my-28 About px-4">
            <div className=" bg-gray-100 " onContextMenu={(e)=>{e.preventDefault()}} ><img className="border-white " alt="" src= {state.map((data) => (data.profile))} ></img></div>
            <p className="leading-relaxed text-base pt-8 pb-1">Hello again! I am Paul Isac, a UI/UX Designer from India. </p>
            <p className="leading-relaxed text-base py-1">
            Passionate about solving problems and creating meaningful experiences through research, interaction design, visual design and iteration.
        </p><p className="leading-relaxed text-base py-1 ">
        I have been working with startups for around 5 years, designing multiple web & mobile experiences. Currently, I work at Amnet Digital.
        </p><p className="leading-relaxed text-base py-1 ">
        Besides my professional design work, I enjoy reading, learning, playing drums, illustrating and developing new frameworks.
        </p><p className="leading-relaxed text-base pt-1 pb-8 ">
            If you need to get in touch or learn more about what I do, just drop in an email.</p>
            <div className=" grid md:grid-cols-4 gap-x-2">
                <div className="col-span-1 font-bold text-2xl text-gray-700 sm:pt-2">Experience</div>
                <div className="col-span-3 pt-2 ">
                    <h1 className={title}>UX Designer, Amnet Digital</h1>
                    <h3 className={footer}>MAR 2021 - PRESENT / HYDERABAD</h3>
                    <p className={body}>The project I worked on was a reporting portal. It involved everything from research to creating user-friendly interfaces. It was a collaborative effort. </p>

                    <h1 className={title}>UX/UI Designer, Kal Informatics</h1>
                    <h3 className={footer}>OCT 2017 - MAR 2021 / VIJAYAWADA</h3>
                    <p className={body}>I've worked on multiple web projects. From researching to creating user-friendly interfaces and engaging experiences. I worked closely with developers.</p>

                    {/*    
                    <h1 className={title}>Product Designer, Takshashila</h1>
                    <h3 className={footer}>MAY 2020 - SEP 2020 / FREELANCE</h3>
                    <p className={body}>I’m the only product designer, Building from scratch to the overall product. Research,iIdeation, brainstorming, wireframing, prototyping & designing.</p>
                    */}

                    <h1 className={title}>UI Designer, Srushti Innovative Technologies </h1>
                    <h3 className={footer}>JUN 2016 - OCT 2017 / VIJAYAWADA</h3>
                    <p className={body}>My work has primarily focused on responsive design, interactions, interfaces, motion graphics, and branding.</p>

                </div>
                <div className="col-span-1 font-bold text-2xl sm:pt-2 text-gray-700 pt-6 ">Education</div>
                <div className="col-span-3 pt-2">
                    <h1 className={title}>Bachelors in Animation, Andhra Loyola</h1>
                    <h3 className={footer}>MAR 2012 - APR 2015 / VIJAYAWADA</h3>
                    <p className={body}>Designed & contributed to various accessibility, interaction, user interface, and art-related projects.</p>

                    {/* 
                    <h1 className={title}>Interaction Design Foundation, UX</h1>
                    <h3 className={footer}>DEC 2019 - FEB 2020 / ONLINE</h3>
                    <p className={body}>Practiced User Centred Design Research, UX Methodologies, Ideation & Conceptualisation, and End-to-End Product Development along with Interface designing.</p>

                    <h1 className={title}>Gurukul RUX, UX </h1>
                    <h3 className={footer}>DEC 2020 - FEB 2021 / ONLINE</h3>
                    <p className={body}>Practiced User Centred Design Research, UX Methodologies, Ideation & Conceptualisation, and End-to-End Product Development along with Interface designing.</p>
                     */}

                    <h1 className={title}>Google UX Design Specialization, Coursera</h1>
                    <h3 className={footer}>MAY 2021 - NOV 2021 / ONLINE</h3>
                    <p className={body}>Empathizing with users, Defining user pain points, Ideating design solutions, Creating wireframes and prototypes, Developing mockups,Designing in Figma and Adobe XD, Conducting interviews and usability studies and Considering accessibility at every point in the design process.</p>

                </div>
                
            </div>
            <div className="my-12 resume m-auto flex justify-center"><a className=" text-center py-2 px-8  border-2 border-slate-200 w-max text-gray-800 rounded"  href={state.map((data) => (data.resume))}  target="_blank" rel="noopener noreferrer" type="application/pdf" download="Paul_Resume">Download Resume</a></div>
        </div>
    </>
}

export default About