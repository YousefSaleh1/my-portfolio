import { TSkillItem } from '../../types/type';
import './OneSkill.css'

function OneSkill(props: TSkillItem) {

  const { item, image } = props;

  return (
    <div className='oneskill-component rounded-4 py-4 px-3 my-5 ' >
      <p className='skill-name fw-medium'>
        {item}
      </p>
      <img src={image} alt={item} loading="lazy" />
    </div>
  )
}

export default OneSkill

