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
                      <div className="i-title-item">Problem Solver</div>
                  </div>
              </div>
              <p className="i-desc">
                 <h2 className="h">My Projects</h2>
               <h4 className="h">1- Gym Fitness Website</h4>This website is fully responsive and real time with cool user interface.<br/>
                      Technology used-
                          HTML , CSS , ReactJs,          
                        <br/>
                        <div>
                          <a href="https://fitclub-af9.pages.dev/" className="code">Live Site</a>
                  </div>
                <h4 className="h">2- Student Management System</h4>This website is fully responsive,based on CRUD Operation using Nodejs.<br/>
                   Tech used- EJS, CSS, JavaScript, NodeJs, ExpressJs, MongoDb  <br/>
                   <div>
                     <a href="https://github.com/vishalrider237/Student-Managment-System" className="code">Check Code</a>
                   </div>
                  <h4 className="h">3- Ecommerce Shoes Store Website</h4>This website is fully responsive and real time,in which user can buy their favourite shoes with differrent colors,
                  and size.<br/>
                   Technology Used-
                   HTML ,  CSS  , JavaScript, Nodejs, ExpressJs, MongoDb
                <div>
                  <a href="https://ecommerce-shoes-store-app.herokuapp.com/ " className="code" >Live Site</a>
                </div> 
                <h4 className="h">4- Online Pharamacy Database</h4>First, I designed ER diagram for the database, then converted this ER model
                  to a relational model, implemented this relational model into MYSQL, used python language 
                  for database connectivity, and did CRUD operations on every table using python.
                   also visualized the data of the database using tableau. <br/>
                  Tools - MYSQL Commandline client, Pycharm, Tableau <br/>
                   <div>
                     <a href="https://github.com/vishalrider237/online_pharamacy_Database.git" className="code">Check Code</a>
                   </div> 
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
