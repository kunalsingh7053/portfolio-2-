import React from 'react'
import { motion } from 'framer-motion'
import { SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiReact, SiRedux, SiNodedotjs, SiExpress, SiMongodb, SiGit, SiGithub, SiFramer, SiGoogle, SiGoogledrive } from 'react-icons/si'

const groups = [
  {title:'Frontend', items:[
    {name:'HTML', icon: SiHtml5, color:'text-orange-500'},
    {name:'CSS', icon: SiCss3, color:'text-sky-500'},
    {name:'TailwindCSS', icon: SiTailwindcss, color:'text-teal-400'},
    {name:'JavaScript', icon: SiJavascript, color:'text-amber-400'},
    {name:'React.js', icon: SiReact, color:'text-sky-400'},
    {name:'Redux Toolkit', icon: SiRedux, color:'text-violet-400'},
    {name:'EJS', icon: null, color:''},
    {name:'Progressive Web Apps', icon: null, color:''},
  ]},
  {title:'Backend', items:[
    {name:'NodeJS', icon: SiNodedotjs, color:'text-green-500'},
    {name:'Express.js', icon: SiExpress, color:'text-slate-500'},
    {name:'MongoDB', icon: SiMongodb, color:'text-green-600'},
    {name:'Socket.IO', icon: null, color:''},
    {name:'Pinecone', icon: null, color:''},
  ]},
  {title:'Tools & Other', items:[
    {name:'Git / GitHub', icon: SiGithub, color:'text-slate-600 dark:text-slate-400'},
    {name:'Google API', icon: SiGoogle, color:'text-blue-500'},
    {name:'Google Drive', icon: SiGoogledrive, color:'text-blue-600'},
    {name:'Google auth', icon: null, color: ''},
    {name:'Payment Gateway', icon: null, color: ''},
    {name:'Hosting', icon: null, color:''},
    {name:'DSA', icon: null, color:''},
    {name:'Framer Motion', icon: SiFramer, color:'text-purple-400'},
  ]},
]

function SkillPill({item}){
  const Icon = item.icon
  return (
    <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 text-sm shadow-sm" title={item.name}>
      {Icon ? <Icon className={`${item.color} w-4 h-4`} /> : null}
      <span className="whitespace-nowrap text-slate-800 dark:text-slate-100">{item.name}</span>
    </span>
  )
}

export default function Skills(){
  return (
    <section id="skills" className="mt-10">
      <h3 className="text-xl font-semibold mb-4">Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {groups.map(g=> (
          <motion.div key={g.title} className="glass p-4 rounded-xl" whileHover={{scale:1.02}}>
            <h4 className="font-semibold">{g.title}</h4>
            <div className="mt-3 flex flex-wrap gap-3">
              {g.items.map(i=> <SkillPill key={i.name} item={i} />)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
