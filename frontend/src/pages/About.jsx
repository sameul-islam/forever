import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center py-8 border-t border-gray-300'>
         <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-112.5' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere voluptates velit, dolore ducimus, qui in quisquam consectetur dicta sit illo, consequatur omnis maiores ad! Fuga quisquam inventore laborum cupiditate cum!</p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempore voluptatem laudantium architecto laborum doloremque amet quo adipisci accusantium. Repellendus quisquam iusto nemo! Autem molestias quo, ex dolorem pariatur vitae.</p>
           <b className='text-gray-800'>Our Mission</b>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque commodi porro sunt neque consectetur expedita, tempore magnam quas, nihil facilis nulla voluptates, dignissimos eum totam laboriosam illo deserunt iure. Error.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20 gap-2'>
        <div className='border border-gray-500 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt sit non architecto dignissimos amet, commodi quibusdam eius quos perferendis nobis laborum doloribus sapiente ea explicabo ducimus quasi. Iste, sit error.</p>
        </div>
        <div className='border border-gray-500 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt sit non architecto dignissimos amet, commodi quibusdam eius quos perferendis nobis laborum doloribus sapiente ea explicabo ducimus quasi. Iste, sit error.</p>
        </div>
        <div className='border border-gray-500 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt sit non architecto dignissimos amet, commodi quibusdam eius quos perferendis nobis laborum doloribus sapiente ea explicabo ducimus quasi. Iste, sit error.</p>
        </div>
      </div>

      <NewsLetterBox/>
      
    </div>
  )
}

export default About
