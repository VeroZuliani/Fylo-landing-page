interface Testimonials{
    descripcion: string;
    img: string;
    name: string;
    role: string;
}

const testimonials : Testimonials[] = [
    {
        descripcion:"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
        img:"/images/profile-1.jpg",
        name:"Satish Patel",
        role:"Founder & CEO, Huddle",
    },
    {
        descripcion:"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
        img:"/images/profile-2.jpg",
        name:"Bruce McKenzie",
        role:"Founder & CEO, Huddle",
    },
    {
        descripcion:"Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
        img:"/images/profile-3.jpg",
        name:"Iva Boyd",
        role:"Founder & CEO, Huddle",
    },
]



export const Testimonials = () => {
  return (
    <div className="flex items-center justify-center">
        <div className="mt-[140px] relative pb-80 md:w-[480px] xl:flex xl:flex-row xl:w-[960px]">
            <img className="w-6 absolute -top-5 left-8 xl:w-10 xl:left-1 xl:-top-6" src="/images/bg-quotes.png" alt="quotes" />
            {
                testimonials.map(({descripcion, img, name, role} : Testimonials) => (
                    <div key={name} className="mb-10 bg-Navy-800 rounded-sm mx-7 py-6 xl:mx-3 xl:z-1" >
                        
                        <p className=" text-xs px-6 mb-4">{descripcion}</p>
                        
                        <div className="flex gap-2 px-6">
                            <img className="rounded-full size-8" src={img} alt="" />
                            <div>
                                <h3 className="text-[0.8rem] font-bold">{name}</h3>
                                <p className="text-xs">{role}</p>    
                            </div>
                        </div>

                    </div>
                ))

            }

        </div>
    </div>
  )
}

