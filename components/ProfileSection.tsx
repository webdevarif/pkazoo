import { useState } from 'react';
import Image from 'next/image';

function ProfileSection() {
    const [isFollowing, setIsFollowing] = useState<boolean | undefined>(false);
    const [isShowUnfollwConfirmModal, setIsShowUnfollwConfirmModal] = useState(false);

    const follwButtonHandler = () => {
        setIsFollowing((prev) => {
            if (prev) {
                setIsShowUnfollwConfirmModal(true);
                return true;
            } else {
                return true;
            }
        });
    };

    const unFollowHandler = () => {
        setIsFollowing(false);
        setIsShowUnfollwConfirmModal(false);
    };

    const UnFollwoConfirmationModal = () => {
        return (
            <div className='fixed top-0 left-0 w-full h-full z-50 bg-black/40 flex items-center justify-center'>
                <div className='w-[350px] rounded-3xl bg-white py-10 px-10'>
                    <h2 className='text-2xl text-black font-bold'>Unfollow James Jean?</h2>
                    <p className='text-black/70 mt-2 text-lg leading-[1.4]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa et magni,
                        voluptatibus ut blanditiis molestiae?
                    </p>
                    <div className='mt-8 space-y-4'>
                        <button
                            onClick={unFollowHandler}
                            className='duration-150 block w-full rounded-full font-bold text-base py-2.5 px-9 border-2 border-soft-red bg-soft-red hover:bg-dark-red text-white'
                        >
                            Unfollow
                        </button>
                        <button
                            onClick={() => setIsShowUnfollwConfirmModal(false)}
                            className='duration-150 block w-full rounded-full font-bold text-base py-2.5 px-9 border border-[#C6C5C3] bg-white text-black hover:bg-black/5'
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            {isShowUnfollwConfirmModal && <UnFollwoConfirmationModal />}
            <section className='pt-[48px]'>
                <div className='container'>
                    <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-[430px,auto] gap-y-[50px] md:gap-[172px]'>
                        <div className='grid grid-cols-1 md:grid-cols-[200px,auto] place-items-center md:place-items-[unset] gap-[42px]'>
                            <div className='w-[200px] h-[200px] overflow-hidden rounded-full'>
                                <Image
                                    width="100%"
                                    height="100%"
                                    src='/img/profile_image.png'
                                    alt='profile image'
                                    className='object-cover'
                                />
                            </div>
                            <div className='flex flex-col justify-center items-center md:items-start'>
                                <h1 className='text-3xl font-semibold text-black'>James Jean</h1>
                                <p className='text-icon-gray text-lg mt-1'>Taiwan, United States</p>
                                <div className='mt-[25px]'>
                                    <button
                                        onClick={follwButtonHandler}
                                        className={`duration-150 rounded-full font-bold text-base py-2 px-9 border-2 
                                        ${
                                            isFollowing
                                                ? 'border-[#C6C5C3] bg-white text-black hover:bg-black/5'
                                                : 'border-soft-red bg-soft-red hover:bg-dark-red text-white'
                                        }`}
                                    >
                                        {isFollowing ? 'Following' : 'Follow'}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='grid grid-cols-2 md:grid-cols-4 md:w-fit gap-[30px] md:ml-[-40px]'>
                                <div className='px-5 text-center'>
                                    <p className='text-xl text-black font-semibold'>125</p>
                                    <p className='text-lg text-icon-gray'>Posts</p>
                                </div>
                                <div className='px-5 text-center'>
                                    <p className='text-xl text-black font-semibold'>20</p>
                                    <p className='text-lg text-icon-gray'>Works</p>
                                </div>
                                <div className='px-5 text-center'>
                                    <p className='text-xl text-black font-semibold'>
                                        {isFollowing ? 114 : 113}
                                    </p>
                                    <p className='text-lg text-icon-gray'>Followers</p>
                                </div>
                                <div className='px-5 text-center'>
                                    <p className='text-xl text-black font-semibold'>3</p>
                                    <p className='text-lg text-icon-gray'>Following</p>
                                </div>
                            </div>

                            <div className='mt-[35px]'>
                                <p className='text-black md:w-[80%]'>
                                    In his wide-ranging practice, Mike Kelley mined the banal
                                    objects of everyday life and repurposed them in dark,
                                    imaginative multimedia artworks. Throughout his oeuvre, the
                                    artist explored notions of memory and dismantled distinctions
                                    between high and low art.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProfileSection;
