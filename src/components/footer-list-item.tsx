interface Props{
    item: string;
}


export const FooterListItem = ({item} : Props) => {
  return (
    <li className="my-3">
        <a className="hover:text-teal-200" href="#">{item}</a>
    </li>
  )
}
