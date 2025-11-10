interface Props{
    text: string;
    styles?: string;
}


export const Button = ({text, styles=''}: Props) => {
  
  return (

    <button className={`${styles} bg-linear-to-b from-Teal-200 to-Cyan-500 rounded-3xl h-12 cursor-pointer hover:to-Teal-200 xl:px-6`}>
        {text}
    </button>

  )
}
