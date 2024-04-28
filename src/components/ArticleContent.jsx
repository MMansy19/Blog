import articleImage from "../assets/Image.png";
import adSpace from "../assets/o-ads-space.png";
import user from "../assets/user.svg";
import { getRandomImage } from "../../utils";

function ArticleContent({ article }) {
  return (
    <div className="flex flex-col gap-8">
      <div className="relative flex items-center mb-8 gap-x-4 text-[#97989F] leading-6 font-medium">
        <div className="relative flex items-center gap-x-4">
          <img
            src={user}
            alt=""
            className="w-10 h-10 rounded-full bg-gray-50"
          />
          <p className="text-sm leading-6 ">
            <a href={article.url} target="_blank">
              <span className="absolute inset-0" />
              {article?.author ? article?.author : article?.source?.name}
            </a>
          </p>
        </div>
        <div className="">
          {new Date(article.publishedAt).toLocaleDateString()}
        </div>
      </div>
      <div className=" h-full mb-8">
        <img
          src={article.urlToImage}
          alt="article image"
          className="object-cover w-full h-full rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-2.5">
        {/* <h3 className="text-2xl font-semibold text-[#181A2A] mb-4">
            {article.description}
          </p> */}
        <p className="text-[#3B3C4A] text-xl">
          Traveling is an enriching experience that opens up new horizons,
          exposes us to different cultures, and creates memories that last a
          lifetime. However, traveling can also be stressful and overwhelming,
          especially if you don&#39;t plan and prepare adequately. In this blog
          article, we&#39;ll explore tips and tricks for a memorable journey and
          how to make the most of your travels.
        </p>
        <p className="text-[#3B3C4A] text-xl mt-4">
          One of the most rewarding aspects of traveling is immersing yourself
          in the local culture and customs. This includes trying local cuisine,
          attending cultural events and festivals, and interacting with locals.
          Learning a few phrases in the local language can also go a long way in
          making connections and showing respect.
        </p>
      </div>
      <div className="flex flex-col gap-2.5">
        <h3 className="text-2xl font-semibold text-[#181A2A] mb-4">
          Research Your Destination
        </h3>
        <p className="text-[#3B3C4A] text-xl">
          Before embarking on your journey, take the time to research your
          destination. This includes understanding the local culture, customs,
          and laws, as well as identifying top attractions, restaurants, and
          accommodations. Doing so will help you navigate your destination with
          confidence and avoid any cultural faux pas.
        </p>
        <p className="text-[#3B3C4A] text-xl mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. In
          hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum
          faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod
          elementum nisi quis eleifend quam adipiscing vitae. Viverra adipiscing
          at in tellus.
        </p>
      </div>
      <div className="flex flex-col gap-2.5">
        <h3 className="text-2xl font-semibold text-[#181A2A] mb-4">
          Plan Your Itinerary
        </h3>
        <p className="text-[#3B3C4A] text-xl">
          While it&#39;s essential to leave room for spontaneity and unexpected
          adventures, having a rough itinerary can help you make the most of
          your time and budget. Identify the must-see sights and experiences and
          prioritize them according to your interests and preferences. This will
          help you avoid over scheduling and ensure that you have time to relax
          and enjoy your journey.
        </p>
        <p className="text-[#3B3C4A] text-xl mt-4">
          Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis
          lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget
          felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.
        </p>
      </div>
      <quote className=" text-2xl italic p-8 bg-[#F6F6F7] border-l-4 border-[#E8E8EA] rounded-xl">
        “ Traveling can expose you to new environments and potential health
        risks, so it&#39;s crucial to take precautions to stay safe and healthy.
        ”
      </quote>
      <img src={articleImage} alt="articleImage" className="object-cover" />
      <img src={adSpace} alt="adSpace" className="object-cover px-6" />
      <div className="flex flex-col gap-2.5">
        <h3 className="text-2xl font-semibold text-[#181A2A] mb-4">
          Pack Lightly and Smartly
        </h3>
        <p className="text-[#3B3C4A] text-xl">
          Packing can be a daunting task, but with some careful planning and
          smart choices, you can pack light and efficiently. Start by making a
          packing list and sticking to it, focusing on versatile and comfortable
          clothing that can be mixed and matched. Invest in quality luggage and
          packing organizers to maximize space and minimize wrinkles.
        </p>
      </div>
      <div className="flex flex-col gap-2.5">
        <h3 className="text-2xl font-semibold text-[#181A2A] mb-4">
          Stay Safe and Healthy
        </h3>
        <p className="text-[#3B3C4A] text-xl">
          Traveling can expose you to new environments and potential health
          risks, so it&#39;s crucial to take precautions to stay safe and
          healthy. This includes researching any required vaccinations or
          medications, staying hydrated, washing your hands frequently, and
          using sunscreen and insect repellent. It&#39;s also essential to keep
          your valuables safe and secure and to be aware of your surroundings at
          all times.
        </p>
      </div>
      <div className="flex flex-col gap-2.5">
        <h3 className="text-2xl font-semibold text-[#181A2A] mb-4">
          Immerse Yourself in the Local Culture{" "}
        </h3>
        <p className="text-[#3B3C4A] text-xl">
          One of the most rewarding aspects of traveling is immersing yourself
          in the local culture and customs. This includes trying local cuisine,
          attending cultural events and festivals, and interacting with locals.
          Learning a few phrases in the local language can also go a long way in
          making connections and showing respect.
        </p>
      </div>
      <div className="flex flex-col gap-2.5">
        <h3 className="text-2xl font-semibold text-[#181A2A] mb-4">
          Capture Memories{" "}
        </h3>
        <p className="text-[#3B3C4A] text-xl">
          Finally, don&#39;t forget to capture memories of your journey. Whether
          it&#39;s through photographs, journalism, or souvenirs, preserving the
          moments and experiences of your travels can bring joy and nostalgia
          for years to come. However, it&#39;s also essential to be present in
          the moment and not let technology distract you from the beauty of your
          surroundings.
        </p>
      </div>
      <div className="flex flex-col gap-2.5">
        <h3 className="text-2xl font-semibold text-[#181A2A] mb-4">
          Capture Memories{" "}
        </h3>
        <p className="text-[#3B3C4A] text-xl">
          Finally, don&#39;t forget to capture memories of your journey. Whether
          it&#39;s through photographs, journalism, or souvenirs, preserving the
          moments and experiences of your travels can bring joy and nostalgia
          for years to come. However, it&#39;s also essential to be present in
          the moment and not let technology distract you from the beauty of your
          surroundings.
        </p>
      </div>
      <div className="flex flex-col gap-2.5">
        <h3 className="text-2xl font-semibold text-[#181A2A] mb-4">
          Conclusion:
        </h3>
        <p className="text-[#3B3C4A] text-xl">
          Traveling is an art form that requires a blend of planning,
          preparation, and spontaneity. By following these tips and tricks, you
          can make the most of your journey and create memories that last a
          lifetime. So pack your bags, embrace the adventure, and enjoy the
          ride.
        </p>
      </div>
    </div>
  );
}

export default ArticleContent;
