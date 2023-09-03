import React, { useEffect, useState } from 'react'
import { latestArticle } from '../../config/config'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const ArticleSection = () => {
    const totalPage = Math.ceil(latestArticle.length / 3)


    const [currentPage, setCurrentPage] = useState(1)
    const [PageItems, setPageItems] = useState(latestArticle)

    useEffect(() => {
        const startIndex = (currentPage - 1) * 3
        const endIndex = startIndex + 3
        setPageItems(latestArticle.slice(startIndex, endIndex))

    }, [currentPage])

    const handelPageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPage) {
            setCurrentPage(pageNumber)
        }


    }


    return (
        <div className='flex flex-col mt-16 items-center gap-3'>
            <div className=' px-10 flex flex-col items-center md:items-start gap-10 '>
                <h1 className='text-[28px] font-semibold md:text-[56px]  text-[#0E2368]'>Latest Article</h1>
                <div className='grid md:grid-cols-3  gap-7'>
                    { PageItems.map((article, index) => {

                        return (
                            <div className='flex  flex-col justify-center  items-center   py-10 border-[0.88px] border-[#373737] rounded-3xl   ' key={ index }>
                                <div className='w-[80%] h-[80%] '>
                                    <img src={ article.imgUrl } alt="" className='object-contain rounded-md w-full h-full' />
                                </div>
                                <div className='flex flex-col items-center gap-3 md:items-start p-5 '>
                                    <h1 className='text-[16px] md:text-[21px] font-bold text-[#0E2368]'>{ article.title }</h1>
                                    <p className='text-[12px] md:text-[15px] text-[#444957]  md:text-left leading-6'>{ article.description }</p>
                                    <button className='text-[#424961] rounded-2xl px-5 border-2  md:text-[16px] border-[#424961] text-[11px] '>Read More</button>
                                </div>

                            </div>
                        )

                    }) }

                </div>

            </div>
            <div>
                <button onClick={ () => handelPageChange(currentPage - 1) }> <NavigateBeforeIcon /> </button>{ currentPage }/{ totalPage }<button onClick={ () => handelPageChange(currentPage + 1) }> <NavigateNextIcon /> </button>
            </div>
        </div>
    )
}

export default ArticleSection
