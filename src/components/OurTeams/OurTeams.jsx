import DefaultHero from "../DefaultHero/DefaultHero";

import OurTeamBgImg from "../../img/bg/our_teamBg.png";
import OurTeam from "../OurTeam/OurTeam";

import styles from "../../styles/OurTeams.module.css"
import Subscribe from "../Subscribe/Subscribe";
const OurTeams = () => {
  return (
    <>
      <DefaultHero title={"Our Team"} mainBg={OurTeamBgImg} />
      <section className={styles.team_section}>
        <p className="subtitle">Team</p>
        <h2>Our Organic Experts</h2>
        <p>
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>
        <OurTeam/>
        <Subscribe/>
      </section>
    </>
  );
};

export default OurTeams;
