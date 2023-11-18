import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import AwardItem from "./awardItem";
import Chartered from "../images/award-logos/cert-chartered-engineer.png";
import ICE from "../images/award-logos/cert-ice.png";

const Awards = () => {
  const data = useStaticQuery(graphql`
    {
      allAwardsJson {
        nodes {
          id
          title
          year
          logo {
            publicURL
          }
        }
      }
    }
  `);
  return (
    <div className="container mx-auto">
      <div className="flex flex-row md:items-center items-start self-auto gap-5 py-6">
        <div className="flex flex-row items-center self-auto md:gap-5 gap-2">
          <p className="font-display text-display-xs opacity-50 vertical-rl -rotate-180">
            Certifications
          </p>
          <hr className="md:w-16 w-6 text-white opacity-50"></hr>
        </div>
        <div className="lg:flex lg:flex-row grid md:grid-cols-2 grid-cols-1 grow">
          <div className="flex flex-col items-center justify-center grow">
            <img
              src={Chartered}
              width={360}
              height={200}
              alt={"chartered engineer"}
            />
            <p className="text-body-sm font-normal tracking-wider pt-2">
              {"Chartered member of The Institution of Civil Engineers"}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center grow">
            <img
              src={ICE}
              width={360}
              height={200}
              alt={"institution of civil engineers"}
            />
            <p className="text-body-sm font-normal tracking-wider pt-2">
              {"Registered with the Engineering Council"}
            </p>
          </div>
        </div>
        {/* {data.allAwardsJson.nodes.map((node) => (
            <AwardItem
              key={node.id}
              logo={node.logo.publicURL}
              title={node.title}
              year={node.year}
            />
          ))} */}
        {/* </div> */}
      </div>
    </div>
  );
};
export default Awards;
