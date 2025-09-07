import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import user1 from "./../assets/logo/imgi_71_image.webp";
import user2 from "./../assets/logo/imgi_72_image.webp";
import user3 from "./../assets/logo/imgi_73_image.webp";

export default function UserReview() {
  return (
    <section className="h-[100vh]">
      <div className="heading  text-center mt-15 text-[18px] font-medium md:text-[12px] lg:text-[27px] xl-[34px] 2xl:text-[40px]">
        User <span className="text-blue-400">Reviews</span>
      </div>
      <div className="reviewcardrap mt-26 flex justify-center gap-10">
        <div
          className="card text-gray-500 relative  bg-gray-100 max-w-md rounded-4xl hover:bg-[#52A1ff] hover:text-white  p-20 
           hover:scale-109 hover:shadow-2xl hover:transition-transform duration-600 ease-out
      "
        >
          <div className="topcom">
            <ImQuotesLeft className="font-semibold absolute top-10 left-14 text-6xl " />
          </div>
          <div className="para mt-20">
            <p className="text-2xl ">
              The resume builder is incredibly easy to use, with a clean
              interface
              <br />
              and no unnecessary clutter. Perfect for quick edits!
            </p>

            <div className=" user mt-4 flex items-center gap-5">
              <img src={user1} alt="user" className="w-10 h-10 rounded-full" />
              <div>
                <h4 className="font-semibold text-xl text-gray-900">
                  Anushka Nath
                </h4>
                <p className="text-xl">Amazon</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="card text-gray-500 relative bg-gray-100 max-w-md rounded-4xl hover:bg-[#52A1ff] hover:text-white  p-20 
           hover:scale-109 hover:shadow-2xl hover:transition-transform duration-600 ease-out
      "
        >
          <div className="topcom">
            <ImQuotesLeft className="font-semibold absolute top-10 left-14 text-6xl " />
          </div>
          <div className="para mt-20">
            <p className="text-2xl ">
              The resume builder is incredibly easy to use, with a clean
              interface
              <br />
              and no unnecessary clutter. Perfect for quick edits!
            </p>

            <div className=" user mt-4 flex items-center gap-5">
              <img src={user2} alt="user" className="w-10 h-10 rounded-full" />
              <div>
                <h4 className="font-semibold text-xl text-gray-900">
                  Anushka Nath
                </h4>
                <p className="text-xl">Amazon</p>
              </div>
            </div>
          </div>
        </div>


        <div
          className="card text-gray-500 relative  bg-gray-100 max-w-md rounded-4xl hover:bg-[#52A1ff] hover:text-white  p-20 
           hover:scale-109 hover:shadow-2xl hover:transition-transform duration-600 ease-out
      "
        >
          <div className="topcom">
            <ImQuotesLeft className="font-semibold absolute top-10 left-14 text-6xl " />
          </div>
          <div className="para mt-20">
            <p className="text-2xl ">
              The resume builder is incredibly easy to use, with a clean
              interface
              <br />
              and no unnecessary clutter. Perfect for quick edits!
            </p>

            <div className=" user mt-4 flex items-center gap-5">
              <img src={user1} alt="user" className="w-10 h-10 rounded-full" />
              <div>
                <h4 className="font-semibold text-xl text-gray-900">
                  Anushka Nath
                </h4>
                <p className="text-xl">Amazon</p>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
}
