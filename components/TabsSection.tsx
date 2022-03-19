const tabBtnClasses =
    'text-lg relative z-10 font-semibold text-[#1E1E1E] hover:bg-black/5 duration-150 px-8 md:px-20 py-2 border-b-4 border-transparent';

function TabsSection() {
    return (
        <>
            <section className='mt-[45px]'>
                <div className='container'>
                    <div className='flex items-center justify-around relative before:absolute before:w-full before:h-1 before:bottom-0 before:left-0 before:bg-[#E1E1E1]'>
                        <button className={tabBtnClasses}>Posts</button>
                        <button className={`${tabBtnClasses} hover:bg-soft-red/5 border-soft-red`}>
                            Portfolio
                        </button>
                        <button className={tabBtnClasses}>Store</button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default TabsSection;
