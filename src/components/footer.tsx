import { Contact } from "./contact"
import { FooterIconMedia } from "./footer-icon-media"
import { FooterListItem } from "./footer-list-item"

const listItem: string[] = [
    "About Us",
    "Jobs",
    "Press",
    "Blog",
]

const condition: string[] = [
    "Contact Us",
    "Terms",
    "Privacy",
]


export const Footer = () => {
  return (
    <footer className="pt-[300px] pb-10">
        <img className="px-6 mb-10 md:ml-10" src="/images/logo.svg" alt="logo" />

        <div className="xl:flex">
        <Contact/>  
        
        <div className="gap-15 md:flex md:flex-row md:justify-center xl:m-0">
            <div className="flex flex-col gap-8 mt-10 px-6 md:flex-row md:gap-20 xl:m-0">
                <ul>
                    {
                        listItem.map((listItem : string) => (
                            <FooterListItem key={listItem} item={listItem}/>
                        ))
                    }
                </ul>

                <ul>
                    {
                        condition.map((condition : string) => (
                            <FooterListItem key={condition} item={condition}/>
                        ))
                    }
                </ul>
            </div>

            <FooterIconMedia/>        
        </div>   
        </div>    
    </footer>
  )
}
