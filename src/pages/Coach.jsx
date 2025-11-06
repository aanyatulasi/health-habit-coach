import { useEffect, useMemo, useState } from "react"
import { save, load, clear } from "../data/persist"
import { getDailyTips } from "../ai/tips"
import { Card } from "../components/ui/Card"
import { Button } from "../components/ui/Button"

const KEY = "coach.state.v1"

export default function Coach(){
  const [goals, setGoals] = useState(()=> load(KEY+".goals", { waterMl: 1800, steps: 6000 }))
  const [entry, setEntry] = useState(()=> load(KEY+".entry", { waterMl: 0, steps: 0, mood: "😐" }))
  const [tips, setTips] = useState([])

  // seed demo
  useEffect(()=>{
    const url = new URL(location.href);
    if(url.searchParams.get("demo")==="1"){
      const demoGoals = { waterMl: 1500, steps: 5000 }
      const demoEntry = { waterMl: 900, steps: 3200, mood: "🙂" }
      setGoals(demoGoals); setEntry(demoEntry);
      save(KEY+".goals", demoGoals); save(KEY+".entry", demoEntry);
    }
  },[])

  useEffect(()=>{
    save(KEY+".goals", goals)
    save(KEY+".entry", entry)
  },[goals, entry])

  const advice = useMemo(()=> getDailyTips({
    waterMl: entry.waterMl, steps: entry.steps, mood: entry.mood, goals
  }), [goals, entry])

  return (
    <section>
      <h2>Coach</h2>

      <Card title="1) Set Goals">
        <label>Water (ml): <input type="number" value={goals.waterMl}
          onChange={e=> setGoals(g=> ({...g, waterMl: Number(e.target.value)}))}/></label>{" "}
        <label>Steps: <input type="number" value={goals.steps}
          onChange={e=> setGoals(g=> ({...g, steps: Number(e.target.value)}))}/></label>
      </Card>

      <Card title="2) Track">
        <img src="/images/water.png" width="64" alt="water"/>&nbsp;
        <input type="number" value={entry.waterMl}
          onChange={e=> setEntry(en=> ({...en, waterMl: Number(e.target.value)}))}/>
        <br/><br/>
        <img src="/images/steps.png" width="64" alt="steps"/>&nbsp;
        <input type="number" value={entry.steps}
          onChange={e=> setEntry(en=> ({...en, steps: Number(e.target.value)}))}/>
        <br/><br/>
        <img src="/images/mood.png" width="64" alt="mood"/>&nbsp;
        <select value={entry.mood} onChange={e=> setEntry(en=> ({...en, mood: e.target.value}))}>
          <option>🙂</option><option>😐</option><option>🙁</option>
        </select>
      </Card>

      <Card title="3) Insights">
        <ul>{advice.map((t,i)=> <li key={i}>{t}</li>)}</ul>
        <Button onClick={()=> { clear(KEY+".goals"); clear(KEY+".entry"); location.reload() }}>Reset</Button>
      </Card>
    </section>
  )
}
