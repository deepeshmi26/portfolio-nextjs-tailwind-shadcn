import { FC } from "react";
import { Button } from "./ui/Button";
const UserProfile: FC = () => {
  return (
    <>
      <section className="bg-white container">
        <div className=" flex flex-col justify-between w-full border-b-2">
          <div className="flex flex-col  md:flex-row gap-x-4 relative -top-6 flex-wrap">
            <div className="w-fit">
              <img
                src="/profile_pic.jpeg"
                alt="Profile"
                className="w-24 h-24 p-1 shadow-xl  rounded-full "
              />
            </div>

            <div className="flex flex-col md:flex-row gap-x-6 justify-between">
              <div className="flex flex-col justify-end">
                <h1 className="text-2xl font-bold">Dhanendra Verma</h1>
                <p className="text-secondary-foreground">
                  Software development engineer - Backend
                </p>
              </div>
              <div className="flex flex-col justify-end">
                <Button>
                  <a
                    href="https://drive.google.com/uc?export=download&id=19gFfZV-tGB-EQMBANJxIx4WU4iS-QAXZ"
                    download={"Dhanendra Verma CV"}
                  >
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserProfile;
