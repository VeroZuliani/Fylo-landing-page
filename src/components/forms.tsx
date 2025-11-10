import { Button } from "./button"

export const Forms = () => {
  return (
    <div className="text-center bg-Navy-850 py-14 px-6 mx-4 rounded-lg absolute top-[-200px] left-0 md:w-[520px] md:left-1/2 md:-translate-x-1/2 md:m-0 xl:w-[790px] xl:mt-10">
        <h1 className="text-lg font-bold mb-4">Get early access today</h1>
        <p className="text-[0.9rem] mb-4 xl:px-8 xl:mb-10">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>

        <form className="flex flex-col xl:flex-row xl:items-center xl:justify-between xl:mx-3"> 
            <input className="my-4 bg-White rounded-3xl h-12 text-gray-500 placeholder:text-gray-400 text-sm px-6 focus:outline-none xl:w-[490px]" type="email" name="email" placeholder="email@example.com"/>
           
            <Button text="Get Started For Free"/>
        </form>
    </div>
  )
}
