import { Button } from "./button"

export const Forms = () => {
  return (
    <div className="text-center bg-Navy-850 py-14 px-6 mx-4 rounded-lg absolute top-[-200px] left-0">
        <h1 className="text-lg font-bold mb-4">Get early access today</h1>
        <p className="text-[0.9rem] mb-4">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>

        <form className="flex flex-col">
            <input className="my-8 bg-White rounded-3xl h-12 text-gray-500 placeholder:text-gray-400 text-sm px-6 focus:outline-none" type="email" name="email" placeholder="email@example.com"/>
           
            <Button text="Get Started For Free"/>
        </form>
    </div>
  )
}
