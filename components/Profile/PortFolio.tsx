import React from 'react';
import {FiDollarSign, FiMinus, FiPlus, FiSearch} from 'react-icons/fi';
import {BsSliders, BsChevronCompactDown, BsGrid3X3GapFill} from 'react-icons/bs';
import {MdWidgets} from 'react-icons/md';
import { FiX } from 'react-icons/fi';
import ProductThumb from '../../assets/img/product-placeholder.jpg';
import Image from 'next/image';
import Slider from 'react-rangeslider';


const PortFolio =()=> {
    const [open, setOpen] = React.useState(false);
    const [loadmore, setLoadmore] = React.useState(null);

    const [sortDropdown, setSortDropdown] = React.useState(false);
    const [sortValueDropdown, setSortValueDropdown] = React.useState('Low to High');

    // Price Value
    const [priceFilter, setPriceFilter] = React.useState({
        initialMin: 0,
        initialMax: 0,
        min: 0,
        max: 10000,
        step: 10,
        volume: 3000,
    });

    const { initialMin, initialMax, min, max, step, volume} = priceFilter;


    // const drawerToggle = React.useRef('');

    const handleOpenFilter =()=> {
        // drawerToggle.classList.add("open");
        setOpen(true);
    }
    const handleCloseFilter =()=> {
        // drawerToggle.classList.remove("open");
        setOpen(false);
    }
    const handleDropdownClick =(event: any, getValue: any)=> {
        event.preventDefault();
        setSortValueDropdown(getValue);
        setSortDropdown(false);
    }

    const handleLoadMore =(event: any, getID: any)=> {
        event.preventDefault();
        setLoadmore(getID);
    }

    const portfolioList = [
        {
            label: "Abstract",
        },
        {
            label: "Abstract",
        },
        {
            label: "Abstract",
        },
        {
            label: "Abstract",
        },
        {
            label: "Abstract",
        },
        {
            label: "Abstract",
        },
        {
            label: "Abstract",
        },
        {
            label: "Abstract",
        },
        {
            label: "Abstract",
        },
        {
            label: "Abstract",
        },
        {
            label: "Abstract",
        },
        {
            label: "Abstract",
        },
    ]

    const Filter = {
        category : {
            heading: "Category",
            list: [
                {
                    label: "Oil", 
                },
                {
                    label: "Watercolor", 
                },
                {
                    label: "Acrylic", 
                },
                {
                    label: "Spray Paint", 
                },
                {
                    label: "Ink", 
                },
                {
                    label: "Gouache", 
                },
            ]
        },

        subject: {
            heading: "Subject",
            list: [
                {
                    label: "Abstract", 
                },
                {
                    label: "Land", 
                },
                {
                    label: "Sea", 
                },
                {
                    label: "People", 
                },
                {
                    label: "Food", 
                },
                {
                    label: "Pop", 
                },
                {
                    label: "Abstract & geometric", 
                },
                {
                    label: "Anime & cartoon", 
                },
                {
                    label: "Architecture & cityscape", 
                },
                {
                    label: "Beach & tropical", 
                },
                {
                    label: "Comics & manga", 
                },
                {
                    label: "Flowers", 
                },
                {
                    label: "Geography & locale", 
                },
                {
                    label: "Love & friendship", 
                },
                {
                    label: "Love & friendship", 
                },
            ]
        },

        style: {
            heading: "Style",
            list: [
                {
                    label: "Fine Art", 
                },
                {
                    label: "Figurative", 
                },
                {
                    label: "Realism", 
                },
                {
                    label: "Modern", 
                },
                {
                    label: "Expressionism", 
                },
                {
                    label: "Impressionism", 
                },
            ]
        },

        location: {
            heading: "Shop Location",
            list: [
                {
                    label: "Any where", 
                },
                {
                    label: "Usa",  
                },
                {
                    label: "Bangladesh", 
                },
            ]
        },

        itemType: {
            heading: "Item Type",
            list: [
                {
                    label: "All Items", 
                },
                {
                    label: "Hand Made",  
                },
                {
                    label: "Vintage", 
                },
            ]
        },

        price: {
            heading: "Price ($)",
            radio_check: true, 
            list: [
                {
                    label: "Any price", 
                },
                {
                    label: "Under USD 25",  
                },
                {
                    label: "USD 25 to USD 50", 
                },
                {
                    label: "USD 50 to USD 100",  
                },
                {
                    label: "Over USD 100", 
                },
            ]
        },

        color: {
            heading: "Color",
            radio_check: true, 
            list: [
                {
                    label: "Black and White", 
                    code: '#090909',
                },
                {
                    label: "Red",  
                    code: '#FF3A3A',
                },
                {
                    label: "Orange", 
                    code: '#FFA944', 
                },
                {
                    label: "Green",  
                    code: '#A7FF72',
                },
                {
                    label: "Purple", 
                    code: '#F095FF', 
                },
            ]
        },
    }

    const handleOnChange = (getValue: number) => {
        setPriceFilter({
            ...priceFilter,
            volume:getValue
        });
    }

    const loadMoreButton = (e: any, button_id: any) => {
        if(loadmore === button_id) {
            return <button onClick={(e) => handleLoadMore(e, null)} className="-ml-4 py-2 px-5 flex gap-2 transition-all duration-300 relative z-10 rounded-full items-center hover:bg-gray-100 font-semibold"> <FiMinus /> <span>Show Fewer</span></button>;
        } else { 
            return <button onClick={(e) => handleLoadMore(e, button_id)} className="-ml-4 py-2 px-5 flex gap-2 transition-all duration-300 relative z-10 rounded-full items-center hover:bg-gray-100 font-semibold"> <FiPlus /> <span>Show More</span></button>            
        }
    }
  return (
    <div className="portfolio">
        <div className="container">
            {/* Heading */}
            <div className="portfolio__heading mb-10 flex align-items-center gap-3 gap-x-10">
                {/* Filter Button */}
                <div onClick={handleOpenFilter} className="heading__filter cursor-pointer flex items-center gap-3 py-2 px-8 border border-gray-200 rounded-full">
                    <BsSliders className='text-2xl'/>
                    <span className='text-lg'>Filters</span>
                </div>
                {/* Search  */}
                <div className="heading__search w-full">
                    <form action="" className='relative px-4 flex items-center border border-gray-200 rounded-full w-full'>
                        <FiSearch className="text-gray-400"/>
                        <input type="text" className="py-2 px-4 outline-none shadow-none w-full" placeholder="Search"/>
                    </form>
                </div>
                {/* Price Sort */}
                <div className="heading__short">
                    <div className="filter__dropdown relative">
                        <span onClick={() => setSortDropdown(true)} className="filter__short-button border border-gray-200 rounded-xl flex items-center cursor-pointer gap-4 py-2 px-6">
                            <span className='whitespace-nowrap'>Price: <strong>{sortValueDropdown}</strong></span>
                            <BsChevronCompactDown className='text-gray-400'/>
                        </span>
                        {sortDropdown &&
                        <>
                            <div onClick={() => setSortDropdown(false)} className="overlay w-full h-full fixed left-0 top-0 z-10"></div>
                            <ul className="filter bg-white rounded-b-xl border-b border-x border-gray-200 z-40 left-0 right-0 absolute top-9">
                                <li><a onClick={(e: any) => handleDropdownClick(e, 'Relevancy') } className='block px-6 leading-10 hover:bg-gray-100 text-sm' href="#">Relevancy</a></li>
                                <li><a onClick={(e: any) => handleDropdownClick(e, 'Lowest Price') } className='block px-6 leading-10 hover:bg-gray-100 text-sm' href="#">Lowest Price</a></li>
                                <li><a onClick={(e: any) => handleDropdownClick(e, 'Highest Price') } className='block px-6 leading-10 hover:bg-gray-100 text-sm' href="#">Highest Price</a></li>
                                <li><a onClick={(e: any) => handleDropdownClick(e, 'Top Customzer Reviews') } className='block px-6 leading-10 hover:bg-gray-100 text-sm' href="#">Top Customzer Reviews</a></li>
                                <li><a onClick={(e: any) => handleDropdownClick(e, 'Most Recent') } className='block px-6 leading-10 hover:bg-gray-100 text-sm' href="#">Most Recent</a></li>
                            </ul>
                        </>
                        }
                    </div>
                </div>
                {/* Grid */}
                <div className="heading__grid flex items-center text-2xl rounded border border-gray-200">
                    <span className="px-4 py-2 cursor-pointer transition-all duration-300 text-gray-700 hover:text-black border-r border-gray-200">
                        <MdWidgets />
                    </span>
                    <span className="px-4 py-2 cursor-pointer transition-all duration-300 text-gray-700 hover:text-black">
                        <BsGrid3X3GapFill />
                    </span>
                </div>
            </div>

            {/* Portfolio Found */}
            <div className="portfolio__found mb-5">
                <p className="text-gray-600 text-lg">20 works for sale</p>
            </div>

            {/* Portfolio Gallery */}
            <div className="portfolio__gallery-area mb-10">
                <div className="grid gap-6 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                    {/* Single Portfolio */}
                    {portfolioList.map((portfolio, idx) =>(
                    <div key={idx} className="portfolio__gallery-single">
                        <div className="portfolio--thumb w-full mb-6">
                            <Image 
                                width={ProductThumb.width}
                                height={ProductThumb.height}
                                src={ProductThumb.src}
                                alt="Image Alt"
                                layout="responsive"
                            />
                        </div>
                        <div className="portfolio--content">
                            <h4>Abstract</h4>
                            <div className="portfolio-price-area flex items-center justify-between">
                                <p className="text-gray-600">Oil Painting</p>
                                <strong>$650</strong>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>

        <div className={`sidebar__filter hidden ${open ? 'open' : ''}`}>
            <div className="sidebar__filter-inner fixed top-0 bg-white bottom-0 max-w-full w-[400] 2xl:w-[480px] z-[99]">
                <span onClick={handleCloseFilter} className="close-icon before:content-[''] before:w-0 before:transition-all before:duration-300 hover:before:w-full hover:before:h-full before:h-0 before:absolute before:bg-white/20 before:rounded-full before:z-[-1] absolute text-white cursor-pointer rounded-full flex items-center justify-center text-3xl w-[50px] h-[50px] top-5 -right-[60px]">
                    <FiX />
                </span>

                {/* Filter Box */}
                <div className="sidebar__filter-box">
                    <div className="sidebar__filter-scrollbar overflow-auto pr-14 m-6 h-[calc(100vh-120px)]">

                        <h2 className='text-3xl font-bold mb-4'>Filters</h2>
                        
                        <ul className="list-category pl-6">
                            { Filter.category &&
                                <li className="filter__cat-item">
                                    <h3 className="mb-3 font-bold text-lg">{Filter.category.heading}</h3>
                                    <ul className="list-checkgroup mb-5">
                                        { loadmore === 'load-more--category' ? Filter.category.list.map((item, idx) =>(
                                            <li key={idx}>
                                                <div className='check-group'>
                                                    <input type="checkbox" id={`check-category-id--${idx}`} name={`check-category-id--${idx}`} />
                                                    <label htmlFor={`check-category-id--${idx}`} className="check-label">{item.label}</label>
                                                </div>
                                            </li>
                                        ))
                                        :
                                        Filter.category.list.slice(0, 5).map((item, idx) =>(
                                            <li key={idx}>
                                                <div className='check-group'>
                                                    <input type="checkbox" id={`check-category-id--${idx}`} name={`check-category-id--${idx}`} />
                                                    <label htmlFor={`check-category-id--${idx}`} className="check-label">{item.label}</label>
                                                </div>
                                            </li>
                                        ))}
                                        <li>
                                            <div className="show-more-button">
                                                {loadMoreButton((event: any ) => event, 'load-more--category')}
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            }
                            { Filter.price &&
                                <li className="filter__cat-item">
                                    <h3 className="mb-3 font-bold text-lg">{Filter.price.heading}</h3>

                                    <div className="flex items-center gap-4 border border-gray-200 py-3 px-4 rounded-xl">
                                        <FiDollarSign />
                                        <span className='font-semibold text-gray-600'>United States Dollar</span>
                                    </div>

                                    <div className="slider-range-area my-6">
                                        <Slider
                                            min={min}
                                            max={max}
                                            value={volume}
                                            onChange={handleOnChange}
                                        />
                                    </div>

                                    <div className="price-filter__dimension mb-5 flex justify-between items-center">
                                        <span className='border border-gray-200 px-3 min-w-[4em] text-center py-2 px-3 rounded-lg text-gray-600 text-xl font-semibold'>{min}</span>
                                        <span className='font-regular text-lg'>to</span>
                                        <span className='border border-gray-200 px-3 min-w-[4em] text-center py-2 px-3 rounded-lg text-gray-600 text-xl font-semibold'>{max}</span>
                                    </div>
                                </li>
                            }

                            { Filter.subject &&
                                <li className="filter__cat-item">
                                    <h3 className="mb-3 font-bold text-lg">{Filter.subject.heading}</h3>
                                    <ul className="list-checkgroup mb-5">
                                        {loadmore === "load-more--subject" ? Filter.subject.list.map((item, idx) =>(
                                        <li key={idx}>
                                            <div className='check-group'>
                                                <input type="checkbox" id={`check-subject-id--${idx}`} name={`check-subject-id--${idx}`} />
                                                <label htmlFor={`check-subject-id--${idx}`} className="check-label">{item.label}</label>
                                            </div>
                                        </li>
                                        )) 
                                        :
                                        Filter.subject.list.slice(0, 5).map((item, idx) =>(
                                            <li key={idx}>
                                                <div className='check-group'>
                                                    <input type="checkbox" id={`check-subject-id--${idx}`} name={`check-subject-id--${idx}`} />
                                                    <label htmlFor={`check-subject-id--${idx}`} className="check-label">{item.label}</label>
                                                </div>
                                            </li>
                                        ))}
                                        <li>
                                            <div className="show-more-button">
                                                {loadMoreButton((event: any ) => event, 'load-more--subject')}
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            }

                            { Filter.style &&
                                <li className="filter__cat-item">
                                    <h3 className="mb-3 font-bold text-lg">{Filter.style.heading}</h3>
                                    <ul className="list-checkgroup mb-5">
                                        {loadmore === 'load-more-style' ? Filter.style.list.map((item, idx) =>(
                                        <li key={idx}>
                                            <div className='check-group'>
                                                <input type="checkbox" id={`check.style-id--${idx}`} name={`check.style-id--${idx}`} />
                                                <label htmlFor={`check.style-id--${idx}`} className="check-label">{item.label}</label>
                                            </div>
                                        </li>
                                        ))
                                        :
                                        Filter.style.list.slice(0, 5).map((item, idx) =>(
                                            <li key={idx}>
                                                <div className='check-group'>
                                                    <input type="checkbox" id={`check.style-id--${idx}`} name={`check.style-id--${idx}`} />
                                                    <label htmlFor={`check.style-id--${idx}`} className="check-label">{item.label}</label>
                                                </div>
                                            </li>
                                        ))}
                                        <li>
                                            <div className="show-more-button">
                                                {loadMoreButton((event: any ) => event, 'load-more-style')}
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            }

                            { Filter.location &&
                                <li className="filter__cat-item">
                                    <h3 className="mb-3 font-bold text-lg">{Filter.location.heading}</h3>
                                    <ul className="list-checkgroup mb-5">
                                        {Filter.location.list.map((item, idx) =>(
                                            <li key={idx}>
                                                <div className='form-check'>
                                                    <input className='form-check-input' type="radio" id={`check.location-id--${idx}`} name="shop-location" />
                                                    <label htmlFor={`check.location-id--${idx}`} className="form-check-label">{item.label}</label>
                                                </div>
                                            </li>
                                        ))}
                                        <li>
                                            <div className='form-check'>
                                                <input className='form-check-input' type="radio" id="custom-shop-location" name="shop-location" />
                                                <label htmlFor="custom-shop-location" className="form-check-label">Custom Location</label>
                                            </div>
                                            <div className="custom-input-box pl-5 pt-2">
                                                <input type="text" className="rounded-lg text-sm placeholder:text-gray-600 py-2 px-4 bg-gray-100/50 shadow-sm border border-gray-200/50" placeholder='Custom Location' />
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            }

                            { Filter.itemType &&
                                <li className="filter__cat-item">
                                    <h3 className="mb-3 font-bold text-lg">{Filter.itemType.heading}</h3>
                                    <ul className="list-checkgroup mb-5">
                                        {Filter.itemType.list.map((item, idx) =>(
                                            <li key={idx}>
                                                <div className='form-check'>
                                                    <input className='form-check-input' type="radio" id={`check.itemType-id--${idx}`} name="shop-itemType" />
                                                    <label htmlFor={`check.itemType-id--${idx}`} className="form-check-label">{item.label}</label>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            }


                            {/* {Filter.map((cat, idx) => (
                            <li key={idx} className="filter__cat-item">
                                <h3 className="mb-3 font-bold text-lg">{cat.heading}</h3>
                                {cat.radio_check ?                                 
                                    <ul className="list-checkgroup mb-5">
                                        {cat.list.map((item, subidx) => (
                                            <li key={subidx}>
                                                <div className='check-group'>
                                                    <input type="radio" id={`check-${idx}--${subidx}`} name={`check-color`} />
                                                    <label htmlFor={`check-${idx}--${subidx}`} style={{ [ '--checkbg' as any]: item.code }} className={`checkbtn ${item.code ? "color-check" : ""}`}>{item.label}</label>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    :    
                                    <ul className="list-checkgroup mb-5">
                                        {cat.list.map((item, subidx) => (
                                            <li key={subidx}>
                                                <div className='check-group'>
                                                    <input type="checkbox" id={`check-${idx}--${subidx}`} name={`check-${idx}--${subidx}`} />
                                                    <label htmlFor={`check-${idx}--${subidx}`} className="checkbtn">{item.label}</label>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                }
                            </li>
                            ))} */}
                        </ul>
                        
                    </div>

                    {/* Action Area */}
                    <div className="sidebar__filter-action px-4 lg:px-10 flex gap-4 border-t py-3">
                        <button className="py-2 w-full rounded-full px-4 transition-all duration-300 border-2 font-bold border-red-600 text-red-600 hover:bg-red-600 hover:text-white">Cancel</button>
                        <button className="py-2 w-full rounded-full px-4 transition-all duration-300 font-bold bg-red-500 text-white hover:bg-red-600">Apply Filters</button>
                    </div>
                </div>
            </div>
            <span onClick={handleCloseFilter} className="overlay fixed z-[98] left-0 top-0 bottom-0 bg-[rgba(34,34,34,0.65)]"></span>
        </div>
        
    </div>
  )
}

export default PortFolio;