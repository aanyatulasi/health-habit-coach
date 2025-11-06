import { Button } from "../components/ui/Button"
import { Card } from "../components/ui/Card"
import { Stat } from "../components/ui/Stat"

export default function UiKitchen(){
  return (
    <section>
      <h2>UI Kitchen</h2>
      <Card title="Buttons">
        <Button>Primary</Button>{" "}
        <Button variant="ghost">Ghost</Button>
      </Card>
      <Card title="Stats">
        <Stat label="Water (ml)" value={1200}/>
        <Stat label="Steps" value={5800}/>
      </Card>
    </section>
  )
}
