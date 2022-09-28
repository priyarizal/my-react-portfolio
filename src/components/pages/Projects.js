import React from 'react';
import Fade from 'react-reveal/Fade';


function Projects() {

    return (
        <>
            <section className="portfoliobg">

                <h2 className="portfolio" id="portfolio" style={{ fontSize: "25px" }}>My Projects</h2>

                <Fade left>
                    <div className="row">

                        <div className="card col-lg-4 col-md-6 col-sm-12" >
                            <img id="picture" src={process.env.PUBLIC_URL + "/assets/images/Notetaker.png"} className="card-img-top" alt="note-taker-screenshot" />
                            <div className="card-body">
                                <h5 className="card-title">Note Taker</h5>
                                <p className="card-text">An app that takes notes for you and your busy schedule.</p>
                                <p className="card-text">Technologies used:</p>
                                <div className="button-container">
                                    <a role="button" href="https://github.com/Cordovas-cmd/note-taker" target="__blank" className="projbtn">Repository</a>
                                    <a role="button" href="https://calm-eyrie-82454.herokuapp.com/" target="__blank" className="projbtn">Webpage</a>
                                </div>
                            </div>
                        </div>



                        <div className="card col-lg-4 col-md-6 col-sm-12"  >
                            <img id="picture" src={process.env.PUBLIC_URL + "/assets/images/lorecraft.png"} className="card-img-top" alt="lorecraft-screenshot" />
                            <div className="card-body">
                                <h5 className="card-title">Lorecraft</h5>
                                <p className="card-text">A WIP app that allows you to create an account, post, and view lore of some of your favorite games.</p>
                                <p className="card-text">Technologies used:</p>
                                <div className="button-container">
                                    <a role="button" href="https://github.com/madison-vega/lore-craft" target="__blank" className="projbtn">Repository</a>
                                    <a role="button" href="https://lore-craft.herokuapp.com/" target="__blank" className="projbtn">Webpage</a>
                                </div>
                            </div>
                        </div>


                        <div className="card col-lg-4 col-md-6 col-sm-12" >
                            <img id="picture" src={process.env.PUBLIC_URL + "/assets/images/BudgetTracker.png"} className="card-img-top" alt="buget-tracker-screenshot" />
                            <div className="card-body">
                                <h5 className="card-title">Budget tracker</h5>
                                <p className="card-text">A digital budget tracker to easily keep track of funds and expenses.</p>
                                <p className="card-text">Technologies used:</p>
                                <div className='button-container'>
                                    <a role="button" href="https://github.com/Cordovas-cmd/Online_offlineBudget_Tracker" target="__blank" className="projbtn">Repository</a>
                                    <a role="button" href="https://stormy-island-22575.herokuapp.com/" target="__blank" className="projbtn">Webpage</a>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="row">
                        <div className="card col-lg-4 col-md-6 col-sm-12">
                            <img id="picture" src={process.env.PUBLIC_URL + "/assets/images/workouttracker.png"} className="card-img-top" alt="wrkout-tracker-screenshot" />
                            <div className="card-body">
                                <h5 className="card-title">workout tracker</h5>
                                <p className="card-text">Tracks your workout routine so you can keep track and reach your goals :)</p>
                                <p className="card-text">Technologies used:</p>
                                <div className="button-container">
                                    <a role="button" href="https://github.com/Cordovas-cmd/NoSQL_WorkoutTracker" target="__blank" className="projbtn  ">Repository</a>
                                    <a href="https://intense-bayou-20743.herokuapp.com/?id=60ad2f4deef73700157507b5" target="__blank" className="projbtn  ">Webpage</a>
                                </div>

                            </div>
                        </div>





                        <div className="card col-lg-4 col-md-6 col-sm-12">
                            <img src={process.env.PUBLIC_URL + "/assets/images/WorkdayScheduler.png"} className="card-img-top" alt="workday-scheduler-screenshot" />
                            <div className="card-body">
                                <h5 className="card-title">Work Day Scheduler</h5>
                                <p className="card-text">Creates a schedule for your busy workday.</p>
                                <p className="card-text">Technologies used:</p>
                                <div className="button-container">
                                    <a role="button" href="github goes here" target="__blank" className="projbtn  ">Repository</a>
                                    <a href="deployement goes here" target="__blank" className="projbtn  ">Webpage</a>

                                </div>

                            </div>
                        </div>

                        <div className="card col-lg-4 col-md-6 col-sm-12">
                            <img id="picture" src={process.env.PUBLIC_URL + "/assets/images/WeatherDashboard.png"} className="card-img-top" alt="weather dashboard app" />
                            <div className="card-body">
                                <h5 className="card-title">Weather Dashboard</h5>
                                <p className="card-text">Geolaction based Weather app that let's users search and display current weeks forcast.</p>
                                <p className="card-text">Technologies used:</p>
                                <div className="button-container">
                                    <a role="button" href="https://github.com/Cordovas-cmd/Weather-dashboard" target="__blank" className="projbtn  ">Repository</a>
                                    <a href="https://cordovas-cmd.github.io/Weather-dashboard/" target="__blank" className="projbtn  ">Webpage</a>
                                </div>

                            </div>
                        </div>
                    </div>

                </Fade>
            </section>
        </>

    )
}

export default Projects;