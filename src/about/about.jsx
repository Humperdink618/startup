import React from 'react';
import './about.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// React router currently isn't working on refreshes. Don't worry about it
// right now. Focus on working on everything else and then deploy it.
// If the issue persists, email professor for help.


export function About(props) {
  const [imageUrl, setImageUrl] = React.useState('');
//  const [quote, setQuote] = React.useState('Loading...');
//  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');

  // We only want this to render the first time the component is created and so we provide an empty dependency list.
  React.useEffect(() => {
    const size = Math.floor(Math.random() *900) + 300;
    const apiUrl = `https://placekitten.com/${size}/${size}`;
    setImageUrl(apiUrl);
/*    fetch(`https://picsum.photos/v2/list?page=${random}&limit=1`)
      .then((response) => response.json())
      .then((data) => {
        const containerEl = document.querySelector('#picture');

        const width = containerEl.offsetWidth;
        const height = containerEl.offsetHeight;
        const apiUrl = `https://picsum.photos/id/${data[0].id}/${width}/${height}?grayscale`;
        setImageUrl(apiUrl);
      })
      .catch();

    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setQuoteAuthor(data.author);
      })
      .catch(); 
  }, []); */
    }, []);

  let imgEl = '';

  if (imageUrl) {
    imgEl = <img width="400px" src={imageUrl} alt="https://placekitten.com/600/600"/>
  }

  return (
    <main className='container-fluid bg-secondary text-center'>
      <div className='custom-container'>
        <div id='picture' className='picture-box'>
            {imgEl}
        </div>

        <p>Are you bored, stressed, or someone who enjoys instant gratification?</p>
        <h4>Introducing the Instant NOOOOO! Button, because why the heck not!</h4>
        <p> Its a button that you press, and when you do, it plays an audio clip of Darth Vader screaming NOOOOO! That's all there is to it!</p> 
        <p>Just press in case of Dire Emergencies!</p>
      </div>
    </main>
  );
}