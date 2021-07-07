import React from 'react';
import { VideoCameraIcon, SearchIcon, DotsHorizontalIcon} from '@heroicons/react/outline';
import Contact from './Contact';

const Widgets = () => {
    const contacts = [
        {src: 'https://i.ibb.co/vmRzGy5/linkdin.jpg', name: 'Naeem Uddin'},
        {src: 'https://i.ibb.co/Ytd4wcq/download.jpg', name: 'Elon Musk'},
        {src: 'https://i.ibb.co/9hBMRkf/jeff-bezos-andrew-harrer-bloomberg-via-getty-images.jpg', name: 'Jeff Bezos'},
        {src: 'https://i.ibb.co/YtsN1r6/download-1.jpg', name: 'Bill Gates'},
        {src: 'https://i.ibb.co/gTQSFH4/images.jpg', name: 'Mark Zuckerberg'}
    ]
    return (
        <div>
            <div className='hidden lg:flex w-60 justify-between m-4'>
                <h4 className='text-xl font-medium p-2'>Contact</h4>
               <div className='flex space-x-2'>
               <div className='p-2 hover:bg-gray-300 rounded-full cursor-pointer'>
                    <VideoCameraIcon className='h-6'/>
                </div>
                <div className='p-2 hover:bg-gray-300 rounded-full cursor-pointer'>
                    <SearchIcon className='h-6'/>
                </div>
                <div className='p-2 hover:bg-gray-300 rounded-full cursor-pointer'>
                    <DotsHorizontalIcon className='h-6'/>
                </div>
               </div>
              
            </div>
            <div>
            { 
                 contacts.map((contact)=> <Contact name={contact.name} src={contact.src} key={contact.name} />)
            }
            </div>
            
            
        </div>
    );
};

export default Widgets;