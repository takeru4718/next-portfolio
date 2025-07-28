import BackHomeButton from '../components/BackHomeButton'

export const metadata={
    title: "コンタクト",
    description:"これはコンタクトページです",
}

const Contact=()=>{
    return(
        <>
            <div className="wrapper py-28 pb-40">
                <div className="container mx-auto px-6 lg:max-w-3xl lg:px-0">
                    <BackHomeButton label="ホームに戻る" href="/"/>
                    <h1 className="font-medium text-4xl mb-0">Contact</h1>
                    <p>お気軽にご連絡ください</p>
                    <form action="https://formspree.io/f/xoqgnjoy" method="POST">
                        <label className="text-lg" htmlFor="name">お名前</label>
                        <input type="text" className="w-full p-2 mb-4 border border-gray-300 rounded" name="name" id="name" required/>
                        <label className="text-lg" htmlFor="email">メールアドレス</label>
                        <input type="email" className="w-full p-2 mb-4 border border-gray-300 rounded" name="email" id="email" required/>
                        <label className="text-lg" htmlFor="textarea">ご用件</label>
                        <textarea name="message" className="w-full p-2 mb-4 border border-gray-300 rounded" rows={10} id="textarea" required></textarea>
                        <button className="w-full bg-red-500 text-white py-2 px-4 rounded-lg transition duration-400 hover:opacity-80 cursor-pointer focus:outline-none" type="submit">送信</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact