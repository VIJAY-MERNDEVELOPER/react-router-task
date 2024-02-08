import Card from "./Card";

/* eslint-disable react/prop-types */
function Career({ cardDetails }) {
  return (
    <div className="container-sm mt-4 ">
      <div className="row gap-4 justify-content-center">
        {cardDetails.map((details, idx) => {
          return (
            details.category == "career" && (
              <Card details={details} key={idx}></Card>
            )
          );
        })}
      </div>
    </div>
  );
}

export default Career;
