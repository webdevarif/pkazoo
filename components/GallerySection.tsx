import Image from 'next/image';
import { ReactNode, useState } from 'react';
import Masonry from 'react-masonry-css';

type GalleryDataType = {
    circleImgSrc: string;
    circleTitle: ReactNode;
    descriptionBox: {
        title: ReactNode;
        description: ReactNode;
    };
    galleries: GalleryType[];
};

type GalleryType = {
    imgSrc: string;
};

const galleryData: GalleryDataType[] = [
    {
        circleImgSrc: '/img/circle_img_1.png',
        circleTitle: 'Moon Child',
        descriptionBox: {
            title: 'Moon Child',
            description:
                'One famous piece, Day is Done (2005), is a massive multimedia project that explores the rituals and traditions of American adolescence through imagined, reconstructed high school yearbook photographs. ',
        },
        galleries: [
            {
                imgSrc: '/img/gallery/gallery_1.png',
            },
            {
                imgSrc: '/img/gallery/gallery_2.png',
            },
            {
                imgSrc: '/img/gallery/gallery_3.png',
            },
            {
                imgSrc: '/img/gallery/gallery_4.png',
            },
            {
                imgSrc: '/img/gallery/gallery_5.png',
            },
            {
                imgSrc: '/img/gallery/gallery_6.png',
            },
            {
                imgSrc: '/img/gallery/gallery_7.png',
            },
            {
                imgSrc: '/img/gallery/gallery_8.png',
            },
            {
                imgSrc: '/img/gallery/gallery_9.png',
            },
        ],
    },
    {
        circleImgSrc: '/img/circle_img_2.png',
        circleTitle: 'Seven Phases',
        descriptionBox: {
            title: 'Seven Phases',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, adipisci expedita voluptates vero neque quo deserunt soluta? amet consectetur adipisicing elit. Ut, adipisci expedit',
        },
        galleries: [
            {
                imgSrc: '/img/gallery/gallery_1.png',
            },
            {
                imgSrc: '/img/gallery/gallery_2.png',
            },
            {
                imgSrc: '/img/gallery/gallery_3.png',
            },
            {
                imgSrc: '/img/gallery/gallery_4.png',
            },
            {
                imgSrc: '/img/gallery/gallery_5.png',
            },
            {
                imgSrc: '/img/gallery/gallery_6.png',
            },
            {
                imgSrc: '/img/gallery/gallery_7.png',
            },
            {
                imgSrc: '/img/gallery/gallery_8.png',
            },
            {
                imgSrc: '/img/gallery/gallery_9.png',
            },
        ],
    },
    {
        circleImgSrc: '/img/circle_img_3.png',
        circleTitle: 'Meowtide',
        descriptionBox: {
            title: 'Meowtide',
            description:
                'magni voluptatum nesciunt perferendis rem reprehenderit necessitatibus ea provident, sed ullam. Quam, sapiente explicabo ab perferendis molestiae sint officia. Possimus, eos at!',
        },
        galleries: [
            {
                imgSrc: '/img/gallery/gallery_1.png',
            },
            {
                imgSrc: '/img/gallery/gallery_2.png',
            },
            {
                imgSrc: '/img/gallery/gallery_3.png',
            },
            {
                imgSrc: '/img/gallery/gallery_4.png',
            },
            {
                imgSrc: '/img/gallery/gallery_5.png',
            },
            {
                imgSrc: '/img/gallery/gallery_6.png',
            },
            {
                imgSrc: '/img/gallery/gallery_7.png',
            },
            {
                imgSrc: '/img/gallery/gallery_8.png',
            },
            {
                imgSrc: '/img/gallery/gallery_9.png',
            },
        ],
    },
    {
        circleImgSrc: '/img/circle_img_4.png',
        circleTitle: 'Kali',
        descriptionBox: {
            title: 'Kali',
            description:
                'Quidem expedita nostrum et neque blanditiis consectetur rerum nulla. Illum eligendi nemo, sapiente sunt libero similique perspiciatis neque iusto cumque, doloremque tenetur voluptatem totam? ',
        },
        galleries: [
            {
                imgSrc: '/img/gallery/gallery_1.png',
            },
            {
                imgSrc: '/img/gallery/gallery_2.png',
            },
            {
                imgSrc: '/img/gallery/gallery_3.png',
            },
            {
                imgSrc: '/img/gallery/gallery_4.png',
            },
            {
                imgSrc: '/img/gallery/gallery_5.png',
            },
            {
                imgSrc: '/img/gallery/gallery_6.png',
            },
            {
                imgSrc: '/img/gallery/gallery_7.png',
            },
            {
                imgSrc: '/img/gallery/gallery_8.png',
            },
            {
                imgSrc: '/img/gallery/gallery_9.png',
            },
        ],
    },
    {
        circleImgSrc: '/img/circle_img_2.png',
        circleTitle: 'Sadhu',
        descriptionBox: {
            title: 'Sadhu',
            description:
                'Dicta, accusamus et perspiciatis facere, beatae sunt est nesciunt cumque doloribus a assumenda provident sequi eligendi? Cumque cupiditate exercitationem, necessitatibus, nesciunt voluptates consectetur',
        },
        galleries: [
            {
                imgSrc: '/img/gallery/gallery_1.png',
            },
            {
                imgSrc: '/img/gallery/gallery_2.png',
            },
            {
                imgSrc: '/img/gallery/gallery_3.png',
            },
            {
                imgSrc: '/img/gallery/gallery_4.png',
            },
            {
                imgSrc: '/img/gallery/gallery_5.png',
            },
            {
                imgSrc: '/img/gallery/gallery_6.png',
            },
            {
                imgSrc: '/img/gallery/gallery_7.png',
            },
            {
                imgSrc: '/img/gallery/gallery_8.png',
            },
            {
                imgSrc: '/img/gallery/gallery_9.png',
            },
        ],
    },
];

// Credit: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array: any[]) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

function GallerySection() {
    const [activeIndex, setActiveIndex] = useState<null | number>(null);

    const activeIndexHandler = (index: number) => {
        setActiveIndex((prev) => {
            if (prev === null && document.documentElement.clientWidth > 700) {
                setTimeout(() => {
                    document.documentElement.scrollTop = 600;
                }, 100);
            }
            return index;
        });
    };
    return (
        <>
            {/* Circle Images Section --Start-- */}
            <section className='mt-[56px]'>
                <div className='container'>
                    <div className='md:w-[1100px] mx-auto grid grid-cols-2 gap-y-10 md:gap-y-0 md:grid-cols-5 place-items-center mb-[50px]'>
                        {galleryData.map((gallery, index) => (
                            <div
                                key={index}
                                className='cursor-pointer'
                                onClick={() => activeIndexHandler(index)}
                            >
                                <div
                                    className={`w-[102px] h-[102px] relative rounded-full overflow-hidden duration-200 origin-bottom border-4 border-transparent ${
                                        activeIndex === index ? 'border-[#C6C5C3] scale-[1.15]' : ''
                                    }`}
                                >
                                    <Image src={gallery.circleImgSrc} layout='fill' alt="hello"/>
                                </div>
                                <p className='text-black mt-2 text-center'>{gallery.circleTitle}</p>
                            </div>
                        ))}
                    </div>

                    <CircleDescriptionBox activeIndex={activeIndex} />
                </div>
            </section>
            {/* Circle Images Section --End-- */}

            {/* Gallery Section --Start-- */}
            {activeIndex !== null && (
                <section className='mt-[55px]'>
                    <div className='container'>
                        <Masonry
                            breakpointCols={3}
                            className='my-masonry-grid'
                            columnClassName='my-masonry-grid_column'
                        >
                            {shuffle(galleryData[activeIndex].galleries).map((gallery, index) => (
                                <div key={index}>
                                    <Image src={gallery.imgSrc} width="100%" height="auto" alt='gallery image' />
                                </div>
                            ))}
                        </Masonry>
                    </div>
                </section>
            )}
            {/* Gallery Section --End-- */}
        </>
    );
}

export default GallerySection;

const CircleDescriptionBox = ({ activeIndex }: { activeIndex: null | number }) => {
    if (activeIndex === null) return null;
    const data = galleryData[activeIndex].descriptionBox;

    return (
        <div className='grid grid-cols-1 md:grid-cols-[auto,auto,auto] gap-6 md:gap-14 md:w-[1000px] mx-auto px-[35px] md:px-[60px] py-[30px] md:py-[50px] rounded-3xl border-4 border-[#D8D8D8]'>
            <h6 className='text-[28px] font-semibold text-[#595959]'>{data.title}</h6>
            <p className='text-black'>{data.description}</p>
            <div className='flex items-center justify-end md:justify-start'>
                <a href='#'>
                    <Image height="100%" width="100%" src='/img/chevron-right.svg' alt='chevron-right' />
                </a>
            </div>
        </div>
    );
};
