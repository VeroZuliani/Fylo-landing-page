import { Contact } from "./contact"
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
    <div className="pt-[300px]">
        <img className="px-6 mb-10" src="/images/logo.svg" alt="logo" />

        <Contact/>

        <div className="flex flex-col gap-8 mt-10 px-6">
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
        

    </div>
  )
}
