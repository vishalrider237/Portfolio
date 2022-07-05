import "./intro.css";
import Me from "../../img/me1.png";
const Intro = () =>{
    return (<div className="i">
          <div className="i-left">
          <div className="i-left-wrapper">
              <h2 className="i-intro">Hello My Name is</h2>
              <h1 className="i-name">Vishal Pandey</h1>
              <div className="i-title">
                  <div className="i-title-wrapper">
                      <div className="i-title-item">Web Developer</div>
                      <div className="i-title-item">Programmer</div>
                      <div className="i-title-item">Problem Solver</div>
                  </div>
              </div>
              <p className="i-desc">
                  I have worked on varoius projects like -- <br/>
               1- Online_pharamacy database: :First I have designed ER diagram for my database,and then converted this ER model
                  to relational model ,implemented this relational into MYSQL , used python language 
                  for database connectivity and did CRUD operations on each and table using python.
                  Tools - MYSQL Commandline prompt ,Pycharm.
                    <br/>
               2- Login_Register_App : : This is login and register app in which user register with their name,e-mail,password and
                   and re-enter password and after registering ,user can login with their  same e-mail and password.. alos deployed 
                   frontend on netflify and backend on heroku.
                      Technology used-<br/>
                         Frontend= HTML , CSS 
                         library- ReactJs , NodeJs
                          framework- ExpressJs
                          Database=MongoDb          
                        <br/>
                3- Portfolio : : I have created this amazing website and added various features like dark moode
                   button and added my all amazing achievments.
                   Technology used -HTML,CSS ,ReactJs  used Emailjs online server for backend
                   and deployed this project in heroko server.
                   Tools - VScode   

                  
              </p>
          </div>
          <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="black"
          className="i-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              stroke-width="2.9895"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg>

          </div>
          <div className="i-right">
          <div className="i-bg"></div>
              <img src={Me} alt="" className="i-img"></img>
          </div>
    </div>
    );

}
export default Intro;