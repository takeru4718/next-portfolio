import Link from 'next/link'

const Pagination=(props:any)=>{
    return(
        <h2 className="paginationWrapper text-center mt-20 mx-auto font-medium text-3xl mb-0">
            {Array.from({length: props.numberPages},(_,i)=>(
                <Link key={i+1} href={i===0?`/blog`:`/blog/page/${i+1}`} className="text-orange-500 px-4">
                    {i+1}
                </Link>
            ))}
        </h2>
    )
}

export default Pagination