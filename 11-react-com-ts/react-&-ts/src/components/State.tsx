import { ChangeEvent, useState } from 'react'

export const State = () => {
  const [sum, setSum] = useState<number>(0)
  const [text, setText] = useState<string | null>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <div>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 20 ,marginBottom: 30}}>
        <span>Número: {sum}</span>
        <button onClick={() => setSum(sum+1)}>CLICK</button>
      </div>
      <div  style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 20}}>
        <label>Texto: {text}</label>
        <input type="text" onChange={handleChange} />
      </div>
    </div>
  )
}
