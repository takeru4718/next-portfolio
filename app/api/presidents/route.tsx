import {NextResponse} from 'next/server'

const data=[
    {name:"Joe Biden",period:"2021-"},
    {name:"Donald Trump",period:"2017-2021"},
    {name:"Barak Obama",period:"2009-2017"},
]

export async function GET(request:any){
    return NextResponse.json(data)
}