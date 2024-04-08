import Link from 'next/link'
import Image from 'next/image'
import Pagination from "../../../components/pagination"
import {getAllBlogs,blogsPerPage} from "../../../utils/mdQueries"

export const metadata={
    title:"ブログ",
    description:"これはブログページです",
}

const Blog=async(props:any)=>{
    const {blogs, numberPages} = await getAllBlogs()

    const currentPage = props.params.pagination
    const limitedBlogs = blogs.slice((currentPage-1)*blogsPerPage,currentPage*blogsPerPage)

    return(
        <>
            <div className="wrapper py-28 pb-40">
                <div className="container mx-auto px-6 lg:max-w-3xl lg:px-0">
                    <h1 className="font-medium text-4xl mb-0">Blog</h1>
                    <p>工学部大学生の日常生活をお届けします</p>
                    {limitedBlogs.map((blog,index)=>
                        <div key={index} className="blogCard grid grid-cols-1 md:grid-cols-2 items-center color-inherit mt-20 shadow-lg md:grid-cols-1">
                            <div className="cardContainer px-2 pb-8">
                                <h2 className="font-medium text-3xl mb-0">{blog.frontmatter.title}</h2>
                                <p>{blog.frontmatter.excerpt}</p>
                                <p>{blog.frontmatter.date}</p>
                                <Link href={`/blog/${blog.slug}`} className="inline-block px-8 py-2 bg-red-500 text-white rounded-md text-lg">Read More</Link>
                            </div>
                            <div className="blogImg h-72 object-cover">
                                <Image src={blog.frontmatter.image} alt="card-image" height={300} width={1000} quality={90} priority={true} className="object-cover w-full h-full"/>
                            </div>
                        </div>
                    )}
                </div>
                <Pagination numberPages={numberPages}/>
            </div>
        </>
    )
}

export default Blog

export async function generateStaticParams(){
    const {numberPages}= await getAllBlogs()

    let paths:string[] = []

    Array.from({length:numberPages}).map((_,index)=>paths.push(`/blog/page/${index+2}`))

    return paths
}