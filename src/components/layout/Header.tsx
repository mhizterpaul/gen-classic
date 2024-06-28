import Button from '../utilities/Button'

const Nav = ()=>{
    return (
        <nav className="flex gap-x-10 w-full rounded-lg">
            <a href="/" className="text-cgreen text-2xl ">indise.</a>
            <ul className="flex gap-x-6 text-cprimary [&_a]:align-middle [&_a]:inline-block [&_a]:mt-2 ">
                <li><a href="/about">Product</a></li>
                <li><a href="/services">Project</a></li>
                <li><a href="/contact">Community</a></li>
                <li><a href="/contact">AboutUs</a></li>
                <li className=' '><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024" className='h-full '><path fill="currentColor" d="m795.904 750.72l124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704a352 352 0 0 0 0 704"></path></svg></li>
            </ul>
            <Button color= "black" text="get started" backgroundColor= "#bab2ca" outline={false}/>
        </nav>   
    )
}

export default Nav

