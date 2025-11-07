
interface Contact{
    icon: string;
    alt: string;
    text: string;
}

const contact : Contact[] = [
    {
        icon: "/images/icon-location.svg",
        alt: "icon location",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
        icon: "/images/icon-phone.svg",
        alt: "icon phone",
        text: "+1-543-123-4567",
    },
    {
        icon: "/images/icon-email.svg",
        alt: "icon email",
        text: "example@fylo.com",
    },
]

export const Contact = () => {
  return (
    <div>
        {
            contact.map(({icon, alt, text} : Contact ) => (
                <div className=" flex mb-4 px-6">
                    <img className="mr-4 mt-1 w-5 h-5" src={icon} alt={alt} />
                    <p>{text}</p>
                </div>   
            ))
        } 

    </div>
  )
}
