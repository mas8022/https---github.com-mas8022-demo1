import React from 'react'
import './Card.css'
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

export default function Carding(props) {

  return (
    <div className='carding'>
      <img className='imageCard' src={props.image} alt="courseImage" />
      <div className="describeCard">
        <div className="topDescribeCard">
          <p className='masterName'>{props.masterName}({props.courseName})</p>
          <p className="numberStudent">{props.studentsNumber}</p>
          <PersonIcon className='personIcons' style={{fontSize: 36}} />
        </div>
        <hr className='cartHr' />
        <div className="bottomDescribeCard">
          <h4 className='priceCourseDash'>${props.dashPrice}</h4>
          <h4 className='priceCourse'>${props.price}</h4>
          <Link onClick={() => window.scrollTo(0, 0)} to={`/ShowCourse/:${props.courseName}`} className='link'><div className="seeCourseBtn">See</div></Link>
        </div>

      </div>
    </div>
  )
}
