// import './OneSkill.css'

// function OneSkill({skill_name ,skill_image } : any) {
//   return (
//     <div className='oneskill-component rounded-4 py-4 px-3 my-5 'style={{backgroundImage:`linear-gradient(90deg, var(--black) 0%, var(--black) 60%, var(--skills-gradient) 100%) ,no-repeat right 40%/40% url(${skill_image})`
//         }} >
//         <p className='skill-name fw-medium'>
//             {skill_name}
//         </p>
//         {/* <img src={skill_image} alt={skill_name} /> */}
//     </div>
//   )
// }

// export default OneSkill

import './OneSkill.css'

function OneSkill({skill_name ,skill_image } : any) {
  return (
    <div className='oneskill-component rounded-4 py-4 px-3 my-5 ' >
        <p className='skill-name fw-medium'>
            {skill_name}
        </p>
        <img src={skill_image} alt={skill_name} />
    </div>
  )
}

export default OneSkill

