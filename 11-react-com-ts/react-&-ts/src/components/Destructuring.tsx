
interface Props {
  title: string
  content: string
  commentsQty: number
  tags: string[]
}

const Destructuring = ({ title, content, commentsQty, tags }: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Comentários: {commentsQty}</p>
      <h4>Tags</h4>
      <ul>
        {tags.map((tag, i) => (
          <li key={i}>
            {tag}
          </li>
        ))}
      </ul>
      
    </div>
  )
}

export default Destructuring