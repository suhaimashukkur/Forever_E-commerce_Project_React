import React from "react";
import border from "../assets/images/Rectangle 3619.png";
import gridimg1 from "../assets/images/Rectangle 3608.png";
import gridimg2 from "../assets/images/Rectangle 3609.png";
import gridimg3 from "../assets/images/Rectangle 3611.png";
import gridimg4 from "../assets/images/Rectangle 3613.png";
import gridimg5 from "../assets/images/Rectangle 3615.png";
import gridimg6 from "../assets/images/Rectangle 3616.png";
import gridimg7 from "../assets/images/Rectangle 3617.png";
import gridimg8 from "../assets/images/Rectangle 3619.png";
import gridimg9 from "../assets/images/Rectangle 3634.png";
import gridimg10 from "../assets/images/Rectangle 3635.png";
import search from "../assets/images/search icon.png";
function Collection({ showSearchbar, setShowSearchbar }) {
  let AllCollections = [
    {
      image: gridimg1,
      title: "Women Round Neck Cotton Top",
      subtitle: "$149",
    },
    {
      image: gridimg2,
      title: "Women Round Neck Cotton Top",
      subtitle: "$149",
    },
    {
      image: gridimg3,
      title: "Women Round Neck Cotton Top",
      subtitle: "$149",
    },
    {
      image: gridimg4,
      title: "Women Round Neck Cotton Top",
      subtitle: "$149",
    },
    {
      image: gridimg5,
      title: "Women Round Neck Cotton Top",
      subtitle: "$149",
    },
    {
      image: gridimg6,
      title: "Women Round Neck Cotton Top",
      subtitle: "$149",
    },
    {
      image: gridimg7,
      title: "Women Round Neck Cotton Top",
      subtitle: "$149",
    },
    {
      image: gridimg8,
      title: "Women Round Neck Cotton Top",
      subtitle: "$149",
    },
    {
      image: gridimg9,
      title: "Women Round Neck Cotton Top",
      subtitle: "$149",
    },
    {
      image: gridimg10,
      title: "Women Round Neck Cotton Top",
      subtitle: "$149",
    },
    {
      image: gridimg9,
      title: "Women Round Neck Cotton Top",
      subtitle: "$149",
    },
    {
      image: gridimg10,
      title: "Women Round Neck Cotton Top",
      subtitle: "$149",
    },
  ];

  return (
    <>
      {showSearchbar && (
        <div>
          <div className="border-t border-[#ADADAD] ml-32 mr-32 mt-6 "></div>
          <div className="mt-6  flex justify-center items-center relative">
            <input
              className="h-12 w-full ml-96 mr-96 border-solid border-2 border-[#707070] rounded-2xl placeholder:text-lg placeholder:pl-4 placeholder:text-[#707070]"
              type="text"
              placeholder="Search"
            />
            <img
              className="absolute pl-[500px] "
              src={search}
              alt="search-icon"
            />
            <div
              className="absolute pl-[650px] cursor-pointer"
              onClick={() => setShowSearchbar(false)}
            >
              X
            </div>
          </div>
        </div>
      )}

      <section>
        <div className="border-t border-[#ADADAD] ml-32 mr-32 mt-6 "></div>
        <div className="flex">
          <div className=" flex flex-col">
            <div className="ml-32 text-2xl leading-7 text-[#343434] mt-28 ">
              Filters
            </div>
            <div className="border-solid border-2 w-[215px] h-40 ml-32 mt-4 ">
              <div className="font-normal text-lg pl-3 leading-5 text-[#212121] mt-2">
                CATEGORIES
              </div>
              <div className="space-y-2 flex flex-col">
                <label>
                  <input
                    type="checkbox"
                    className="h-3 w-3 rectangle mt-5 ml-5 text-sm leading-5 font-light text-[#272727]"
                  />{" "}
                  Men
                </label>
                <label>
                  <input
                    type="checkbox"
                    className="h-3 w-3 rectangle  ml-5 text-sm leading-5 font-light text-[#272727]"
                  />{" "}
                  Women
                </label>
                <label>
                  <input
                    type="checkbox"
                    className="h-3 w-3 rectangle ml-5 text-sm leading-5 font-light text-[#272727]"
                  />{" "}
                  Kids
                </label>
              </div>
            </div>
            <div className="border-solid border-2 w-[215px] h-40 ml-32 mt-6 ">
              <div className="font-normal text-lg pl-3 leading-5 text-[#212121] mt-2">
                TYPE
              </div>
              <div className="space-y-2 flex flex-col">
                <label>
                  <input
                    type="checkbox"
                    className="h-3 w-3 rectangle mt-5 ml-5 text-sm leading-5 font-light text-[#272727]"
                  />{" "}
                  Topwear
                </label>
                <label>
                  <input
                    type="checkbox"
                    className="h-3 w-3 rectangle  ml-5 text-sm leading-5 font-light text-[#272727]"
                  />{" "}
                  Bottomwear
                </label>
                <label>
                  <input
                    type="checkbox"
                    className="h-3 w-3 rectangle ml-5 text-sm leading-5 font-light text-[#272727]"
                  />{" "}
                  Winterwear
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex ml-10">
              <div className="mt-20  font-semibold text-4xl leading-10 text-[#707070] flex">
                All
                <span className=" font-semibold text-4xl leading-10 text-[#171717] pl-2">
                  COLLECTIONS
                </span>
                <img
                  className="h-[2px] w-12 mt-6 ml-2 "
                  src={border}
                  alt="img-border"
                />
              </div>
              <div className="border-solid border-2 w-[232px] h-11 bg-[#C8C8C8] mt-20 ml-[270px] "></div>
            </div>
            <div className="grid grid-cols-4 gap-7 mt-8 ml-10 mr-32">
              {AllCollections.map((i) => (
                <>
                  <div>
                    <img className="" src={i.image} alt="grid-img" />

                    <div className="font-medium leading-4 text-[#494949] text-xs mt-5 mb-2">
                      {i.title}
                    </div>
                    <div className="font-medium leading-4 text-[#494949] text-xs ">
                      {i.subtitle}
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Collection;
