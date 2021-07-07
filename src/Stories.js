import React from 'react';
import StoryCard from './StoryCard';

const Stories = () => {
    const stories = [
        {
            name:"Naeem Uddin",
            src:"https://i.ibb.co/BqWsrc4/myprofiel.jpg",
            profile:"https://i.ibb.co/vmRzGy5/linkdin.jpg"

        },
        {
            name:"Elon Musk",
            src:"https://i.ibb.co/VL9Nz9B/elon-musk-tesla-3225.jpg",
            profile:"https://i.ibb.co/Ytd4wcq/download.jpg"
        },
        {
            name:"Jeff Bezos",
            src:"https://i.ibb.co/ykTCbS9/2020-02-18-86871-1581998411-large.jpg",
            profile:"https://i.ibb.co/9hBMRkf/jeff-bezos-andrew-harrer-bloomberg-via-getty-images.jpg"
        },
        {
            name:"Bill Gates",
            src:"https://i.ibb.co/GWQzKWF/images-3.jpg",
            profile:"https://i.ibb.co/YtsN1r6/download-1.jpg"
        },
        {
            name:"Mark Zuckerberg",
            src:"https://i.ibb.co/mDpYPjf/images-1.jpg",
            profile:"https://i.ibb.co/gTQSFH4/images.jpg"
        }
    ]
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {
                stories.map((story) => (<StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile} />))
            }
        </div>
    );
};

export default Stories;