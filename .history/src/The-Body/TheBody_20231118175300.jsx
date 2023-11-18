import AboutUs from "./About-Us/AboutUs";
import ContactUs from "./Contact-Us/ContactUs";
import MyPortfolio from "./My-Portfolio/MyPortfolio";
import OurServices from "./Our-Services/OurServices";
import OurSkill from "./Our-Skills/OurSkill";
import Remark from "./Remark/Remark";
import OurTeam from "./The-Team/OurTeam";

function TheBody() {
  return (
    <>
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-offset="0"
        className="scrollspy-example"
        tabIndex="0"
      >
        <AboutUs/>
        <OurTeam/>
        <OurSkill/>
        <Remark/>
        <OurServices/>
        <MyPortfolio/>
        <ContactUs/>
      </div>
    </div>
  );
}

export default TheBody
