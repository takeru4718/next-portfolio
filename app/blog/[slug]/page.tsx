import Image from 'next/image'
import ReactMarkdown from "react-markdown"
import {getAllBlogs,getSingleBlog} from "../../utils/mdQueries"
import PrevNext from '../../components/prevNext'

interface Props{
    params:{
        slug: string;
    };
    searchParams:Record<string, any>;
}

export async function generateMetadata(props:Props){
    const {singleDocument}=await getSingleBlog(props)

    return{
        title:singleDocument.data.title,
        description: singleDocument.data.excerpt,
    }
}

const SingeleBlog=async(props: Props)=>{
    const {singleDocument} = await getSingleBlog(props)
    const {blogs}=await getAllBlogs()
    const prev = blogs.filter(blog=>blog.frontmatter.id===singleDocument.data.id-1)
    const next = blogs.filter(blog=>blog.frontmatter.id===singleDocument.data.id+1)
    return(
        <>
            <div className="img-container text-center max-w-6xl mx-auto">
                <Image className="w-full h-full object-cover" src={singleDocument.data.image} alt="blog-image" height={500} width={1000} quality={90} priority={true} />
            </div>
            <div className="wrapper py-28 pb-40 md:pt-2">
                <div className="container mx-auto px-6 lg:max-w-3xl lg:px-0">
                    <h1 className="font-medium text-4xl mb-0">{singleDocument.data.title}</h1>
                    <p>{singleDocument.data.date}</p>
                    <a href={"https://github.com/takeru4718/" + singleDocument.data.link} className="inline-block px-8 py-2 bg-red-500 text-white rounded-md text-lg">githubへ</a>
                    <ReactMarkdown>{singleDocument.content}</ReactMarkdown>
                </div>
                <PrevNext prev={prev} next={next}/>
            </div>
        </>
    )
}

export default SingeleBlog

//登録したいslugを書く
export async function generateStaticParams(){

    const {blogs} = await getAllBlogs()
    const paths = blogs.map((blog)=>`/${blog.slug}`)
    return paths
}