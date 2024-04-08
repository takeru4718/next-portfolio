import Link from 'next/link'

const PrevNext=(props:any)=>{
    return(
        <div className="pnWrapper flex justify-center gap-8 mt-20 max-w-screen-md mx-auto px-8">
            {0<props.prev.length&&
                <Link href={`/blog/${props.prev[0].slug}`} className="flex justify-center border-2 border-orange-500 w-full py-8 px-20 text-center hover:opacity-80">
                    <img src="/images/arrow-left.svg" alt="arrow-left"/>
                    <h3 className="font-medium text-2xl mb-0">{props.prev[0].frontmatter.title}</h3>
                </Link>
            }
            {0<props.next.length&&
                <Link href={`/blog/${props.next[0].slug}`} className="flex justify-center border-2 border-orange-500 w-full py-8 px-20 text-center hover:opacity-80">
                    <h3 className="font-medium text-2xl mb-0">{props.next[0].frontmatter.title}</h3>
                    <img src="/images/arrow-right.svg" alt="arrow-right"/>
                </Link>
            }
        </div>
    )
}

export default PrevNext