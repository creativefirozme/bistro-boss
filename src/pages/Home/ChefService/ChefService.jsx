import React from 'react';
import chefService from '../../../assets/home/chef-service.jpg';

const ChefService = () => {
    return (
        <div style={{ backgroundImage: `url(${chefService})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "572px", backgroundPosition: "center" }} className='mt-10 max-w-screen-xl pt-32 mb-10'>
            <div className='h-[334px] bg-white w-[1000px] mx-auto text-center p-14'>
                <h1 className='text-4xl'>Bistro Boss</h1>
                <p className='space-y-5 mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis excepturi sapiente corrupti ipsa sint voluptatem eum facilis enim quia quae illo iusto dolores animi, voluptatum porro rem similique numquam quidem aliquid nemo inventore magnam accusamus! Atque, itaque deleniti molestias impedit non, odit nisi ullam a rerum similique est cupiditate dolorum, magnam natus modi cum odio ad amet. Magnam unde fugit sint non est quam aliquam amet mollitia blanditiis nemo, dicta illum doloremque esse nam. Veritatis beatae ducimus minus ut blanditiis labore asperiores qui assumenda nisi exercitationem!</p>
            </div>
        </div>
    );
};

export default ChefService;