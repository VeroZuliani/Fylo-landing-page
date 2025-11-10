interface Props{
    item: string;
}


export const FooterListItem = ({item} : Props) => {
  return (
    <li className="mb-3 xl:m-0 xl:mb-3">
        <a className="hover:text-teal-200" href="#">{item}</a>
    </li>
  )
}
