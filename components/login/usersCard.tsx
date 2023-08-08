import Image from "next/image";
import React from "react";

const Users: { name: string; photo: string; testimony: string }[] = [
  {
    photo: "https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg",
    testimony: "C'est incroyablement interressant !",
    name: "Divine",
  },
  {
    photo: "https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg",
    testimony: "Je suis trop ravi du service !",
    name: "France",
  },
];

const UsersCard = () => {
  return (
    <div>
      {Users.map((elt, index) => {
        return (
          <div key={index}>
            <Image src={elt.photo} height={100} width={100} alt={"Images"} />
          </div>
        );
      })}
    </div>
  );
};

export default UsersCard
