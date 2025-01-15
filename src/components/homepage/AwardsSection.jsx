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
    <div className="lg:flex-row mx-2 xs:mx-4 sm:mx-8 md:mx-12 lg:mx-16 my-16 sm:my-24 lg:my-40 space-y-4">
      <p>Awards</p>
      <p className="text-2xl xs:text-3xl sm:text-4xl font-semibold lg:w-2/3 xl:w-1/2">
        These awards represent milestones in my journey as an art director and
        digital designer, celebrating creativity and innovation.
      </p>
      <div className="lg:w-2/3 xl:w-1/2">
        {awards.map((award, i) => (
          <div key={i} className="py-4 border-b-[1px]">
            <h4 className="text-xl font-medium">{award.title}</h4>
            <div className="flex justify-between text-sm">
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
