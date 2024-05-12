import './OneSkill.css'

type TOneSkillProps= {
  skill_name: string;
  skill_image: string;
}

function OneSkill(props: TOneSkillProps) {

  const { skill_name, skill_image } = props;

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

