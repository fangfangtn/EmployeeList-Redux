import { useSelector } from 'react-redux'
import '../styles/EmployeeModal.css'
import { IEmployee } from './EmployeeList'
import { RootState } from '../store/store';

type Props = {
    onClose: () => void,
    data: IEmployee
}

const EmployeeModal = (props: Props) => {
  const {onClose, data} = props
  const employees = useSelector((state: RootState) => state.employees);

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <div>
          <h3 className='font-bold my-5 text-[20px]'>Employee Data</h3>
          <div>
            <div>
              <label>First Name: {data.firstName}</label>
            </div>
            <div>
              <label>Last Name: {data.lastName}</label>
            </div>
            <div>
              <label>Email: {data.email}</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeModal