interface IconMedia{
    icon: string;
    alt: string;
}

const iconMedia: IconMedia[] = [
    {
        icon: "/images/facebook-f-brands-solid.svg",
        alt: "icon facebook",
    },
    {
        icon: "/images/twitter-brands-solid.svg",
        alt: "icon twitter",
    },
    {
        icon: "/public/images/instagram-brands-solid.svg",
        alt: "icon instagram",
    },
]

export const FooterIconMedia = () => {
  return (

    <div className="flex justify-center gap-4 mt-10">
        {
            iconMedia.map(({icon, alt} : IconMedia) => (
                
                <div className="flex size-10 border rounded-full p-1 justify-center items-center hover:text-teal-200 cursor-pointer">
                    <img className="size-[18px]" src={icon} alt={alt} />
                </div>

            ))
        }
    </div>

  )
}



