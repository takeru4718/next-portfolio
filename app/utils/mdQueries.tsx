import fs from "fs"
import path from "path"
import matter from "gray-matter"

export const blogsPerPage=5

interface Props{
    params:{
        slug: string;
    };
    searchParams:Record<string, any>;
}

export async function getAllBlogs(){
    //dataフォルダへアクセスし、そのデータをfilesに格納する
    const files = fs.readdirSync(path.join("data"))
    
    //dataのファイル内容読み込み
    const blogs=files.map((fileName)=>{

        const slug = fileName.replace(".md","")

        const fileData = fs.readFileSync(
            path.join("data",fileName),
            "utf-8"
        )
        
        const {data} = matter(fileData)
        return{
            frontmatter:data,
            slug:slug,
        }
    })

    const orderdBlogs=blogs.sort((a,b)=>{
        return b.frontmatter.id-a.frontmatter.id
    })

    const numberPages = Math.ceil(orderdBlogs.length/blogsPerPage)

    return{
        blogs:orderdBlogs,
        numberPages: numberPages
    }
}

export async function getSingleBlog(context: Props){
    const {slug} = context.params
    const data  = await import(`../../data/${slug}.md`)
    const singleDocument = matter(data.default)

    return{
        singleDocument: singleDocument
    };
}