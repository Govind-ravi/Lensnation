import React from "react";

const awards = [
  {
    title: "Honorable Mention",
    issuer: "DesignFlow Magazine",
    year: "2020",
  },
  {
    title: "Honorable Mention",
    issuer: "DesignFlow Magazine",
    year: "2020",
  },
  {
    title: "Honorable Mention",
    issuer: "DesignFlow Magazine",
    year: "2020",
  },
  {
    title: "Honorable Mention",
    issuer: "DesignFlow Magazine",
    year: "2020",
  },
];

function AwardsSection() {
  return (
    <div className="lg:flex-row mx-4 md:mx-8 lg:mx-10 my-16 sm:my-24 lg:my-40 space-y-4">
      <p className="text-graySecondary font-semibold">Awards</p>
      <p className="text-2xl xs:text-2xl md:text-3xl xl:text-4xl font-semibold lg:w-2/3 xl:w-1/2">
        These awards represent milestones in my journey as an art director and
        digital designer, celebrating creativity and innovation.
      </p>
      <div className="xl:w-2/3">
        {awards.map((award, i) => (
          <div key={i} className="py-4 border-b-[1px] border-b-[#6c6b6b]">
            <h4 className="text-xl font-semibold">{award.title}</h4>
            <div className="flex justify-between text-graySecondary font-semibold">
              <p>{award.issuer}</p>
              <p>{award.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AwardsSection;
