import Image from 'next/image';
import { generateSlug } from '@/utils/generateSlug';
import { GiMeal } from 'react-icons/gi';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import BookingForm from '@/components/BookingForm';
import { useRouter } from 'next/router';

const Safari = ({ safaris }) => {
  const bookableType = 'Safari';
  const contentStyle = {
    width: '85%',
    maxHeight: '85%',
    overflow: 'auto',
    margin: 'auto',
  };

  const router = useRouter();
  const path = router.query.safari;
  const safari = safaris.find((safari) => generateSlug(safari.name) === path);

  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/lauwosafari.jpg)' }}
    >
      <div className="inset bg-black/80">
        <div className="border-l-2 border-black h-full text-white">
          <h3 className="lg:text-2xl xl:text-3xl 3xl:text-4xl xl font-poly capitalize text-center py-32">
            {safari.name} experience
          </h3>
          <div className="flex flex-col items-center px-8 sm:-mt-8 -mt-24">
            {safari.safari_itineries.map((itinerary, index) => (
              <div
                key={itinerary.id}
                className={`flex relative flex-col md:flex-row ${
                  index % 2 === 0 ? '' : 'md:flex-row-reverse'
                } md:items-center mb-28`}
              >
                <div
                  className={`md:w-1/2
            ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}
            `}
                >
                  <Image
                    src={itinerary.image_url}
                    alt={itinerary.title}
                    width={600}
                    height={400}
                    className="rounded-lg  h-96 object-cover object-center"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-xl font-bold mb-2 mt-4 text-primary font-poly capitalize">
                    Day {itinerary.day}: {itinerary.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className=" w-1/6 mt-6 mb-6 border border-dashed border-white"></div>
                    <p className="text-sm font-semibold">
                      Distance: {itinerary.distance} kms
                    </p>
                  </div>
                  <p className="mb-4 text-sm leading-6">
                    {itinerary.description}
                  </p>
                  <p className="mb-4 flex items-center gap-3 text-sm  mt-4">
                    <GiMeal className="text-xl" />
                    {itinerary.mealplan}
                  </p>
                </div>
                {index !== safari.safari_itineries.length - 1 && (
                  <hr className="w-full border border-primary absolute -bottom-8" />
                )}
              </div>
            ))}
            <div className="flex  items-center justify-center">
              <Popup
                trigger={
                  <button className="bg-black text-white px-8 rounded-md py-4 ml-auto mb-16 hover:border-white hover:border hover:text-white hover:bg-transparent">
                    {' '}
                    Book Safari
                  </button>
                }
                modal
                nested
                closeOnDocumentClick
                contentStyle={contentStyle}
              >
                {(close) => (
                  <div className="modal">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                    <BookingForm
                      adventure={safari}
                      bookableType={bookableType}
                    />
                  </div>
                )}
              </Popup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Safari;

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/safaris');
  const safaris = await res.json();

  return {
    props: {
      safaris,
    },
  };
}
