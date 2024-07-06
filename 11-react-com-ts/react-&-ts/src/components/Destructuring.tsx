
interface Props {
  title: string
  content: string
  commentsQty: number
  tags: string[]
  // ENUM
  category: Category
}

// eslint-disable-next-line react-refresh/only-export-components
export enum Category {
  // utilize as chaves em maiúsculas
  TS = 'TypeScript',
  JS = 'JavaScript',
  PY = 'Python'
}

const Destructuring = ({ title, content, commentsQty, tags, category }: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Comentários: {commentsQty}</p>
      <p>Categoria: {category}</p>
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