import AboutUs from "./About-Us/AboutUs";
import ContactUs from "./Contact-Us/ContactUs";
import OurServices from "./Our-Services/OurServices";
import OurSkill from "./Our-Skills/OurSkill";
import Remark from "./Remark/Remark";
import OurTeam from "./The-Team/OurTeam";

function TheBody() {
  return (
    <div>
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
        <My
        <p>...</p>
        <ContactUs/>
      </div>
    </div>
  );
}

export default TheBody
