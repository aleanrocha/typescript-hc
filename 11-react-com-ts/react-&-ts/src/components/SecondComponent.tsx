
interface Props {
  name: string
}

const SecondComponent = (prop: Props) => {
  return (
    <div>
      <h3>O nome do indivíduo é {prop.name}</h3>
    </div>
  )
}

export default SecondComponent