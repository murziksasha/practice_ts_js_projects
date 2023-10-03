import {Component, useEffect, useState, useCallback, useMemo} from 'react';
import './Train.scss';
import { FormTrain } from './FormTrain/FormTrain';


const countTotal = (num: number): number => {
  console.log('counting...');
  return num + 10;
}

const Train = () => {

  const [slide, setSlide] = useState(0);
  const [autoplay, setautoplay] = useState(false);
  const [courseCurrent, setCourseCurrent] = useState([]);

  const getSomeImages = useCallback(() => {
    console.log('work function getSomeImg');
    return ( [
      'https://images.freeimages.com/images/large-previews/e0f/fashion-photography-1432469.jpg',

      'https://images.freeimages.com/images/large-previews/7b7/woman-1431543.jpg',

      'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg'
    ])
  }, [slide]);


  useEffect(()=>{
    document.title = `Slide ${slide} auto: ${autoplay}`;
  }, [slide]); 

  useEffect(() => {
    fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
      .then((res) => res.json())
      .then((data) => {
        setCourseCurrent(data); // Update the state with fetched data
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);


  const changeSlide = (slideNum: number) => {
    setSlide((slide) => slide + slideNum)
  }

  const toggleAutoplay = () => setautoplay((autoplay) => !autoplay);

  const total = useMemo(()=> countTotal(slide), [slide]);

  const style = useMemo(() => ({
    color: slide > 4 ? 'red' : 'black',
  }), [slide])

  useEffect(() => {
    console.log('styles');
  }, [style]);

    return (
        <div className="slider w-50 m-auto">
          <FormTrain/>

            <div>
              <h1>Course today:</h1>
              {courseCurrent.map((item: any) => {
                if (item.r030 === 840 || item.r030 === 978 || item.r030 === 643 || item.r030 === 933) {
                  return (
                    <div key={item.r030}>
                      <h3>
                        {item.txt} = {item.rate}
                      </h3>
                    </div>
                  );
                  }
                  return null; // You can return null for items you want to skip rendering
                })}
              
            </div>
            <br /><br /><br />


            <ImageGallery getSomeImages = {getSomeImages}/>

            <div className="text-center mt-5">Active slide {slide} <br/> {autoplay ? 'auto' : null}</div>
            <div style={style} className="text-center mt-5">Total slides {total}</div>
            <div className="buttons mt-3">
                <button 
                    className="btn btn-primary me-2"
                    onClick={() => changeSlide(-1)}>-1</button>
                <button 
                    className="btn btn-primary me-2"
                    onClick={() => changeSlide(1)}>+1</button>
                <button 
                    className="btn btn-primary me-2"
                    onClick={toggleAutoplay}>toggle autoplay</button>
            </div>
        </div>
    )
}

interface ImageProps {
  getSomeImages: () => string[];
}

const ImageGallery: React.FC<ImageProps> = ({ getSomeImages }) => {
  const [images, setImages] = useState<string[]>([]);
  useEffect(() => {
    setImages(getSomeImages());
  }, [getSomeImages]);
  return (
    <div>
      {images.map((url, index) => (
        <img key={index} src={url} alt={`Image ${index}`} />
      ))}
    </div>
  );
};
  

export default Train;
