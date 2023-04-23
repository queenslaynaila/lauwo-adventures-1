import Image from 'next/image';
import Head from 'next/head';
import Popup from 'reactjs-popup';
import BookingForm from '@/components/BookingForm';

function Index({ culturalTours }) {
  console.log(culturalTours);
  const tour = culturalTours[0];
  const bookableType = 'Cultural Tours';
  const contentStyle = {
    width: '85%',
    maxHeight: '85%',
    overflow: 'auto',
    margin: 'auto',
  };
  return (
    <>
      <div className="bg-cover bg-center  inset-0 bg-black bg-opacity-100" style={{backgroundImage: `url(/background1.jpg)`}}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          <div className="relative h-80 md:h-auto mt-20">
            <Image
              src="/culture.jpg"
              alt={tour.name}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-2 text-gradient mt-20 ">
              {tour.name.toUpperCase()}
            </h1>
            <p className="text-lg mb-2 text-white ">{tour.location}</p>
            <p className="text-lg mb-4 text-white ">{tour.description}</p>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">
              Inclusions:
            </h2>
            <ul className="list-disc list-inside mb-4 text-white">
              {tour.inclusions
                .toUpperCase()
                .split(', ')
                .map((item, index) => (
                  <li key={index}>{item}</li>
                
                ))}
                 
            </ul>
            
          </div>
         
        </div>
      

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          <div className="md:col-span-2">
          <hr className="w-full border border-primary m-3 " />
            <h2 className="text-2xl font-bold mb-2 text-gray-900">
              Itineraries:
            </h2>
            <ul className="list-decimal list-inside mb-4 text-white bg-y">
              {tour.itinerary}
            </ul>
           
            <h2 className="text-2xl font-bold  mt-2 mb-2 text-gray-900">
              Exclusions:
            </h2>
          <ul className="list-decimal list-inside mb-4 text-white">
            {tour.exclusions
              .toUpperCase()
              .split(', ')
              .map((item, index) => (
                <li key={index}>{item}</li>
              ))}
          </ul>
          <h2 className="text-2xl font-bold mb-2 text-gray-900">
            Price: ${tour.price}
          </h2>
        </div>

        <div className="flex items-end justify-end">
        <div className="flex  items-center justify-center">
              <Popup
                trigger={
                  <button className="bg-black text-white px-8 rounded-md py-4 ml-auto mb-16 hover:border-white hover:border hover:text-white hover:bg-transparent">
                    {' '}
                    Book Now
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
                      adventure={culturalTours}
                      bookableType={bookableType}
                    />
                  </div>
                )}
              </Popup>
         
        </div>
        </div>
      </div> 
    
    </div>
    </>
  );
}

export default Index;

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/cultural_tours');
  const culturalTours = await res.json();
  return {
    props: { culturalTours },
  };
}
