import React, { useState, useEffect } from 'react';

const PhotoGallery = () => {

  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    setLoading(true);

    // Simulate fetching images from a server.
    // Replace this with your image loading logic.
    setTimeout(() => {
      const newImages = [];

      for (let i = 1; i <= 10; i++) {
        newImages.push(`image${i}.jpg`);
      }

      setImages([...images, ...newImages]);
      setPage(page + 1);
      setLoading(false);
    }, 1000);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      fetchImages();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [images]);


  return (
    <div>
       <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default PhotoGallery;

// he response from the server is an image file, not JSON formatted text. You'll want to read the response content as a Blob ("binary large object"), with Response.blob().
// In this function we fetch a blob

// async function fetchBlob(url) {
//   const response = await fetch(url);

//   // Here is the significant part 
//   // reading the stream as a blob instead of json
//   return response.blob();
// }
// Then, you can create an object URL and assign the source of an image to this generated URL in your React application:

// const [imageSourceUrl, setImageSourceUrl] = useState("");

// const downloadImageAndSetSource = async (imageUrl) => {
//     const image = await fetchBlob(imageUrl);
//     setImageSourceUrl(URL.createObjectURL(image));
// }


// using async and await.

// async function load_pic() {
    
//         const url = '<REPLACE-WITH-URL>'
    
//         const options = {
//             method: "GET"
//         }
    
//         let response = await fetch(url, options)
    
//         if (response.status === 200) {
            
//             const imageBlob = await response.blob()
//             const imageObjectURL = URL.createObjectURL(imageBlob);
    
//             const image = document.createElement('img')
//             image.src = imageObjectURL
    
//             const container = document.getElementById("your-container")
//             container.append(image)
//         }
//         else {
//             console.log("HTTP-Error: " + response.status)
//         }
//     }

// import React, { useState, useEffect } from 'react';

// const PhotoGallery = () => {
//   const [images, setImages] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     loadMoreImages();
//   }, []);

//   const loadMoreImages = () => {
//     if (loading) return;

//     setLoading(true);

//     // Simulate fetching images from a server.
//     // Replace this with actual image loading logic (e.g., AJAX requests).
//     setTimeout(() => {
//       const newImages = [];

//       for (let i = 1; i <= 10; i++) {
//         newImages.push(`image${i}.jpg`);
//       }

//       setImages([...images, ...newImages]);
//       setPage(page + 1);
//       setLoading(false);
//     }, 1000);
//   };
// 







//   const handleScroll = () => {
//     if (
//       window.innerHeight + document.documentElement.scrollTop ===
//       document.documentElement.offsetHeight
//     ) {
//       loadMoreImages();
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [images]);

//   return (
//     <div>
//       <div className="gallery">
//         {images.map((image, index) => (
//           <div key={index} className="gallery-item">
//             <img src={image} alt={`Image ${index + 1}`} />
//           </div>
//         ))}
//       </div>
//       {loading && <p>Loading...</p>}
//     </div>
//   );
// };

// export default PhotoGallery;
