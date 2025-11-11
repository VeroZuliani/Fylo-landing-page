
interface Features{
    img: string;
    title: string;
    descripcion: string;
}

const features : Features[] = [
    {
        img:"/images/icon-access-anywhere.svg",
        title:"Access your files, anywhere",
        descripcion:"The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    },
    {
        img:"/images/icon-security.svg",
        title:"Security you can trust",
        descripcion:"2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
    },
    {
        img:"/images/icon-collaboration.svg",
        title:"Real-time collaboration",
        descripcion:"Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
    },
    {
        img:"/public/images/icon-any-file.svg",
        title:"Store any type of file",
        descripcion:"Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    },
]

export const Features = () => {
  return (
    <div className="grid grid-cols-1 gap-20 mt-[140px] md:grid-cols-2 max-w-[960px] mx-auto">
        {
            features.map(({img, title, descripcion}: Features) =>(
                <div key={title} className="flex flex-col items-center text-center px-6">
                    <img src={img} alt={title} />
                    <div>
                        <h3 className="font-Raleway font-bold mb-2 mt-8">{title}</h3>
                        <p>{descripcion}</p>
                    </div> 
                </div>
            ))
        }
    </div>
  )
}
