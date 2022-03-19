import type { NextPage } from 'next';
import Head from 'next/head';
import Gallery from '../components/GallerySection';
import Header from '../components/Header';
import ProfileSection from '../components/ProfileSection';
import TabsSection from '../components/TabsSection';
import MainLayout from '../Layouts/Main';
import Image from 'next/image';
import CoverPhoto from '../assets/img/profile-cover-banner.jpg';
import ProfilePhoto from '../assets/img/user.png';
import PortFolio from '../components/Profile/PortFolio';
import Config from '../utils/Config';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Create Next App</title>
            </Head>

            <Header />
            <MainLayout>
                {/* Cover Photo */}
                <div className='profile-cover-photo relative w-full h-[180px] lg:h-[300px]'>
                    <Image
                        src={CoverPhoto}
                        alt="Cover Photo"
                        layout="fill"
                        objectFit='cover'
                    />
                </div>
                {/* Cover Photo --End-- */}

                {/* Profile Section Start */}
                <section className="profile-section py-10">
                    <div className="container">
                        <div className="grid md:grid-cols-2 gap-4 justify-center">
                            {/* User Thumb Area */}
                            <div className="user-thumb-area gap-4 gap-x-10 lg:flex items-center">
                                <div className='user-thumb relative h-[200px] w-[200px] min-w[200px]'>
                                    <Image
                                        src={ProfilePhoto}
                                        alt="Cover Photo"
                                        layout="fill"
                                        objectFit='cover'
                                    />
                                </div>
                                <div className="user-name">
                                    <h1 className='mb-3 2xl:text-5xl'>James Jean</h1>
                                    <p className='mb-4 font-semibold text-gray-600'>Taiwan, United States</p>

                                    <div className="button-area">
                                        <button className="py-2 px-10 bg-red-500 hover:bg-red-600 text-white rounded-full">Follow</button>
                                    </div>
                                </div>
                            </div>
                            {/* User Info Area */}
                            <div className="user-info-area">
                                <div className="user-info-header mb-5 text-center">
                                    <div className="flex gap-3 gap-x-10">
                                        {/* Single Item */}
                                        <div className="single-item">
                                            <h2 className="font-semibold text-3xl">{Config.numFormatter(125)}</h2>
                                            <div className="single-item--item text-sm text-gray-400">Posts</div>
                                        </div>
                                        {/* Single Item */}
                                        <div className="single-item">
                                            <h2 className="font-semibold text-3xl">{Config.numFormatter(20)}</h2>
                                            <div className="single-item--item text-sm text-gray-400">Works</div>
                                        </div>
                                        {/* Single Item */}
                                        <div className="single-item">
                                            <h2 className="font-semibold text-3xl">{Config.numFormatter(154655)}</h2>
                                            <div className="single-item--item text-sm text-gray-400">Followers</div>
                                        </div>
                                        {/* Single Item */}
                                        <div className="single-item">
                                            <h2 className="font-semibold text-3xl">{Config.numFormatter(13464652)}</h2>
                                            <div className="single-item--item text-sm text-gray-400">Following</div>
                                        </div>
                                    </div>
                                </div>
                                {/* About User */}
                                <div className="user-info--description">
                                    <p>In his wide-ranging practice, Mike Kelley mined the banal objects of everyday life and repurposed them in dark, imaginative multimedia artworks. Throughout his oeuvre, the artist explored notions of memory and dismantled distinctions between high and low art.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Profile Section End */}

                {/* Tab Section Start*/}
                    <section className='tab-pill-area mb-10'>
                        <div className='container'>
                            <div className='flex items-center justify-around relative before:absolute before:w-full before:h-1 before:bottom-0 before:left-0 before:bg-gray-200'>
                                <button className="text-lg relative z-10 font-semibold text-gray-600 hover:bg-black/5 duration-150 px-8 md:px-20 py-2 border-b-4 border-transparent">Posts</button>
                                <button className="text-lg relative z-10 font-semibold text-gray-600 hover:bg-black/5 duration-150 px-8 md:px-20 py-2 border-b-4 border-transparent hover:bg-soft-red/5 border-soft-red">
                                    Portfolio
                                </button>
                                <button className="text-lg relative z-10 font-semibold text-gray-600 hover:bg-black/5 duration-150 px-8 md:px-20 py-2 border-b-4 border-transparent">Store</button>
                            </div>
                        </div>
                    </section>
                {/* Tab Section End*/}

                {/* Portfolio Area */}
                <PortFolio />

            </MainLayout>
        </>
    );
};

export default Home;
