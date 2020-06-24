import React, { useState } from 'react';
import css from './Users.module.css';




const Pagination = ({ totalCount, pageSize, currentPage, className, portionSize, onPageChanged }) => {
    let pagesCount = Math.ceil(totalCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil( pagesCount/portionSize);
    let [portionNumber, setPortionNember] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rigthPortionPageNumber = portionNumber * portionSize

    return (

        <div className={className}>
            {
                portionNumber > 1 &&
                <button className={css.paginationBtn} onClick = {() => { setPortionNember(portionNumber - 1)}}>Prev</button>
            }
            {

                pages.filter( p => leftPortionPageNumber <= p && p <= rigthPortionPageNumber )
                .map((p, index) => {
                    return (
                        <span key={index}
                            onClick={() => { onPageChanged(p) }}
                            className={ currentPage === p && css.current}>{p}</span>
                    )
                })
            }

            {
                portionNumber <= portionCount &&
                <button className={css.paginationBtn} onClick = {() => {setPortionNember(portionNumber + 1)}}>Next</button>
            }
        </div>

    )
}



export default Pagination;