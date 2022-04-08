import { Link } from "react-router-dom"

const About = () => {
    return ( 
        <>
        <h3> About </h3>
        <h4>The Team:</h4>
        <span><p>We are a small group of new software developers, who have recently come to the end of
                 our training programme with QA! This app our first React project we have created, and aim to continue to refine and upgrade it as time goes on.
                 We hope to continue to hone our skills and work on many more challenging and rewarding projects in the future! See more about us and the project below:
                 </p></span><br />
        <ul><h4>Our Roles:</h4></ul>
        <li>Asad Bajwa - Scrum Master/Documentation</li>
        <li>John Fisher - Product Manager/Back-End</li>
        <li>Kieran Hart-Brooke - Database & Back-End</li>
        <li>Euan Black - Front-End</li>
        <li>Vaisala Sivanesakumar - Front-End</li>

        <h4>The Work Process:</h4>
        <span><p>While we all had our dedicated roles, there was a large amount of help, support, and assistance spread between us over all of the above roles -
                 this project has been an excellent learning experience and it was certainly a lot of fun to work together in such a collabarative manner! We 
                 have learned a lot about how to improve our planning and risk assessment, and hope that in future projects we will be able to utilise what we have
                 learned to improve our work!</p></span>
        
        <h4>Get in Touch!:</h4>
        <dl>Emails:</dl>
                    <dt>Asad Bajwa</dt>
                    <dd>Contact: asad@asad.com</dd><br />
                    <dt>John Fisher</dt>
                    <dd>Contact: john@john.com</dd><br />
                    <dt>Kieran Hart-Brooke</dt>
                    <dd>Contact: kieran@kieran.com</dd><br />
                    <dt>Euan Black</dt>
                    <dd>Contact: euan@euan.com</dd><br />
                    <dt>Vaisala Sivanesakumar</dt>
                    <dd>Contact: vaisala@vaisala.com</dd><br />
        <h4>Check out our employer's website!</h4>
        <a href="https://www.qa.com">QA.com</a><br />
        <h4>You can Contact Us here:</h4>
        <Link to="/contactpage"> Contact Page </Link> 
        </>
     );
}
 
export default About;