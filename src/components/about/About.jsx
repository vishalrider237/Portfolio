import "./About.css";
import Award from "../../img/award.jpeg";
const About =()=>{
    return <div className="a">
         <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src="data:image/jpeg;base64,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" 
                alt="" 
                className="a-img">
                </img>
            </div>
            
         </div>
         <div className="a-right">
         <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
        I am dedicated ,hard worker with strong problem solving skill.
        I am highly interested in software development. I am pursuing bachelor degree from Nit Warangal currently in final year. 
        I am technology enthusiastic. I am always eager to learn new technologies .I did my internship in data science and Buisiness Analyst at <b>The Sparks Foundation</b> ,
        I have following skills like Java(Proefficent), Python for data science (Basics), Machine Learning(Basics), Oops, Linux, DBMS and having a strong fundamental at DS and Algo
        (Solved more than 800+ Problems on both GFG and Leetcode) . 
        <div>
            <a href=" https://auth.geeksforgeeks.org/user/vishalrider98/practice " className="code">My GFG Account</a>
            <a href="https://leetcode.com/pandey_931922/" className="code">My Leetcode Account</a>
        </div>
        </p>
         <div className="a-award">
             <img src={Award} alt="" className="a-award-img"></img>
             <div className="a-award-text">
             <h4 className="a-award-title">NPTEL Certification Exam</h4>
            <p className="a-award-desc">
               I have scored 90% marks and earn golden badge in NPTEL Certification exam(Programming in Java) which are conducted by IIT Kharagpur and
               came in top 5% among 31000 candidates.
            </p>
             </div>
         </div>

         </div>
    </div>
}
export default About;